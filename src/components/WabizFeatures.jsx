import React from 'react';
import { MessageCircle, Zap, Users, Clock, BarChart3, Shield, Send, Bot } from 'lucide-react';

const WabizFeatures = ({ darkMode }) => {
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
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-950 to-black' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text ${darkMode 
            ? 'bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500' 
            : 'bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600'
          } mb-6`}>
            Powerful Features for Modern Business
          </h1>
          <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Everything you need to manage your WhatsApp & SMS communication effectively
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative ${darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
                } border rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-md group-hover:scale-110 transform transition-transform`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold ${darkMode 
                  ? 'text-white group-hover:text-emerald-400' 
                  : 'text-gray-800 group-hover:text-emerald-600'
                } mb-3 transition-colors`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                  {feature.description}
                </p>

                {/* Decorative Glow Circle */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${darkMode 
                  ? 'from-emerald-400 to-pink-400' 
                  : 'from-emerald-300 to-pink-300'
                } rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Zap className={`w-6 h-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`} />
            <span className="text-lg font-medium">Ready to transform your business communication?</span>
            <Zap className={`w-6 h-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`} style={{ animationDelay: '0.3s' }} />
          </div>
          <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${darkMode 
            ? 'bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700' 
            : 'bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600'
          } text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`}>
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WabizFeatures;