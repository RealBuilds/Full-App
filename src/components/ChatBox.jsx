import React, { useState } from 'react';
import { Send, Heart, Gift, Smile } from 'lucide-react';

export default function ChatBox() {
  const [message, setMessage] = useState('');

  const chatMessages = [
    { id: 1, user: 'SportsFan23', message: 'Amazing play! 🔥', time: '2:34', color: 'text-blue-400' },
    { id: 2, user: 'NFL_Lover', message: 'This is incredible!', time: '2:35', color: 'text-green-400' },
    { id: 3, user: 'GameDay', message: 'Ral is absolutely killing it today!', time: '2:36', color: 'text-purple-400' },
    { id: 4, user: 'TouchdownKing', message: 'That was a perfect throw!', time: '2:37', color: 'text-yellow-400' },
    { id: 5, user: 'GridironGuru', message: 'Can\'t believe what I\'m seeing!', time: '2:38', color: 'text-pink-400' },
    { id: 6, user: 'FootballFanatic', message: 'This stream is fire! 🔥🔥', time: '2:39', color: 'text-red-400' },
    { id: 7, user: 'ProPlayer', message: 'Ral, you\'re the GOAT!', time: '2:40', color: 'text-indigo-400' },
    { id: 8, user: 'SportsFan23', message: 'What a game!', time: '2:41', color: 'text-blue-400' },
    { id: 9, user: 'NFL_Lover', message: 'This is why I love football!', time: '2:42', color: 'text-green-400' },
    { id: 10, user: 'GameDay', message: 'Ral is on another level today!', time: '2:43', color: 'text-purple-400' },
    { id: 11, user: 'TouchdownKing', message: 'That play was insane!', time: '2:44', color: 'text-yellow-400' },
    { id: 12, user: 'GridironGuru', message: 'Can\'t wait for the next play!', time: '2:45', color: 'text-pink-400' },
    { id: 13, user: 'FootballFanatic', message: 'This is peak performance!', time: '2:46', color: 'text-red-400' },
    { id: 14, user: 'ProPlayer', message: 'Ral, you\'re making history!', time: '2:47', color: 'text-indigo-400' },
    { id: 15, user: 'SportsFan23', message: 'What a legend!', time: '2:48', color: 'text-blue-400' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="w-full lg:w-96 h-full bg-gray-900 rounded-xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4 rounded-t-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-bold text-lg">Live Chat</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">2,347 viewers</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex-1">
            Follow
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex-1">
            Subscribe
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900">
        {chatMessages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2">
            <span className={`text-xs font-semibold ${msg.color} min-w-0 truncate`}>
              {msg.user}
            </span>
            <span className="text-gray-400 text-xs">{msg.time}</span>
            <span className="text-gray-200 text-sm flex-1 break-words">
              {msg.message}
            </span>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 rounded-b-xl">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Smile className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Gift className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 