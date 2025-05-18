
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 500,
  direction = 'up'
}: ScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay for staggered animations
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      // Add custom animation styles based on direction
      if (direction === 'up') {
        sectionRef.current.style.transform = 'translateY(30px)';
      } else if (direction === 'down') {
        sectionRef.current.style.transform = 'translateY(-30px)';
      } else if (direction === 'left') {
        sectionRef.current.style.transform = 'translateX(30px)';
      } else if (direction === 'right') {
        sectionRef.current.style.transform = 'translateX(-30px)';
      }
      
      // Set custom duration
      sectionRef.current.style.transitionDuration = `${duration}ms`;
      
      // Start observing
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, duration, direction]);

  return (
    <div 
      ref={sectionRef} 
      className={`reveal transition-all ease-out ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
