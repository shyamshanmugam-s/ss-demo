import { useEffect, useRef, useState, type FC } from "react";
import { gsap } from "@/lib/gsap";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already loaded this session or prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      onLoadingComplete();
      return;
    }

    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit transition: clip-path curtain wipe upwards
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            onLoadingComplete();
          },
        });
      },
    });

    // 1. Staggered reveal of intro labels
    tl.fromTo(
      ".loader-item",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }
    );

    // 2. Fast, crisp counter tween
    tl.to(
      obj,
      {
        val: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          const current = Math.floor(obj.val);
          setProgress(current);
          if (progressNumberRef.current) {
            progressNumberRef.current.textContent = current.toString().padStart(3, "0");
          }
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${current}%`;
          }
        },
      },
      "-=0.2"
    );

    // 3. Quick exit pulse
    tl.to(
      ".loader-content",
      {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      },
      "+=0.1"
    );

    // Safety timeout in case of unexpected delays
    const safetyTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => {
      clearTimeout(safetyTimeout);
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[900] flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-[#050608] text-[#f8fafc] select-none"
      role="status"
      aria-live="polite"
      aria-label="Loading SS Studio experience"
    >
      {/* Top Bar */}
      <div className="loader-item flex items-center justify-between font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="tracking-widest text-foreground font-semibold">SS STUDIO</span>
        </div>
        <span className="tracking-widest">SHYAM SHANMUGAM &middot; 2026</span>
      </div>

      {/* Center Cinematic Stage */}
      <div className="loader-content my-auto max-w-xl mx-auto w-full text-center space-y-6">
        <div className="loader-item space-y-2">
          <p className="font-mono text-xs tracking-widest text-accent-cyan uppercase">
            Initializing Digital Experience
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-foreground">
            SS STUDIO
          </h1>
        </div>

        {/* Progress Bar Container */}
        <div className="loader-item space-y-3 pt-4">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-accent-cyan to-white transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span className="tracking-wider">SYSTEMS &middot; 3D &middot; MOTION</span>
            <span className="font-bold text-foreground">
              <span ref={progressNumberRef}>000</span>%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="loader-item flex items-center justify-between font-mono text-[11px] text-muted-foreground/60 border-t border-white/5 pt-4">
        <span>CREATIVE DEVELOPER &middot; WEB &middot; AI</span>
        <span>BASED IN INDIA</span>
      </div>
    </div>
  );
};
