import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { icon: Github, name: "GitHub", url: "https://github.com/eslamemam1" },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eslam-emam-12695815b",
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61571808045016",
  },
  { icon: Youtube, name: "YouTube", url: "https://www.youtube.com/@eslamemam5214" },
];

const quickLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.github", href: "#github" },
  { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.contact", href: "#contact" },
];

const Footer = () => {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const currentYear = new Date().getFullYear();

  const contactItems = [
    {
      icon: Mail,
      value: "eslamemam65@gmail.com",
      href: "mailto:eslamemam65@gmail.com",
    },
    { icon: Phone, value: "+20 1090145286", href: "tel:+201090145286" },
    { icon: MapPin, value: isAr ? "القاهرة، مصر" : "Cairo, Egypt" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-4 pb-8 pt-20 text-white sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-green/70 to-transparent" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-orb -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-portfolio-green/10" />

      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-portfolio-green/15 via-white/[0.03] to-transparent p-6 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                {isAr ? "عندك مشروع في بالك؟" : "Have a project in mind?"}
              </h3>
              <p className="mt-2 text-white/60">
                {isAr
                  ? "خلّينا نحوّل فكرتك لموقع أو تطبيق شغّال."
                  : "Let's turn your idea into a working product."}
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-portfolio-green px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <Send className="h-4 w-4 rtl:-scale-x-100" />
              {isAr ? "ابدأ معي" : "Let's Talk"}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
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
              <p className="mt-5 max-w-sm leading-relaxed text-white/60">
                {t("footer.des")}
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-green hover:bg-portfolio-green hover:text-white"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-portfolio-green">
                {t("Quick Links")}
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
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
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-portfolio-green">
                {t("Contact Info")}
              </h3>
              <ul className="space-y-4">
                {contactItems.map((item) => {
                  const inner = (
                    <>
                      <span className="rounded-lg bg-portfolio-green/10 p-2 text-portfolio-green transition-colors duration-300 group-hover:bg-portfolio-green group-hover:text-white">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span dir="ltr" className="break-all text-white/70">
                        {item.value}
                      </span>
                    </>
                  );
                  return (
                    <li key={item.value}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="group flex items-center gap-3 transition-colors hover:text-white"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-3">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>
            &copy; {currentYear} Eslam Emam. {t("footer.rights")}
          </p>
          <p dir="ltr" className="font-mono text-xs">
            Built with React · TypeScript · Tailwind
          </p>
          <p>
            {t("footer.madeWith")}{" "}
            <span className="inline-block animate-pulse text-portfolio-green">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
