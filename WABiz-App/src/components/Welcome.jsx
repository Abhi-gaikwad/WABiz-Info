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
  Star,
  CheckCircle
} from 'lucide-react';

// Header Component
const Header = () => (
  <header className="flex justify-center py-6 sm:py-8 px-4 bg-gray-900/50 dark:bg-gray-900/70 backdrop-blur-md w-full shadow-2xl border-b border-gray-700/50 dark:border-gray-600/30 transition-all duration-300">
    <div className="flex items-center gap-3 sm:gap-4 group">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full flex items-center justify-center overflow-hidden p-1 shadow-2xl transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-emerald-500/20">
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm sm:text-lg shadow-inner">
          WAB
        </div>
      </div>
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
        WABiz
      </span>
    </div>
  </header>
);

// Hero Stats Box Component
const HeroStatsBox = () => {
  const stats = [
    { title: "ZERO", text: "Setup Required", icon: Rocket, color: "from-blue-500 to-blue-600" },
    { title: "ZERO", text: "Coding Required", icon: Code, color: "from-purple-500 to-purple-600" },
    { title: "ZERO", text: "Ban Risk", icon: Shield, color: "from-green-500 to-green-600" },
    { title: "100%", text: "Automated", icon: Cpu, color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="bg-white/10 dark:bg-gray-800/90 border border-gray-300/30 dark:border-gray-600/50 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl backdrop-blur-sm hover:shadow-emerald-500/20 transition-all duration-500 group">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 text-center">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="group/stat hover:transform hover:scale-105 transition-all duration-300 p-3 sm:p-4 rounded-xl hover:bg-gray-100/20 dark:hover:bg-gray-700/30">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center shadow-lg group-hover/stat:animate-bounce`}>
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg sm:text-xl group-hover/stat:text-emerald-500 dark:group-hover/stat:text-emerald-300 transition-colors">
                {stat.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">{stat.text}</div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-gray-300/30 dark:border-gray-600/50 pt-4 sm:pt-6 mt-4 sm:mt-6 text-center font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base flex-wrap">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 animate-pulse" />
          <span>Fully Automated WhatsApp Marketing & Automation System</span>
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Instant Reach Box Component
const InstantReachBox = () => (
  <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 text-center border border-gray-300/30 dark:border-gray-600/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 group overflow-hidden relative">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 animate-pulse"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full flex justify-center items-center shadow-2xl group-hover:animate-pulse group-hover:shadow-emerald-500/50 transition-all duration-500 ring-4 ring-emerald-500/20">
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white animate-bounce" />
      </div>
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-semibold tracking-wide">
        REACH YOUR AUDIENCE<br />
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 dark:text-emerald-400 block mt-2 sm:mt-3 bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
          INSTANTLY
        </span>
      </p>
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
        <span className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 sm:px-3 py-1 rounded-full border border-emerald-500/30 text-xs sm:text-sm font-medium">
          95% Open Rate
        </span>
        <span className="bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 sm:px-3 py-1 rounded-full border border-blue-500/30 text-xs sm:text-sm font-medium">
          Instant Delivery
        </span>
        <span className="bg-purple-500/20 text-purple-700 dark:text-purple-300 px-2 sm:px-3 py-1 rounded-full border border-purple-500/30 text-xs sm:text-sm font-medium">
          Maximum Impact
        </span>
      </div>
    </div>
  </div>
);

// CTA Box Component
const CTABox = () => (
  <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 dark:from-orange-600 dark:via-orange-700 dark:to-red-700 text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl text-center mb-6 sm:mb-8 lg:mb-10 transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/30 group overflow-hidden relative">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-red-400/20 animate-pulse"></div>

    <div className="relative z-10">
      <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 flex items-center justify-center gap-2 flex-wrap">
        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 animate-bounce text-yellow-300" />
        <span className="text-center">Start Your WhatsApp Marketing Journey</span>
        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 animate-bounce text-yellow-300" style={{ animationDelay: '0.5s' }} />
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-orange-100 leading-relaxed mb-4 sm:mb-6">
        Transform your business with the most powerful WhatsApp automation platform.
        Join <span className="font-bold text-yellow-200">thousands of successful marketers</span> already using WABiz.
      </p>
      <button className="w-full py-3 sm:py-4 px-4 sm:px-6 font-bold bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-xl hover:from-green-600 hover:to-emerald-700 hover:scale-105 hover:shadow-2xl group-hover:animate-pulse transform active:scale-95 border-2 border-green-400/50 hover:border-green-300">
        <span className="flex items-center justify-center gap-2">
          <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>DISCOVER WABIZ NOW!</span>
          <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
      </button>
    </div>
  </div>
);

// Features Box Component
const FeaturesBox = () => {
  const features = [
    {
      title: "Advanced Campaign Management",
      desc: "Send targeted messages to specific groups with precision targeting and analytics",
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Auto-Schedule & Import Lists",
      desc: "Set up your campaigns in advance with custom contact lists and automation",
      icon: Calendar,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Spintax Support",
      desc: "Avoid spam filters with dynamic, personalized content generation",
      icon: RotateCcw,
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI-Powered Auto-Reply Chatbot",
      desc: "Handle customer inquiries automatically 24/7 with smart responses",
      icon: Bot,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "WhatsApp Group Creation",
      desc: "Build engaged communities around your brand with automated management",
      icon: Users,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Social Media Integration",
      desc: "Import leads from Facebook & Instagram seamlessly with API connections",
      icon: Link,
      color: "from-orange-500 to-orange-600"
    },
  ];

  return (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-10 border border-gray-300/30 dark:border-gray-600/40 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 text-gray-800 dark:text-white bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
        Complete WhatsApp Marketing Solution
      </h3>
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex gap-3 sm:gap-4 bg-white/20 dark:bg-gray-800/40 p-3 sm:p-4 lg:p-5 rounded-xl items-start hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300 group/feature border border-gray-200/30 dark:border-gray-700/30 hover:border-gray-300/50 dark:hover:border-gray-600/50 hover:shadow-lg">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover/feature:animate-bounce`}>
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-800 dark:text-white mb-1 sm:mb-2 group-hover/feature:text-emerald-600 dark:group-hover/feature:text-emerald-400 transition-colors">
                  {feature.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover/feature:text-gray-700 dark:group-hover/feature:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-xl border border-green-500/30 text-center backdrop-blur-sm">
        <span className="font-bold text-base sm:text-lg lg:text-xl block mb-2 sm:mb-3 text-green-600 dark:text-green-400 flex items-center justify-center gap-2 flex-wrap">
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-green-500" />
          <span>Breakthrough 95% Open Rate!</span>
          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce text-green-500" style={{ animationDelay: '0.5s' }} />
        </span>
        <span className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300">
          Automate your WhatsApp marketing and grow your business <span className="font-bold text-emerald-600 dark:text-emerald-400">10x faster</span> with our proven system.
        </span>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12 flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full">
    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {/* Left Content - Takes 2 columns on large screens */}
      <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6 text-gray-900 dark:text-white">
            Disruptive{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-pulse">
              WhatsApp
            </span>{' '}
            Marketing & Automation Tool
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-emerald-400/10 px-2 py-1 rounded">
              AI-Powered Business & Professionals.
            </span>
            <br /><br />
            Dominate Your Market with Advanced Automation &{' '}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-emerald-400/10 px-2 py-1 rounded">
              Reach Billions of Active WhatsApp Users. Achieve 10x The Results
            </span>
            <br />
            of Traditional Marketing Methods.
          </p>
        </div>

        <HeroStatsBox />
        <InstantReachBox />
        <CTABox />
      </div>

      {/* Right Content - Features */}
      <div className="lg:col-span-1">
        <FeaturesBox />
      </div>
    </div>
  </div>
);

// Main Welcome Component
const Welcome = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative transition-colors duration-500">
      {/* Animated background patterns */}
      {/* Removed overflow-x-hidden from here, relying on global box-sizing and html/body overflow-x if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 dark:from-emerald-900/5 via-transparent to-emerald-500/5 dark:to-emerald-900/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Welcome;