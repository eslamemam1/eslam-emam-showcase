
import { useEffect } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RecentWorkSection from '../components/RecentWorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update title and meta description
    document.title = "Eslam Emam | Full Stack Engineer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Eslam Emam - Full Stack Engineer portfolio showcasing projects, skills, and services.");
    }
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <RecentWorkSection />
      <ContactSection />
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
