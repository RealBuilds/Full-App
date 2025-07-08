import React from 'react';
import SuggestedStreams from '../components/SuggestedStreams';
import StreamPlayer from '../components/VideoPlayerArea';
import ChatBox from '../components/ChatBox';
import { Eye, Star } from 'lucide-react';

export default function Streams() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full bg-white">
      {/* Left Sidebar - Navigation + Recommended Streams */}
      <aside className="w-60 flex-shrink-0 flex flex-col overflow-y-auto bg-gray-100 h-full border-r border-gray-300 items-center pt-6">
          {/* Removed Recommended Streams header */}
          <div className="w-full flex flex-col items-center">
            <SuggestedStreams />
          </div>
        </aside>

      {/* Main Content - Video Player and Info */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Video Player */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex-1 w-full aspect-video flex items-center justify-center bg-black" style={{minHeight: 0}}>
            <StreamPlayer />
          </div>
        </div>
        {/* Stream Info */}
        <div className="w-full max-w-3xl px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/profile-sofia-garcia.jpg" 
                alt="Sofia Garcia" 
                className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <div className="text-black font-bold text-2xl mb-1">Super Bowl Watch Party</div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">NFL</span>
                  <span className="flex items-center text-gray-600 text-sm ml-2">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    18.4k followers
                  </span>
                  <span className="flex items-center text-gray-600 text-sm ml-2">
                    <Eye className="w-4 h-4 mr-1" />
                    2,347 viewers
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-xl hover:shadow-2xl">
                Follow
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-xl hover:shadow-2xl">
                Subscribe
              </button>
            </div>
          </div>
          {/* About Section */}
          <div className="mt-1">
            <h4 className="text-black font-bold text-lg mb-1">About Ral</h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Professional NFL player and passionate gamer. Join me for live streams where I share insights from the field and connect with fans through gaming. Always bringing the energy and competitive spirit from the gridiron to the virtual world.
            </p>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Chat */}
      <aside className="w-80 flex-shrink-0 flex flex-col overflow-y-auto bg-gray-100 h-full border-l border-gray-300">
        <ChatBox />
      </aside>
    </div>
  );
} 