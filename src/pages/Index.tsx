import React from "react";
import { Feed } from "@/components/Feed";
import { SuggestedAthletes } from "@/components/SuggestedAthletes";
import { StreamingSection } from "@/components/StreamingSection";
import { TrendingTopics } from "@/components/TrendingTopics";
import { Header } from "@/components/Header";

const trainingStories = [
  "Mwendwa Daisley",
  "Hollis Robertson",
  "Cory Williams",
  "Ral Nwogbo",
  "Andrew Goddard",
];

const trendingTopics = [
  { tag: "#OlympicPrep", count: 128 },
  { tag: "#TrainingTuesday", count: 97 },
  { tag: "#MindsetMatters", count: 84 },
  { tag: "#GameDay", count: 76 },
  { tag: "#Recovery", count: 54 },
];

const sportsCategories = [
  { name: "Football", count: 1247 },
  { name: "Basketball", count: 892 },
  { name: "Tennis", count: 543 },
  { name: "Track & Field", count: 321 },
  { name: "Swimming", count: 210 },
  { name: "Soccer", count: 187 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.5 2.5 2.5 4.5 4.5 5.5C19 9.5 20 11.5 20 14c0 4-3.5 7-8 7s-8-3-8-7c0-2.5 1-4.5 3.5-5.5C9.5 7.5 11.5 5.5 12 3z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Trippin</h1>
        <div className="text-lg text-purple-400 font-medium mb-6">THE HOTTEST TAKES & FOULS</div>
        <p className="text-slate-700 max-w-xl text-center mb-8">Welcome to Trippin, the boldest sports streaming and social platform. Share your wildest takes, catch the hottest moments, and see who's really trippin'—on and off the field.</p>
        {/* ... CTA buttons ... */}
      </div>
      <div className="max-w-[1380px] mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 max-w-[250px] max-h-[calc(100vh-4rem)] sticky top-24 space-y-4">
            {/* Training Stories Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Training Stories</h3>
              <ul className="space-y-2">
                {trainingStories.map((name) => (
                  <li key={name}>
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 transition font-medium text-slate-800">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>{name}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Topics Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Trending Topics</h3>
              <ul className="space-y-2">
                {trendingTopics.map((topic) => (
                  <li key={topic.tag} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 transition">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-600 font-medium">{topic.tag}</span>
                    </div>
                    <span className="text-xs text-slate-500">{topic.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports Categories Card */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Sports Categories</h3>
              <ul className="space-y-2">
                {sportsCategories.map((cat) => (
                  <li key={cat.name} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-100 transition">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium text-slate-800">{cat.name}</span>
                    </div>
                    <span className="text-xs text-slate-500">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Feed Content */}
          <main className="lg:col-span-6 flex-1 max-w-2xl mx-auto space-y-6">
            <Feed />
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 max-w-[340px] space-y-6 sticky top-24 h-fit">
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <StreamingSection />
            </div>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <SuggestedAthletes />
            </div>
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <TrendingTopics />
            </div>
            {/* Live Scores Widget */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Live Scores</h3>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <div className="text-sm">
                    <div className="font-semibold">Lakers vs Warriors</div>
                    <div className="text-slate-500">Q4 - 2:45</div>
                  </div>
                  <div className="text-right text-sm font-bold">
                    <div>108</div>
                    <div>102</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="text-sm">
                    <div className="font-semibold">Chiefs vs Bills</div>
                    <div className="text-slate-500">Final</div>
                  </div>
                  <div className="text-right text-sm font-bold">
                    <div>24</div>
                    <div>21</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
