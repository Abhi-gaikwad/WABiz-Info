import React from 'react';
import './DealCard.css';

function DealCard() {
  return (
    <div className="deal-card">
      <div className="deal-badge">👑 PLATINUM MEMBERSHIP – WABiz</div>

      <p className="deal-old-price">
        <s>Usually $40/month,</s> <span className="deal-discount">Now Only $22/month</span>
      </p>

      <h3 className="deal-title">Maximize Growth with WABiz Platinum</h3>
      <p className="deal-subtext">
        Unlock everything: Unlimited WhatsApp Campaigns, AI-Powered Auto-Replies, Smart Scheduling,
        Group Management, Priority Support & Multi-Device Access – all in one powerful plan.
      </p>

      <button
        className="deal-button"
        onClick={() => {
          const section = document.getElementById('pricing');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Upgrade to Platinum – $22/mo
        <div className="deal-subbtn">Risk FREE – Cancel Anytime</div>
      </button>

      <div className="deal-icons">
        <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png" alt="PayPal" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/EMVCo_Logo.svg" alt="EMVCo" />
        <span className="deal-guarantee">*30-Day Satisfaction Guarantee</span>
      </div>

      <p className="deal-alert">
        <strong>Hurry Up!</strong> Limited-Time Monthly Offer – Join Now!
      </p>
    </div>
  );
}

export default DealCard;
