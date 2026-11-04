import { Route } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Bidi from "./Bidi";
import { timeline } from "@/data/timeline";

const JourneySection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section
      id="journey"
      className="section relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white text-slate-900"
    >
      <div className="glow-orb left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 bg-portfolio-green/10" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow-pill">
              <Route className="h-3.5 w-3.5" />
              {isAr ? "المسار" : "Timeline"}
            </span>
            <h2 className="section-title mb-0 text-slate-900">
              {isAr ? "رحلتي" : "My Journey"}
            </h2>
          </div>
        </ScrollReveal>

        <ol className="relative mx-auto max-w-3xl">
          <span className="absolute inset-y-2 start-5 w-px -translate-x-1/2 bg-gradient-to-b from-portfolio-green via-portfolio-green/40 to-transparent rtl:translate-x-1/2" />
          {timeline.map((item, index) => (
            <li key={item.year} className="relative pb-10 ps-16 last:pb-0">
              <span className="absolute start-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-portfolio-green/40 bg-white text-portfolio-green shadow-[0_0_0_6px_rgba(16,185,129,0.1)] rtl:translate-x-1/2">
                <item.icon className="h-5 w-5" />
              </span>
              <ScrollReveal delay={index * 60}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-green/40 hover:shadow-[0_20px_40px_-24px_rgba(16,185,129,0.45)] md:p-6">
                  <span className="font-mono text-sm font-semibold text-portfolio-green">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    <Bidi text={item.title[language]} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    <Bidi text={item.description[language]} />
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JourneySection;
