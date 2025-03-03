
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center section-padding relative overflow-hidden"
    >
      {/* Abstract shapes for background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
              Professional Developer
            </span>
            <h1 className="heading-xl mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              Bringing your <span className="text-primary">digital visions</span> to life
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              I'm Habriel, a professional developer specializing in Apps, Websites, and AI solutions. I deliver high-quality work faster than competitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="button-primary">
                Work with me
              </a>
              <a href="#projects" className="button-secondary flex items-center justify-center gap-2">
                View my projects <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="glass-card rounded-3xl p-6 animate-float shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Professional development" 
                  className="rounded-2xl shadow-sm w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 glass-card rounded-2xl p-4 animate-float shadow-md" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">A+</span>
                  </div>
                  <div>
                    <p className="font-medium">Fast delivery</p>
                    <p className="text-sm text-muted-foreground">Quicker than others</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 glass-card rounded-2xl p-4 animate-float shadow-md" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">5★</span>
                  </div>
                  <div>
                    <p className="font-medium">Top quality</p>
                    <p className="text-sm text-muted-foreground">Professional results</p>
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

export default HeroSection;
