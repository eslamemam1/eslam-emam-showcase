
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
    <section id="projects" className="section section-dark py-24">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/60">
                    {project.tech}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-white/80">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between space-x-2">
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

        <ScrollReveal className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-white/20 hover:bg-white/10 text-white px-8"
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
