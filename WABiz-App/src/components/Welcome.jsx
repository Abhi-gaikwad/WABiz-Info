import React from 'react';
import './Welcome.css';
import logo from '../assets/logoWabiz.png'; // Assuming you have a logo image

// Header Component
const Header = () => (
  <header className="header">
    <div className="header-logo">
      <div className="logo-circle">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <span className="logo-text">WABiz</span> {/* Changed to WABiz */}
    </div>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-grid">
      {/* Left Content */}
      <div className="hero-left">
        <div className="hero-top"> {/* This div now holds the top-most text */}
          <h1 className="hero-title">
            Disruptive <span className="highlight">WhatsApp</span> Marketing & Automation Tool
          </h1>
          <p className="hero-subtitle">
            <span className="highlight">AI-Powered Business & Professionals.</span><br />
            Dominate Your Market with Advanced Automation &
            <span className="highlight"> Reach Billions of Active WhatsApp Users. Achieve 10x The Results</span><br />
            of Traditional Marketing Methods.
          </p>
        </div>

        <div className="hero-stats-box">
          <div className="stats-grid">
            <div><div className="stat-title">ZERO</div><div className="stat-text">Setup Required</div></div>
            <div><div className="stat-title">ZERO</div><div className="stat-text">Coding Required</div></div>
            <div><div className="stat-title">ZERO</div><div className="stat-text">Ban Risk</div></div>
            <div><div className="stat-title">100%</div><div className="stat-text">Automated</div></div>
          </div>
          <div className="hero-stats-footer">
            Fully Automated WhatsApp Marketing & Automation System
          </div>
        </div>

        <div className="instant-reach-box">
          <div className="icon-circle">⚡</div> {/* Using emoji as placeholder, consider real icon */}
          <p className="instant-text">
            REACH YOUR AUDIENCE<br />
            <span className="instant-highlight">INSTANTLY</span>
          </p>
          <div className="instant-subtext">
            95% Open Rate • Instant Delivery • Maximum Impact
          </div>
        </div>

        <div className="cta-box">
          <h3>🔥 Start Your WhatsApp Marketing Journey</h3>
          <p>
            Transform your business with the most powerful WhatsApp automation platform.
            Join thousands of successful marketers already using WABiz. {/* Changed to WABiz */}
          </p>
          <button className="cta-button">DISCOVER WABIZ NOW!</button> {/* Changed to WABiz */}
        </div>
      </div>

      {/* Right Content - Features */}
      <div className="features-box">
        <h3>Complete WhatsApp Marketing Solution</h3>
        <div className="feature-list">
          {[
            ["Advanced Campaign Management", "Send targeted messages to specific groups with precision"],
            ["Auto-Schedule & Import Lists", "Set up your campaigns in advance with custom contact lists"],
            ["Spintax Support", "Avoid spam filters with dynamic, personalized content"],
            ["AI-Powered Auto-Reply Chatbot", "Handle customer inquiries automatically 24/7"],
            ["WhatsApp Group Creation", "Build engaged communities around your brand"],
            ["Social Media Integration", "Import leads from Facebook & Instagram seamlessly"],
          ].map(([title, desc]) => (
            <div className="feature-item" key={title}>
              <span className="feature-icon">✅</span> {/* Using emoji as placeholder, consider real icon */}
              <div>
                <p className="feature-title">{title}</p>
                <p className="feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="feature-footer">
          <span>🚀 Breakthrough 95% Open Rate!</span><br /> {/* Using emoji as placeholder, consider real icon */}
          <span>Automate your WhatsApp marketing and grow your business 10x faster with our proven system.</span>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
function Welcome() {
  return (
    <div className="welcome-page">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Welcome;