import { Play, Users, Eye, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StreamingSection = () => {
  const liveStreams = [
    {
      id: 1,
      title: "Morning Shootaround",
      streamer: "Ral Nwogbo",
      avatar: "/profile-sofia-garcia.jpg",
      viewers: 1247,
      thumbnail: "/basketball-morning-shootaround.jpg",
      category: "Basketball"
    },
    {
      id: 2,
      title: "Soccer Skills Masterclass",
      streamer: "Cory Williams",
      avatar: "/profile-cory-williams.jpg",
      viewers: 892,
      thumbnail: "/soccer-skills-masterclass.jpg",
      category: "Soccer"
    },
    {
      id: 3,
      title: "Squash Tournament Prep",
      streamer: "Hollis Robertson",
      avatar: "/profile-hollis-robertson.jpg",
      viewers: 634,
      thumbnail: "/squash-hollis-robertson.jpg",
      category: "Squash"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 flex items-center">
            <Play className="w-5 h-5 mr-2 text-red-500" />
            Live Streams
          </h3>
          <div className="flex items-center text-sm text-red-500">
            <Dot className="w-4 h-4 animate-pulse" />
            LIVE
          </div>
        </div>
      </div>

      {/* Live Streams */}
      <div className="p-6 space-y-4">
        {liveStreams.map((stream) => (
          <div key={stream.id} className="group cursor-pointer">
            <div className="relative mb-3">
              <img 
                src={stream.thumbnail} 
                alt={stream.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Dot className="w-3 h-3 animate-pulse mr-1" />
                LIVE
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded flex items-center">
                <Eye className="w-3 h-3 mr-1" />
                {stream.viewers.toLocaleString()}
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <img 
                src={stream.avatar} 
                alt={stream.streamer}
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-slate-900 text-sm leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                  {stream.title}
                </h4>
                <p className="text-xs text-slate-600 mb-1">{stream.streamer}</p>
                <p className="text-xs text-slate-500">{stream.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Start Streaming Button */}
      <div className="p-6 border-t border-slate-100">
        <Button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl">
          <Play className="w-4 h-4 mr-2" />
          Start Streaming
        </Button>
      </div>
    </div>
  );
};
