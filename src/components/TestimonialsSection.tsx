import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";
import { ExternalLink } from "lucide-react";

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
    <section id="testimonials" className="section section-light">
      <div className="section-inner">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-portfolio-green">
              {t("testimonials.subtitle")}
            </p>
            <h2 className="section-title mb-0">{t("testimonials.title")}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {clients.map((client, index) => (
                <a
                  key={client.id}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex min-h-[220px] flex-col items-center justify-center px-6 py-10 text-center transition-colors duration-300 hover:bg-portfolio-green/[0.04] md:px-8 ${
                    index < clients.length - 1
                      ? "border-b border-black/5 md:border-b-0 md:border-e"
                      : ""
                  }`}
                >
                  <div className="flex h-20 w-full items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.company}
                      loading="lazy"
                      decoding="async"
                      className="max-h-14 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-8 flex w-full flex-col items-center">
                    <span className="mb-3 h-0.5 w-8 rounded-full bg-portfolio-green/70 transition-all duration-300 group-hover:w-12" />
                    <span className="relative inline-flex items-center justify-center text-base font-semibold text-portfolio-dark">
                      {client.company}
                      <ExternalLink className="absolute start-full ms-2 h-3.5 w-3.5 text-portfolio-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
