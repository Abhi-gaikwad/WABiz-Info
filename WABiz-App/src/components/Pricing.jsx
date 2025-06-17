import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Silver',
    oldPrice: '$18/mo',
    newPrice: '$8/mo',
    description: 'Basic automation, bulk messages, and delivery reports.',
    button: 'Start Silver',
  },
  {
    name: 'Gold',
    oldPrice: '$25/mo',
    newPrice: '$13/mo',
    description: 'Everything in Silver + smart scheduling, grouping & auto-replies.',
    button: 'Get Gold',
  },
  {
    name: 'Platinum',
    oldPrice: '$40/mo',
    newPrice: '$22/mo',
    description: 'All features unlocked. Priority support. Multi-device access.',
    button: 'Go Platinum',
  },
];

function Pricing() {
  return (
    <div className="pricing-section">
      <h2 className="pricing-title">💼 Choose Your Growth Plan</h2>
      <div className="pricing-cards">
        {plans.map(plan => (
          <div className="pricing-card" key={plan.name}>
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-prices">
              <span className="old-price">{plan.oldPrice}</span>
              <span className="new-price">{plan.newPrice}</span>
            </div>
            <p className="plan-desc">{plan.description}</p>
            <button className="plan-button">{plan.button}</button>
          </div>
        ))}
      </div>

      <div className="scroll-top" onClick={() => {
        const section = document.getElementById('welcome');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }}>
        ⬆️
      </div>

    </div>
  );
}

export default Pricing;
