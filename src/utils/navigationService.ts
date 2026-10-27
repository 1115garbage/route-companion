/**
 * Turn-by-Turn Navigation & Real-time GPS Service
 * Uses device GPS hardware and OpenStreetMap (OSRM) routing engine
 * Supports legal maneuver restrictions, U-turns, block rerouting, and off-route polyline tracking.
 */

export interface NavManeuver {
  type: string; // 'turn', 'depart', 'arrive', 'continue', 'fork', 'roundabout', etc.
  modifier?: string; // 'left', 'right', 'slight left', 'slight right', 'sharp left', 'sharp right', 'straight', 'uturn'
  instruction: string; // "Turn right onto Maple Grove Ave" or "Turn around as soon as possible."
  streetName: string;
  distanceMeters: number;
  location: [number, number]; // [lon, lat]
}

export interface NavigationState {
  currentManeuver: NavManeuver | null;
  distanceToManeuverMeters: number;
  totalDistanceToDestinationMeters: number;
  estimatedTimeSeconds: number;
  gpsActive: boolean;
  gpsAccuracyMeters: number | null;
  currentSpeedMph: number | null;
  currentHeading: number | null;
  lastUpdated: number;
  source: 'osm-live' | 'gps-direct' | 'simulated';
  error: string | null;
}

/**
 * Calculates distance in meters between two lat/lon points using the Haversine formula
 */
export function calculateDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  if (
    isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2) ||
    (lat1 === 0 && lon1 === 0) || (lat2 === 0 && lon2 === 0)
  ) {
    return Infinity;
  }
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calculates distance in meters from a point to the nearest line segment in a GeoJSON polyline [lon, lat][]
 * Used for detecting off-route deviations when a driver misses a turn or leaves the planned road.
 */
export function calculateDistanceToPolylineMeters(
  pointLat: number,
  pointLon: number,
  coordinates: [number, number][]
): number {
  if (!coordinates || coordinates.length < 2) return Infinity;

  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * Math.cos((pointLat * Math.PI) / 180);

  let minDistance = Infinity;

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [lon1, lat1] = coordinates[i];
    const [lon2, lat2] = coordinates[i + 1];

    const px = (pointLon - lon1) * mPerDegLon;
    const py = (pointLat - lat1) * mPerDegLat;
    const sx = (lon2 - lon1) * mPerDegLon;
    const sy = (lat2 - lat1) * mPerDegLat;
    const lenSq = sx * sx + sy * sy;

    let d: number;
    if (lenSq === 0) {
      d = Math.sqrt(px * px + py * py);
    } else {
      const t = Math.max(0, Math.min(1, (px * sx + py * sy) / lenSq));
      const projX = t * sx;
      const projY = t * sy;
      const dx = px - projX;
      const dy = py - projY;
      d = Math.sqrt(dx * dx + dy * dy);
    }

    if (d < minDistance) {
      minDistance = d;
    }
  }

  return minDistance;
}

/**
 * Calculates remaining driving route distance in meters from the user's current GPS position
 * to the destination along the planned route coordinates polyline.
 * Continuously counts down as the vehicle advances along each road segment.
 */
export function calculateRemainingRouteDistanceMeters(
  pointLat: number,
  pointLon: number,
  coordinates: [number, number][],
  minSegmentIndex = 0
): { remainingMeters: number; closestSegmentIndex: number } {
  if (!coordinates || coordinates.length === 0) {
    return { remainingMeters: 0, closestSegmentIndex: 0 };
  }
  if (coordinates.length === 1) {
    const dist = calculateDistanceMeters(pointLat, pointLon, coordinates[0][1], coordinates[0][0]);
    return { remainingMeters: dist, closestSegmentIndex: 0 };
  }

  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * Math.cos((pointLat * Math.PI) / 180);

  let bestSegmentIndex = Math.max(0, Math.min(minSegmentIndex, coordinates.length - 2));
  let minPerpDistanceSq = Infinity;
  let bestT = 0;

  // Search forward from previous segment progress (with a small look-back window for GPS jitter)
  const startIndex = Math.max(0, minSegmentIndex - 2);
  for (let i = startIndex; i < coordinates.length - 1; i++) {
    const [lon1, lat1] = coordinates[i];
    const [lon2, lat2] = coordinates[i + 1];

    const px = (pointLon - lon1) * mPerDegLon;
    const py = (pointLat - lat1) * mPerDegLat;
    const sx = (lon2 - lon1) * mPerDegLon;
    const sy = (lat2 - lat1) * mPerDegLat;
    const lenSq = sx * sx + sy * sy;

    if (lenSq === 0) continue;

    const t = Math.max(0, Math.min(1, (px * sx + py * sy) / lenSq));
    const projX = t * sx;
    const projY = t * sy;
    const dx = px - projX;
    const dy = py - projY;
    const distSq = dx * dx + dy * dy;

    if (distSq < minPerpDistanceSq) {
      minPerpDistanceSq = distSq;
      bestSegmentIndex = i;
      bestT = t;
    }
  }

  // 1. Remaining length on current segment from projected vehicle position to segment end
  const [bLon1, bLat1] = coordinates[bestSegmentIndex];
  const [bLon2, bLat2] = coordinates[bestSegmentIndex + 1];
  const currentSegDist = calculateDistanceMeters(bLat1, bLon1, bLat2, bLon2);
  let remainingMeters = Math.max(0, (1 - bestT) * currentSegDist);

  // 2. Sum length of all subsequent segments along the route
  for (let j = bestSegmentIndex + 1; j < coordinates.length - 1; j++) {
    remainingMeters += calculateDistanceMeters(
      coordinates[j][1],
      coordinates[j][0],
      coordinates[j + 1][1],
      coordinates[j + 1][0]
    );
  }

  return {
    remainingMeters: Math.max(0, Math.round(remainingMeters)),
    closestSegmentIndex: bestSegmentIndex,
  };
}

/**
 * Calculates compass bearing from point 1 to point 2 (0 - 360 degrees)
 */
export function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const y = Math.sin((lon2 - lon1) * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180));
  const x =
    Math.cos(lat1 * (Math.PI / 180)) * Math.sin(lat2 * (Math.PI / 180)) -
    Math.sin(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.cos((lon2 - lon1) * (Math.PI / 180));
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

/**
 * Convert bearing degrees to cardinal direction name
 */
export function bearingToDirection(bearing: number): string {
  const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  const index = Math.round(bearing / 45) % 8;
  return directions[index];
}

/**
 * Format distance in feet and miles (or meters/km) for rapid driver glanceability
 */
export function formatDistance(meters: number, useMetric = false): string {
  if (isNaN(meters) || meters < 0) return '0 ft';

  if (useMetric) {
    if (meters < 1000) {
      return `${Math.round(meters)} m`;
    }
    return `${(meters / 1000).toFixed(1)} km`;
  }

  // Imperial (US) standard for in-vehicle navigation
  const feet = meters * 3.28084;
  if (feet < 1000) {
    if (feet > 200) {
      return `${Math.round(feet / 50) * 50} ft`;
    }
    return `${Math.max(10, Math.round(feet / 10) * 10)} ft`;
  }

  const miles = feet / 5280;
  if (miles < 10) {
    return `${miles.toFixed(1)} mi`;
  }
  return `${Math.round(miles)} mi`;
}

/**
 * Format estimated travel duration in minutes and hours
 */
export function formatDuration(seconds: number): string {
  if (isNaN(seconds) || seconds <= 0) return '1 min';
  const mins = Math.round(seconds / 60);
  if (mins < 60) {
    return `${Math.max(1, mins)} min`;
  }
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? `${hours}h ${remMins}m` : `${hours}h`;
}

/**
 * Generates natural driver maneuver instructions from OSRM step.
 * Accurately formats U-turn instructions without fabricating them.
 */
export function buildInstructionText(type: string, modifier: string | undefined, streetName: string, destinationName: string): string {
  const street = streetName && streetName.trim() ? streetName.trim() : '';
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') {
    return destinationName ? `Arrive at ${destinationName}` : 'Arrive at destination';
  }
  if (t === 'depart') {
    return street ? `Head out onto ${street}` : 'Head toward destination';
  }
  if (t === 'merge') {
    return mod.includes('left')
      ? (street ? `Merge left onto ${street}` : 'Merge left')
      : (street ? `Merge right onto ${street}` : 'Merge right');
  }
  if (t === 'on ramp' || t === 'off ramp' || t === 'ramp') {
    return street ? `Take ramp onto ${street}` : 'Take ramp';
  }
  if (t === 'fork') {
    return mod.includes('left')
      ? (street ? `Keep left at fork onto ${street}` : 'Keep left at fork')
      : (street ? `Keep right at fork onto ${street}` : 'Keep right at fork');
  }
  if (t === 'roundabout' || t === 'rotary') {
    return street ? `Enter roundabout toward ${street}` : 'Enter roundabout';
  }
  if (t === 'end of road') {
    return mod.includes('left')
      ? (street ? `Turn left at end onto ${street}` : 'Turn left at end of road')
      : (street ? `Turn right at end onto ${street}` : 'Turn right at end of road');
  }

  // Turnaround maneuvers evaluated by the routing engine
  // Preferred exact wording: "Turn around as soon as possible."
  if (
    mod.includes('uturn') ||
    mod === 'uturn' ||
    mod.includes('turnaround') ||
    mod.includes('turn around') ||
    t === 'turnaround'
  ) {
    return 'Turn around as soon as possible.';
  }

  switch (mod) {
    case 'left':
      return street ? `Turn left onto ${street}` : 'Turn left';
    case 'right':
      return street ? `Turn right onto ${street}` : 'Turn right';
    case 'slight left':
      return street ? `Bear slightly left onto ${street}` : 'Bear slightly left';
    case 'slight right':
      return street ? `Bear slightly right onto ${street}` : 'Bear slightly right';
    case 'sharp left':
      return street ? `Make a sharp left onto ${street}` : 'Sharp left';
    case 'sharp right':
      return street ? `Make a sharp right onto ${street}` : 'Sharp right';
    case 'straight':
      return street ? `Continue straight on ${street}` : 'Continue straight';
    default:
      if (t === 'continue' || t === 'new name') {
        return street ? `Continue onto ${street}` : 'Continue straight';
      }
      return street ? `Proceed onto ${street}` : 'Proceed along route';
  }
}

/**
 * Normalizes street names for reliable comparison (e.g., 'Turnpike Rd' vs 'Turnpike Road')
 */
export function normalizeStreetName(s: string | undefined | null): string {
  if (!s) return '';
  return s
    .toLowerCase()
    .replace(/\b(street|st\.?)\b/g, 'st')
    .replace(/\b(road|rd\.?)\b/g, 'rd')
    .replace(/\b(avenue|ave\.?)\b/g, 'ave')
    .replace(/\b(lane|ln\.?)\b/g, 'ln')
    .replace(/\b(drive|dr\.?)\b/g, 'dr')
    .replace(/\b(court|ct\.?)\b/g, 'ct')
    .replace(/\b(boulevard|blvd\.?)\b/g, 'blvd')
    .replace(/\b(state\s*route|route|rt\.?)\b/g, 'rt')
    .replace(/\b(place|pl\.?)\b/g, 'pl')
    .replace(/\b(highway|hwy\.?)\b/g, 'hwy')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks whether two street name strings refer to the same road
 */
export function roadNamesMatch(name1: string | undefined | null, name2: string | undefined | null): boolean {
  const n1 = normalizeStreetName(name1);
  const n2 = normalizeStreetName(name2);
  if (!n1 || !n2) return false;
  return n1 === n2 || n1.includes(n2) || n2.includes(n1);
}

/**
 * Resolves the optimal curbside approach location when a property is near an intersection.
 * If the property can be served from the road currently being traveled or from the customer's
 * primary street address, prefers that road approach over turning onto a side street or track.
 */
export async function resolvePreferredApproach(
  destLat: number,
  destLon: number,
  preferredStreet?: string,
  currentTravelStreet?: string
): Promise<[number, number]> {
  const targetStreet = preferredStreet || currentTravelStreet;
  if (!targetStreet || !targetStreet.trim()) {
    return [destLon, destLat];
  }

  try {
    const nearestUrl = `https://router.project-osrm.org/nearest/v1/driving/${destLon},${destLat}?number=10`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(nearestUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return [destLon, destLat];

    const data = await res.json();
    if (!data.waypoints || data.waypoints.length < 2) {
      return [destLon, destLat];
    }

    const firstWaypoint = data.waypoints[0];
    // If the default closest snapped road already matches the target street, keep standard snapping
    if (firstWaypoint && firstWaypoint.name && roadNamesMatch(firstWaypoint.name, targetStreet)) {
      return [destLon, destLat];
    }

    // Look for a nearby segment that matches the current road or customer street.
    // Limit to candidates within a reasonable driveway/frontage setback (< 350m)
    for (const wp of data.waypoints) {
      if (wp.name && wp.location && wp.distance < 350) {
        if (roadNamesMatch(wp.name, targetStreet) || (currentTravelStreet && roadNamesMatch(wp.name, currentTravelStreet))) {
          if (import.meta.env?.DEV) {
            console.log(
              `[Approach Selection] Preferring current/primary road '${wp.name}' at [${wp.location[0]}, ${wp.location[1]}] over side road '${firstWaypoint?.name || 'unnamed'}' for ${targetStreet}`
            );
          }
          return wp.location as [number, number];
        }
      }
    }
  } catch (e) {
    // Graceful fallback to raw coordinates
  }

  return [destLon, destLat];
}

/**
 * Fetches real turn-by-turn driving route steps from OpenStreetMap OSRM routing engine.
 * Supports start bearings for moving vehicle travel direction to ensure legal U-turns
 * vs routing around blocks.
 * Supports intersection approach preferences to keep vehicle on the current road for corner properties.
 */
export async function fetchOsmRoute(
  startLat: number,
  startLon: number,
  destLat: number,
  destLon: number,
  destName: string,
  startBearing?: number | null,
  destStreetName?: string,
  currentTravelStreetName?: string
): Promise<{
  maneuvers: NavManeuver[];
  totalDistance: number;
  totalDuration: number;
  coordinates: [number, number][];
  hasUturn: boolean;
}> {
  // Validate coordinates
  if (
    isNaN(startLat) || isNaN(startLon) || isNaN(destLat) || isNaN(destLon) ||
    startLat < -90 || startLat > 90 || destLat < -90 || destLat > 90 ||
    startLon < -180 || startLon > 180 || destLon < -180 || destLon > 180 ||
    (startLat === 0 && startLon === 0) || (destLat === 0 && destLon === 0)
  ) {
    throw new Error(`Invalid coordinates for routing: start(${startLat}, ${startLon}), dest(${destLat}, ${destLon})`);
  }

  // Handle immediate arrival for co-located points (< 5m apart, e.g. shared addresses like 6633 Laraway Rd Apt A & Apt B)
  const directDist = calculateDistanceMeters(startLat, startLon, destLat, destLon);
  if (directDist < 5) {
    return {
      maneuvers: [
        {
          type: 'arrive',
          instruction: destName ? `Arrive at ${destName}` : 'Arrive at destination',
          streetName: '',
          distanceMeters: Math.round(directDist),
          location: [destLon, destLat],
        },
      ],
      totalDistance: Math.round(directDist),
      totalDuration: 0,
      coordinates: [
        [startLon, startLat],
        [destLon, destLat],
      ],
      hasUturn: false,
    };
  }

  // For properties at or near intersections, prefer the approach from the road currently being traveled
  // or the customer's street address so the vehicle does not turn onto a side road unnecessarily.
  let effectiveDestLon = destLon;
  let effectiveDestLat = destLat;
  if (destStreetName || currentTravelStreetName) {
    const preferredLoc = await resolvePreferredApproach(
      destLat,
      destLon,
      destStreetName,
      currentTravelStreetName
    );
    effectiveDestLon = preferredLoc[0];
    effectiveDestLat = preferredLoc[1];
  }

  const sanitizedBearing =
    typeof startBearing === 'number' && !isNaN(startBearing)
      ? Math.round(((startBearing % 360) + 360) % 360)
      : null;

  // Base OSRM URL with turn steps, detailed geometries, and continue_straight=false for realistic turnaround maneuvers
  const baseUrl = `https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${effectiveDestLon},${effectiveDestLat}?steps=true&overview=full&geometries=geojson&continue_straight=false`;

  // Helper to fetch and parse with detailed error diagnostics
  const executeQuery = async (queryUrl: string) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch(queryUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!response.ok) {
        let serverErrorMsg = '';
        try {
          const errorJson = await response.json();
          serverErrorMsg = errorJson.message || errorJson.code || '';
        } catch {
          try {
            serverErrorMsg = await response.text();
          } catch {}
        }

        if (import.meta.env?.DEV) {
          console.error(`[OSRM Routing Error] HTTP ${response.status}: ${serverErrorMsg} (URL: ${queryUrl})`);
        }

        throw new Error(`Routing server HTTP ${response.status}${serverErrorMsg ? `: ${serverErrorMsg}` : ''}`);
      }
      const data = await response.json();
      return data;
    } catch (err: any) {
      clearTimeout(timeoutId);
      throw err;
    }
  };

  // 1. Fetch natural, unconstrained road-network route
  const unconstrainedData = await executeQuery(baseUrl);
  if (unconstrainedData.code !== 'Ok' || !unconstrainedData.routes || unconstrainedData.routes.length === 0) {
    throw new Error('No driving route found between coordinates');
  }

  let data = unconstrainedData;
  let isTurnaroundNeeded = false;

  // 2. Check road network and forward travel to determine if genuine turnaround is required
  if (sanitizedBearing !== null) {
    const uRoute = unconstrainedData.routes[0];
    const uDist = uRoute.distance || 0;
    const uCoords = uRoute.geometry?.coordinates || [];
    const uSteps = uRoute.legs?.[0]?.steps || [];

    // Check if unconstrained route already explicitly includes a U-turn step from OSRM
    const uHasExplicitUturn = uSteps.some((s: any) =>
      (s.maneuver?.modifier || '').toLowerCase().includes('uturn') ||
      (s.maneuver?.type || '').toLowerCase() === 'turnaround'
    );

    let bData: any = null;
    let bHasRoute = false;
    let bDist = Infinity;

    try {
      const bearingUrl = `${baseUrl}&bearings=${sanitizedBearing},60;`;
      const bearingResult = await executeQuery(bearingUrl);
      if (bearingResult && bearingResult.code === 'Ok' && bearingResult.routes && bearingResult.routes.length > 0) {
        bData = bearingResult;
        bHasRoute = true;
        bDist = bearingResult.routes[0].distance || Infinity;
      }
    } catch (err) {
      // Bearing route unavailable (e.g. one-way or dead end)
    }

    // Departure geometry from customer
    let angleDiff = 0;
    if (uCoords && uCoords.length >= 2) {
      const [lon0, lat0] = uCoords[0];
      const [lon1, lat1] = uCoords[1];
      const roadDepartHeading = calculateBearing(lat0, lon0, lat1, lon1);
      angleDiff = Math.abs(sanitizedBearing - roadDepartHeading) % 360;
      if (angleDiff > 180) angleDiff = 360 - angleDiff;
    }

    // A genuine turnaround is required if and only if:
    // 1. OSRM explicitly returns a U-turn step, OR
    // 2. Continuing forward along the road is impossible or forces a massive detour (> 500m AND > 50% longer than backtracking),
    //    AND the unconstrained road departure heads in the reciprocal direction along the road (angleDiff >= 135°).
    const isForwardDetourMassive = (!bHasRoute) || (bDist > uDist + 500 && bDist > uDist * 1.5);
    const isDepartReversing = angleDiff >= 135;

    if (uHasExplicitUturn || (isForwardDetourMassive && isDepartReversing)) {
      isTurnaroundNeeded = true;
      data = unconstrainedData;
    } else if (bHasRoute) {
      // Normal forward road travel: use bearing-constrained forward route
      isTurnaroundNeeded = false;
      data = bData;
    } else {
      isTurnaroundNeeded = false;
      data = unconstrainedData;
    }
  }

  const route = data.routes[0];
  const leg = route.legs?.[0];
  const steps = leg?.steps || [];
  const coordinates: [number, number][] = route.geometry?.coordinates || [];

  let hasUturn = false;

  const maneuvers: NavManeuver[] = steps.map((s: any) => {
    const type = s.maneuver?.type || 'turn';
    const modifier = s.maneuver?.modifier;
    const streetName = s.name || '';
    const instruction = buildInstructionText(type, modifier, streetName, destName);
    const location: [number, number] = s.maneuver?.location || [destLon, destLat];

    if (modifier && modifier.toLowerCase().includes('uturn')) {
      hasUturn = true;
    }

    return {
      type,
      modifier,
      instruction,
      streetName,
      distanceMeters: s.distance || 0,
      location,
    };
  });

  // If road geometry genuinely requires turning around on the current road to head in reverse direction,
  // insert a clean turnaround maneuver at the start of the route
  if (isTurnaroundNeeded) {
    const firstM = maneuvers[0];
    const isFirstTurnaround = firstM && (
      (firstM.modifier || '').toLowerCase().includes('uturn') ||
      (firstM.type || '').toLowerCase() === 'turnaround' ||
      firstM.instruction.includes('Turn around as soon as possible.')
    );

    if (!isFirstTurnaround) {
      const turnStreet = (firstM?.streetName) || currentTravelStreetName || destStreetName || '';
      maneuvers.unshift({
        type: 'turnaround',
        modifier: 'uturn',
        instruction: 'Turn around as soon as possible.',
        streetName: turnStreet,
        distanceMeters: 0,
        location: [startLon, startLat],
      });
      hasUturn = true;
    }
  }

  return {
    maneuvers,
    totalDistance: route.distance || 0,
    totalDuration: route.duration || 0,
    coordinates,
    hasUturn,
  };
}
