import { useEffect } from 'react';
import Welcome from './components/Welcome';
import './App.css';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';
import Navbar from './components/Navbar';
import DealCard from './components/DealCard';
import WabizFeatures from './components/WabizFeatures';
import ComparisonTable from './components/ComparisonTable';

function App() {
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

  return (
    <>
      <Navbar />
      <div id="welcome">
        <Welcome />
      </div>

      <WarningBanner />
      <WabizFeatures />
      <DealCard />
      <ComparisonTable />

      <div id='pricing'>
        <Pricing />
      </div>

      <Footer />
    </>
  );
}

export default App;
