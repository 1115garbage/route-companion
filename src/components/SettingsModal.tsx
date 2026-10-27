import React from 'react';
import { AppSettings } from '../types/route';
import { X, Moon, Sun, Volume2, Smartphone, Eye, Sparkles, Trash2, RotateCcw, FolderOpen, CheckCircle2 } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  isDark: boolean;
  settings: AppSettings;
  onClose: () => void;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onOpenImport: () => void;
  onResetProgress: () => void;
  onClearRoute: () => void;
  onOpenExport?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  isDark,
  settings,
  onClose,
  onUpdateSettings,
  onOpenImport,
  onResetProgress,
  onClearRoute,
  onOpenExport,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-10 h-10 rounded-xl border border-emerald-400/60 shadow shrink-0 object-cover" 
            />
            <div>
              <h2 className="text-lg font-black tracking-tight">Garbage Route Settings</h2>
              <p className="text-xs text-neutral-400 mt-0.5">Driver & Navigation Preferences</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Theme Mode: AMOLED Black vs High Contrast Day */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Display Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onUpdateSettings({ theme: 'amoled-black' })}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  settings.theme === 'amoled-black'
                    ? 'border-emerald-400 bg-neutral-950 text-white ring-2 ring-emerald-500/30'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Moon className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold">AMOLED Pitch Black</span>
                <span className="text-[10px] text-neutral-400">Saves battery & high OLED contrast</span>
              </button>

              <button
                onClick={() => onUpdateSettings({ theme: 'high-contrast-day' })}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                  settings.theme === 'high-contrast-day'
                    ? 'border-emerald-400 bg-neutral-100 text-black ring-2 ring-emerald-500/30'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Sun className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold">Daylight High Contrast</span>
                <span className="text-[10px] text-neutral-400">Direct sunlight in vehicle mount</span>
              </button>
            </div>
          </div>

          {/* Screen Wake Lock */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Keep Screen Awake</h4>
                <p className="text-[11px] text-neutral-400">Prevents phone display from sleeping while on route</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.keepScreenAwake}
              onChange={(e) => onUpdateSettings({ keepScreenAwake: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Voice Announcements & Spoken Turn Warnings */}
          <div className="p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Voice Guidance & Turn Warnings</h4>
                  <p className="text-[11px] text-neutral-400">Speaks next customer stops & upcoming turn maneuvers</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={settings.voiceAnnouncement}
                onChange={(e) => onUpdateSettings({ voiceAnnouncement: e.target.checked })}
                className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

            {settings.voiceAnnouncement && (
              <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-neutral-300">Early Turn Warning Distance</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {(settings.turnWarningDistancesFeet && settings.turnWarningDistancesFeet[0]) || 500} ft
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                  {[
                    { distances: [500], label: '500 ft', sub: 'Standard (Rec)' },
                    { distances: [600], label: '600 ft', sub: 'Highway / Fast' },
                    { distances: [400], label: '400 ft', sub: 'Dense City' },
                  ].map((preset) => {
                    const currentDist = (settings.turnWarningDistancesFeet && settings.turnWarningDistancesFeet[0]) || 500;
                    const isSelected = currentDist === preset.distances[0];
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => onUpdateSettings({ turnWarningDistancesFeet: preset.distances })}
                        className={`py-1.5 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50'
                            : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <span className="text-xs">{preset.label}</span>
                        <span className="text-[9px] text-neutral-500">{preset.sub}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-neutral-500">
                  Spoken voice announces the upcoming maneuver and distance in advance (e.g. &ldquo;Turn left in 500 feet&rdquo;), followed by a direct instruction at the turn point (e.g. &ldquo;Turn left&rdquo;).
                </p>
              </div>
            )}
          </div>

          {/* Haptic Vibration */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Haptic Vibration</h4>
                <p className="text-[11px] text-neutral-400">Tactile vibration feedback on button press</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.hapticFeedback}
              onChange={(e) => onUpdateSettings({ hapticFeedback: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Extra Large Font */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Extra Large Typography</h4>
                <p className="text-[11px] text-neutral-400">Maximizes readability from distance on dash mount</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.extraLargeText}
              onChange={(e) => onUpdateSettings({ extraLargeText: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Automatic Arrival Radius (Configurable 50m / ~164ft default) */}
          <div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Arrival Proximity Window</h4>
                  <p className="text-[11px] text-neutral-400">Distance window for evaluating approaching stops</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400">
                {Math.round((settings.arrivalRadiusMeters || 152.4) * 3.28084)} ft ({Math.round(settings.arrivalRadiusMeters || 152.4)}m)
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {[
                { meters: 50, label: '50m', sub: '164 ft' },
                { meters: 75, label: '75m', sub: '246 ft' },
                { meters: 100, label: '100m', sub: '328 ft' },
                { meters: 152.4, label: '152m', sub: '500 ft', rec: true },
                { meters: 200, label: '200m', sub: '656 ft' },
              ].map((item) => {
                const isSelected = Math.abs((settings.arrivalRadiusMeters || 152.4) - item.meters) < 1;
                return (
                  <button
                    key={item.meters}
                    type="button"
                    onClick={() => onUpdateSettings({ arrivalRadiusMeters: item.meters })}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-bold ring-1 ring-amber-400/50'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[9px] text-neutral-500">{item.sub}</span>
                    {item.rec && (
                      <span className="text-[8px] text-emerald-400 font-mono mt-0.5">Rec</span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-neutral-500">
              500 ft (~152m) is the proximity window for evaluating an approaching customer. Arrival is confirmed when reaching the curbside or passing the address.
            </p>
          </div>

          {/* Configurable Arrival Confirmation Threshold (Default 150 ft / ~46m) */}
          <div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Arrival Confirmation Threshold</h4>
                  <p className="text-[11px] text-neutral-400">Curbside stop or pass-through threshold</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {settings.arrivalConfirmFeet || 150} ft ({Math.round((settings.arrivalConfirmFeet || 150) * 0.3048)}m)
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {[
                { feet: 100, label: '100 ft', sub: '30m' },
                { feet: 125, label: '125 ft', sub: '38m' },
                { feet: 150, label: '150 ft', sub: '46m', rec: true },
                { feet: 175, label: '175 ft', sub: '53m' },
                { feet: 200, label: '200 ft', sub: '61m' },
              ].map((item) => {
                const isSelected = (settings.arrivalConfirmFeet || 150) === item.feet;
                return (
                  <button
                    key={item.feet}
                    type="button"
                    onClick={() => onUpdateSettings({ arrivalConfirmFeet: item.feet })}
                    className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[9px] text-neutral-500">{item.sub}</span>
                    {item.rec && (
                      <span className="text-[8px] text-emerald-400 font-mono mt-0.5">Rec</span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-neutral-500">
              150 ft accounts for customer house/driveway setbacks from the street curb and GPS horizontal accuracy. Arrival confirms upon stopping or passing at delivery speed.
            </p>
          </div>

          {/* Route Management Section */}
          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Route Management
            </label>

            <button
              onClick={() => {
                onClose();
                onOpenExport?.();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-blue-800 hover:border-blue-700 bg-blue-950/40 text-xs font-bold text-blue-300 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span>Export Project Source (.ZIP)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 font-mono">Step 1</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenImport();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-neutral-400" />
                <span>Import Different GPX File</span>
              </div>
              <span className="text-[10px] text-neutral-400">Browse...</span>
            </button>

            <button
              onClick={() => {
                onResetProgress();
                onClose();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Reset Progress to Stop 1</span>
              </div>
              <span className="text-[10px] text-neutral-400">Keep stops</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Clear current route and load fresh GPX?')) {
                  onClearRoute();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-red-900/60 hover:border-red-800 bg-red-950/20 text-xs font-bold text-red-300 hover:text-red-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-red-400" />
                <span>Clear Loaded Route</span>
              </div>
              <span className="text-[10px] text-red-400/80">Delete</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 flex justify-end bg-neutral-950/40">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
