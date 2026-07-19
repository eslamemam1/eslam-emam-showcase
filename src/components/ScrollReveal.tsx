import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 700,
  direction = "up",
}: ScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const transforms: Record<string, string> = {
      up: "translate3d(0, 28px, 0)",
      down: "translate3d(0, -28px, 0)",
      left: "translate3d(28px, 0, 0)",
      right: "translate3d(-28px, 0, 0)",
      none: "none",
    };

    node.style.opacity = "0";
    node.style.transform = transforms[direction];
    node.style.transitionProperty = "opacity, transform";
    node.style.transitionDuration = `${duration}ms`;
    node.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";
    node.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          window.setTimeout(() => {
            entry.target.classList.add("active");
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translate3d(0, 0, 0)";
          }, delay);

          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, duration, direction]);

  return (
    <div ref={sectionRef} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
