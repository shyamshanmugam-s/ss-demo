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
      ".hero-industry-line",
      { opacity: 0, y: 12, duration: 0.6 },
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

  const industries = [
    "INTERIOR",
    "HOSPITALITY",
    "MANUFACTURING",
    "CONSTRUCTION",
    "REAL ESTATE",
    "FITNESS",
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
        <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-7">
          {/* Eyebrow & Status Badge */}
          <div className="hero-meta-badge flex items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/70 border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" aria-hidden="true" />
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
                <span className="text-foreground font-bold">SS STUDIO</span>
                <span className="text-white/20">&middot;</span>
                <span className="text-accent-cyan font-medium">
                  DIGITAL EXPERIENCES &middot; AI &times; WEB SYSTEMS
                </span>
              </div>
            </div>
          </div>

          {/* Monumental Dominant Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-extrabold tracking-[-0.04em] text-foreground leading-[0.94] select-none font-display"
            aria-label="Digital Experiences Built For Business."
          >
            <span className="block overflow-hidden py-0.5">
              <span className="hero-line-inner block text-foreground">
                DIGITAL EXPERIENCES
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="hero-line-inner block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/75">
                BUILT FOR BUSINESS.
              </span>
            </span>
          </h1>

          {/* Concise Supporting Copy */}
          <div className="hero-sub-block space-y-3 max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              We design and build premium websites, AI-powered experiences and digital systems around the needs of modern businesses.
            </p>
          </div>

          {/* Restrained Industry Line */}
          <div className="hero-industry-line pt-1">
            <div className="flex items-center gap-2 pb-1.5 text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
              <span>DOMAINS &amp; SECTORS</span>
            </div>
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-muted-foreground/80">
              {industries.map((ind, i) => (
                <span key={ind} className="inline-flex items-center gap-2">
                  <span className="hover:text-foreground transition-colors">{ind}</span>
                  {i < industries.length - 1 && (
                    <span className="text-white/20 font-sans select-none">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-3">
            <Button
              ref={primaryCtaRef}
              onClick={handleScrollToWork}
              variant="default"
              size="lg"
              className="font-mono text-xs sm:text-sm tracking-wider font-bold gap-2 h-12 sm:h-13 px-8 bg-accent-cyan hover:bg-accent-cyan/90 text-void shadow-[0_0_25px_rgba(0,242,254,0.22)]"
              data-cursor="EXPLORE"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </Button>

            <Button
              ref={secondaryCtaRef}
              onClick={onOpenCommission}
              variant="outline"
              size="lg"
              className="font-mono text-xs sm:text-sm tracking-wider border-white/15 hover:border-white/30 text-muted-foreground hover:text-foreground h-12 sm:h-13 px-7 gap-2 bg-surface/30 backdrop-blur-sm"
              data-cursor="OPEN"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
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
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] tracking-wider uppercase">
          <span className="text-foreground/90 font-medium">01 / 07 SELECTED WORK</span>
          <span className="text-white/20">&middot;</span>
          <span>COMMERCIAL WEB ARCHITECTURE</span>
          <span className="text-white/20 hidden md:inline">&middot;</span>
          <span className="text-accent-cyan hidden md:inline">2026 EDITION</span>
        </div>

        <button
          type="button"
          onClick={handleScrollToWork}
          className="flex items-center gap-2 hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded px-2.5 py-2.5 -my-2.5 min-h-[44px] cursor-pointer"
          data-cursor="EXPLORE"
          aria-label="Scroll to Selected Work section"
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
