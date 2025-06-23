import React, { useState, useEffect } from 'react';
import { Clock, Star, Zap, CheckCircle, AlertTriangle, ShoppingCart, Sun, Moon } from 'lucide-react';

// REMOVED: The entire 'Navbar' component definition that was previously here.
// Its presence caused conflicts with the main theme management in App.jsx.

// Improved DealCard Component
const DealCard = ({ darkMode }) => { // <--- MODIFIED: Accepts darkMode as a prop
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
    <section className={`relative py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50'} transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-all duration-500`}>
          <div className="text-center mb-8">
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${darkMode ? 'text-amber-300' : 'text-red-700'} mb-4`}>
              Limited-Time Deal!
            </h2>
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
              Don't miss out on our special offer to supercharge your WhatsApp marketing.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className={`flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-10 p-4 rounded-xl shadow-inner ${darkMode ? 'bg-gray-900 text-amber-200' : 'bg-yellow-50 text-red-800'} transition-all duration-500`}>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-mono">
                  {formatTime(value)}
                </div>
                <div className={`text-xs sm:text-sm uppercase font-semibold ${darkMode ? 'text-gray-400' : 'text-yellow-700'}`}>
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Deal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Old Price */}
            <div className={`text-center p-6 rounded-2xl border ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-yellow-100 border-yellow-200'} shadow-md transition-all duration-500`}>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Original Price</p>
              <p className={`text-4xl sm:text-5xl font-bold line-through ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                $99/month
              </p>
            </div>
            {/* New Price */}
            <div className={`relative text-center p-6 rounded-2xl border-4 ${darkMode ? 'bg-emerald-800/70 border-emerald-600' : 'bg-emerald-100 border-emerald-400'} shadow-lg transition-all duration-500 overflow-hidden`}>
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                SAVE 50%
              </div>
              <p className={`text-lg font-semibold ${darkMode ? 'text-emerald-200' : 'text-emerald-700'} mb-2`}>Special Price</p>
              <p className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-emerald-800'}`}>
                $49<span className="text-2xl font-normal">/month</span>
              </p>
              <div className={`mt-4 ${darkMode ? 'text-emerald-200' : 'text-emerald-700'}`}>
                <Zap className="inline-block w-5 h-5 mr-2" /> For a limited time!
              </div>
            </div>
          </div>

          {/* Key Features of the Deal */}
          <div className={`mb-10 p-6 rounded-2xl border ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-blue-50 border-blue-200'} shadow-md transition-all duration-500`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-300' : 'text-blue-700'} mb-4 text-center`}>What You Get:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Unlimited Messages (Fair Use Policy)",
                "Advanced Automation Workflows",
                "Dedicated Account Manager",
                "24/7 Priority Support",
                "Custom Integration Assistance",
                "Access to Beta Features"
              ].map((feature, index) => (
                <li key={index} className={`flex items-center ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  <CheckCircle className={`w-5 h-5 mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'} flex-shrink-0`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <button
                className={`flex items-center justify-center px-8 py-4 rounded-full text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800' : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'} focus:outline-none focus:ring-4 focus:ring-emerald-500/50 dark:focus:ring-teal-700/50`}
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Grab the Deal Now!
              </button>
            </div>

            {/* Learn More Button */}
            <div className="flex justify-center">
              <button
                className={`flex items-center justify-center px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-95 ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
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
                  <div key={index} className={`flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors duration-300 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
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

export default DealCard;