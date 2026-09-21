import { useEffect, useRef, useState, type FC } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const CustomCursor: FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check for fine pointer (desktop mouse, not touch screen)
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isPointerDevice || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // Contextual detection from DOM target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const label = cursorTarget.getAttribute("data-cursor");
        setCursorLabel(label || "VIEW");
      } else {
        const isInteractive = target.closest("button, a, [role='button'], .hover-interactive, input, textarea, select");
        if (isInteractive) {
          setCursorLabel("HOVER");
        } else {
          setCursorLabel(null);
        }
      }
    };

    const render = () => {
      // Smooth lerp ring toward mouse
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPointerDevice, prefersReducedMotion]);

  if (!isPointerDevice || prefersReducedMotion) return null;

  const hasLabel = cursorLabel && cursorLabel !== "HOVER";
  const isHovering = cursorLabel === "HOVER";

  return (
    <div className="pointer-events-none fixed inset-0 z-[500] overflow-hidden" aria-hidden="true">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full transition-opacity duration-200 ${
          isHovering || hasLabel ? "bg-accent-cyan opacity-90" : "bg-white opacity-80"
        }`}
      />

      {/* Trailing Architectural Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-300 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          hasLabel
            ? "-ml-7 -mt-7 w-14 h-14 border-accent-cyan/80 bg-[#0a0c10]/90 text-[9px] font-mono tracking-widest text-accent-cyan font-bold scale-100 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            : isHovering
            ? "-ml-5 -mt-5 w-10 h-10 border-accent-cyan/60 bg-accent-cyan/10 backdrop-blur-[1px] scale-110"
            : "-ml-3.5 -mt-3.5 w-7 h-7 border-white/20 scale-100 opacity-60"
        }`}
      >
        {hasLabel && <span ref={labelRef}>{cursorLabel}</span>}
      </div>
    </div>
  );
};
