import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
import WarningBanner from "./components/WarningBanner"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import './App.css'
import WabizFeatures from "./components/WabizFeatures" // Keep this import for the features section

function App() {
  return (
    <> {/* Using a React Fragment (<>) is generally preferred over a <div> for the root element as it doesn't add an extra node to the DOM */}
      <Navbar />
      <Welcome />
      <WarningBanner />
      <WabizFeatures /> {/* Include the WabizFeatures component */}
      <Pricing />
      <Footer />
    </>
  )
}

export default App