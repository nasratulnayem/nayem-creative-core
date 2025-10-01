import { Briefcase, GraduationCap, MapPin, Phone, Mail, Globe, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      role: "WordPress Developer",
      company: "BDCalling",
      period: "July 2024 - August 2025",
      description: "Remote work managing client communications, building custom WordPress functions, designing layouts, and developing plugins.",
    },
    {
      role: "Web Developer",
      company: "Khilgaon Pet Shop",
      period: "May 2022 - April 2025",
      description: "Developed and maintained pet shop website, managed social media, ran Meta Ads campaigns, and implemented SEO best practices.",
    },
  ];

  const education = [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shaheed Suhrawardy College",
      year: "2023",
      gpa: "3.50",
      field: "Science",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Khilgaon Model School",
      year: "2020",
      gpa: "4.39",
      field: "Science",
    },
  ];

  const languages = [
    { name: "Bangla", level: 100 },
    { name: "Hindi", level: 90 },
    { name: "English", level: 85 },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Dhaka, Bangladesh" },
    { icon: Phone, text: "+8801962351470" },
    { icon: Mail, text: "nasratulnayem@gmail.com" },
    { icon: Globe, text: "nayem.dev" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="transition-smooth hover:scale-105">
              <CardContent className="p-6 flex items-center gap-3">
                <item.icon className="text-primary" size={24} />
                <span className="text-sm">{item.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary" size={28} />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="transition-smooth hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{exp.role}</h4>
                      <p className="text-foreground/80">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-foreground/70">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={28} />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="transition-smooth hover:border-primary">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">{edu.degree}</h4>
                  <p className="text-foreground/80 mb-1">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.field}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Languages className="text-primary" size={28} />
            <h3 className="text-2xl font-bold">Language Proficiency</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="transition-smooth hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-primary">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-smooth"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
