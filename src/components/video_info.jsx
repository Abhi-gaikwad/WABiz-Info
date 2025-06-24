import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, Gift, ExternalLink, Play, Globe } from 'lucide-react';

function VideoInfo({ darkMode }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    { icon: <Phone className="h-5 w-5" />, text: "Auto-reply to calls, missed calls & outgoing calls" },
    { icon: <MessageSquare className="h-5 w-5" />, text: "WhatsApp & SMS automation" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 automation - Never miss a lead" },
    { icon: <Gift className="h-5 w-5" />, text: "Share digital brochure & business card" }
  ];

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className={`py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            WhatsApp Automation by{' '}
            <span className={`${darkMode ? 'text-amber-400' : 'text-teal-600'}`}>WABiz</span>
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            📞 Never Miss a Lead Again! Automate your WhatsApp and SMS responses for every call.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Video Section - Left Side */}
          <div className="order-2 lg:order-1">
            <div className={`relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {!isVideoPlaying ? (
                /* Video Placeholder */
                <div className={`aspect-video flex items-center justify-center cursor-pointer ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`} onClick={handleVideoPlay}>
                  <div className="text-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                      darkMode ? 'bg-amber-500 hover:bg-amber-600' : 'bg-teal-500 hover:bg-teal-600'
                    }`}>
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                    </div>
                    <p className={`text-base sm:text-lg font-semibold ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Watch Demo Video
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      See WABiz in action
                    </p>
                  </div>
                </div>
              ) : (
                /* YouTube Video Embed */
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8QcwXmKuBC4?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* Info Section - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 lg:space-y-8">
              {/* Key Features */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  ✅ What WABiz Does for You
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full flex-shrink-0 ${
                        darkMode ? 'text-amber-400' : 'text-teal-600'
                      }`}>
                        {feature.icon}
                      </div>
                      <p className={`text-sm sm:text-base ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className={`p-4 sm:p-6 rounded-xl lg:rounded-2xl border-2 ${
                darkMode 
                  ? 'bg-gray-800 border-amber-500' 
                  : 'bg-gradient-to-r from-teal-50 to-blue-50 border-teal-300'
              }`}>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 ${
                    darkMode ? 'bg-amber-500 text-black' : 'bg-teal-500 text-white'
                  }`}>
                    <Gift className="h-3 w-3 sm:h-4 sm:w-4" />
                    Limited Time Offer
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className={`text-3xl sm:text-4xl font-bold ${
                      darkMode ? 'text-amber-400' : 'text-teal-600'
                    }`}>₹1,999</span>
                    <span className={`text-base sm:text-lg line-through ml-2 ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>₹6,000</span>
                  </div>
                  <p className={`text-xs sm:text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Save ₹4,001 with this exclusive offer!
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <a
                  href="https://app.wabiz.co/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    darkMode
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white'
                  }`}
                >
                  🚀 Register Now - Grab This Offer
                  <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>

              {/* Contact Info */}
              <div className={`p-3 sm:p-4 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-6 gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className={`h-4 w-4 ${
                      darkMode ? 'text-amber-400' : 'text-teal-600'
                    }`} />
                    <span className={`font-semibold text-sm sm:text-base ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Contact: 9226333789
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className={`h-4 w-4 ${
                      darkMode ? 'text-amber-400' : 'text-teal-600'
                    }`} />
                    <span className={`text-sm sm:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      WABiz.co
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoInfo;