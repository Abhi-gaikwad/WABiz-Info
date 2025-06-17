import React from 'react';
import { MessageCircle, Zap, Users, Clock, BarChart3, Shield, Send, Bot } from 'lucide-react';
import './WabizFeatures.css';

const WabizFeatures = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Smart WhatsApp Messaging",
      description: "Send individual and bulk WhatsApp messages with advanced scheduling and automation features.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Bot,
      title: "Auto-Reply SMS & WhatsApp",
      description: "Set up intelligent auto-replies for both SMS and WhatsApp to never miss a customer inquiry.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Broadcast Manager",
      description: "Efficiently manage and broadcast messages to thousands of contacts with personalized templates.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Scheduled Messaging",
      description: "Schedule your messages for optimal delivery times and automate your marketing campaigns.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track message delivery, engagement rates, and campaign performance with detailed insights.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with end-to-end encryption and 99.9% uptime guarantee.",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section className="wabiz-features-section py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="main-title text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Powerful Features for Modern Business
          </h1>
          <p className="main-subtitle text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your WhatsApp & SMS communication effectively
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`feature-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="feature-title text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="feature-description text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WabizFeatures;
