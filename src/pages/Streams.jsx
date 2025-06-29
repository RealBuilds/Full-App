import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SuggestedStreams from '../components/SuggestedStreams';
import StreamPlayer from '../components/VideoPlayerArea';
import LiveChat from '../components/ChatBox';

export default function Streams() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Main Layout Container */}
      <div className="p-6">
        <div className="flex gap-6 h-screen max-w-[1400px] mx-auto">
          {/* Left Sidebar - Desktop */}
          <div className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'} fixed lg:relative inset-y-0 left-0 z-30 lg:z-auto lg:inset-auto`}>
            <SuggestedStreams />
          </div>

          {/* Center Panel */}
          <StreamPlayer />

          {/* Right Sidebar - Desktop */}
          <div className="hidden lg:block">
            <LiveChat />
          </div>
        </div>
      </div>

      {/* Mobile Chat Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
        >
          💬
        </button>
      </div>

      {/* Mobile Chat - Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex items-end">
          <div className="w-full h-3/4 bg-white rounded-t-3xl shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold">Live Chat</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-full overflow-y-auto p-6">
              {/* Mobile Chat Content */}
              <div className="space-y-4">
                {[
                  { user: 'fan123', time: '12:01', message: 'Let\'s go Ral! 🔥', role: 'user', color: 'text-blue-600' },
                  { user: 'sportsbuff', time: '12:02', message: 'That was an insane play!', role: 'user', color: 'text-green-600' },
                  { user: 'modMike', time: '12:03', message: 'Keep it respectful in chat, folks.', role: 'mod', color: 'text-purple-600' },
                  { user: 'viewer42', time: '12:04', message: 'NFL players are built different.', role: 'user', color: 'text-orange-600' },
                  { user: 'gamer_girl', time: '12:05', message: 'Who else is hyped for the next game?', role: 'user', color: 'text-pink-600' },
                  { user: 'fan123', time: '12:06', message: 'Me! 🙋‍♂️', role: 'user', color: 'text-blue-600' },
                  { user: 'streamerRal', time: '12:07', message: 'Thanks for the support everyone!', role: 'streamer', color: 'text-red-600' },
                  { user: 'modMike', time: '12:08', message: 'Welcome Ral! 👋', role: 'mod', color: 'text-purple-600' },
                ].map((msg, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1 shadow-md ${
                      msg.role === 'streamer' ? 'bg-red-600' :
                      msg.role === 'mod' ? 'bg-purple-600' : 'bg-blue-600'
                    }`}>
                      {msg.role === 'streamer' && <span>👑</span>}
                      {msg.role !== 'streamer' && msg.user[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 font-medium">{msg.time}</span>
                        <span className={`font-bold text-sm ${msg.color}`}>
                          {msg.user}
                          {msg.role === 'mod' && <span className="text-purple-600 ml-1">(mod)</span>}
                          {msg.role === 'streamer' && <span className="text-red-600 ml-1">(streamer)</span>}
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-xl px-4 py-3 text-gray-800 text-sm break-words">
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="flex-1 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
                  disabled
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50" disabled>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 