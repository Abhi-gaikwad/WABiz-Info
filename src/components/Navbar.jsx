import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logoWabiz from '../assets/logoWabiz.png';

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300
      bg-white/70 dark:bg-gray-900/80
      backdrop-blur-lg border-b border-teal-400 dark:border-gray-700 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={logoWabiz} alt="WABiz Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-teal-900 dark:text-amber-400">WABiz</h1>
              <p className="hidden sm:block text-xs text-gray-600 dark:text-gray-300">📞 Never Miss a Lead Again!</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={scrollToPricing}
              className="px-4 py-2 rounded-full font-semibold shadow-sm
                bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500
                text-white transition duration-300"
            >
              🚀 Grab This Opportunity
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-teal-800 hover:text-teal-600
                dark:text-amber-300 dark:hover:text-amber-400 transition"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-teal-800 hover:text-teal-600 dark:text-amber-300 dark:hover:text-amber-400">
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={scrollToPricing}
            className="w-full mb-2 px-4 py-2 rounded-md font-medium
              bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500
              text-white transition"
          >
            🚀 Grab This Opportunity
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
