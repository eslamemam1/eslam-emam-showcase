
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from './ScrollReveal';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.description'),
      tech: t('project1.tech'),
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3',
      projectUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.description'),
      tech: t('project2.tech'),
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
      projectUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.description'),
      tech: t('project3.tech'),
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3',
      projectUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="section section-dark">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} className={`delay-${index * 100}`}>
              <Card className="bg-portfolio-dark border border-white/10 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-6 pb-3">
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/60 mt-2">
                    {project.tech}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-3 pb-6 flex-grow">
                  <p className="text-white/80">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                  <Button 
                    variant="default" 
                    className="bg-portfolio-green hover:bg-portfolio-green/90 flex-1"
                    onClick={() => window.open(project.projectUrl, '_blank')}
                  >
                    {t('projects.visit')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10 flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    {t('projects.github')}
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12 md:mt-16">
          <Button 
            variant="outline" 
            className="border-white/20 hover:bg-white/10 text-white px-8 py-3"
            onClick={() => window.location.href = '#'}
          >
            {t('projects.viewAll')}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
