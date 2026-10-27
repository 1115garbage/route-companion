import React, { useState } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Smartphone, 
  ExternalLink, 
  FileArchive, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { downloadProjectZip } from '../utils/projectExporter';
import { triggerHaptic } from '../utils/voiceAndHaptics';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export function ExportModal({ isOpen, onClose, isDark }: ExportModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    triggerHaptic('tap');
    setDownloading(true);
    try {
      await downloadProjectZip();
      setDownloaded(true);
      triggerHaptic('complete');
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-lg rounded-t-3xl sm:rounded-3xl border shadow-2xl flex flex-col max-h-[92vh] overflow-hidden ${
          isDark 
            ? 'bg-neutral-950 border-neutral-800 text-white' 
            : 'bg-white border-neutral-200 text-black'
        }`}
      >
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
          isDark ? 'border-neutral-800 bg-neutral-900/60' : 'border-neutral-200 bg-neutral-50'
        }`}>
          <div className="flex items-center gap-2.5">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-10 h-10 rounded-xl border border-emerald-400/50 shadow-md shrink-0 object-cover" 
            />
            <div>
              <h2 className="text-base font-black tracking-tight">Garbage Route APK Builder</h2>
              <p className="text-xs text-neutral-400">Step 1: Download code to your Samsung S26</p>
            </div>
          </div>
          <button
            onClick={() => {
              triggerHaptic('tap');
              onClose();
            }}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'hover:bg-neutral-800 text-neutral-400' : 'hover:bg-neutral-100 text-neutral-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Main Download Button */}
          <div className={`p-4 rounded-2xl border ${
            isDark ? 'bg-neutral-900/90 border-blue-900/60' : 'bg-blue-50/70 border-blue-200'
          }`}>
            <p className="text-xs font-semibold text-neutral-400 mb-2">
              Instant 1-Tap Download to your phone:
            </p>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`w-full py-4 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all ${
                downloaded
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {downloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Packaging Zip File...</span>
                </>
              ) : downloaded ? (
                <>
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  <span>Downloaded! Tap to Download Again</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download Complete Project (.ZIP)</span>
                </>
              )}
            </button>

            {downloaded && (
              <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-2 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>
                  <strong>Saved to your phone:</strong> Check your Samsung <strong>My Files &gt; Downloads</strong> folder for <code className="bg-black/40 px-1 py-0.5 rounded font-mono">Garbage_Route_Source.zip</code>.
                </span>
              </div>
            )}
          </div>

          {/* Included Files info */}
          <div className={`p-3.5 rounded-2xl border text-xs space-y-2 ${
            isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }`}>
            <div className="flex items-center gap-2 font-bold text-neutral-300">
              <FileArchive className="w-4 h-4 text-blue-400" />
              <span>What is included in this .ZIP file:</span>
            </div>
            <ul className="space-y-1.5 text-neutral-400 pl-6 list-disc">
              <li><strong>Native Android Kotlin wrapper:</strong> Binds to OsmAnd AIDL background service</li>
              <li><strong>Full React App:</strong> Your customer cards, yellow house number, 500ft proximity & curbside arrival, and GPX parser</li>
              <li><strong>Automated Cloud Builder:</strong> Preconfigured GitHub Action to compile the APK free with zero setup</li>
            </ul>
          </div>

          {/* Next Steps: Step 2 & Step 3 */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-neutral-400">
              What to do next (Takes ~3 minutes on your phone):
            </h3>

            {/* Step 2 card */}
            <div className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
              isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold">Upload to GitHub (Free cloud builder)</p>
                <p className="text-neutral-400">
                  Open <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-400 underline font-semibold">github.com</a> on your Samsung S26, tap <strong>New repository</strong>, name it <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">route-companion</code>, and tap <strong>Upload files</strong> to upload the zip files.
                </p>
              </div>
            </div>

            {/* Step 3 card */}
            <div className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
              isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold">Download and Install your APK</p>
                <p className="text-neutral-400">
                  Tap the <strong>Actions</strong> tab in your repository. In 2 minutes, tap the completed build and download <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">app-debug.apk</code> to your Samsung S26 to install.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between shrink-0 ${
          isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
        }`}>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free · No computer needed</span>
          </div>
          <button
            onClick={() => {
              triggerHaptic('tap');
              onClose();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold ${
              isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-neutral-200 hover:bg-neutral-300 text-black'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
