import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GpsLocation } from '../utils/useGpsTracker';
import { RouteStop } from '../types/route';
import { Crosshair, Navigation, Layers, MapPin } from 'lucide-react';

interface RoadMapViewProps {
  userLocation: GpsLocation | null;
  destination: {
    lat: number;
    lon: number;
    name: string;
    houseNumber?: string;
    address?: string;
  };
  activeStopIndex?: number;
  allStops?: RouteStop[];
  onSelectStop?: (index: number) => void;
  routeCoordinates?: [number, number][]; // [lon, lat][] from OSRM
  isDark?: boolean;
}

interface GroupedStopLocation {
  lat: number;
  lon: number;
  stops: {
    stop: RouteStop;
    originalIndex: number;
    isActive: boolean;
  }[];
}

export const RoadMapView: React.FC<RoadMapViewProps> = ({
  userLocation,
  destination,
  activeStopIndex = 0,
  allStops = [],
  onSelectStop,
  routeCoordinates = [],
  isDark = true,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routePolylineRef = useRef<L.Polyline | null>(null);
  const stopsLayerRef = useRef<L.LayerGroup | null>(null);
  const hasInitialFittedRef = useRef<boolean>(false);

  // Status counters for overlay
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    skipped: 0,
    pending: 0,
    missingCoords: 0,
  });

  // Keep a stable ref to onSelectStop for marker popup clicks
  const onSelectStopRef = useRef(onSelectStop);
  useEffect(() => {
    onSelectStopRef.current = onSelectStop;
  }, [onSelectStop]);

  // Expose global click dispatcher for popup buttons
  useEffect(() => {
    (window as any).__garbageRouteJumpToStop = (index: number) => {
      if (onSelectStopRef.current) {
        onSelectStopRef.current(index);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.closePopup();
        }
      }
    };
    return () => {
      delete (window as any).__garbageRouteJumpToStop;
    };
  }, []);

  // 1. Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initialLat = userLocation?.lat || destination.lat || 37.7749;
    const initialLon = userLocation?.lon || destination.lon || -122.4194;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLon],
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
    });

    // High performance OpenStreetMap standard tiles with multi-subdomain connection pooling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: ['a', 'b', 'c'],
      crossOrigin: true,
      className: isDark ? 'dark-map-tiles' : '',
    }).addTo(map);

    // Group for all customer markers
    const stopsLayer = L.layerGroup().addTo(map);
    stopsLayerRef.current = stopsLayer;

    mapInstanceRef.current = map;

    // Invalidate size to ensure crisp full-screen rendering on mobile and Android WebView
    const invalidate = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize({ pan: false });
      }
    };
    invalidate();
    const t1 = setTimeout(invalidate, 50);
    const t2 = setTimeout(invalidate, 150);
    const t3 = setTimeout(invalidate, 300);
    const t4 = setTimeout(invalidate, 600);
    const t5 = setTimeout(invalidate, 1200);

    const handleWindowResize = () => invalidate();
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleWindowResize);

    const resizeObserver = new ResizeObserver(() => {
      invalidate();
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleWindowResize);
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
      userMarkerRef.current = null;
      routePolylineRef.current = null;
      stopsLayerRef.current = null;
      hasInitialFittedRef.current = false;
    };
  }, []);

  // 2. Render All Customer Markers on the Map
  useEffect(() => {
    const map = mapInstanceRef.current;
    const stopsLayer = stopsLayerRef.current;
    if (!map || !stopsLayer) return;

    stopsLayer.clearLayers();

    if (!allStops || allStops.length === 0) {
      // Fallback: If no customer list provided, render just destination
      if (destination && !isNaN(destination.lat) && !isNaN(destination.lon)) {
        const destHtml = `
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div style="background:#fbbf24; color:#000; font-weight:900; font-family:monospace; font-size:12px; padding:3px 7px; border-radius:8px; border:2px solid #000; box-shadow:0 4px 8px rgba(0,0,0,0.5); white-space:nowrap;">
              ${destination.houseNumber || 'STOP'}
            </div>
            <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid #fbbf24;"></div>
          </div>
        `;
        const destIcon = L.divIcon({
          html: destHtml,
          className: 'custom-dest-pin',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        });
        L.marker([destination.lat, destination.lon], { icon: destIcon }).addTo(stopsLayer);
      }
      return;
    }

    let completed = 0;
    let skipped = 0;
    let pending = 0;
    let missingCoords = 0;

    // Group stops by coordinates (precision ~1 meter) to handle overlapping addresses
    const locationMap = new Map<string, GroupedStopLocation>();

    allStops.forEach((stop, index) => {
      if (stop.status === 'completed') completed++;
      else if (stop.status === 'skipped') skipped++;
      else pending++;

      const hasValidCoords =
        typeof stop.lat === 'number' &&
        typeof stop.lon === 'number' &&
        !isNaN(stop.lat) &&
        !isNaN(stop.lon) &&
        (stop.lat !== 0 || stop.lon !== 0);

      if (!hasValidCoords) {
        missingCoords++;
        return;
      }

      // Group key rounded to 5 decimal places (~1.1 meter precision)
      const key = `${stop.lat.toFixed(5)},${stop.lon.toFixed(5)}`;
      const isActive = index === activeStopIndex;

      if (!locationMap.has(key)) {
        locationMap.set(key, {
          lat: stop.lat,
          lon: stop.lon,
          stops: [{ stop, originalIndex: index, isActive }],
        });
      } else {
        locationMap.get(key)!.stops.push({ stop, originalIndex: index, isActive });
      }
    });

    setStats({
      total: allStops.length,
      completed,
      skipped,
      pending,
      missingCoords,
    });

    const allValidLatLngs: L.LatLngExpression[] = [];

    // Create markers for each unique customer location
    locationMap.forEach((group) => {
      const { lat, lon, stops } = group;
      allValidLatLngs.push([lat, lon]);

      const hasActive = stops.some((s) => s.isActive);
      const isMultiStop = stops.length > 1;
      const allDone = stops.every((s) => s.stop.status === 'completed');
      const allSkipped = stops.every((s) => s.stop.status === 'skipped');

      let iconHtml = '';
      let iconSize: [number, number] = [32, 32];
      let iconAnchor: [number, number] = [16, 16];
      let zIndexOffset = 100;

      if (hasActive) {
        // ACTIVE CUSTOMER PIN: Large glowing amber card with house number
        const activeItem = stops.find((s) => s.isActive)!;
        const houseNum = activeItem.stop.houseNumber || `${activeItem.originalIndex + 1}`;
        const multiBadge = isMultiStop ? `<span style="font-size:9px; background:#000; color:#fbbf24; padding:1px 4px; border-radius:4px; margin-left:2px;">+${stops.length - 1}</span>` : '';

        iconHtml = `
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#fbbf24; 
              color:#000; 
              font-weight:900; 
              font-family:monospace; 
              font-size:14px; 
              padding:3px 9px; 
              border-radius:10px; 
              border:2.5px solid #000; 
              box-shadow:0 0 0 3px rgba(251, 191, 36, 0.5), 0 6px 12px rgba(0,0,0,0.7); 
              white-space:nowrap;
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              <span>${houseNum}</span>
              ${multiBadge}
            </div>
            <div style="width:0; height:0; border-left:7px solid transparent; border-right:7px solid transparent; border-top:9px solid #fbbf24; margin-top:-1px;"></div>
          </div>
        `;
        iconSize = [56, 42];
        iconAnchor = [28, 40];
        zIndexOffset = 2000; // Always top
      } else if (allDone) {
        // COMPLETED STOPS: Subtle green checkmark badge with house number
        const houseNum = stops[0].stop.houseNumber || '';
        const label = houseNum ? (isMultiStop ? `${houseNum} ✓+` : `${houseNum} ✓`) : '✓';
        iconHtml = `
          <div style="
            min-width:24px; 
            height:22px; 
            padding:0 5px;
            border-radius:11px; 
            background:#052e16; 
            border:1.5px solid #22c55e; 
            color:#22c55e; 
            font-size:10px; 
            font-weight:800; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 5px rgba(0,0,0,0.5); 
            opacity:0.85;
            cursor:pointer;
            white-space:nowrap;
          ">
            ${label}
          </div>
        `;
        iconSize = [32, 22];
        iconAnchor = [16, 11];
        zIndexOffset = 50;
      } else if (allSkipped) {
        // SKIPPED STOPS: Neutral muted gray badge with house number
        const houseNum = stops[0].stop.houseNumber || '';
        const label = houseNum ? (isMultiStop ? `${houseNum} ⤼` : `${houseNum} ⤼`) : '⤼';
        iconHtml = `
          <div style="
            min-width:22px; 
            height:20px; 
            padding:0 4px;
            border-radius:10px; 
            background:#1c1917; 
            border:1.5px solid #78716c; 
            color:#a8a29e; 
            font-size:9px; 
            font-weight:700; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 4px rgba(0,0,0,0.5); 
            opacity:0.7;
            cursor:pointer;
            white-space:nowrap;
          ">
            ${label}
          </div>
        `;
        iconSize = [30, 20];
        iconAnchor = [15, 10];
        zIndexOffset = 40;
      } else {
        // UPCOMING PENDING CUSTOMERS: Crisp dark blue/slate badge with house number
        const firstPending = stops.find((s) => s.stop.status === 'pending') || stops[0];
        const houseNum = firstPending.stop.houseNumber || `${firstPending.originalIndex + 1}`;
        const label = isMultiStop ? `${houseNum} (+${stops.length - 1})` : houseNum;

        iconHtml = `
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#0f172a; 
              color:#f8fafc; 
              border:1.5px solid #38bdf8; 
              border-radius:6px; 
              padding:1.5px 6px; 
              font-size:11px; 
              font-weight:800; 
              font-family:monospace; 
              box-shadow:0 3px 6px rgba(0,0,0,0.6); 
              white-space:nowrap;
            ">
              ${label}
            </div>
            <div style="width:0; height:0; border-left:4px solid transparent; border-right:4px solid transparent; border-top:5px solid #38bdf8; margin-top:-1px;"></div>
          </div>
        `;
        iconSize = [46, 28];
        iconAnchor = [23, 26];
        zIndexOffset = 150;
      }

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-customer-pin',
        iconSize,
        iconAnchor,
      });

      // Interactive Popup for customer inspection & jumping
      let popupHtml = `
        <div style="font-family:sans-serif; min-width:210px; max-width:280px; padding:4px 0;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; padding-bottom:4px; border-bottom:1px solid #333;">
            <span style="font-size:11px; font-weight:800; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px;">
              ${isMultiStop ? `${stops.length} Customers at Address` : 'Customer Stop'}
            </span>
            <span style="font-size:10px; color:#94a3b8; font-family:monospace;">
              ${lat.toFixed(5)}, ${lon.toFixed(5)}
            </span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto;">
      `;

      stops.forEach(({ stop, originalIndex, isActive }) => {
        const statusBadge = isActive
          ? '<span style="background:#fbbf24; color:#000; font-size:9px; font-weight:900; padding:1px 5px; border-radius:4px;">ACTIVE</span>'
          : stop.status === 'completed'
          ? '<span style="background:#052e16; color:#22c55e; border:1px solid #22c55e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">DONE</span>'
          : stop.status === 'skipped'
          ? '<span style="background:#292524; color:#a8a29e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">SKIPPED</span>'
          : '<span style="background:#0f172a; color:#38bdf8; border:1px solid #38bdf8; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">PENDING</span>';

        popupHtml += `
          <div style="background:${isActive ? 'rgba(251,191,36,0.1)' : '#1e293b'}; border:1px solid ${isActive ? '#fbbf24' : '#334155'}; border-radius:8px; padding:6px 8px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:2px;">
              <span style="font-weight:800; font-size:12px; color:#fff;">
                #${originalIndex + 1} · ${stop.name || 'Customer'}
              </span>
              ${statusBadge}
            </div>
            ${
              stop.houseNumber
                ? `<div style="font-size:11px; font-weight:700; color:#fbbf24; font-family:monospace;">House: ${stop.houseNumber}</div>`
                : ''
            }
            ${
              stop.fullAddress
                ? `<div style="font-size:10px; color:#94a3b8; margin-top:1px; line-height:1.2;">${stop.fullAddress}</div>`
                : ''
            }
            ${
              !isActive
                ? `
              <button 
                onclick="window.__garbageRouteJumpToStop(${originalIndex})"
                style="margin-top:6px; width:100%; background:#2563eb; hover:background:#1d4ed8; color:#fff; border:none; border-radius:6px; padding:4px 6px; font-size:10px; font-weight:800; cursor:pointer;"
              >
                Navigate to Stop #${originalIndex + 1}
              </button>
            `
                : ''
            }
          </div>
        `;
      });

      popupHtml += `
          </div>
        </div>
      `;

      const marker = L.marker([lat, lon], {
        icon: customIcon,
        zIndexOffset,
      }).addTo(stopsLayer);

      marker.bindPopup(popupHtml, {
        closeButton: true,
        className: 'custom-dark-popup',
      });
    });

    // 3. Initial bounds auto-fit when map is first opened (Requirement 6)
    if (!hasInitialFittedRef.current && allValidLatLngs.length > 0) {
      try {
        const boundsPoints = [...allValidLatLngs];
        if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
          boundsPoints.push([userLocation.lat, userLocation.lon]);
        }
        const fullBounds = L.latLngBounds(boundsPoints);
        map.fitBounds(fullBounds, { padding: [35, 35], maxZoom: 16 });
        hasInitialFittedRef.current = true;
      } catch (e) {
        // Ignore bounds edge cases
      }
    }
  }, [allStops, activeStopIndex, destination.lat, destination.lon]);

  // 3. Update Route Polyline to Active Destination
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routePolylineRef.current) {
      map.removeLayer(routePolylineRef.current);
      routePolylineRef.current = null;
    }

    if (routeCoordinates && routeCoordinates.length > 1) {
      // routeCoordinates from OSRM is GeoJSON [lon, lat][]. Convert to Leaflet [lat, lon][].
      const leafletCoords: L.LatLngExpression[] = routeCoordinates.map(([lon, lat]) => [lat, lon]);
      const polyline = L.polyline(leafletCoords, {
        color: '#f59e0b', // Amber road route
        weight: 5,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      routePolylineRef.current = polyline;
    }
  }, [routeCoordinates]);

  // 4. Update Driver / User Location Marker (Preserves real-time navigation)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      const userLatLng: L.LatLngExpression = [userLocation.lat, userLocation.lon];

      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(userLatLng);
      } else {
        const userHtml = `
          <div style="position:relative; width:22px; height:22px; display:flex; align-items:center; justify-content:center;">
            <div style="position:absolute; width:100%; height:100%; border-radius:50%; background:#38bdf8; opacity:0.4; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div>
            <div style="width:14px; height:14px; border-radius:50%; background:#0284c7; border:2.5px solid #ffffff; box-shadow:0 0 10px rgba(2,132,199,0.9);"></div>
          </div>
        `;

        const userIcon = L.divIcon({
          html: userHtml,
          className: 'custom-user-dot',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        });

        userMarkerRef.current = L.marker(userLatLng, { icon: userIcon, zIndexOffset: 3000 }).addTo(map);
      }
    } else if (userMarkerRef.current) {
      map.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }
  }, [userLocation?.lat, userLocation?.lon]);

  // 5. Button Actions: Recenter Driver, Fit Active Route, Fit All Stops
  const handleRecenterDriver = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      map.setView([userLocation.lat, userLocation.lon], 17, { animate: true });
    } else if (destination && !isNaN(destination.lat) && !isNaN(destination.lon)) {
      map.setView([destination.lat, destination.lon], 17, { animate: true });
    }
  };

  const handleFitActiveRoute = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routePolylineRef.current) {
      map.fitBounds(routePolylineRef.current.getBounds(), { padding: [30, 30], maxZoom: 17 });
    } else if (userLocation && destination && !isNaN(destination.lat)) {
      const bounds = L.latLngBounds(
        [userLocation.lat, userLocation.lon],
        [destination.lat, destination.lon]
      );
      map.fitBounds(bounds, { padding: [35, 35], maxZoom: 17 });
    }
  };

  const handleFitAllStops = () => {
    const map = mapInstanceRef.current;
    if (!map || !allStops || allStops.length === 0) return;

    const validCoords: L.LatLngExpression[] = allStops
      .filter((s) => typeof s.lat === 'number' && typeof s.lon === 'number' && !isNaN(s.lat) && !isNaN(s.lon) && (s.lat !== 0 || s.lon !== 0))
      .map((s) => [s.lat, s.lon]);

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      validCoords.push([userLocation.lat, userLocation.lon]);
    }

    if (validCoords.length > 0) {
      const fullBounds = L.latLngBounds(validCoords);
      map.fitBounds(fullBounds, { padding: [35, 35], maxZoom: 16 });
    }
  };

  return (
    <div 
      className="relative w-full h-full min-h-0 flex-1 overflow-hidden bg-neutral-950"
      style={{ flex: '1 1 0%', width: '100%', height: '100%', minHeight: 0, position: 'relative' }}
    >
      <div 
        ref={mapContainerRef} 
        className="w-full h-full absolute inset-0"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Top Overlay: Customer List Stats & Coordinates Notice */}
      <div className="absolute top-2 left-2 z-[1000] pointer-events-none flex flex-wrap items-center gap-1.5 max-w-[85%]">
        <div className="px-2 py-0.5 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono font-bold text-white shadow-md backdrop-blur-sm flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>{stats.total > 0 ? `${stats.total} Stops` : '1 Destination'}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-emerald-400">{stats.completed} Done</span>
          <span className="text-neutral-500">·</span>
          <span className="text-sky-400">{stats.pending} Left</span>
          {stats.skipped > 0 && (
            <>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">{stats.skipped} Skipped</span>
            </>
          )}
        </div>
        {stats.missingCoords > 0 && (
          <div className="px-1.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/60 text-[9px] font-mono font-bold text-amber-300">
            {stats.missingCoords} missing GPS
          </div>
        )}
      </div>

      {/* Floating Action Controls on Right Side (Requirements 6 & 7) */}
      <div className="absolute bottom-2.5 right-2.5 z-[1000] flex flex-col gap-1.5">
        <button
          onClick={handleFitAllStops}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-sky-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Fit all customer stops on route"
        >
          <Layers className="w-4 h-4" />
        </button>
        <button
          onClick={handleFitActiveRoute}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Fit active route to next customer"
        >
          <Crosshair className="w-4 h-4" />
        </button>
        <button
          onClick={handleRecenterDriver}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-emerald-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Center on current vehicle GPS position"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Attribution overlay badge */}
      <div className="absolute bottom-1 left-2 z-[1000] pointer-events-none text-[9px] font-mono text-neutral-400/80 bg-black/60 px-1.5 py-0.5 rounded">
        © OpenStreetMap
      </div>
    </div>
  );
};
