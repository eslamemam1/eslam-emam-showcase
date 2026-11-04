import { ExternalLink, Github, Code2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { asset } from "@/lib/assets";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const { language } = useLanguage();
  const title = project.title[language];
  const isAr = language === "ar";

  return (
    <article className="panel-dark group flex h-full flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(16,185,129,0.5)]">
      <div className="h-48 overflow-hidden">
        {project.image ? (
          <img
            src={asset(project.image)}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-portfolio-green/25 via-white/5 to-transparent">
            <Code2 className="h-10 w-10 text-portfolio-green" />
            <span className="text-sm font-medium text-white/70">
              {project.tech[0]}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-portfolio-green/30 bg-portfolio-green/10 px-2.5 py-0.5 text-xs text-portfolio-green"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 flex-grow text-sm leading-relaxed text-white/75">
          {project.description[language]}
        </p>
        <div className="mt-6 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-portfolio-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-portfolio-green/90"
            >
              <ExternalLink className="h-4 w-4" />
              {isAr ? "زيارة المشروع" : "Live Demo"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-portfolio-green hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              {isAr ? "الكود" : "Code"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
