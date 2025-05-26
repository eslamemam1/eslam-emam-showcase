import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const { t } = useLanguage();

  // Skills data
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "supabase & firebase", level: 85 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 55 },
    { name: "Version Control (Git & GitHub)", level: 55 },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="section-title text-center">
            <span className="text-portfolio-dark">{t("About")}</span>
            <span className="text-portfolio-green">{t(" Me")}</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-12 md:mt-16">
          {/* About Text */}
          <div className="space-y-6 md:space-y-8">
            <ScrollReveal direction="right" delay={200}>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-dark">
                {t("decritiopn.exp.title")}
              </h3>

              <p className="text-portfolio-gray mb-6">{t("description.exp")}</p>

              <p className="text-portfolio-gray mb-8">{t("decritiopn.tec")}</p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="#projects"
                  className="bg-portfolio-green hover:bg-portfolio-green/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  {t("View My Work")}
                </a>
                <a
                  href="/ResumePage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-portfolio-gray/30 hover:bg-portfolio-gray/10 text-portfolio-gray px-6 py-3 rounded-md transition-colors"
                >
                  {t("Download Resume")}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Skills */}
          <div className="mt-8 md:mt-0">
            <ScrollReveal direction="left" delay={400}>
              <h3 className="text-2xl font-bold mb-8 text-portfolio-dark">
                {t("My Skills")}
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-portfolio-dark">
                        {skill.name}
                      </span>
                      <span className="text-portfolio-green">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolio-gray/20 rounded-full h-2.5">
                      <div
                        className="bg-portfolio-green h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
