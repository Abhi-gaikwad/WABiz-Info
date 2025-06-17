// src/App.jsx
import Navbar from "./components/Navbar" // ✅ Make sure the file is named Navbar.jsx
import Welcome from "./components/Welcome" // ✅ Make sure the file is named Welcome.jsx
import Warning from "./components/Warning" // ✅ Make sure the file is named Warning.jsx  
import Pricing from "./components/Pricing" // ✅ Make sure the file is named Pricing.jsx
import './App.css'; // ✅ Import your CSS file
function App() {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <Warning/>
      <Pricing/>
      <footer/>
      {/* Other sections */}
    </div>
  )
}

export default App
