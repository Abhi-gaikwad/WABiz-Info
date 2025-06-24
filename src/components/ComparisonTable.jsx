import React, { useState } from 'react';
import { Check, X, TrendingUp, Shield, Zap, MessageCircle, Target, DollarSign, Users, Clock, Star } from 'lucide-react';

function ComparisonTable({ darkMode = false }) {
  
  const comparisonData = [
    {
      category: 'Cost Efficiency',
      traditional: 'Multiple platform costs, high ad spend, low ROI',
      whatsapp: 'Single platform investment with 5x better ROI',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      category: 'Delivery & Reach',
      traditional: 'Email spam filters, SMS often ignored',
      whatsapp: '98% delivery rate, direct to inbox',
      icon: MessageCircle,
      color: 'blue'
    },
    {
      category: 'Customer Engagement',
      traditional: 'One-way communication, cold outreach',
      whatsapp: 'Two-way conversations, personal touch',
      icon: Users,
      color: 'purple'
    },
    {
      category: 'Response Speed',
      traditional: 'Hours to days for customer responses',
      whatsapp: 'Instant replies, real-time support',
      icon: Clock,
      color: 'orange'
    },
    {
      category: 'Automation Power',
      traditional: 'Basic autoresponders, limited flows',
      whatsapp: 'AI chatbots, smart workflows, CRM integration',
      icon: Zap,
      color: 'indigo'
    }
  ];

  const stats = [
    { value: '98%', label: 'Message Open Rate', icon: MessageCircle, gradient: 'from-green-400 to-emerald-500' },
    { value: '5X', label: 'Higher Engagement', icon: TrendingUp, gradient: 'from-blue-400 to-blue-500' },
    { value: '70%', label: 'Cost Reduction', icon: DollarSign, gradient: 'from-purple-400 to-purple-500' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-emerald-400 to-emerald-600',
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      orange: 'from-orange-400 to-orange-600',
      pink: 'from-pink-400 to-pink-600',
      indigo: 'from-indigo-400 to-indigo-600'
    };
    return colors[color] || colors.emerald;
  };

  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="text-center mb-16">
         
          <div className="space-y-6">
            <h1 className={`text-4xl md:text-6xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              WhatsApp vs Traditional
            </h1>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Marketing Showdown
            </div>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Discover why WhatsApp marketing dominates traditional channels in every metric that matters
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className={`rounded-2xl overflow-hidden shadow-lg mb-16 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`border-b last:border-b-0 ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  
                  {/* Category */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(item.color)}`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.category}
                    </h3>
                  </div>

                  {/* Traditional */}
                  <div className="md:col-span-1">
                    <div className="flex items-start gap-2 mb-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-red-400' : 'text-red-600'
                      }`}>
                        Traditional
                      </span>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } ml-7`}>
                      {item.traditional}
                    </p>
                  </div>

                  {/* WhatsApp */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-2 mb-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}>
                        WhatsApp Marketing
                      </span>
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } ml-7`}>
                      {item.whatsapp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`rounded-2xl p-8 md:p-10 mb-12 ${
          darkMode 
            ? 'bg-gray-800' 
            : 'bg-white'
        } shadow-lg`}>
          
          <div className="text-center mb-10">
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Performance Metrics
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Data-driven results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className={`text-base font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={scrollToPricing}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started with WhatsApp Marketing
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;