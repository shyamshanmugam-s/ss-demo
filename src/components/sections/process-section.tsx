import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { CheckCircle2 } from "lucide-react";

interface ProcessSectionProps {
  onOpenCommission: () => void;
}

interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "DISCOVER",
    tagline: "Understand the business, audience and objective",
    description:
      "A focused discovery to align on commercial objectives, target audience expectations, competitive positioning, and technical parameters.",
    deliverables: [
      "Commercial Objective Alignment",
      "Audience & Competitor Analysis",
      "Sitemap & Content Architecture",
    ],
  },
  {
    number: "02",
    title: "DIRECTION",
    tagline: "Define visual language, structure and interaction",
    description:
      "Establishing the aesthetic foundation: bespoke typography pairings, obsidian color tokens, structural pacing, and motion philosophy.",
    deliverables: [
      "Visual Identity & Art Direction",
      "Structural Wireframe Flow",
      "Interaction & Motion Direction",
    ],
  },
  {
    number: "03",
    title: "DESIGN",
    tagline: "Build the experience and interface system",
    description:
      "Crafting high-fidelity responsive interface systems across desktop, tablet, and mobile with disciplined typography and generous spacing.",
    deliverables: [
      "High-Fidelity UI Layouts",
      "Responsive Component System",
      "Interactive Micro-State Prototypes",
    ],
  },
  {
    number: "04",
    title: "DEVELOP",
    tagline: "Turn the design into a responsive working website",
    description:
      "Writing modular, type-safe, accessible code using React, TypeScript, Tailwind CSS, and GSAP ensuring robust frontend architecture.",
    deliverables: [
      "Type-Safe Modular Codebase",
      "GSAP & Lenis Smooth Motion",
      "Inquiry Funnels & Form Validation",
    ],
  },
  {
    number: "05",
    title: "REFINE",
    tagline: "Polish interaction, performance and responsive behavior",
    description:
      "Rigorous cross-device quality assurance, accessibility audits, WebGL fallbacks, and performance optimization for instant loading.",
    deliverables: [
      "Cross-Device & Viewport QA",
      "Accessibility & Keyboard Navigation",
      "Core Web Vitals Performance Tuning",
    ],
  },
  {
    number: "06",
    title: "LAUNCH",
    tagline: "Prepare the final website for deployment",
    description:
      "Production bundling, custom domain configuration, SSL setup, and seamless handover with maintainable documentation.",
    deliverables: [
      "Production Build Verification",
      "Domain & SSL Infrastructure",
      "Deployment Handover & Support",
    ],
  },
];

export const ProcessSection: FC<ProcessSectionProps> = ({
  onOpenCommission: _onOpenCommission,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".process-row", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="How I Build - Process & Methodology"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>06 &middot; PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              HOW I BUILD
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              A disciplined, transparent progression from concept discovery to production deployment.
            </p>
          </div>
        </div>

        {/* Editorial Timeline Sequence */}
        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="process-row group py-8 sm:py-10 px-2 sm:px-4 transition-colors duration-300 hover:bg-[#090c12]/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest">
                      STEP / {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display group-hover:text-accent-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    {step.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-3 space-y-1.5 lg:border-l lg:border-white/5 lg:pl-6">
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase mb-2">
                    KEY DELIVERABLES
                  </div>
                  {step.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-accent-cyan/80 shrink-0" />
                      <span className="text-[11px]">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
