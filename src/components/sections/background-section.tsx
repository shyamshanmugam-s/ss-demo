import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { GraduationCap, Compass, Cpu, Code2 } from "lucide-react";

export const BackgroundSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".bg-block-reveal",
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

  const currentlyBuildingItems = [
    "01 Premium Web Experiences",
    "02 AI Lead Generation Systems",
    "03 Business Automation Workflows",
    "04 AI-Assisted Development Systems",
    "05 Interactive Web Applications",
  ];

  return (
    <section
      ref={sectionRef}
      id="background"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Background, Education and Engineering Foundation"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>07 &middot; FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              BACKGROUND
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Engineering foundation rooted in computer science, software architecture, and modern creative web technology.
            </p>
          </div>
        </div>

        {/* 4-Block Substantial Editorial Grid (2x2 on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {/* Block 1: Foundation / Computer Science */}
          <div
            role="listitem"
            className="bg-block-reveal group relative p-7 sm:p-8 rounded-2xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-accent-cyan font-bold tracking-widest">FOUNDATION</span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                    ACADEMIC
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold font-display text-foreground group-hover:text-accent-cyan transition-colors">
                  COMPUTER SCIENCE
                </h3>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mt-2 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-cyan font-semibold">
                  <span>B.Tech CSE</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Software engineering, data structures, object-oriented programming and modern web technologies.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-muted-foreground/60">
              Core grounding in computational rigor and scalable systems architecture.
            </div>
          </div>

          {/* Block 2: Current Focus */}
          <div
            role="listitem"
            className="bg-block-reveal group relative p-7 sm:p-8 rounded-2xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-accent-cyan font-bold tracking-widest">CURRENT FOCUS</span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                    DIRECTION
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold font-display text-foreground group-hover:text-accent-cyan transition-colors">
                  AI &times; WEB &times; AUTOMATION
                </h3>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mt-2 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE DEVELOPMENT</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Building premium websites, AI-assisted workflows, automation systems and digital products.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-muted-foreground/60">
              Merging visual craft with intelligent backend automation pipelines.
            </div>
          </div>

          {/* Block 3: Build Philosophy */}
          <div
            role="listitem"
            className="bg-block-reveal group relative p-7 sm:p-8 rounded-2xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-accent-cyan font-bold tracking-widest">BUILD PHILOSOPHY</span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                    METHODOLOGY
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold font-display text-foreground group-hover:text-accent-cyan transition-colors">
                  DESIGN &rarr; SYSTEM &rarr; AUTOMATION
                </h3>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 mt-2 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-cyan font-semibold">
                  <span>CORE PRINCIPLE</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Every project combines visual direction, technical architecture and practical business functionality.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-muted-foreground/60">
              Intentional pacing, clean modular code, and real business utility.
            </div>
          </div>

          {/* Block 4: Currently Building */}
          <div
            role="listitem"
            className="bg-block-reveal group relative p-7 sm:p-8 rounded-2xl bg-[#07090e]/95 border border-white/[0.08] hover:border-accent-cyan/40 hover:bg-[#0a0d14] transition-all duration-300 flex flex-col justify-between space-y-5 shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-accent-cyan font-bold tracking-widest">CURRENTLY BUILDING</span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                    ACTIVE DOMAINS
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                {currentlyBuildingItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#0c1018] border border-white/[0.04] flex items-center gap-2.5 text-xs font-mono text-foreground/90 group-hover:border-white/[0.08] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                    <span className="text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-muted-foreground/60 flex items-center justify-between">
              <span>ACTIVE DOMAIN FOCUS</span>
              <span className="text-accent-cyan font-semibold">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
