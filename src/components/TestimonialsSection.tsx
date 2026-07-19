import { useLanguage } from "../contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollReveal from "./ScrollReveal";
import { asset } from "@/lib/assets";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t("testimonial1.name"),
      company: t("testimonial1.company"),
      text: t("testimonial1.text"),
      logo: asset("imges/logos/hurghada-vibes.png"),
    },
    {
      id: 2,
      name: t("testimonial2.name"),
      company: t("testimonial2.company"),
      text: t("testimonial2.text"),
      logo: asset("imges/logos/caf-sports.svg"),
    },
    {
      id: 3,
      name: t("testimonial3.name"),
      company: t("testimonial3.company"),
      text: t("testimonial3.text"),
      logo: asset("imges/logos/3lamko.png"),
    },
  ];

  return (
    <section id="testimonials" className="section section-light">
      <div className="section-inner">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">{t("testimonials.title")}</h2>
            <p className="text-lg text-portfolio-gray max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              className={`delay-${index * 100}`}
            >
              <Card className="bg-white shadow-lg h-full flex flex-col border border-black/5">
                <CardHeader className="pb-2 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-portfolio-light p-2">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-lg font-semibold">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="truncate">
                        {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-4 p-6">
                  <div className="text-portfolio-gray">
                    <svg
                      className="w-8 h-8 text-portfolio-green/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h6V14h4c0-3.3-2.7-6-6-6zm16 0c-3.3 0-6 2.7-6 6v10h6V14h4c0-3.3-2.7-6-6-6z" />
                    </svg>
                    <p>{testimonial.text}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 p-6">
                  <div className="flex justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
