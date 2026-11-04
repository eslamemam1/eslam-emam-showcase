import { Link } from "react-router-dom";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { githubProjects, GITHUB_PROFILE } from "@/data/projects";

const GithubProjectsSection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const featured = githubProjects.filter((p) => p.featured);

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 100}>
              <ProjectCard project={project} variant="github" />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/AllProjectsPage"
            className="group inline-flex items-center gap-2 rounded-lg bg-portfolio-green px-7 py-3 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            {isAr ? "كل المشاريع" : "All Projects"} ({githubProjects.length})
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
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
