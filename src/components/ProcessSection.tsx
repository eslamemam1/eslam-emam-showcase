import { ArrowRight, Code2, MessageSquareText, PenTool, Rocket, Workflow } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: MessageSquareText,
    title: { en: "Understand", ar: "فهم المطلوب" },
    description: {
      en: "We talk through your goals, audience and deadline so the scope is clear from day one.",
      ar: "نتكلم عن أهدافك وجمهورك والموعد المطلوب عشان يكون النطاق واضح من أول يوم.",
    },
  },
  {
    icon: PenTool,
    title: { en: "Design", ar: "التصميم" },
    description: {
      en: "A clear structure and UI in Figma that you approve before any code is written.",
      ar: "هيكل وتصميم واضح على Figma توافق عليه قبل ما نبدأ في الكود.",
    },
  },
  {
    icon: Code2,
    title: { en: "Build", ar: "التطوير" },
    description: {
      en: "Clean, responsive code with regular updates, so you always see the progress.",
      ar: "كود نظيف ومتجاوب مع تحديثات منتظمة، فتشوف التقدم أول بأول.",
    },
  },
  {
    icon: Rocket,
    title: { en: "Launch & Support", ar: "الإطلاق والدعم" },
    description: {
      en: "Deployment on your domain, then fixes and improvements once you are live.",
      ar: "نشر الموقع على الدومين الخاص بك، ثم إصلاحات وتحسينات بعد الإطلاق.",
    },
  },
];

const ProcessSection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section id="process" className="section section-dark overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb -right-24 top-10 h-80 w-80 bg-portfolio-green/15" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow-pill">
              <Workflow className="h-3.5 w-3.5" />
              {isAr ? "كيف أعمل" : "How I Work"}
            </span>
            <h2 className="section-title mb-3 text-white">
              {isAr ? "طريقة شغلي" : "My Process"}
            </h2>
            <p className="section-lead">
              {isAr
                ? "أربع خطوات واضحة من الفكرة حتى الإطلاق."
                : "Four clear steps from the first idea to launch."}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute inset-x-[12.5%] top-0 hidden h-px bg-gradient-to-r from-transparent via-portfolio-green/50 to-transparent lg:block" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title.en} delay={index * 120}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-green/50 hover:bg-white/[0.06] lg:pt-12">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-portfolio-green/40 bg-slate-900 text-portfolio-green shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-all duration-300 group-hover:bg-portfolio-green group-hover:text-white lg:absolute lg:-top-7 lg:start-1/2 lg:mb-0 lg:-translate-x-1/2 lg:rtl:translate-x-1/2">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-portfolio-green">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {step.title[language]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {step.description[language]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-portfolio-green px-8 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              {isAr ? "ابدأ مشروعك معي" : "Start your project"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
