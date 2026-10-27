import { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { GpsLocation } from './useGpsTracker';
import { 
  NavManeuver, 
  fetchOsmRoute, 
  calculateDistanceMeters, 
  calculateDistanceToPolylineMeters,
  formatDistance, 
  formatDuration 
} from './navigationService';
import { isValidCoordinate } from './gpxParser';

export interface RoadNavigationState {
  currentManeuver: NavManeuver | null;
  nextManeuver: NavManeuver | null;
  maneuverIndex: number;
  totalManeuvers: number;
  distanceToTurnMeters: number;
  distanceToTurnFormatted: string;
  totalDistanceMeters: number;
  totalDistanceFormatted: string;
  totalDurationSeconds: number;
  totalDurationFormatted: string;
  isRouting: boolean;
  routingError: string | null;
  hasUturn: boolean;
  isSimulating: boolean;
  toggleSimulation: () => void;
  restartRoute: () => void;
  recalculate: () => void;
}

export function useRoadNavigation(
  currentStop: RouteStop | null,
  previousStop?: RouteStop,
  userLocation: GpsLocation | null = null,
  gpsStatus: 'acquiring' | 'locked' | 'denied' = 'acquiring'
): RoadNavigationState {
  const [maneuvers, setManeuvers] = useState<NavManeuver[]>([]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [currentManeuverIndex, setCurrentManeuverIndex] = useState(0);
  const [distanceToTurnMeters, setDistanceToTurnMeters] = useState(0);
  const [totalDistanceMeters, setTotalDistanceMeters] = useState(0);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(0);
  const [isRouting, setIsRouting] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const [hasUturn, setHasUturn] = useState<boolean>(false);

  // Simulation mode
  const [isSimulating, setIsSimulating] = useState(false);
  const simulationRef = useRef<number | null>(null);
  const simProgressRef = useRef(0);

  const lastRoutedCoords = useRef<{
    startLat: number;
    startLon: number;
    destLat: number;
    destLon: number;
  } | null>(null);

  const lastRerouteTimestamp = useRef<number>(0);

  // Determine starting point: live GPS if valid, else previous stop, else realistic offset
  const getStartPoint = useCallback((): { lat: number; lon: number; heading: number | null } | null => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      return { 
        lat: userLocation.lat, 
        lon: userLocation.lon, 
        heading: userLocation.heading ?? null 
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
      return { 
        lat: currentStop.lat - 0.005, 
        lon: currentStop.lon - 0.004, 
        heading: 45 
      };
    }
    return null;
  }, [userLocation, previousStop, currentStop]);

  // Fetch actual OSRM road route
  const fetchRoute = useCallback(async (forced = false) => {
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) {
      setManeuvers([]);
      setRouteCoordinates([]);
      return;
    }

    const start = getStartPoint();
    if (!start) return;

    if (!forced && lastRoutedCoords.current) {
      const distStart = calculateDistanceMeters(
        start.lat, start.lon,
        lastRoutedCoords.current.startLat, lastRoutedCoords.current.startLon
      );
      const distDest = calculateDistanceMeters(
        currentStop.lat, currentStop.lon,
        lastRoutedCoords.current.destLat, lastRoutedCoords.current.destLon
      );
      if (distStart < 50 && distDest < 20 && maneuvers.length > 0) {
        return;
      }
    }

    setIsRouting(true);
    setRoutingError(null);

    try {
      const route = await fetchOsmRoute(
        start.lat,
        start.lon,
        currentStop.lat,
        currentStop.lon,
        currentStop.name,
        start.heading
      );

      if (route.maneuvers.length > 0) {
        setManeuvers(route.maneuvers);
        setRouteCoordinates(route.coordinates);
        setCurrentManeuverIndex(0);
        setTotalDistanceMeters(route.totalDistance);
        setTotalDurationSeconds(route.totalDuration);
        setDistanceToTurnMeters(route.maneuvers[0]?.distanceMeters || 0);
        setHasUturn(route.hasUturn);

        lastRoutedCoords.current = {
          startLat: start.lat,
          startLon: start.lon,
          destLat: currentStop.lat,
          destLon: currentStop.lon,
        };
        lastRerouteTimestamp.current = Date.now();
      }
    } catch (err: any) {
      console.warn('Road routing error:', err);
      setRoutingError(err.message || 'Routing unavailable');
    } finally {
      setIsRouting(false);
    }
  }, [currentStop, getStartPoint, maneuvers.length]);

  // Initial route fetch on stop change
  useEffect(() => {
    simProgressRef.current = 0;
    setCurrentManeuverIndex(0);
    lastRoutedCoords.current = null;
    fetchRoute();
  }, [currentStop?.id, currentStop?.lat, currentStop?.lon]);

  // Live vehicle progress update and off-route recalculation
  useEffect(() => {
    if (isSimulating || maneuvers.length === 0 || !userLocation) return;

    const currentM = maneuvers[currentManeuverIndex];
    if (!currentM) return;

    // Check if off-route from polyline (> 45m away)
    const now = Date.now();
    if (routeCoordinates.length > 1 && now - lastRerouteTimestamp.current > 4000) {
      const distToPolyline = calculateDistanceToPolylineMeters(userLocation.lat, userLocation.lon, routeCoordinates);
      if (distToPolyline > 45) {
        fetchRoute(true);
        return;
      }
    }

    // Calculate real distance to current maneuver waypoint
    const [turnLon, turnLat] = currentM.location;
    const distToManeuver = calculateDistanceMeters(userLocation.lat, userLocation.lon, turnLat, turnLon);

    // If within 25 meters (80 ft) of turn point, advance to next maneuver
    if (distToManeuver < 25 && currentManeuverIndex < maneuvers.length - 1) {
      setCurrentManeuverIndex((idx) => idx + 1);
      const nextM = maneuvers[currentManeuverIndex + 1];
      setDistanceToTurnMeters(nextM ? nextM.distanceMeters : 0);
    } else {
      setDistanceToTurnMeters(Math.max(0, Math.round(distToManeuver)));
    }
  }, [userLocation, maneuvers, currentManeuverIndex, isSimulating, routeCoordinates, fetchRoute]);

  // Simulation timer
  useEffect(() => {
    if (!isSimulating || maneuvers.length === 0) {
      if (simulationRef.current) {
        window.clearInterval(simulationRef.current);
        simulationRef.current = null;
      }
      return;
    }

    let currentDist = maneuvers[currentManeuverIndex]?.distanceMeters || 300;
    setDistanceToTurnMeters(currentDist);

    simulationRef.current = window.setInterval(() => {
      currentDist -= 20;
      if (currentDist <= 20) {
        setCurrentManeuverIndex((prev) => {
          if (prev >= maneuvers.length - 1) {
            setIsSimulating(false);
            return prev;
          }
          const nextIdx = prev + 1;
          currentDist = maneuvers[nextIdx]?.distanceMeters || 200;
          return nextIdx;
        });
      }
      setDistanceToTurnMeters(Math.max(10, currentDist));
      setTotalDistanceMeters((tot) => Math.max(0, tot - 20));
      setTotalDurationSeconds((dur) => Math.max(0, dur - 1.5));
    }, 800);

    return () => {
      if (simulationRef.current) {
        window.clearInterval(simulationRef.current);
      }
    };
  }, [isSimulating, maneuvers, currentManeuverIndex]);

  const toggleSimulation = useCallback(() => {
    setIsSimulating((s) => !s);
  }, []);

  const restartRoute = useCallback(() => {
    simProgressRef.current = 0;
    setCurrentManeuverIndex(0);
    if (maneuvers.length > 0) {
      setDistanceToTurnMeters(maneuvers[0].distanceMeters);
    }
  }, [maneuvers]);

  const recalculate = useCallback(() => {
    fetchRoute(true);
  }, [fetchRoute]);

  const currentM = maneuvers[currentManeuverIndex] || null;
  const nextM = maneuvers[currentManeuverIndex + 1] || null;

  return {
    currentManeuver: currentM,
    nextManeuver: nextM,
    maneuverIndex: currentManeuverIndex,
    totalManeuvers: maneuvers.length,
    distanceToTurnMeters,
    distanceToTurnFormatted: formatDistance(distanceToTurnMeters),
    totalDistanceMeters,
    totalDistanceFormatted: formatDistance(totalDistanceMeters),
    totalDurationSeconds,
    totalDurationFormatted: formatDuration(totalDurationSeconds),
    isRouting,
    routingError,
    hasUturn,
    isSimulating,
    toggleSimulation,
    restartRoute,
    recalculate,
  };
}
