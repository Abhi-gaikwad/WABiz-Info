import React from 'react';
import { ArrowUp, MessageCircle, Zap, Check } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDemo = () => {
    const phoneNumber = '9226333789';
    const message = 'Hello WABiz Team! 👋 I would like to request a demo of your WhatsApp Business platform. Please share the details. Thank you!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    { icon: MessageCircle, text: "95% Message Open Rate" },
    { icon: Zap, text: "10x Faster Than Email" },
    { icon: Check, text: "14-Day Money Back Guarantee" }
  ];

  return (
    <footer className={`${darkMode 
      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    } text-gray-600 px-6 py-12 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* CTA Box */}
        <div className={`${darkMode 
          ? 'bg-gradient-to-br from-gray-700/50 to-gray-900/50 border-gray-600' 
          : 'bg-gradient-to-br from-white to-gray-100 border-gray-200 shadow-lg'
        } border rounded-2xl text-center px-6 py-10 mb-10 max-w-4xl mx-auto`}>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode 
            ? 'text-white' 
            : 'text-gray-800'
          }`}>
            Ready to <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>Skyrocket Conversions?</span>
          </h2>
          
          <p className={`text-base md:text-lg mb-6 ${darkMode 
            ? 'text-gray-300' 
            : 'text-gray-600'
          }`}>
            Start using <span className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'} font-medium`}>WABiz</span> today. Automate WhatsApp. Grow faster.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`flex items-center gap-2 px-3 py-2 rounded-full ${darkMode 
                  ? 'bg-gray-800/60 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
                }`}>
                  <Icon className={`w-4 h-4 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>

          <button 
            onClick={handleWhatsAppDemo}
            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${darkMode 
              ? 'bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700' 
              : 'bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600'
            } text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95`}
          >
            Try Free for 7 Days
          </button>
        </div>

       
        {/* Copyright */}
        <div className={`pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2025 WABiz. All rights reserved. Built to grow your business with WhatsApp.
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Disclaimer: WABiz is not affiliated with WhatsApp Inc.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group ${
            darkMode 
              ? 'bg-gray-700 hover:bg-emerald-600 border border-gray-600' 
              : 'bg-white hover:bg-emerald-500 border border-gray-200'
          }`}
          aria-label="Back to top"
        >
          <div className="relative">
            <ArrowUp className={`w-5 h-5 transition-colors duration-300 ${
              darkMode 
                ? 'text-gray-300 group-hover:text-white' 
                : 'text-gray-700 group-hover:text-white'
            }`} />
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              darkMode ? 'bg-emerald-600' : 'bg-emerald-500'
            }`}></div>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;