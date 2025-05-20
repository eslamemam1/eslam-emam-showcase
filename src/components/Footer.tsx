import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/eslamemam1" },
    { name: "LinkedIn", url: "www.linkedin.com/in/eslam-emam-12695815b" },
    {
      name: "FaceBook Page",
      url: "https://www.facebook.com/profile.php?id=61571808045016",
    },
    { name: "Youtube", url: "https://www.youtube.com/@eslamemam5214" },
  ];

  return (
    <footer className="bg-portfolio-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <a href="#" className="text-2xl font-bold">
                {t("Eslam")}<span className="text-portfolio-green"> {t("Emam")}</span>
              </a>
              <p className="text-white/60 mt-4 max-w-md">
                {t("footer.des")}
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
              <h3 className="text-xl font-semibold mb-4">{t("Quick Links")}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {t('nav.home')}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {t('nav.projects')}
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {t('nav.testimonials')}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/60 hover:text-portfolio-green transition-colors"
                  >
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("Contact Info")}</h3>
              <ul className="space-y-3 text-white/60">
                <li>Cairo, Egypt</li>
                <a href="mailto:eslamemam65@gmail.com">
                  <li>eslamemam65@gmail.com</li>
                </a>
                <a href="tel:+201090145286">
                  <li>+20 1090145286</li>
                </a>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60">
              &copy; {currentYear} Eslam Emam. {t("footer.rights")}
            </p>
            <p className="text-white/60 mt-2 md:mt-0">
              {t("footer.madeWith")}{" "}
              <span className="text-portfolio-green">♥</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
