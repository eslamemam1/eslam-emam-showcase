import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import GithubProjectsSection from "../components/GithubProjectsSection";
import JourneySection from "../components/JourneySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TechMarquee from "../components/TechMarquee";
import BackToTop from "../components/BackToTop";

const Index = () => {
  useEffect(() => {
    document.title = "Eslam Emam | Full Stack Engineer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Eslam Emam - Full Stack Engineer (Angular & React) portfolio showcasing projects, skills, and services."
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <ProjectsSection />
        <GithubProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
