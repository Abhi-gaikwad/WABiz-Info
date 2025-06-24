import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

const WabizChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm your WABiz assistant. I can help you with:\n\n• WhatsApp bulk messaging\n• Automation features\n• Pricing plans\n• Technical support\n• Getting started guide\n\nWhat would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: messages.length + 2,
        text: "This is a sample bot response.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const formatMessage = (text) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-[60px] h-[60px] bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:scale-110 transition"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className={`transition-all ${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'} max-h-[85vh] fixed bottom-24 left-6 rounded-xl shadow-2xl flex flex-col overflow-hidden z-[9999] dark:bg-gray-900 bg-white border dark:border-gray-700 border-gray-200`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="bg-white/20 hover:bg-white/30 p-1 rounded-full"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <Bot size={20} />
              <div>
                <h3 className="font-semibold text-sm">WABiz Assistant</h3>
                <p className="text-xs opacity-80">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white/20 hover:bg-white/30 p-1 rounded-full"
            >
              <X size={16} />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 dark:bg-gray-900 bg-white text-gray-800 dark:text-gray-100">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex items-start gap-2 max-w-[85%]">
                      {msg.sender === 'bot' && (
                        <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full">
                          <Bot size={16} className="text-green-600 dark:text-green-300" />
                        </div>
                      )}
                      <div className={`rounded-xl px-4 py-2 text-sm ${msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm ml-auto'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm'
                        }`}>
                        <div>{formatMessage(msg.text)}</div>
                        <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                          {formatTime(msg.timestamp)}
                        </div>
                      </div>
                      {msg.sender === 'user' && (
                        <div className="bg-blue-100 dark:bg-blue-800 p-1 rounded-full">
                          <User size={16} className="text-blue-600 dark:text-blue-300" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full">
                        <Bot size={16} className="text-green-600 dark:text-green-300" />
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl px-4 py-2 flex gap-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 dark:text-white"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
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
