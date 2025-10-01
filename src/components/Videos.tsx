import { Play, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Videos = () => {
  const videos = [
    {
      title: "Building Custom WordPress Themes from Scratch",
      views: "15K",
      duration: "25:43",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      views: "12K",
      duration: "18:32",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
    },
    {
      title: "WordPress Performance Optimization Tips",
      views: "10K",
      duration: "22:15",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop",
    },
    {
      title: "Creating Custom WordPress Plugins",
      views: "8K",
      duration: "30:20",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    },
  ];

  return (
    <section id="videos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Video Tutorials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Educational content and tutorials on web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-smooth hover:scale-105 hover:border-primary group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow">
                    <Play size={28} fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-xs font-semibold">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-smooth">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye size={16} />
                  <span>{video.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
