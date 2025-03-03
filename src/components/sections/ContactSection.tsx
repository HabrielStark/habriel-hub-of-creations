
import React, { useState } from 'react';
import { AtSign, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open email client with pre-filled email
    const mailtoLink = `mailto:gabbikdu@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    
    // Set as submitted after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission status after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Abstract shape */}
      <div className="absolute top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-on-scroll">
            Contact Me
          </span>
          <h2 className="heading-lg mb-6 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Let's work together on your next project
          </h2>
          <p className="text-muted-foreground animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            Have an idea or a project in mind? Get in touch with me to discuss how we can collaborate.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border animate-on-scroll relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AtSign size={32} className="text-primary" />
                </div>
                <h3 className="heading-md mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  className="button-secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 h-40 resize-none"
                    placeholder="Hello, I'd like to discuss a project..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
            
            {/* Subtle lines for cyberpunk effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-primary/20"></div>
            <div className="absolute top-0 left-0 h-full w-px bg-primary/20"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-primary/20"></div>
            <div className="absolute bottom-0 right-0 h-full w-px bg-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
