import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhySSSectionProps {
  onOpenCommission?: () => void;
}

interface PrincipleItem {
  number: string;
  label: string;
  positioning: string;
  supportingPoints: string[];
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    label: "BUSINESS FIRST",
    positioning:
      "We start with the business, audience and objective before deciding what the website should look like.",
    supportingPoints: [
      "Business context before interface",
      "Audience before assumptions",
      "Clear information architecture",
      "Purposeful conversion paths",
    ],
  },
  {
    number: "02",
    label: "BESPOKE BY DEFAULT",
    positioning:
      "Each experience is shaped around the identity, content and requirements of the business rather than forced into a generic template.",
    supportingPoints: [
      "Custom visual direction",
      "Tailored component systems",
      "Industry-specific content structure",
      "Distinct interaction language",
    ],
  },
  {
    number: "03",
    label: "ENGINEERED TO LAST",
    positioning:
      "Design is backed by maintainable frontend architecture, responsive implementation and deliberate performance engineering.",
    supportingPoints: [
      "Component-based architecture",
      "Responsive systems",
      "Performance-conscious development",
      "Maintainable implementation",
    ],
  },
  {
    number: "04",
    label: "INTELLIGENCE WHEN IT MATTERS",
    positioning:
      "AI and automation are introduced when they solve a real business or user problem — not simply because the technology exists.",
    supportingPoints: [
      "AI product experiences",
      "Intelligent discovery",
      "Lead qualification",
      "Workflow automation",
    ],
  },
];

export const WhySSSection: FC<WhySSSectionProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".why-ss-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    });

    gsap.from(".why-ss-micro", {
      scrollTrigger: {
        trigger: ".why-ss-micro",
        start: "top 85%",
      },
      opacity: 0,
      y: 16,
      duration: 0.8,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAction = () => {
    if (onOpenCommission) {
      onOpenCommission();
    } else {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-ss"
      className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Why SS Studio - Working Principles & Craft"
    >
      {/* Anchor alias for compatibility */}
      <span id="about" className="sr-only" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>06 &middot; WHY SS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              BUILT WITH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                INTENT.
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Every project starts with the business, not a template — then strategy, design and engineering are shaped around what the experience needs to achieve.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <Button
              type="button"
              onClick={handleAction}
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

        {/* Four Positioning Principles: 2x2 Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-14">
          {PRINCIPLES.map((principle) => (
            <article
              key={principle.number}
              className="why-ss-card group relative p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-7 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="text-accent-cyan font-bold tracking-widest text-sm">
                      {principle.number}
                    </span>
                    <span className="text-white/20">&middot;</span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground uppercase font-medium">
                      WORKING PRINCIPLE
                    </span>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
                    {principle.label}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    {principle.positioning}
                  </p>
                </div>
              </div>

              {/* Supporting Points Sub-Grid */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-accent-cyan" />
                  <span>KEY PRINCIPLE FOCUS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {principle.supportingPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan/80 shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-muted-foreground leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Restrained Micro Principle Banner */}
        <div className="why-ss-micro rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#07090e]/90 p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-8 sm:mt-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent-cyan shrink-0 hidden sm:block" />
            <div className="space-y-0.5">
              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.14em] uppercase text-foreground">
                NO TEMPLATES &middot; NO UNNECESSARY COMPLEXITY
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">
                Just the right system for the business.
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
            SS STUDIO &middot; METHODOLOGY STANDARDS
          </div>
        </div>

        {/* Section Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 sm:mt-12 lg:mt-14 pt-8 border-t border-white/[0.07]">
          <div className="text-xs font-mono text-muted-foreground">
            SS STUDIO &middot; BUSINESS FIRST &middot; BESPOKE ARCHITECTURE
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="button"
              onClick={handleScrollToWork}
              variant="outline"
              size="default"
              className="font-mono text-xs tracking-wider border-white/15 hover:border-accent-cyan/40 text-muted-foreground hover:text-foreground gap-2 w-full sm:w-auto justify-center"
              data-cursor="EXPLORE"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
            </Button>

            <Button
              type="button"
              onClick={handleAction}
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
