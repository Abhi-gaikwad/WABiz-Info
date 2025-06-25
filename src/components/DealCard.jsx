import React from 'react';
import { Star, CheckCircle, ShoppingCart, Shield, Award, Zap } from 'lucide-react';

const DealCard = ({ darkMode }) => {
  return (
    <section className={`py-16 lg:py-24 ${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-slate-50 to-white'} transition-all duration-500`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl overflow-hidden shadow-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} transition-all duration-500`}>

          {/* Header Section */}
          <div className={`px-8 py-12 text-center ${darkMode ? 'bg-gradient-to-r from-green-900/50 to-indigo-900/50' : 'bg-gradient-to-r from-green-50 to-indigo-50'} border-b ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="flex justify-center mb-4">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-amber-900/50 text-amber-300 border border-amber-700' : 'bg-amber-100 text-amber-800 border border-amber-200'}`}>
                <Star className="w-4 h-4 mr-2" />
                Premium Offer
              </div>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              WhatsApp Marketing
              <span className={`block text-3xl lg:text-4xl mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Professional Plan
              </span>
            </h2>
            <p className={`text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Elevate your business communication with our comprehensive WhatsApp marketing solution.
              Designed for professionals who demand excellence and results.
            </p>
          </div>

          {/* Pricing Section */}
          <div className="px-8 py-12">
            {/* Professional Plan - Centered and Featured */}
            <div className="max-w-md mx-auto mb-12">
              <div className={`rounded-2xl p-8 border-4 relative ${darkMode ? 'bg-gradient-to-br from-green-900/30 to-indigo-900/30 border-green-500' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-500'} shadow-2xl transition-all duration-300 hover:shadow-3xl transform hover:scale-105`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                    BEST VALUE
                  </div>
                </div>
                <div className="text-center pt-4">
                  <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Professional</h3>
                  <div className={`text-6xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    ₹ 1,999
                    <span className="text-2xl font-normal block mt-2">/Lifetime</span>
                  </div>
                  <div className={`flex items-center justify-center mb-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                      <span className="text-lg font-semibold">Save 51%</span>
                    </div>
                  </div>
                  <p className={`text-lg font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    One-time payment • No recurring fees
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className={`rounded-xl p-4 mb-12 text-center ${darkMode ? 'bg-slate-700/30 border border-slate-600' : 'bg-slate-50 border border-slate-200'}`}>
              <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
                <div>
                  <div className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    ₹1,999
                  </div>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>One-time Cost</p>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    ∞
                  </div>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Lifetime Access</p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className={`rounded-xl p-8 mb-12 ${darkMode ? 'bg-slate-700/30 border border-slate-600' : 'bg-slate-50 border border-slate-200'}`}>
              <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Everything You Need to Succeed
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: CheckCircle, title: "Unlimited Messages", desc: "Send unlimited messages with fair usage policy" },
                  { icon: Zap, title: "Advanced Automation", desc: "Sophisticated workflow automation tools" },
                  { icon: Shield, title: "Priority Support", desc: "24/7 dedicated customer support" },
                  { icon: Award, title: "Account Manager", desc: "Dedicated account manager assigned" },
                  { icon: Star, title: "Custom Integrations", desc: "Tailored integration assistance" },
                  { icon: CheckCircle, title: "Beta Access", desc: "Early access to new features" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {feature.title}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a
                href="#pricing"
                className={`inline-flex items-center px-16 py-5 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl ${darkMode ? 'bg-gradient-to-r from-green-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800' : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'} focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                Get Started Today
              </a>

              <p className={`mt-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Join thousands of satisfied customers
              </p>
            </div>

            {/* Trust Indicators */}
            <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {[
                  { icon: '🛡️', text: 'Grow Up Guarantee' },
                  { icon: '🔒', text: 'Secure & Encrypted' },
                  { icon: '⚡', text: 'Instant Setup' }
                ].map((badge, index) => (
                  <div key={index} className={`flex items-center space-x-3 px-4 py-2 rounded-full ${darkMode ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                    <span className="text-lg">{badge.icon}</span>
                    <span className="font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealCard;