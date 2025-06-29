import { Heart, MessageCircle, Share2, CheckCircle, MoreHorizontal, Bookmark, Trophy, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Feed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      athlete: "Cory Williams",
      sport: "Soccer",
      verified: true,
      avatar: "/profile-cory-williams.jpg",
      content: "This has to be one of the best teams ever assembled. I know they were lacking in the left back position and Dani Carvajal was injured, but they should have won way more than they did.",
      image: "/real-madrid-2024-25.jpg",
      likes: 2847,
      comments: 156,
      shares: 23,
      timeAgo: "2h ago",
      location: "Real Madrid",
      achievement: "Champions League",
      achievementIcon: Trophy
    },
    {
      id: 2,
      athlete: "Ral Nwogbo",
      sport: "Football",
      verified: true,
      avatar: "/profile-sofia-garcia.jpg",
      content: "Recovery isn't just about rest - it's about strategic preparation. Today's session focused on mobility, nutrition timing, and mental visualization. Your body adapts during recovery, not just during training. Respect the process. 🧠💪",
      likes: 4321,
      comments: 298,
      shares: 67,
      timeAgo: "4h ago",
      achievement: "Training Milestone",
      achievementIcon: Target
    },
    {
      id: 3,
      athlete: "Hollis Robertson",
      sport: "Squash",
      verified: true,
      avatar: "/profile-hollis-robertson.jpg",
      content: "Every point is a new beginning. You can be down 0-40 and still win the game. Tennis teaches resilience like no other sport. Today's match was a masterclass in mental fortitude. Never underestimate the power of believing in yourself. 🎾✨",
      image: "https://images.unsplash.com/photo-1544717684-4545f6fdcc20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 1892,
      comments: 134,
      shares: 89,
      timeAgo: "6h ago",
      location: "Roland Garros",
      achievement: "Match Victory",
      achievementIcon: Zap
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
          {/* Post Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <img 
                  src={post.avatar} 
                  alt={post.athlete}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                {post.verified && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="font-bold text-slate-900 hover:underline cursor-pointer">{post.athlete}</h3>
                  <Badge variant="secondary" className="text-xs font-medium bg-slate-100">
                    {post.sport}
                  </Badge>
                </div>
                {post.achievement && (
                  <div className="flex items-center space-x-2 mb-2">
                    <post.achievementIcon className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full">
                      {post.achievement}
                    </span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <span>{post.timeAgo}</span>
                  {post.location && (
                    <>
                      <span>•</span>
                      <span>{post.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>

          {/* Post Content */}
          <div className="px-6 pb-4">
            <p className="text-slate-700 text-base leading-relaxed">{post.content}</p>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="px-6 pb-4">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full rounded-xl object-cover max-h-96 cursor-pointer hover:opacity-95 transition-opacity"
              />
            </div>
          )}

          {/* Engagement Stats */}
          <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 rounded-b-xl">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center space-x-4">
                <span className="font-medium">{post.likes.toLocaleString()} athletes inspired</span>
                <span>{post.comments} comments</span>
              </div>
              <span>{post.shares} shares</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors group ${
                    likedPosts.includes(post.id) ? 'text-red-500' : 'text-slate-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 group-hover:scale-110 transition-transform ${
                    likedPosts.includes(post.id) ? 'fill-current' : ''
                  }`} />
                  <span className="font-medium">Inspire</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors group">
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Discuss</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors group">
                  <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Share</span>
                </button>
              </div>
              <button 
                onClick={() => toggleSave(post.id)}
                className={`transition-colors ${
                  savedPosts.includes(post.id) ? 'text-yellow-500' : 'text-slate-600 hover:text-yellow-500'
                }`}
              >
                <Bookmark className={`w-6 h-6 ${savedPosts.includes(post.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
