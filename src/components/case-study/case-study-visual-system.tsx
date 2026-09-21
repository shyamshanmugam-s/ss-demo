import { type FC } from "react";
import { type Project } from "@/types";
import { Palette, Type } from "lucide-react";

interface CaseStudyVisualSystemProps {
  project: Project;
}

export const CaseStudyVisualSystem: FC<CaseStudyVisualSystemProps> = ({ project }) => {
  const visualSystem = project.caseStudy?.visualSystem;
  if (!visualSystem) return null;

  return (
    <section
      id="visual-system"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Design System and Visual Taxonomy"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <Palette className="w-4 h-4 text-accent-cyan" />
            <span>10 &middot; DESIGN SYSTEM &amp; VISUAL TAXONOMY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {visualSystem.title || "VISUAL FOUNDATIONS"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            Engineered within SS STUDIO&apos;s Obsidian Neo-Luxury visual language—balancing deep black canvases with architectural typography and restrained accents.
          </p>
        </div>

        {/* Typography and Palette Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Typography */}
          {visualSystem.typography && (
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider font-bold">
                <Type className="w-4 h-4 text-accent-cyan" />
                <span>TYPOGRAPHIC TAXONOMY</span>
              </div>
              <div className="space-y-3 pt-2">
                {visualSystem.typography.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-elevated/40 border border-white/[0.05] space-y-1"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-foreground font-bold">{t.role}</span>
                      <span className="text-accent-cyan px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {t.family}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{t.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Color Palette Tokens */}
          {visualSystem.palette && (
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider font-bold">
                <Palette className="w-4 h-4 text-accent-cyan" />
                <span>COLOR SYSTEM TOKENS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {visualSystem.palette.map((color, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.05] flex items-center gap-3"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg border border-white/20 shrink-0 ${color.bgClass || ""}`}
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                    <div className="space-y-0.5">
                      <div className="font-mono text-xs font-bold text-foreground">
                        {color.name}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        {color.hex} &middot; {color.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visual Principles */}
        {visualSystem.principles && visualSystem.principles.length > 0 && (
          <div className="p-6 rounded-2xl bg-[#080b10] border border-white/[0.07] space-y-3">
            <div className="text-[10px] font-mono text-accent-cyan uppercase font-bold tracking-widest">
              DESIGN EXECUTION PRINCIPLES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {visualSystem.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-elevated/30 border border-white/[0.04] text-xs font-mono text-muted-foreground"
                >
                  &bull; {principle}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
