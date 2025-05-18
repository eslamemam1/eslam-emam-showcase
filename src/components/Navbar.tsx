
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            Eslam<span className="text-portfolio-green">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-portfolio-green transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-white/80 hover:text-portfolio-green"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </Button>
            
            <Button 
              variant="default" 
              className="bg-portfolio-green hover:bg-portfolio-green/90 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-portfolio-green"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-portfolio-dark/95 backdrop-blur-md px-4 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-white/80 hover:text-portfolio-green py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white/80 hover:text-portfolio-green"
            >
              {language === 'en' ? 'عربي' : 'English'}
            </Button>
            
            <Button 
              variant="default" 
              size="sm"
              className="bg-portfolio-green hover:bg-portfolio-green/90 text-white"
              onClick={() => {
                window.location.href = '#contact';
                setIsMenuOpen(false);
              }}
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
