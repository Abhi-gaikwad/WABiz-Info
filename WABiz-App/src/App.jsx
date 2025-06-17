import Welcome from './components/Welcome'
import './App.css'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';
import DealCard from './components/DealCard';

function App() {
  return (
    <>
    <Welcome />
    <WarningBanner />
    <DealCard />
    <div id="pricing">
      <Pricing />
    </div>
    <Footer />
    </>
  )
}

export default App