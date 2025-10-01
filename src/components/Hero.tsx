import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Nasratul Nayem"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <p className="text-primary text-lg mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nasratul Nayem
            </h1>
            <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-6">
              WordPress Developer
            </h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-2xl">
              Passionate about creating websites and solving problems related to custom 
              WordPress functions and design. With over 4 years of experience, I've delivered 
              180+ websites worldwide with fast, secure, and custom solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button variant="hero" size="lg">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                const element = document.querySelector("#portfolio");
                element?.scrollIntoView({ behavior: "smooth" });
              }}>
                <ExternalLink className="mr-2" size={20} />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
