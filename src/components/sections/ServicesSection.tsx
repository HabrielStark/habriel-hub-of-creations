
import React, { useEffect } from 'react';
import { Smartphone, Globe, BrainCircuit, Zap } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-on-scroll"
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="heading-md mb-4">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: <Smartphone size={32} className="text-primary" />,
      title: "App Development",
      description: "Modern, responsive mobile applications for iOS and Android platforms built with the latest technologies.",
      delay: "0.1s"
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: "Web Development",
      description: "Professional websites and web applications with stunning designs and seamless functionality.",
      delay: "0.3s"
    },
    {
      icon: <BrainCircuit size={32} className="text-primary" />,
      title: "AI Integration",
      description: "Cutting-edge artificial intelligence solutions to automate processes and enhance user experience.",
      delay: "0.5s"
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      title: "Fast Delivery",
      description: "Rapid development and deployment, delivering high-quality results ahead of schedule.",
      delay: "0.7s"
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute -top-64 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
            My Services
          </span>
          <h2 className="heading-lg mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Specialized expertise to bring your ideas to reality
          </h2>
          <p className="text-muted-foreground animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            I offer comprehensive development services, creating elegant and powerful solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
