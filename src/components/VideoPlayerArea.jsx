import React from 'react';
import { Play, Eye, Star } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <main className="flex-1 bg-white flex flex-col items-center">
      {/* Video Player */}
      <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl flex items-center justify-center shadow-2xl border border-gray-200 mb-6">
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
          <div className="bg-white rounded-full p-16 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
            <Play className="w-12 h-12 text-black ml-1" />
          </div>
        </button>
      </div>

      {/* Stream Info Panel */}
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <img 
                src="/profile-cory-williams.jpg" 
                alt="Ral Nwogbo" 
                className="w-16 h-16 rounded-full object-cover border-4 border-gray-200 shadow-lg"
              />
              <div>
                <div className="text-black font-bold text-2xl mb-2">Super Bowl Watch Party</div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">NFL</span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    18.4k followers
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    2,347 viewers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                Follow
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h4 className="text-black font-bold text-xl mb-3">About Ral</h4>
          <p className="text-gray-700 text-base leading-relaxed">
            Professional NFL player and passionate gamer. Join me for live streams where I share insights from the field and connect with fans through gaming. Always bringing the energy and competitive spirit from the gridiron to the virtual world.
          </p>
        </div>
      </div>
    </main>
  );
} 