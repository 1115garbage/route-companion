import { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { calculateDistanceMeters, calculateBearing, calculateDistanceToPolylineMeters } from './navigationService';
import { triggerHaptic } from './voiceAndHaptics';

export interface GpsLocation {
  lat: number;
  lon: number;
  accuracy: number;
  speed: number | null; // mph
  heading: number | null;
  timestamp: number;
}

export interface UseGpsTrackerReturn {
  location: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentMeters: number | null;
  distanceToCurrentFeet: number | null;
  isWithinGeofence: boolean;
  isWithinArrivalConfirmZone: boolean;
  isConfirmedArrival: boolean;
  isSharedLocationWithPrevious: boolean;
  isSharedLocationWithNext: boolean;
  autoArrivalStatus: string;
  arrivalRadiusMeters: number;
  arrivalConfirmFeet: number;
  arrivalConfirmMeters: number;
  isPassedWithoutCompletion: boolean;
  // Full Route Simulation Engine
  isSimulatingGps: boolean;
  isSimPaused: boolean;
  simSpeedMultiplier: number;
  startFullRouteSimulation: (startStopIndex?: number, speedMultiplier?: number) => void;
  pauseSimulation: () => void;
  resumeSimulation: () => void;
  setSimulationSpeed: (multiplier: number) => void;
  restartSimulation: () => void;
  stopGpsSimulation: () => void;
  // Legacy simulation helpers
  simulateApproachAndPass: () => void;
  simulateApproachAndArrive: () => void;
  simulateCurbsidePassThrough: () => void;
  diagLogs: string[];
}

// Configurable constants and safeguards
export const DEFAULT_ARRIVAL_RADIUS_METERS = 152.4; // 500 feet proximity evaluation window
export const DEFAULT_ARRIVAL_CONFIRM_METERS = 95.0; // 310 feet arrival confirmation threshold (~95m, accommodates 70-300ft setbacks)
const MAX_ACCURACY_THRESHOLD_METERS = 30.0; // Filter out inaccurate GPS drift (> 100 ft)
const COOLDOWN_MS = 5000; // Minimum time between auto-advances (5 seconds)
const PASSING_DISTANCE_INCREASE_METERS = 18.0; // Distance must expand by 18m (~60ft) from closest point to confirm vehicle passed

/**
 * Validate latitude and longitude coordinates
 */
export function isValidCoordinate(lat: number, lon: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180 &&
    !(lat === 0 && lon === 0)
  );
}

/**
 * Calculates whether the straight line path between two consecutive GPS fixes
 * passed within radiusMeters of destination coordinates.
 */
export function checkSegmentPassesPoint(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  destLat: number,
  destLon: number,
  radiusMeters: number
): { passed: boolean; minDistance: number; t: number } {
  const latRad = (destLat * Math.PI) / 180;
  const cosLat = Math.cos(latRad);
  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * cosLat;

  const x1 = (lon1 - destLon) * mPerDegLon;
  const y1 = (lat1 - destLat) * mPerDegLat;
  const x2 = (lon2 - destLon) * mPerDegLon;
  const y2 = (lat2 - destLat) * mPerDegLat;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;

  if (lenSq === 0) {
    const d = Math.sqrt(x1 * x1 + y1 * y1);
    return { passed: d <= radiusMeters, minDistance: d, t: 0 };
  }

  const t = -(x1 * dx + y1 * dy) / lenSq;

  if (t > 0 && t < 1) {
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;
    const minDistance = Math.sqrt(projX * projX + projY * projY);
    return { passed: minDistance <= radiusMeters, minDistance, t };
  }

  const d1 = Math.sqrt(x1 * x1 + y1 * y1);
  const d2 = Math.sqrt(x2 * x2 + y2 * y2);
  const minDistance = Math.min(d1, d2);
  return { passed: minDistance <= radiusMeters, minDistance, t };
}

export function useGpsTracker(
  currentStop: RouteStop | null,
  previousStop: RouteStop | null,
  nextStop: RouteStop | null,
  onAutoAdvance: () => void,
  arrivalRadiusMeters: number = DEFAULT_ARRIVAL_RADIUS_METERS,
  arrivalConfirmMeters: number = DEFAULT_ARRIVAL_CONFIRM_METERS,
  roadRemainingMeters?: number | null,
  routeCoordinates?: [number, number][],
  allStops?: RouteStop[],
  onJumpToStop?: (index: number) => void,
  onResetProgress?: () => void,
  onSimulationStart?: () => void,
  onExitSimulation?: () => void
): UseGpsTrackerReturn {
  const [location, setLocation] = useState<GpsLocation | null>(null);
  const [gpsStatus, setGpsStatus] = useState<'acquiring' | 'locked' | 'denied'>('acquiring');
  const [gpsErrorMsg, setGpsErrorMsg] = useState<string | null>(null);
  const [arrivalStateDesc, setArrivalStateDesc] = useState<string>('Monitoring GPS');
  const [isPassedWithoutCompletion, setIsPassedWithoutCompletion] = useState<boolean>(false);

  const [isConfirmedArrival, setIsConfirmedArrival] = useState<boolean>(false);

  // Full Route Simulation state
  const [isSimulatingGps, setIsSimulatingGps] = useState(false);
  const [isSimPaused, setIsSimPaused] = useState(false);
  const [simSpeedMultiplier, setSimSpeedMultiplier] = useState(1);
  const simIntervalRef = useRef<number | null>(null);
  const isSimulatingGpsRef = useRef(false);
  const isSimPausedRef = useRef(false);
  const simSpeedMultiplierRef = useRef(1);
  const simPolylineIdxRef = useRef(0);
  const simSegProgressRef = useRef(0);
  const isDwellRef = useRef(false);
  const dwellRemainingMsRef = useRef(0);
  const lastSimTickTimeRef = useRef(Date.now());
  const simLocationRef = useRef<GpsLocation | null>(null);
  const lastSimStopIdRef = useRef<string | null>(null);

  // Safeguard & Tracking Refs
  const minDistanceSeenRef = useRef<number>(Infinity);
  const enteredArrivalZoneRef = useRef<boolean>(false);
  const consecutiveInsideCountRef = useRef<number>(0);
  const consecutiveCloseCountRef = useRef<number>(0);
  const consecutivePassCountRef = useRef<number>(0);
  const consecutiveMissedCountRef = useRef<number>(0);
  const lastLocationRef = useRef<GpsLocation | null>(null);
  const lastDistanceRef = useRef<number | null>(null);
  const lastAdvanceTimestampRef = useRef<number>(0);
  const lastAdvancedStopIdRef = useRef<string | null>(null);
  const isAdvancingRef = useRef<boolean>(false);
  const departurePendingRef = useRef<boolean>(false);
  const activeStopIdRef = useRef<string | null>(null);
  const advancedStopIdsSetRef = useRef<Set<string>>(new Set());

  // Test Drive Diagnostic Logs
  const [diagLogs, setDiagLogs] = useState<string[]>([]);
  const addDiagLog = useCallback((msg: string) => {
    const time = new Date().toLocaleTimeString();
    const entry = `[${time}] ${msg}`;
    console.log(`[TestDriveDiag] ${entry}`);
    setDiagLogs((prev) => [entry, ...prev.slice(0, 49)]);
  }, []);

  // Keep stable refs to latest props to prevent watchPosition re-binding
  const currentStopRef = useRef(currentStop);
  currentStopRef.current = currentStop;

  const previousStopRef = useRef(previousStop);
  previousStopRef.current = previousStop;

  const nextStopRef = useRef(nextStop);
  nextStopRef.current = nextStop;

  const onAutoAdvanceRef = useRef(onAutoAdvance);
  onAutoAdvanceRef.current = onAutoAdvance;

  const arrivalRadiusRef = useRef(arrivalRadiusMeters);
  arrivalRadiusRef.current = arrivalRadiusMeters;

  const arrivalConfirmMetersRef = useRef(arrivalConfirmMeters);
  arrivalConfirmMetersRef.current = arrivalConfirmMeters;

  const roadRemainingMetersRef = useRef(roadRemainingMeters);
  roadRemainingMetersRef.current = roadRemainingMeters;

  const routeCoordinatesRef = useRef(routeCoordinates);
  const isAwaitingNewRouteRef = useRef(false);
  const routeWaitStartTimeRef = useRef(0);

  useEffect(() => {
    routeCoordinatesRef.current = routeCoordinates;
    if (routeCoordinates && routeCoordinates.length >= 2) {
      isAwaitingNewRouteRef.current = false;
      simPolylineIdxRef.current = 0;
      simSegProgressRef.current = 0;
    }
  }, [routeCoordinates]);

  const allStopsRef = useRef(allStops);
  allStopsRef.current = allStops;

  const onJumpToStopRef = useRef(onJumpToStop);
  onJumpToStopRef.current = onJumpToStop;

  const onResetProgressRef = useRef(onResetProgress);
  onResetProgressRef.current = onResetProgress;

  const onSimulationStartRef = useRef(onSimulationStart);
  onSimulationStartRef.current = onSimulationStart;

  const onExitSimulationRef = useRef(onExitSimulation);
  onExitSimulationRef.current = onExitSimulation;

  // Shared location check (within 25m of previous/next stop - handles multi-unit properties like 6633 Laraway Rd Apt A & Apt B)
  const isSharedLocationWithPrevious = Boolean(
    currentStop &&
    previousStop &&
    isValidCoordinate(currentStop.lat, currentStop.lon) &&
    isValidCoordinate(previousStop.lat, previousStop.lon) &&
    calculateDistanceMeters(currentStop.lat, currentStop.lon, previousStop.lat, previousStop.lon) < 25
  );

  const isSharedLocationWithNext = Boolean(
    currentStop &&
    nextStop &&
    isValidCoordinate(currentStop.lat, currentStop.lon) &&
    isValidCoordinate(nextStop.lat, nextStop.lon) &&
    calculateDistanceMeters(currentStop.lat, currentStop.lon, nextStop.lat, nextStop.lon) < 25
  );

  const isSharedLocationWithPreviousRef = useRef(isSharedLocationWithPrevious);
  isSharedLocationWithPreviousRef.current = isSharedLocationWithPrevious;

  // Reset tracking state whenever the active customer changes
  useEffect(() => {
    const newStopId = currentStop?.id || null;
    if (newStopId !== activeStopIdRef.current) {
      activeStopIdRef.current = newStopId;
      minDistanceSeenRef.current = Infinity;
      enteredArrivalZoneRef.current = false;
      consecutiveInsideCountRef.current = 0;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
      consecutiveMissedCountRef.current = 0;
      lastDistanceRef.current = null;
      lastLocationRef.current = null;
      isAdvancingRef.current = false;
      setIsPassedWithoutCompletion(false);

      // Handle multiple customers at the same property/coordinates (e.g. Stop 21 & Stop 22):
      // The driver is already physically at this property from previous delivery!
      // Do NOT set departurePending, do NOT require driving away, and mark arrived immediately.
      if (isSharedLocationWithPreviousRef.current) {
        departurePendingRef.current = false;
        setIsConfirmedArrival(true);
        setArrivalStateDesc(`At property · Shared Address: ${currentStop?.name || 'Customer'}`);
        return;
      }

      setIsConfirmedArrival(false);

      // If driver is currently inside arrival radius of the NEW stop at activation (and not a shared address),
      // require departure/movement before allowing auto-advance.
      if (
        location &&
        currentStop &&
        isValidCoordinate(currentStop.lat, currentStop.lon)
      ) {
        const d = calculateDistanceMeters(location.lat, location.lon, currentStop.lat, currentStop.lon);
        if (d <= arrivalRadiusRef.current) {
          departurePendingRef.current = true;
        } else {
          departurePendingRef.current = false;
        }
      } else {
        departurePendingRef.current = false;
      }
    }
  }, [currentStop?.id]);

  /**
   * Core Arrival & Missed Stop Decision Engine
   * Evaluates current GPS location against verified coordinates of currentStop.
   * Separates 500-foot proximity window from confirmed arrival at the customer address.
   */
  const processLocationUpdate = useCallback((currentLoc: GpsLocation) => {
    const activeStop = currentStopRef.current;
    if (!activeStop) {
      setArrivalStateDesc('No Active Route');
      return;
    }

    // 1. Verify Destination Coordinates
    if (!isValidCoordinate(activeStop.lat, activeStop.lon)) {
      setArrivalStateDesc('Invalid Destination Coordinates (Manual Skip)');
      return;
    }

    // 2. Reject stale updates (> 4.5s old)
    if (Date.now() - currentLoc.timestamp > 4500) {
      return;
    }

    // 3. Filter out inaccurate GPS readings (> 30m error)
    if (currentLoc.accuracy > MAX_ACCURACY_THRESHOLD_METERS) {
      setArrivalStateDesc(`GPS Accuracy ±${Math.round(currentLoc.accuracy * 3.28084)} ft (Refining...)`);
      return;
    }

    const proximityRadius = arrivalRadiusRef.current || DEFAULT_ARRIVAL_RADIUS_METERS; // 500 ft proximity window
    const baseConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS; // 95m / 310 ft
    const distToDestination = calculateDistanceMeters(
      currentLoc.lat,
      currentLoc.lon,
      activeStop.lat,
      activeStop.lon
    );
    const feetToDestination = Math.round(distToDestination * 3.28084);

    // Track minimum distance seen for this active stop
    if (distToDestination < minDistanceSeenRef.current) {
      minDistanceSeenRef.current = distToDestination;
    }

    const prevLoc = lastLocationRef.current;
    const prevDist = lastDistanceRef.current;
    const now = Date.now();

    // Check if path segment between prevLoc and currentLoc passed closer to verified customer coordinates
    // Strictly require that prevLoc and currentLoc are consecutive location updates (displacement < 75m)
    // to prevent any multi-mile segment from triggering false proximity
    if (prevLoc && isValidCoordinate(prevLoc.lat, prevLoc.lon)) {
      const displacement = calculateDistanceMeters(prevLoc.lat, prevLoc.lon, currentLoc.lat, currentLoc.lon);
      if (displacement < 75.0) {
        const segCheck = checkSegmentPassesPoint(
          prevLoc.lat,
          prevLoc.lon,
          currentLoc.lat,
          currentLoc.lon,
          activeStop.lat,
          activeStop.lon,
          baseConfirmRadius
        );
        if (segCheck.passed && segCheck.minDistance < minDistanceSeenRef.current) {
          minDistanceSeenRef.current = segCheck.minDistance;
        }
      }
    }

    // 4. Prevent immediate cascade / double advance
    if (isAdvancingRef.current) return;
    if (now - lastAdvanceTimestampRef.current < COOLDOWN_MS) return;
    if (lastAdvancedStopIdRef.current === activeStop.id) return;

    // 5. Shared Location Handling (Multi-unit building or shared entrance e.g. Stop 21 & Stop 22)
    if (isSharedLocationWithPreviousRef.current) {
      departurePendingRef.current = false;
      // Confirm arrival immediately for shared address delivery
      setIsConfirmedArrival(true);
      setArrivalStateDesc(`At property · ${activeStop.name}`);
      lastLocationRef.current = currentLoc;
      lastDistanceRef.current = distToDestination;
      return;
    }

    // 6. Departure Latch (if activated while already near the stop from a non-shared previous stop)
    if (departurePendingRef.current) {
      if (distToDestination > proximityRadius * 1.1) {
        departurePendingRef.current = false;
      } else if (now - lastAdvanceTimestampRef.current > 8000) {
        departurePendingRef.current = false;
      } else {
        setArrivalStateDesc('Departing Previous Stop...');
        return;
      }
    }

    // 7. Parallel Road Rejection (Avoid triggering arrival when driving on an adjacent parallel road)
    const roadDist = roadRemainingMetersRef.current;
    if (roadDist !== undefined && roadDist !== null && roadDist > Math.max(proximityRadius * 2.0, 150)) {
      setArrivalStateDesc(`Parallel Road / Route Distance ${Math.round(roadDist * 3.28084)} ft`);
      return;
    }

    if (routeCoordinatesRef.current && routeCoordinatesRef.current.length > 1) {
      const distToPolyline = calculateDistanceToPolylineMeters(currentLoc.lat, currentLoc.lon, routeCoordinatesRef.current);
      // If vehicle has drifted > 38m (~125 ft) from delivery street polyline while distToDestination > 35m:
      if (distToPolyline > 38.0 && distToDestination > 35.0) {
        setArrivalStateDesc(`Parallel Road · ${feetToDestination} ft to customer`);
        return;
      }
    }

    // Calculate inter-fix displacement and effective speed (in mph)
    const displacementMeters = (prevLoc && isValidCoordinate(prevLoc.lat, prevLoc.lon))
      ? calculateDistanceMeters(prevLoc.lat, prevLoc.lon, currentLoc.lat, currentLoc.lon)
      : null;
    const timeDeltaSec = prevLoc ? Math.max(0.4, (currentLoc.timestamp - prevLoc.timestamp) / 1000) : 1.0;
    const computedSpeedMph = displacementMeters !== null ? (displacementMeters / timeDeltaSec) * 2.23694 : null;
    const effectiveSpeedMph = currentLoc.speed !== null ? currentLoc.speed : computedSpeedMph;
    const isStationaryOrCrawl = effectiveSpeedMph === null || effectiveSpeedMph <= 15.0;

    // Dynamic Arrival Confirmation Threshold:
    // Accounts for rural and suburban property setbacks (70-300 ft / 21-91m).
    // Base is 95m (~310 ft). If vehicle is stopped (0 mph) or moving at delivery crawl (<= 15 mph),
    // expands up to 105m (~345 ft) to guarantee recognition at long setback driveways.
    const effectiveConfirmZone = isStationaryOrCrawl
      ? Math.max(baseConfirmRadius, 105.0)
      : Math.max(baseConfirmRadius, Math.min(baseConfirmRadius + 15.0, currentLoc.accuracy * 1.5));

    const isInsideConfirmZone = distToDestination <= effectiveConfirmZone;
    
    // Actively closing distance at high cruising road speed towards the house (> 20 mph):
    const isClosingDistanceAtSpeed = prevDist !== null
      && distToDestination < prevDist - 2.0
      && effectiveSpeedMph !== null
      && effectiveSpeedMph > 20.0;

    // Moving away from destination:
    const isMovingAway = prevDist !== null && distToDestination > prevDist + 1.5;

    let isReliablyArrived = false;
    let arrivalReason = '';

    // ========================================================
    // ARRIVAL DETECTION (Separated from 500-ft Proximity Window)
    // Does NOT require a complete stop (speed zero).
    // Recognizes curbside delivery, driveway stops, and rolling passes.
    // ========================================================

    // Case 1: Curbside / Driveway Presence (within effective confirmation zone)
    // Recognizes arrival whether vehicle is stopped (0 mph), crawling, or rolling past at normal delivery speed (<= 25 mph).
    if (isInsideConfirmZone) {
      if (isClosingDistanceAtSpeed && distToDestination > 30.0) {
        // Vehicle is still approaching at high cruising speed towards the house: wait until closest approach
        consecutiveCloseCountRef.current = 0;
        setArrivalStateDesc(`Approaching customer: ${feetToDestination} ft`);
      } else {
        // Vehicle is at address: stopped, crawling, or rolling past at delivery speed (<= 25 mph)
        consecutiveCloseCountRef.current += 1;
        // Require 2 consecutive reliable GPS fixes within confirmation threshold (does not require complete stop)
        if (consecutiveCloseCountRef.current >= 2) {
          isReliablyArrived = true;
          arrivalReason = `At customer address (${feetToDestination} ft)`;
        } else {
          setArrivalStateDesc(`At address (${feetToDestination} ft, confirming...)`);
        }
      }
    } else {
      consecutiveCloseCountRef.current = 0;
    }

    // Case 2: Pass-Through Arrival (Rolled past address within closest approach threshold at delivery pace <= 25 mph)
    // Vehicle came within closest approach threshold (minDistanceSeen <= effectiveConfirmZone)
    // and is now moving past the customer in the immediate vicinity (distToDestination <= 95m)
    if (!isReliablyArrived && minDistanceSeenRef.current <= effectiveConfirmZone && distToDestination <= 95.0) {
      const hasPassedMin = distToDestination >= minDistanceSeenRef.current + 4.0;
      const isDeliveryPace = effectiveSpeedMph === null || effectiveSpeedMph <= 25.0;

      // Heading or displacement check: destination is behind vehicle
      const bearingToDest = calculateBearing(currentLoc.lat, currentLoc.lon, activeStop.lat, activeStop.lon);
      let isBehindVehicle = true;
      if (currentLoc.heading !== null) {
        const diff = Math.abs(currentLoc.heading - bearingToDest);
        const normalizedDiff = diff > 180 ? 360 - diff : diff;
        isBehindVehicle = normalizedDiff > 65;
      } else if (prevDist !== null) {
        isBehindVehicle = distToDestination > prevDist;
      }

      if (hasPassedMin && isMovingAway && isBehindVehicle && isDeliveryPace) {
        consecutivePassCountRef.current += 1;
        if (consecutivePassCountRef.current >= 2) {
          isReliablyArrived = true;
          arrivalReason = `Passed customer address (${Math.round(minDistanceSeenRef.current * 3.28084)} ft min)`;
        }
      } else {
        consecutivePassCountRef.current = 0;
      }
    } else {
      consecutivePassCountRef.current = 0;
    }

    // Absolute Distance Ceiling Safeguard:
    // Completing a turn, passing an intersection, recalculating a route, or reaching a nearby road
    // must NEVER count as arrival at that customer. Arrival can NEVER be declared if vehicle is > 120m (~400 ft) away!
    if (isReliablyArrived && distToDestination > 120.0) {
      isReliablyArrived = false;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
    }

    // Case 3: Still Approaching the House within the 500-ft Proximity Window
    // If vehicle is approaching outside the confirmation zone, keep tracking
    if (!isReliablyArrived && distToDestination <= proximityRadius && !isInsideConfirmZone) {
      setArrivalStateDesc(`Approaching customer: ${feetToDestination} ft`);
    }

    // Case 4: Genuinely Missed Destination
    // Strict multi-condition check to prevent false turnaround triggers:
    // 1) Vehicle is NOT inside confirmation zone
    // 2) Vehicle was within proximity window (minDistanceSeenRef.current <= proximityRadius)
    // 3) Vehicle is now well past and outside the confirmation zone (> 120m / 400+ ft away)
    // 4) Distance has expanded substantially from closest approach (> 60m / 200+ ft expansion)
    // 5) Vehicle is moving at road cruising speed (> 15 mph) heading away from customer
    // 6) Inconclusive evidence -> continue tracking, NEVER declare missed prematurely!
    if (!isReliablyArrived && !isInsideConfirmZone && minDistanceSeenRef.current <= proximityRadius) {
      const isWellPastCustomer = distToDestination > 120.0; // > 400 ft away
      const isExpandingSignificantly = distToDestination >= minDistanceSeenRef.current + 60.0; // > 200 ft expansion
      const isCruisingSpeed = effectiveSpeedMph !== null && effectiveSpeedMph > 15.0;

      const bearingToDest = calculateBearing(currentLoc.lat, currentLoc.lon, activeStop.lat, activeStop.lon);
      let headingPointsAway = false;
      if (currentLoc.heading !== null) {
        const diff = Math.abs(currentLoc.heading - bearingToDest);
        const normalizedDiff = diff > 180 ? 360 - diff : diff;
        headingPointsAway = normalizedDiff > 75;
      } else if (prevDist !== null) {
        headingPointsAway = distToDestination > prevDist + 2.0;
      }

      if (isWellPastCustomer && isExpandingSignificantly && isCruisingSpeed && (isMovingAway || headingPointsAway)) {
        consecutiveMissedCountRef.current += 1;
        if (consecutiveMissedCountRef.current >= 4) {
          setIsPassedWithoutCompletion(true);
          setArrivalStateDesc(`Missed stop (${feetToDestination} ft) · Recalculating...`);
          lastLocationRef.current = currentLoc;
          lastDistanceRef.current = distToDestination;
          return;
        }
      } else {
        consecutiveMissedCountRef.current = 0;
      }
    } else {
      consecutiveMissedCountRef.current = 0;
    }

    // ========================================================
    // EXECUTE CONFIRMED ARRIVAL
    // ========================================================
    if (isReliablyArrived) {
      if (isSimulatingGpsRef.current) {
        // In simulation mode, tickSimulation manages the arrival dwell and single authoritative advance
        return;
      }
      if (advancedStopIdsSetRef.current.has(activeStop.id)) {
        return;
      }
      advancedStopIdsSetRef.current.add(activeStop.id);
      addDiagLog(`Live GPS Arrival: Stop ${activeStop.id} arrived via ${arrivalReason}`);
      isAdvancingRef.current = true;
      lastAdvanceTimestampRef.current = now;
      lastAdvancedStopIdRef.current = activeStop.id;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
      minDistanceSeenRef.current = Infinity;
      setIsPassedWithoutCompletion(false);
      setIsConfirmedArrival(true);

      setArrivalStateDesc(`Arrived: ${arrivalReason}`);
      triggerHaptic('complete');
      onAutoAdvanceRef.current();

      setTimeout(() => {
        setIsConfirmedArrival(false);
      }, 3000);
      return;
    }

    // General navigation tracking outside 500ft window
    if (distToDestination > proximityRadius) {
      setArrivalStateDesc(`${feetToDestination} ft to customer (Window: ${Math.round(proximityRadius * 3.28084)} ft)`);
    }

    lastLocationRef.current = currentLoc;
    lastDistanceRef.current = distToDestination;
  }, []);

  // Mount native Android GPS watcher
  useEffect(() => {
    if (typeof window === 'undefined' || !('geolocation' in navigator)) {
      setGpsStatus('denied');
      setGpsErrorMsg('GPS hardware not supported by this browser.');
      return;
    }

    setGpsStatus('acquiring');

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        if (isSimulatingGpsRef.current) return;

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const accuracy = pos.coords.accuracy || 8;
        const speed = pos.coords.speed !== null && pos.coords.speed >= 0
          ? Math.round(pos.coords.speed * 2.23694)
          : null;
        const heading = pos.coords.heading !== null && !isNaN(pos.coords.heading)
          ? pos.coords.heading
          : null;

        const currentLoc: GpsLocation = {
          lat,
          lon,
          accuracy,
          speed,
          heading,
          timestamp: pos.timestamp || Date.now(),
        };

        setLocation(currentLoc);
        setGpsStatus('locked');
        setGpsErrorMsg(null);

        processLocationUpdate(currentLoc);
      },
      (err) => {
        if (isSimulatingGpsRef.current) return;
        setGpsStatus('denied');
        setGpsErrorMsg(err.message || 'GPS hardware access denied.');
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => {
      try {
        navigator.geolocation.clearWatch(watchId);
      } catch (e) {}
    };
  }, [processLocationUpdate, isSimulatingGps]);

  // Clean up any running simulation on unmount
  useEffect(() => {
    return () => {
      if (simIntervalRef.current) {
        window.clearInterval(simIntervalRef.current);
      }
    };
  }, []);

  /**
   * Continuous Full Route Simulation Engine
   * Smoothly navigates the actual road polyline from stop to stop,
   * modulates speed (cruise vs curbside), tests turnarounds, dwells at customers,
   * and auto-advances until the complete delivery route is finished.
   */
  const tickSimulation = useCallback(() => {
    if (!isSimulatingGpsRef.current) return;

    const now = Date.now();
    const dt = Math.min(0.25, Math.max(0.04, (now - lastSimTickTimeRef.current) / 1000));
    lastSimTickTimeRef.current = now;

    if (isSimPausedRef.current) {
      return;
    }

    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) {
      if (simIntervalRef.current) {
        window.clearInterval(simIntervalRef.current);
        simIntervalRef.current = null;
      }
      setIsSimulatingGps(false);
      isSimulatingGpsRef.current = false;
      setArrivalStateDesc('Full Route Simulation Completed!');
      return;
    }

    // Detect customer stop transition
    if (activeStop.id !== lastSimStopIdRef.current) {
      lastSimStopIdRef.current = activeStop.id;
      isDwellRef.current = false;
      dwellRemainingMsRef.current = 0;
      isAwaitingNewRouteRef.current = true;
      routeWaitStartTimeRef.current = now;
      routeCoordinatesRef.current = [];
      simPolylineIdxRef.current = 0;
      simSegProgressRef.current = 0;
      setIsConfirmedArrival(false);
      setIsPassedWithoutCompletion(false);

      // Multi-unit property with identical coordinates (e.g. 6633 Laraway Rd Apt A & Apt B)
      if (isSharedLocationWithPreviousRef.current) {
        isAwaitingNewRouteRef.current = false;
        isDwellRef.current = true;
        dwellRemainingMsRef.current = 2400;
        const sharedLoc: GpsLocation = {
          lat: activeStop.lat,
          lon: activeStop.lon,
          accuracy: 2.5,
          speed: 0,
          heading: simLocationRef.current?.heading || 0,
          timestamp: now,
        };
        simLocationRef.current = sharedLoc;
        setLocation(sharedLoc);
        processLocationUpdate(sharedLoc);
        return;
      }
    }

    // Stop Dwell phase (vehicle pulled over at customer address)
    if (isDwellRef.current) {
      dwellRemainingMsRef.current -= (dt * 1000) * simSpeedMultiplierRef.current;

      if (dwellRemainingMsRef.current <= 0) {
        isDwellRef.current = false;

        // Check if this was the last stop on the route
        if (allStopsRef.current && allStopsRef.current.length > 0) {
          const currentIdx = allStopsRef.current.findIndex((s) => s.id === activeStop.id);
          if (currentIdx !== -1 && currentIdx >= allStopsRef.current.length - 1) {
            // Reached final customer of route
            if (simIntervalRef.current) {
              window.clearInterval(simIntervalRef.current);
              simIntervalRef.current = null;
            }
            setIsSimulatingGps(false);
            isSimulatingGpsRef.current = false;
            setArrivalStateDesc('Full Route Simulation Completed!');
            return;
          }
        }

        // Auto-advance to the next customer stop (strictly once per stop!)
        if (!advancedStopIdsSetRef.current.has(activeStop.id)) {
          advancedStopIdsSetRef.current.add(activeStop.id);
          addDiagLog(`Sim Arrival: Stop ${activeStop.id} dwell completed -> advancing`);
          onAutoAdvanceRef.current();
        }
      } else {
        // Emit 0 mph stopped location at customer
        if (simLocationRef.current) {
          const stoppedLoc: GpsLocation = {
            ...simLocationRef.current,
            speed: 0,
            timestamp: now,
          };
          setLocation(stoppedLoc);
          processLocationUpdate(stoppedLoc);
        }
      }
      return;
    }

    // Awaiting new route calculation from the vehicle's current position to the new stop
    if (isAwaitingNewRouteRef.current) {
      if (now - routeWaitStartTimeRef.current > 3500) {
        // Fallback safeguard if routing takes longer than 3.5s
        isAwaitingNewRouteRef.current = false;
      } else {
        if (simLocationRef.current) {
          const waitingLoc: GpsLocation = {
            ...simLocationRef.current,
            speed: 0,
            timestamp: now,
          };
          setLocation(waitingLoc);
          processLocationUpdate(waitingLoc);
        }
        return;
      }
    }

    // Active Driving phase along real road polyline
    const poly = routeCoordinatesRef.current;
    let curLat: number;
    let curLon: number;
    let curHeading = simLocationRef.current?.heading || 0;

    if (poly && poly.length >= 2) {
      let pIdx = simPolylineIdxRef.current;

      // Reached destination endpoint
      if (pIdx >= poly.length - 1) {
        const [destLon, destLat] = poly[poly.length - 1];
        curLat = destLat;
        curLon = destLon;
        const [prevLon, prevLat] = poly[Math.max(0, poly.length - 2)];
        curHeading = calculateBearing(prevLat, prevLon, curLat, curLon);

        const distToEndToDest = calculateDistanceMeters(curLat, curLon, activeStop.lat, activeStop.lon);
        const baseConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS;
        const effectiveConfirmZone = Math.max(baseConfirmRadius, 105.0);

        // ONLY initiate arrival if vehicle has reached within arrival confirmation zone of customer coordinates!
        // Completing a maneuver, passing an intersection, or reaching an intermediate polyline end must NEVER count as arrival if still miles/hundreds of feet away!
        if (distToEndToDest <= effectiveConfirmZone) {
          const arrivedLoc: GpsLocation = {
            lat: curLat,
            lon: curLon,
            accuracy: 2.5,
            speed: 0,
            heading: curHeading,
            timestamp: now,
          };
          simLocationRef.current = arrivedLoc;
          setLocation(arrivedLoc);
          processLocationUpdate(arrivedLoc);

          // Initiate arrival dwell
          isDwellRef.current = true;
          dwellRemainingMsRef.current = 2200;
          return;
        } else {
          // Intermediate route end reached while still away from customer (e.g. turnaround point or partial route):
          // Keep vehicle holding along current road, do NOT declare arrival or auto-advance!
          const intermediateLoc: GpsLocation = {
            lat: curLat,
            lon: curLon,
            accuracy: 2.5,
            speed: 0,
            heading: curHeading,
            timestamp: now,
          };
          simLocationRef.current = intermediateLoc;
          setLocation(intermediateLoc);
          processLocationUpdate(intermediateLoc);
          return;
        }
      }

      // Calculate target driving speed:
      // 32 mph cruise along road, slowing to 18 mph / 11 mph approaching customer curbside
      const [ptLon, ptLat] = poly[pIdx];
      const distToDest = calculateDistanceMeters(ptLat, ptLon, activeStop.lat, activeStop.lon);
      let targetSpeedMph = 32;
      if (distToDest < 35) {
        targetSpeedMph = 11;
      } else if (distToDest < 85) {
        targetSpeedMph = 18;
      }

      const speedMps = (targetSpeedMph * 0.44704) * simSpeedMultiplierRef.current;
      const distanceStep = speedMps * dt;
      let remainingStep = distanceStep;

      while (remainingStep > 0 && pIdx < poly.length - 1) {
        const [lon0, lat0] = poly[pIdx];
        const [lon1, lat1] = poly[pIdx + 1];
        const segDist = calculateDistanceMeters(lat0, lon0, lat1, lon1);
        const segDistLeft = segDist * (1 - simSegProgressRef.current);

        if (remainingStep < segDistLeft && segDist > 0.01) {
          simSegProgressRef.current += remainingStep / segDist;
          remainingStep = 0;
          curLat = lat0 + (lat1 - lat0) * simSegProgressRef.current;
          curLon = lon0 + (lon1 - lon0) * simSegProgressRef.current;
          curHeading = calculateBearing(lat0, lon0, lat1, lon1);
        } else {
          remainingStep -= segDistLeft;
          pIdx += 1;
          simPolylineIdxRef.current = pIdx;
          simSegProgressRef.current = 0;
          curLat = lat1;
          curLon = lon1;
          if (pIdx < poly.length - 1) {
            const [nextLon, nextLat] = poly[pIdx + 1];
            curHeading = calculateBearing(lat1, lon1, nextLat, nextLon);
          } else {
            curHeading = calculateBearing(lat0, lon0, lat1, lon1);
          }
        }
      }

      const simLoc: GpsLocation = {
        lat: curLat!,
        lon: curLon!,
        accuracy: 2.5,
        speed: targetSpeedMph,
        heading: curHeading,
        timestamp: now,
      };
      simLocationRef.current = simLoc;
      setLocation(simLoc);
      processLocationUpdate(simLoc);

    } else {
      // Polyline loading from OSRM:
      if (!simLocationRef.current) {
        // Initial simulation start: initialize near first stop approach
        const mPerDegLat = 111132.92;
        simLocationRef.current = {
          lat: activeStop.lat - (200 / mPerDegLat),
          lon: activeStop.lon,
          accuracy: 2.5,
          speed: 0,
          heading: 0,
          timestamp: now,
        };
      }
      const cur = simLocationRef.current;
      // Hold position on the road at speed 0 awaiting the road route from OSRM
      // Never straight-line interpolate across buildings or declare premature arrival!
      const holdLoc: GpsLocation = {
        ...cur,
        speed: 0,
        timestamp: now,
      };
      simLocationRef.current = holdLoc;
      setLocation(holdLoc);
      processLocationUpdate(holdLoc);
    }
  }, [processLocationUpdate]);

  /**
   * Start Full Route Simulation from specified stop (defaults to Stop 1 / index 0)
   * Places vehicle at an authentic road approach location, not right on the doorstep at 32 MPH.
   */
  const startFullRouteSimulation = useCallback((startStopIndex: number = 0, speedMultiplier: number = 1) => {
    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    onSimulationStartRef.current?.();

    const targetIdx = startStopIndex !== undefined ? startStopIndex : 0;
    if (startStopIndex !== undefined && onJumpToStopRef.current) {
      onJumpToStopRef.current(targetIdx);
    }

    const mult = speedMultiplier || 1;
    simSpeedMultiplierRef.current = mult;
    setSimSpeedMultiplier(mult);

    isSimulatingGpsRef.current = true;
    setIsSimulatingGps(true);
    isSimPausedRef.current = false;
    setIsSimPaused(false);

    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    simPolylineIdxRef.current = 0;
    simSegProgressRef.current = 0;
    isDwellRef.current = false;
    dwellRemainingMsRef.current = 0;
    lastSimStopIdRef.current = null;
    lastSimTickTimeRef.current = Date.now();
    advancedStopIdsSetRef.current.clear();

    // Determine realistic starting vehicle position along the approach road
    const stopsList = allStopsRef.current || [];
    const targetStop = stopsList[targetIdx] || currentStopRef.current;

    if (targetStop && isValidCoordinate(targetStop.lat, targetStop.lon)) {
      let approachLat: number;
      let approachLon: number;
      let initialHeading: number;

      if (targetIdx > 0 && stopsList[targetIdx - 1]) {
        // Continue from previous customer's position
        const prevPt = stopsList[targetIdx - 1];
        approachLat = prevPt.lat;
        approachLon = prevPt.lon;
        initialHeading = calculateBearing(prevPt.lat, prevPt.lon, targetStop.lat, targetStop.lon);
      } else {
        // Starting Stop 1: calculate approach along road towards Stop 1
        const secondStop = stopsList[targetIdx + 1];
        if (secondStop && isValidCoordinate(secondStop.lat, secondStop.lon)) {
          const dLat = secondStop.lat - targetStop.lat;
          const dLon = secondStop.lon - targetStop.lon;
          const dist = calculateDistanceMeters(targetStop.lat, targetStop.lon, secondStop.lat, secondStop.lon);
          if (dist > 25) {
            // Approach vector ~350m back from opposite direction
            const mPerDegLat = 111132.92;
            const mPerDegLon = 111412.84 * Math.cos((targetStop.lat * Math.PI) / 180);
            approachLat = targetStop.lat - (dLat / dist) * (350 / mPerDegLat) * mPerDegLat;
            approachLon = targetStop.lon - (dLon / dist) * (350 / mPerDegLon) * mPerDegLon;
            initialHeading = calculateBearing(approachLat, approachLon, targetStop.lat, targetStop.lon);
          } else {
            approachLat = targetStop.lat + 0.0035;
            approachLon = targetStop.lon;
            initialHeading = 180;
          }
        } else {
          approachLat = targetStop.lat + 0.0035;
          approachLon = targetStop.lon;
          initialHeading = 180;
        }
      }

      const initialLoc: GpsLocation = {
        lat: approachLat,
        lon: approachLon,
        accuracy: 2.5,
        speed: 28,
        heading: initialHeading,
        timestamp: Date.now(),
      };
      simLocationRef.current = initialLoc;
      setLocation(initialLoc);
      processLocationUpdate(initialLoc);
    } else {
      simLocationRef.current = null;
    }

    simIntervalRef.current = window.setInterval(tickSimulation, 100);
  }, [tickSimulation, processLocationUpdate]);

  const pauseSimulation = useCallback(() => {
    isSimPausedRef.current = true;
    setIsSimPaused(true);
    if (simLocationRef.current) {
      const pausedLoc: GpsLocation = {
        ...simLocationRef.current,
        speed: 0,
        timestamp: Date.now(),
      };
      simLocationRef.current = pausedLoc;
      setLocation(pausedLoc);
    }
  }, []);

  const resumeSimulation = useCallback(() => {
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    lastSimTickTimeRef.current = Date.now();
  }, []);

  const setSimulationSpeed = useCallback((multiplier: number) => {
    simSpeedMultiplierRef.current = multiplier;
    setSimSpeedMultiplier(multiplier);
  }, []);

  const restartSimulation = useCallback(() => {
    if (onJumpToStopRef.current) {
      onJumpToStopRef.current(0);
    } else if (onResetProgressRef.current) {
      onResetProgressRef.current();
    }
    simPolylineIdxRef.current = 0;
    simSegProgressRef.current = 0;
    isDwellRef.current = false;
    dwellRemainingMsRef.current = 0;
    lastSimStopIdRef.current = null;
    simLocationRef.current = null;
    lastSimTickTimeRef.current = Date.now();
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    advancedStopIdsSetRef.current.clear();
  }, []);

  const stopGpsSimulation = useCallback(() => {
    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }
    isSimulatingGpsRef.current = false;
    setIsSimulatingGps(false);
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    simLocationRef.current = null;
    lastSimStopIdRef.current = null;
    lastLocationRef.current = null;
    minDistanceSeenRef.current = Infinity;
    isAdvancingRef.current = false;
    onExitSimulationRef.current?.();
  }, []);

  /**
   * Interactive Simulator 1: Quick Curbside Stop single-step test
   */
  const simulateApproachAndArrive = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -130, speed: 25 },
      { offset: -75, speed: 20 },
      { offset: -36, speed: 12 },
      { offset: -23, speed: 2 },
      { offset: -23, speed: 0 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon;

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 3,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1100);
  }, [processLocationUpdate]);

  /**
   * Interactive Simulator 2: Curbside Pass-Through Delivery (rolls past at ~10 mph)
   */
  const simulateCurbsidePassThrough = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -55, speed: 18 },
      { offset: -28, speed: 14 },
      { offset: 0, speed: 10 },
      { offset: 12, speed: 10 },
      { offset: 24, speed: 10 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon + (22 / (latMeters * Math.cos(destLat * Math.PI / 180)));

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 3,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1100);
  }, [processLocationUpdate]);

  /**
   * Interactive Simulator 3: Drive Past at 28 mph -> triggers Turnaround
   */
  const simulateApproachAndPass = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -100, speed: 28 },
      { offset: -45, speed: 28 },
      { offset: 0, speed: 28 },
      { offset: 70, speed: 28 },
      { offset: 125, speed: 28 },
      { offset: 160, speed: 28 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon + (12 / (latMeters * Math.cos(destLat * Math.PI / 180)));

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 4,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1200);
  }, [processLocationUpdate]);

  // Calculated reactive metrics for UI display
  let distanceToCurrentMeters: number | null = null;
  let distanceToCurrentFeet: number | null = null;
  let isWithinGeofence = false;
  let isWithinArrivalConfirmZone = false;

  const currentConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS;

  if (location && currentStop && isValidCoordinate(currentStop.lat, currentStop.lon)) {
    distanceToCurrentMeters = calculateDistanceMeters(location.lat, location.lon, currentStop.lat, currentStop.lon);
    distanceToCurrentFeet = Math.round(distanceToCurrentMeters * 3.28084);
    isWithinGeofence = distanceToCurrentMeters <= arrivalRadiusMeters;
    isWithinArrivalConfirmZone = distanceToCurrentMeters <= currentConfirmRadius;
  }

  let finalArrivalStatus = arrivalStateDesc;
  if (gpsStatus === 'denied') {
    finalArrivalStatus = 'GPS Disabled';
  } else if (gpsStatus === 'acquiring') {
    finalArrivalStatus = 'Acquiring Satellites...';
  } else if (isConfirmedArrival) {
    finalArrivalStatus = `Arrived at Stop (${distanceToCurrentFeet} ft)`;
  } else if (isPassedWithoutCompletion) {
    finalArrivalStatus = `Passed stop (${distanceToCurrentFeet} ft) · Recalculating...`;
  } else if (isSimulatingGps) {
    finalArrivalStatus = `Simulating Road Progress (${distanceToCurrentFeet} ft)`;
  } else if (isWithinArrivalConfirmZone) {
    finalArrivalStatus = `In delivery zone (${distanceToCurrentFeet} ft / ${Math.round(currentConfirmRadius * 3.28084)} ft)`;
  } else if (isWithinGeofence) {
    finalArrivalStatus = isSharedLocationWithPrevious
      ? 'Shared Address · Tap Skip when done'
      : `Customer nearby (${distanceToCurrentFeet} ft / ${Math.round(arrivalRadiusMeters * 3.28084)} ft window)`;
  }

  return {
    location,
    gpsStatus,
    gpsErrorMsg,
    distanceToCurrentMeters,
    distanceToCurrentFeet,
    isWithinGeofence,
    isWithinArrivalConfirmZone,
    isConfirmedArrival,
    isSharedLocationWithPrevious,
    isSharedLocationWithNext,
    autoArrivalStatus: finalArrivalStatus,
    arrivalRadiusMeters,
    arrivalConfirmFeet: Math.round(currentConfirmRadius * 3.28084),
    arrivalConfirmMeters: currentConfirmRadius,
    isPassedWithoutCompletion,
    isSimulatingGps,
    isSimPaused,
    simSpeedMultiplier,
    startFullRouteSimulation,
    pauseSimulation,
    resumeSimulation,
    setSimulationSpeed,
    restartSimulation,
    stopGpsSimulation,
    simulateApproachAndPass,
    simulateApproachAndArrive,
    simulateCurbsidePassThrough,
    diagLogs,
  };
}
