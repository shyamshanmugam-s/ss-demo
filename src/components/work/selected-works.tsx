import { useRef, useState, type FC } from "react";
import { SELECTED_PROJECTS } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectProgress } from "./project-progress";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { type Project } from "@/types";

interface SelectedWorksProps {
  onOpenCommission: () => void;
  onSelectProject?: (project: Project) => void;
}

export const SelectedWorks: FC<SelectedWorksProps> = ({
  onOpenCommission,
  onSelectProject,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // GSAP Sticky-Stack Choreography
  useGSAPContext((_ctx) => {
    if (prefersReducedMotion || typeof window === "undefined" || window.innerWidth < 1024) {
      return;
    }

    const cardElements = gsap.utils.toArray<HTMLElement>(".work-stack-card");
    if (!cardElements.length) return;

    cardElements.forEach((card, i) => {
      // Track active project index for progress indicator
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveProjectIndex(i),
        onEnterBack: () => setActiveProjectIndex(i),
      });

      // Pin every card except the last one
      if (i < cardElements.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85px",
          endTrigger: cardElements[cardElements.length - 1],
          end: "top 85px",
          pin: true,
          pinSpacing: false,
        });

        // Receding interpolation driven by next card arrival
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.25,
          yPercent: -4,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: cardElements[i + 1],
            start: "top bottom",
            end: "top 85px",
            scrub: 0.5,
          },
        });
      }
    });
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Selected Works & Portfolio Showcase"
    >
      {/* Anchor alias for compatibility */}
      <span id="works" className="sr-only" aria-hidden="true" />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>01 &middot; SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              DIGITAL EXPERIENCES
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                BUILT ACROSS INDUSTRIES.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              A selection of business websites, digital experiences and industry-focused concepts developed by SS STUDIO.
            </p>
          </div>

          {/* Sticky Progress Indicator (Desktop) */}
          <div className="hidden sm:block">
            <ProjectProgress
              currentIndex={activeProjectIndex}
              total={SELECTED_PROJECTS.length}
            />
          </div>
        </div>
      </div>

      {/* Cards Presentation Container */}
      <div ref={cardsContainerRef} className="relative max-w-6xl mx-auto">
        {SELECTED_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={`work-stack-card ${
              !prefersReducedMotion && SELECTED_PROJECTS.length > 1
                ? "lg:sticky lg:top-24 lg:min-h-[calc(100vh-8rem)] lg:flex lg:items-center lg:justify-center mb-12 lg:mb-0"
                : "mb-12"
            }`}
          >
            <ProjectCard
              project={project}
              index={index}
              total={SELECTED_PROJECTS.length}
              onOpenCommission={onOpenCommission}
              onSelectProject={onSelectProject}
              isSticky={!prefersReducedMotion && SELECTED_PROJECTS.length > 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
