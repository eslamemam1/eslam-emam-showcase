import type { LucideIcon } from "lucide-react";
import { Braces, Layers, Palette, Rocket, Sprout, Wrench } from "lucide-react";

export interface TimelineItem {
  year: string;
  icon: LucideIcon;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

// Years follow the activity in the GitHub history; edit freely.
export const timeline: TimelineItem[] = [
  {
    year: "2021",
    icon: Sprout,
    title: { en: "Started with HTML & CSS", ar: "البداية مع HTML و CSS" },
    description: {
      en: "Built my first responsive websites and fell in love with the front end.",
      ar: "بنيت أول مواقعي المتجاوبة وبدأ شغفي بالـ Front-End.",
    },
  },
  {
    year: "2022",
    icon: Braces,
    title: { en: "JavaScript & React fundamentals", ar: "أساسيات JavaScript و React" },
    description: {
      en: "First CRUD apps, REST APIs with json-server and my first React projects.",
      ar: "أول تطبيقات CRUD وREST APIs بـ json-server وأول مشاريعي بـ React.",
    },
  },
  {
    year: "2023",
    icon: Palette,
    title: { en: "Responsive UI & Tailwind", ar: "واجهات متجاوبة و Tailwind" },
    description: {
      en: "Landing pages, Bootstrap sites and Tailwind-powered React apps with charts.",
      ar: "صفحات هبوط ومواقع Bootstrap وتطبيقات React بـ Tailwind مع مخططات.",
    },
  },
  {
    year: "2024",
    icon: Wrench,
    title: { en: "Front-end tooling", ar: "أدوات الـ Front-End" },
    description: {
      en: "Webpack, Sass and DOM-driven projects through structured front-end coursework.",
      ar: "Webpack و Sass ومشاريع DOM من خلال دراسة منظمة لتطوير الواجهات.",
    },
  },
  {
    year: "2025",
    icon: Layers,
    title: { en: "Angular deep dive", ar: "التعمق في Angular" },
    description: {
      en: "RxJS, reactive forms, JWT auth, route guards and booking systems.",
      ar: "RxJS والنماذج التفاعلية ومصادقة JWT والـ route guards وأنظمة الحجز.",
    },
  },
  {
    year: "2026",
    icon: Rocket,
    title: { en: "Full stack & real clients", ar: "Full Stack وعملاء حقيقيون" },
    description: {
      en: "Shipping client websites with Angular, React, Supabase and PostgreSQL.",
      ar: "تسليم مواقع للعملاء بـ Angular و React و Supabase و PostgreSQL.",
    },
  },
];
