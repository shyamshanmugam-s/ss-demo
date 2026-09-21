import { useRef, useState, type FC } from "react";
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

const CAPABILITY_ROWS: CapabilityItem[] = [
  {
    id: "website-design",
    number: "01",
    title: "WEBSITE DESIGN",
    category: "EDITORIAL & SPATIAL SYSTEMS",
    description:
      "Bespoke visual identity and art direction for modern businesses. Translating complex commercial offerings into clear typographic hierarchy, generous whitespace, and memorable digital impressions.",
    deliverables: [
      "Art Direction & Design Systems",
      "Typography & Layout Hierarchy",
      "Responsive Spatial Layouts",
      "Interactive Wireframing & Prototyping",
    ],
    techFocus: "Figma · Design Systems · Spatial Composition",
  },
  {
    id: "frontend-development",
    number: "02",
    title: "FRONTEND DEVELOPMENT",
    category: "ARCHITECTURE & PERFORMANCE",
    description:
      "Modular, accessible, and clean codebase architecture built with React, TypeScript, Tailwind CSS, and Vite for fast load speeds and long-term code maintainability.",
    deliverables: [
      "Type-Safe Component Architecture",
      "Fast Build & Development Workflow",
      "Semantic & Accessible HTML5 / ARIA",
      "Responsive & Maintainable Code Structure",
    ],
    techFocus: "React · TypeScript · Tailwind CSS · Vite",
  },
  {
    id: "interactive-experiences",
    number: "03",
    title: "INTERACTIVE EXPERIENCES",
    category: "MOTION & CREATIVE WEBGL",
    description:
      "Choreographed animations and 3D scenes using GSAP, ScrollTrigger, Lenis smooth scrolling, and Three.js where motion heightens clarity and narrative engagement.",
    deliverables: [
      "GSAP Scroll-Driven Choreography",
      "Lenis Smooth Scrolling Sync",
      "Three.js / WebGL Spatial Elements",
      "Tactile Magnetic & Micro-Interactions",
    ],
    techFocus: "GSAP · ScrollTrigger · Lenis · Three.js",
  },
  {
    id: "ai-web-development",
    number: "04",
    title: "AI × WEB DEVELOPMENT",
    category: "INTELLIGENT WORKFLOWS",
    description:
      "Modern engineering workflows leveraging AI systems to accelerate architecture synthesis, automate comprehensive edge-case testing, and integrate intelligent web features.",
    deliverables: [
      "Accelerated Frontend Architecture",
      "Automated Quality & Edge-Case Verification",
      "Intelligent Inquiry & Workflow Logic",
      "AI-Assisted Prototyping & Iteration",
    ],
    techFocus: "AI Workflows · Automation · Rapid Prototyping",
  },
  {
    id: "business-websites",
    number: "05",
    title: "BUSINESS WEBSITES",
    category: "COMMERCIAL PLATFORMS",
    description:
      "Commercial platforms engineered for enterprises, manufacturers, architectural studios, and service brands to clearly communicate capabilities and capture qualified inquiries.",
    deliverables: [
      "Information Architecture for B2B / B2C",
      "Product & Specification Catalogs",
      "Commercial RFQ & Inquiry Funnels",
      "Technical Credibility & Presentation",
    ],
    techFocus: "Commercial Portals · RFQ Systems · Catalogs",
  },
  {
    id: "digital-product-experiences",
    number: "06",
    title: "DIGITAL PRODUCT EXPERIENCES",
    category: "INTERACTIVE TOOLS & CONFIGURATORS",
    description:
      "Interactive guided finders, selectors, calculators, and immersive product tools that simplify complex decisions and turn passive visitors into engaged buyers.",
    deliverables: [
      "Guided Product Selectors & Finders",
      "Dynamic Filtration & Comparison Tools",
      "Interactive Schematic Overviews",
      "Data-Driven Presentation Modals",
    ],
    techFocus: "Custom Wizards · Calculators · Spatial Tools",
  },
];

export const CapabilitiesSection: FC<CapabilitiesSectionProps> = ({
  onOpenCommission,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".capability-row", {
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
              End-to-end digital craft tailored to commercial objectives, aesthetic standards, and modern performance expectations.
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

        {/* Editorial Interactive Rows */}
        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]" role="list">
          {CAPABILITY_ROWS.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                role="listitem"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`capability-row group relative transition-all duration-300 py-8 sm:py-10 px-3 sm:px-6 cursor-pointer ${
                  isHovered ? "bg-[#0a0d14]/70" : "bg-transparent"
                }`}
                data-cursor="EXPLORE"
              >
                {/* Subtle Left Accent Line on Hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 bg-accent-cyan transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                  aria-hidden="true"
                />

                {/* Main Row Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Number & Title */}
                  <div className="lg:col-span-5 space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-xs font-bold tracking-widest transition-colors ${
                          isHovered ? "text-accent-cyan" : "text-muted-foreground/80"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                        {item.category}
                      </span>
                    </div>
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-display transition-all duration-300 flex items-center gap-3 ${
                        isHovered ? "text-accent-cyan translate-x-2" : "text-foreground"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isHovered ? "opacity-100 translate-x-0.5 -translate-y-0.5 text-accent-cyan" : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </h3>
                    <div className="text-[11px] font-mono text-muted-foreground/60 flex items-center gap-1.5 pt-0.5">
                      <Sparkles className="w-3 h-3 text-accent-cyan/60" />
                      <span>{item.techFocus}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4 space-y-2">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-3 lg:border-l lg:border-white/5 lg:pl-6 space-y-1.5">
                    <div className="text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase mb-2">
                      KEY DELIVERABLES
                    </div>
                    {item.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-muted-foreground"
                      >
                        <CheckCircle2
                          className={`w-3 h-3 shrink-0 transition-colors ${
                            isHovered ? "text-accent-cyan" : "text-muted-foreground/40"
                          }`}
                        />
                        <span className="text-[11px]">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
