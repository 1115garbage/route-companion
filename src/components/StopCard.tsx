import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RouteStop, AppSettings } from '../types/route';
import { TurnByTurnPanel } from './TurnByTurnPanel';
import { RoadMapView } from './RoadMapView';
import { GpsLocation } from '../utils/useGpsTracker';
import { getStopHouseNumber } from '../utils/gpxParser';
import { 
  ChevronLeft, 
  SkipForward, 
  CheckCircle2, 
  List, 
  Map,
  ArrowLeft
} from 'lucide-react';

interface StopCardProps {
  stop: RouteStop;
  allStops?: RouteStop[];
  onSelectStop?: (index: number) => void;
  previousStop?: RouteStop;
  nextStop?: RouteStop;
  userLocation: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentFeet: number | null;
  isWithinGeofence: boolean;
  isConfirmedArrival?: boolean;
  isSharedLocationWithPrevious: boolean;
  isSharedLocationWithNext: boolean;
  autoArrivalStatus: string;
  currentIndex: number;
  totalStops: number;
  completedCount: number;
  skippedCount: number;
  settings: AppSettings;
  onMarkPickedUp: () => void;
  onSkip: () => void;
  onPrevious: () => void;
  onJumpToStopList: () => void;
  arrivalRadiusMeters?: number;
  arrivalConfirmFeet?: number;
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
  onOpenSettings?: () => void;
  diagLogs?: string[];
}

export const StopCard: React.FC<StopCardProps> = ({
  stop,
  allStops = [],
  onSelectStop,
  previousStop,
  nextStop,
  userLocation,
  gpsStatus,
  gpsErrorMsg,
  distanceToCurrentFeet,
  isWithinGeofence,
  isConfirmedArrival = false,
  autoArrivalStatus,
  currentIndex,
  totalStops,
  settings,
  onMarkPickedUp,
  onSkip,
  onPrevious,
  onJumpToStopList,
  arrivalRadiusMeters,
  arrivalConfirmFeet,
  isPassedWithoutCompletion,
  simulateApproachAndPass,
  simulateApproachAndArrive,
  simulateCurbsidePassThrough,
  isSimulatingGps,
  isSimPaused,
  simSpeedMultiplier,
  startFullRouteSimulation,
  pauseSimulation,
  resumeSimulation,
  setSimulationSpeed,
  restartSimulation,
  stopGpsSimulation,
  onRouteCoordinatesUpdate,
  onRoadRemainingUpdate,
  onOpenSettings,
  diagLogs,
}) => {
  const isDark = settings.theme === 'amoled-black';

  // Toggle map view on/off (defaults to map-free large-text navigation)
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);

  const handleRouteCoordinatesUpdate = (coords: [number, number][]) => {
    setRouteCoordinates(coords);
    onRouteCoordinatesUpdate?.(coords);
  };

  // Extract true house number from the customer's delivery address data (never stop sequence e.g. "002")
  const displayHouseNumber = getStopHouseNumber(stop, currentIndex);

  // Filter GPS speed reading to discard anomalies and spikes
  const lastSpeedRef = useRef<{ speed: number; timestamp: number } | null>(null);

  const getFilteredSpeed = (): number | null => {
    if (!userLocation || gpsStatus === 'denied') return null;
    const rawSpeed = userLocation.speed;
    if (rawSpeed === null || rawSpeed === undefined || isNaN(rawSpeed) || rawSpeed < 0) {
      return null;
    }
    // Filter poor GPS accuracy fixes (> 35m)
    if (userLocation.accuracy && userLocation.accuracy > 35) {
      return null;
    }
    // Filter physical impossibility for delivery route (> 95 mph)
    if (rawSpeed > 95) {
      return null;
    }

    const now = userLocation.timestamp || Date.now();
    const last = lastSpeedRef.current;
    if (last !== null) {
      const dt = Math.max(0.5, (now - last.timestamp) / 1000);
      const diff = Math.abs(rawSpeed - last.speed);
      // Realistic acceleration threshold: > 25 mph/s jump rejected if above 30 mph
      if (dt < 3 && diff > 25 * dt && rawSpeed > 30) {
        return last.speed;
      }
    }

    lastSpeedRef.current = { speed: rawSpeed, timestamp: now };
    return rawSpeed;
  };

  const currentSpeedMph = getFilteredSpeed();
  const displaySpeed = currentSpeedMph !== null ? Math.round(currentSpeedMph) : null;

  return (
    <div className="flex flex-col h-full justify-between pb-safe select-none overflow-hidden">
      {/* 1. Turn-by-Turn Navigation Panel at the very top (compacted for S26 viewport) */}
      <div className="shrink-0">
        <TurnByTurnPanel
          currentStop={stop}
          previousStop={previousStop}
          nextStop={nextStop}
          userLocation={userLocation}
          gpsStatus={gpsStatus}
          gpsErrorMsg={gpsErrorMsg}
          distanceToCurrentFeet={distanceToCurrentFeet}
          isDark={isDark}
          arrivalRadiusMeters={arrivalRadiusMeters || settings.arrivalRadiusMeters || 152.4}
          isWithinGeofence={isWithinGeofence}
          isConfirmedArrival={isConfirmedArrival}
          autoArrivalStatus={autoArrivalStatus}
          isPassedWithoutCompletion={isPassedWithoutCompletion}
          simulateApproachAndPass={simulateApproachAndPass}
          simulateApproachAndArrive={simulateApproachAndArrive}
          simulateCurbsidePassThrough={simulateCurbsidePassThrough}
          isSimulatingGps={isSimulatingGps}
          isSimPaused={isSimPaused}
          simSpeedMultiplier={simSpeedMultiplier}
          startFullRouteSimulation={startFullRouteSimulation}
          pauseSimulation={pauseSimulation}
          resumeSimulation={resumeSimulation}
          setSimulationSpeed={setSimulationSpeed}
          restartSimulation={restartSimulation}
          stopGpsSimulation={stopGpsSimulation}
          onRouteCoordinatesUpdate={handleRouteCoordinatesUpdate}
          onRoadRemainingUpdate={onRoadRemainingUpdate}
          onSkipCustomer={onSkip}
          voiceAnnouncement={settings.voiceAnnouncement}
          turnWarningDistancesFeet={settings.turnWarningDistancesFeet || [500, 200]}
          onOpenSettings={onOpenSettings}
          diagLogs={diagLogs}
        />
      </div>

      {/* 2A. Header Row 1: Stop Number (Left) + Show Map & Previous Customer (Right) on the same line */}
      <div className="shrink-0 flex items-center justify-between px-1 py-0.5 mb-1 gap-2">
        {/* Customer 1 of xxx on the left */}
        <button
          onClick={onJumpToStopList}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-400 hover:text-white transition-colors shrink-0"
          title="Open Stop List"
        >
          <span className="text-emerald-400">STOP {currentIndex + 1} OF {totalStops}</span>
          <List className="w-3.5 h-3.5 text-neutral-500" />
        </button>

        {/* Show Map and Previous Customer options on the same line */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsMapOpen((prev) => !prev)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 border ${
              isMapOpen
                ? 'bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-950/40'
                : 'bg-neutral-900 hover:bg-neutral-800 text-amber-400 border-neutral-700'
            }`}
            title={isMapOpen ? 'Hide road map' : 'Show road map'}
          >
            <Map className="w-3.5 h-3.5" />
            <span>{isMapOpen ? 'Hide Map' : 'Show Map'}</span>
          </button>

          {currentIndex > 0 && (
            <button
              onClick={onPrevious}
              className="flex items-center gap-1 text-[11px] font-semibold text-neutral-400 hover:text-white px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors active:scale-95"
              title="Return to previous customer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
          )}
        </div>
      </div>

      {/* 2B. Header Row 2: Speed Display on the left (Original width ~80px, 3x in vertical length / height) */}
      <div className="shrink-0 px-1 mb-1.5 flex items-center justify-start">
        <div 
          className="w-20 h-20 bg-white text-black rounded-2xl border-2 border-neutral-300 shadow-lg flex flex-col items-center justify-center font-mono shrink-0 select-none"
          title="Live vehicle speed from GPS updates"
        >
          <span className="text-3xl sm:text-4xl font-black text-black leading-none tracking-tight">
            {displaySpeed !== null ? displaySpeed : '--'}
          </span>
          <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest leading-none mt-1">
            MPH
          </span>
        </div>
      </div>

      {/* 3 & 4. Main Display Area: Large Customer Name + Large Yellow House-Number Block */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto py-1 text-center shrink-0 min-h-fit">
        {/* Customer's Name in Large Text */}
        <h1 className={`text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-2 sm:mb-3 px-2 max-w-md break-words text-center shrink-0 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {stop.name || 'Customer'}
        </h1>

        {/* Yellow House-Number Block with Very Large Number */}
        <div 
          className="bg-amber-400 text-black border-2 border-amber-300 rounded-2xl px-6 py-2.5 sm:py-3 flex items-center justify-center shadow-xl min-w-[160px] max-w-[260px] transition-transform active:scale-95 shrink-0"
        >
          <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter leading-none">
            {displayHouseNumber}
          </span>
        </div>
      </div>

      {/* FULL SCREEN ROAD MAP OVERLAY (Takes up the entire screen view when Show Map is tapped) */}
      {isMapOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex flex-col bg-black overflow-hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 99999,
          }}
        >
          {/* Top Bar on Full Screen Map */}
          <div className="shrink-0 bg-neutral-950/95 border-b border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md pt-safe">
            <button
              onClick={() => setIsMapOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs transition-all active:scale-95 border border-neutral-700 shadow"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Hide Map</span>
            </button>

            {/* Map View Header (No customer name or house number on display) */}
            <div className="flex-1 text-center font-mono font-bold text-xs text-neutral-400">
              MAP OVERVIEW
            </div>

            <button
              onClick={() => {
                setIsMapOpen(false);
                onJumpToStopList();
              }}
              className="p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl border border-neutral-700 transition-colors"
              title="Stop list"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Full Screen Map Body - Takes 100% of the screen */}
          <div 
            className="flex-1 w-full min-h-0 relative flex flex-col overflow-hidden" 
            style={{ flex: '1 1 0%', minHeight: 0, height: '100%' }}
          >
            <RoadMapView
              userLocation={userLocation}
              destination={{
                lat: stop.lat,
                lon: stop.lon,
                name: stop.name,
                houseNumber: displayHouseNumber,
                address: stop.fullAddress,
              }}
              activeStopIndex={currentIndex}
              allStops={allStops}
              onSelectStop={onSelectStop}
              routeCoordinates={routeCoordinates}
              isDark={isDark}
            />
          </div>

          {/* Bottom Driving Control Bar on Full Screen Map */}
          <div className="shrink-0 bg-neutral-950/95 border-t border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md pb-safe">
            {/* Speed Display */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl border-2 border-neutral-300 font-mono shadow shrink-0">
              <span className="text-xl font-black leading-none">{displaySpeed !== null ? displaySpeed : '--'}</span>
              <span className="text-[10px] font-black uppercase text-neutral-800">MPH</span>
            </div>

            {/* Quick Actions while in Full Screen Map */}
            <div className="flex items-center gap-2 flex-1 max-w-xs justify-end">
              <button
                onClick={onSkip}
                className="flex-1 py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all"
              >
                <SkipForward className="w-3.5 h-3.5" />
                <span>Skip</span>
              </button>
              <button
                onClick={onMarkPickedUp}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Picked Up</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 5. Bottom Action Buttons: Green MARK PICKED UP + Orange SKIP CUSTOMER */}
      <div className="shrink-0 pt-1.5 space-y-2">
        {/* Green MARK PICKED UP Button */}
        <button
          onClick={onMarkPickedUp}
          className="w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-emerald-300 shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]"
        >
          <CheckCircle2 className="w-5 h-5 stroke-[3]" />
          <span>Mark Picked Up</span>
        </button>

        {/* Orange SKIP CUSTOMER Button */}
        <button
          onClick={onSkip}
          className="w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-amber-500 hover:bg-amber-400 text-black border-2 border-amber-300 shadow-lg shadow-amber-950/40 transition-all active:scale-[0.98]"
        >
          <SkipForward className="w-5 h-5 stroke-[3]" />
          <span>Skip Customer</span>
        </button>
      </div>
    </div>
  );
};
