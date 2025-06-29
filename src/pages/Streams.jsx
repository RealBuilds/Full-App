import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SuggestedStreams from '../components/SuggestedStreams';
import VideoPlayerArea from '../components/VideoPlayerArea';
import ChatBox from '../components/ChatBox';

export default function Streams() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white p-2 rounded-lg shadow-lg border border-gray-200"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Left Sidebar - Desktop */}
        <div className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'} fixed lg:relative inset-y-0 left-0 z-30 lg:z-auto`}>
          <SuggestedStreams />
        </div>

        {/* Center Panel */}
        <VideoPlayerArea />

        {/* Right Sidebar - Desktop */}
        <div className="hidden lg:block">
          <ChatBox />
        </div>

        {/* Mobile Chat Toggle */}
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
          >
            💬
          </button>
        </div>

        {/* Mobile Chat - Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex items-end">
            <div className="w-full h-2/3 bg-white rounded-t-2xl shadow-2xl">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-bold">Live Chat</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-full overflow-y-auto p-4">
                {/* Mobile Chat Content */}
                <div className="space-y-3">
                  {[
                    { user: 'fan123', time: '12:01', message: 'Let\'s go Ral! 🔥', role: 'user' },
                    { user: 'sportsbuff', time: '12:02', message: 'That was an insane play!', role: 'user' },
                    { user: 'modMike', time: '12:03', message: 'Keep it respectful in chat, folks.', role: 'mod' },
                    { user: 'viewer42', time: '12:04', message: 'NFL players are built different.', role: 'user' },
                    { user: 'gamer_girl', time: '12:05', message: 'Who else is hyped for the next game?', role: 'user' },
                    { user: 'fan123', time: '12:06', message: 'Me! 🙋‍♂️', role: 'user' },
                    { user: 'streamerRal', time: '12:07', message: 'Thanks for the support everyone!', role: 'streamer' },
                    { user: 'modMike', time: '12:08', message: 'Welcome Ral! 👋', role: 'mod' },
                  ].map((msg, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs mt-1 ${
                        msg.role === 'streamer' ? 'bg-purple-600' :
                        msg.role === 'mod' ? 'bg-green-600' : 'bg-blue-600'
                      }`}>
                        {msg.role === 'streamer' && <span>👑</span>}
                        {msg.role !== 'streamer' && msg.user[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500">{msg.time}</span>
                          <span className={`font-semibold text-sm ${
                            msg.role === 'streamer' ? 'text-purple-600' :
                            msg.role === 'mod' ? 'text-green-600' : 'text-gray-700'
                          }`}>
                            {msg.user}
                            {msg.role === 'mod' && <span className="text-green-600 ml-1">(mod)</span>}
                          </span>
                        </div>
                        <div className="text-gray-800 text-sm break-words">
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Send a message..."
                    className="flex-1 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50" disabled>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 