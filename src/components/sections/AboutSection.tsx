
import React, { useEffect } from 'react';
import { User, Calendar, Code, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute top-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="glass-card rounded-3xl p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Developer working" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card rounded-2xl p-4 shadow-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Vision-driven</p>
                    <p className="text-sm text-muted-foreground">Building the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
              About Me
            </span>
            <h2 className="heading-lg mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              Ambitious developer with a passion for innovation
            </h2>
            <p className="text-muted-foreground mb-8 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              I'm Habriel, a professional developer born on December 25, 2000. I specialize in creating applications, websites, and AI solutions that solve real-world problems. My approach combines technical expertise with a keen eye for design and user experience.
            </p>
            
            <div className="space-y-6 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Developer</h3>
                  <p className="text-muted-foreground">
                    I excel in developing apps, websites, and integrating AI solutions with a focus on quality and efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Born December 25, 2000</h3>
                  <p className="text-muted-foreground">
                    A young developer with a fresh perspective and the energy to continuously learn and adapt to new technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast and Efficient</h3>
                  <p className="text-muted-foreground">
                    I pride myself on delivering high-quality solutions faster than others without compromising on excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
