
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { Send, ArrowRight, Github, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Create email content
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A
Email: ${formData.email}%0D%0A
%0D%0A
Message:%0D%0A${formData.message}%0D%0A
%0D%0A
---%0D%0A
Sent from Portfolio Website`;

    // Create mailto link with cyberpunk message
    const mailtoLink = `mailto:gabbikdu@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form after delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Email client opened! Send your message to complete.", {
        description: "Your message has been prepared for sending.",
        duration: 5000,
        icon: "🌐",
        style: { 
          borderLeft: "4px solid #0ea5e9",
          background: "rgba(12, 12, 12, 0.8)",
          color: "#f0f0f0"
        }
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll glitch-hover">
            <span className="cyber-text">Get In Touch</span>
          </span>
          <h2 className="heading-lg mb-6 animate-on-scroll neon-text" style={{ animationDelay: '0.2s' }}>
            Let's build something amazing together
          </h2>
          <p className="text-muted-foreground animate-on-scroll terminal-text" style={{ animationDelay: '0.4s' }}>
            <span className="text-cyber-neon">></span> Ready to discuss your project? Reach out and I'll respond promptly to help turn your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-3xl p-8 shadow-lg animate-on-scroll cyber-border" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 terminal-text">
                  <span className="text-cyber-neon">[</span> Your Name <span className="text-cyber-neon">]</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-background/80 border border-cyber-neon/30 rounded-lg focus:ring-2 focus:ring-cyber-neon/50 focus:border-cyber-neon outline-none transition-all duration-200 cyber-input"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 terminal-text">
                  <span className="text-cyber-neon">[</span> Your Email <span className="text-cyber-neon">]</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-background/80 border border-cyber-neon/30 rounded-lg focus:ring-2 focus:ring-cyber-neon/50 focus:border-cyber-neon outline-none transition-all duration-200 cyber-input"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 terminal-text">
                  <span className="text-cyber-neon">[</span> Your Message <span className="text-cyber-neon">]</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-background/80 border border-cyber-neon/30 rounded-lg focus:ring-2 focus:ring-cyber-neon/50 focus:border-cyber-neon outline-none transition-all duration-200 resize-none cyber-input"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center gap-2 cyber-button group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>Transmitting<span className="animate-pulse">...</span></>
                  ) : (
                    <>Send Message <Send size={18} className="group-hover:animate-pulse" /></>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-neon/20 to-cyber-purple/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <h3 className="heading-md mb-6 neon-text">Other ways to connect</h3>
            
            <div className="space-y-8">
              <a 
                href="https://github.com/HabrielStark"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start p-6 border border-cyber-neon/30 rounded-2xl transition-all duration-300 hover:glass-card hover:shadow-md hover:border-cyber-neon/50 cyber-card-animation"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/40 rounded-xl flex items-center justify-center flex-shrink-0 cyber-glow">
                      <Github className="text-cyber-neon" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 glitch-hover">GitHub</h4>
                      <p className="text-sm text-muted-foreground terminal-text">
                        <span className="text-cyber-neon">></span> View my code repositories
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-cyber-neon transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyber-purple" size={20} />
                </div>
              </a>
              
              <a 
                href="https://www.upwork.com/freelancers/~0158139b78c118da3a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start p-6 border border-cyber-neon/30 rounded-2xl transition-all duration-300 hover:glass-card hover:shadow-md hover:border-cyber-neon/50 cyber-card-animation"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/40 rounded-xl flex items-center justify-center flex-shrink-0 cyber-glow">
                      <ExternalLink className="text-cyber-neon" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 glitch-hover">Upwork</h4>
                      <p className="text-sm text-muted-foreground terminal-text">
                        <span className="text-cyber-neon">></span> Hire me on Upwork platform
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-cyber-neon transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyber-purple" size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
