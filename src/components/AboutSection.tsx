import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const skillCategories = [
  {
    titleKey: "skills.frontend",
    items: [
      "Angular",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "PrimeNG",
    ],
  },
  {
    titleKey: "skills.angular",
    items: [
      "RxJS",
      "Angular Signals",
      "Reactive Forms",
      "Standalone Components",
      "Route Guards",
      "HTTP Interceptors",
      "Nx Workspace",
      "Module Federation",
      "Micro Frontend Architecture",
    ],
  },
  {
    titleKey: "skills.cms",
    items: [
      "WordPress",
      "Headless WordPress",
      "WordPress REST API",
      "ACF (Advanced Custom Fields)",
    ],
  },
  {
    titleKey: "skills.backend",
    items: ["Node.js", "Express.js", "C#", "Firebase", "Supabase"],
  },
  {
    titleKey: "skills.tools",
    items: ["Git", "GitHub", "Postman", "Figma", "Vite", "Cursor AI", "Claude"],
  },
] as const;

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section-light">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title mb-0">
              {t("About")}
              <span className="text-portfolio-green">{t(" Me")}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal delay={100}>
            <h3 className="mb-6 text-2xl font-bold text-portfolio-dark md:text-3xl">
              {t("decritiopn.exp.title")}
            </h3>
            <p className="mb-5 text-lg leading-relaxed text-portfolio-gray">
              {t("description.exp")}
            </p>
            <p className="mb-8 leading-relaxed text-portfolio-gray">
              {t("decritiopn.tec")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="btn-primary">
                {t("View My Work")}
              </a>
              <a
                href={asset("files/Eslam-Emam-Resume.pdf")}
                download
                className="btn-outline-light"
              >
                {t("Download Resume")}
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-20">
          <ScrollReveal>
            <div className="section-header mb-10">
              <p className="section-eyebrow">{t("about.skills")}</p>
              <h3 className="text-2xl font-bold text-portfolio-dark md:text-3xl">
                {t("My Skills")}
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={category.titleKey} delay={index * 80}>
                <div className="panel panel-hover h-full p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-8 w-1 shrink-0 rounded-full bg-portfolio-green" />
                    <h4 className="font-semibold leading-snug text-portfolio-dark">
                      {t(category.titleKey)}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
