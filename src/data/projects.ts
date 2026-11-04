export type ProjectCategory = "client" | "angular" | "react" | "ui";

export interface Project {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  tech: string[];
  category: ProjectCategory;
  featured?: boolean;
  /** Path under /public (resolved with asset()). Falls back to a gradient banner. */
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Shown on the banner when there is no screenshot. */
  snippet?: string;
}

const gh = (repo: string) => `https://github.com/eslamemam1/${repo}`;
const pages = (repo: string) => `https://eslamemam1.github.io/${repo}/`;

export const projects: Project[] = [
  {
    id: "caf-sports",
    title: { en: "Caf-Sports", ar: "كاف سبورتس" },
    description: {
      en: "Corporate website for a leading sports construction and artificial flooring company in Egypt and the UAE.",
      ar: "موقع تعريفي لإحدى الشركات الرائدة في مصر والإمارات في مجال إنشاء الملاعب والأرضيات الصناعية.",
    },
    tech: ["React", "Tailwind CSS"],
    category: "client",
    featured: true,
    image: "imges/caf.jpg",
    liveUrl: "https://caf-sports.com/",
  },
  {
    id: "3lamko-bus",
    title: { en: "3lamko Bus", ar: "عالمكو باص" },
    description: {
      en: "Travel agency platform for microbus and limousine trips from Cairo to Sharm El Sheikh and beyond, backed by Supabase.",
      ar: "منصة وكالة سفر لرحلات الميكروباص والليموزين من القاهرة إلى شرم الشيخ وغيرها، مبنية على Supabase.",
    },
    tech: ["React", "TypeScript", "Supabase"],
    category: "client",
    featured: true,
    image: "imges/3lamko.jpg",
    liveUrl: "https://3lamko-bus.com/",
  },
  {
    id: "hurghada-vibes",
    title: { en: "Hurghada Vibes Tours", ar: "جولات فيبز الغردقة" },
    description: {
      en: "Tourism website presenting tours and excursions around Hurghada with a clean, fast Angular front end.",
      ar: "موقع سياحي يعرض الرحلات والجولات في الغردقة بواجهة Angular سريعة وأنيقة.",
    },
    tech: ["Angular", "Tailwind CSS"],
    category: "client",
    featured: true,
    image: "imges/hurghada-vibes.jpg",
    liveUrl: "https://www.hurghada-vibes-tours.com/",
  },
  {
    id: "holy-quran",
    title: { en: "The Holy Quran", ar: "القرآن الكريم" },
    description: {
      en: "Responsive React app offering Quran text, translations and audio recitations for reading and listening on any device.",
      ar: "تطبيق React متجاوب يقدم نص القرآن والترجمات والتلاوات الصوتية للقراءة والاستماع على أي جهاز.",
    },
    tech: ["React", "Tailwind CSS"],
    category: "react",
    featured: true,
    image: "imges/holyQoran.jpg",
    snippet: "const surahs = await getSurahs();\n<AudioPlayer src={recitation} />",
    liveUrl: pages("The-Holy-Quran-"),
    githubUrl: gh("The-Holy-Quran-"),
  },
  {
    id: "doctor-booking",
    title: { en: "Doctor Booking System", ar: "نظام حجز الأطباء" },
    description: {
      en: "Patients book appointments while doctors manage them from a secure dashboard, with JWT authentication, protected routes and an API proxy.",
      ar: "يحجز المرضى مواعيدهم ويديرها الأطباء من لوحة تحكم آمنة، مع مصادقة JWT ومسارات محمية وبروكسي للـ API.",
    },
    tech: ["Angular", "TypeScript", "JWT", "Route Guards"],
    category: "angular",
    featured: true,
    githubUrl: gh("doctor-booking-system"),
    snippet: "{ path: 'appointments',\n  canActivate: [authGuard],\n  component: Dashboard }",
  },
  {
    id: "jwt-dashboard",
    title: { en: "JWT Dashboard App", ar: "لوحة تحكم بمصادقة JWT" },
    description: {
      en: "Admin dashboard that pulls user statistics from a Swagger-documented API, secured with JWT and an authGuard.",
      ar: "لوحة تحكم تعرض إحصائيات المستخدمين من API موثّق بـ Swagger، ومؤمّنة بـ JWT و authGuard.",
    },
    tech: ["Angular", "Tailwind CSS", "JWT", "Swagger API"],
    category: "angular",
    featured: true,
    githubUrl: gh("jwt-token-app"),
    snippet: "headers: {\n  Authorization:\n    `Bearer ${token}`\n}",
  },
  {
    id: "task-manager",
    title: { en: "Task Manager", ar: "مدير المهام" },
    description: {
      en: "CRUD task app showing components, services, routing, reactive forms and RxJS state management on a json-server fake API.",
      ar: "تطبيق مهام CRUD يوضح المكونات والخدمات والتوجيه والنماذج التفاعلية وإدارة الحالة بـ RxJS مع json-server.",
    },
    tech: ["Angular", "RxJS", "Reactive Forms", "json-server"],
    category: "angular",
    featured: true,
    githubUrl: gh("angular-crud-fake-api"),
    snippet: "tasks$ = this.http\n  .get<Task[]>('/tasks')\n  .pipe(shareReplay(1));",
  },
  {
    id: "booking-management",
    title: { en: "Booking Management System", ar: "نظام إدارة الحجوزات" },
    description: {
      en: "Angular application for creating and managing bookings, built with the latest Angular CLI.",
      ar: "تطبيق Angular لإنشاء الحجوزات وإدارتها، مبني بأحدث إصدار من Angular CLI.",
    },
    tech: ["Angular", "TypeScript"],
    category: "angular",
    githubUrl: gh("booking-management-system"),
    snippet: "@Component({\n  standalone: true,\n  selector: 'app-booking'\n})",
  },
  {
    id: "seat-map",
    title: { en: "Seat Map", ar: "خريطة المقاعد" },
    description: {
      en: "Interactive seat selection component built with Angular.",
      ar: "مكوّن تفاعلي لاختيار المقاعد مبني بـ Angular.",
    },
    tech: ["Angular", "TypeScript"],
    category: "angular",
    githubUrl: gh("Seat-Map"),
    snippet: "@Component({\n  standalone: true,\n  selector: 'app-seat-map'\n})",
  },
  {
    id: "motiv-cars",
    title: { en: "Motiv Cars App", ar: "تطبيق Motiv Cars" },
    description: {
      en: "Single-page React app with charts and progress indicators, routing and a fully responsive layout.",
      ar: "تطبيق React من صفحة واحدة بمخططات ومؤشرات تقدم وتوجيه وتصميم متجاوب بالكامل.",
    },
    tech: ["React", "Tailwind CSS", "amCharts 5", "React Router"],
    category: "react",
    featured: true,
    githubUrl: gh("Motiv-Cars-App"),
    snippet: "<CircularProgressbar\n  value={72}\n  text=\"72%\" />",
  },
  {
    id: "crud-react",
    title: { en: "CRUD React App", ar: "تطبيق CRUD بـ React" },
    description: {
      en: "React CRUD application talking to a json-server REST API.",
      ar: "تطبيق CRUD بـ React يتعامل مع REST API عبر json-server.",
    },
    tech: ["React", "json-server", "REST API"],
    category: "react",
    featured: true,
    liveUrl: pages("Crud-React-App"),
    githubUrl: gh("Crud-React-App"),
    snippet: "const { data } = await\n  axios.get('/posts');\nsetPosts(data);",
  },
  {
    id: "ticketing-system",
    title: { en: "Ticketing System", ar: "نظام التذاكر" },
    description: {
      en: "Support ticketing interface built with React.",
      ar: "واجهة لنظام تذاكر الدعم مبنية بـ React.",
    },
    tech: ["React", "JavaScript"],
    category: "react",
    liveUrl: pages("ticketing-system"),
    githubUrl: gh("ticketing-system"),
    snippet: "const [tickets, setTickets] =\n  useState([]);",
  },
  {
    id: "adventure-agency",
    title: { en: "Adventure Agency", ar: "وكالة المغامرات" },
    description: {
      en: "Responsive agency landing page built with media queries.",
      ar: "صفحة هبوط متجاوبة لوكالة مغامرات باستخدام media queries.",
    },
    tech: ["HTML", "CSS", "Responsive Design"],
    category: "ui",
    liveUrl: pages("Adventure-Agency"),
    githubUrl: gh("Adventure-Agency"),
    snippet: "@media (max-width: 768px) {\n  .hero { flex-direction: column; }\n}",
  },
  {
    id: "responsive-bootstrap",
    title: { en: "Responsive Bootstrap Website", ar: "موقع Bootstrap متجاوب" },
    description: {
      en: "Multi-section responsive website using the Bootstrap grid and components.",
      ar: "موقع متعدد الأقسام ومتجاوب باستخدام شبكة Bootstrap ومكوناتها.",
    },
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "ui",
    liveUrl: pages("Responsive-Bootstrap-Website"),
    githubUrl: gh("Responsive-Bootstrap-Website"),
    snippet: "<div class=\"row g-4\">\n  <div class=\"col-md-4\">…</div>\n</div>",
  },
];

export const clientProjects = projects.filter((p) => p.category === "client");
export const githubProjects = projects.filter((p) => p.category !== "client");

export const GITHUB_PROFILE = "https://github.com/eslamemam1";

export const domainOf = (url?: string) =>
  url ? new URL(url).hostname.replace(/^www\./, "") : "";
