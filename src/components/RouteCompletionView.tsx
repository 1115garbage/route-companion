import React from 'react';
import { RouteStop } from '../types/route';
import { CheckCircle2, SkipForward, RotateCcw, Download, Sparkles, Navigation } from 'lucide-react';
import { exportToGPX } from '../utils/gpxParser';

interface RouteCompletionViewProps {
  stops: RouteStop[];
  routeName: string;
  isDark: boolean;
  onRestart: () => void;
  onJumpToStop: (index: number) => void;
  onLoadNewRoute: () => void;
}

export const RouteCompletionView: React.FC<RouteCompletionViewProps> = ({
  stops,
  routeName,
  isDark,
  onRestart,
  onJumpToStop,
  onLoadNewRoute,
}) => {
  const completedCount = stops.filter((s) => s.status === 'completed').length;
  const skippedStops = stops
    .map((stop, index) => ({ stop, index }))
    .filter(({ stop }) => stop.status === 'skipped');

  const handleDownload = () => {
    const xml = exportToGPX(stops, routeName);
    const blob = new Blob([xml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${routeName.replace(/\s+/g, '_')}_summary.gpx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full justify-between p-4 max-w-lg mx-auto w-full text-center">
      <div className="my-auto space-y-5">
        {/* Celebration Trophy / Ring */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/40">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
            Route Complete
          </span>
          <h1 className="text-3xl font-black mt-1 text-white">
            All Customers Processed
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            {routeName}
          </p>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
              Completed
            </span>
            <span className="text-2xl font-black text-emerald-400 mt-0.5 block font-mono">
              {completedCount}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
              Skipped
            </span>
            <span className="text-2xl font-black text-amber-400 mt-0.5 block font-mono">
              {skippedStops.length}
            </span>
          </div>
        </div>

        {/* Skipped Stops Review List */}
        {skippedStops.length > 0 ? (
          <div className="text-left bg-neutral-950 rounded-2xl border border-neutral-800 p-4 max-h-56 overflow-y-auto space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400 border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5">
                <SkipForward className="w-3.5 h-3.5" />
                Skipped Customers ({skippedStops.length})
              </span>
              <span className="text-[10px] text-neutral-400">Tap to Revisit</span>
            </div>

            {skippedStops.map(({ stop, index }) => (
              <div
                key={stop.id}
                onClick={() => onJumpToStop(index)}
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-neutral-200">
                    #{stop.orderIndex}. {stop.name}
                  </span>
                  <p className="text-[11px] text-neutral-400 truncate max-w-[220px]">
                    {stop.fullAddress}
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  Re-visit
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300">
            ★ Perfect run! Zero skipped customers.
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-4">
        <button
          onClick={handleDownload}
          className="w-full h-12 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Final GPX Route</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onRestart}
            className="h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 border border-neutral-800 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Restart Route</span>
          </button>

          <button
            onClick={onLoadNewRoute}
            className="h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Load New GPX</span>
          </button>
        </div>
      </div>
    </div>
  );
};
