import { useState } from "react";
import { ChevronDown, Github, GitFork, Terminal } from "lucide-react";
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
            <span
              dir="ltr"
              className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-portfolio-green"
            >
              <Terminal className="h-3.5 w-3.5" />
              ~/github/eslamemam1
            </span>
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
          <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
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
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-portfolio-green"
            >
              <GitFork className="h-4 w-4" />
              {isAr ? "كل الـ repositories على GitHub" : "All repositories on GitHub"}
            </a>
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
