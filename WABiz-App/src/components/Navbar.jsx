import React from "react";
import logo from '../assets/logoWabiz.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="simple-navbar">
      <div className="simple-navbar-container">
        
        {/* Left - WABiz Logo */}
        <div className="header-logo">
          <div className="logo-circle">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <div>
            <span className="logo-text">WABiz</span>
            <p className="navbar-message">
              Never Miss a <u><strong>Lead Again!</strong></u>
            </p>
          </div>
        </div>


        {/* Right - Buy Now Button */}
        <div className="navbar-right">
          <button
            className="navbar-button"
            onClick={() => {
              const section = document.getElementById('pricing');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Buy Now for $8/mo
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
