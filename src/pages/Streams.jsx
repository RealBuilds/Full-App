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

      {/* Desktop Layout */}
      <div className="flex h-screen">
        {/* Left Sidebar - Recommended Streams */}
        <div className={`fixed lg:relative lg:block z-40 h-full transition-transform duration-300 ease-in-out ${
          isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <SuggestedStreams />
        </div>

        {/* Main Content - Stream Player */}
        <div className="flex-1 flex flex-col min-h-screen lg:min-h-0">
          <StreamPlayer />
        </div>

        {/* Right Sidebar - Chat */}
        <div className={`fixed lg:relative lg:block z-40 h-full transition-transform duration-300 ease-in-out ${
          isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}>
          <ChatBox />
        </div>
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