import { useLanguage } from "../contexts/LanguageContext";
import { Mail, Phone, Github, Linkedin, Facebook, Youtube } from "lucide-react";
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
    <section id="contact" className="section section-dark">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-eyebrow">{t("contact.subtitle")}</p>
            <h2 className="section-title mb-0 text-white">
              {t("contact.title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="panel-dark mx-auto max-w-3xl p-6 md:p-10">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
              {t("Get in Touch")}
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="mailto:eslamemam65@gmail.com"
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-portfolio-green/40"
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
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-portfolio-green/40"
              >
                <div className="rounded-full bg-portfolio-green/15 p-3 text-portfolio-green transition-colors group-hover:bg-portfolio-green group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="mt-1 text-sm text-white/65">+20 1090145286</p>
                </div>
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
