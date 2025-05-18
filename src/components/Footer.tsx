
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Eslam<span className="text-portfolio-green">.dev</span>
            </a>
            <p className="text-white/60 mt-2">
              Full Stack Engineer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60">
              &copy; {currentYear} Eslam Emam. {t('footer.rights')}
            </p>
            <p className="text-white/60 mt-1">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
