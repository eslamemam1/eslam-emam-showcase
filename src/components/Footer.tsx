import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/eslamemam1" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eslam-emam-12695815b",
    },
    {
      name: "FaceBook Page",
      url: "https://www.facebook.com/profile.php?id=61571808045016",
    },
    { name: "Youtube", url: "https://www.youtube.com/@eslamemam5214" },
  ];

  const quickLinks = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.projects", href: "#projects" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-portfolio-dark py-16 text-white">
      <div className="section-inner">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <a href="#home" className="text-2xl font-bold">
                {t("Eslam")}
                <span className="text-portfolio-green"> {t("Emam")}</span>
              </a>
              <p className="mt-4 max-w-md text-white/60">{t("footer.des")}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-colors hover:text-portfolio-green"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">{t("Quick Links")}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 transition-colors hover:text-portfolio-green"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">{t("Contact Info")}</h3>
              <ul className="space-y-3 text-white/60">
                <li>Cairo, Egypt</li>
                <li>
                  <a
                    href="mailto:eslamemam65@gmail.com"
                    className="transition-colors hover:text-portfolio-green"
                  >
                    eslamemam65@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+201090145286"
                    className="transition-colors hover:text-portfolio-green"
                  >
                    +20 1090145286
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-white/60">
              &copy; {currentYear} Eslam Emam. {t("footer.rights")}
            </p>
            <p className="text-white/60">
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
