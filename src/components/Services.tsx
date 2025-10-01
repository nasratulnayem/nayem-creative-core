import { Code, Palette, MessageSquare, Server, Layout, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom WordPress solutions tailored to your business needs with clean, maintainable code.",
    },
    {
      icon: Wrench,
      title: "Custom Theme Functions",
      description: "Advanced custom functions and hooks to extend WordPress functionality beyond standard features.",
    },
    {
      icon: Palette,
      title: "Theme Design & Customization",
      description: "Beautiful, responsive theme designs with pixel-perfect customization and modern UI/UX.",
    },
    {
      icon: MessageSquare,
      title: "Client Communication",
      description: "Clear, professional communication ensuring project requirements are understood and delivered.",
    },
    {
      icon: Layout,
      title: "Front-End Development",
      description: "Expert in HTML, CSS, JavaScript to create interactive and engaging user interfaces.",
    },
    {
      icon: Server,
      title: "Back-End Development",
      description: "Strong PHP skills for custom plugins, REST APIs, and database optimization.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-4"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive web development services focused on WordPress excellence and custom solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-smooth hover:scale-105 hover:border-primary group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
