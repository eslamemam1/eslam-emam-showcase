import { Briefcase } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { clientProjects } from "@/data/projects";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <section id="projects" className="section section-darker overflow-hidden">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow-pill">
              <Briefcase className="h-3.5 w-3.5" />
              {isAr ? "أعمال العملاء" : "Client Work"}
            </span>
            <h2 className="section-title text-gradient mb-3">
              {isAr ? "مشاريع حقيقية لعملاء حقيقيين" : "Real Projects for Real Clients"}
            </h2>
            <p className="section-lead">
              {isAr
                ? "مواقع منشورة على دومينات خاصة بها، اشتغلت عليها وسلّمتها للعملاء."
                : "Live websites on their own domains, built and delivered to clients."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {clientProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} variant="client" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
