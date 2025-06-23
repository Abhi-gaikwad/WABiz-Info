// import { useEffect } from 'react';
// import Welcome from './components/Welcome';
// import './App.css';
// import Pricing from './components/Pricing';
// import Footer from './components/Footer';
// import WarningBanner from './components/WarningBanner';
// import Navbar from './components/Navbar';
// import DealCard from './components/DealCard';
// import WabizFeatures from './components/WabizFeatures';

// function App() {
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     let source = urlParams.get('source');

//     if (!source) {
//       const ref = document.referrer;
//       if (ref.includes("instagram.com")) source = "instagram";
//       else if (ref.includes("facebook.com")) source = "facebook";
//       else if (ref.includes("t.co")) source = "twitter";
//       else if (ref.includes("linkedin.com")) source = "linkedin";
//       else if (ref.includes("whatsapp.com")) source = "whatsapp";
//     }

//     if (source) {
//       console.log("Traffic source:", source);
//       // Optional: Store in localStorage or send to backend
//       // localStorage.setItem("trafficSource", source);
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div id="welcome">
//         <Welcome />
//       </div>

//       <WarningBanner />
//       <WabizFeatures />
//       <DealCard />

//       <div id='pricing'>
//         <Pricing />
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';
import Navbar from './components/Navbar';
import DealCard from './components/DealCard';
import WabizFeatures from './components/WabizFeatures';
import WabizChatbot from './components/WabizChatbot';
import ComparisonTable from './components/ComparisonTable';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Save dark mode preference and apply to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Track traffic source
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
        <Welcome darkMode={darkMode} />
      </div>

      <WarningBanner darkMode={darkMode} />
      
      <div id="features">
        <WabizFeatures darkMode={darkMode} />
      </div>
      
      <DealCard darkMode={darkMode} />

      <ComparisonTable darkMode={darkMode} />

      <div id="pricing">
        <Pricing darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />

      <WabizChatbot/>
    </div>

);
}

export default App;