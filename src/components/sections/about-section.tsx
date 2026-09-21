import { useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { Code2, Sparkles, Cpu, Terminal } from "lucide-react";

export const AboutSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".about-reveal",
      {
        opacity: 0,
        y: 35,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, sectionRef, [prefersReducedMotion]);

  const pillars = [
    {
      icon: Code2,
      label: "CREATIVE DEVELOPER",
      desc: "Translating architectural designs into responsive, modern web applications with modular code.",
    },
    {
      icon: Sparkles,
      label: "WEB DESIGNER",
      desc: "Crafting distinct visual identities, typographic hierarchies, and layouts tailored to each project's domain.",
    },
    {
      icon: Cpu,
      label: "AI-ASSISTED BUILDER",
      desc: "Leveraging modern AI engineering workflows to accelerate delivery, test thoroughly, and refine logic.",
    },
    {
      icon: Terminal,
      label: "DIGITAL EXPERIENCE CREATOR",
      desc: "Integrating deliberate motion, 3D elements, and micro-interactions that elevate usability without clutter.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 py-28 sm:py-40 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="About Shyam Shanmugam and SS Studio"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Manifesto Eyebrow */}
        <div className="about-reveal flex items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
            <span>01 &middot; ABOUT / MANIFESTO</span>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground/60 tracking-wider">
            SS STUDIO &middot; 2026
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="about-reveal space-y-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.75rem] font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.04]">
            I DESIGN AND BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e8f0] to-[#64748b]">
              DIGITAL EXPERIENCES.
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-4">
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
              <p>
                I am <span className="text-foreground font-semibold">Shyam Shanmugam</span>,
                a creative developer and digital experience creator based in India. I build bespoke web solutions that combine strong art direction, modern frontend engineering, and AI-assisted precision.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/90">
                Rather than relying on generic templates or repetitive cards, every project is engineered with intentional typography, deliberate motion, and modern frontend architecture to create a clear and memorable digital presence.
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#090c12]/90 border border-white/[0.08] backdrop-blur-md space-y-4">
              <div className="text-xs font-mono tracking-wider text-accent-cyan uppercase font-semibold">
                CORE PHILOSOPHY
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                &ldquo;A website is an interactive digital artifact. It should communicate precision, aesthetic discipline, and craftsmanship from the very first interaction.&rdquo;
              </p>
              <div className="pt-3 text-xs font-mono text-muted-foreground flex items-center justify-between border-t border-white/5">
                <span>SS STUDIO</span>
                <span className="text-accent-cyan">SHYAM SHANMUGAM</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="about-reveal p-6 rounded-xl bg-[#080b10]/80 border border-white/[0.06] hover:border-accent-cyan/30 hover:bg-[#0c1017] transition-all duration-300 space-y-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-mono text-xs font-bold tracking-wider text-foreground">
                  {pillar.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
