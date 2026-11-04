import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
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

const EMAIL = "eslamemam65@gmail.com";

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
    label: "YouTube",
  },
];

const ContactSection = () => {
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  const rows = [
    {
      icon: Mail,
      label: isAr ? "البريد الإلكتروني" : "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Phone,
      label: isAr ? "الهاتف" : "Phone",
      value: "+20 1090145286",
      href: "tel:+201090145286",
    },
    {
      icon: MapPin,
      label: isAr ? "الموقع" : "Location",
      value: isAr ? "القاهرة، مصر" : "Cairo, Egypt",
    },
  ];

  const rowClass =
    "group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 sm:p-5";

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-950 text-white"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-orb -right-20 -top-20 h-96 w-96 bg-emerald-300/20" />
      <div className="section-inner relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="right">
            <div className="text-start">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
                <Send className="h-3.5 w-3.5" />
                {isAr ? "تواصل" : "Contact"}
              </span>
              <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-white/70">
                {t("contact.subtitle")}
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-semibold text-emerald-900 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-emerald-100"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                {isAr ? "ابعتلي رسالة" : "Send me a message"}
              </a>

              <div className="mt-10">
                <p className="mb-4 text-sm text-white/55">
                  {isAr ? "أو تابعني على" : "Or find me on"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-full border border-white/15 bg-white/[0.05] p-3 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-emerald-900"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {rows.map((row, index) => {
              const content = (
                <>
                  <span className="rounded-full bg-portfolio-green/15 p-3 text-emerald-300 transition-colors duration-300 group-hover:bg-portfolio-green group-hover:text-white">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1 text-start">
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      {row.label}
                    </span>
                    <span
                      dir="ltr"
                      className="mt-0.5 block break-words text-start text-sm font-medium text-white sm:text-base rtl:text-end"
                    >
                      {row.value}
                    </span>
                  </span>
                </>
              );

              return (
                <ScrollReveal key={row.label} delay={index * 100} direction="left">
                  {row.href ? (
                    <div className="flex items-stretch gap-3">
                      <a
                        href={row.href}
                        className={`${rowClass} min-w-0 flex-1 hover:-translate-y-0.5 hover:border-portfolio-green/50 hover:bg-white/[0.07]`}
                      >
                        {content}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:text-emerald-300 rtl:-scale-x-100" />
                      </a>
                      {row.icon === Mail && (
                        <button
                          type="button"
                          onClick={copyEmail}
                          aria-label={isAr ? "نسخ الإيميل" : "Copy email"}
                          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white/70 transition-all duration-300 hover:border-portfolio-green/50 hover:text-emerald-300"
                        >
                          {copied ? (
                            <Check className="h-5 w-5 text-emerald-300" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className={rowClass}>{content}</div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
