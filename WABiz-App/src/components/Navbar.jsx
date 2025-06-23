import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-teal-900/95 backdrop-blur-md border-teal-800' 
        : 'bg-teal-600/95 backdrop-blur-md border-teal-500'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${
              darkMode ? 'text-amber-300' : 'text-white'
            }`}>
              WABiz
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('welcome')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Pricing
              </button>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-teal-800 text-amber-300 hover:bg-teal-700 hover:scale-110' 
                  : 'bg-teal-700 text-amber-100 hover:bg-teal-600 hover:scale-110'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  darkMode ? 'text-teal-100 hover:text-amber-300' : 'text-white hover:text-amber-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${
              darkMode ? 'border-teal-800' : 'border-teal-500'
            }`}>
              <button 
                onClick={() => scrollToSection('welcome')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  darkMode 
                    ? 'text-teal-100 hover:text-amber-300 hover:bg-teal-800' 
                    : 'text-white hover:text-amber-100 hover:bg-teal-700'
                }`}
              >
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;