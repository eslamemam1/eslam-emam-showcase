import {
  ArrowDown,
  Download,
  Gauge,
  Layers,
  Monitor,
  FileCode2,
  Server,
  Wrench,
  Rocket,
  Smartphone,
  Plug,
  Blocks,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const skillCategories = [
  {
    titleKey: "skills.frontend",
    icon: Monitor,
    tone: "from-emerald-500 to-teal-500",
    items: ["Angular", "React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "PrimeNG"],
  },
  {
    titleKey: "skills.angular",
    icon: Layers,
    tone: "from-sky-500 to-indigo-500",
    items: ["RxJS", "Angular Signals", "Reactive Forms", "Standalone Components", "Route Guards", "HTTP Interceptors", "Nx Workspace", "Module Federation", "Micro Frontend Architecture"],
  },
  {
    titleKey: "skills.cms",
    icon: FileCode2,
    tone: "from-violet-500 to-fuchsia-500",
    items: ["WordPress", "Headless WordPress", "WordPress REST API", "ACF (Advanced Custom Fields)"],
  },
  {
    titleKey: "skills.backend",
    icon: Server,
    tone: "from-amber-500 to-orange-500",
    items: ["Node.js", "Express.js", "C#", "Firebase", "Supabase"],
  },
  {
    titleKey: "skills.tools",
    icon: Wrench,
    tone: "from-rose-500 to-pink-500",
    items: ["Git", "GitHub", "Postman", "Figma", "Vite", "Cursor AI", "Claude"],
  },
] as const;

const highlights = [
  {
    icon: Blocks,
    tone: "text-emerald-600 bg-emerald-500/10",
    en: ["Scalable Architecture", "Standalone components, Nx and micro-frontends."],
    ar: ["معمارية قابلة للتوسع", "Standalone components و Nx و micro-frontends."],
  },
  {
    icon: Gauge,
    tone: "text-sky-600 bg-sky-500/10",
    en: ["Performance First", "Lazy loading, clean RxJS and fast first paint."],
    ar: ["الأداء أولًا", "Lazy loading و RxJS نظيف وتحميل سريع."],
  },
  {
    icon: Smartphone,
    tone: "text-violet-600 bg-violet-500/10",
    en: ["Responsive & RTL", "Pixel-perfect on every screen, Arabic and English."],
    ar: ["متجاوب ويدعم RTL", "تصميم دقيق على كل الشاشات بالعربي والإنجليزي."],
  },
  {
    icon: Plug,
    tone: "text-amber-600 bg-amber-500/10",
    en: ["API Integration", "JWT auth, interceptors, Supabase and REST."],
    ar: ["ربط الـ API", "مصادقة JWT و interceptors و Supabase و REST."],
  },
] as const;

const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="section bg-dots relative overflow-hidden bg-slate-50 text-slate-900">
      <div className="glow-orb -right-24 top-0 h-80 w-80 bg-portfolio-green/10" />
      <div className="section-inner relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ScrollReveal direction="right">
            <div className="text-start lg:sticky lg:top-28">
              <span className="section-eyebrow-pill">
                <Rocket className="h-3.5 w-3.5" />
                {t("About")}
                {t(" Me")}
              </span>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                {t("decritiopn.exp.title")}
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-slate-600">{t("description.exp")}</p>
              <p className="mb-8 leading-relaxed text-slate-500">{t("decritiopn.tec")}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-7 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-portfolio-green"
                >
                  {t("View My Work")}
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href={asset("files/Eslam-Emam-Resume.pdf")}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 font-medium text-slate-800 transition-all hover:-translate-y-0.5 hover:border-portfolio-green hover:text-portfolio-green"
                >
                  <Download className="h-4 w-4" />
                  {t("Download Resume")}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.en[0]} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-green/40 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.35)]">
                  <span className={`mb-4 inline-flex rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${h.tone}`}>
                    <h.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{h[language][0]}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{h[language][1]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <ScrollReveal>
            <div className="section-header mb-10">
              <h3 className="text-2xl font-bold text-slate-900 md:text-4xl">
                {t("My Skills")}
              </h3>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-portfolio-green to-teal-400" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.titleKey} delay={(index % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.tone}`} />
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`rounded-xl bg-gradient-to-br p-2.5 text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${category.tone}`}>
                      <category.icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-semibold leading-snug text-slate-900">{t(category.titleKey)}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2" dir="ltr">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 transition-colors hover:border-portfolio-green/50 hover:bg-portfolio-green/10 hover:text-portfolio-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
