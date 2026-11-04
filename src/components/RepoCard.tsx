import { ArrowUpRight, BookMarked, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { Project } from "@/data/projects";

const accents: Record<string, { bar: string; dot: string }> = {
  angular: { bar: "from-rose-500 to-rose-400/0", dot: "bg-rose-500" },
  react: { bar: "from-sky-400 to-sky-400/0", dot: "bg-sky-400" },
  ui: { bar: "from-orange-400 to-orange-400/0", dot: "bg-orange-400" },
};

const RepoCard = ({ project }: { project: Project }) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const accent = accents[project.category] ?? accents.react;
  const repo = project.githubUrl?.split("/").pop() ?? "";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-green/50 hover:shadow-[0_20px_50px_-25px_rgba(16,185,129,0.5)]">
      <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent.bar}`} />

      <div className="flex items-start justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          className="flex min-w-0 items-center gap-2 font-mono text-sm text-white/90 transition-colors hover:text-portfolio-green"
        >
          <BookMarked className="h-4 w-4 shrink-0 text-white/40" />
          <span className="truncate">
            <span className="text-white/40">eslamemam1/</span>
            {repo}
          </span>
        </a>
        {project.liveUrl && (
          <span className="shrink-0 rounded-full border border-portfolio-green/30 bg-portfolio-green/10 px-2 py-0.5 text-[11px] font-medium text-portfolio-green">
            Live
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{project.title[language]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        {project.description[language]}
      </p>

      {project.snippet && (
        <pre
          dir="ltr"
          className="mt-4 overflow-hidden whitespace-pre-wrap rounded-lg border border-white/5 bg-black/30 p-3 text-left font-mono text-[11px] leading-relaxed text-white/70"
        >
          {project.snippet}
        </pre>
      )}

      <div className="mt-auto pt-5">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2" dir="ltr">
          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <span className={`h-2.5 w-2.5 rounded-full ${accent.dot}`} />
            {project.tech[0]}
          </span>
          {project.tech.slice(1, 4).map((tech) => (
            <span key={tech} className="font-mono text-xs text-white/40">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:border-portfolio-green hover:bg-white/5"
          >
            <Github className="h-4 w-4" />
            {isAr ? "الكود" : "Code"}
            <ArrowUpRight className="h-3.5 w-3.5 text-white/40 rtl:-scale-x-100" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-portfolio-green px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-400"
            >
              <ExternalLink className="h-4 w-4" />
              {isAr ? "العرض" : "Demo"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default RepoCard;
