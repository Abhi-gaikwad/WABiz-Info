import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import './WabizChatbot.css'; // Import the new CSS file

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

  const quickReplies = [
    "How does bulk messaging work?",
    "Pricing plans",
    "Getting started",
    "Auto-reply features",
    "CSV import guide",
    "Technical support"
  ];

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('pricing') || message.includes('plan') || message.includes('cost')) {
      return "💰 **WABiz Pricing Plans:**\n\n🔹 **Starter Plan** - Perfect for small businesses\n• 1,000 messages/month\n• Basic automation\n• CSV import\n\n🔹 **Professional Plan** - For growing businesses\n• 10,000 messages/month\n• Advanced automation\n• Analytics dashboard\n• Priority support\n\n🔹 **Enterprise Plan** - For large organizations\n• Unlimited messages\n• Custom integrations\n• Dedicated support\n• White-label options\n\nWould you like to see detailed pricing or start a free trial?";
    }
    
    if (message.includes('bulk') || message.includes('messaging') || message.includes('send')) {
      return "📤 **WABiz Bulk Messaging Features:**\n\n✅ Send personalized messages to thousands of contacts\n✅ Import contacts via CSV files\n✅ Custom variables (name, email, scores)\n✅ Message scheduling\n✅ Delivery reports\n✅ Media attachments (images, documents)\n✅ Smart throttling to avoid blocks\n\nOur Chrome extension makes it super easy to get started. Want me to guide you through the setup process?";
    }
    
    if (message.includes('auto') || message.includes('automation') || message.includes('reply')) {
      return "🤖 **WABiz Automation Features:**\n\n🔄 **Smart Auto-Replies**\n• Instant customer engagement\n• Keyword-based responses\n• Time-based triggers\n\n⏰ **Scheduled Messages**\n• Campaign automation\n• Follow-up sequences\n• Reminder systems\n\n📊 **Analytics & Insights**\n• Message delivery rates\n• Response tracking\n• Customer engagement metrics\n\nWhich automation feature interests you most?";
    }
    
    if (message.includes('csv') || message.includes('import') || message.includes('contact')) {
      return "📋 **CSV Import Guide:**\n\n**Step 1:** Prepare your CSV file with these columns:\n• Name\n• Phone Number (with country code)\n• Email (optional)\n• Custom fields\n\n**Step 2:** Upload via WABiz dashboard\n\n**Step 3:** Map your columns\n\n**Step 4:** Preview and validate\n\n**Step 5:** Start your campaign!\n\n💡 **Pro Tips:**\n• Use international format (+1234567890)\n• Remove duplicates before import\n• Test with small batches first\n\nNeed a sample CSV template?";
    }
    
    if (message.includes('start') || message.includes('begin') || message.includes('setup') || message.includes('getting started')) {
      return "🚀 **Getting Started with WABiz:**\n\n**Step 1:** Install Chrome Extension\n• Visit Chrome Web Store\n• Search 'WABiz Bulk Sender'\n• Click 'Add to Chrome'\n\n**Step 2:** Create Account\n• Sign up at app.wabiz.co\n• Verify your email\n• Choose your plan\n\n**Step 3:** Connect WhatsApp Web\n• Open WhatsApp Web\n• Scan QR code with your phone\n• WABiz will detect the connection\n\n**Step 4:** Import Contacts\n• Upload your CSV file\n• Map the fields correctly\n\n**Step 5:** Send Your First Campaign!\n\nWant me to help you with any specific step?";
    }
    
    if (message.includes('support') || message.includes('help') || message.includes('problem') || message.includes('issue')) {
      return "🆘 **WABiz Support Options:**\n\n💬 **Live Chat Support**\n• Available 24/7 for Pro+ users\n• Business hours for Starter users\n\n📧 **Email Support**\n• support@wabiz.co\n• Response within 24 hours\n\n📚 **Help Resources**\n• Video tutorials\n• Step-by-step guides\n• FAQ section\n• Community forum\n\n🔧 **Common Issues:**\n• WhatsApp Web disconnection\n• Message delivery problems\n• CSV import errors\n• Chrome extension issues\n\nWhat specific issue are you facing?";
    }
    
    if (message.includes('feature') || message.includes('what can') || message.includes('capabilities')) {
      return "⭐ **WABiz Key Features:**\n\n📤 **Messaging**\n• Bulk message sending\n• Personalized messages\n• Media attachments\n• Message scheduling\n\n🤖 **Automation**\n• Auto-replies\n• Drip campaigns\n• Follow-up sequences\n• Keyword triggers\n\n📊 **Analytics**\n• Delivery reports\n• Open rates\n• Response tracking\n• Campaign performance\n\n👥 **Contact Management**\n• CSV import/export\n• Contact segmentation\n• Duplicate removal\n• Custom fields\n\n🛡️ **Safety Features**\n• Smart throttling\n• Anti-ban protection\n• Message validation\n• Compliance tools\n\nWhich feature would you like to learn more about?";
    }
    
    if (message.includes('banned') || message.includes('block') || message.includes('safe')) {
      return "🛡️ **WABiz Safety & Anti-Ban Features:**\n\n✅ **Smart Throttling**\n• Automatic message spacing\n• Random delays between messages\n• Daily sending limits\n\n✅ **Message Validation**\n• Phone number verification\n• Spam content detection\n• Compliance checking\n• Monitors account health\n• Warns about risky activities\n\n💡 **Safety Tips:**\n• Start with small batches\n• Use opt-in contact lists\n• Avoid spammy content\n• Monitor delivery rates\n\nWABiz has helped thousands of users send millions of messages safely!";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "😊 You're welcome! I'm always here to help with your WABiz questions.\n\nIs there anything else you'd like to know about our WhatsApp automation platform?";
    }

    // Check if this looks like a specific question that needs detailed answer
    const specificQuestionKeywords = [
      'how to', 'what is', 'can i', 'does it', 'will it', 'is it possible', 
      'tutorial', 'guide', 'steps', 'process', 'method', 'way to',
      'integrate', 'api', 'webhook', 'database', 'crm', 'zapier',
      'custom', 'advanced', 'enterprise', 'white label', 'branding',
      'analytics', 'reports', 'dashboard', 'metrics', 'tracking',
      'security', 'privacy', 'gdpr', 'compliance', 'terms',
      'refund', 'cancel', 'upgrade', 'downgrade', 'billing'
    ];

    const hasSpecificQuestion = specificQuestionKeywords.some(keyword => 
      message.includes(keyword)
    );

    if (hasSpecificQuestion) {
      return "🔍 **I'd love to help with your specific question!**\n\nWhile I can assist with general WABiz topics, for detailed answers about your specific query, I recommend checking our comprehensive information website:\n\n🌐 **Visit:** wa-biz-info.vercel.app\n\nYou'll find:\n• Detailed tutorials and guides\n• Advanced feature explanations\n• Integration instructions\n• Technical documentation\n• FAQ section\n• Video walkthroughs\n\nIf you still need help after checking the info site, feel free to contact our support team at support@wabiz.co\n\nIs there anything else I can help you with from my available topics?";
    }
    
    // Default response for general queries
    return "🤔 I'd be happy to help! I can assist you with:\n\n• **Bulk Messaging** - How to send messages to multiple contacts\n• **Automation** - Set up auto-replies and campaigns\n• **Pricing** - Compare our plans and features\n• **Getting Started** - Step-by-step setup guide\n• **CSV Import** - How to upload your contacts\n• **Technical Support** - Troubleshooting and help\n\nFor more detailed information and comprehensive guides, please visit:\n🌐 **wa-biz-info.vercel.app**\n\nJust click on any topic above or ask me a specific question!";
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
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.startsWith('**') && line.endsWith('**') ? (
          <strong className="message-text-strong">{line.slice(2, -2)}</strong>
        ) : line.startsWith('• ') ? (
          <div className="message-text-list-item">{line}</div>
        ) : line.startsWith('🔹 ') || line.startsWith('✅ ') || line.startsWith('🔄 ') ? (
          <div className="message-text-highlight">{line}</div>
        ) : (
          line
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chat-button"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`chat-window ${isMinimized ? 'minimized' : 'full-size'}`}
        >
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-left">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="header-button"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <Bot size={20} />
              <div>
                <h3 className="header-title">WABiz Assistant</h3>
                <p className="header-status">Online • Ready to help</p>
              </div>
            </div>
            <div className="chat-header-right">
              <button
                onClick={() => setIsOpen(false)}
                className="header-button"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="messages-area">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message-row ${message.sender === 'user' ? 'user' : 'bot'}`}
                  >
                    <div className="message-content-wrapper">
                      {message.sender === 'bot' && (
                        <div className="bot-icon-wrapper">
                          <Bot size={16} className="bot-icon" />
                        </div>
                      )}
                      <div
                        className={`message-bubble ${message.sender === 'user' ? 'user' : 'bot'}`}
                      >
                        <div className="message-text">
                          {formatMessage(message.text)}
                        </div>
                        <div className={`message-timestamp ${
                          message.sender === 'user' ? 'user' : 'bot'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                      {message.sender === 'user' && (
                        <div className="user-icon-wrapper">
                          <User size={16} className="user-icon" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="typing-indicator">
                    <div className="message-content-wrapper">
                      <div className="bot-icon-wrapper">
                        <Bot size={16} className="bot-icon" />
                      </div>
                      <div className="message-bubble bot">
                        <div className="flex-space">
                          <div className="dot"></div>
                          <div className="dot" style={{animationDelay: '0.1s'}}></div>
                          <div className="dot" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="quick-replies-area">
                <div className="quick-replies-wrapper">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="quick-reply-button"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="input-area">
                <div className="input-flex-wrapper">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="message-input"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="send-button"
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