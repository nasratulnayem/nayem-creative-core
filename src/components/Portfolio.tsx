import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ecommerceImg from "@/assets/portfolio-ecommerce.jpg";
import themeImg from "@/assets/portfolio-theme.jpg";
import corporateImg from "@/assets/portfolio-corporate.jpg";

const Portfolio = () => {
  const allProjects = [
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description: "Full-featured e-commerce website with custom product pages, shopping cart, payment integration, and admin dashboard.",
      image: ecommerceImg,
      tech: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      demoUrl: "https://example.com/demo1",
    },
    {
      title: "Pet Shop Website",
      category: "E-Commerce",
      description: "Complete pet shop website with product catalog, online ordering, blog section, and social media integration.",
      image: ecommerceImg,
      tech: ["WordPress", "WooCommerce", "SEO", "Meta Ads"],
      demoUrl: "https://example.com/demo2",
    },
    {
      title: "Custom WordPress Theme",
      category: "WordPress",
      description: "Fully custom WordPress theme with advanced customization options, page builders compatibility, and optimized performance.",
      image: themeImg,
      tech: ["WordPress", "PHP", "CSS", "jQuery"],
      demoUrl: "https://example.com/demo3",
    },
    {
      title: "Corporate Website",
      category: "WordPress",
      description: "Professional corporate website with modern layouts, contact forms, service pages, and comprehensive SEO optimization.",
      image: corporateImg,
      tech: ["WordPress", "HTML", "CSS", "JavaScript"],
      demoUrl: "https://example.com/demo4",
    },
    {
      title: "Custom Plugin Development",
      category: "Development",
      description: "Custom WordPress plugins for enhanced functionality including booking systems, custom post types, and API integrations.",
      image: themeImg,
      tech: ["PHP", "WordPress API", "MySQL", "JavaScript"],
      demoUrl: "https://example.com/demo5",
    },
    {
      title: "React Dashboard",
      category: "Development",
      description: "Modern React-based admin dashboard with data visualization, user management, and real-time updates.",
      image: corporateImg,
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "https://example.com/demo6",
    },
  ];

  const categories = ["All", "WordPress", "E-Commerce", "Development"];
  
  const getFilteredProjects = (category: string) => {
    if (category === "All") return allProjects;
    return allProjects.filter(project => project.category === category);
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Showcasing 180+ projects delivered worldwide with excellence in WordPress development
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="w-full justify-center mb-12 bg-card/50 p-1 h-auto flex-wrap">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredProjects(category).map((project, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden transition-smooth hover:scale-105 hover:border-primary group shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-smooth group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs text-primary font-semibold">{project.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
                            <DialogHeader className="p-6 pb-4">
                              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                              <DialogDescription>
                                {project.category} • {project.tech.join(", ")}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="w-full h-[70vh] bg-muted flex items-center justify-center">
                              <iframe 
                                src={project.demoUrl} 
                                className="w-full h-full border-0"
                                title={`${project.title} demo`}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon">
                          <Github size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
