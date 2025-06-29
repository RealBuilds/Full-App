import React from 'react';
import { Play, Eye } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <main className="flex-1 bg-gray-900 flex flex-col">
      {/* Video Player */}
      <div className="relative flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl flex items-center justify-center shadow-2xl border border-gray-700">
          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
            <div className="bg-white bg-opacity-90 rounded-full p-10 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-100 group-hover:scale-110">
              <Play className="w-24 h-24 text-black ml-3" />
            </div>
          </button>
        </div>
      </div>

      {/* Stream Info Bar */}
      <div className="bg-gray-800 border-t border-gray-700 p-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src="/profile-cory-williams.jpg" 
                  alt="Ral Nwogbo" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-600 shadow-lg"
                />
                <div>
                  <div className="text-white font-bold text-2xl mb-1">Ral Nwogbo</div>
                  <div className="text-gray-300 text-lg">NFL Player</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-lg">
                <Eye className="w-5 h-5 mr-2" />
                2,347 viewers
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Follow
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 