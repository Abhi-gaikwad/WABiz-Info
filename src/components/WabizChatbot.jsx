import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, HelpCircle } from 'lucide-react';

const WabizChatbot = () => {
  // State management for chatbot functionality
  const [isOpen, setIsOpen] = useState(false); // Controls if chatbot is open/closed
  const [isMinimized, setIsMinimized] = useState(false); // Controls if chatbot is minimized
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm your WABiz Assistant. I'm here to help you with WhatsApp bulk messaging and automation.\n\n🚀 **What I can help you with:**\n• Bulk WhatsApp messaging\n• Campaign automation\n• Pricing & subscription plans\n• Technical support & troubleshooting\n• Getting started guide\n• Chrome extension setup\n\nFeel free to ask me anything or choose from the suggestions below! 😊",
      sender: 'bot',
      timestamp: new Date(),
      showSuggestions: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState(''); // Current input message
  const [isTyping, setIsTyping] = useState(false); // Bot typing indicator
  
  // Refs for DOM manipulation and click detection
  const messagesEndRef = useRef(null);
  const chatboxRef = useRef(null);
  const chatButtonRef = useRef(null);

  // Predefined suggested questions for quick user interaction
  const suggestedQuestions = [
    "📋 How do I get started?",
    "💰 Pricing plans?", 
    "📱 Chrome extension?",
    "🚀 Send bulk messages?",
    "🤖 Automation features?",
    "❓ Technical support"
  ];

  // Enhanced click outside handler - closes chatbot when clicking outside
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
        setIsMinimized(false); // Reset minimized state when closing
      }
    };

    // ESC key handler to close chatbot
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setIsMinimized(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Smart response system - returns appropriate bot response based on user input
  const getSmartResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    // Casual greetings detection and response
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
    
    // Pricing related queries
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('plan') || lowerMsg.includes('subscription')) {
      return "💰 **WABiz Pricing Plans:**\n\n🆓 **Free Plan:** Basic bulk messaging features\n💼 **Pro Plans:** Advanced automation, unlimited messages, priority support\n\n📊 **Key Features:**\n• Send to 18k+ users worldwide\n• 2.5M+ messages sent successfully\n• 98% message delivery rate\n• Chrome extension included\n\nWould you like me to connect you with our sales team for detailed pricing information? 📞";
    }
    
    // Getting started guide
    if (lowerMsg.includes('start') || lowerMsg.includes('begin') || lowerMsg.includes('setup') || lowerMsg.includes('install')) {
      return "🚀 **Getting Started with WABiz:**\n\n**Step 1:** Install our Chrome extension from Chrome Web Store\n**Step 2:** Create your account at wabiz.co\n**Step 3:** Connect your WhatsApp Web\n**Step 4:** Import your contacts\n**Step 5:** Start sending bulk messages!\n\n✨ **Pro Tip:** We have both free and premium versions available. Would you like help with the installation process?";
    }
    
    // Features and automation information
    if (lowerMsg.includes('feature') || lowerMsg.includes('automation') || lowerMsg.includes('what can') || lowerMsg.includes('capabilities')) {
      return "🤖 **WABiz Key Features:**\n\n📱 **Bulk Messaging:**\n• Send to multiple contacts instantly\n• Custom message personalization\n• Attachment support (images, docs, audio)\n\n🔄 **Automation:**\n• Auto-reply bots\n• Scheduled messaging\n• Smart replies\n• Campaign management\n\n📊 **Analytics:**\n• Delivery reports\n• Read receipts tracking\n• Campaign performance metrics\n\n🛡️ **Safety:** WhatsApp-compliant to prevent blocking\n\nWhich feature interests you most?";
    }
    
    // Technical support responses
    if (lowerMsg.includes('support') || lowerMsg.includes('help') || lowerMsg.includes('problem') || lowerMsg.includes('issue') || lowerMsg.includes('error')) {
      return "🛠️ **Technical Support Available:**\n\nI'm here to help! For technical issues, I can assist with:\n• Chrome extension problems\n• WhatsApp connection issues\n• Message delivery problems\n• Account setup difficulties\n\n💬 **Get Help:**\n• Chat with me here for quick solutions\n• Visit our support portal\n• Email our technical team\n\nWhat specific issue are you experiencing? Please describe it and I'll do my best to help! 🤝";
    }
    
    // Chrome extension information
    if (lowerMsg.includes('chrome') || lowerMsg.includes('extension') || lowerMsg.includes('browser')) {
      return "🌐 **WABiz Chrome Extension:**\n\n📥 **Installation:**\n1. Go to Chrome Web Store\n2. Search 'WABiz Bulk Sender'\n3. Click 'Add to Chrome'\n4. Pin the extension to your toolbar\n\n⚡ **Features:**\n• Direct WhatsApp Web integration\n• Bulk message sending\n• Contact management\n• Message templates\n• Safe & secure operation\n\n🔒 **Security:** Fully compliant with WhatsApp policies\n\nNeed help with installation or have questions about the extension?";
    }
    
    // About WABiz company information
    if (lowerMsg.includes('about') || lowerMsg.includes('company') || lowerMsg.includes('wabiz')) {
      return "🏢 **About WABiz:**\n\nWABiz is a leading WhatsApp marketing and automation platform that helps businesses connect with customers effectively.\n\n📈 **Our Success:**\n• 18,000+ users across 98 countries\n• 2.5M+ messages sent successfully\n• 94,000+ automated bot replies\n• 1,500+ hours of work saved for businesses\n\n🎯 **Our Mission:** Making WhatsApp marketing simple, effective, and safe for businesses of all sizes.\n\n💡 Developed by EDIGI DIGITAL HUB PRIVATE LIMITED\n\nWhat would you like to know more about?";
    }
    
    // Default response for unmatched queries
    return "Thanks for your message! 😊 I want to make sure I give you the most helpful information about WABiz. Could you please be more specific about what you'd like to know? \n\nI can help you with:\n• Pricing and plans 💰\n• Getting started guide 🚀\n• Technical support 🛠️\n• Feature explanations 🤖\n• Chrome extension help 🌐\n\nOr feel free to choose from the suggested questions below!";
  };

  // Handle sending messages - adds user message and generates bot response
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return; // Don't send empty messages

    // Create user message object
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage(''); // Clear input field
    setIsTyping(true); // Show typing indicator

    // Simulate realistic typing delay based on response length
    const response = getSmartResponse(currentInput);
    const typingDelay = Math.min(Math.max(response.length * 20, 1000), 3000);

    // Add bot response after delay
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

  // Handle clicking on suggested questions
  const handleSuggestionClick = (suggestion) => {
    // Clean the suggestion text (remove emojis and extra spaces)
    const cleanSuggestion = suggestion.replace(/^[\w\s]*\s/, '').replace(/[📋💰📱🚀🤖❓]\s/, '');
    setInputMessage(cleanSuggestion);
    // Auto-send the suggestion after a brief delay
    setTimeout(() => handleSendMessage(), 100);
  };

  // Format timestamp for display
  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Format message text with bold styling support
  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => {
      // Handle bold text formatting (**text** becomes <strong>text</strong>)
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
    // Main container - positioned fixed at bottom-right corner
    <div className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-[9999] font-sans">
      
      {/* Chat button - shows when chatbot is closed */}
      {!isOpen && (
        <div className="relative" ref={chatButtonRef}>
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse hover:shadow-xl"
          >
            <MessageCircle size={20} className="sm:w-6 sm:h-6" />
          </button>
          
          {/* Tooltip that appears on hover */}
          <div className="absolute -top-10 -left-20 sm:-left-32 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Need help with WABiz? Click to chat!
          </div>
        </div>
      )}

      {/* Chat window - shows when chatbot is open */}
      {isOpen && (
        <div 
          ref={chatboxRef}
          className={`transition-all duration-300 ${
            isMinimized 
              ? 'w-64 sm:w-72 h-12'  // Minimized dimensions
              : 'w-[90vw] sm:w-80 md:w-[340px] h-[70vh] sm:h-[480px] md:h-[500px]' // Full dimensions
          } max-w-[340px] max-h-[80vh] fixed bottom-16 sm:bottom-20 left-3 sm:left-4 md:left-6 rounded-lg shadow-2xl flex flex-col overflow-hidden z-[9999] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700`}
        >
          
          {/* Header section with controls and branding */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Minimize/Maximize button */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="bg-white/20 hover:bg-white/30 p-1 rounded-full transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={12} /> : <Minimize2 size={12} />}
              </button>
              
              {/* Bot icon and title */}
              <Bot size={14} />
              <div>
                <h3 className="font-semibold text-xs">WABiz Assistant</h3>
                <p className="text-[10px] opacity-80">🟢 Online</p>
              </div>
            </div>
            
            {/* Close button */}
            <button
              onClick={() => {setIsOpen(false); setIsMinimized(false);}}
              className="bg-white/20 hover:bg-white/30 p-1 rounded-full transition-colors"
              title="Close chat"
            >
              <X size={12} />
            </button>
          </div>

          {/* Chat content - only visible when not minimized */}
          {!isMinimized && (
            <>
              {/* Messages container with scrollable area */}
              <div className="flex-1 overflow-y-auto px-2 sm:px-3 py-2 space-y-2 sm:space-y-3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                
                {/* Render all messages */}
                {messages.map((msg) => (
                  <div key={msg.id}>
                    {/* Individual message bubble */}
                    <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex items-start gap-1 sm:gap-2 max-w-[85%]">
                        
                        {/* Bot avatar for bot messages */}
                        {msg.sender === 'bot' && (
                          <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full flex-shrink-0">
                            <Bot size={10} className="sm:w-3 sm:h-3 text-green-600 dark:text-green-300" />
                          </div>
                        )}
                        
                        {/* Message content */}
                        <div className={`rounded-lg px-2 sm:px-3 py-2 text-xs shadow-sm ${msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm' // User message styling
                          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-700' // Bot message styling
                          }`}>
                          <div className="leading-relaxed">{formatMessage(msg.text)}</div>
                          {/* Message timestamp */}
                          <div className={`text-[9px] mt-1 text-left ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                            {formatTime(msg.timestamp)}
                          </div>
                        </div>
                        
                        {/* User avatar for user messages */}
                        {msg.sender === 'user' && (
                          <div className="bg-blue-100 dark:bg-blue-800 p-1 rounded-full flex-shrink-0">
                            <User size={10} className="sm:w-3 sm:h-3 text-blue-600 dark:text-blue-300" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Suggested questions for bot messages */}
                    {msg.sender === 'bot' && msg.showSuggestions && (
                      <div className="mt-2 ml-4 sm:ml-6">
                        <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-1">
                          <HelpCircle size={8} />
                          <span>Quick questions:</span>
                        </div>
                        {/* Render suggestion buttons */}
                        <div className="flex flex-wrap gap-1">
                          {suggestedQuestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-[9px] sm:text-[10px] bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full transition-colors border border-green-200 dark:border-green-800"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Typing indicator when bot is responding */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-1 sm:gap-2">
                      <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full">
                        <Bot size={10} className="sm:w-3 sm:h-3 text-green-600 dark:text-green-300" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg px-2 sm:px-3 py-2 flex gap-1 shadow-sm border border-gray-100 dark:border-gray-700">
                        {/* Animated typing dots */}
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Scroll anchor for auto-scrolling */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input section at the bottom */}
              <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 sm:px-3 py-2">
                <div className="flex gap-1 sm:gap-2">
                  {/* Text input field */}
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} // Send on Enter key
                    placeholder="Ask me about WABiz services..."
                    className="flex-1 rounded-full px-3 py-1.5 sm:py-2 text-xs border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  {/* Send button */}
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()} // Disable if input is empty
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    title="Send message"
                  >
                    <Send size={12} className="sm:w-3 sm:h-3" />
                  </button>
                </div>
                {/* Footer text */}
                <div className="text-[9px] text-gray-400 mt-1 text-center">
                  Powered by WABiz • Press ESC to close
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