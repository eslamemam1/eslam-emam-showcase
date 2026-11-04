
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages, Menu, X } from 'lucide-react';

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.github', href: '#github' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.reach', href: '#contact' },
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);

      let current = '#home';
      for (const href of navItems.map((i) => i.href)) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 140) current = href;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-portfolio-dark/95 backdrop-blur-xl py-2 border-b border-white/10' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            Eslam<span className="text-portfolio-green"> Emam</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-portfolio-green after:transition-transform ${
                  active === item.href
                    ? 'text-white after:scale-x-100'
                    : 'text-white/65 after:scale-x-0 hover:text-white'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center gap-4">
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
            className="-me-2 rounded-lg p-2 text-white/80 hover:text-portfolio-green md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-portfolio-green to-teal-300"
        style={{ width: `${progress}%` }}
      />

      {/* Mobile menu */}
      <div
        className={`grid transition-all duration-300 md:hidden ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="overflow-hidden">
          <div className="mx-3 mb-3 mt-2 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navItems
                .filter((item) => item.href !== '#contact')
                .map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-base transition-colors ${
                      active === item.href
                        ? 'bg-portfolio-green/15 font-medium text-white'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {t(item.key)}
                    {active === item.href && (
                      <span className="h-2 w-2 rounded-full bg-portfolio-green" />
                    )}
                  </a>
                ))}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-3">
              <button
                type="button"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={toggleLanguage}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-3 font-medium text-white transition-colors hover:border-portfolio-green hover:bg-white/10"
              >
                <Languages className="h-4 w-4 text-portfolio-green" />
                {language === 'en' ? 'عربي' : 'English'}
              </button>
              <a
                href="#contact"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-portfolio-green px-4 py-3 font-medium text-white shadow-[0_8px_24px_-10px_rgba(16,185,129,0.8)] transition-colors hover:bg-emerald-400"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
