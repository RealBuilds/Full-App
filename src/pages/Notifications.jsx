import React, { useState } from 'react';

const tabs = ["All", "Mentions", "Follows"];
const notifications = [
  { type: "mention", user: "@sportsfan23", avatar: "/profile-sofia-garcia.jpg", message: "mentioned you in a comment", time: "2m" },
  { type: "follow", user: "@alexkim", avatar: "/profile-cory-williams.jpg", message: "started following you", time: "10m" },
  { type: "like", user: "@nfl_lover", avatar: "/profile-hollis-robertson.jpg", message: "liked your post", time: "1h" },
  { type: "system", user: "AthleteArena", avatar: null, message: "Your profile was verified!", time: "3h" },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="flex space-x-4 mb-6 border-b">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-2 font-medium text-lg border-b-2 transition-colors ${activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-500 hover:text-blue-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-center bg-white rounded-lg shadow p-4 gap-4">
            {n.avatar ? (
              <img src={n.avatar} alt={n.user} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">AA</div>
            )}
            <div className="flex-1">
              <span className="font-semibold text-slate-900 mr-2">{n.user}</span>
              <span className="text-slate-700">{n.message}</span>
              <div className="text-xs text-slate-400 mt-1">{n.time} ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 