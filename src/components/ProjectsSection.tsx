import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("project1.title"),
      description: t("project1.description"),
      tech: t("project1.tech"),
      imageUrl: asset("imges/caf.jpg"),
      projectUrl: "https://caf-sports.com/",
    },
    {
      id: 2,
      title: t("project2.title"),
      description: t("project2.description"),
      tech: t("project2.tech"),
      imageUrl: asset("imges/3lamko.jpg"),
      projectUrl: "https://3lamko-bus.com/",
    },
    {
      id: 5,
      title: t("project5.title"),
      description: t("project5.description"),
      tech: t("project5.tech"),
      imageUrl: asset("imges/hurghada-vibes.jpg"),
      projectUrl: "https://www.hurghada-vibes-tours.com/",
    },
    {
      id: 3,
      title: t("project3.title"),
      description: t("project3.description"),
      tech: t("project3.tech"),
      imageUrl: asset("imges/holyQoran.jpg"),
      projectUrl: "https://eslamemam1.github.io/The-Holy-Quran-/",
    },
  ];

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
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <article className="panel-dark flex h-full flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">{project.tech}</p>
                  <p className="mt-4 flex-grow text-white/75">
                    {project.description}
                  </p>
                  <Button
                    className="mt-6 w-full bg-portfolio-green text-white hover:bg-portfolio-green/90"
                    onClick={() => window.open(project.projectUrl, "_blank")}
                  >
                    {t("projects.visit")}
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
