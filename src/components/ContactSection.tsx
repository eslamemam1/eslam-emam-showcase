
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: `Thank you ${formData.name}, I'll get back to you soon!`,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" className="section section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-portfolio-gray max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal className="delay-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-green/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-portfolio-gray">eslam.emam@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-portfolio-green/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-portfolio-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-portfolio-green/10 p-3 rounded-full hover:bg-portfolio-green hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-200">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    {t('contact.nameLabel')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    {t('contact.emailLabel')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    {t('contact.subjectLabel')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    {t('contact.messageLabel')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-green hover:bg-portfolio-green/90 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {t('contact.submit')} <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
