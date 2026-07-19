import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-portfolio-dark pt-20 text-white"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-portfolio-dark/90" />
      <div className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat opacity-20" />

      <div className="section-inner z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div
            className={`order-2 space-y-6 md:order-1 md:space-y-8 ${
              language === "en" ? "text-left" : "text-right"
            }`}
          >
            <ScrollReveal delay={0}>
              <p className="section-eyebrow mb-3 text-base md:text-lg">
                {t("hero.greeting")}
              </p>
              <h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                {t("hero.name")}
              </h1>
              <h2 className="mb-2 text-2xl font-medium text-white/80 md:text-3xl">
                {t("hero.title")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-lg text-white/70 md:text-xl">
                {t("hero.description")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col items-start gap-4 sm:flex-row md:gap-6">
                <Button
                  className="bg-portfolio-green px-8 py-6 text-lg text-white hover:bg-portfolio-green/90"
                  onClick={() => {
                    window.location.href = "#projects";
                  }}
                >
                  {t("hero.cta")}
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent px-8 py-6 text-lg text-white hover:border-portfolio-green hover:bg-portfolio-green hover:text-white"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                >
                  {t("hero.contact")}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <ScrollReveal delay={200} direction="left">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-portfolio-green shadow-[0_20px_60px_-20px_rgba(16,185,129,0.55)] md:h-80 md:w-80">
                <img
                  src={asset("imges/me.jpg")}
                  alt="Eslam Emam"
                  className="h-full w-full object-cover"
                  width={320}
                  height={320}
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/70 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/50 transition-colors hover:text-white"
          aria-label="Scroll to about"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
