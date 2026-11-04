import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import { asset } from "@/lib/assets";
import { projects } from "@/data/projects";

const techStack = [
  "Angular",
  "React",
  "TypeScript",
  "RxJS",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
];

const HeroSection = () => {
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const stats = [
    { value: 3, suffix: "+", label: isAr ? "سنوات خبرة" : "Years Experience" },
    { value: projects.length, suffix: "", label: isAr ? "مشروع" : "Projects" },
    { value: 3, suffix: "", label: isAr ? "عملاء" : "Live Clients" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-portfolio-dark pb-20 pt-28 text-white"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="glow-orb -left-32 top-10 h-96 w-96 bg-portfolio-green/20" />
      <div className="glow-orb -right-24 bottom-0 h-[28rem] w-[28rem] bg-teal-500/15" />

      <div className="section-inner relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="order-2 space-y-7 text-start lg:order-1">
            <ScrollReveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-green" />
                </span>
                {isAr ? "متاح لفرص جديدة" : "Available for new opportunities"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="mb-3 text-lg text-white/60">{t("hero.greeting")}</p>
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient">{t("hero.name")}</span>
              </h1>
              <h2 className="mt-4 text-2xl font-medium text-white/90 md:text-3xl">
                {t("hero.title")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="max-w-xl text-lg leading-relaxed text-white/65">
                {t("hero.description")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="glass rounded-md px-3 py-1 font-mono text-xs text-portfolio-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-portfolio-green px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  {t("hero.cta")}
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href={asset("files/Eslam-Emam-Resume.pdf")}
                  download
                  className="glass inline-flex items-center gap-2 rounded-lg px-7 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-portfolio-green/60"
                >
                  <Download className="h-4 w-4" />
                  {t("Download Resume")}
                </a>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/eslamemam1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="glass rounded-lg p-3.5 text-white/80 transition-colors hover:border-portfolio-green/60 hover:text-portfolio-green"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eslam-emam-12695815b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="glass rounded-lg p-3.5 text-white/80 transition-colors hover:border-portfolio-green/60 hover:text-portfolio-green"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <dl className="flex gap-8 border-t border-white/10 pt-6 sm:gap-12">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-3xl font-bold text-white">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-sm text-white/55">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <ScrollReveal delay={200} direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-portfolio-green/40 via-transparent to-teal-400/30 blur-2xl" />
                <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-portfolio-green/70 p-1.5 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.55)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <img
                    src={asset("imges/me.webp")}
                    alt="Eslam Emam"
                    className="h-full w-full rounded-full object-cover"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <div
                  dir="ltr"
                  className="code-window absolute -bottom-6 -left-4 hidden w-72 text-left sm:block lg:-left-14"
                  style={{ animation: "float-y 6s ease-in-out infinite" }}
                >
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <pre className="px-3 py-3 text-white/80">
                    <span className="text-purple-300">const</span>{" "}
                    <span className="text-sky-300">dev</span> = {"{"}
                    {"\n  "}role: <span className="text-amber-300">"Full-Stack"</span>,
                    {"\n  "}front: [<span className="text-amber-300">"Angular"</span>,{" "}
                    <span className="text-amber-300">"React"</span>],
                    {"\n  "}back: <span className="text-amber-300">"Supabase"</span>,
                    {"\n  "}db: <span className="text-amber-300">"PostgreSQL"</span>
                    {"\n"}
                    {"}"}
                    <span
                      className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-portfolio-green"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/40 transition-colors hover:text-white md:block"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
