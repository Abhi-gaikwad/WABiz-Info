import React, { useState, useEffect } from 'react';
import { Clock, Star, Zap, CheckCircle, AlertTriangle, ShoppingCart, Sun, Moon } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 dark:from-gray-900 dark:to-gray-800 shadow-lg border-b border-red-500/20 dark:border-gray-700/30 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 gap-3 sm:gap-0">
            
            {/* Left - Logo Section */}
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-sm p-1 group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/20 dark:ring-gray-400/20">
                <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base shadow-inner">
                  WAB
                </div>
              </div>
              
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 dark:from-emerald-300 dark:via-emerald-400 dark:to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                  WABiz
                </h1>
                <p className="text-xs sm:text-sm text-yellow-300 dark:text-yellow-400 font-medium mt-0.5 lg:mt-1">
                  Never Miss a <span className="underline font-bold">Lead Again!</span>
                </p>
              </div>
            </div>

            {/* Right - Controls */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 w-full sm:w-auto">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-600/50 backdrop-blur-sm transition-all duration-300 border border-white/20 dark:border-gray-600/30 hover:border-white/30 dark:hover:border-gray-500/50 group focus:outline-none focus:ring-2 focus:ring-white/30 dark:focus:ring-gray-400/30"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                  <Sun 
                    className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 transition-all duration-300 ${
                      isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                  />
                  <Moon 
                    className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-300 dark:text-blue-400 transition-all duration-300 ${
                      isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                  />
                </div>
              </button>

              {/* Buy Now Button */}
              <button
                onClick={scrollToPricing}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 dark:from-emerald-600 dark:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 text-white font-bold text-xs sm:text-sm lg:text-base rounded-lg shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-emerald-600/25 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-emerald-400/50 dark:border-emerald-500/50 backdrop-blur-sm w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:focus:ring-emerald-500/50"
              >
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Buy Now for $8/mo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 dark:via-gray-600/50 to-transparent"></div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20 lg:h-24"></div>
    </>
  );
};

// Improved DealCard Component
const DealCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 42
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.red.500)_1px,_transparent_0)] bg-[length:30px_30px] animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400/30 dark:bg-red-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400/30 dark:bg-orange-500/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-yellow-400/30 dark:bg-yellow-500/20 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pulsing Alert Banner */}
        <div className="mb-8 sm:mb-12 text-center animate-pulse">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 border-2 border-red-200 dark:border-red-800/50 rounded-full text-red-700 dark:text-red-300 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              🔥 Limited Time Offer - Don't Miss Out! 🔥
            </span>
          </div>
        </div>

        {/* Enhanced Deal Card */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl dark:shadow-gray-900/50 border-2 border-gray-100 dark:border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl">
          
          {/* Premium Header with Animation */}
          <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-orange-500 dark:from-red-700 dark:via-red-600 dark:to-orange-600 p-6 sm:p-8 lg:p-12 text-white text-center overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-spin"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-12 w-6 h-6 border border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-16 w-3 h-3 bg-white/70 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full animate-spin"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 animate-pulse" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider">
                  FLASH SALE
                </span>
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 animate-pulse" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                Save 56% Today!
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl opacity-95 font-semibold tracking-wide">
                Get WABiz Premium at an Unbeatable Price
              </p>
              
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm sm:text-base font-medium">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span>Trusted by 10,000+ businesses</span>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            
            {/* Dramatic Price Comparison */}
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-semibold mb-2">Regular Price</p>
                  <div className="relative">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-400 dark:text-gray-500 line-through">$18</p>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">/month</p>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✕</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-4xl sm:text-5xl lg:text-6xl text-red-500 dark:text-red-400 font-black animate-pulse">
                  →
                </div>
                
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-bold mb-2">Special Price</p>
                  <div className="relative">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-500 bg-clip-text text-transparent">
                      $8
                    </p>
                    <p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-medium">/month</p>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 border-2 border-emerald-200 dark:border-emerald-800/50 rounded-full text-emerald-700 dark:text-emerald-300 font-bold text-base sm:text-lg shadow-lg animate-pulse">
                <Star className="w-5 h-5 fill-current animate-spin" />
                <span className="bg-gradient-to-r from-emerald-700 to-green-700 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent">
                  You Save $120 Every Year! 💰
                </span>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
              {[
                { icon: '💬', text: 'Unlimited WhatsApp Messages', color: 'from-blue-500 to-blue-600' },
                { icon: '🤖', text: 'Advanced Auto-Reply System', color: 'from-purple-500 to-purple-600' },
                { icon: '👥', text: 'Smart Contact Management', color: 'from-pink-500 to-pink-600' },
                { icon: '📊', text: 'Real-time Analytics Dashboard', color: 'from-indigo-500 to-indigo-600' },
                { icon: '🎯', text: 'Priority Customer Support', color: 'from-orange-500 to-orange-600' },
                { icon: '🔄', text: 'Multi-Device Synchronization', color: 'from-teal-500 to-teal-600' }
              ].map((feature, index) => (
                <div key={index} className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-600/30 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 dark:hover:from-gray-600/50 dark:hover:to-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Countdown Timer */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-10 sm:mb-12 border-2 border-red-200 dark:border-red-800/30 shadow-inner">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 dark:text-red-400 animate-spin" />
                <span className="text-lg sm:text-xl font-black text-red-600 dark:text-red-400">
                  Offer Expires Soon!
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
                {[
                  { value: formatTime(timeLeft.days), label: 'Days' },
                  { value: formatTime(timeLeft.hours), label: 'Hours' },
                  { value: formatTime(timeLeft.minutes), label: 'Minutes' },
                  { value: formatTime(timeLeft.seconds), label: 'Seconds' }
                ].map((time, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border-2 border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-all duration-300">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                      {time.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-bold uppercase tracking-wider">
                      {time.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
              <button className="flex-1 group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 dark:from-emerald-600 dark:via-emerald-700 dark:to-emerald-800 dark:hover:from-emerald-700 dark:hover:via-emerald-800 dark:hover:to-emerald-900 text-white font-black py-5 sm:py-6 px-6 sm:px-8 text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-emerald-500/25 dark:hover:shadow-emerald-600/25 transition-all duration-500 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Get WABiz Premium Now</span>
                </div>
              </button>
              
              <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-gray-700 dark:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-700 dark:text-gray-300 font-bold py-5 sm:py-6 px-6 sm:px-8 text-lg sm:text-xl rounded-2xl border-2 border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-500/50 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-2xl">💬</span>
                  <span>Learn More</span>
                </div>
              </button>
            </div>

            {/* Enhanced Trust Badges */}
            <div className="pt-6 sm:pt-8 border-t-2 border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {[
                  { icon: '🛡️', text: '30-Day Money Back' },
                  { icon: '🔄', text: 'Cancel Anytime' },
                  { icon: '🔒', text: 'Secure Payment' },
                  { icon: '⚡', text: 'Instant Activation' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-300">
                    <span className="text-lg">{badge.icon}</span>
                    <span className="font-semibold">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <DealCard />
    </div>
  );
};

export default App;