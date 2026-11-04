import { BadgeCheck, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const clients = [
    {
      id: 1,
      company: t("testimonial1.company"),
      logo: asset("imges/logos/hurghada-vibes.png"),
      url: "https://www.hurghada-vibes-tours.com/",
    },
    {
      id: 2,
      company: t("testimonial2.company"),
      logo: asset("imges/logos/caf-sports.svg"),
      url: "https://caf-sports.com/",
    },
    {
      id: 3,
      company: t("testimonial3.company"),
      logo: asset("imges/logos/3lamko.png"),
      url: "https://3lamko-bus.com/",
    },
  ];

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white text-slate-900"
    >
      <div className="glow-orb left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 bg-portfolio-green/10" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow-pill">
              <BadgeCheck className="h-3.5 w-3.5" />
              {t("testimonials.subtitle")}
            </span>
            <h2 className="section-title mb-0 text-slate-900">
              {t("testimonials.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {clients.map((client, index) => (
            <ScrollReveal key={client.id} delay={index * 120}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[240px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-green/40 hover:shadow-[0_24px_50px_-24px_rgba(16,185,129,0.45)]"
              >
                <div className="flex h-20 w-full items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.company}
                    loading="lazy"
                    decoding="async"
                    className="max-h-14 max-w-[150px] object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
                <span className="mb-3 mt-8 h-0.5 w-8 rounded-full bg-portfolio-green/70 transition-all duration-300 group-hover:w-14" />
                <span className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
                  {client.company}
                  <ExternalLink className="h-3.5 w-3.5 text-portfolio-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
