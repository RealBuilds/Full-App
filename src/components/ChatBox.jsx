import React from 'react';
import { Crown } from 'lucide-react';

const chatMessages = [
  { user: 'fan123', time: '12:01', message: 'Let\'s go Ral! 🔥', role: 'user', color: 'text-blue-600' },
  { user: 'sportsbuff', time: '12:02', message: 'That was an insane play!', role: 'user', color: 'text-green-600' },
  { user: 'modMike', time: '12:03', message: 'Keep it respectful in chat, folks.', role: 'mod', color: 'text-purple-600' },
  { user: 'viewer42', time: '12:04', message: 'NFL players are built different.', role: 'user', color: 'text-orange-600' },
  { user: 'gamer_girl', time: '12:05', message: 'Who else is hyped for the next game?', role: 'user', color: 'text-pink-600' },
  { user: 'fan123', time: '12:06', message: 'Me! 🙋‍♂️', role: 'user', color: 'text-blue-600' },
  { user: 'streamerRal', time: '12:07', message: 'Thanks for the support everyone!', role: 'streamer', color: 'text-red-600' },
  { user: 'modMike', time: '12:08', message: 'Welcome Ral! 👋', role: 'mod', color: 'text-purple-600' },
  { user: 'tech_guy', time: '12:09', message: 'What\'s your setup for streaming?', role: 'user', color: 'text-indigo-600' },
  { user: 'streamerRal', time: '12:10', message: 'I\'ll show you my setup later!', role: 'streamer', color: 'text-red-600' },
  { user: 'modMike', time: '12:11', message: 'Great idea!', role: 'mod', color: 'text-purple-600' },
];

export default function LiveChat() {
  return (
    <aside className="w-75 bg-white border-l border-gray-200 flex-shrink-0 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-gray-900 font-bold text-lg">Live Chat</h3>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {chatMessages.map((msg, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs mt-1 shadow-sm ${
              msg.role === 'streamer' ? 'bg-red-600' :
              msg.role === 'mod' ? 'bg-purple-600' : 'bg-blue-600'
            }`}>
              {msg.role === 'streamer' && <Crown className="w-3 h-3" />}
              {msg.role !== 'streamer' && msg.user[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 font-medium">{msg.time}</span>
                <span className={`font-bold text-sm ${msg.color}`}>
                  {msg.user}
                  {msg.role === 'mod' && <span className="text-purple-600 ml-1">(mod)</span>}
                  {msg.role === 'streamer' && <span className="text-red-600 ml-1">(streamer)</span>}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg px-3 py-2 text-gray-800 text-sm break-words border border-gray-100">
                {msg.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
            disabled
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50" disabled>
            Send
          </button>
        </div>
      </div>
    </aside>
  );
} 