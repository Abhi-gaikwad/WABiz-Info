import Welcome from './components/Welcome'
import './App.css'
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WarningBanner from './components/WarningBanner';

function App() {
  return (
    <>
    <Navbar />
    <Welcome />
    <WarningBanner />
    <Pricing />
    <Footer />
    </>
  )
}

export default App
