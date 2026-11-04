import {
  AppWindow,
  Blocks,
  Globe,
  Languages,
  LayoutDashboard,
  PenTool,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import Bidi from "./Bidi";

const services = [
  {
    icon: Globe,
    tone: "from-emerald-500 to-teal-500",
    title: { en: "Business Websites", ar: "مواقع تعريفية للشركات" },
    description: {
      en: "Fast, responsive websites that present your brand and turn visitors into customers.",
      ar: "مواقع سريعة ومتجاوبة تعرض هوية شركتك وتحوّل الزائرين إلى عملاء.",
    },
    tags: ["React", "Angular", "Tailwind CSS"],
  },
  {
    icon: AppWindow,
    tone: "from-sky-500 to-indigo-500",
    title: { en: "Web Applications", ar: "تطبيقات الويب" },
    description: {
      en: "Full stack apps with a modern front end and a Supabase / PostgreSQL back end.",
      ar: "تطبيقات Full Stack بواجهة حديثة وخلفية على Supabase و PostgreSQL.",
    },
    tags: ["TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    icon: LayoutDashboard,
    tone: "from-violet-500 to-fuchsia-500",
    title: { en: "Dashboards & Authentication", ar: "لوحات تحكم ومصادقة" },
    description: {
      en: "Admin panels with secure login, protected routes and live data from your APIs.",
      ar: "لوحات إدارة بتسجيل دخول آمن ومسارات محمية وبيانات حية من الـ APIs.",
    },
    tags: ["JWT", "Route Guards", "REST"],
  },
  {
    icon: Blocks,
    tone: "from-amber-500 to-orange-500",
    title: { en: "WordPress & Headless CMS", ar: "ووردبريس و Headless CMS" },
    description: {
      en: "Content sites you can edit yourself, from classic WordPress to a headless setup.",
      ar: "مواقع محتوى تقدر تعدّلها بنفسك، من ووردبريس التقليدي إلى Headless.",
    },
    tags: ["WordPress", "ACF", "REST API"],
  },
  {
    icon: PenTool,
    tone: "from-rose-500 to-pink-500",
    title: { en: "Design to Code", ar: "من التصميم إلى الكود" },
    description: {
      en: "Your Figma designs turned into clean, pixel-accurate and accessible interfaces.",
      ar: "تصاميم Figma بتتحول لواجهات نظيفة ودقيقة وسهلة الاستخدام.",
    },
    tags: ["Figma", "HTML5", "CSS3"],
  },
  {
    icon: Languages,
    tone: "from-cyan-500 to-blue-500",
    title: { en: "Arabic & English Sites", ar: "مواقع بالعربي والإنجليزي" },
    description: {
      en: "Bilingual websites with proper RTL support, so both audiences feel at home.",
      ar: "مواقع بلغتين مع دعم كامل لـ RTL، فيحس الجمهور بالراحة في الحالتين.",
    },
    tags: ["RTL", "i18n"],
  },
];

const ServicesSection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/70 to-white text-slate-900"
    >
      <div className="glow-orb left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 bg-portfolio-green/10" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow-pill">
              <Sparkles className="h-3.5 w-3.5" />
              {isAr ? "ماذا أقدّم" : "What I Offer"}
            </span>
            <h2 className="section-title mb-3 text-slate-900">
              {isAr ? "خدماتي" : "Services"}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-500">
              {isAr
                ? "من فكرة بسيطة إلى موقع أو تطبيق شغّال، أغطي لك الواجهة والخلفية."
                : "From a simple idea to a working site or app, I cover both the front end and the back end."}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title.en} delay={(index % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-green/40 hover:shadow-[0_24px_50px_-24px_rgba(16,185,129,0.45)]">
                <div
                  className={`absolute -end-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${service.tone} opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <span
                  className={`relative mb-5 inline-flex rounded-xl bg-gradient-to-br p-3.5 text-white shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${service.tone}`}
                >
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="relative text-xl font-semibold text-slate-900">
                  <Bidi text={service.title[language]} />
                </h3>
                <p className="relative mt-3 leading-relaxed text-slate-500">
                  <Bidi text={service.description[language]} />
                </p>
                <div className="relative mt-5 flex flex-wrap gap-2" dir="ltr">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
