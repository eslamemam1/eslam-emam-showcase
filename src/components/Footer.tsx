import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const quickLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.github", href: "#github" },
  { key: "nav.services", href: "#services" },
  { key: "nav.contact", href: "#contact" },
];

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 pb-8 pt-16 text-white sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-green/70 to-transparent" />
      <div className="glow-orb -bottom-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 bg-portfolio-green/10" />

      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-portfolio-green to-teal-500 font-mono text-lg font-bold text-white shadow-lg">
                  {"</>"}
                </span>
                <span className="text-2xl font-bold">
                  {t("Eslam")}
                  <span className="text-gradient"> {t("Emam")}</span>
                </span>
              </a>
              <p className="mt-5 max-w-md leading-relaxed text-white/60">
                {t("footer.des")}
              </p>
            </div>

            <nav aria-label="Footer">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-portfolio-green">
                {t("Quick Links")}
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                    >
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-portfolio-green opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 rtl:rotate-180 rtl:translate-x-1 rtl:group-hover:translate-x-0" />
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pb-14 pt-6 text-sm text-white/50 md:flex-row md:pb-0 md:pe-16">
          <p>
            &copy; {currentYear} Eslam Emam. {t("footer.rights")}
          </p>
          <p dir="ltr" className="font-mono text-xs">
            Built with React · TypeScript · Tailwind
          </p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
