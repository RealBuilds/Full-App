import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuggestedStreams from '../components/SuggestedStreams';
import StreamPlayer from '../components/VideoPlayerArea';
import ChatBox from '../components/ChatBox';
import { Eye, Star } from 'lucide-react';

export default function Streams() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white flex flex-col">
      {/* Sticky page title */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-2">
          <h1 className="text-base sm:text-lg font-semibold truncate">Live Stream</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex-1 pb-16 sm:pb-0">
        {/* Layout: stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-3 sm:gap-4">
          {/* Recommended sidebar: visible on md+, collapsible on mobile */}
          <aside className="hidden md:flex w-60 flex-shrink-0 flex-col overflow-y-auto bg-gray-100 h-full border border-gray-200 rounded-md p-3">
            <SuggestedStreams />
          </aside>

          {/* Video + info */}
          <main className="w-full md:flex-1 min-w-0">
            {/* Mobile toggle for recommended */}
            <div className="md:hidden mb-3">
              <details className="rounded-md border bg-gray-50">
                <summary className="cursor-pointer px-3 py-2 text-sm font-medium">Recommended Streams</summary>
                <div className="max-h-72 overflow-y-auto p-2">
                  <SuggestedStreams />
                </div>
              </details>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
              <StreamPlayer />
            </div>

            {/* Stream Info */}
            <div className="w-full max-w-3xl px-0 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/profile-sofia-garcia.jpg"
                    alt="Sofia Garcia"
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <div className="text-black font-bold text-2xl mb-1">Super Bowl Watch Party</div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">NFL</span>
                      <span className="flex items-center text-gray-600 text-sm">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        18.4k followers
                      </span>
                      <span className="flex items-center text-gray-600 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        2,347 viewers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-200 hover:bg-gray-300 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow">
                    Follow
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-black px-5 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* About Section */}
              <div className="mt-1">
                <h4 className="text-black font-bold text-lg mb-1">About Ral</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Professional NFL player and passionate gamer. Join me for live streams where I share insights from the field and connect with fans through gaming.
                </p>
              </div>
            </div>
          </main>

          {/* Chat panel - stacks under video on mobile */}
          <aside className="w-full md:w-96 lg:w-80 flex-shrink-0 flex flex-col bg-gray-100 border border-gray-200 rounded-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-3 py-2">
              <span className="text-sm font-medium">Live Chat</span>
              <span className="text-xs text-gray-500">Be respectful</span>
            </div>
            {/* Scroll area */}
            <div className="h-80 md:h-[calc(100%-3rem-3rem)] overflow-y-auto px-3 py-2">
              <ChatBox />
            </div>
            {/* Composer */}
            <form
              className="border-t flex items-center gap-2 p-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 rounded-md border bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring"
                placeholder="Say something..."
              />
              <button className="rounded-md bg-black text-white px-3 py-2 text-sm hover:opacity-90">Send</button>
            </form>
          </aside>
        </div>
      </div>
      {/* No page-specific mobile tabs; navigation lives in global header menu */}
    </div>
  );
}