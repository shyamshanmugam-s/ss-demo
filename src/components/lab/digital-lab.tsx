import { useRef, useState, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import {
  Code2,
  Cpu,
  Terminal,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DigitalLabProps {
  onOpenCommission: () => void;
}

interface TechGroup {
  id: string;
  number: string;
  category: string;
  tagline: string;
  icon: typeof Code2;
  technologies: { name: string; role: string }[];
  summary: string;
}

const TECH_MATRIX: TechGroup[] = [
  {
    id: "frontend",
    number: "01",
    category: "FRONTEND",
    tagline: "Component Systems & Modern Web UI",
    icon: Code2,
    summary:
      "Type-safe component architecture engineered for modular scalability, rapid rendering, and semantic clarity.",
    technologies: [
      { name: "React", role: "Component Architecture" },
      { name: "TypeScript", role: "Strict Type Safety" },
      { name: "Vite", role: "Fast Tooling & Bundling" },
      { name: "Tailwind CSS", role: "Design Token Utility" },
      { name: "GSAP", role: "Timeline & Scroll Motion" },
      { name: "Responsive UI", role: "Cross-Device Layouts" },
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    category: "AI & AUTOMATION",
    tagline: "Intelligent Workflows & Agentic Systems",
    icon: Cpu,
    summary:
      "Integrating multimodal AI APIs and workflow orchestrators to automate research, qualification, and data pipelines.",
    technologies: [
      { name: "AI APIs", role: "LLM Inference & Tooling" },
      { name: "Prompt Engineering", role: "Structured Output Extraction" },
      { name: "n8n", role: "Workflow Orchestration" },
      { name: "Workflow Automation", role: "Trigger & Action Chains" },
      { name: "Lead Generation", role: "Target Discovery & Scoring" },
      { name: "AI Agents", role: "Autonomous Task Execution" },
    ],
  },
  {
    id: "web-systems",
    number: "03",
    category: "WEB SYSTEMS",
    tagline: "APIs, Pipelines & Deployment Delivery",
    icon: Terminal,
    summary:
      "Robust backend integrations, form validation pipelines, structured dashboards, and global edge delivery.",
    technologies: [
      { name: "REST APIs", role: "Endpoint Communication" },
      { name: "Forms", role: "Validation & Capture Logic" },
      { name: "Dashboards", role: "Operational Metrics & UI" },
      { name: "Data Workflows", role: "Transformation & Sync" },
      { name: "Git / GitHub", role: "Version & Release Control" },
      { name: "Vercel", role: "Global Edge Infrastructure" },
    ],
  },
  {
    id: "design-experience",
    number: "04",
    category: "DESIGN & EXPERIENCE",
    tagline: "Spatial Hierarchy & Performance Tuning",
    icon: Layers,
    summary:
      "Disciplined editorial typography, kinetic physics, and micro-interactions optimized for sub-second page performance.",
    technologies: [
      { name: "UI Architecture", role: "Design System Foundations" },
      { name: "Motion Design", role: "Choreographed Transitions" },
      { name: "Interaction Design", role: "Tactile Micro-States" },
      { name: "Responsive Design", role: "Adaptive Multi-Viewport" },
      { name: "Visual Systems", role: "Color & Typography Scales" },
      { name: "Performance", role: "Core Web Vitals & 60fps" },
    ],
  },
];

export const DigitalLab: FC<DigitalLabProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".matrix-card",
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
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Technical Expertise and Stack Architecture"
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
              Full-spectrum technical capabilities spanning modern frontend engineering, AI automation workflows, web systems, and high-performance interaction design.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-elevated/70 border border-white/[0.08] text-xs font-mono text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>FULL-WIDTH TECHNICAL MATRIX</span>
          </div>
        </div>

        {/* Full-Width 4-Column Technical Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {TECH_MATRIX.map((group, idx) => {
            const Icon = group.icon;
            const isActive = activeGroupIndex === idx;

            return (
              <div
                key={group.id}
                role="listitem"
                onMouseEnter={() => setActiveGroupIndex(idx)}
                className={`matrix-card group relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isActive
                    ? "bg-[#0c1018] border-accent-cyan/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                    : "bg-[#07090e]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#090c13]"
                }`}
                data-cursor="SELECT"
              >
                {/* Category Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent-cyan font-bold tracking-widest">{group.number}</span>
                      <span className="text-white/20">&middot;</span>
                      <span className="text-[10px] tracking-wider text-muted-foreground/70 uppercase">
                        DOMAIN
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-accent-cyan/80 group-hover:text-accent-cyan transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
                      {group.category}
                    </h3>
                    <p className="text-[11px] font-mono text-muted-foreground/70 mt-1">
                      {group.tagline}
                    </p>
                  </div>
                </div>

                {/* Technology List Rows */}
                <div className="space-y-2 py-2 border-y border-white/[0.06]">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/item flex items-center justify-between p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-accent-cyan/30 transition-all duration-200"
                    >
                      <span className="font-mono text-xs font-medium text-foreground group-hover/item:text-accent-cyan transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground/60 text-right">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Summary / Role */}
                <div className="pt-1">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {group.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Assurance Console Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#080b10] border border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-bold tracking-wider">ENGINEERING STANDARDS</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Every system is built with strict TypeScript type verification, zero-runtime errors, responsive layouts, hardware-accelerated animations, and continuous automated quality gates.
            </p>
          </div>

          <Button
            type="button"
            onClick={onOpenCommission}
            variant="default"
            size="sm"
            className="font-mono text-xs tracking-wider font-semibold gap-2 bg-accent-cyan text-void hover:bg-accent-cyan/90 h-10 px-5 shrink-0"
            data-cursor="OPEN"
          >
            <span>DISCUSS TECHNICAL STACK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
