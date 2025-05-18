
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { Image } from 'lucide-react';

const HeroSection = () => {
  const { t ,language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-portfolio-dark text-white pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-portfolio-dark/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat opacity-20 z-[-1]"></div>
      
      <div className="section-inner px-4 sm:px-6 md:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className={ language === "en" ? "text-left order-2 md:order-1 space-y-6 md:space-y-8" : "text-right order-2 md:order-1 space-y-6 md:space-y-8" }>
            <ScrollReveal>
              <p className="text-portfolio-green text-lg md:text-xl mb-2 md:mb-3">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                {t('hero.name')}
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-6 md:mb-8">
                {t('hero.title')}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal className="delay-200">
              <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10">
                {t('hero.description')}
              </p>
            </ScrollReveal>
            
            <ScrollReveal className="delay-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <Button 
                  className="bg-portfolio-green hover:bg-portfolio-green/90 text-white px-8 py-6 text-lg"
                  onClick={() => window.location.href = '#projects'}
                >
                  {t('hero.cta')}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/20 hover:bg-portfolio-green hover:text-white text-black px-8 py-6 text-lg"
                  onClick={() => window.location.href = '#contact'}
                >
                  {t('hero.contact')}
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <ScrollReveal>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-green shadow-xl">
                <img 
                  src="imges/me.jpg" 
                  alt="Eslam Emam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/70 to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
