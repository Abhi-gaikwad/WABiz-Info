import React from 'react';
import {
  Zap,
  Target,
  Calendar,
  RotateCcw,
  Bot,
  Users,
  Link,
  Shield,
  Code,
  Rocket,
  Cpu,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

// Header Component
const Header = () => (
  <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-white font-bold text-sm">WAB</span>
        </div>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          WABiz
        </span>
      </div>
    </div>
  </header>
);

// Stats Component
const StatsSection = () => {
  const stats = [
    { title: "Zero Setup", desc: "Required", icon: Rocket, color: "text-blue-600 dark:text-blue-400" },
    { title: "Zero Coding", desc: "Required", icon: Code, color: "text-purple-600 dark:text-purple-400" },
    { title: "Zero Ban", desc: "Risk", icon: Shield, color: "text-green-600 dark:text-green-400" },
    { title: "100% Automated", desc: "System", icon: Cpu, color: "text-orange-600 dark:text-orange-400" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <IconComponent className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-gray-900 dark:text-white font-semibold text-sm mb-1">
                {stat.title}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs">{stat.desc}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Fully Automated</span> WhatsApp Marketing & Business Solution
        </p>
      </div>
    </div>
  );
};

// Instant Reach Component
const InstantReachSection = () => (
  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-8 rounded-xl border border-emerald-200 dark:border-emerald-700/50 text-center">
    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
      <Zap className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      Reach Your Audience
    </h3>
    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
      INSTANTLY
    </p>
    <div className="flex flex-wrap justify-center gap-2">
      <span className="bg-emerald-100 dark:bg-emerald-800/50 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-700">
        95% Open Rate
      </span>
      <span className="bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700">
        Instant Delivery
      </span>
      <span className="bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700">
        Maximum Impact
      </span>
    </div>
  </div>
);

// CTA Section
const CTASection = () => (
  <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 text-white p-8 rounded-xl shadow-lg">
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6" />
        <h3 className="text-xl font-bold">Start Your WhatsApp Marketing Journey</h3>
        <TrendingUp className="w-6 h-6" />
      </div>
      <p className="text-orange-100 mb-6 leading-relaxed">
        Transform your business with the most powerful WhatsApp automation platform. 
        Join <span className="font-semibold text-yellow-200">thousands of successful marketers</span> already using WABiz.
      </p>
      <button className="w-full bg-white hover:bg-gray-50 text-orange-600 font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
        <span className="flex items-center justify-center gap-2">
          <Rocket className="w-5 h-5" />
          <span>DISCOVER WABIZ NOW</span>
          <Rocket className="w-5 h-5" />
        </span>
      </button>
    </div>
  </div>
);

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: "Campaign Management",
      desc: "Send targeted messages with precision analytics and detailed reporting",
      icon: Target,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Auto-Schedule & Import",
      desc: "Set up campaigns in advance with custom contact lists and automation",
      icon: Calendar,
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Spintax Support",
      desc: "Avoid spam filters with dynamic, personalized content generation",
      icon: RotateCcw,
      color: "text-green-600 dark:text-green-400"
    },
    {
      title: "AI-Powered Chatbot",
      desc: "Handle customer inquiries automatically 24/7 with intelligent responses",
      icon: Bot,
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Group Management",
      desc: "Build engaged communities around your brand with automated tools",
      icon: Users,
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      title: "Social Integration",
      desc: "Import leads from Facebook & Instagram seamlessly with API connections",
      icon: Link,
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Complete WhatsApp Marketing Solution
      </h3>
      <div className="space-y-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <IconComponent className={`w-6 h-6 ${feature.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-green-700 dark:text-green-300">
              Breakthrough 95% Open Rate!
            </span>
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Automate your WhatsApp marketing and grow your business{' '}
            <span className="font-semibold text-green-600 dark:text-green-400">10x faster</span>{' '}
            with our proven system.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const WABizLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Main Heading */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                Professional{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  WhatsApp
                </span>{' '}
                Marketing & Automation
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-medium">
                  AI-Powered Business Solution
                </span>
                <br /><br />
                Reach billions of active WhatsApp users with advanced automation.{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Achieve 10x better results
                </span>{' '}
                than traditional marketing methods.
              </p>
            </div>

            <StatsSection />
            <InstantReachSection />
            <CTASection />
          </div>

          <div className="lg:col-span-1">
            <FeaturesSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WABizLanding;