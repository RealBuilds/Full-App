import React from 'react';
import SuggestedStreams from '../components/SuggestedStreams';
import StreamPlayer from '../components/VideoPlayerArea';
import ChatBox from '../components/ChatBox';

export default function Streams() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout Container - Kick-style */}
      <div className="flex justify-center gap-8 p-4 lg:p-8 max-w-[1600px] mx-auto">
        {/* Left Sidebar - Recommended Streams */}
        <div className="w-56 max-w-[220px] flex-shrink-0">
          <div className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto">
            <SuggestedStreams />
          </div>
        </div>

        {/* Center - Video Player Section */}
        <div className="flex-1 max-w-[960px] flex-shrink-0">
          <StreamPlayer />
        </div>

        {/* Right Sidebar - Chat */}
        <div className="w-80 max-w-[340px] flex-shrink-0">
          <div className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
} 