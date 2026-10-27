import React, { useState } from 'react';
import { parseGPX } from '../utils/gpxParser';
import { SAMPLE_GPX_ROUTES } from '../utils/sampleRoutes';
import { RouteStop } from '../types/route';
import { UploadCloud, FileCode, CheckCircle, AlertCircle, X, Download, Sparkles } from 'lucide-react';

interface GpxImportModalProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  onImportSuccess: (stops: RouteStop[], routeName: string, filename: string) => void;
}

export const GpxImportModal: React.FC<GpxImportModalProps> = ({
  isOpen,
  isDark,
  onClose,
  onImportSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'samples' | 'paste'>('upload');
  const [rawText, setRawText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewStops, setPreviewStops] = useState<{ stops: RouteStop[]; routeName: string; filename: string } | null>(null);

  if (!isOpen) return null;

  const handleFileProcess = (file: File) => {
    setError(null);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          if (!text || typeof text !== 'string') {
            throw new Error('File content is empty or unreadable.');
          }
          const cleanName = file.name.replace(/\.[^/.]+$/, '');
          const result = parseGPX(text, cleanName);
          if (!result.stops || result.stops.length === 0) {
            throw new Error('No valid customer stops found in GPX file.');
          }
          setPreviewStops({
            stops: result.stops,
            routeName: result.routeName,
            filename: file.name,
          });
        } catch (err: any) {
          setError(err.message || 'Failed to parse GPX file.');
        }
      };
      reader.onerror = () => {
        setError('Error reading file from disk.');
      };
      reader.readAsText(file);
    } catch (err: any) {
      setError(err.message || 'Error processing file.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
    if (e.target) {
      e.target.value = '';
    }
  };

  const handleParsePaste = () => {
    setError(null);
    try {
      if (!rawText.trim()) {
        setError('Please paste GPX XML content.');
        return;
      }
      const result = parseGPX(rawText, 'Pasted GPX Route');
      setPreviewStops({
        stops: result.stops,
        routeName: result.routeName,
        filename: 'pasted_route.gpx',
      });
    } catch (err: any) {
      setError(err.message || 'Invalid GPX content.');
    }
  };

  const handleLoadPreset = (preset: typeof SAMPLE_GPX_ROUTES[0]) => {
    setError(null);
    try {
      const result = parseGPX(preset.gpxXml, preset.title);
      setPreviewStops({
        stops: result.stops,
        routeName: result.routeName,
        filename: `${preset.id}.gpx`,
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleConfirmImport = () => {
    if (previewStops) {
      onImportSuccess(previewStops.stops, previewStops.routeName, previewStops.filename);
      onClose();
    }
  };

  const downloadSampleGpx = (preset: typeof SAMPLE_GPX_ROUTES[0]) => {
    const blob = new Blob([preset.gpxXml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${preset.id}.gpx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div>
            <h2 className="text-lg font-black tracking-tight">Import Customer GPX Route</h2>
            <p className="text-xs text-neutral-400 mt-0.5">Exact customer waypoint sequence will be preserved</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-neutral-800 px-6 pt-3 gap-2 bg-neutral-950/40">
          <button
            onClick={() => { setActiveTab('samples'); setError(null); }}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'samples'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sample Routes</span>
          </button>
          <button
            onClick={() => { setActiveTab('upload'); setError(null); }}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Upload GPX File</span>
          </button>
          <button
            onClick={() => { setActiveTab('paste'); setError(null); }}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'paste'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Paste XML</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {activeTab === 'samples' && (
            <div className="space-y-3">
              <p className="text-xs text-neutral-400">
                Instantly load ready-to-test customer routes, or download the GPX to import into OsmAnd:
              </p>
              {SAMPLE_GPX_ROUTES.map((preset) => (
                <div 
                  key={preset.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    previewStops?.filename === `${preset.id}.gpx`
                      ? 'border-emerald-500 bg-emerald-950/20'
                      : isDark ? 'border-neutral-800 bg-neutral-950 hover:border-neutral-700' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm text-neutral-100">{preset.title}</h3>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{preset.description}</p>
                      <span className="inline-block mt-2 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-emerald-400">
                        {preset.stopCount} Sequenced Stops
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleLoadPreset(preset)}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      Select Route
                    </button>
                    <button
                      onClick={() => downloadSampleGpx(preset)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                      title="Download .gpx file to load into OsmAnd"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download GPX</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'upload' && (
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all ${
                dragActive 
                  ? 'border-emerald-400 bg-emerald-950/20' 
                  : isDark ? 'border-neutral-700 bg-neutral-950/60' : 'border-neutral-300 bg-neutral-50'
              }`}
            >
              <UploadCloud className="w-10 h-10 text-emerald-400 mb-3" />
              <p className="font-bold text-sm mb-1">Drag and drop your GPX file here</p>
              <p className="text-xs text-neutral-400 mb-4">Supports OsmAnd waypoints, routepoints, and favorites (.gpx)</p>
              <label className="cursor-pointer px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
                Browse Files
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileInput}
                />
              </label>
              <p className="text-[11px] text-neutral-400 mt-3 max-w-xs">
                💡 Tip: If Samsung shows &quot;No files&quot;, tap <span className="font-semibold text-neutral-200">Recent files</span> at the top, or switch to the <span className="font-semibold text-emerald-400">Paste GPX</span> tab!
              </p>
            </div>
          )}

          {activeTab === 'paste' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase text-neutral-400">
                Paste GPX XML Code
              </label>
              <textarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="<?xml version='1.0' encoding='UTF-8'?>\n<gpx version='1.1' ...>\n  <wpt lat='...' lon='...'>\n    <name>Customer Name</name>\n    <desc>123 Main St</desc>\n  </wpt>\n</gpx>"
                rows={7}
                className="w-full rounded-xl p-3 text-xs font-mono bg-neutral-950 border border-neutral-700 text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
              />
              <button
                onClick={handleParsePaste}
                className="w-full py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                Parse GPX Text
              </button>
            </div>
          )}

          {/* Preview of detected stops */}
          {previewStops && (
            <div className="p-4 rounded-2xl border border-emerald-500/50 bg-emerald-950/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Ready to load: {previewStops.routeName}</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1">
                <p>
                  Found <strong className="text-emerald-300">{previewStops.stops.length} stops</strong> in exact GPX order.
                </p>
                <p className="text-[11px] text-neutral-400">
                  Stop #1: <strong>{previewStops.stops[0]?.name}</strong> ({previewStops.stops[0]?.houseNumber ? `#${previewStops.stops[0].houseNumber} ` : ''}{previewStops.stops[0]?.streetName})
                </p>
                {previewStops.stops.length > 1 && (
                  <p className="text-[11px] text-neutral-400">
                    Final Stop #{previewStops.stops.length}: <strong>{previewStops.stops[previewStops.stops.length - 1]?.name}</strong>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-800 flex items-center justify-end gap-3 bg-neutral-950/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!previewStops}
            onClick={handleConfirmImport}
            className={`px-5 py-2.5 text-xs font-extrabold rounded-xl transition-all ${
              previewStops
                ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-950/50'
                : 'opacity-40 cursor-not-allowed bg-neutral-800 text-neutral-500'
            }`}
          >
            Start Route with {previewStops?.stops.length || 0} Stops
          </button>
        </div>
      </div>
    </div>
  );
};
