import React, { useState } from 'react';
import { RouteStop } from '../types/route';
import { exportToGPX, getStopHouseNumber } from '../utils/gpxParser';
import { 
  X, 
  Search, 
  CheckCircle, 
  SkipForward, 
  Clock, 
  Download, 
  Navigation,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface RouteListDrawerProps {
  isOpen: boolean;
  isDark: boolean;
  stops: RouteStop[];
  currentIndex: number;
  routeName: string;
  onClose: () => void;
  onSelectStop: (index: number) => void;
  onResetRoute: () => void;
}

export const RouteListDrawer: React.FC<RouteListDrawerProps> = ({
  isOpen,
  isDark,
  stops,
  currentIndex,
  routeName,
  onClose,
  onSelectStop,
  onResetRoute,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredStops = stops
    .map((stop, originalIndex) => ({ stop, originalIndex }))
    .filter(({ stop, originalIndex }) => {
      const q = searchTerm.toLowerCase();
      const hNum = getStopHouseNumber(stop, originalIndex);
      return (
        stop.name.toLowerCase().includes(q) ||
        stop.fullAddress.toLowerCase().includes(q) ||
        (hNum !== '—' && hNum.toLowerCase().includes(q)) ||
        String(stop.orderIndex).includes(q)
      );
    });

  const handleDownloadGpx = () => {
    const xml = exportToGPX(stops, routeName);
    const blob = new Blob([xml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${routeName.replace(/\s+/g, '_')}_updated.gpx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-md h-full flex flex-col shadow-2xl border-l ${
          isDark ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-8 h-8 rounded-lg border border-emerald-400/50 shadow-sm shrink-0 object-cover" 
            />
            <div>
              <h2 className="font-black text-base tracking-tight">Garbage Route Sequence</h2>
              <p className="text-xs text-neutral-400">
                {stops.length} Total Waypoints · Preserved Order
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-neutral-800 bg-neutral-900/60">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customer, house #, or street..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Stop Items List */}
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-800/60 p-2">
          {filteredStops.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 text-xs">
              No customers found matching &quot;{searchTerm}&quot;
            </div>
          ) : (
            filteredStops.map(({ stop, originalIndex }) => {
              const isCurrent = originalIndex === currentIndex;
              return (
                <div
                  key={stop.id}
                  onClick={() => {
                    onSelectStop(originalIndex);
                    onClose();
                  }}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-center gap-3 my-1 ${
                    isCurrent
                      ? 'bg-emerald-950/40 border-2 border-emerald-500/80 shadow-md'
                      : isDark
                        ? 'hover:bg-neutral-900/80 border border-transparent'
                        : 'hover:bg-neutral-100 border border-transparent'
                  }`}
                >
                  {/* Order Number Badge */}
                  <div 
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isCurrent
                        ? 'bg-emerald-500 text-black shadow-md'
                        : stop.status === 'completed'
                          ? 'bg-neutral-800 text-emerald-400 border border-emerald-800/50'
                          : stop.status === 'skipped'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800/50'
                            : 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                    }`}
                  >
                    #{stop.orderIndex}
                  </div>

                  {/* Stop Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-sm truncate ${isCurrent ? 'text-emerald-300' : 'text-neutral-100'}`}>
                        {stop.name}
                      </span>
                      {(() => {
                        const hNum = getStopHouseNumber(stop, originalIndex);
                        return hNum !== '—' ? (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-amber-300 border border-neutral-700">
                            #{hNum}
                          </span>
                        ) : null;
                      })()}
                    </div>
                    <p className="text-xs text-neutral-400 truncate mt-0.5">
                      {stop.fullAddress}
                    </p>
                  </div>

                  {/* Status Indicator Icon */}
                  <div className="shrink-0 flex items-center gap-1.5">
                    {stop.status === 'completed' && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    )}
                    {stop.status === 'skipped' && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                        <SkipForward className="w-4 h-4" />
                      </span>
                    )}
                    {stop.status === 'pending' && !isCurrent && (
                      <span className="text-[11px] text-neutral-500">
                        <Clock className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500 text-black tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        <div className="p-3 border-t border-neutral-800 bg-neutral-900/60 flex items-center justify-between gap-2">
          <button
            onClick={onResetRoute}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Stop 1</span>
          </button>

          <button
            onClick={handleDownloadGpx}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export GPX</span>
          </button>
        </div>
      </div>
    </div>
  );
};
