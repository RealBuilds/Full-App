import React, { useState } from 'react';

const tabs = ["Posts", "Likes", "About"];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Posts");
  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Cover Image */}
      <div className="h-40 w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl mb-16 relative">
        <img src="/profile-sofia-garcia.jpg" alt="Ral Nwogbo" className="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" />
      </div>
      {/* Profile Info */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Ral Nwogbo</h1>
          <div className="text-slate-500">@ralnwogbo</div>
        </div>
        <button className="bg-slate-200 text-slate-700 px-6 py-2 rounded-full font-semibold hover:bg-slate-300">Edit Profile</button>
      </div>
      {/* Stats */}
      <div className="flex space-x-8 mb-6">
        <div><span className="font-bold">18.4k</span> Followers</div>
        <div><span className="font-bold">2,347</span> Following</div>
        <div><span className="font-bold">1.2M</span> Likes</div>
      </div>
      {/* Bio */}
      <div className="mb-8 text-slate-700">Professional NFL player and passionate gamer. Always bringing the energy and competitive spirit from the gridiron to the virtual world.</div>
      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-6">
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
      {/* Tab Content Placeholder */}
      <div className="bg-white rounded-lg shadow p-6 min-h-[200px]">
        {activeTab === "Posts" && <p>Posts will appear here...</p>}
        {activeTab === "Likes" && <p>Liked content will appear here...</p>}
        {activeTab === "About" && <p>About info will appear here...</p>}
      </div>
    </div>
  );
} 