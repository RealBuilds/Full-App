
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, CheckCircle } from "lucide-react";

export const FeaturedContent = () => {
  const posts = [
    {
      id: 1,
      athlete: "Ral Nwogbo",
      sport: "NFL",
      verified: true,
      avatar: "/profile-sofia-garcia.jpg",
      content: "Game day mentality isn't just about the 3 hours on the field. It's about the 165 hours of preparation that lead up to those moments. Every rep matters.",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 4200,
      comments: 387,
      timeAgo: "2h ago"
    },
    {
      id: 2,
      athlete: "Cory Williams",
      sport: "Tennis",
      verified: true,
      avatar: "/profile-cory-williams.jpg",
      content: "Sometimes the biggest opponent is the voice in your head. Learning to quiet that doubt has been my greatest victory this season.",
      likes: 2800,
      comments: 234,
      timeAgo: "4h ago"
    },
    {
      id: 3,
      athlete: "Hollis Robertson",
      sport: "Basketball",
      verified: true,
      avatar: "/profile-hollis-robertson.jpg",
      content: "To all the young athletes following their dreams: rejection is redirection. That team that didn't draft me led me to exactly where I needed to be.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 5600,
      comments: 512,
      timeAgo: "6h ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Authentic Voices, Real Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get unfiltered access to the thoughts, experiences, and insights from the world's top athletes.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6">
                {/* Athlete Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.avatar} 
                      alt={post.athlete}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-slate-900">{post.athlete}</h3>
                        {post.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.sport}
                        </Badge>
                        <span className="text-sm text-slate-500">{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    {post.content}
                  </p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt="Post content"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-slate-600 hover:text-red-500 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{post.likes.toLocaleString()}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors group">
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors group">
                      <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
