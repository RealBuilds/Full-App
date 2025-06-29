import React from 'react';
import { Play, Eye, Star } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <main className="flex-1 bg-white flex flex-col">
      {/* Video Player */}
      <div className="relative w-full aspect-video bg-black rounded-xl flex items-center justify-center shadow-lg border border-gray-200">
        {/* Play Button */}
        <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-12 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30 group-hover:scale-110">
            <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
          </div>
        </button>
      </div>

      {/* Stream Info Bar */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img 
            src="/profile-cory-williams.jpg" 
            alt="Ral Nwogbo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />
          <div className="flex-1">
            <div className="text-black font-bold text-xl mb-1">Super Bowl Watch Party</div>
            <div className="text-gray-600 text-lg mb-2">NFL</div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center text-gray-500">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                18.4k followers
              </div>
              <div className="flex items-center text-gray-500">
                <Eye className="w-4 h-4 mr-1" />
                2,347 viewers
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-black font-bold text-lg mb-2">About Ral</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Professional NFL player and passionate gamer. Join me for live streams where I share insights from the field and connect with fans through gaming. Always bringing the energy and competitive spirit from the gridiron to the virtual world.
          </p>
        </div>
      </div>
    </main>
  );
} 