import { useEffect, useRef, useState, useMemo, type FC } from "react";
import { MaterialFieldScene } from "@/3d/material-field-scene";
import { ThreeCanvasWrapper } from "@/3d/canvas-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Move } from "lucide-react";

interface MaterialFieldProps {
  className?: string;
}

export const MaterialField: FC<MaterialFieldProps> = ({
  className = "relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[420px] sm:min-h-[500px]",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const scene = useMemo(() => new MaterialFieldScene(), []);

  useEffect(() => {
    scene.setOnInteraction(() => {
      setHasInteracted(true);
    });
  }, [scene]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Normalize coordinates to [-1, 1] relative to the component
    const x = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, -(((e.clientY - rect.top) / rect.height) * 2 - 1)));

    scene.onPointerMove(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !e.touches.length) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = Math.max(-1, Math.min(1, ((touch.clientX - rect.left) / rect.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, -(((touch.clientY - rect.top) / rect.height) * 2 - 1)));

    scene.onPointerMove(x, y);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        scene.onPointerMove(0, 0);
      }}
      onTouchMove={handleTouchMove}
      className={`group relative rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#07090e] overflow-hidden select-none touch-pan-y shadow-[0_24px_70px_rgba(0,0,0,0.8)] ${className}`}
      aria-label="Interactive 3D Material Field Experiment"
      role="region"
    >
      {/* Three.js Canvas */}
      <ThreeCanvasWrapper
        sceneManager={scene}
        cameraFov={42}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        fallbackContent={
          <div className="w-full h-full flex items-center justify-center bg-[#07090e] text-xs font-mono text-muted-foreground">
            SS Material Field Static Architecture
          </div>
        }
      />

      {/* Subtle Architectural Grid Hairlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Top Left: Quiet Exhibition Spec Taxonomy */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest text-muted-foreground/70 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/80" aria-hidden="true" />
          <span>TECTONIC SURFACE &middot; INTERACTIVE STUDY</span>
        </div>
      </div>

      {/* Center: Quiet Interactive Discovery Cue (Disappears naturally after interaction) */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
          hasInteracted ? "opacity-0 pointer-events-none" : "opacity-90"
        }`}
      >
        <div className="px-3.5 py-1.5 rounded-full bg-[#0a0c10]/85 border border-white/12 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-widest text-foreground/90 flex items-center gap-2 shadow-xl select-none">
          <Move className="w-3 h-3 text-primary" />
          <span>{prefersReducedMotion ? "STATIC MATERIAL STUDY" : "MOVE THROUGH THE FIELD"}</span>
        </div>
      </div>

      {/* Bottom Left: Quiet Material Identifier */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 pointer-events-none">
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground/50 select-none">
          OBSIDIAN / TITANIUM
        </div>
      </div>
    </div>
  );
};
