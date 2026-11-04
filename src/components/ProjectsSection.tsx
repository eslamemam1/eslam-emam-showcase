import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section section-dark">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-eyebrow">{t("projects.subtitle")}</p>
            <h2 className="section-title mb-0 text-white">
              {t("projects.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/AllProjectsPage"
            className="inline-flex items-center gap-2 rounded-md bg-portfolio-green px-8 py-3 font-medium text-white transition-colors hover:bg-portfolio-green/90"
          >
            {t("projects.viewAll")} ({projects.length})
            <ArrowRight
              className={`h-4 w-4 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
