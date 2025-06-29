import React from 'react';
import { Play, Eye, Dot } from 'lucide-react';

const suggestedStreams = [
  { name: 'Cory Williams', sport: 'Soccer', avatar: '/profile-cory-williams.jpg', live: true },
  { name: 'Hollis Robertson', sport: 'Squash', avatar: '/profile-hollis-robertson.jpg', live: false },
  { name: 'Mwendwa Daisley', sport: 'Basketball', avatar: '/profile-sofia-garcia.jpg', live: true },
];

const chatMessages = [
  { user: 'fan123', time: '12:01', message: 'Let\'s go Ral! 🔥' },
  { user: 'sportsbuff', time: '12:02', message: 'That was an insane play!' },
  { user: 'modMike', time: '12:03', message: 'Keep it respectful in chat, folks.' },
  { user: 'viewer42', time: '12:04', message: 'NFL players are built different.' },
  { user: 'gamer_girl', time: '12:05', message: 'Who else is hyped for the next game?' },
  { user: 'fan123', time: '12:06', message: 'Me! 🙋‍♂️' },
];

export default function Streams() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-[1200px] mx-auto mt-10 px-2">
        {/* Suggested Streams */}
        <aside className="w-full lg:w-60 flex-shrink-0 mb-6 lg:mb-0">
          <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Suggested Streams</h3>
            <ul className="space-y-4 flex-1">
              {suggestedStreams.map((stream) => (
                <li key={stream.name} className="flex items-center gap-3 p-2 rounded hover:bg-slate-100 cursor-pointer">
                  <div className="relative">
                    <img src={stream.avatar} alt={stream.name} className="w-10 h-10 rounded-full object-cover border-2 border-slate-200" />
                    {stream.live && (
                      <span className="absolute -top-1 -right-1 flex items-center bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                        <Dot className="w-3 h-3 mr-1 animate-pulse" />LIVE
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 leading-tight">{stream.name}</div>
                    <div className="text-xs text-slate-500">{stream.sport}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Stream Section */}
        <main className="flex-1 flex flex-col items-center">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center mb-6">
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center focus:outline-none">
              <span className="bg-white rounded-full p-6 shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                <Play className="w-16 h-16 text-black" />
              </span>
            </button>
            {/* Streamer Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 rounded-xl px-4 py-3 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-bold text-lg">Ral Nwogbo</span>
                <span className="text-blue-200 text-xs bg-blue-600 bg-opacity-60 px-2 py-0.5 rounded-full ml-2">NFL Player</span>
              </div>
              <div className="flex items-center text-white text-xs">
                <Eye className="w-4 h-4 mr-1" />
                2,347 viewers
              </div>
            </div>
          </div>
        </main>

        {/* Live Chat */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full" style={{ minHeight: 0 }}>
            <div className="font-bold text-slate-900 mb-2">Live Chat</div>
            <div className="flex-1 overflow-y-auto h-[400px] space-y-2 pr-1">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs mt-1">
                    {msg.user[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-400">{msg.time}</span>
                      <span className="font-semibold text-slate-800 text-sm">{msg.user}</span>
                    </div>
                    <div className="bg-gray-100 rounded px-2 py-1 text-slate-700 text-sm mb-1 max-w-xs break-words">
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sticky Input Bar */}
            <div className="pt-2 sticky bottom-0 bg-white">
              <input
                type="text"
                placeholder="Send a message..."
                className="w-full px-3 py-2 rounded bg-slate-100 border-0 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                disabled
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 