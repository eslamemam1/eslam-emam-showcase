import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.name": "Eslam Emam",
    "hero.title": "Full Stack Engineer",
    "hero.description":
      "a passionate Full Stack Developer crafting modern, responsive, and high-performance web applications.",
    "hero.cta": "View My Work",
    "hero.contact": "Contact Me",

    // About Section
    "about.title": "About Me",
    About: "About",
    " Me": " Me",
    "My Skills": "My Skills",
    "View My Work": "View My Work",
    "Download Resume": "Download Resume",
    "about.description":
      "I'm a full stack engineer with a passion for creating beautiful, functional, and user-centered digital experiences. With a background in both front-end and back-end development, I bring a holistic approach to building web applications.",
    "about.skills": "Technologies I work with:",
    "description.exp":
      "With over 3 years of experience in web development, I specialize in building scalable and performant applications using modern technologies. My goal is to create software that not only meets technical requirements but also delivers an exceptional user experience.",
    "decritiopn.tec":
      " I'm proficient in front-end frameworks like React and Angular, as well as back-end technologies like Node.js and Express.js. I have experience with databasesystems including MongoDB, Supabase, and Firebase.",
    "decritiopn.exp.title":
      "Full Stack Engineer with a passion for creating impactful applications",
    // Projects Section
    "projects.title": "Case Studies",
    "projects.subtitle": "Some of my recent projects",
    "projects.viewAll": "View All Projects",
    "projects.visit": "Visit Project",
    "projects.github": "View Code",

    // Project 1
    "project1.title": "Caf-Sports",
    "project1.description":
      "CAF SPORTS One of the leading companies in Egypt and United Arab Emirates specialized in the field of sports construction and Artificial flooring.",
    "project1.tech": "React, Tailwind Css",

    // Project 2
    "project2.title": "3lamko Bus",
    "project2.description":
      "A travel agency specializing in transportation from Cairo to Sharm El Sheikh or any other destination using microbuses and limousines.",
    "project2.tech": "React.js, TypeScript, Supabase",

    // Project 3
    "project3.title": "The Holy Quran",
    "project3.description":
      "The Holy Quran — A responsive React app offering Quran text, translations, and audio recitations for easy reading and listening on any device.",
    "project3.tech": "React,Tailwind Css",

    // Project 4
    "project4.title": "CRUD-ANGULAR-APP ",
    "project4.description":
      "I developed a CRUD application using Angular that allows users to Create, Read, Update, and Delete facial data using a JSON-based Face API.",
    "project4.tech": "Angular,Tailwind Css,Fake Api",

    // Testimonials Section
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What my clients say",

    // Testimonial 1
    "testimonial1.name": "Sarah Johnson",
    "testimonial1.company": "TechStart Inc.",
    "testimonial1.text":
      "Eslam is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",

    // Testimonial 2
    "testimonial2.name": "Mohammed Al-Farsi",
    "testimonial2.company": "Global Solutions Ltd.",
    "testimonial2.text":
      "Working with Eslam was a pleasure. He understood our business needs perfectly and translated them into an excellent web application. Highly recommended!",

    // Testimonial 3
    "testimonial3.name": "Jennifer Lee",
    "testimonial3.company": "Creative Digital Agency",
    "testimonial3.text":
      "Eslam's technical expertise and creativity helped us launch our platform successfully. He's responsive, professional, and delivers high-quality work.",

    // Recent Work Section
    "recentWork.title": "Recent Work",
    "recentWork.subtitle": "Projects I've been working on lately",
    "recentWork.viewDetails": "View Details",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Interested in working together? Let's talk!",
    "contact.nameLabel": "Your Name",
    "contact.emailLabel": "Your Email",
    "contact.subjectLabel": "Subject",
    "contact.messageLabel": "Message",
    "contact.submit": "Send Message",
    "contact.success": "Your message has been sent successfully!",
    "contact.error":
      "There was an error sending your message. Please try again.",
    "Send A Message": "Send A Message",
    "Get in Touch": "Get in Touch",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.madeWith": "Made with ❤️",
    Eslam: "Eslam",
    Emam: "Emam",
    "footer.des":
      "Full Stack Engineer specializing in building exceptional digital experiences that are fast, accessible, and responsive.",
    "Quick Links": "Quick Links",
    "Contact Info": "Contact Info",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.projects": "المشاريع",
    "nav.testimonials": "الشهادات",
    "nav.contact": "اتصل بي",

    // Hero Section
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "إسلام إمام",
    "hero.title": "مهندس الويب المتكامل",
    "hero.description":
      "مرحبًا، أنا إسلام إمام — مطور ويب متكامل شغوف، أصمم تطبيقات ويب حديثة ومتجاوبة وعالية الأداء.",
    "hero.cta": "تصفح أعمالي",
    "hero.contact": "اتصل بي",

    // About Section
    "about.title": "نبذة عني",
    About: "نبذة",
    " Me": " عني",
    "My Skills": "مهاراتي",
    "Download Resume": "تنزيل السيرة الذاتية",
    "View My Work": "عرض أعمالي",
    "about.description":
      "أنا مهندس متكامل متخصص في تطوير الويب بشغف لإنشاء تجارب رقمية جميلة وعملية تركز على المستخدم. مع خلفية في تطوير الواجهة الأمامية والخلفية، أقدم نهجًا شاملاً لبناء تطبيقات الويب.",
    "about.skills": "التقنيات التي أعمل بها:",
    "description.exp":
      "بخبرة تزيد عن ثلاث سنوات في تطوير الويب، أتخصص في بناء تطبيقات قابلة للتطوير وعالية الأداء باستخدام التقنيات الحديثة. هدفي هو إنشاء برامج لا تلبي المتطلبات التقنية فحسب، بل توفر أيضًا تجربة مستخدم استثنائية.",
    "decritiopn.tec":
      "أتقن أطر عمل الواجهة الأمامية مثل React وAngular، بالإضافة إلى تقنيات الواجهة الخلفية مثل Node.js وExpress.js. لديّ خبرة في أنظمة قواعد البيانات، بما في ذلك MongoDB وSupabase وFirebase.",
    "decritiopn.exp.title":
      "مهندس برمجيات متكامل لديه شغف بإنشاء تطبيقات مؤثرة",
    // Projects Section
    "projects.title": "دراسات الحالة",
    "projects.subtitle": "بعض مشاريعي الحديثة",
    "projects.viewAll": "عرض جميع المشاريع",
    "projects.visit": "زيارة المشروع",
    "projects.github": "عرض الكود",

    // Project 1
    "project1.title": "كاف سبورتس ",
    "project1.description":
      "نحن كاف سبورتس إحدى الشركات الرائدة في مصر والإمارات العربية المتحدة المتخصصة في مجال البناء الرياضي والأرضيات الصناعية.",
    "project1.tech": "React,Tailwind Css",

    // Project 2
    "project2.title": "عالمكو باص",
    "project2.description":
      "وكالة سياحة متخصصة في النقل من القاهرة إلى شرم الشيخ أو أي وجهة أخرى باستخدام الميكروباصات والليموزين.",
    "project2.tech": "React.js, TypeScript, Supabase",

    // Project 3
    "project3.title": "القرآن الكريم",
    "project3.description":
      "القرآن الكريم - تطبيق React متجاوب يقدم نصوص القرآن الكريم وترجماته وتلاوات صوتية للقراءة والاستماع بسهولة على أي جهاز.",
    "project3.tech": "React,Tailwind Css",

    // Project 4
    "project4.title": "CRUD-ANGULAR-APP",
    "project4.description":
      "لقد قمت بتطوير تطبيق CRUD باستخدام Angular الذي يسمح للمستخدمين بإنشاء بيانات الوجه وقراءتها وتحديثها وحذفها باستخدام واجهة برمجة تطبيقات الوجه المستندة إلى JSON.",
    "project4.tech": "Angular,Tailwind Css,Fake Api",

    // Testimonials Section
    "testimonials.title": "الشهادات",
    "testimonials.subtitle": "ماذا يقول عملائي",

    // Testimonial 1
    "testimonial1.name": "سارة جونسون",
    "testimonial1.company": "تيك ستارت",
    "testimonial1.text":
      "إسلام مطور استثنائي قام بتسليم مشروعنا في الوقت المحدد وتجاوز توقعاتنا. اهتمامه بالتفاصيل ومهارات حل المشكلات رائعة.",

    // Testimonial 2
    "testimonial2.name": "محمد الفارسي",
    "testimonial2.company": "الحلول العالمية المحدودة",
    "testimonial2.text":
      "العمل مع إسلام كان ممتعًا. لقد فهم احتياجات أعمالنا بشكل مثالي وترجمها إلى تطبيق ويب ممتاز. أوصي به بشدة!",

    // Testimonial 3
    "testimonial3.name": "جينيفر لي",
    "testimonial3.company": "وكالة الإبداع الرقمية",
    "testimonial3.text":
      "ساعدتنا خبرة إسلام التقنية وإبداعه في إطلاق منصتنا بنجاح. إنه سريع الاستجابة ومحترف ويقدم عملًا عالي الجودة.",

    // Recent Work Section
    "recentWork.title": "أعمال حديثة",
    "recentWork.subtitle": "المشاريع التي عملت عليها مؤخرًا",
    "recentWork.viewDetails": "عرض التفاصيل",

    // Contact Section
    "contact.title": "تواصل معي",
    "contact.subtitle": "مهتم بالعمل معًا؟ دعنا نتحدث!",
    "contact.nameLabel": "الاسم",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.subjectLabel": "الموضوع",
    "contact.messageLabel": "الرسالة",
    "contact.submit": "إرسال الرسالة",
    "contact.success": "تم إرسال رسالتك بنجاح!",
    "contact.error": "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    "Send A Message": "إرسال رسالة",
    "Get in Touch": "تواصل معنا",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.madeWith": "صنع بكل ❤️",
    Eslam: "إسلام",
    Emam: "إمام",
    "footer.des":
      "مهندس برمجيات متكامل متخصص في بناء تجارب رقمية استثنائية سريعة وسهلة الوصول ومتجاوبة.",
    "Quick Links": "روابط سريعة",
    "Contact Info": "معلومات الاتصال",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : ""}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
