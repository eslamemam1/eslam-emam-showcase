
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { name: 'Twitter', url: 'https://twitter.com/' },
    { name: 'Instagram', url: 'https://instagram.com/' },
  ];

  return (
    <footer className="bg-portfolio-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <a href="#" className="text-2xl font-bold">
                Eslam<span className="text-portfolio-green">.dev</span>
              </a>
              <p className="text-white/60 mt-4 max-w-md">
                Full Stack Engineer specializing in building exceptional digital experiences that are fast, accessible, and responsive.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/60 hover:text-portfolio-green transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/60 hover:text-portfolio-green transition-colors">About</a></li>
                <li><a href="#projects" className="text-white/60 hover:text-portfolio-green transition-colors">Projects</a></li>
                <li><a href="#testimonials" className="text-white/60 hover:text-portfolio-green transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-portfolio-green transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-white/60">
                <li>Cairo, Egypt</li>
                <li>hello@eslam.dev</li>
                <li>+20 123 456 7890</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60">
              &copy; {currentYear} Eslam Emam. {t('footer.rights')}
            </p>
            <p className="text-white/60 mt-2 md:mt-0">
              {t('footer.madeWith')} <span className="text-portfolio-green">♥</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
