import React from 'react';
import { Play, Eye, Dot, Crown } from 'lucide-react';

const suggestedStreams = [
  { name: 'Cory Williams', sport: 'FIFA 24', avatar: '/profile-cory-williams.jpg', live: true, viewers: '1.2k' },
  { name: 'Hollis Robertson', sport: 'Squash Pro Tour', avatar: '/profile-hollis-robertson.jpg', live: false, viewers: '847' },
  { name: 'Mwendwa Daisley', sport: 'NBA 2K24', avatar: '/profile-sofia-garcia.jpg', live: true, viewers: '2.1k' },
];

const chatMessages = [
  { user: 'fan123', time: '12:01', message: 'Let\'s go Ral! 🔥', role: 'user' },
  { user: 'sportsbuff', time: '12:02', message: 'That was an insane play!', role: 'user' },
  { user: 'modMike', time: '12:03', message: 'Keep it respectful in chat, folks.', role: 'mod' },
  { user: 'viewer42', time: '12:04', message: 'NFL players are built different.', role: 'user' },
  { user: 'gamer_girl', time: '12:05', message: 'Who else is hyped for the next game?', role: 'user' },
  { user: 'fan123', time: '12:06', message: 'Me! 🙋‍♂️', role: 'user' },
  { user: 'streamerRal', time: '12:07', message: 'Thanks for the support everyone!', role: 'streamer' },
  { user: 'modMike', time: '12:08', message: 'Welcome Ral! 👋', role: 'mod' },
];

export default function Streams() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex h-screen">
        {/* Left Sidebar - Suggested Streams */}
        <aside className="w-80 bg-gray-800 border-r border-gray-700 flex-shrink-0 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-white font-bold text-lg mb-4">Suggested Streams</h3>
            <div className="space-y-3">
              {suggestedStreams.map((stream) => (
                <div key={stream.name} className="bg-gray-700 rounded-lg p-3 hover:bg-gray-600 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={stream.avatar} 
                        alt={stream.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {stream.live && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold flex items-center">
                          <Dot className="w-2 h-2 mr-1 animate-pulse" />
                          LIVE
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold truncate">{stream.name}</div>
                      <div className="text-gray-400 text-sm">{stream.sport}</div>
                      <div className="flex items-center text-gray-500 text-xs mt-1">
                        <Eye className="w-3 h-3 mr-1" />
                        {stream.viewers}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Stream Area */}
        <main className="flex-1 bg-black flex flex-col">
          {/* Video Player */}
          <div className="relative flex-1 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl aspect-video bg-gray-900 flex items-center justify-center">
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
                <div className="bg-white bg-opacity-90 rounded-full p-8 shadow-2xl flex items-center justify-center transition-all duration-200 group-hover:bg-opacity-100 group-hover:scale-110">
                  <Play className="w-20 h-20 text-black ml-2" />
                </div>
              </button>
            </div>
          </div>

          {/* Stream Info Bar */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="/profile-cory-williams.jpg" 
                    alt="Ral Nwogbo" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-bold text-lg">Ral Nwogbo</div>
                    <div className="text-gray-400 text-sm">NFL Player</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  2,347 viewers
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Follow
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Live Chat */}
        <aside className="w-80 bg-gray-800 border-l border-gray-700 flex-shrink-0 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-bold text-lg">Live Chat</h3>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs mt-1 ${
                  msg.role === 'streamer' ? 'bg-purple-600' :
                  msg.role === 'mod' ? 'bg-green-600' : 'bg-blue-600'
                }`}>
                  {msg.role === 'streamer' && <Crown className="w-3 h-3" />}
                  {msg.role !== 'streamer' && msg.user[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">{msg.time}</span>
                    <span className={`font-semibold text-sm ${
                      msg.role === 'streamer' ? 'text-purple-400' :
                      msg.role === 'mod' ? 'text-green-400' : 'text-gray-300'
                    }`}>
                      {msg.user}
                      {msg.role === 'mod' && <span className="text-green-400 ml-1">(mod)</span>}
                    </span>
                  </div>
                  <div className="text-gray-200 text-sm break-words">
                    {msg.message}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50" disabled>
                Send
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 