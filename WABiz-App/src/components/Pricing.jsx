import React from 'react';
import { ArrowUp, Check, Zap, Star } from 'lucide-react';

const Pricing = ({ darkMode }) => {
  const plans = [
    {
      name: 'Silver',
      oldPrice: '$18/mo',
      newPrice: '$8/mo',
      description: 'Perfect for getting started with WhatsApp automation',
      features: [
        '500 messages/month',
        'Basic automation',
        'Delivery reports',
        'Email support'
      ],
      popular: false,
      button: 'Start Silver',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      oldPrice: '$25/mo',
      newPrice: '$13/mo',
      description: 'For growing businesses needing more power',
      features: [
        '2,000 messages/month',
        'Smart scheduling',
        'Contact grouping',
        'Auto-replies',
        'Priority support'
      ],
      popular: true,
      button: 'Get Gold',
      gradient: 'from-amber-400 to-amber-600'
    },
    {
      name: 'Platinum',
      oldPrice: '$40/mo',
      newPrice: '$22/mo',
      description: 'Complete solution for professional marketers',
      features: [
        '10,000 messages/month',
        'Multi-device access',
        'API access',
        'Advanced analytics',
        '24/7 priority support',
        'Dedicated account manager'
      ],
      popular: false,
      button: 'Go Platinum',
      gradient: 'from-emerald-400 to-emerald-600'
    },
  ];

  return (
    <div className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode 
      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${darkMode 
            ? 'text-emerald-400' 
            : 'text-emerald-600'
          }`}>
            Choose Your Growth Plan
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Simple, transparent pricing with all the features you need to grow your business
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`w-full sm:w-[350px] relative rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${darkMode 
                ? 'bg-gray-800/90 border-gray-700' 
                : 'bg-white border-gray-200'
              } border`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  MOST POPULAR
                </div>
              )}

              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode 
                  ? 'text-white' 
                  : 'text-gray-800'
                }`}>
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className={`line-through ${darkMode 
                    ? 'text-gray-400' 
                    : 'text-gray-500'
                  } mr-2`}>
                    {plan.oldPrice}
                  </span>
                  <span className={`text-3xl font-bold ${darkMode 
                    ? 'text-green-400' 
                    : 'text-green-600'
                  }`}>
                    {plan.newPrice}
                  </span>
                </div>

                <p className={`text-sm mb-6 ${darkMode 
                  ? 'text-gray-300' 
                  : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                {/* Features list */}
                <ul className="mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-start">
                      <Check className={`w-4 h-4 mt-0.5 mr-2 flex-shrink-0 ${darkMode 
                        ? 'text-emerald-400' 
                        : 'text-emerald-600'
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

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 ${darkMode 
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800' 
                    : 'bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700'
                  } text-white`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ/Note */}
        <div className={`mt-12 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
          <p>All plans come with a 14-day money-back guarantee. No hidden fees.</p>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => {
            const section = document.getElementById('welcome');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${darkMode 
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
            : 'bg-emerald-500 hover:bg-emerald-600 text-white'
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