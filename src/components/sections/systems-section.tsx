import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight, Cpu, Layers, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SystemsSectionProps {
  onOpenCommission: () => void;
}

interface SystemBlock {
  id: string;
  number: string;
  title: string;
  pipeline: string;
  description: string;
  icon: typeof Cpu;
  workflowSteps: string[];
  techStack: string[];
}

const SELECTED_SYSTEMS: SystemBlock[] = [
  {
    id: "ai-lead-engine",
    number: "01",
    title: "AI LEAD ENGINE",
    pipeline: "RESEARCH · QUALIFICATION · AUTOMATION",
    description:
      "A workflow designed to discover businesses, analyze their digital presence, qualify opportunities and prepare personalized outreach.",
    icon: Cpu,
    workflowSteps: [
      "Industry discovery & company data extraction",
      "Digital presence analysis & opportunity audit",
      "Custom ICP qualification scoring logic",
      "Personalized outreach synthesis & CRM sync",
    ],
    techStack: ["AI APIs", "Prompt Engineering", "n8n", "Data Pipelines"],
  },
  {
    id: "ai-web-production",
    number: "02",
    title: "AI WEB PRODUCTION",
    pipeline: "RESEARCH · DESIGN · DEVELOPMENT · QA",
    description:
      "A structured workflow for turning an industry or business brief into a production-ready digital experience.",
    icon: Workflow,
    workflowSteps: [
      "Brief synthesis & information architecture",
      "Art direction & spatial system modeling",
      "Type-safe component & animation build",
      "Automated cross-device regression QA",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: "business-automation",
    number: "03",
    title: "BUSINESS AUTOMATION",
    pipeline: "DATA · AI · WORKFLOWS · ACTIONS",
    description:
      "Automated workflows connecting business data, AI processing and operational actions.",
    icon: Layers,
    workflowSteps: [
      "Webhook ingestion & event listeners",
      "AI text extraction & structured parsing",
      "Conditional business routing logic",
      "Multi-channel automated execution",
    ],
    techStack: ["n8n", "REST APIs", "Webhooks", "JSON Schema"],
  },
  {
    id: "digital-experience-engine",
    number: "04",
    title: "DIGITAL EXPERIENCE ENGINE",
    pipeline: "REACT · TYPESCRIPT · GSAP · PERFORMANCE",
    description:
      "High-end interactive interfaces engineered around visual systems, motion and responsive architecture.",
    icon: Sparkles,
    workflowSteps: [
      "Physics-based scroll velocity tracking",
      "Lenis virtual smooth scroll synchronization",
      "WebGL spatial anchors & shader effects",
      "Sub-second edge bundle optimization",
    ],
    techStack: ["React 18+", "TypeScript", "GSAP 3", "Three.js"],
  },
];

export const SystemsSection: FC<SystemsSectionProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".system-block", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Selected Systems and Workflows"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>05 &middot; SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              SELECTED SYSTEMS
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Beyond websites, I design AI-assisted workflows and digital systems that connect interfaces, data, automation and business operations.
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
            <span>INQUIRE ABOUT SYSTEMS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* 4 Large Editorial System Blocks: 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
          {SELECTED_SYSTEMS.map((system) => {
            const Icon = system.icon;

            return (
              <div
                key={system.id}
                role="listitem"
                className="system-block group relative p-7 sm:p-9 rounded-2xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                data-cursor="EXPLORE"
              >
                {/* Header Row */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-accent-cyan tracking-widest">
                        SYSTEM / {system.number}
                      </span>
                      <span className="text-white/20">&middot;</span>
                      <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
                        WORKFLOW ARCHITECTURE
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Pipeline */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-foreground group-hover:text-accent-cyan transition-colors">
                      {system.title}
                    </h3>
                    <div className="text-xs font-mono tracking-wider text-accent-cyan font-semibold">
                      {system.pipeline}
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {system.description}
                  </p>
                </div>

                {/* Workflow Progression Pipeline */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase">
                    SYSTEM PIPELINE PHASES
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {system.workflowSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#0c1018] border border-white/[0.04] flex items-start gap-2.5 text-xs font-mono text-muted-foreground/90 group-hover:border-white/[0.08] transition-colors"
                      >
                        <span className="text-accent-cyan font-bold text-[10px] mt-0.5">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {system.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
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
