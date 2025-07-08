import React from 'react';

const reels = [
  {
    id: 1,
    video: '/reel1.mp4',
    cover: '/basketball-morning-shootaround.jpg',
    creator: 'Sofia Garcia',
    avatar: '/profile-sofia-garcia.jpg',
    views: '1.2M',
    title: 'Soccer Skills Masterclass',
  },
  {
    id: 2,
    video: '/reel2.mp4',
    cover: '/squash-hollis-robertson.jpg',
    creator: 'Hollis Robertson',
    avatar: '/profile-hollis-robertson.jpg',
    views: '856K',
    title: 'Squash Training Session',
  },
  {
    id: 3,
    video: '/reel3.mp4',
    cover: '/real-madrid-2024-25.jpg',
    creator: 'Real Madrid',
    avatar: '/real-madrid-2024-25.jpg',
    views: '5.7M',
    title: '2024-25 Season Highlights',
  },
  {
    id: 4,
    video: '/reel4.mp4',
    cover: '/soccer-skills-masterclass.jpg',
    creator: 'NBA Highlights',
    avatar: '/placeholder.svg',
    views: '3.2M',
    title: 'Best Plays of the Week',
  },
];

export default function Discover() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Discover header and subtitle removed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reels.map((reel) => (
          <div key={reel.id} className="relative group rounded-2xl overflow-hidden shadow-lg bg-white border border-orange-100 hover:shadow-xl transition-all">
            <img src={reel.cover} alt={reel.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
              <button className="bg-orange-500 bg-opacity-90 p-4 rounded-full shadow-lg hover:bg-orange-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75v10.5l7.5-5.25-7.5-5.25z" />
                </svg>
              </button>
            </div>
            {/* Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={reel.avatar} alt={reel.creator} className="w-8 h-8 rounded-full border-2 border-orange-500 object-cover" />
                <span className="text-white font-semibold text-sm drop-shadow">{reel.creator}</span>
              </div>
              <div className="flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-orange-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5V6.75A2.25 2.25 0 0012.75 4.5h-1.5A2.25 2.25 0 009 6.75v3.75m6 0v6.75A2.25 2.25 0 0112.75 19.5h-1.5A2.25 2.25 0 019 17.25V10.5m6 0H9" />
                </svg>
                {reel.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 