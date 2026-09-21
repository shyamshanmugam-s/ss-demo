import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CapabilitiesSectionProps {
  onOpenCommission: () => void;
}

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  techFocus: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "websites",
    number: "01",
    title: "WEBSITES",
    category: "DIGITAL PRESENCE & BRAND",
    description:
      "Premium marketing websites, portfolios, landing pages and digital experiences.",
    deliverables: [
      "Bespoke Marketing Websites",
      "High-End Studio Portfolios",
      "Interactive Landing Pages",
      "Editorial Layout Systems",
    ],
    techFocus: "React · TypeScript · Tailwind CSS · Vite",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI AUTOMATION",
    category: "INTELLIGENT PIPELINES",
    description:
      "Lead generation, research workflows, data processing, outreach systems and business automation.",
    deliverables: [
      "Lead Discovery & Qualification",
      "Deep Research Workflows",
      "Data Processing Pipelines",
      "Automated Outreach Systems",
    ],
    techFocus: "AI APIs · Prompt Engineering · n8n · Webhooks",
  },
  {
    id: "ai-powered-systems",
    number: "03",
    title: "AI-POWERED SYSTEMS",
    category: "AI INTERFACES & TOOLS",
    description:
      "AI-assisted tools, intelligent interfaces, internal dashboards and workflow systems.",
    deliverables: [
      "Intelligent Web Interfaces",
      "AI-Assisted Workflow Tools",
      "Internal Operations Dashboards",
      "Structured Extraction Systems",
    ],
    techFocus: "LLM Orchestration · Tool Calling · Data Pipelines",
  },
  {
    id: "business-web-apps",
    number: "04",
    title: "BUSINESS WEB APPS",
    category: "APPLICATION ARCHITECTURE",
    description:
      "Interactive dashboards, forms, calculators, portals and custom web applications.",
    deliverables: [
      "Interactive Metric Dashboards",
      "Custom Calculators & Wizards",
      "Client & Partner Portals",
      "Multi-Step Inquiry Funnels",
    ],
    techFocus: "React · REST APIs · State Architecture · UI Systems",
  },
  {
    id: "conversion-systems",
    number: "05",
    title: "CONVERSION SYSTEMS",
    category: "ACQUISITION & CONVERSION",
    description:
      "Landing pages, lead capture flows, enquiry systems and CTA-driven digital experiences.",
    deliverables: [
      "High-Conversion Landing Pages",
      "Structured Lead Capture Flows",
      "Commercial RFQ & Quote Forms",
      "Action-Oriented User Journeys",
    ],
    techFocus: "Conversion UI · Form Validation · Analytics Sync",
  },
  {
    id: "digital-experiences",
    number: "06",
    title: "DIGITAL EXPERIENCES",
    category: "CREATIVE MOTION & 3D",
    description:
      "Motion design, interaction systems, GSAP experiences and editorial interfaces.",
    deliverables: [
      "GSAP ScrollTrigger Choreography",
      "Lenis Smooth Scroll Sync",
      "Three.js / WebGL Visual Anchors",
      "Tactile Micro-Interactions",
    ],
    techFocus: "GSAP · ScrollTrigger · Lenis · Three.js",
  },
];

export const CapabilitiesSection: FC<CapabilitiesSectionProps> = ({
  onOpenCommission,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".capability-card", {
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
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Capabilities and Services"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>02 &middot; CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              WHAT I BUILD
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              End-to-end digital craft and AI automation tailored to commercial objectives, aesthetic standards, and modern operational expectations.
            </p>
          </div>

          <Button
            type="button"
            onClick={onOpenCommission}
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex font-mono text-xs border-white/15 hover:border-accent-cyan/50 text-muted-foreground hover:text-foreground gap-1.5 shrink-0"
            data-cursor="OPEN"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Responsive Capability Grid: 2 columns on lg / 3 columns on xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {CAPABILITIES.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="capability-card group relative p-6 sm:p-7 rounded-2xl bg-[#07090e]/90 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              data-cursor="EXPLORE"
            >
              {/* Top Row: Index & Category */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-accent-cyan font-bold tracking-widest">{item.number}</span>
                    <span className="text-white/20">&middot;</span>
                    <span className="text-[10px] tracking-wider text-muted-foreground/70 uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-accent-cyan opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Deliverables & Tech Focus */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase">
                    CORE DELIVERABLES
                  </div>
                  <div className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-muted-foreground/90"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent-cyan/70 shrink-0" />
                        <span className="text-[11px] leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[10px] font-mono text-accent-cyan/80">
                  <Sparkles className="w-3 h-3 text-accent-cyan/60 shrink-0" />
                  <span className="truncate">{item.techFocus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
