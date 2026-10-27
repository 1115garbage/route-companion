/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RouteData, RouteStop, AppSettings } from './types/route';
import { parseGPX, getStopHouseNumber } from './utils/gpxParser';
import { SAMPLE_GPX_ROUTES } from './utils/sampleRoutes';
import { triggerHaptic, announceStop, requestWakeLock, releaseWakeLock, cancelTurnAnnouncements } from './utils/voiceAndHaptics';
import { StopCard } from './components/StopCard';
import { GpxImportModal } from './components/GpxImportModal';
import { RouteListDrawer } from './components/RouteListDrawer';
import { SettingsModal } from './components/SettingsModal';
import { RouteCompletionView } from './components/RouteCompletionView';
import { ExportModal } from './components/ExportModal';
import { useGpsTracker } from './utils/useGpsTracker';
import { 
  Compass, 
  Upload, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const STORAGE_KEY = 'osmand_route_assistant_v1';
const SETTINGS_KEY = 'osmand_route_assistant_settings_v1';

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'amoled-black',
  voiceAnnouncement: true,
  hapticFeedback: true,
  keepScreenAwake: true,
  extraLargeText: false,
  arrivalRadiusMeters: 152.4, // Configurable 500-foot proximity window default
  arrivalConfirmFeet: 150, // Configurable 150-foot arrival confirmation threshold default
  turnWarningDistancesFeet: [500], // Early advance turn warning distance in feet (followed by direct turn instruction at turn point)
};

export default function App() {
  // Load settings from localStorage
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      // fallback
    }
    return DEFAULT_SETTINGS;
  });

  // Load route data from localStorage or initialize with sample route
  const [routeData, setRouteData] = useState<RouteData | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.stops) && parsed.stops.length > 0) {
          // Sanitize/re-extract house numbers so any stale "002" stop sequence numbers
          // are restored to the genuine house number extracted from the customer's delivery address!
          const healedStops = parsed.stops.map((s: RouteStop, idx: number) => {
            const trueHouseNumber = getStopHouseNumber(s, idx);
            return {
              ...s,
              houseNumber: trueHouseNumber !== '—' ? trueHouseNumber : (s.houseNumber && !/^0+\d+$/.test(s.houseNumber) ? s.houseNumber : ''),
            };
          });
          return {
            ...parsed,
            stops: healedStops,
          };
        }
      }
    } catch (e) {
      // fallback
    }

    // Default: initialize with first sample route so app is immediately usable
    try {
      const defaultPreset = SAMPLE_GPX_ROUTES[0];
      const parsed = parseGPX(defaultPreset.gpxXml, defaultPreset.title);
      return {
        id: defaultPreset.id,
        name: parsed.routeName,
        filename: `${defaultPreset.id}.gpx`,
        stops: parsed.stops,
        currentIndex: 0,
        importedAt: Date.now(),
        lastUpdated: Date.now(),
      };
    } catch (e) {
      return null;
    }
  });

  // Modals & Drawers state
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [skipToast, setSkipToast] = useState<{ message: string; previousIndex: number } | null>(null);
  const [arrivalToast, setArrivalToast] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Direct Android file picker import handler
  const handleDirectFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const cleanFileName = file.name.replace(/\.[^/.]+$/, '');
      const { stops, routeName } = parseGPX(text, cleanFileName);

      if (stops.length === 0) {
        throw new Error('No waypoints found in the selected GPX file.');
      }

      if (settings.hapticFeedback) triggerHaptic('complete');

      // Replace sample customers with the imported customers
      const newRoute: RouteData = {
        id: `route-${Date.now().toString(36)}`,
        name: routeName || file.name,
        filename: file.name,
        stops: stops, // exact file order preserved
        currentIndex: 0,
        importedAt: Date.now(),
        lastUpdated: Date.now(),
      };

      setRouteData(newRoute);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRoute));
      } catch (err) {
        console.error('Storage error', err);
      }

      setArrivalToast(`Imported ${file.name} (${stops.length} stops)`);
      setTimeout(() => setArrivalToast(null), 4000);
    } catch (err: any) {
      setArrivalToast(err.message || 'Failed to read or parse GPX file.');
      setTimeout(() => setArrivalToast(null), 4000);
    } finally {
      if (e.target) {
        e.target.value = '';
      }
    }
  };

  // Sync route data to localStorage whenever it changes
  useEffect(() => {
    if (routeData) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(routeData));
      } catch (e) {
        console.error('Failed to save route to localStorage', e);
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [routeData]);

  // Sync settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }, [settings]);

  // Handle Screen WakeLock
  useEffect(() => {
    if (settings.keepScreenAwake) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    return () => {
      releaseWakeLock();
    };
  }, [settings.keepScreenAwake]);

  // Voice announcement on customer stop change
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (settings.voiceAnnouncement && routeData && routeData.stops[routeData.currentIndex]) {
      const current = routeData.stops[routeData.currentIndex];
      const houseNumber = getStopHouseNumber(current, routeData.currentIndex);
      announceStop(current.name, houseNumber !== '—' ? houseNumber : '');
    }
  }, [routeData?.currentIndex, settings.voiceAnnouncement]);

  const isDark = settings.theme === 'amoled-black';

  // Automatic GPS Arrival Advance (within ~50 feet / 15m)
  const handleAutoArrive = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('complete');

    const arrivedStop = routeData.stops[routeData.currentIndex];

    setRouteData((prev) => {
      if (!prev) return null;
      const nextIndex = prev.currentIndex + 1;
      const updatedStops = [...prev.stops];

      // Mark current stop as completed
      if (updatedStops[prev.currentIndex]) {
        updatedStops[prev.currentIndex] = {
          ...updatedStops[prev.currentIndex],
          status: 'completed',
          statusTimestamp: Date.now(),
        };
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    if (arrivedStop) {
      setArrivalToast(`Auto-Arrived: #${arrivedStop.orderIndex} ${arrivedStop.name}`);
      setTimeout(() => {
        setArrivalToast(null);
      }, 3500);
    }
  };

  // Mark Customer as Picked Up (Manual confirmation)
  const lastMarkPickedUpTimeRef = useRef<number>(0);
  const handleMarkPickedUp = () => {
    if (!routeData) return;
    const now = Date.now();
    // Guard against repeated rapid events or double clicks completing multiple customers
    if (now - lastMarkPickedUpTimeRef.current < 750) return;
    lastMarkPickedUpTimeRef.current = now;

    if (settings.hapticFeedback) triggerHaptic('complete');
    cancelTurnAnnouncements();

    const currentIdx = routeData.currentIndex;
    if (currentIdx >= routeData.stops.length) return;
    const pickedUpStop = routeData.stops[currentIdx];

    setRouteData((prev) => {
      if (!prev || prev.currentIndex >= prev.stops.length) return prev;
      const prevIdx = prev.currentIndex;
      const updatedStops = [...prev.stops];

      // 1. Mark current stop as completed
      if (updatedStops[prevIdx]) {
        updatedStops[prevIdx] = {
          ...updatedStops[prevIdx],
          status: 'completed',
          statusTimestamp: Date.now(),
        };
      }

      // 2. Advance to the next uncompleted customer in the existing route sequence
      let nextIndex = prevIdx + 1;
      while (nextIndex < updatedStops.length && updatedStops[nextIndex].status === 'completed') {
        nextIndex++;
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    if (pickedUpStop) {
      setArrivalToast(`Picked Up: #${pickedUpStop.orderIndex} ${pickedUpStop.name}`);
      setTimeout(() => {
        setArrivalToast(null);
      }, 3500);
    }
  };

  // Skip Customer Immediately
  const handleSkipCustomer = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('skip');

    const skippedStop = routeData.stops[routeData.currentIndex];
    const prevIdx = routeData.currentIndex;

    setRouteData((prev) => {
      if (!prev) return null;
      const nextIndex = prev.currentIndex + 1;
      const updatedStops = [...prev.stops];

      if (updatedStops[prev.currentIndex]) {
        updatedStops[prev.currentIndex] = {
          ...updatedStops[prev.currentIndex],
          status: 'skipped',
          statusTimestamp: Date.now(),
        };
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    // Show temporary Undo toast
    if (skippedStop) {
      setSkipToast({
        message: `Skipped: #${skippedStop.orderIndex} ${skippedStop.name}`,
        previousIndex: prevIdx,
      });
      setTimeout(() => {
        setSkipToast(null);
      }, 4000);
    }
  };

  // Return to Previous Customer
  const handlePreviousCustomer = () => {
    if (!routeData || routeData.currentIndex <= 0) return;
    if (settings.hapticFeedback) triggerHaptic('undo');

    setRouteData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: prev.currentIndex - 1,
        lastUpdated: Date.now(),
      };
    });
  };

  // Undo accidental skip from toast
  const handleUndoSkip = () => {
    if (!skipToast || !routeData) return;
    if (settings.hapticFeedback) triggerHaptic('undo');

    const restoreIndex = skipToast.previousIndex;
    setRouteData((prev) => {
      if (!prev) return null;
      const updatedStops = [...prev.stops];
      if (updatedStops[restoreIndex]) {
        updatedStops[restoreIndex] = {
          ...updatedStops[restoreIndex],
          status: 'pending',
        };
      }
      return {
        ...prev,
        stops: updatedStops,
        currentIndex: restoreIndex,
        lastUpdated: Date.now(),
      };
    });
    setSkipToast(null);
  };

  // Jump to specific stop from list
  const handleJumpToStop = (index: number) => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('tap');

    setRouteData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: Math.max(0, Math.min(index, prev.stops.length)),
        lastUpdated: Date.now(),
      };
    });
  };

  // Reset route progress to Stop 1
  const handleResetProgress = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('tap');

    setRouteData((prev) => {
      if (!prev) return null;
      const resetStops = prev.stops.map((s) => ({
        ...s,
        status: 'pending' as const,
        statusTimestamp: undefined,
      }));
      return {
        ...prev,
        stops: resetStops,
        currentIndex: 0,
        lastUpdated: Date.now(),
      };
    });
  };

  // Handle successful import of new GPX
  const handleImportSuccess = (stops: RouteStop[], routeName: string, filename: string) => {
    if (settings.hapticFeedback) triggerHaptic('tap');
    const newRoute: RouteData = {
      id: `route-${Date.now().toString(36)}`,
      name: routeName,
      filename,
      stops,
      currentIndex: 0,
      importedAt: Date.now(),
      lastUpdated: Date.now(),
    };
    setRouteData(newRoute);
  };

  // Clear current route
  const handleClearRoute = () => {
    setRouteData(null);
  };

  const currentStop = routeData && routeData.currentIndex < routeData.stops.length
    ? routeData.stops[routeData.currentIndex]
    : null;

  const previousStop = routeData && routeData.currentIndex > 0
    ? routeData.stops[routeData.currentIndex - 1]
    : null;

  const nextStop = routeData && routeData.currentIndex < routeData.stops.length - 1
    ? routeData.stops[routeData.currentIndex + 1]
    : null;

  // Route context for parallel road rejection and driving distance tracking
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [roadRemainingMeters, setRoadRemainingMeters] = useState<number | null>(null);

  // Clear route context when active stop changes
  useEffect(() => {
    setRouteCoordinates([]);
    setRoadRemainingMeters(null);
  }, [currentStop?.id]);

  // Backup route data before simulation so exiting restores original state cleanly
  const backupRouteDataRef = useRef<RouteData | null>(null);

  const handleSimulationStart = useCallback(() => {
    if (routeData && !backupRouteDataRef.current) {
      backupRouteDataRef.current = JSON.parse(JSON.stringify(routeData));
    }
  }, [routeData]);

  const handleExitSimulation = useCallback(() => {
    if (backupRouteDataRef.current) {
      setRouteData(backupRouteDataRef.current);
      backupRouteDataRef.current = null;
    }
  }, []);

  // Real GPS hardware tracking & configurable arrival engine with full route simulation
  const {
    location: userLocation,
    gpsStatus,
    gpsErrorMsg,
    distanceToCurrentFeet,
    isWithinGeofence,
    isConfirmedArrival,
    isSharedLocationWithPrevious,
    isSharedLocationWithNext,
    autoArrivalStatus,
    arrivalRadiusMeters,
    arrivalConfirmFeet,
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
  } = useGpsTracker(
    currentStop, 
    previousStop, 
    nextStop, 
    handleAutoArrive, 
    settings.arrivalRadiusMeters || 152.4,
    (settings.arrivalConfirmFeet ? settings.arrivalConfirmFeet * 0.3048 : 45.72),
    roadRemainingMeters,
    routeCoordinates,
    routeData?.stops,
    handleJumpToStop,
    handleResetProgress,
    handleSimulationStart,
    handleExitSimulation
  );

  const isRouteFinished = routeData && routeData.currentIndex >= routeData.stops.length;

  const completedCount = routeData ? routeData.stops.filter((s) => s.status === 'completed').length : 0;
  const skippedCount = routeData ? routeData.stops.filter((s) => s.status === 'skipped').length : 0;

  return (
    <div 
      className={`h-dvh max-h-dvh w-full overflow-hidden flex flex-col font-sans transition-colors duration-150 ${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-white text-black'
      }`}
    >
      {/* Hidden File Picker Input for Android File Picker */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleDirectFileImport}
        className="hidden"
      />

      {/* Main Screen Container - Fitted mobile viewport starting flush from top */}
      <main className="flex-1 w-full max-w-md mx-auto flex flex-col px-2.5 pt-1 pb-1 sm:px-3 sm:py-1.5 relative overflow-hidden">
        {/* Auto-Arrival Banner (Confirms automatic arrival without requiring manual input) */}
        {arrivalToast && (
          <div className="absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200">
            <div className="bg-emerald-500 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-emerald-300">
              <CheckCircle2 className="w-4 h-4 stroke-[3] shrink-0" />
              <span className="text-xs font-black truncate">
                {arrivalToast}
              </span>
            </div>
          </div>
        )}

        {/* Undo Toast when a customer was skipped */}
        {skipToast && (
          <div className="absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200">
            <div className="bg-amber-400 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-amber-300">
              <span className="text-xs font-bold truncate max-w-[240px]">
                {skipToast.message}
              </span>
              <button
                onClick={handleUndoSkip}
                className="flex items-center gap-1 px-2.5 py-1 bg-black text-amber-300 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-neutral-900 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>
            </div>
          </div>
        )}

        {/* Case 1: Route finished / all customers visited */}
        {isRouteFinished ? (
          <RouteCompletionView
            stops={routeData.stops}
            routeName={routeData.name}
            isDark={isDark}
            onRestart={handleResetProgress}
            onJumpToStop={handleJumpToStop}
            onLoadNewRoute={() => setIsImportOpen(true)}
          />
        ) : currentStop && routeData ? (
          /* Case 2: Active customer stop card */
          <StopCard
            stop={currentStop}
            allStops={routeData.stops}
            onSelectStop={handleJumpToStop}
            previousStop={previousStop || undefined}
            nextStop={nextStop || undefined}
            userLocation={userLocation}
            gpsStatus={gpsStatus}
            gpsErrorMsg={gpsErrorMsg}
            distanceToCurrentFeet={distanceToCurrentFeet}
            isWithinGeofence={isWithinGeofence}
            isConfirmedArrival={isConfirmedArrival}
            isSharedLocationWithPrevious={isSharedLocationWithPrevious}
            isSharedLocationWithNext={isSharedLocationWithNext}
            autoArrivalStatus={autoArrivalStatus}
            currentIndex={routeData.currentIndex}
            totalStops={routeData.stops.length}
            completedCount={completedCount}
            skippedCount={skippedCount}
            settings={settings}
            onMarkPickedUp={handleMarkPickedUp}
            onSkip={handleSkipCustomer}
            onPrevious={handlePreviousCustomer}
            onJumpToStopList={() => setIsDrawerOpen(true)}
            arrivalRadiusMeters={arrivalRadiusMeters}
            arrivalConfirmFeet={arrivalConfirmFeet}
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
            onRouteCoordinatesUpdate={setRouteCoordinates}
            onRoadRemainingUpdate={setRoadRemainingMeters}
            diagLogs={diagLogs}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        ) : (
          /* Case 3: No route loaded */
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-20 h-20 rounded-3xl border-2 border-emerald-400/80 shadow-2xl object-cover" 
            />
            <div>
              <h2 className="text-2xl font-black text-white">Garbage Route</h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Import a customer GPX file from OsmAnd or pick a built-in delivery route to begin.
              </p>
            </div>
            <div className="space-y-2 w-full max-w-xs">
              <button
                onClick={() => setIsImportOpen(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40"
              >
                <Upload className="w-4 h-4" />
                <span>Import GPX File</span>
              </button>
              <button
                onClick={() => {
                  const defaultPreset = SAMPLE_GPX_ROUTES[0];
                  const parsed = parseGPX(defaultPreset.gpxXml, defaultPreset.title);
                  handleImportSuccess(parsed.stops, parsed.routeName, `${defaultPreset.id}.gpx`);
                }}
                className="w-full py-3 px-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Load Sample Route (20 Stops)</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Import Modal */}
      <GpxImportModal
        isOpen={isImportOpen}
        isDark={isDark}
        onClose={() => setIsImportOpen(false)}
        onImportSuccess={handleImportSuccess}
      />

      {/* Route List Drawer */}
      {routeData && (
        <RouteListDrawer
          isOpen={isDrawerOpen}
          isDark={isDark}
          stops={routeData.stops}
          currentIndex={routeData.currentIndex}
          routeName={routeData.name}
          onClose={() => setIsDrawerOpen(false)}
          onSelectStop={handleJumpToStop}
          onResetRoute={handleResetProgress}
        />
      )}

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        isDark={isDark}
        settings={settings}
        onClose={() => setIsSettingsOpen(false)}
        onUpdateSettings={(newSettings) => setSettings((s) => ({ ...s, ...newSettings }))}
        onOpenImport={() => setIsImportOpen(true)}
        onResetProgress={handleResetProgress}
        onClearRoute={handleClearRoute}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Export / APK Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
