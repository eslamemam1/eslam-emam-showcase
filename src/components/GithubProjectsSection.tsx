import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import RepoCard from "./RepoCard";
import { githubProjects, GITHUB_PROFILE, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const tabs: { key: Filter; en: string; ar: string }[] = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "angular", en: "Angular", ar: "Angular" },
  { key: "react", en: "React", ar: "React" },
  { key: "ui", en: "UI", ar: "واجهات" },
];

const INITIAL = 6;

const GithubProjectsSection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    filter === "all" ? githubProjects : githubProjects.filter((p) => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);
  const count = (key: Filter) =>
    key === "all" ? githubProjects.length : githubProjects.filter((p) => p.category === key).length;

  return (
    <section id="github" className="section section-dark overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow-orb -left-24 top-10 h-80 w-80 bg-portfolio-green/15" />
      <div className="section-inner relative z-10">
        <ScrollReveal>
          <div className="section-header">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="group mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pe-4 ps-1.5 backdrop-blur transition-all duration-300 hover:border-portfolio-green/50 hover:bg-white/[0.07]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-portfolio-green to-teal-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <Github className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-white">eslamemam1</span>
              <span className="h-4 w-px bg-white/15" />
              <span className="font-mono text-xs text-portfolio-green">
                {githubProjects.length} repositories
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-portfolio-green" />
            </a>
            <h2 className="section-title mb-3 text-white">
              {isAr ? "مشاريع التعلّم والتطوير" : "Learning & Practice Projects"}
            </h2>
            <p className="section-lead">
              {isAr
                ? "مشاريع شخصية وتدريبية بطوّر بيها مهاراتي، كلها مرفوعة على GitHub."
                : "Personal and practice projects I build to sharpen my skills, all public on GitHub."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto mb-10 flex max-w-6xl justify-center">
            <div className="flex flex-wrap justify-center gap-2" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={filter === tab.key}
                  onClick={() => {
                    setFilter(tab.key);
                    setExpanded(false);
                  }}
                  className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all duration-300 ${
                    filter === tab.key
                      ? "border-portfolio-green bg-portfolio-green text-white shadow-[0_8px_24px_-10px_rgba(16,185,129,0.8)]"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-portfolio-green/50 hover:text-white"
                  }`}
                >
                  {tab[language]}
                  <span
                    className={`rounded px-1.5 font-mono text-xs ${
                      filter === tab.key ? "bg-white/20" : "bg-white/10 text-white/50"
                    }`}
                  >
                    {count(tab.key)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <div
              key={`${filter}-${project.id}`}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${(index % 6) * 70}ms` }}
            >
              <RepoCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {filtered.length > INITIAL && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-2 rounded-lg bg-portfolio-green px-7 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              {expanded
                ? isAr
                  ? "عرض أقل"
                  : "Show less"
                : isAr
                  ? `عرض الكل (${filtered.length})`
                  : `Show all (${filtered.length})`}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-lg px-7 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-portfolio-green/60"
          >
            <Github className="h-4 w-4" />
            {isAr ? "حسابي على GitHub" : "View GitHub Profile"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubProjectsSection;
