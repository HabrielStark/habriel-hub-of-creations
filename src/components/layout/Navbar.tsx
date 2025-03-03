
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tighter relative"
        >
          Habriel
          <span className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full"></span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="button-primary"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'max-h-screen opacity-100 glass-nav' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="button-primary w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
