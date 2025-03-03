
import React from 'react';
import { GitHub, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Habriel</h2>
            <p className="text-muted-foreground max-w-xs">
              Creating elegant solutions for complex problems through code.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center">
            <a 
              href="https://github.com/HabrielStark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-300"
            >
              <GitHub size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~0158139b78c118da3a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
              <span>Upwork</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Habriel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
