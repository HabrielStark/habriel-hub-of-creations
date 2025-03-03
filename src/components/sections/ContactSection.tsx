
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
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
            Get In Touch
          </span>
          <h2 className="heading-lg mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Let's build something amazing together
          </h2>
          <p className="text-muted-foreground animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            Ready to discuss your project? Reach out and I'll respond promptly to help turn your vision into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-3xl p-8 shadow-lg animate-on-scroll" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending<span className="animate-pulse">...</span></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <h3 className="heading-md mb-6">Other ways to connect</h3>
            
            <div className="space-y-8">
              <a 
                href="https://github.com/HabrielStark"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start p-6 border border-border rounded-2xl transition-all duration-300 hover:glass-card hover:shadow-md hover:border-primary/20"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Github className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">GitHub</h4>
                      <p className="text-sm text-muted-foreground">View my code repositories</p>
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" size={20} />
                </div>
              </a>
              
              <a 
                href="https://www.upwork.com/freelancers/~0158139b78c118da3a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start p-6 border border-border rounded-2xl transition-all duration-300 hover:glass-card hover:shadow-md hover:border-primary/20"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Upwork</h4>
                      <p className="text-sm text-muted-foreground">Hire me on Upwork platform</p>
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" size={20} />
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
