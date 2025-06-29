import React from 'react';
import { Play } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Play Button */}
      <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
        <div className="bg-white rounded-full p-16 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
          <Play className="w-12 h-12 text-black ml-1" />
        </div>
      </button>
    </div>
  );
} 