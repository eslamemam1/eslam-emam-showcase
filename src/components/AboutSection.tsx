
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  const { t } = useLanguage();
  
  // Skills data
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 65 },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="section-inner">
        <ScrollReveal>
          <h2 className="section-title text-center">
            <span className="text-portfolio-dark">About</span>
            <span className="text-portfolio-green"> Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-12 md:mt-16">
          {/* About Text */}
          <div className="space-y-6 md:space-y-8">
            <ScrollReveal direction="right" delay={200}>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-dark">
                Full Stack Engineer with a passion for creating impactful applications
              </h3>
              
              <p className="text-portfolio-gray mb-6">
                With over 5 years of experience in web development, I specialize in building
                scalable and performant applications using modern technologies. My goal is to
                create software that not only meets technical requirements but also delivers
                an exceptional user experience.
              </p>
              
              <p className="text-portfolio-gray mb-8">
                I'm proficient in front-end frameworks like React and Vue.js, as well as
                back-end technologies like Node.js and Python. I have experience with database
                systems including MongoDB, PostgreSQL, and Firebase.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="#projects" 
                  className="bg-portfolio-green hover:bg-portfolio-green/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  View My Work
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="border border-portfolio-gray/30 hover:bg-portfolio-gray/10 text-portfolio-gray px-6 py-3 rounded-md transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Skills */}
          <div className="mt-8 md:mt-0">
            <ScrollReveal direction="left" delay={400}>
              <h3 className="text-2xl font-bold mb-8 text-portfolio-dark">
                My Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-portfolio-dark">{skill.name}</span>
                      <span className="text-portfolio-green">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-portfolio-gray/20 rounded-full h-2.5">
                      <div 
                        className="bg-portfolio-green h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
