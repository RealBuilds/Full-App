import React from 'react';
import { Eye, Dot } from 'lucide-react';

const suggestedStreams = [
  { 
    name: 'Cory Williams', 
    title: 'FIFA 24', 
    avatar: '/profile-cory-williams.jpg', 
    live: true, 
    viewers: '1.2k' 
  },
  { 
    name: 'Hollis Robertson', 
    title: 'Squash Pro Tour', 
    avatar: '/profile-hollis-robertson.jpg', 
    live: false, 
    viewers: '847' 
  },
  { 
    name: 'Mwendwa Daisley', 
    title: 'NBA 2K24', 
    avatar: '/profile-sofia-garcia.jpg', 
    live: true, 
    viewers: '2.1k' 
  },
];

export default function SuggestedStreams() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg mb-4">Suggested Streams</h3>
        <div className="space-y-3">
          {suggestedStreams.map((stream) => (
            <div 
              key={stream.name} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="relative">
                <img 
                  src={stream.avatar} 
                  alt={stream.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                {stream.live && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold flex items-center">
                    <Dot className="w-2 h-2 mr-1 animate-pulse" />
                    LIVE
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-gray-900 font-semibold truncate">{stream.name}</div>
                <div className="text-gray-600 text-sm">{stream.title}</div>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <Eye className="w-3 h-3 mr-1" />
                  {stream.viewers}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 