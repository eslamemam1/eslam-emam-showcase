import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("project1.title"),
      description: t("project1.description"),
      tech: t("project1.tech"),
      imageUrl: "/imges/caf.png",
      projectUrl: "https://caf-sports.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: t("project2.title"),
      description: t("project2.description"),
      tech: t("project2.tech"),
      imageUrl: "imges/3lamko.png",
      projectUrl: "https://3lamko-bus.com/",
      githubUrl: "#",
    },
    {
      id: 5,
      title: t("project5.title"),
      description: t("project5.description"),
      tech: t("project5.tech"),
      imageUrl: "imges/hurghada-vibes.png",
      projectUrl: "https://www.hurghada-vibes-tours.com/",
      githubUrl: "https://www.hurghada-vibes-tours.com/",
    },
    {
      id: 3,
      title: t("project3.title"),
      description: t("project3.description"),
      tech: t("project3.tech"),
      imageUrl: "imges/holyQoran.png",
      projectUrl: "https://eslamemam1.github.io/The-Holy-Quran-/",
      githubUrl: "#",
    },
  ];

  const navigate = useNavigate();

  return (
    <section id="projects" className="section section-dark">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">{t("projects.title")}</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} className={`delay-${index * 100}`}>
              <Card className="bg-portfolio-dark border border-white/10 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-6 pb-3">
                  <CardTitle className="text-xl text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/60 mt-2">
                    {project.tech}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-3 pb-6 flex-grow">
                  <p className="text-white/80">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                  <Button
                    variant="default"
                    className="bg-portfolio-green hover:bg-portfolio-green/90 flex-1"
                    onClick={() => window.open(project.projectUrl, "_blank")}
                  >
                    {t("projects.visit")}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        {/** this is hiddin projects.viewAll */}
        <ScrollReveal className="text-center mt-12 md:mt-16 hidden">
          <Button
            variant="outline"
            className="border-white/20 hover:bg-portfolio-green/90 hover:text-white text-black/85 px-8 py-3"
            onClick={() => navigate("/AllProjectsPage")}
          >
            {t("projects.viewAll")}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
