import Welcome from './components/Welcome'
import './App.css'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import DealCard from './components/DealCard';
import WabizFeatures from './components/WabizFeatures'; // Assuming you have a WabizFeatures component

function App() {
  return (
    <>
    <Navbar />
    <div id="welcome">
      <Welcome />
    </div>

    <WarningBanner />
    <WabizFeatures />
    <DealCard />

    <div id='pricing'>
    <Pricing />
    </div>

    <Footer />
    </>
  )
}

export default App
