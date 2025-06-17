// src/Components/SimpleStickyNavbar.jsx
import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="simple-navbar">
      <div className="simple-navbar-container">
        {/* Left Side - Name/Info */}
        <div className="navbar-left">
          <h1 className="navbar-title">FlaxxaWapi</h1>
          <p className="navbar-info">Best Deal – Limited Time Only</p>
        </div>

        {/* Right Side - CTA */}
        <div className="navbar-right">
          <button className="navbar-button">Buy Now for $19</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
