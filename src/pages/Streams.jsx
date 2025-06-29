import React from 'react';
import { Play, Eye } from 'lucide-react';

const suggestedStreams = [
  { name: 'Cory Williams', game: 'FIFA 24' },
  { name: 'Hollis Robertson', game: 'Squash Pro Tour' },
  { name: 'Mwendwa Daisley', game: 'NBA 2K24' },
];

const chatMessages = [
  { user: 'fan123', message: 'Let\'s go Ral! 🔥' },
  { user: 'sportsbuff', message: 'That was an insane play!' },
  { user: 'modMike', message: 'Keep it respectful in chat, folks.' },
  { user: 'viewer42', message: 'NFL players are built different.' },
  { user: 'gamer_girl', message: 'Who else is hyped for the next game?' },
  { user: 'fan123', message: 'Me! 🙋‍♂️' },
];

export default function Streams() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-[1380px] mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sidebar: Suggested Streams */}
          <aside className="hidden lg:block lg:col-span-2 max-w-[180px] h-full">
            <div className="bg-white rounded-xl shadow p-4 h-full flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Suggested Streams</h3>
              <ul className="space-y-3 flex-1">
                {suggestedStreams.map((stream) => (
                  <li key={stream.name} className="flex flex-col p-2 rounded hover:bg-slate-100 cursor-pointer">
                    <span className="font-semibold text-slate-800">{stream.name}</span>
                    <span className="text-xs text-slate-500">{stream.game}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Video Area */}
          <main className="lg:col-span-6 flex flex-col items-center w-full">
            <div className="w-full max-w-2xl aspect-video bg-black rounded-2xl shadow-2xl flex items-center justify-center relative mb-6 border border-slate-200">
              <button className="absolute inset-0 flex items-center justify-center focus:outline-none">
                <Play className="w-20 h-20 text-white opacity-80 hover:opacity-100 transition" />
              </button>
            </div>
            <div className="text-center space-y-2 mb-2">
              <h2 className="text-2xl font-bold text-slate-900">Ral Nwogbo</h2>
              <div className="flex items-center justify-center gap-3">
                <div className="text-blue-600 font-semibold text-sm bg-blue-50 inline-block px-3 py-1 rounded-full">NFL Player</div>
                <div className="flex items-center text-slate-500 text-sm ml-2">
                  <Eye className="w-4 h-4 mr-1" />
                  2,347 viewers
                </div>
              </div>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition">Follow</button>
            </div>
          </main>

          {/* Right Sidebar: Live Chat */}
          <aside className="hidden lg:block lg:col-span-4 max-w-[360px] h-full">
            <div className="bg-white rounded-xl shadow flex flex-col h-full min-h-[420px] max-h-[480px]">
              <div className="p-4 border-b border-slate-100 font-bold text-slate-900">Live Chat</div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50" style={{ minHeight: 0 }}>
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                      {msg.user[0].toUpperCase()}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 mr-2">{msg.user}</span>
                      <span className="text-slate-700">{msg.message}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-slate-100">
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
    </div>
  );
} 