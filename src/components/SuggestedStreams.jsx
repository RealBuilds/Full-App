import React from 'react';
import { Eye, Home, Compass, Users, User } from 'lucide-react';

export default function SuggestedStreams() {
  const navItems = [
    { label: 'Home', icon: <Home className="w-5 h-5 mr-2" />, active: true },
    { label: 'Browse', icon: <Compass className="w-5 h-5 mr-2" />, active: false },
    { label: 'Following', icon: <Users className="w-5 h-5 mr-2" />, active: false },
  ];

  const suggestedStreams = [
    {
      id: 1,
      streamer: "Sofia Garcia",
      game: "Soccer Skills Masterclass",
      viewers: "1.2k",
      icon: true
    },
    {
      id: 2,
      streamer: "Hollis Robertson",
      game: "Squash Training Session",
      viewers: "856",
      image: "/profile-hollis-robertson.jpg"
    },
    {
      id: 3,
      streamer: "Cory Williams",
      game: "Basketball Morning Shootaround",
      viewers: "2.1k",
      image: "/profile-cory-williams.jpg"
    },
    {
      id: 4,
      streamer: "Real Madrid",
      game: "2024-25 Season Highlights",
      viewers: "5.7k",
      image: "/real-madrid-2024-25.jpg"
    },
    {
      id: 5,
      streamer: "NBA Highlights",
      game: "Best Plays of the Week",
      viewers: "3.2k",
      icon: true
    },
    {
      id: 6,
      streamer: "Premier League",
      game: "Match Day Coverage",
      viewers: "4.1k",
      icon: true
    },
    {
      id: 7,
      streamer: "Alex Kim",
      game: "Tennis Live Analysis",
      viewers: "1.8k",
      icon: true
    },
    {
      id: 8,
      streamer: "Sam Lee",
      game: "Golf Pro Tips",
      viewers: "2.4k",
      icon: true
    },
    {
      id: 9,
      streamer: "Jordan Smith",
      game: "Cricket World Cup",
      viewers: "3.9k",
      icon: true
    },
    {
      id: 10,
      streamer: "Emily Chen",
      game: "Volleyball Highlights",
      viewers: "1.1k",
      icon: true
    }
  ];

  return (
    <div className="w-full h-full flex flex-col border-r border-gray-300">
      {/* Vertical Nav */}
      <nav className="flex flex-col gap-2 py-6 px-4 border-b border-gray-200 mb-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center px-3 py-2 rounded-lg font-semibold text-sm transition-colors duration-150 ${item.active ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
      {/* Recommended Streams */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <h3 className="text-black font-bold text-lg mb-3 mt-2">Recommended</h3>
        <div className="space-y-2">
          {suggestedStreams.map((stream) => (
            <div key={stream.id} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
              {stream.image ? (
                <img
                  src={stream.image}
                  alt={stream.streamer}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 border border-gray-300">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-black font-semibold text-sm truncate">{stream.streamer}</div>
                <div className="text-gray-600 text-xs truncate">{stream.game}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="flex items-center text-gray-500 text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  {stream.viewers}
                </span>
                <span className="bg-red-600 text-white text-[7px] px-1 py-[1px] rounded font-bold mt-1 leading-none" style={{letterSpacing: 0.5}}>LIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 