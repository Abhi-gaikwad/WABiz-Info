import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import './App.css';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';
import Navbar from './components/Navbar';
import DealCard from './components/DealCard';
import WabizFeatures from './components/WabizFeatures';
import ComparisonTable from './components/ComparisonTable'; // Assuming this component exists based on common app structures

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply/remove 'dark' class to document.documentElement
  // and save preference to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Effect to capture traffic source (unrelated to theme, but kept for completeness)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let source = urlParams.get('source');

    if (!source) {
      const ref = document.referrer;
      if (ref.includes("instagram.com")) source = "instagram";
      else if (ref.includes("facebook.com")) source = "facebook";
      else if (ref.includes("t.co")) source = "twitter";
      else if (ref.includes("linkedin.com")) source = "linkedin";
      else if (ref.includes("whatsapp.com")) source = "whatsapp";
    }

    if (source) {
      console.log("Traffic source:", source);
      // Optional: Store in localStorage or send to backend
      // localStorage.setItem("trafficSource", source);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div id="welcome">
        <Welcome darkMode={darkMode} /> {/* Pass darkMode prop here */}
      </div>

      <WarningBanner darkMode={darkMode} />
      
      <div id="features">
        <WabizFeatures darkMode={darkMode} />
      </div>
      
      {/* Updated: Ensure DealCard receives darkMode prop */}
      <DealCard darkMode={darkMode} />

      {/* Assuming ComparisonTable needs darkMode too */}
      <ComparisonTable darkMode={darkMode} /> {/* Pass darkMode prop here */}

      <div id="pricing">
        <Pricing darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;