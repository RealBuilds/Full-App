import React from 'react';
import { Play, Eye, Star } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <main className="flex-1 bg-gray-900 flex flex-col items-center">
      {/* Video Player */}
      <div className="relative w-full max-w-4xl min-w-[600px] aspect-video bg-black rounded-xl flex items-center justify-center shadow-2xl border border-gray-700 mt-4">
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
          <div className="bg-white bg-opacity-90 rounded-full p-10 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-100 group-hover:scale-110">
            <Play className="w-24 h-24 text-black ml-3" />
          </div>
        </button>
      </div>

      {/* Stream Info Bar */}
      <div className="w-full max-w-4xl min-w-[600px] bg-gray-800 border border-gray-700 rounded-xl mt-4 p-4 shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <img 
              src="/profile-cory-williams.jpg" 
              alt="Ral Nwogbo" 
              className="w-16 h-16 rounded-full object-cover border-4 border-gray-600 shadow-lg"
            />
            <div>
              <div className="text-white font-bold text-2xl mb-1">Ral Nwogbo</div>
              <div className="text-gray-300 text-lg mb-1">NFL</div>
              <div className="text-white font-semibold text-lg">Super Bowl Watch Party</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center text-gray-400 text-lg">
              <Eye className="w-5 h-5 mr-2" />
              2,347 viewers
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Follow
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-gray-300 text-sm">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            18.4k followers
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-white font-bold text-lg mb-2">About Ral</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Professional NFL player and passionate gamer. Join me for live streams where I share insights from the field and connect with fans through gaming. Always bringing the energy and competitive spirit from the gridiron to the virtual world.
          </p>
        </div>
      </div>
    </main>
  );
} 