
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const RecentWorkSection = () => {
  const { t } = useLanguage();

  const workItems = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      category: "Web Application",
      url: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      category: "Mobile App",
      url: "#"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      category: "Web Application",
      url: "#"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
      category: "Full Stack",
      url: "#"
    }
  ];

  return (
    <section className="section section-dark">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('recentWork.title')}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">{t('recentWork.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workItems.map((item, index) => (
            <ScrollReveal key={item.id} className={`delay-${index * 100}`}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer h-64">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transition-all duration-300 group-hover:bottom-2">
                  <div className="mb-2">
                    <span className="inline-block bg-portfolio-green/90 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-white font-medium mb-2">{item.title}</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white/20 bg-transparent hover:bg-white/10 text-white transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    {t('recentWork.viewDetails')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
