  import React, { useState, useEffect } from 'react';
  import { AlertTriangle, Clock, Zap } from 'lucide-react';

  const WarningBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

    // Countdown timer effect
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          } else {
            // Reset timer when it reaches 0
            return { hours: 23, minutes: 59, seconds: 59 };
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
      <div className="relative w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 dark:from-red-700 dark:via-red-800 dark:to-red-700 text-white shadow-lg border-b-2 border-red-500/50 dark:border-red-600/50 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse"></div>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:top-3 sm:right-4 text-white/80 hover:text-white transition-colors duration-200 z-10 p-1 rounded-full hover:bg-white/10"
          aria-label="Close banner"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            
            {/* Warning Icon and Text */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-bounce" />
                <span className="text-yellow-300 font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide">
                  Warning:
                </span>
              </div>
              <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                This Opportunity Disappears Soon –
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="flex items-center gap-1 sm:gap-2 bg-white/20 dark:bg-black/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm border border-white/30">
                <div className="text-center">
                  <div className="text-yellow-300 font-bold text-lg sm:text-xl leading-none">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-xs uppercase">hrs</div>
                </div>
                <div className="text-yellow-300 text-lg sm:text-xl font-bold animate-pulse">:</div>
                <div className="text-center">
                  <div className="text-yellow-300 font-bold text-lg sm:text-xl leading-none">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-xs uppercase">min</div>
                </div>
                <div className="text-yellow-300 text-lg sm:text-xl font-bold animate-pulse">:</div>
                <div className="text-center">
                  <div className="text-yellow-300 font-bold text-lg sm:text-xl leading-none">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-xs uppercase">sec</div>
                </div>
              </div>
            </div>

            {/* Highlight Text */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
              <span className="text-white font-bold text-sm sm:text-base lg:text-lg underline decoration-yellow-300 decoration-2 underline-offset-2">
                Limited Time Remaining!
              </span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Mobile-optimized layout for smaller screens */}
          <div className="block sm:hidden mt-2 pt-2 border-t border-white/20">
            <div className="text-center">
              <span className="text-yellow-200 text-xs font-medium">
                🔥 Don't miss out on this exclusive offer! 🔥
              </span>
            </div>
          </div>
        </div>

        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 animate-pulse"></div>
      </div>
    );
  };

  export default WarningBanner;