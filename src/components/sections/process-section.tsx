import { useState, useRef, useEffect, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileCode2,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessSectionProps {
  onOpenCommission: () => void;
}

interface ProcessStage {
  number: string;
  title: string;
  marker: string;
  isOptional?: boolean;
  positioning: string;
  icon: typeof Compass;
  focusAreas: string[];
  typicalOutput: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    marker: "RESEARCH",
    positioning:
      "Understand the business, audience, existing digital presence and the problem the experience needs to solve.",
    icon: Compass,
    focusAreas: [
      "Business context & operational goals",
      "Audience & customer persona analysis",
      "Existing website & presence audit",
      "Competitor & sector landscape",
      "Technical constraints & scope",
    ],
    typicalOutput: "Business understanding · Research notes · Initial opportunity map",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    marker: "STRATEGY",
    positioning:
      "Turn research into a clear digital direction, information architecture and conversion path.",
    icon: Lightbulb,
    focusAreas: [
      "Website & experience strategy",
      "Information architecture & sitemap",
      "User journeys & interaction flows",
      "Content structure & narrative hierarchy",
      "Commercial CTA strategy",
      "Feature & milestone priorities",
    ],
    typicalOutput: "Strategy · Sitemap · User flows · Content architecture",
  },
  {
    number: "03",
    title: "DESIGN",
    marker: "DESIGN",
    positioning:
      "Translate the strategy into a distinctive visual and interaction system.",
    icon: Layers,
    focusAreas: [
      "Art direction & spatial aesthetics",
      "UI / UX wireframing & prototyping",
      "Editorial typography & color palettes",
      "Design systems & component tokens",
      "Responsive mobile & desktop layouts",
      "Motion direction & animation pacing",
    ],
    typicalOutput: "Visual direction · Interface system · Responsive designs · Interaction patterns",
  },
  {
    number: "04",
    title: "BUILD",
    marker: "ENGINEERING",
    positioning:
      "Engineer the experience into a responsive, performant production-ready frontend.",
    icon: FileCode2,
    focusAreas: [
      "React / TypeScript architecture",
      "Responsive frontend implementation",
      "Component structure & maintainability",
      "Performance & Core Web Vitals optimization",
      "Interactive 3D / WebGL modules where appropriate",
      "CMS & integration readiness",
    ],
    typicalOutput: "Production frontend · Responsive experience · Integrated components",
  },
  {
    number: "05",
    title: "INTELLIGENCE",
    marker: "SYSTEMS",
    isOptional: true,
    positioning:
      "Add AI, automation and connected business workflows where they create meaningful value.",
    icon: Sparkles,
    focusAreas: [
      "AI website assistants & search",
      "Product & service finders",
      "Lead qualification funnels",
      "Workflow & email automation",
      "Data synchronization logic",
      "Business API integrations",
    ],
    typicalOutput: "AI experience · Automation workflow · Qualification system · Integration layer",
  },
  {
    number: "06",
    title: "QA",
    marker: "QUALITY",
    positioning:
      "Test the experience across devices, browsers, interactions and content before release.",
    icon: ShieldCheck,
    focusAreas: [
      "Cross-browser & cross-device testing",
      "Responsive layout verification",
      "Accessibility & keyboard navigation checks",
      "Performance profiling & Lighthouse auditing",
      "Form submission & lead routing testing",
      "Content, link & claim validation",
    ],
    typicalOutput: "QA pass · Issue resolution · Release candidate",
  },
  {
    number: "07",
    title: "LAUNCH",
    marker: "RELEASE",
    positioning:
      "Prepare the final experience for deployment and handover.",
    icon: Rocket,
    focusAreas: [
      "Production deployment & edge caching",
      "Domain, DNS & hosting configuration",
      "Final content & technical verification",
      "Analytics & event setup where required",
      "Repository handover & documentation",
      "Post-launch support where agreed",
    ],
    typicalOutput: "Live website · Handover · Documentation",
  },
];

export const ProcessSection: FC<ProcessSectionProps> = ({ onOpenCommission }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stagePanelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Entrance reveal
  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".process-selector-btn",
      {
        opacity: 0,
        y: 16,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, sectionRef, [prefersReducedMotion]);

  // Stage change transition
  useEffect(() => {
    if (prefersReducedMotion || !stagePanelRef.current) return;

    gsap.fromTo(
      stagePanelRef.current,
      { opacity: 0.4, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeStageIndex, prefersReducedMotion]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentStage = PROCESS_STAGES[activeStageIndex];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Delivery Process & Methodology"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>05 &middot; PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              FROM FIRST
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                QUESTION TO LAUNCH.
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              A structured process keeps strategy, design and engineering aligned from the first conversation to the final release.
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

        {/* Process Navigator: 2-Column Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-10 sm:mt-12 lg:mt-14">
          {/* Mobile: Horizontally Scrollable Stage Chips (< lg) */}
          <div
            role="tablist"
            aria-label="Process delivery stages (Mobile)"
            className="lg:hidden flex overflow-x-auto pb-2 gap-2.5 scrollbar-none -mx-4 px-4 sm:-mx-8 sm:px-8 select-none"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStageIndex === idx;

              return (
                <button
                  key={`m-${stage.number}`}
                  id={`m-process-tab-${stage.number}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`process-panel-${stage.number}`}
                  tabIndex={0}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl border font-mono text-xs transition-all duration-200 flex items-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                    isSelected
                      ? "bg-accent-cyan/15 border-accent-cyan/50 text-foreground font-bold shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                      : "bg-[#090b0f]/80 border-white/[0.08] text-muted-foreground hover:border-white/20 hover:text-foreground"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-accent-cyan" : "text-muted-foreground/60"
                    }`}
                  />
                  <span className="font-display font-bold">{stage.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-accent-cyan/20 text-accent-cyan"
                        : "bg-white/5 text-muted-foreground/50"
                    }`}
                  >
                    {stage.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop: Vertical Stage Navigator (>= lg) */}
          <div
            role="tablist"
            aria-label="Process delivery stages (Desktop)"
            className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-28 flex-col space-y-2"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStageIndex === idx;

              return (
                <button
                  key={stage.number}
                  id={`process-tab-${stage.number}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`process-panel-${stage.number}`}
                  tabIndex={0}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`process-selector-btn w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                    isSelected
                      ? "bg-surface-elevated/95 border-accent-cyan/50 shadow-[0_4px_24px_rgba(0,242,254,0.08)] border-l-4 border-l-accent-cyan"
                      : "bg-[#090b0f]/60 border-white/[0.06] hover:border-white/15 hover:bg-[#0c0f16]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isSelected
                          ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                          : "bg-surface-elevated text-muted-foreground border border-white/[0.06]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs sm:text-sm font-bold font-display tracking-tight ${
                            isSelected ? "text-foreground font-extrabold" : "text-foreground/80"
                          }`}
                        >
                          {stage.title}
                        </span>
                        {stage.isOptional && (
                          <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/25 text-accent-cyan uppercase">
                            OPTIONAL
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">
                        {stage.marker}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs shrink-0 ${
                      isSelected ? "text-accent-cyan font-bold" : "text-muted-foreground/40"
                    }`}
                  >
                    {stage.number} / 07
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Stage Detail Panel (7 Columns) */}
          <div className="lg:col-span-7">
            <div
              ref={stagePanelRef}
              id={`process-panel-${currentStage.number}`}
              role="tabpanel"
              aria-labelledby={`process-tab-${currentStage.number}`}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090b0f]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-9 space-y-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Card Header & Stage Metadata */}
              <div className="space-y-4 pb-6 border-b border-white/[0.07]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                      <CurrentIcon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider">
                        STAGE {currentStage.number} OF 07 &middot; {currentStage.marker}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">
                        {currentStage.title}
                      </h3>
                    </div>
                  </div>

                  {currentStage.isOptional ? (
                    <div className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono text-accent-cyan">
                      OPTIONAL SYSTEM LAYER
                    </div>
                  ) : (
                    <div className="px-3 py-1 rounded-full bg-surface-elevated border border-white/10 text-[10px] sm:text-[11px] font-mono text-muted-foreground">
                      CORE DELIVERY PHASE
                    </div>
                  )}
                </div>

                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                  {currentStage.positioning}
                </p>
              </div>

              {/* Optional Stage Note for INTELLIGENCE */}
              {currentStage.isOptional && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
                  <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-semibold">Scope Adaptive: </span>
                    This stage is integrated for projects requiring automated lead capture, intelligent product finders, or backend workflow connections. Pure digital brand experiences advance directly from Build to QA.
                  </div>
                </div>
              )}

              {/* Focus Areas Matrix */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>KEY EXECUTION FOCUS AREAS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.focusAreas.map((focus, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                      <span className="text-xs font-mono text-muted-foreground leading-snug">
                        {focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Output Footnote */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                  TYPICAL STAGE DELIVERABLES
                </div>
                <div className="font-mono text-xs text-foreground/90 leading-relaxed">
                  {currentStage.typicalOutput}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 sm:mt-12 lg:mt-14 pt-8 border-t border-white/[0.07]">
          <div className="text-xs font-mono text-muted-foreground">
            SS STUDIO &middot; METHODOLOGY &middot; 7 STAGES TO PRODUCTION
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
