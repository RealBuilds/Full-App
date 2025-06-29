import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SuggestedStreams from '../components/SuggestedStreams';
import StreamPlayer from '../components/VideoPlayerArea';
import ChatBox from '../components/ChatBox';

export default function Streams() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Live Streams</h1>
        <button
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Main Layout Container - Kick-style */}
      <div className="flex justify-center gap-8 p-4 lg:p-8 max-w-[1600px] mx-auto">
        {/* Left Sidebar - Recommended Streams */}
        <div className="hidden lg:block w-56 max-w-[220px] flex-shrink-0">
          <div className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto">
            <SuggestedStreams />
          </div>
        </div>

        {/* Center - Video Player Section */}
        <div className="flex-1 max-w-[960px] flex-shrink-0">
          <StreamPlayer />
        </div>

        {/* Right Sidebar - Chat */}
        <div className="hidden lg:block w-80 max-w-[340px] flex-shrink-0">
          <div className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto">
            <ChatBox />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlays */}
      {/* Left Sidebar - Mobile */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out ${
        isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <SuggestedStreams />
      </div>

      {/* Right Sidebar - Mobile */}
      <div className={`lg:hidden fixed inset-y-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ChatBox />
      </div>

      {/* Mobile Overlay */}
      {(isLeftSidebarOpen || isRightSidebarOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => {
            setIsLeftSidebarOpen(false);
            setIsRightSidebarOpen(false);
          }}
        />
      )}
    </div>
  );
} 