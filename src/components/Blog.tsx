import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  
  const posts = [
    {
      title: "Advanced WordPress Custom Functions",
      excerpt: "Learn how to create powerful custom functions that extend WordPress capabilities beyond standard features.",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "WordPress",
      tags: ["PHP", "Functions", "Development"],
    },
    {
      title: "Modern Web Design Trends for 2025",
      excerpt: "Explore the latest design trends shaping the web including dark mode, micro-interactions, and minimalism.",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Design",
      tags: ["UI/UX", "Trends", "Design"],
    },
    {
      title: "SEO Optimization for WordPress Sites",
      excerpt: "Complete guide to optimizing your WordPress site for search engines with practical tips and best practices.",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "SEO",
      tags: ["SEO", "WordPress", "Marketing"],
    },
    {
      title: "Building Custom WordPress Plugins",
      excerpt: "Step-by-step tutorial on creating your first WordPress plugin with hooks, filters, and best practices.",
      date: "February 28, 2025",
      readTime: "12 min read",
      category: "Development",
      tags: ["Plugins", "PHP", "WordPress"],
    },
    {
      title: "WooCommerce Performance Tips",
      excerpt: "Optimize your WooCommerce store for better performance and faster loading times with these proven techniques.",
      date: "February 20, 2025",
      readTime: "7 min read",
      category: "E-Commerce",
      tags: ["WooCommerce", "Performance", "Optimization"],
    },
    {
      title: "React Integration with WordPress",
      excerpt: "Learn how to integrate React into WordPress for modern, dynamic user interfaces and improved user experience.",
      date: "February 15, 2025",
      readTime: "9 min read",
      category: "Development",
      tags: ["React", "WordPress", "JavaScript"],
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Blog</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and WordPress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="transition-smooth hover:scale-105 hover:border-primary group shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-primary mb-3">
                  <span className="px-2 py-1 rounded-full bg-primary/10">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full group-hover:text-primary" onClick={() => setSelectedPost(post)}>
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{post.title}</DialogTitle>
                      <DialogDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                          {post.category}
                        </span>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <p className="text-foreground/80 leading-relaxed">{post.excerpt}</p>
                      <div className="prose prose-invert max-w-none">
                        <p>This is the full blog post content. In a real application, this would contain the complete article with multiple paragraphs, images, code snippets, and other rich content.</p>
                        <p>You can add any content here including text, images, videos, code blocks, and more. The dialog will scroll if the content is longer than the viewport.</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {post.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
