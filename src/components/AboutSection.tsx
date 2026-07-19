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
          <h2 className="section-title text-center">
            <span className="text-portfolio-dark">{t("About")}</span>
            <span className="text-portfolio-green">{t(" Me")}</span>
          </h2>
        </ScrollReveal>

        {/* Bio */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-portfolio-dark">
              {t("decritiopn.exp.title")}
            </h3>
            <p className="text-portfolio-gray text-lg leading-relaxed mb-5">
              {t("description.exp")}
            </p>
            <p className="text-portfolio-gray leading-relaxed mb-8">
              {t("decritiopn.tec")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="bg-portfolio-green hover:bg-portfolio-green/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                {t("View My Work")}
              </a>
              <a
                href={asset("files/Eslam-Emam-Resume.pdf")}
                download
                className="border border-portfolio-dark/20 text-portfolio-dark px-6 py-3 rounded-md hover:border-portfolio-green hover:text-portfolio-green transition-colors"
              >
                {t("Download Resume")}
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills */}
        <div className="mt-16 md:mt-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-portfolio-green text-sm font-semibold tracking-widest uppercase mb-2">
                {t("about.skills")}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-portfolio-dark">
                {t("My Skills")}
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal
                key={category.titleKey}
                className={`delay-${Math.min(index * 100, 400)}`}
              >
                <div className="h-full rounded-xl border border-black/5 bg-white p-5 md:p-6 transition-all duration-300 hover:border-portfolio-green/40 hover:shadow-[0_12px_40px_-20px_rgba(16,185,129,0.4)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-8 w-1 rounded-full bg-portfolio-green shrink-0" />
                    <h4 className="font-semibold text-portfolio-dark leading-snug">
                      {t(category.titleKey)}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-md bg-black/[0.04] px-2.5 py-1 text-sm text-portfolio-dark/90 transition-colors hover:bg-portfolio-green/15"
                      >
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
