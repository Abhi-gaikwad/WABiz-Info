import React from 'react';
import { ArrowUp, Check, Gift, Star, Phone, Globe, ExternalLink } from 'lucide-react';

const Pricing = ({ darkMode }) => {
  const plan = {
    name: 'WABiz Lifetime',
    oldPrice: '₹6,000',
    newPrice: '₹1,999',
    description: 'Complete WhatsApp automation solution with lifetime access',
    features: [
      'Auto-reply to calls, missed calls & outgoing calls',
      'WhatsApp & SMS automation',
      '24/7 automation - Never miss a lead',
      'Share digital brochure & business card',
      'Lifetime access - No recurring fees',
      'Priority support'
    ],
    savings: 'Save ₹4,001 with this exclusive offer!',
    button: '🚀 Register Now - Grab This Offer',
    redirectUrl: 'https://app.wabiz.co/sign-in'
  };

  const handlePlanClick = () => {
    window.open(plan.redirectUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode 
      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${darkMode 
            ? 'text-amber-400' 
            : 'text-teal-600'
          }`}>
            WhatsApp Automation by WABiz
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            📞 Never Miss a Lead Again! Automate your WhatsApp and SMS responses for every call.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="flex justify-center">
          <div className={`w-full sm:w-[400px] relative rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${darkMode 
            ? 'bg-gray-800/90 border-amber-500' 
            : 'bg-white border-teal-300'
          } border-2`}>
            {/* Lifetime Offer badge */}
            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center ${
              darkMode ? 'bg-amber-500 text-black' : 'bg-teal-500 text-white'
            }`}>
              <Gift className="w-3 h-3 mr-1" />
              LIFETIME OFFER
            </div>

            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${darkMode 
                ? 'text-white' 
                : 'text-gray-800'
              }`}>
                {plan.name}
              </h3>
              
              {/* Price */}
              <div className="mb-4">
                <div className={`text-4xl font-bold mb-2 ${darkMode 
                  ? 'text-amber-400' 
                  : 'text-teal-600'
                }`}>
                  {plan.newPrice}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className={`line-through text-lg ${darkMode 
                    ? 'text-gray-400' 
                    : 'text-gray-500'
                  }`}>
                    {plan.oldPrice}
                  </span>
                </div>
                <p className={`text-sm mt-2 font-semibold ${darkMode 
                  ? 'text-amber-300' 
                  : 'text-teal-600'
                }`}>
                  {plan.savings}
                </p>
              </div>

              <p className={`text-sm mb-6 ${darkMode 
                ? 'text-gray-300' 
                : 'text-gray-600'
              }`}>
                {plan.description}
              </p>

              {/* Features list */}
              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode 
                  ? 'text-white' 
                  : 'text-gray-800'
                }`}>
                  ✅ What WABiz Does for You
                </h4>
                <ul className="text-left space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`w-4 h-4 mt-0.5 mr-3 flex-shrink-0 ${darkMode 
                        ? 'text-amber-400' 
                        : 'text-teal-600'
                      }`} />
                      <span className={`text-sm ${darkMode 
                        ? 'text-gray-300' 
                        : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={handlePlanClick}
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 ${darkMode 
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black' 
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white'
                }`}
              >
                {plan.button}
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`mt-12 p-6 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="text-center">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode 
              ? 'text-white' 
              : 'text-gray-800'
            }`}>
              Need Help? Contact Us
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 gap-4">
              <div className="flex items-center justify-center gap-2">
                <Phone className={`h-5 w-5 ${
                  darkMode ? 'text-amber-400' : 'text-teal-600'
                }`} />
                <span className={`font-semibold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  9226333789
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className={`h-5 w-5 ${
                  darkMode ? 'text-amber-400' : 'text-teal-600'
                }`} />
                <span className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  WABiz.co
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className={`mt-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
          <p>✅ Lifetime access with no hidden fees. Professional support included.</p>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => {
            const section = document.getElementById('welcome');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${darkMode 
            ? 'bg-amber-600 hover:bg-amber-700 text-black' 
            : 'bg-teal-500 hover:bg-teal-600 text-white'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pricing;