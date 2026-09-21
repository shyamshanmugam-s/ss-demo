import { useRef, useEffect, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { attachMagneticPhysics } from "@/animations/motion-primitives";
import { ArrowUpRight, Mail } from "lucide-react";

interface ContactSectionProps {
  onOpenCommission: () => void;
}

export const ContactSection: FC<ContactSectionProps> = ({ onOpenCommission }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const primaryCtaRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Magnetic button on CTA
  useEffect(() => {
    if (prefersReducedMotion || !primaryCtaRef.current) return;
    const cleanup = attachMagneticPhysics(primaryCtaRef.current, { strength: 0.25 });
    return cleanup;
  }, [prefersReducedMotion]);

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".contact-reveal",
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-10 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06] overflow-hidden"
      aria-label="Contact and Start a Project"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-cyan/[0.03] blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Eyebrow */}
        <div className="contact-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-white/[0.08] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-accent-cyan uppercase tracking-widest font-semibold">
            ACCEPTING SELECT PROJECTS &middot; 2026
          </span>
        </div>

        {/* Monumental CTA Headline */}
        <div className="contact-reveal space-y-3">
          <p className="font-mono text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
            HAVE A PROJECT IN MIND?
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] font-display text-foreground leading-[0.95]">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-cyan to-white">
              SOMETHING EXCEPTIONAL.
            </span>
          </h2>
        </div>

        {/* Narrative */}
        <p className="contact-reveal text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          We design and build distinctive websites and digital experiences for businesses that want to stand apart.
        </p>

        {/* Action CTAs */}
        <div className="contact-reveal flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            ref={primaryCtaRef}
            onClick={onOpenCommission}
            variant="default"
            size="lg"
            className="font-mono text-xs sm:text-sm tracking-wider font-bold gap-2 h-14 px-9 bg-accent-cyan hover:bg-accent-cyan/90 text-void shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            data-cursor="OPEN"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>

          <Button
            onClick={onOpenCommission}
            variant="outline"
            size="lg"
            className="font-mono text-xs sm:text-sm tracking-wider border-white/15 hover:border-white/30 text-muted-foreground hover:text-foreground h-14 px-8 gap-2"
            data-cursor="OPEN"
          >
            <Mail className="w-4 h-4 text-accent-cyan" />
            <span>GET IN TOUCH</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
