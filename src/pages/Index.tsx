
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
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
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTop />
    </Layout>
  );
};

export default Index;
