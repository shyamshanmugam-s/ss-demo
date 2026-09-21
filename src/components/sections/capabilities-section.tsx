import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CapabilitiesSectionProps {
  onOpenCommission: () => void;
}

interface ServicePillar {
  id: string;
  number: string;
  title: string;
  category: string;
  positioning: string;
  focusAreas: string[];
  typicalDeliverables: string;
}

const SERVICES: ServicePillar[] = [
  {
    id: "strategy",
    number: "01",
    title: "STRATEGY",
    category: "FOUNDATION & DIRECTION",
    positioning:
      "We translate business goals into a clear digital direction before anything is designed or built.",
    focusAreas: [
      "Business & audience research",
      "Digital positioning",
      "Information architecture",
      "Conversion strategy",
      "User journeys",
      "Content structure",
    ],
    typicalDeliverables:
      "Research · Strategy · Site Architecture · Conversion Pathways · Content Direction",
  },
  {
    id: "design",
    number: "02",
    title: "DESIGN",
    category: "IDENTITY & INTERFACE",
    positioning:
      "Distinctive digital identities and interfaces designed around the character of the business.",
    focusAreas: [
      "UI / UX design",
      "Design systems",
      "Art direction",
      "Visual storytelling",
      "Interaction design",
      "Motion direction",
    ],
    typicalDeliverables:
      "Interface Systems · Visual Direction · Responsive Layouts · Interaction Patterns · Motion Language",
  },
  {
    id: "development",
    number: "03",
    title: "DEVELOPMENT",
    category: "ENGINEERING & PERFORMANCE",
    positioning:
      "High-performance websites and interactive experiences engineered for modern browsers and devices.",
    focusAreas: [
      "React / TypeScript",
      "Responsive development",
      "Performance engineering",
      "Interactive experiences",
      "3D / WebGL where appropriate",
      "Technical SEO foundations",
    ],
    typicalDeliverables:
      "Production-Ready Frontend · Responsive Systems · Performance-Focused Builds · Interactive Experiences · Scalable Architecture",
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI & AUTOMATION",
    category: "INTELLIGENT SYSTEMS",
    positioning:
      "Intelligent digital systems that reduce repetitive work, improve discovery and connect business workflows.",
    focusAreas: [
      "AI-powered website experiences",
      "Product / service finders",
      "Lead qualification systems",
      "Workflow automation",
      "AI assistants",
      "Business integrations",
    ],
    typicalDeliverables:
      "AI Product Experiences · Lead Systems · Qualification Workflows · Automated Operations · Business Intelligence Interfaces · API / Workflow Integrations",
  },
];

export const CapabilitiesSection: FC<CapabilitiesSectionProps> = ({
  onOpenCommission,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".service-pillar-card",
      {
        opacity: 0,
        y: 24,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, sectionRef, [prefersReducedMotion]);

  const handleScrollToSystems = () => {
    const systemsSection = document.querySelector("#systems");
    if (systemsSection) {
      systemsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Services and Core Capabilities"
    >
      {/* Anchor alias for compatibility */}
      <span id="capabilities" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>03 &middot; SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              FROM STRATEGY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                TO SYSTEMS.
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              We combine business thinking, visual design and engineering to create digital experiences that are built to perform.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <Button
              type="button"
              onClick={onOpenCommission}
              variant="outline"
              size="sm"
              className="font-mono text-xs border-white/15 hover:border-accent-cyan/50 text-muted-foreground hover:text-foreground gap-1.5"
              data-cursor="OPEN"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Four Core Service Pillars Grid (2x2 Layout on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-14">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="service-pillar-card group relative p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Pillar Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="text-accent-cyan font-bold tracking-widest text-sm">
                      {service.number}
                    </span>
                    <span className="text-white/20">&middot;</span>
                    <span className="text-[10px] sm:text-[11px] tracking-wider text-muted-foreground/80 uppercase font-medium">
                      {service.category}
                    </span>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {service.positioning}
                  </p>
                </div>
              </div>

              {/* Focus Areas Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-accent-cyan" />
                  <span>CORE FOCUS AREAS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan/80 shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-muted-foreground leading-snug">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Deliverables Footnote */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                  TYPICAL DELIVERABLES
                </div>
                <div className="font-mono text-xs text-muted-foreground leading-relaxed">
                  {service.typicalDeliverables}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 sm:mt-12 lg:mt-14 pt-8 border-t border-white/[0.07]">
          <div className="text-xs font-mono text-muted-foreground">
            SS STUDIO &middot; STRATEGY &middot; DESIGN &middot; DEVELOPMENT &middot; AI
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="button"
              onClick={handleScrollToSystems}
              variant="outline"
              size="default"
              className="font-mono text-xs tracking-wider border-white/15 hover:border-accent-cyan/40 text-muted-foreground hover:text-foreground gap-2 w-full sm:w-auto justify-center"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE DIGITAL SYSTEMS</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
            </Button>

            <Button
              type="button"
              onClick={onOpenCommission}
              variant="default"
              size="default"
              className="font-mono text-xs tracking-wider bg-accent-cyan hover:bg-accent-cyan/90 text-void font-bold gap-2 w-full sm:w-auto justify-center"
              data-cursor="OPEN"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection = CapabilitiesSection;
