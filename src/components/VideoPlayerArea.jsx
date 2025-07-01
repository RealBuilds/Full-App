import React from 'react';
import { Pause, Volume2, Maximize2, Settings } from 'lucide-react';

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
      {/* Overlay: Controls */}
      {/* Bottom left controls */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black bg-opacity-60 rounded-lg px-2 py-1">
        <button className="text-white hover:text-blue-400 transition"><Pause className="w-5 h-5" /></button>
        <button className="text-white hover:text-blue-400 transition"><Volume2 className="w-5 h-5" /></button>
      </div>
      {/* Bottom right controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black bg-opacity-60 rounded-lg px-2 py-1">
        <button className="text-white hover:text-blue-400 transition"><Settings className="w-5 h-5" /></button>
        <button className="text-white hover:text-blue-400 transition"><Maximize2 className="w-5 h-5" /></button>
      </div>
    </div>
  );
} 