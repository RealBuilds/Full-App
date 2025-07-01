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
      {/* Webcam Overlay */}
      <img
        src="/webcam-user.jpg" // Place the image in public/webcam-user.jpg
        alt="Webcam"
        className="absolute top-4 right-4 w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover z-20"
      />
      {/* Overlay: Controls */}
      {/* Bottom left controls */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black bg-opacity-60 rounded shadow-md px-1 py-0.5">
        <button className="text-white hover:text-blue-400 transition"><Pause className="w-4 h-4" /></button>
        <button className="text-white hover:text-blue-400 transition"><Volume2 className="w-4 h-4" /></button>
      </div>
      {/* Bottom right controls */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black bg-opacity-60 rounded shadow-md px-1 py-0.5">
        <button className="text-white hover:text-blue-400 transition"><Settings className="w-4 h-4" /></button>
        <button className="text-white hover:text-blue-400 transition"><Maximize2 className="w-4 h-4" /></button>
      </div>
    </div>
  );
} 