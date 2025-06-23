import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const WarningBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-red-600 dark:bg-red-700 text-white shadow-sm">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-3 text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center max-w-5xl mx-auto">
          
          {/* Warning section */}
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-200 flex-shrink-0" />
            <span className="text-yellow-200 font-medium text-sm">Important Notice:</span>
          </div>

          {/* Main message */}
          <div className="text-white text-sm">
            Limited time offer - Don't miss out on this exclusive opportunity!
          </div>

          {/* Call to action */}
          <span className="text-yellow-200 font-medium text-sm">
            Act now while supplies last
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
    </div>
  );
};

export default WarningBanner;