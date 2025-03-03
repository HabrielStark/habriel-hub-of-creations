
import React, { useEffect, useState } from 'react';
import { ExternalLink, GitHub } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-featured e-commerce solution with advanced product filtering, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/HabrielStark",
      demo: "#"
    },
    {
      title: "AI Content Generator",
      description: "A sophisticated AI-powered application that generates high-quality content based on user prompts and preferences.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/HabrielStark",
      demo: "#"
    },
    {
      title: "Financial Dashboard",
      description: "An interactive dashboard for tracking investments, expenses, and financial goals with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      github: "https://github.com/HabrielStark",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute -bottom-64 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
            My Projects
          </span>
          <h2 className="heading-lg mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Featured work that showcases my abilities
          </h2>
          <p className="text-muted-foreground animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            Browse through a selection of my recent projects that demonstrate my technical expertise and problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Navigation */}
          <div className="space-y-6 order-2 lg:order-1">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer animate-on-scroll ${
                  activeIndex === index 
                    ? 'glass-card shadow-md border-primary/20 scale-[1.02]' 
                    : 'border-border bg-secondary/50 hover:bg-secondary'
                }`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-block px-3 py-1 bg-background text-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Preview */}
          <div className="order-1 lg:order-2 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="glass-card rounded-3xl p-6 shadow-lg overflow-hidden">
                <img 
                  src={projects[activeIndex].image} 
                  alt={projects[activeIndex].title} 
                  className="rounded-2xl w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
                
                <div className="absolute inset-0 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 bg-background/80 backdrop-blur-sm transition-all duration-300">
                  <div className="flex space-x-4">
                    {projects[activeIndex].github && (
                      <a 
                        href={projects[activeIndex].github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="button-secondary flex items-center gap-2"
                      >
                        <GitHub size={18} />
                        GitHub
                      </a>
                    )}
                    {projects[activeIndex].demo && (
                      <a 
                        href={projects[activeIndex].demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="button-primary flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
