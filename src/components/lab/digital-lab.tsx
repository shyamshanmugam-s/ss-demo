import { useRef, useState, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight, Code2, Sparkles, Layers, Box, Cpu, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DigitalLabProps {
  onOpenCommission: () => void;
}

interface CapabilityDomain {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  technologies: string[];
  icon: typeof Code2;
  description: string;
  studioStandard: string;
  architecturalPillars: string[];
  deliverables: string[];
}

const EXPERTISE_DOMAINS: CapabilityDomain[] = [
  {
    id: "frontend-engineering",
    number: "01",
    title: "FRONTEND ENGINEERING",
    subtitle: "React · TypeScript · Vite",
    technologies: ["React 18+", "TypeScript", "Vite", "Tailwind CSS", "Modern Web APIs"],
    icon: Code2,
    description:
      "Engineered on modern React and strict TypeScript, structuring modular component hierarchies, strict type contracts, and fast build and development workflows.",
    studioStandard:
      "Strict type validation, zero runtime errors, responsive layout adaptability, and semantic HTML5.",
    architecturalPillars: [
      "Type-safe component architecture",
      "Fast build & development workflow",
      "Semantic HTML5 & accessible ARIA states",
      "Maintainable, modular codebase structure",
    ],
    deliverables: [
      "Modular design system components",
      "Production-optimized client bundles",
      "Cross-device responsive layouts",
    ],
  },
  {
    id: "motion-systems",
    number: "02",
    title: "MOTION SYSTEMS",
    subtitle: "GSAP · ScrollTrigger · Lenis",
    technologies: ["GSAP 3", "ScrollTrigger", "Lenis Smooth Scroll", "CSS Transforms", "Framer Motion"],
    icon: Layers,
    description:
      "Fluid, physics-based scroll choreography synchronized with Lenis smooth scrolling. Animations are used purposefully to heighten editorial hierarchy and spatial depth.",
    studioStandard:
      "Sub-frame scroll synchronization, 60fps hardware-accelerated transforms, and full respect for user reduced-motion preferences.",
    architecturalPillars: [
      "Scroll-driven narrative choreography",
      "Lenis virtual smooth scrolling synchronization",
      "Hardware-accelerated CSS/GSAP transforms",
      "Strict prefers-reduced-motion compliance",
    ],
    deliverables: [
      "Custom scroll choreography timelines",
      "Magnetic and fluid micro-interactions",
      "Accessible reduced-motion fallbacks",
    ],
  },
  {
    id: "3d-webgl",
    number: "03",
    title: "3D / WEBGL",
    subtitle: "Three.js · WebGL",
    technologies: ["Three.js", "WebGL", "Custom Shaders", "GLTF/GLB Pipelines", "Raycasting"],
    icon: Box,
    description:
      "Spatial interactive visual anchors built with Three.js and WebGL. Monolithic geometries and subtle lighting models that reinforce brand distinction without compromising load speed.",
    studioStandard:
      "Resource cleanup & geometry disposal, responsive pixel ratios, low GPU overhead, and graceful fallback on non-WebGL devices.",
    architecturalPillars: [
      "Custom 3D geometric sculptures and monoliths",
      "Pointer and scroll-reactive orientation",
      "Optimized geometry budgets & memory disposal",
      "Subtle studio lighting & physical materials",
    ],
    deliverables: [
      "Interactive 3D hero canvas elements",
      "Spatial brand identity anchors",
      "GPU-efficient canvas render loops",
    ],
  },
  {
    id: "ai-assisted-development",
    number: "04",
    title: "AI-ASSISTED DEVELOPMENT",
    subtitle: "AI workflows · rapid iteration · automation",
    technologies: ["LLM Workflows", "Automated QA Verification", "Prompt Orchestration", "Rapid Prototyping"],
    icon: Cpu,
    description:
      "Modern development workflows utilizing AI systems to accelerate architecture synthesis, explore edge cases, automate quality audits, and build complex inquiry logic rapidly.",
    studioStandard:
      "Human-led creative direction paired with AI-accelerated code generation, test coverage verification, and continuous quality audits.",
    architecturalPillars: [
      "Accelerated prototype & architecture synthesis",
      "Automated edge-case & stress testing",
      "Intelligent workflow & inquiry logic",
      "Continuous codebase refinement cycles",
    ],
    deliverables: [
      "Rapid turnaround on complex interactive features",
      "Rigorously audited component logic",
      "Custom AI-integrated web interfaces",
    ],
  },
  {
    id: "deployment",
    number: "05",
    title: "DEPLOYMENT",
    subtitle: "Git · GitHub · Vercel",
    technologies: ["Git", "GitHub Actions", "Vercel Edge Network", "CI/CD Pipelines", "DNS & SSL"],
    icon: Rocket,
    description:
      "Production deployment pipelines ensuring immutable version control, continuous preview environments, and low-latency global edge distribution.",
    studioStandard:
      "Automated CI/CD build verification, clean commit history, zero-downtime atomic deployments, and production SSL security.",
    architecturalPillars: [
      "Structured Git branch & release management",
      "Automated build verification & lint gates",
      "Global CDN edge delivery on Vercel",
      "Production-grade security & SSL config",
    ],
    deliverables: [
      "Automated continuous deployment pipeline",
      "Global edge content delivery",
      "Immutable codebase version provenance",
    ],
  },
];

export const DigitalLab: FC<DigitalLabProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain>(
    EXPERTISE_DOMAINS[0]
  );
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".expertise-reveal", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 25,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Technical Expertise and Capabilities"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>04 &middot; EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              TECHNICAL EXPERTISE
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Capabilities-first engineering focused on architectural clarity, motion precision, and dependable web standards.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/70 border border-white/[0.08] text-xs font-mono text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>MODERN STACK ARCHITECTURE</span>
          </div>
        </div>

        {/* Editorial Capabilities Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Capability Domains List (6 Columns) */}
          <div className="lg:col-span-6 space-y-3" role="tablist" aria-label="Expertise domains">
            {EXPERTISE_DOMAINS.map((domain) => {
              const isSelected = selectedDomain.id === domain.id;
              const IconComponent = domain.icon;

              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedDomain(domain)}
                  onMouseEnter={() => setSelectedDomain(domain)}
                  className={`expertise-reveal w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 relative ${
                    isSelected
                      ? "border-accent-cyan/50 bg-[#0c1018] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                      : "border-white/[0.06] bg-[#07090e]/70 hover:border-white/15 hover:bg-[#090c13]"
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent-cyan/80">
                        {domain.number}
                      </span>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground">
                        {domain.subtitle}
                      </span>
                    </div>
                    <IconComponent
                      className={`w-4 h-4 transition-colors ${
                        isSelected ? "text-accent-cyan" : "text-muted-foreground/40"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-extrabold font-display transition-colors ${
                      isSelected ? "text-accent-cyan" : "text-foreground"
                    }`}
                  >
                    {domain.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right: Architectural Dossier Detail Panel (6 Columns) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#080b10] border border-white/[0.09] space-y-6 lg:sticky lg:top-24 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span>DOMAIN BREAKDOWN</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                {selectedDomain.number} / 05
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-accent-cyan font-bold tracking-wider">
                {selectedDomain.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-foreground">
                {selectedDomain.title}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                ARCHITECTURAL ROLE
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>

            {/* Architectural Pillars */}
            <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
              <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                CORE PILLARS
              </div>
              <div className="grid grid-cols-1 gap-2">
                {selectedDomain.architecturalPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-mono text-foreground/90 bg-[#0c1018]/80 px-3.5 py-2 rounded-lg border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/80 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Revealed on Interaction */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
              <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                TECHNOLOGY ECOSYSTEM
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDomain.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              type="button"
              onClick={onOpenCommission}
              variant="outline"
              size="sm"
              className="w-full font-mono text-xs border-white/15 hover:border-accent-cyan/50 justify-between mt-2"
              data-cursor="OPEN"
            >
              <span>DISCUSS TECHNICAL REQUIREMENTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
