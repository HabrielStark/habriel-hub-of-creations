
import React from 'react';
import { Github, ExternalLink, Terminal, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyber-neon/30 py-12 px-6 bg-cyber-dark/70">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 font-sans flex items-center">
              <span className="neon-text animate-pulse-neon">Habriel</span>
              <Terminal size={18} className="ml-2 text-cyber-neon" />
            </h2>
            <p className="text-muted-foreground max-w-xs font-mono text-sm">
              <span className="text-cyber-neon">&gt;</span> Creating elegant solutions for complex problems through code.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center">
            <a 
              href="https://github.com/HabrielStark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-cyber-neon transition-colors duration-300 group"
            >
              <Github size={20} className="group-hover:animate-pulse" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~0158139b78c118da3a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-cyber-neon transition-colors duration-300 group"
            >
              <ExternalLink size={20} className="group-hover:animate-pulse" />
              <span className="font-mono text-sm">Upwork</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-neon/20 mt-8 pt-8 text-center md:text-left">
          <p className="text-muted-foreground text-xs font-mono">
            <Code size={14} className="inline mr-1 text-cyber-neon" />
            <span className="text-cyber-neon">{currentYear}</span> <span className="text-muted-foreground/70">// All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
