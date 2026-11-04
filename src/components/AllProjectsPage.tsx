import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters: { key: Filter; en: string; ar: string }[] = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "client", en: "Client Work", ar: "أعمال العملاء" },
  { key: "react", en: "React", ar: "React" },
  { key: "angular", en: "Angular", ar: "Angular" },
  { key: "ui", en: "UI / Landing Pages", ar: "واجهات وصفحات هبوط" },
];

const AllProjectsPage = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-portfolio-bg text-white">
      <section className="section section-dark pb-10 pt-20">
        <div className="section-inner">
          <ScrollReveal>
            <div className="mb-10 text-center md:mb-12">
              <h2 className="section-title">{t("projects.allTitle")}</h2>
              <p className="mx-auto max-w-2xl text-lg text-white/70 md:text-xl">
                {t("projects.allSubtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                  filter === f.key
                    ? "border-portfolio-green bg-portfolio-green text-white"
                    : "border-white/20 text-white/70 hover:border-portfolio-green hover:text-white"
                }`}
              >
                {f[language]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white/20 px-8 py-3 text-black/85 hover:bg-portfolio-green/90 hover:text-white"
              onClick={() => navigate("/")}
            >
              {t("projects.backToHome") || "← Back to Home"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjectsPage;
