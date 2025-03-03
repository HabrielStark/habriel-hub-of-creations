
import React from 'react';
import { Github, ExternalLink, Terminal, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyber-neon/30 py-12 px-6 bg-cyber-dark/70 relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="matrix-bg absolute inset-0 opacity-10"></div>
      
      {/* Scanline effect */}
      <div className="scanline absolute w-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 font-sans flex items-center">
              <span className="neon-text animate-pulse-neon cyber-heading" data-text="Habriel">Habriel</span>
              <Terminal size={18} className="ml-2 text-cyber-neon animate-pulse" />
            </h2>
            <p className="text-muted-foreground max-w-xs font-mono text-sm">
              <span className="text-cyber-neon terminal-text">{'>'}</span> <span className="typewriter">Creating elegant solutions for complex problems through code.</span>
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center">
            <a 
              href="https://github.com/HabrielStark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-cyber-neon transition-colors duration-300 group cyber-button"
            >
              <Github size={20} className="group-hover:animate-pulse digital-distortion" />
              <span className="font-mono text-sm hacker-text">GitHub</span>
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~0158139b78c118da3a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-cyber-neon transition-colors duration-300 group cyber-button"
            >
              <ExternalLink size={20} className="group-hover:animate-pulse digital-distortion" />
              <span className="font-mono text-sm hacker-text">Upwork</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-neon/20 mt-8 pt-8 text-center md:text-left cyber-border">
          <p className="text-muted-foreground text-xs font-mono">
            <Code size={14} className="inline mr-1 text-cyber-neon animate-pulse" />
            <span className="text-cyber-neon neon-text">{currentYear}</span> <span className="text-muted-foreground/70 terminal-text">// All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
