import { useLanguage } from "../contexts/LanguageContext";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Youtube } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, url: "https://github.com/eslamemam1", label: "GitHub" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/eslam-emam-12695815b",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61571808045016",
      label: "Facebook",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@eslamemam5214",
      label: "Youtube",
    },
  ];

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 text-white"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-orb -right-20 -top-20 h-96 w-96 bg-emerald-300/20" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              <Send className="h-3.5 w-3.5" />
              {t("contact.subtitle")}
            </span>
            <h2 className="section-title mb-0 text-white">
              {t("contact.title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="glass mx-auto max-w-4xl rounded-2xl p-6 md:p-10">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {t("Get in Touch")}
            </h3>

            <div className="grid gap-6 sm:grid-cols-3">
              <a
                href="mailto:eslamemam65@gmail.com"
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-portfolio-green/40"
              >
                <div className="rounded-full bg-portfolio-green/15 p-3 text-portfolio-green transition-colors group-hover:bg-portfolio-green group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="mt-1 text-sm text-white/65 break-all">
                    eslamemam65@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+201090145286"
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-portfolio-green/40"
              >
                <div className="rounded-full bg-portfolio-green/15 p-3 text-portfolio-green transition-colors group-hover:bg-portfolio-green group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="mt-1 text-sm text-white/65">+20 1090145286</p>
                </div>
              </a>

              <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="rounded-full bg-portfolio-green/15 p-3 text-portfolio-green">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="mt-1 text-sm text-white/65">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="mailto:eslamemam65@gmail.com"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-emerald-900 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100" />
                {t("nav.contact")}
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8 text-center">
              <h4 className="mb-5 font-medium text-white">Follow Me</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/80 transition-all hover:border-portfolio-green hover:bg-portfolio-green hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
