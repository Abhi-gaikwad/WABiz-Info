import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-cta-box">
        <h2 className="footer-title">📈 Ready to <span className="highlight">Skyrocket Conversions?</span></h2>
        <p className="footer-subtext">
          Start using <span className="highlight">WABiz</span> today. Automate WhatsApp. Grow faster.
        </p>
        <p className="footer-action">💥 <span className="highlight-bold">Try Free for 7 Days</span></p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 WABiz. All rights reserved. Built to grow your business with WhatsApp.</p>
        <p>Disclaimer: WABiz is not affiliated with WhatsApp Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
