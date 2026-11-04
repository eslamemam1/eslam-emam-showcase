import { ArrowUpRight, Lock, Server } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";
import { domainOf, type Project } from "@/data/projects";

const ClientShowcase = ({ project, index }: { project: Project; index: number }) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const flip = index % 2 === 1;
  const domain = domainOf(project.liveUrl);
  const title = project.title[language];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <ScrollReveal direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          className="group relative block"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-portfolio-green/30 via-transparent to-teal-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            <div dir="ltr" className="flex items-center gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </span>
              <span className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/[0.06] px-3 py-1 font-mono text-xs text-white/60">
                <Lock className="h-3 w-3 shrink-0 text-portfolio-green" />
                <span className="truncate">{domain}</span>
              </span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-slate-950">
              <img
                src={asset(project.image ?? "")}
                alt={title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </a>
      </ScrollReveal>

      <ScrollReveal direction={flip ? "right" : "left"} delay={120}>
        <div className="text-start">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-5xl font-bold leading-none text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-portfolio-green/30 bg-portfolio-green/10 px-3 py-1 text-xs font-medium text-portfolio-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-portfolio-green" />
              </span>
              {isAr ? "منشور ومباشر" : "Live in production"}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white md:text-4xl">{title}</h3>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
            {project.description[language]}
          </p>
          <div className="mt-6 flex flex-wrap gap-2" dir="ltr">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-portfolio-green"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.hosting && (
            <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-white/50">
              <Server className="h-4 w-4 text-portfolio-green" />
              {isAr ? "الدومين والاستضافة:" : "Domain & hosting:"}
              <span className="rounded-md bg-white/[0.06] px-2.5 py-0.5 font-medium text-white/80">
                {project.hosting}
              </span>
            </p>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn mt-8 inline-flex items-center gap-2 rounded-lg bg-portfolio-green px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            {isAr ? "زيارة الموقع" : "Visit live site"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 rtl:-scale-x-100" />
          </a>
        </div>
      </ScrollReveal>
    </article>
  );
};

export default ClientShowcase;
