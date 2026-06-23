import { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

export default function MessagingScreen() {
  const [selectedContact, setSelectedContact] = useState(1);
  const [message, setMessage] = useState('');

  const contacts = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Mentor',
      avatar: '👩‍💼',
      lastMessage: 'Great progress on your portfolio!',
      time: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'TechCorp SL',
      role: 'Employer',
      avatar: '💻',
      lastMessage: 'Thank you for your application',
      time: '1h ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Michael Thompson',
      role: 'Mentor',
      avatar: '👨‍💼',
      lastMessage: 'Let\'s schedule a session',
      time: '3h ago',
      unread: 1,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'other',
      text: 'Hi! How can I help you with your career development?',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'I\'m interested in transitioning into a senior developer role. What skills should I focus on?',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'other',
      text: 'Great question! I\'d recommend focusing on system design, leadership skills, and mentoring junior developers.',
      time: '10:35 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: 'That makes sense. I\'ve been working on my portfolio. Would you mind reviewing it?',
      time: '10:40 AM',
    },
    {
      id: 5,
      sender: 'other',
      text: 'Great progress on your portfolio!',
      time: '10:45 AM',
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <Layout role="job-seeker">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[calc(100vh-180px)]">
        <div className="flex h-full">
          <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-all ${
                    selectedContact === contact.id ? 'bg-[#14B8A6]/5 border-l-4 border-l-[#14B8A6]' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-full flex items-center justify-center text-xl">
                        {contact.avatar}
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                          <p className="text-xs text-gray-500">{contact.role}</p>
                        </div>
                        <span className="text-xs text-gray-500">{contact.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                        {contact.unread > 0 && (
                          <span className="ml-2 w-5 h-5 bg-[#14B8A6] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-1 flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#14B8A6] to-[#1E3A8A] rounded-full flex items-center justify-center text-lg">
                    👩‍💼
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] ${
                      msg.sender === 'me'
                        ? 'bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white'
                        : 'bg-white text-gray-900'
                    } rounded-2xl px-4 py-3 shadow-sm`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-gradient-to-r from-[#14B8A6] to-[#1E3A8A] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
