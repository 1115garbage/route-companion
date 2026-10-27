import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { GpsLocation } from '../utils/useGpsTracker';
import { 
  NavManeuver, 
  fetchOsmRoute, 
  calculateDistanceMeters, 
  calculateDistanceToPolylineMeters, 
  calculateRemainingRouteDistanceMeters,
  calculateBearing,
  formatDistance, 
  formatDuration 
} from '../utils/navigationService';
import { 
  announceTurnaround, 
  announceTurn, 
  announceAdvanceTurn,
  announceDirectTurn,
  cancelTurnAnnouncements, 
  isTurnManeuver 
} from '../utils/voiceAndHaptics';
import { 
  Compass, 
  Play, 
  Pause,
  Square, 
  RotateCcw, 
  X, 
  Info, 
  CheckCircle2, 
  Sparkles,
  CornerUpRight, 
  CornerUpLeft, 
  ArrowUp, 
  ArrowUpRight, 
  ArrowUpLeft,
  CircleDot, 
  GitFork, 
  Flag,
  Navigation,
  Activity,
  Settings as SettingsIcon
} from 'lucide-react';

function isValidCoordinate(lat: number, lon: number): boolean {
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

// ==========================================
// 1. Maneuver Icon Component with Prominent U-Turn / Turnaround
// ==========================================
export const ManeuverIconComponent: React.FC<{ type?: string; modifier?: string; className?: string }> = ({ 
  type = 'turn', 
  modifier = 'straight',
  className = 'w-10 h-10' 
}) => {
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') return <Flag className={className} />;
  if (t === 'roundabout' || t === 'rotary') return <CircleDot className={className} />;
  if (t === 'fork') return <GitFork className={className} />;
  
  // Prominent driver-grade U-turn / Turn Around symbol
  if (
    mod.includes('uturn') ||
    mod === 'uturn' ||
    mod.includes('turnaround') ||
    mod.includes('turn around') ||
    t === 'turnaround'
  ) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19V9a5 5 0 0 1 10 0v7" />
        <polyline points="6 16 9 19 12 16" />
      </svg>
    );
  }
  
  if (mod === 'sharp right') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 1 4-4h5" />
        <polyline points="18 4 21 7 18 10" />
      </svg>
    );
  }
  if (mod === 'sharp left') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 0-4-4H3" />
        <polyline points="6 4 3 7 6 10" />
      </svg>
    );
  }
  if (mod === 'slight right') return <ArrowUpRight className={className} strokeWidth={2.75} />;
  if (mod === 'slight left') return <ArrowUpLeft className={className} strokeWidth={2.75} />;
  if (mod === 'right') return <CornerUpRight className={className} strokeWidth={2.75} />;
  if (mod === 'left') return <CornerUpLeft className={className} strokeWidth={2.75} />;
  if (mod === 'straight' || t === 'continue' || t === 'depart') {
    return <ArrowUp className={className} strokeWidth={2.75} />;
  }
  return <Compass className={className} strokeWidth={2.5} />;
};

// ==========================================
// 2. Complete Turn-by-Turn Panel Component
// ==========================================
export interface TurnByTurnPanelProps {
  currentStop: RouteStop;
  previousStop?: RouteStop;
  nextStop?: RouteStop;
  userLocation: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentFeet: number | null;
  isDark: boolean;
  onOpenOsmAnd?: (e: React.MouseEvent) => void;
  arrivalRadiusMeters?: number;
  isWithinGeofence?: boolean;
  isConfirmedArrival?: boolean;
  autoArrivalStatus?: string;
  isPassedWithoutCompletion?: boolean;
  simulateApproachAndPass?: () => void;
  simulateApproachAndArrive?: () => void;
  simulateCurbsidePassThrough?: () => void;
  isSimulatingGps?: boolean;
  isSimPaused?: boolean;
  simSpeedMultiplier?: number;
  startFullRouteSimulation?: (startStopIndex?: number, speedMultiplier?: number) => void;
  pauseSimulation?: () => void;
  resumeSimulation?: () => void;
  setSimulationSpeed?: (multiplier: number) => void;
  restartSimulation?: () => void;
  stopGpsSimulation?: () => void;
  onRouteCoordinatesUpdate?: (coords: [number, number][]) => void;
  onRoadRemainingUpdate?: (meters: number | null) => void;
  onSkipCustomer?: () => void;
  voiceAnnouncement?: boolean;
  turnWarningDistancesFeet?: number[];
  onOpenSettings?: () => void;
  diagLogs?: string[];
}

export const TurnByTurnPanel: React.FC<TurnByTurnPanelProps> = ({
  currentStop,
  previousStop,
  nextStop,
  userLocation,
  distanceToCurrentFeet,
  isDark,
  arrivalRadiusMeters = 152.4,
  isWithinGeofence = false,
  isConfirmedArrival = false,
  autoArrivalStatus,
  isPassedWithoutCompletion = false,
  simulateApproachAndPass,
  simulateApproachAndArrive,
  simulateCurbsidePassThrough,
  isSimulatingGps = false,
  isSimPaused = false,
  simSpeedMultiplier = 1,
  startFullRouteSimulation,
  pauseSimulation,
  resumeSimulation,
  setSimulationSpeed,
  restartSimulation,
  stopGpsSimulation,
  onRouteCoordinatesUpdate,
  onRoadRemainingUpdate,
  onSkipCustomer,
  voiceAnnouncement = true,
  turnWarningDistancesFeet = [500, 200],
  onOpenSettings,
  diagLogs = [],
}) => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDiagModal, setShowDiagModal] = useState(false);
  const [showTestMenu, setShowTestMenu] = useState(false);
  const [selectedSimSpeed, setSelectedSimSpeed] = useState<number>(1);
  const routeRequestIdRef = useRef<number>(0);

  // Live OsmAnd AIDL feed state (from Android Kotlin wrapper)
  const [aidlUpdate, setAidlUpdate] = useState<{
    maneuver: string;
    street: string;
    distanceMeters: number;
    lastReceived: number;
  } | null>(null);

  useEffect(() => {
    (window as any).onOsmAndNavUpdate = (maneuver: string, street: string, distMeters: number) => {
      setAidlUpdate({
        maneuver: maneuver || 'straight',
        street: street || '',
        distanceMeters: typeof distMeters === 'number' ? distMeters : 0,
        lastReceived: Date.now(),
      });
    };
    return () => {
      delete (window as any).onOsmAndNavUpdate;
    };
  }, []);

  const isAidlActive = Boolean(aidlUpdate && Date.now() - aidlUpdate.lastReceived < 20000);

  // Road navigation state
  const [maneuvers, setManeuvers] = useState<NavManeuver[]>([]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [currentManeuverIndex, setCurrentManeuverIndex] = useState(0);
  const [distanceToTurnMeters, setDistanceToTurnMeters] = useState(0);
  const [totalDistanceMeters, setTotalDistanceMeters] = useState(0);
  const [remainingDistanceToCustomerMeters, setRemainingDistanceToCustomerMeters] = useState<number | null>(null);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(0);
  const [isRouting, setIsRouting] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const [rerouteBadge, setRerouteBadge] = useState<string | null>(null);

  // Tracking and Debounce Refs for recalculations
  const lastRerouteTimeRef = useRef<number>(0);
  const lastReroutePosRef = useRef<{ lat: number; lon: number } | null>(null);
  const minDistanceToDestRef = useRef<number>(Infinity);
  const currentStopIdRef = useRef<string | null>(null);
  const lastSegmentIndexRef = useRef<number>(0);
  const prevGpsPosRef = useRef<{ lat: number; lon: number } | null>(null);

  // Spoken turn maneuver tracking refs (announces each warning threshold exactly once)
  const spokenManeuverWarningsRef = useRef<Map<string, Set<string | number>>>(new Map());
  const spokenTurnaroundStopIdRef = useRef<string | null>(null);
  const routeVersionRef = useRef<string>('route_0');

  // Track previous GPS position for heading estimation when hardware heading is null
  useEffect(() => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      prevGpsPosRef.current = { lat: userLocation.lat, lon: userLocation.lon };
    }
  }, [userLocation]);

  // Determine starting point: live GPS if valid, else previous stop, else realistic approach offset
  const getStartPoint = useCallback((): { lat: number; lon: number; heading: number | null } | null => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      let heading = userLocation.heading ?? null;
      if (heading === null && prevGpsPosRef.current) {
        heading = calculateBearing(prevGpsPosRef.current.lat, prevGpsPosRef.current.lon, userLocation.lat, userLocation.lon);
      }
      return { 
        lat: userLocation.lat, 
        lon: userLocation.lon, 
        heading 
      };
    }
    if (previousStop && isValidCoordinate(previousStop.lat, previousStop.lon)) {
      return { 
        lat: previousStop.lat, 
        lon: previousStop.lon, 
        heading: null 
      };
    }
    if (currentStop && isValidCoordinate(currentStop.lat, currentStop.lon)) {
      // 0.005 deg offset (~500m) approach vector
      return { 
        lat: currentStop.lat - 0.005, 
        lon: currentStop.lon - 0.004, 
        heading: 35 
      };
    }
    return null;
  }, [userLocation, previousStop, currentStop]);

  // Primary Road Route Fetcher
  const fetchRoute = useCallback(async (customStart?: { lat: number; lon: number; heading?: number | null }, reasonTag?: string) => {
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) {
      setManeuvers([]);
      setRouteCoordinates([]);
      setRemainingDistanceToCustomerMeters(null);
      return;
    }

    const start = customStart || getStartPoint();
    if (!start) return;

    const currentRequestId = ++routeRequestIdRef.current;
    const targetStopId = currentStop.id;

    setIsRouting(true);
    setRoutingError(null);

    try {
      const currentRoad = maneuvers[currentManeuverIndex]?.streetName || currentStop.streetName;
      const route = await fetchOsmRoute(
        start.lat,
        start.lon,
        currentStop.lat,
        currentStop.lon,
        currentStop.name,
        start.heading,
        currentStop.streetName,
        currentRoad
      );

      // Verify request is still authoritative for the current stop
      if (currentRequestId !== routeRequestIdRef.current || currentStopIdRef.current !== targetStopId) {
        return;
      }

      if (route.maneuvers.length > 0) {
        cancelTurnAnnouncements();
        spokenManeuverWarningsRef.current.clear();
        routeVersionRef.current = `route_${Date.now()}`;

        setManeuvers(route.maneuvers);
        setRouteCoordinates(route.coordinates);
        if (onRouteCoordinatesUpdate) {
          onRouteCoordinatesUpdate(route.coordinates);
        }
        setCurrentManeuverIndex(0);
        lastSegmentIndexRef.current = 0;
        setTotalDistanceMeters(route.totalDistance);
        setRemainingDistanceToCustomerMeters(route.totalDistance);
        setTotalDurationSeconds(route.totalDuration);
        setDistanceToTurnMeters(route.maneuvers[0]?.distanceMeters || 0);

        lastRerouteTimeRef.current = Date.now();
        lastReroutePosRef.current = { lat: start.lat, lon: start.lon };

        if (reasonTag) {
          setRerouteBadge(reasonTag);
          setTimeout(() => setRerouteBadge(null), 5000);
        } else if (route.hasUturn) {
          setRerouteBadge('Turn Around Route Active');
          setTimeout(() => setRerouteBadge(null), 5000);
        }
      }
    } catch (err: any) {
      console.warn('Road routing error:', err);
      setRoutingError(err.message || 'Routing unavailable');
    } finally {
      setIsRouting(false);
    }
  }, [currentStop, getStartPoint, onRouteCoordinatesUpdate, maneuvers, currentManeuverIndex]);

  // Initial Route Fetch on active customer change
  useEffect(() => {
    const stopId = currentStop?.id || null;
    if (stopId !== currentStopIdRef.current) {
      currentStopIdRef.current = stopId;
      spokenTurnaroundStopIdRef.current = null;
      cancelTurnAnnouncements();
      spokenManeuverWarningsRef.current.clear();
      routeVersionRef.current = `route_${Date.now()}`;
      setCurrentManeuverIndex(0);
      lastSegmentIndexRef.current = 0;
      setRemainingDistanceToCustomerMeters(null);
      minDistanceToDestRef.current = Infinity;
      lastReroutePosRef.current = null;
      lastRerouteTimeRef.current = 0;
      setRerouteBadge(null);
      // Clear previous coordinates so simulator does not re-use previous stop's polyline
      setRouteCoordinates([]);
      onRouteCoordinatesUpdate?.([]);
      fetchRoute();
    }
  }, [currentStop?.id, currentStop?.lat, currentStop?.lon, fetchRoute, onRouteCoordinatesUpdate]);

  // Real-time Vehicle Progress & Intelligent Recalculation Engine
  useEffect(() => {
    if (!userLocation || !isValidCoordinate(userLocation.lat, userLocation.lon)) return;
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) return;

    const now = Date.now();
    const distToDest = calculateDistanceMeters(userLocation.lat, userLocation.lon, currentStop.lat, currentStop.lon);

    // Track minimum distance seen for this destination
    if (distToDest < minDistanceToDestRef.current) {
      minDistanceToDestRef.current = distToDest;
    }

    // ========================================================
    // INTELLIGENT RECALCULATION TRIGGER
    // 1. Driver passed destination without completing stop (missed stop)
    // 2. OR driver deviated significantly (> 45m) off planned route polyline
    // ========================================================
    const timeSinceLastReroute = now - lastRerouteTimeRef.current;
    const distFromLastReroute = lastReroutePosRef.current
      ? calculateDistanceMeters(userLocation.lat, userLocation.lon, lastReroutePosRef.current.lat, lastReroutePosRef.current.lon)
      : Infinity;

    // Condition A: Missed destination (authoritatively validated by GPS tracker)
    const isPassedAddress = Boolean(isPassedWithoutCompletion);

    // Condition B: Off-route deviation from polyline (> 45 meters)
    let isOffRoute = false;
    if (routeCoordinates.length > 1) {
      const distToPolyline = calculateDistanceToPolylineMeters(userLocation.lat, userLocation.lon, routeCoordinates);
      isOffRoute = distToPolyline > 45 && distToDest > 30;
    }

    // In simulation mode, prevent false off-route triggers since simulator is following road polyline
    if (isSimulatingGps) {
      isOffRoute = false;
    }

    if ((isPassedAddress || isOffRoute) && timeSinceLastReroute > 3500 && distFromLastReroute > 15 && !isRouting) {
      const reason = isPassedAddress ? 'Passed Stop · Recalculating' : 'Off-Route · Rerouting';
      minDistanceToDestRef.current = distToDest;
      let heading = userLocation.heading ?? null;
      if (heading === null && prevGpsPosRef.current) {
        heading = calculateBearing(prevGpsPosRef.current.lat, prevGpsPosRef.current.lon, userLocation.lat, userLocation.lon);
      }
      fetchRoute(
        { lat: userLocation.lat, lon: userLocation.lon, heading },
        reason
      );
      return;
    }

    // ========================================================
    // DISTANCE TO CUSTOMER COUNTDOWN (Continuous along driving route)
    // ========================================================
    if (routeCoordinates.length > 1) {
      const { remainingMeters, closestSegmentIndex } = calculateRemainingRouteDistanceMeters(
        userLocation.lat,
        userLocation.lon,
        routeCoordinates,
        lastSegmentIndexRef.current
      );
      lastSegmentIndexRef.current = closestSegmentIndex;
      setRemainingDistanceToCustomerMeters(remainingMeters);
      onRoadRemainingUpdate?.(remainingMeters);
    } else if (distanceToCurrentFeet !== null) {
      const m = Math.round(distanceToCurrentFeet / 3.28084);
      setRemainingDistanceToCustomerMeters(m);
      onRoadRemainingUpdate?.(m);
    } else {
      const m = Math.round(distToDest);
      setRemainingDistanceToCustomerMeters(m);
      onRoadRemainingUpdate?.(m);
    }

    // ========================================================
    // MANEUVER PROGRESSION ALONG ACTIVE ROUTE
    // Advance to next turn as driver approaches maneuver waypoint
    // ========================================================
    if (maneuvers.length > 0 && currentManeuverIndex < maneuvers.length) {
      const currentM = maneuvers[currentManeuverIndex];
      if (currentM) {
        const [turnLon, turnLat] = currentM.location;
        const distToWaypoint = calculateDistanceMeters(userLocation.lat, userLocation.lon, turnLat, turnLon);
        const distToWaypointFeet = Math.round(distToWaypoint * 3.28084);

        if (distToWaypoint < 25 && currentManeuverIndex < maneuvers.length - 1) {
          setCurrentManeuverIndex((idx) => idx + 1);
          const nextM = maneuvers[currentManeuverIndex + 1];
          setDistanceToTurnMeters(nextM ? nextM.distanceMeters : 0);
        } else {
          setDistanceToTurnMeters(Math.max(0, Math.round(distToWaypoint)));
        }

        // ========================================================
        // SPOKEN TURN-BY-TURN ANNOUNCEMENTS
        // Early warning (e.g. 500 ft) & turn reminder (e.g. 200 ft)
        // ========================================================
        const isManeuverTurnaround = Boolean(
          currentM.modifier?.toLowerCase().includes('uturn') ||
          currentM.type?.toLowerCase() === 'turnaround'
        );

        if (voiceAnnouncement && isTurnManeuver(currentM) && !isPassedAddress && !isManeuverTurnaround) {
          const maneuverKey = `${routeVersionRef.current}_m${currentManeuverIndex}_${turnLon.toFixed(5)},${turnLat.toFixed(5)}`;
          if (!spokenManeuverWarningsRef.current.has(maneuverKey)) {
            spokenManeuverWarningsRef.current.set(maneuverKey, new Set<string | number>());
          }
          const spokenSet = spokenManeuverWarningsRef.current.get(maneuverKey)!;
          const advanceThreshold = (turnWarningDistancesFeet && turnWarningDistancesFeet[0]) || 500;

          // 1. Advance warning at approximately 500 feet: announces maneuver and distance (e.g. "Turn left in 500 feet")
          if (distToWaypointFeet <= advanceThreshold + 60 && distToWaypointFeet >= advanceThreshold - 60) {
            if (!spokenSet.has('advance')) {
              spokenSet.add('advance');
              announceAdvanceTurn(currentM, advanceThreshold);
            }
          }

          // 2. Direct maneuver instruction at the closer point (~60 - 160 ft): short command (e.g. "Turn left"), NO distance repeated
          if (distToWaypointFeet <= 160 && distToWaypointFeet >= 60) {
            if (!spokenSet.has('direct')) {
              spokenSet.add('direct');
              announceDirectTurn(currentM);
            }
          }
        }
      }
    }
  }, [userLocation, currentStop, maneuvers, currentManeuverIndex, routeCoordinates, isPassedWithoutCompletion, isRouting, fetchRoute, distanceToCurrentFeet, voiceAnnouncement, turnWarningDistancesFeet]);

  const currentManeuver = maneuvers[currentManeuverIndex] || null;
  const nextManeuver = maneuvers[currentManeuverIndex + 1] || null;

  // Check if active customer was passed without confirmed arrival
  const distToDest = userLocation && isValidCoordinate(userLocation.lat, userLocation.lon) && isValidCoordinate(currentStop.lat, currentStop.lon)
    ? calculateDistanceMeters(userLocation.lat, userLocation.lon, currentStop.lat, currentStop.lon)
    : Infinity;

  const isCustomerPassed = Boolean(isPassedWithoutCompletion);

  // Check if customer is the last stop on the current road
  const isLastStopOnRoad = Boolean(
    currentStop && (
      !nextStop ||
      (currentStop.streetName && nextStop.streetName && currentStop.streetName.toLowerCase().trim() !== nextStop.streetName.toLowerCase().trim())
    )
  );

  // Helper to ensure clean road/street name without metadata or house numbers
  const cleanRoadName = (raw: string | undefined | null): string => {
    if (!raw) return '';
    let s = raw.trim();
    if (!s) return '';

    // 1. If string contains structured pipes e.g. "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
    if (s.includes('|') || /(?:stop\s*#?\d+|customer|address|addr)\s*:/i.test(s)) {
      const addrMatch = s.match(/(?:address|addr)\s*:\s*([^|;\n]+)/i);
      if (addrMatch) {
        s = addrMatch[1].trim();
      } else {
        const parts = s.split(/\s*\|\s*/);
        const last = parts[parts.length - 1].trim();
        s = last.replace(/^(?:address|addr)\s*:\s*/i, '').trim();
      }
    }

    // 2. Strip leading stop-sequence indicators
    s = s.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i, '').trim();

    // 3. Strip leading house number: e.g. "6589 State Route 90" -> "State Route 90"
    s = s.replace(/^(?:#|no\.?\s*)?\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?\s+(?:[NSEW]\.?\s+)?/i, '').trim();

    // 4. Strip trailing unit/apt/suite: e.g. "Laraway Rd Apt A" -> "Laraway Rd"
    s = s.replace(/,\s*(?:apt\.?|unit|ste\.?|suite|room|rm\.?)\s*#?[a-z0-9-]+$/i, '').trim();
    s = s.replace(/\s+(?:apt\.?|apartment|unit|suite|ste\.?)\s*#?[a-z0-9-]+$/i, '').trim();

    return s;
  };

  const isArrived = Boolean(isConfirmedArrival);
  const isNearDestination = distToDest <= (arrivalRadiusMeters || 152.4);

  // Check if route involves a turnaround / U-turn
  const hasTurnaroundManeuver = Boolean(
    maneuvers.some((m) => {
      const mod = (m.modifier || '').toLowerCase();
      const t = (m.type || '').toLowerCase();
      return mod.includes('uturn') || mod.includes('turnaround') || mod.includes('turn around') || t === 'turnaround';
    })
  );

  // A maneuver is a turnaround if OSRM routes a U-turn / turnaround maneuver
  const isCurrentManeuverTurnaround = Boolean(
    !isArrived &&
    currentManeuver &&
    (
      (currentManeuver.modifier || '').toLowerCase().includes('uturn') ||
      (currentManeuver.type || '').toLowerCase() === 'turnaround' ||
      currentManeuver.instruction.includes('Turn around as soon as possible.')
    )
  );

  // Turnaround is an immediate action instruction, NOT an advance warning:
  // Announce only when the vehicle has reached the point where the turnaround should begin (<= 164 ft / 50m)
  // or when the route starts at the turnaround maneuver (distance <= 50m).
  const isTurnaroundImmediate = Boolean(
    isCurrentManeuverTurnaround &&
    (distanceToTurnMeters <= 50 || (currentManeuverIndex === 0 && (currentManeuver?.distanceMeters || 0) <= 50))
  );

  // Spoken voice announcement for turnaround:
  // 1. Announce ONLY when immediately required at the turnaround point
  // 2. Announce at most once per turnaround maneuver key
  // 3. Do not announce miles in advance
  useEffect(() => {
    if (isTurnaroundImmediate && voiceAnnouncement && currentStop?.id && !isArrived) {
      const maneuverKey = `${routeVersionRef.current}_m${currentManeuverIndex}_turnaround`;
      if (!spokenManeuverWarningsRef.current.has(maneuverKey)) {
        spokenManeuverWarningsRef.current.set(maneuverKey, new Set<string | number>());
      }
      const spokenSet = spokenManeuverWarningsRef.current.get(maneuverKey)!;
      if (!spokenSet.has('immediate')) {
        spokenSet.add('immediate');
        announceTurnaround();
      }
    }
  }, [isTurnaroundImmediate, voiceAnnouncement, currentStop?.id, currentManeuverIndex, isArrived]);

  const rawStreetCandidate = isAidlActive && aidlUpdate
    ? aidlUpdate.street
    : currentManeuver?.streetName || currentStop.streetName || currentStop.fullAddress || '';
  const activeStreetName = cleanRoadName(rawStreetCandidate);

  const activeManeuverType = isAidlActive && aidlUpdate
    ? (aidlUpdate.maneuver.includes('roundabout') ? 'roundabout' : (aidlUpdate.maneuver.includes('uturn') || aidlUpdate.maneuver.includes('turnaround') ? 'turnaround' : 'turn'))
    : isCurrentManeuverTurnaround
      ? 'turnaround'
      : currentManeuver?.type || 'turn';

  const activeManeuverModifier = isAidlActive && aidlUpdate
    ? aidlUpdate.maneuver
    : isCurrentManeuverTurnaround
      ? 'uturn'
      : currentManeuver?.modifier || 'straight';

  const activeInstructionText = isAidlActive && aidlUpdate
    ? (aidlUpdate.maneuver.includes('uturn') || aidlUpdate.maneuver.includes('turnaround')
        ? 'Turn around as soon as possible.'
        : (aidlUpdate.street ? `Turn onto ${aidlUpdate.street}` : aidlUpdate.maneuver))
    : isCurrentManeuverTurnaround
      ? (isTurnaroundImmediate ? 'Turn around as soon as possible.' : (activeStreetName ? `Turn around ahead on ${activeStreetName}` : 'Turn around as soon as possible.'))
      : currentManeuver?.instruction || (activeStreetName ? `Proceed along route to ${activeStreetName}` : 'Proceed toward customer destination');

  const activeDistanceToNextTurn = isAidlActive && aidlUpdate
    ? formatDistance(aidlUpdate.distanceMeters)
    : formatDistance(distanceToTurnMeters) || '0 ft';

  const hasValidCoords = isValidCoordinate(currentStop.lat, currentStop.lon);

  const arrivalZoneFeet = Math.round((arrivalRadiusMeters || 152.4) * 3.28084);

  // Direct straight-line distance to verified customer coordinates
  const directDistanceMeters = distanceToCurrentFeet !== null && hasValidCoords
    ? distanceToCurrentFeet / 3.28084
    : distToDest;

  // Prioritize active customer's verified delivery address coordinates:
  // When further away on the road, use remaining road driving distance.
  // When approaching within the proximity window (<= 500 ft / 152.4m) or near the destination,
  // ensure the display counts down smoothly directly to verified customer coordinates (stop.lat, stop.lon),
  // preventing any premature 0ft jump or offset from OSRM road snapping points!
  const displayDistanceToCustomer = isArrived
    ? '0 ft'
    : directDistanceMeters <= (arrivalRadiusMeters || 152.4) && directDistanceMeters < Infinity
      ? formatDistance(directDistanceMeters)
      : remainingDistanceToCustomerMeters !== null
        ? formatDistance(remainingDistanceToCustomerMeters)
        : directDistanceMeters < Infinity
          ? formatDistance(directDistanceMeters)
          : totalDistanceMeters > 0
            ? formatDistance(totalDistanceMeters)
            : '0 ft';

  // Check whether an upcoming road maneuver/turn is relevant before reaching customer
  const isFinalArrivalManeuver = !currentManeuver || currentManeuver.type === 'arrive';
  const hasUpcomingTurn = !isFinalArrivalManeuver && (currentManeuverIndex < maneuvers.length - 1 || distanceToTurnMeters > 15);

  return (
    <>
      {/* 
        Substantially Taller, Full-Width Driver-Grade Turn-by-Turn Card
        - Zero text truncation (no truncate, no nowrap, no ellipses)
        - Multi-line wrap enabled for any street name length
        - High-contrast AMOLED black & amber/orange styling
        - Legal U-turn & block rerouting support
      */}
      <div 
        className={`w-full rounded-2xl border-2 transition-all shadow-xl relative mb-2 flex flex-col shrink-0 ${
          isArrived
            ? 'bg-emerald-950/95 border-emerald-400 text-white shadow-emerald-950/90'
            : isDark 
              ? 'bg-neutral-950 border-neutral-800 text-white shadow-neutral-950/95' 
              : 'bg-neutral-900 border-neutral-700 text-white shadow-neutral-500/40'
        }`}
      >
        {/* Amber accent top bar */}
        <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-t-2xl" />

        {/* 1. Compact Navigation Card Header: Garbage Route Branding & Controls */}
        <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-800/80 gap-2">
          {/* Left: Garbage Route Branding (Icon + Title) */}
          <div className="flex items-center gap-2 shrink-0">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-7 h-7 rounded-lg border border-emerald-400/60 shadow-sm shrink-0 object-cover" 
            />
            <span className="font-black text-xs sm:text-sm tracking-tight text-white leading-none">
              Garbage Route
            </span>
          </div>

          {/* Right: Simulation Controls or Test Drive Button & Settings */}
          <div className="flex items-center gap-1.5 min-w-0 justify-end">
            {rerouteBadge && (
              <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-amber-400 bg-amber-950/70 border border-amber-500/40 px-1.5 py-0.5 rounded shrink-0">
                {rerouteBadge}
              </span>
            )}

            {isSimulatingGps ? (
              /* Simulation Active Control Bar */
              <div className="flex items-center gap-1 bg-neutral-900 border border-amber-500/50 rounded-lg p-0.5 shadow-lg">
                {/* Play / Pause Toggle */}
                <button
                  onClick={() => {
                    if (isSimPaused) {
                      resumeSimulation?.();
                    } else {
                      pauseSimulation?.();
                    }
                  }}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 ${
                    isSimPaused
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
                  }`}
                  title={isSimPaused ? 'Resume Simulation' : 'Pause Simulation'}
                >
                  {isSimPaused ? (
                    <>
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-2.5 h-2.5 fill-current" />
                      <span>Pause</span>
                    </>
                  )}
                </button>

                {/* Speed Multipliers */}
                <div className="flex items-center border-l border-neutral-700 pl-1">
                  {[1, 2, 5].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setSimulationSpeed?.(spd)}
                      className={`px-1.5 py-0.5 text-[9px] font-black rounded font-mono transition-all ${
                        simSpeedMultiplier === spd
                          ? 'bg-amber-400 text-black shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                      title={`Set Simulation Speed to ${spd}x`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* Restart from Stop 1 */}
                <button
                  onClick={() => restartSimulation?.()}
                  className="p-1 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                  title="Restart from Stop 1"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </button>

                {/* Diagnostics Modal Toggle */}
                <button
                  onClick={() => setShowDiagModal(true)}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-sky-400 border border-sky-500/40 transition-all active:scale-95"
                  title="Open Test Drive Navigation Diagnostics"
                >
                  <Activity className="w-2.5 h-2.5" />
                  <span>Diag</span>
                </button>

                {/* Stop / Exit */}
                <button
                  onClick={() => stopGpsSimulation?.()}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600/80 hover:bg-red-600 text-white transition-all active:scale-95"
                  title="Stop Test Drive & Exit Simulation"
                >
                  <Square className="w-2 h-2 fill-current" />
                  <span>Exit</span>
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowTestMenu((v) => !v)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-700 transition-all active:scale-95 shadow-sm"
                  title="Open Test Drive simulation menu"
                >
                  <Play className="w-2.5 h-2.5 fill-current text-amber-400" />
                  <span>TEST DRIVE</span>
                </button>

                {/* Test Drive Dropdown Menu */}
                {showTestMenu && (
                  <div className="absolute left-0 top-full mt-1.5 w-64 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-2 z-40 space-y-2 animate-in fade-in zoom-in-95 duration-150">
                    {/* Speed Selection */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      <span>Sim Speed:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 5].map((spd) => (
                          <button
                            key={spd}
                            type="button"
                            onClick={() => setSelectedSimSpeed(spd)}
                            className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                              selectedSimSpeed === spd
                                ? 'bg-amber-400 text-black'
                                : 'bg-neutral-800 text-neutral-300 hover:text-white'
                            }`}
                          >
                            {spd}x
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Full Route Simulation Options */}
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          if (startFullRouteSimulation) {
                            startFullRouteSimulation(0, selectedSimSpeed);
                          }
                        }}
                        className="w-full text-left p-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-500/30 text-white transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-amber-300">
                            <Play className="w-3.5 h-3.5 fill-current text-amber-400 shrink-0" />
                            <span>Start Drive from Stop 1</span>
                          </div>
                          <span className="text-[9px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-black uppercase font-mono">
                            Full Route
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-0.5 pl-5">
                          Simulates complete route along roads to the last customer.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          if (startFullRouteSimulation) {
                            startFullRouteSimulation(undefined, selectedSimSpeed);
                          }
                        }}
                        className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-bold text-neutral-200 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>Continue from Current Stop</span>
                        </div>
                      </button>
                    </div>

                    {/* Single Stop Quick Tests */}
                    <div className="pt-1.5 border-t border-neutral-800 space-y-1">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 px-1">
                        Single-Stop Quick Tests
                      </div>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateApproachAndArrive?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>Curbside Stop</span>
                        </div>
                        <span className="text-[9px] text-neutral-500 font-mono">2 mph</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateCurbsidePassThrough?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>Curbside Pass-Through</span>
                        </div>
                        <span className="text-[9px] text-cyan-400 font-mono">10 mph</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateApproachAndPass?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <RotateCcw className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>Miss Stop & Reroute</span>
                        </div>
                        <span className="text-[9px] text-amber-400 font-mono">28 mph</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Info Modal Button & Settings Gear */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setShowStatusModal(true)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                title="Navigation details & instructions"
              >
                <Info className="w-4 h-4" />
              </button>
              {onOpenSettings && (
                <button
                  onClick={onOpenSettings}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  title="Settings & Route Options"
                  aria-label="Settings"
                >
                  <SettingsIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Primary Customer Guidance Section: Maneuver Arrow + Large DISTANCE TO CUSTOMER */}
        <div className="px-3 py-2 flex items-center justify-between gap-3 border-b border-neutral-800/60">
          {/* Maneuver Arrow Container */}
          <div 
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 border-2 shadow-lg transition-all ${
              isArrived
                ? 'bg-emerald-500 border-emerald-300 text-black shadow-emerald-500/50'
                : isAidlActive
                  ? 'bg-emerald-500/25 border-emerald-400 text-emerald-400'
                  : 'bg-amber-400 border-amber-300 text-black shadow-amber-400/20'
            }`}
          >
            {isArrived ? (
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[3] text-black" />
            ) : (
              <ManeuverIconComponent 
                type={activeManeuverType}
                modifier={activeManeuverModifier}
                className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.75]" 
              />
            )}
          </div>

          {/* Large Hero: DISTANCE TO CUSTOMER with secondary next turn indicator */}
          <div className="flex-1 text-right min-w-0">
            <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-400 font-mono mb-0.5">
              {isArrived ? 'ARRIVED AT CUSTOMER' : 'DISTANCE TO CUSTOMER'}
            </div>
            <div className="font-black text-3xl sm:text-4xl font-mono text-white tracking-tight leading-none drop-shadow">
              {displayDistanceToCustomer}
            </div>

            {/* Secondary Road Maneuver Instruction when turn is relevant */}
            {!isArrived && (
              <div className="mt-1 flex items-center justify-end gap-1.5 text-xs font-mono">
                {hasUpcomingTurn ? (
                  <>
                    <span className="text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0">
                      NEXT TURN
                    </span>
                    <span className="text-white font-extrabold text-[11px] sm:text-xs">
                      {activeDistanceToNextTurn}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>Straight to Stop</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. Full-Width Driving Instruction */}
        <div className="px-3 py-1.5 space-y-1">
          {/* Complete Turn Instruction Text - No truncate, wraps cleanly */}
          <h2 className="text-base sm:text-lg font-black text-amber-300 tracking-tight leading-snug whitespace-normal break-words">
            {activeInstructionText}
          </h2>

          {/* Road / Street Name Pill */}
          {activeStreetName && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white font-bold text-xs max-w-full whitespace-normal break-words">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="break-words">Road: {activeStreetName}</span>
            </div>
          )}
        </div>

        {/* Missed Last Stop Guidance Banner */}
        {isCustomerPassed && isLastStopOnRoad && !isArrived && (
          <div className="mx-3 my-1 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-bold flex items-center justify-between gap-2">
            <span>Customer is last stop on road · Turn around as soon as possible, or tap Skip to continue</span>
            {onSkipCustomer && (
              <button 
                onClick={onSkipCustomer} 
                className="shrink-0 px-2 py-0.5 bg-amber-400 text-black rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-amber-300 active:scale-95 transition-all shadow"
              >
                Skip
              </button>
            )}
          </div>
        )}

        {/* 4. Upcoming Next Turn Preview Strip ("THEN" Maneuver) */}
        {nextManeuver && !isArrived && (
          <div className="px-3 py-1 bg-neutral-900/95 border-t border-neutral-800 rounded-b-2xl flex items-center gap-2 text-xs font-semibold text-neutral-300 whitespace-normal break-words">
            <span className="text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0">
              THEN
            </span>
            <div className="w-4 h-4 flex items-center justify-center shrink-0 text-amber-400">
              <ManeuverIconComponent 
                type={nextManeuver.type}
                modifier={nextManeuver.modifier}
                className="w-3.5 h-3.5 stroke-[2.5]" 
              />
            </div>
            <div className="flex-1 min-w-0 whitespace-normal break-words text-neutral-200 text-xs">
              <span className="font-mono text-amber-400 font-bold">In {formatDistance(nextManeuver.distanceMeters)}:</span>{' '}
              <span>{nextManeuver.instruction}</span>
            </div>
          </div>
        )}

        {/* 5. Arrival Banner */}
        {isArrived && (
          <div className="p-2 bg-emerald-500 text-black font-black text-xs text-center tracking-wide uppercase rounded-b-2xl flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            <span>ARRIVED AT CUSTOMER ADDRESS</span>
          </div>
        )}

        {/* Routing Error Notice */}
        {routingError && (
          <div className="px-4 py-2 bg-red-950/80 border-t border-red-900 text-xs text-red-300 flex items-center justify-between">
            <span>Routing server: {routingError}</span>
            <button
              onClick={() => fetchRoute()}
              className="underline text-red-200 flex items-center gap-1 font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retry
            </button>
          </div>
        )}
      </div>

      {/* Navigation Architecture & In-Phone Testing Guide Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/icon-192.png" 
                  alt="Garbage Route" 
                  className="w-11 h-11 rounded-2xl border-2 border-emerald-400 shadow-md shrink-0 object-cover" 
                />
                <div>
                  <h3 className="font-black text-base">Garbage Route Navigation</h3>
                  <p className="text-xs text-neutral-400">Intelligent Rerouting & Legal Maneuvers</p>
                </div>
              </div>
              <button
                onClick={() => setShowStatusModal(false)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-neutral-300">
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Legal Maneuvers & Missed Destinations</span>
                </div>
                <p>
                  Calculates genuine OpenStreetMap driving routes with exact road names, turn angles, and step distances.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-neutral-400">
                  <li><strong>Turnaround Guidance:</strong> When turning around is the appropriate way to return to the customer, the app instructs &quot;Turn around as soon as possible.&quot;.</li>
                  <li><strong>Around the Block:</strong> If a turnaround is restricted by road dividers or one-way rules, the app routes you around the block via legal side streets.</li>
                  <li><strong>Last Stop on Road:</strong> If the customer is the last stop on the road and you pass it, the app guides you to turn around while keeping the active customer until arrival or manual skip.</li>
                  <li><strong>No Accidental Advance:</strong> Passing an address without stopping does not mark the customer complete; it keeps the customer active and recalculates the return route.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="font-bold text-amber-300">How to Test on Android:</div>
                <ol className="list-decimal pl-4 space-y-1.5 text-neutral-400">
                  <li>Tap <strong>Test Drive</strong> in the navigation header.</li>
                  <li>Select <strong>Approach & Stop</strong> to verify confirmed arrival and automatic stop advancement.</li>
                  <li>Select <strong>Miss Stop & Reroute</strong> to simulate driving past without stopping. Watch the app keep the active customer and instantly recalculate a legal return route.</li>
                  <li>While driving on the road, the app automatically tracks your real-time GPS position.</li>
                </ol>
              </div>
            </div>

            <button
              onClick={() => setShowStatusModal(false)}
              className="w-full mt-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 
        Diagnostic Modal for Test Drive Simulation
        Kept completely separate from normal driving interface (opened via [Diag] button)
      */}
      {showDiagModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-neutral-200 text-xs">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400" />
                <h3 className="font-bold text-sm text-white">Test Drive Navigation Diagnostics</h3>
              </div>
              <button
                onClick={() => setShowDiagModal(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto space-y-3 font-mono text-[11px]">
              {/* Real-time State Table */}
              <div className="bg-neutral-950/80 p-3 rounded-xl border border-neutral-800 space-y-1.5">
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Active Stop:</span>
                  <span className="font-bold text-amber-400">#{currentStop.orderIndex || currentStop.id} - {currentStop.name}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Stop Target Coords:</span>
                  <span className="text-white">{currentStop.lat.toFixed(6)}, {currentStop.lon.toFixed(6)}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Simulated Vehicle Coords:</span>
                  <span className="text-emerald-400">{userLocation ? `${userLocation.lat.toFixed(6)}, ${userLocation.lon.toFixed(6)}` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Speed / Heading:</span>
                  <span className="text-white">{userLocation?.speed ?? 0} mph | {userLocation?.heading !== null && userLocation?.heading !== undefined ? `${Math.round(userLocation.heading)}°` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">GPS Accuracy:</span>
                  <span className="text-white">{userLocation?.accuracy !== null && userLocation?.accuracy !== undefined ? `${userLocation.accuracy.toFixed(1)}m` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Direct Distance:</span>
                  <span className="text-white">{distanceToCurrentFeet !== null ? `${distanceToCurrentFeet} ft` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Road Distance:</span>
                  <span className="text-white">{remainingDistanceToCustomerMeters !== null ? `${Math.round(remainingDistanceToCustomerMeters * 3.28084)} ft (${Math.round(remainingDistanceToCustomerMeters)}m)` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Current Maneuver:</span>
                  <span className="text-amber-300 text-right max-w-[240px] truncate">{currentManeuver ? `${currentManeuver.type} (${currentManeuver.modifier || 'none'}) [${formatDistance(distanceToTurnMeters)}]` : 'None / Arrive'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Turnaround Status:</span>
                  <span className={isCurrentManeuverTurnaround ? 'text-amber-400 font-bold' : 'text-neutral-400'}>
                    {isCurrentManeuverTurnaround ? `ACTIVE (${isTurnaroundImmediate ? 'Immediate <=50m' : 'Upcoming'})` : 'No Turnaround (Forward)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Arrival State:</span>
                  <span className="text-sky-300">{autoArrivalStatus || 'Monitoring'}</span>
                </div>
              </div>

              {/* Diagnostic Event Logs */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                  <span>Recent Diagnostic Events ({diagLogs.length})</span>
                  <span className="text-[10px] text-neutral-500">Auto-updating</span>
                </div>
                <div className="h-44 overflow-y-auto bg-black p-2.5 rounded-xl border border-neutral-800 space-y-1 text-[10px] text-neutral-300 leading-relaxed font-mono">
                  {diagLogs.length > 0 ? (
                    diagLogs.map((log, idx) => (
                      <div key={idx} className="border-b border-neutral-900 pb-0.5 last:border-0">
                        {log}
                      </div>
                    ))
                  ) : (
                    <div className="text-neutral-600 italic">No events recorded yet. Simulator running along road route.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setShowDiagModal(false)}
                className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
