// src/App.jsx
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import WarningBanner from "./components/WarningBanner"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import './App.css'
import WabizFeatures from "./WabizFeatures"

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <WarningBanner />
      <WabizFeatures />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
