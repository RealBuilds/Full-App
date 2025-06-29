import React, { useState } from 'react';
import { Send, Gift, Smile } from 'lucide-react';

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
    { id: 15, user: 'SportsFan23', message: 'What a legend!', time: '2:48', color: 'text-blue-400' },
    { id: 16, user: 'NFL_Lover', message: 'This is the best stream ever!', time: '2:49', color: 'text-green-400' },
    { id: 17, user: 'GameDay', message: 'Ral is unstoppable!', time: '2:50', color: 'text-purple-400' },
    { id: 18, user: 'TouchdownKing', message: 'That was incredible!', time: '2:51', color: 'text-yellow-400' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="w-full bg-white flex flex-col overflow-hidden h-full">
      {/* Chat Header */}
      <div className="border-b border-gray-200 p-4 flex items-center justify-between">
        <span className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          2,347 viewers
        </span>
      </div>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white min-h-[400px]">
        {chatMessages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2">
            <span className={`text-xs font-semibold ${msg.color} min-w-0 truncate`}>
              {msg.user}
            </span>
            <span className="text-gray-400 text-xs">{msg.time}</span>
            <span className="text-gray-800 text-sm flex-1 break-words">
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message..."
              className="w-full bg-gray-100 text-black placeholder-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-black transition-colors duration-200"
            >
              <Smile className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-black transition-colors duration-200"
            >
              <Gift className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="p-2 text-gray-400 hover:text-black transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 