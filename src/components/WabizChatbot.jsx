import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, HelpCircle } from 'lucide-react';

const WabizChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm your WABiz Assistant. I'm here to help you with WhatsApp bulk messaging and automation.\n\n🚀 **What I can help you with:**\n• Bulk WhatsApp messaging\n• Campaign automation\n• Pricing & subscription plans\n• Technical support & troubleshooting\n• Getting started guide\n• Chrome extension setup\n\nFeel free to ask me anything or choose from the suggestions below! 😊",
      sender: 'bot',
      timestamp: new Date(),
      showSuggestions: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatboxRef = useRef(null);
  const chatButtonRef = useRef(null);

  const suggestedQuestions = [
    "📋 How do I get started with WABiz?",
    "💰 What are your pricing plans?",
    "📱 How to install Chrome extension?",
    "🚀 How to send bulk messages?",
    "🤖 What automation features do you offer?",
    "❓ I need technical support"
  ];

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        chatboxRef.current &&
        chatButtonRef.current &&
        !chatboxRef.current.contains(event.target) &&
        !chatButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSmartResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    // Casual greetings
    if (lowerMsg.match(/^(hi|hey|hello|hii|hiii|good morning|good afternoon|good evening)$/)) {
      return "Hello there! 👋 Great to see you! I'm your WABiz assistant and I'm excited to help you with WhatsApp bulk messaging and automation. What would you like to know about our services today?";
    }
    
    // How are you responses
    if (lowerMsg.includes('how are you') || lowerMsg.includes('whats up') || lowerMsg.includes("what's up")) {
      return "I'm doing great, thank you for asking! 😊 I'm here and ready to help you with all your WABiz needs. Whether you want to learn about bulk messaging, automation features, or need technical support - I've got you covered! What can I help you with?";
    }
    
    // Thank you responses
    if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
      return "You're very welcome! 😊 I'm always happy to help. Is there anything else about WABiz that you'd like to know more about?";
    }
    
    // Pricing related
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('plan') || lowerMsg.includes('subscription')) {
      return "💰 **WABiz Pricing Plans:**\n\n🆓 **Free Plan:** Basic bulk messaging features\n💼 **Pro Plans:** Advanced automation, unlimited messages, priority support\n\n📊 **Key Features:**\n• Send to 18k+ users worldwide\n• 2.5M+ messages sent successfully\n• 98% message delivery rate\n• Chrome extension included\n\nWould you like me to connect you with our sales team for detailed pricing information? 📞";
    }
    
    // Getting started
    if (lowerMsg.includes('start') || lowerMsg.includes('begin') || lowerMsg.includes('setup') || lowerMsg.includes('install')) {
      return "🚀 **Getting Started with WABiz:**\n\n**Step 1:** Install our Chrome extension from Chrome Web Store\n**Step 2:** Create your account at wabiz.co\n**Step 3:** Connect your WhatsApp Web\n**Step 4:** Import your contacts\n**Step 5:** Start sending bulk messages!\n\n✨ **Pro Tip:** We have both free and premium versions available. Would you like help with the installation process?";
    }
    
    // Features and automation
    if (lowerMsg.includes('feature') || lowerMsg.includes('automation') || lowerMsg.includes('what can') || lowerMsg.includes('capabilities')) {
      return "🤖 **WABiz Key Features:**\n\n📱 **Bulk Messaging:**\n• Send to multiple contacts instantly\n• Custom message personalization\n• Attachment support (images, docs, audio)\n\n🔄 **Automation:**\n• Auto-reply bots\n• Scheduled messaging\n• Smart replies\n• Campaign management\n\n📊 **Analytics:**\n• Delivery reports\n• Read receipts tracking\n• Campaign performance metrics\n\n🛡️ **Safety:** WhatsApp-compliant to prevent blocking\n\nWhich feature interests you most?";
    }
    
    // Technical support
    if (lowerMsg.includes('support') || lowerMsg.includes('help') || lowerMsg.includes('problem') || lowerMsg.includes('issue') || lowerMsg.includes('error')) {
      return "🛠️ **Technical Support Available:**\n\nI'm here to help! For technical issues, I can assist with:\n• Chrome extension problems\n• WhatsApp connection issues\n• Message delivery problems\n• Account setup difficulties\n\n💬 **Get Help:**\n• Chat with me here for quick solutions\n• Visit our support portal\n• Email our technical team\n\nWhat specific issue are you experiencing? Please describe it and I'll do my best to help! 🤝";
    }
    
    // Chrome extension
    if (lowerMsg.includes('chrome') || lowerMsg.includes('extension') || lowerMsg.includes('browser')) {
      return "🌐 **WABiz Chrome Extension:**\n\n📥 **Installation:**\n1. Go to Chrome Web Store\n2. Search 'WABiz Bulk Sender'\n3. Click 'Add to Chrome'\n4. Pin the extension to your toolbar\n\n⚡ **Features:**\n• Direct WhatsApp Web integration\n• Bulk message sending\n• Contact management\n• Message templates\n• Safe & secure operation\n\n🔒 **Security:** Fully compliant with WhatsApp policies\n\nNeed help with installation or have questions about the extension?";
    }
    
    // About WABiz
    if (lowerMsg.includes('about') || lowerMsg.includes('company') || lowerMsg.includes('wabiz')) {
      return "🏢 **About WABiz:**\n\nWABiz is a leading WhatsApp marketing and automation platform that helps businesses connect with customers effectively.\n\n📈 **Our Success:**\n• 18,000+ users across 98 countries\n• 2.5M+ messages sent successfully\n• 94,000+ automated bot replies\n• 1,500+ hours of work saved for businesses\n\n🎯 **Our Mission:** Making WhatsApp marketing simple, effective, and safe for businesses of all sizes.\n\n💡 Developed by EDIGI DIGITAL HUB PRIVATE LIMITED\n\nWhat would you like to know more about?";
    }
    
    // Default response for unmatched queries
    return "Thanks for your message! 😊 I want to make sure I give you the most helpful information about WABiz. Could you please be more specific about what you'd like to know? \n\nI can help you with:\n• Pricing and plans 💰\n• Getting started guide 🚀\n• Technical support 🛠️\n• Feature explanations 🤖\n• Chrome extension help 🌐\n\nOr feel free to choose from the suggested questions below!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Simulate more realistic typing delay based on response length
    const response = getSmartResponse(currentInput);
    const typingDelay = Math.min(Math.max(response.length * 20, 1000), 3000);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        showSuggestions: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, typingDelay);
  };

  const handleSuggestionClick = (suggestion) => {
    const cleanSuggestion = suggestion.replace(/^[\w\s]*\s/, '').replace(/[📋💰📱🚀🤖❓]\s/, '');
    setInputMessage(cleanSuggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => {
      // Handle bold text formatting
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <React.Fragment key={i}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9999] font-sans">
      {!isOpen && (
        <div className="relative" ref={chatButtonRef}>
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 sm:w-[60px] sm:h-[60px] bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <MessageCircle size={20} className="sm:w-7 sm:h-7" />
          </button>
          <div className="absolute -top-10 sm:-top-12 left-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
            Need help with WABiz? Click to chat!
          </div>
        </div>
      )}

      {isOpen && (
        <div 
          ref={chatboxRef}
          className={`transition-all duration-300 ${
            isMinimized 
              ? 'w-72 sm:w-80 h-14 sm:h-16' 
              : 'w-[95vw] sm:w-96 h-[85vh] sm:h-[600px]'
          } max-w-sm sm:max-w-none max-h-[85vh] fixed bottom-16 sm:bottom-24 left-2 sm:left-6 right-2 sm:right-auto rounded-xl shadow-2xl flex flex-col overflow-hidden z-[9999] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 sm:p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="bg-white/20 hover:bg-white/30 p-1 rounded-full transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={14} className="sm:w-4 sm:h-4" /> : <Minimize2 size={14} className="sm:w-4 sm:h-4" />}
              </button>
              <Bot size={16} className="sm:w-5 sm:h-5" />
              <div>
                <h3 className="font-semibold text-xs sm:text-sm">WABiz Assistant</h3>
                <p className="text-[10px] sm:text-xs opacity-80">🟢 Online • Ready to help you!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white/20 hover:bg-white/30 p-1 rounded-full transition-colors"
              title="Close chat"
            >
              <X size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                {messages.map((msg) => (
                  <div key={msg.id}>
                    <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-start gap-1 sm:gap-2 max-w-[90%] sm:max-w-[85%]">
                        {msg.sender === 'bot' && (
                          <div className="bg-green-100 dark:bg-green-800 p-1 sm:p-1.5 rounded-full flex-shrink-0">
                            <Bot size={12} className="sm:w-4 sm:h-4 text-green-600 dark:text-green-300" />
                          </div>
                        )}
                        <div className={`rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm shadow-sm ${msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-700'
                          }`}>
                          <div className="leading-relaxed">{formatMessage(msg.text)}</div>
                          <div className={`text-[9px] sm:text-[10px] mt-1 sm:mt-2 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                            {formatTime(msg.timestamp)}
                          </div>
                        </div>
                        {msg.sender === 'user' && (
                          <div className="bg-blue-100 dark:bg-blue-800 p-1 sm:p-1.5 rounded-full flex-shrink-0">
                            <User size={12} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-300" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Suggested Questions */}
                    {msg.sender === 'bot' && msg.showSuggestions && (
                      <div className="mt-2 sm:mt-3 ml-6 sm:ml-10">
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500 mb-1 sm:mb-2">
                          <HelpCircle size={10} className="sm:w-3 sm:h-3" />
                          <span>Quick questions:</span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {suggestedQuestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-[10px] sm:text-xs bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full transition-colors border border-green-200 dark:border-green-800"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-1 sm:gap-2">
                      <div className="bg-green-100 dark:bg-green-800 p-1 sm:p-1.5 rounded-full">
                        <Bot size={12} className="sm:w-4 sm:h-4 text-green-600 dark:text-green-300" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex gap-1 shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 sm:px-4 py-2 sm:py-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me about WABiz services..."
                    className="flex-1 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-2 sm:p-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    title="Send message"
                  >
                    <Send size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 mt-1 text-center">
                  Powered by WABiz • Always here to help! 🚀
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WabizChatbot;