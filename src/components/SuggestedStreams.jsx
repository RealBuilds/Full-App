import React from 'react';
import { Eye, Dot } from 'lucide-react';

const suggestedStreams = [
  { 
    name: 'Cory Williams', 
    title: 'FIFA 24', 
    avatar: '/profile-cory-williams.jpg', 
    live: true, 
    viewers: '1.2k',
    color: 'bg-blue-500'
  },
  { 
    name: 'Hollis Robertson', 
    title: 'Squash Pro Tour', 
    avatar: '/profile-hollis-robertson.jpg', 
    live: false, 
    viewers: '847',
    color: 'bg-green-500'
  },
  { 
    name: 'Mwendwa Daisley', 
    title: 'NBA 2K24', 
    avatar: '/profile-sofia-garcia.jpg', 
    live: true, 
    viewers: '2.1k',
    color: 'bg-purple-500'
  },
  { 
    name: 'Alex Thompson', 
    title: 'Rocket League', 
    avatar: null, 
    live: true, 
    viewers: '3.4k',
    color: 'bg-orange-500'
  },
  { 
    name: 'Sarah Chen', 
    title: 'Valorant', 
    avatar: null, 
    live: false, 
    viewers: '1.8k',
    color: 'bg-pink-500'
  },
  { 
    name: 'Marcus Johnson', 
    title: 'Call of Duty', 
    avatar: null, 
    live: true, 
    viewers: '4.2k',
    color: 'bg-red-500'
  },
];

export default function SuggestedStreams() {
  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
      <div className="p-6">
        <h3 className="text-gray-900 font-bold text-lg mb-6">Recommended Streams</h3>
        <div className="space-y-4">
          {suggestedStreams.map((stream) => (
            <div 
              key={stream.name} 
              className="bg-white rounded-lg p-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  {stream.avatar ? (
                    <img 
                      src={stream.avatar} 
                      alt={stream.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${stream.color}`}>
                      {stream.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  {stream.live && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center shadow-sm">
                      <Dot className="w-2 h-2 mr-1 animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-900 font-bold text-sm mb-1 truncate">{stream.title}</div>
                  <div className="text-gray-600 text-xs mb-1 truncate">{stream.name}</div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {stream.viewers}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 