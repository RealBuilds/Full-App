import React from 'react';
import { Play, Eye } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <main className="flex-1 bg-gray-900 flex flex-col max-w-[70%]">
      {/* Video Player */}
      <div className="relative flex-1 flex items-center justify-center p-6">
        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl flex items-center justify-center shadow-lg" style={{ maxHeight: '600px' }}>
          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
            <div className="bg-white bg-opacity-90 rounded-full p-8 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-100 group-hover:scale-110">
              <Play className="w-20 h-20 text-black ml-2" />
            </div>
          </button>
        </div>
      </div>

      {/* Stream Info Bar */}
      <div className="bg-white border-t border-gray-200 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/profile-cory-williams.jpg" 
                  alt="Ral Nwogbo" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                />
                <div>
                  <div className="text-gray-900 font-bold text-lg mb-1">Ral Nwogbo</div>
                  <div className="text-gray-600 text-sm">NFL Player</div>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Eye className="w-4 h-4 mr-1" />
                2,347 viewers
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md">
              Follow
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 