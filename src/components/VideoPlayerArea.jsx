import React from 'react';
import { Play, Pause, Volume2, Maximize2, Settings } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Stream Image */}
      <img
        src="/78286460007-usatsi-25330108-168402561-lowres.webp"
        alt="Super Bowl Stream"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Overlay: Play Button (center) */}
      <button className="absolute inset-0 flex items-center justify-center focus:outline-none group">
        <div className="bg-white bg-opacity-80 rounded-full p-8 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
          <Play className="w-12 h-12 text-black ml-1" />
        </div>
      </button>
      {/* Overlay: Controls */}
      {/* Bottom left controls */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black bg-opacity-60 rounded-lg px-3 py-2">
        <button className="text-white hover:text-blue-400 transition"><Pause className="w-6 h-6" /></button>
        <button className="text-white hover:text-blue-400 transition"><Volume2 className="w-6 h-6" /></button>
      </div>
      {/* Bottom right controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-black bg-opacity-60 rounded-lg px-3 py-2">
        <button className="text-white hover:text-blue-400 transition"><Maximize2 className="w-6 h-6" /></button>
        <button className="text-white hover:text-blue-400 transition"><Settings className="w-6 h-6" /></button>
      </div>
    </div>
  );
} 