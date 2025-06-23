import React, { useState } from 'react';
import { Check, X, TrendingUp, Shield, Zap } from 'lucide-react';

function ComparisonTable() {
  const [darkMode, setDarkMode] = useState(false);

  const rows = [
    {
      point: 'Cost',
      traditional: 'High ad spend (Meta, SMS, cold email platforms)',
      whatsapp: 'Affordable one-time investment with excellent ROI',
      icon: '💰'
    },
    {
      point: 'ROI',
      traditional: 'Low ROI; hard to measure effectiveness',
      whatsapp: 'High ROI; direct, impactful engagement',
      icon: '📈'
    },
    {
      point: 'Message Delivery',
      traditional: 'SMS often ignored, email may go to spam',
      whatsapp: 'Direct inbox delivery with high visibility',
      icon: '📨'
    },
    {
      point: 'Opt-Out Rates',
      traditional: 'High opt-out for emails/SMS',
      whatsapp: 'Lower opt-out; personalized messaging',
      icon: '🚪'
    },
    {
      point: 'Engagement',
      traditional: 'Low engagement; cold formats',
      whatsapp: 'High engagement; 2-way interactions',
      icon: '🤝'
    },
    {
      point: 'Verification',
      traditional: 'Delayed verifications & code issues',
      whatsapp: 'Instant, secure delivery',
      icon: '✅'
    },
    {
      point: 'Integration',
      traditional: 'Limited tools, hard API access',
      whatsapp: 'Seamless CRM/Zapier/Woo integration',
      icon: '🔗'
    },
    {
      point: 'Flexibility',
      traditional: 'Rigid, costly to test or scale',
      whatsapp: 'Automation, flows, chatbots supported',
      icon: '🔧'
    },
    {
      point: 'Response Time',
      traditional: 'Slow or delayed responses',
      whatsapp: 'Real-time replies via WhatsApp',
      icon: '⚡'
    },
  ];

  const stats = [
    { value: '80%+', label: 'WhatsApp open rates', icon: <TrendingUp className="w-5 h-5" />, color: 'emerald' },
    { value: '90%+', label: 'manual effort saved', icon: <Shield className="w-5 h-5" />, color: 'blue' },
    { value: '500%+', label: 'lead boost with bots', icon: <Zap className="w-5 h-5" />, color: 'purple' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } shadow-md`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            How is WhatsApp Better
          </h1>
          <p className={`text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
            Than Other Marketing Channels?
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover why WhatsApp marketing with WAPiz outperforms traditional channels
            </p>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-12 sm:mb-16">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Card Header */}
              <div className={`px-6 py-4 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{row.icon}</span>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {row.point}
                  </h3>
                </div>
              </div>

              {/* Traditional Method */}
              <div className={`px-6 py-5 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm mb-2 ${
                      darkMode ? 'text-red-400' : 'text-red-600'
                    }`}>
                      Traditional Methods
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {row.traditional}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Method */}
              <div className="px-6 py-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm mb-2 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      WhatsApp (WAPiz)
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {row.whatsapp}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`rounded-3xl p-8 sm:p-12 ${
          darkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
            : 'bg-gradient-to-r from-white to-gray-50'
        } shadow-2xl`}>
          <div className="text-center mb-8">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Proven Results
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of businesses already winning with WAPiz
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-700/50' : 'bg-white/70'
                } backdrop-blur-sm`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  stat.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  stat.color === 'emerald' ? 'text-emerald-600' :
                  stat.color === 'blue' ? 'text-blue-600' :
                  'text-purple-600'
                }`}>
                  {stat.value}
                </div>
                <p className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
            <span>Get Started with WAPiz</span>
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;