
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    "hero.description": "I build exceptional and accessible digital experiences for the web.",
    "hero.cta": "View My Work",
    "hero.contact": "Contact Me",
    
    // About Section
    "about.title": "About Me",
    "about.description": "I'm a full stack engineer with a passion for creating beautiful, functional, and user-centered digital experiences. With a background in both front-end and back-end development, I bring a holistic approach to building web applications.",
    "about.skills": "Technologies I work with:",
    
    // Projects Section
    "projects.title": "Case Studies",
    "projects.subtitle": "Some of my recent projects",
    "projects.viewAll": "View All Projects",
    "projects.visit": "Visit Project",
    "projects.github": "View Code",
    
    // Project 1
    "project1.title": "E-Commerce Platform",
    "project1.description": "A full-featured online shopping platform with user authentication, product catalog, cart functionality, and payment processing.",
    "project1.tech": "React, Node.js, MongoDB, Stripe",
    
    // Project 2
    "project2.title": "Social Media Dashboard",
    "project2.description": "A comprehensive dashboard for managing social media accounts, analytics, and content scheduling.",
    "project2.tech": "Vue.js, Firebase, Express, Chart.js",
    
    // Project 3
    "project3.title": "Real Estate Application",
    "project3.description": "A property listing platform with advanced search, user favorites, and interactive maps.",
    "project3.tech": "React Native, GraphQL, PostgreSQL, AWS",
    
    // Testimonials Section
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What my clients say",
    
    // Testimonial 1
    "testimonial1.name": "Sarah Johnson",
    "testimonial1.company": "TechStart Inc.",
    "testimonial1.text": "Eslam is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
    
    // Testimonial 2
    "testimonial2.name": "Mohammed Al-Farsi",
    "testimonial2.company": "Global Solutions Ltd.",
    "testimonial2.text": "Working with Eslam was a pleasure. He understood our business needs perfectly and translated them into an excellent web application. Highly recommended!",
    
    // Testimonial 3
    "testimonial3.name": "Jennifer Lee",
    "testimonial3.company": "Creative Digital Agency",
    "testimonial3.text": "Eslam's technical expertise and creativity helped us launch our platform successfully. He's responsive, professional, and delivers high-quality work.",
    
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
    "contact.error": "There was an error sending your message. Please try again.",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.madeWith": "Made with ❤️",
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
    "hero.description": "أقوم ببناء تجارب رقمية استثنائية وسهلة الوصول للويب.",
    "hero.cta": "تصفح أعمالي",
    "hero.contact": "اتصل بي",
    
    // About Section
    "about.title": "نبذة عني",
    "about.description": "أنا مهندس متكامل متخصص في تطوير الويب بشغف لإنشاء تجارب رقمية جميلة وعملية تركز على المستخدم. مع خلفية في تطوير الواجهة الأمامية والخلفية، أقدم نهجًا شاملاً لبناء تطبيقات الويب.",
    "about.skills": "التقنيات التي أعمل بها:",
    
    // Projects Section
    "projects.title": "دراسات الحالة",
    "projects.subtitle": "بعض مشاريعي الحديثة",
    "projects.viewAll": "عرض جميع المشاريع",
    "projects.visit": "زيارة المشروع",
    "projects.github": "عرض الكود",
    
    // Project 1
    "project1.title": "منصة التجارة الإلكترونية",
    "project1.description": "منصة تسوق متكاملة عبر الإنترنت مع مصادقة المستخدم، كتالوج المنتجات، وظائف عربة التسوق، ومعالجة الدفع.",
    "project1.tech": "React، Node.js، MongoDB، Stripe",
    
    // Project 2
    "project2.title": "لوحة تحكم وسائل التواصل الاجتماعي",
    "project2.description": "لوحة تحكم شاملة لإدارة حسابات التواصل الاجتماعي، التحليلات، وجدولة المحتوى.",
    "project2.tech": "Vue.js، Firebase، Express، Chart.js",
    
    // Project 3
    "project3.title": "تطبيق العقارات",
    "project3.description": "منصة قوائم العقارات مع بحث متقدم، مفضلات المستخدم، وخرائط تفاعلية.",
    "project3.tech": "React Native، GraphQL، PostgreSQL، AWS",
    
    // Testimonials Section
    "testimonials.title": "الشهادات",
    "testimonials.subtitle": "ماذا يقول عملائي",
    
    // Testimonial 1
    "testimonial1.name": "سارة جونسون",
    "testimonial1.company": "تيك ستارت",
    "testimonial1.text": "إسلام مطور استثنائي قام بتسليم مشروعنا في الوقت المحدد وتجاوز توقعاتنا. اهتمامه بالتفاصيل ومهارات حل المشكلات رائعة.",
    
    // Testimonial 2
    "testimonial2.name": "محمد الفارسي",
    "testimonial2.company": "الحلول العالمية المحدودة",
    "testimonial2.text": "العمل مع إسلام كان ممتعًا. لقد فهم احتياجات أعمالنا بشكل مثالي وترجمها إلى تطبيق ويب ممتاز. أوصي به بشدة!",
    
    // Testimonial 3
    "testimonial3.name": "جينيفر لي",
    "testimonial3.company": "وكالة الإبداع الرقمية",
    "testimonial3.text": "ساعدتنا خبرة إسلام التقنية وإبداعه في إطلاق منصتنا بنجاح. إنه سريع الاستجابة ومحترف ويقدم عملًا عالي الجودة.",
    
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
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.madeWith": "صنع بكل ❤️",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "ar" ? "rtl" : ""}>
        {children}
      </div>
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
