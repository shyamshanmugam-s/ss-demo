import { type FC } from "react";
import { type Project } from "@/types";
import { Monitor, Smartphone, Tablet } from "lucide-react";

interface CaseStudyResponsiveProps {
  project: Project;
}

export const CaseStudyResponsive: FC<CaseStudyResponsiveProps> = ({ project }) => {
  const responsive = project.caseStudy?.responsive;
  if (!responsive) return null;

  return (
    <section
      id="responsive"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Responsive Multi-Device Experience"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <Monitor className="w-4 h-4 text-accent-cyan" />
            <span>11 &middot; MULTI-DEVICE RESPONSIVE ADAPTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {responsive.title || "RESPONSIVE ARCHITECTURE"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {responsive.description}
          </p>
        </div>

        {/* Breakpoints Matrix */}
        {responsive.breakpoints && responsive.breakpoints.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {responsive.breakpoints.map((bp, idx) => {
              const Icon = idx === 0 ? Monitor : idx === 1 ? Tablet : Smartphone;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-accent-cyan">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground">
                      {bp.device}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {bp.resolution}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-accent-cyan">
                    {bp.focus}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
