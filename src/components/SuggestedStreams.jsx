import React from 'react';
import { Eye } from 'lucide-react';

export default function SuggestedStreams() {
  const suggestedStreams = [
    {
      id: 1,
      streamer: "Sofia Garcia",
      game: "Soccer Skills Masterclass",
      viewers: "1.2k",
      avatar: "/profile-sofia-garcia.jpg",
      thumbnail: "/soccer-skills-masterclass.jpg"
    },
    {
      id: 2,
      streamer: "Hollis Robertson",
      game: "Squash Training Session",
      viewers: "856",
      avatar: "/profile-hollis-robertson.jpg",
      thumbnail: "/squash-hollis-robertson.jpg"
    },
    {
      id: 3,
      streamer: "Cory Williams",
      game: "Basketball Morning Shootaround",
      viewers: "2.1k",
      avatar: "/profile-cory-williams.jpg",
      thumbnail: "/basketball-morning-shootaround.jpg"
    },
    {
      id: 4,
      streamer: "Real Madrid",
      game: "2024-25 Season Highlights",
      viewers: "5.7k",
      avatar: "/real-madrid-2024-25.jpg",
      thumbnail: "/real-madrid-2024-25.jpg"
    }
  ];

  return (
    <aside className="w-80 bg-white border-r border-gray-200 shadow-lg">
      <div className="p-6 pt-8">
        <h3 className="text-black font-bold text-xl mb-4">Recommended</h3>
        <div className="space-y-3">
          {suggestedStreams.map((stream) => (
            <div key={stream.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.game}
                    className="w-20 h-12 rounded-md object-cover shadow-sm"
                  />
                  <div className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                    LIVE
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <img 
                      src={stream.avatar} 
                      alt={stream.streamer}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-black font-semibold text-sm truncate">{stream.streamer}</span>
                  </div>
                  <div className="text-gray-700 text-xs mb-1 truncate">{stream.game}</div>
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