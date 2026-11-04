const items = [
  "Angular",
  "React",
  "TypeScript",
  "RxJS",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "Firebase",
  "WordPress",
  "Figma",
  "Git",
  "Vite",
];

const TechMarquee = () => (
  <div
    dir="ltr"
    aria-hidden="true"
    className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-5"
  >
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
    <div
      className="flex w-max gap-12 hover:[animation-play-state:paused]"
      style={{ animation: "marquee 32s linear infinite" }}
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-white/50"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-portfolio-green" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TechMarquee;
