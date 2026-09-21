import { useRef, useMemo, useEffect, type FC } from "react";
import { HeroSculpture } from "@/3d/hero-sculpture";
import { ThreeCanvasWrapper } from "@/3d/canvas-wrapper";
import { Button } from "@/components/ui/button";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { attachMagneticPhysics } from "@/animations/motion-primitives";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroGatewayProps {
  onOpenCommission: () => void;
}

export const HeroGateway: FC<HeroGatewayProps> = ({ onOpenCommission }) => {
  const containerRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLButtonElement>(null);
  const secondaryCtaRef = useRef<HTMLButtonElement>(null);
  const heroSculpture = useMemo(() => new HeroSculpture(), []);
  const prefersReducedMotion = useReducedMotion();

  // Attach magnetic physics to CTAs on desktop
  useEffect(() => {
    if (prefersReducedMotion) return;
    const cleanups: Array<() => void> = [];

    if (primaryCtaRef.current) {
      cleanups.push(
        attachMagneticPhysics(primaryCtaRef.current, { strength: 0.22 })
      );
    }
    if (secondaryCtaRef.current) {
      cleanups.push(
        attachMagneticPhysics(secondaryCtaRef.current, { strength: 0.18 })
      );
    }

    return () => cleanups.forEach((c) => c());
  }, [prefersReducedMotion]);

  // GSAP Entrance & Scroll-Scrub Choreography
  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    // 1. Entrance Sequence
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      delay: 0.15,
    });

    tl.from(".hero-meta-badge", { opacity: 0, y: 15, duration: 0.8 });

    tl.from(
      ".hero-line-inner",
      {
        yPercent: 115,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      },
      "-=0.5"
    );

    tl.from(
      ".hero-sub-block",
      { opacity: 0, y: 18, duration: 0.8 },
      "-=0.6"
    );

    tl.from(
      ".hero-pill",
      { opacity: 0, y: 12, duration: 0.5, stagger: 0.05 },
      "-=0.5"
    );

    tl.from(
      ".hero-cta-group",
      { opacity: 0, y: 16, duration: 0.7 },
      "-=0.4"
    );

    tl.from(".hero-micro-bar", { opacity: 0, duration: 0.8 }, "-=0.3");

    // 2. Scroll-Controlled Scrub Transition
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => {
          heroSculpture.setScrollProgress(self.progress);
        },
      });

      // Spatial typography & depth recede as user scrolls down
      if (contentWrapperRef.current) {
        gsap.to(contentWrapperRef.current, {
          y: 70,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "75% top",
            scrub: 0.5,
          },
        });
      }
    }
  }, containerRef, [heroSculpture, prefersReducedMotion]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const disciplines = [
    "WEB EXPERIENCES",
    "CREATIVE DEVELOPMENT",
    "AI-ASSISTED ARCHITECTURE",
    "INTERACTION DESIGN",
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 sm:pt-36 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden bg-void text-foreground"
      aria-label="SS STUDIO Hero Gateway"
    >
      {/* 3D WebGL Architectural Core Canvas */}
      <ThreeCanvasWrapper
        sceneManager={heroSculpture}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-95"
      />

      {/* Subtle Studio Vignette */}
      <div
        className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-50"
        aria-hidden="true"
      />

      {/* Main Spatial Content Grid */}
      <div
        ref={contentWrapperRef}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        {/* Typographic Monolith */}
        <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-8">
          {/* Eyebrow & Status Badge */}
          <div className="hero-meta-badge flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/80 border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-accent-cyan uppercase font-semibold">
                SS STUDIO &middot; DIGITAL EXPERIENCES / WEB / AI
              </span>
            </div>
          </div>

          {/* Monumental Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.04em] text-foreground leading-[0.94] select-none font-display"
            aria-label="I Design and Build Digital Experiences"
          >
            <span className="block overflow-hidden py-1">
              <span className="hero-line-inner block">I DESIGN &amp; BUILD</span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="hero-line-inner block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f1f5f9] to-[#94a3b8]">
                DIGITAL
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="hero-line-inner block text-foreground">
                EXPERIENCES.
              </span>
            </span>
          </h1>

          {/* Secondary Positioning Block */}
          <div className="hero-sub-block space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span className="text-foreground font-bold">SHYAM SHANMUGAM</span>
              <span>&middot;</span>
              <span>CREATIVE DEVELOPER</span>
              <span>&middot;</span>
              <span className="text-accent-cyan">AI &times; WEB</span>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              Designing and building custom high-performance websites, bespoke interactive systems,
              and modern digital solutions for businesses ready to establish a distinctive presence.
            </p>
          </div>

          {/* Disciplines Hairline Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
            {disciplines.map((item) => (
              <span
                key={item}
                className="hero-pill px-3 py-1 rounded bg-[#0a0d14]/90 border border-white/[0.07] text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground hover:border-accent-cyan/30 hover:text-foreground transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-2">
            <Button
              ref={primaryCtaRef}
              onClick={onOpenCommission}
              variant="default"
              size="lg"
              className="font-mono text-xs sm:text-sm tracking-wider font-bold gap-2 h-12 sm:h-13 px-8 bg-accent-cyan hover:bg-accent-cyan/90 text-void shadow-[0_0_25px_rgba(0,242,254,0.22)]"
              data-cursor="OPEN"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            <Button
              ref={secondaryCtaRef}
              onClick={handleScrollToWork}
              variant="outline"
              size="lg"
              className="font-mono text-xs sm:text-sm tracking-wider border-white/15 hover:border-white/30 text-muted-foreground hover:text-foreground h-12 sm:h-13 px-7 gap-2"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Spatial Zone reserved for 3D Geometric Monolith */}
        <div
          className="hidden lg:block lg:col-span-4 xl:col-span-5 relative h-full min-h-[460px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Bottom Bar & Technical Metadata */}
      <div className="hero-micro-bar relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs font-mono text-muted-foreground">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] tracking-wider uppercase">
          <span className="text-foreground/90 font-medium">01 / 07 SELECTED WORK</span>
          <span>&middot;</span>
          <span>BASED IN INDIA</span>
          <span>&middot;</span>
          <span className="text-accent-cyan">2026 EDITION</span>
        </div>

        <button
          type="button"
          onClick={handleScrollToWork}
          className="flex items-center gap-2 hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded p-1 cursor-pointer"
          data-cursor="EXPLORE"
        >
          <span className="text-[11px] tracking-widest uppercase">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-accent-cyan" />
        </button>
      </div>
    </section>
  );
};
