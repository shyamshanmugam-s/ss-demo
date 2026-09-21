import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { GraduationCap, Code, Compass } from "lucide-react";

export const BackgroundSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".bg-card-reveal", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 25,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="background"
      className="relative z-10 py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Background and Education"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>06 &middot; FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              BACKGROUND
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Engineering foundation rooted in computer science, software architecture, and modern creative web technology.
            </p>
          </div>
        </div>

        {/* Background Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Education */}
          <div className="bg-card-reveal p-6 sm:p-8 rounded-2xl bg-[#080a0f]/90 border border-white/[0.08] space-y-4 hover:border-accent-cyan/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
                ACADEMIC FORMATION
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">
                B.Tech in Computer Science
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Rigorous grounding in data structures, algorithms, discrete computational logic, software engineering methodologies, and systems architecture.
            </p>
          </div>

          {/* Card 2: Creative Engineering */}
          <div className="bg-card-reveal p-6 sm:p-8 rounded-2xl bg-[#080a0f]/90 border border-white/[0.08] space-y-4 hover:border-accent-cyan/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
              <Code className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
                ENGINEERING PRACTICE
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">
                Creative Web Architecture
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Specializing in production React/TypeScript development, WebGL graphics with Three.js, and high-performance GSAP motion orchestration.
            </p>
          </div>

          {/* Card 3: AI-Assisted Synthesis */}
          <div className="bg-card-reveal p-6 sm:p-8 rounded-2xl bg-[#080a0f]/90 border border-white/[0.08] space-y-4 hover:border-accent-cyan/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
              <Compass className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase">
                NEXT-GEN CAPABILITY
              </div>
              <h3 className="text-xl font-bold font-display text-foreground">
                AI-Accelerated Building
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Leveraging advanced AI workflows to accelerate development cycles, automate quality verification, and deliver agency-grade software faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
