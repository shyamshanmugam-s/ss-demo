import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Filter,
  Layers,
  Sparkles,
  Workflow,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SystemsSectionProps {
  onOpenCommission: () => void;
}

interface SystemCapability {
  id: string;
  number: string;
  title: string;
  badge: string;
  badgeStyle: string;
  positioning: string;
  icon: typeof Bot;
  capabilities: string[];
}

const SYSTEM_CAPABILITIES: SystemCapability[] = [
  {
    id: "ai-product-experiences",
    number: "01",
    title: "AI PRODUCT EXPERIENCES",
    badge: "CAPABILITY · CONCEPT",
    badgeStyle: "bg-cyan-950/40 border-cyan-500/30 text-accent-cyan",
    positioning:
      "Purpose-built AI interfaces that help users discover, understand or interact with products and services.",
    icon: Bot,
    capabilities: [
      "AI website assistants",
      "Product & service finders",
      "Guided recommendation experiences",
      "Interactive knowledge interfaces",
      "Contextual FAQ & information assistants",
    ],
  },
  {
    id: "lead-qualification-systems",
    number: "02",
    title: "LEAD & QUALIFICATION SYSTEMS",
    badge: "CAPABILITY",
    badgeStyle: "bg-white/5 border-white/10 text-muted-foreground",
    positioning:
      "Digital experiences designed to capture, organize and qualify business enquiries before they reach the team.",
    icon: Workflow,
    capabilities: [
      "Lead capture funnels & modal flows",
      "Multi-step qualification forms",
      "Guided commercial enquiry journeys",
      "Conditional lead routing logic",
      "CRM & webhook integration architecture",
      "Automated follow-up workflows",
    ],
  },
  {
    id: "business-automation",
    number: "03",
    title: "BUSINESS AUTOMATION",
    badge: "CAPABILITY",
    badgeStyle: "bg-white/5 border-white/10 text-muted-foreground",
    positioning:
      "Connected workflows that reduce repetitive manual steps across everyday business operations.",
    icon: Layers,
    capabilities: [
      "Form → workflow automation",
      "Transactional email automation",
      "Automated CRM record updates",
      "Internal notification dispatch",
      "Multi-channel data synchronization",
      "Internal task & inquiry routing",
    ],
  },
  {
    id: "intelligent-discovery",
    number: "04",
    title: "INTELLIGENT DISCOVERY",
    badge: "CAPABILITY · CONCEPT",
    badgeStyle: "bg-cyan-950/40 border-cyan-500/30 text-accent-cyan",
    positioning:
      "Search, filtering and recommendation experiences that help users reach the right information faster.",
    icon: Filter,
    capabilities: [
      "Structured product discovery",
      "Spatial & property discovery",
      "Service & specification matching",
      "3-step guided selection wizards",
      "Structured technical search",
      "Knowledge & document retrieval",
    ],
  },
];

export const SystemsSection: FC<SystemsSectionProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".system-card",
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

    gsap.fromTo(
      ".system-bridge-card",
      {
        opacity: 0,
        y: 20,
      },
      {
        scrollTrigger: {
          trigger: ".system-bridge-card",
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, sectionRef, [prefersReducedMotion]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Digital Systems and AI Capabilities"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>04 &middot; DIGITAL SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              INTELLIGENCE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                BUILT INTO THE EXPERIENCE.
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Beyond the website, we design AI-powered experiences and connected workflows that help businesses make information easier to access and repetitive processes easier to manage.
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

        {/* 4 Primary System Capabilities: 2x2 Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-10 sm:mt-12 lg:mt-14">
          {SYSTEM_CAPABILITIES.map((sys) => {
            const Icon = sys.icon;

            return (
              <article
                key={sys.id}
                className="system-card group relative p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-7 shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                {/* Top Row: Number & Status Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5 font-mono text-xs">
                      <span className="text-accent-cyan font-bold tracking-widest text-sm">
                        {sys.number}
                      </span>
                      <span className="text-white/20">&middot;</span>
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider px-2.5 py-0.5 rounded border uppercase font-medium bg-white/[0.03] text-muted-foreground border-white/10">
                        {sys.badge}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Positioning */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
                      {sys.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                      {sys.positioning}
                    </p>
                  </div>
                </div>

                {/* Capabilities Sub-Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent-cyan" />
                    <span>SYSTEM CAPABILITY AREAS</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {sys.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Conceptual Differentiation Banner: WEBSITE ↓ SYSTEM */}
        <div className="system-bridge-card rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#07090e]/90 p-6 sm:p-10 space-y-6 mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div className="text-xs font-mono text-accent-cyan tracking-widest uppercase font-bold">
              THE CONCEPTUAL FRAMEWORK
            </div>
            <div className="text-xs font-mono text-muted-foreground/70">
              A website is the experience &middot; A digital system connects the experience to the business
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Website Layer */}
            <div className="md:col-span-5 p-5 sm:p-6 rounded-xl bg-surface-elevated/40 border border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold font-display text-foreground tracking-wider">
                  WEBSITE
                </span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  THE EXPERIENCE
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Visual Brand Identity", "Spatial Interface", "Editorial Typography", "Product Presentation", "Commercial CTAs"].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-[#10141f] border border-white/[0.06] text-[11px] font-mono text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: Connector Arrow */}
            <div className="md:col-span-2 flex flex-col items-center justify-center py-2 text-center">
              <div className="w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                <ArrowDown className="w-4 h-4 md:hidden" />
                <ArrowRight className="w-4 h-4 hidden md:block" />
              </div>
              <span className="text-[10px] font-mono text-accent-cyan tracking-widest uppercase mt-2">
                CONNECTED
              </span>
            </div>

            {/* Right: System Layer */}
            <div className="md:col-span-5 p-5 sm:p-6 rounded-xl bg-surface-elevated/40 border border-accent-cyan/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold font-display text-accent-cyan tracking-wider">
                  SYSTEM
                </span>
                <span className="text-[10px] font-mono text-accent-cyan uppercase px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                  THE ENGINE
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["AI Finders & Assistants", "Lead Qualification", "Data Synchronization", "Automated Routing", "CRM & Webhook Sync"].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-accent-cyan/5 border border-accent-cyan/20 text-[11px] font-mono text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 sm:mt-12 lg:mt-14 pt-8 border-t border-white/[0.07]">
          <div className="text-xs font-mono text-muted-foreground">
            SS STUDIO &middot; DIGITAL EXPERIENCES &times; BUSINESS WORKFLOWS
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
              <span>EXPLORE SELECTED WORK</span>
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
