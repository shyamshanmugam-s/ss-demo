import { type FC } from "react";
import { type Project } from "@/types";
import { Code2, Cpu, CheckCircle2 } from "lucide-react";

interface CaseStudyEngineeringProps {
  project: Project;
}

export const CaseStudyEngineering: FC<CaseStudyEngineeringProps> = ({ project }) => {
  const engineering = project.caseStudy?.engineering;
  if (!engineering) return null;

  return (
    <section
      id="engineering"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Frontend Engineering and Architecture"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <Code2 className="w-4 h-4 text-accent-cyan" />
            <span>09 &middot; FRONTEND ENGINEERING &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {engineering.title || "TECHNICAL IMPLEMENTATION"}
          </h2>
          {engineering.description && (
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
              {engineering.description}
            </p>
          )}
        </div>

        {/* Stack Categories Grid */}
        {engineering.stack && engineering.stack.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineering.stack.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent-cyan" />
                  <span className="font-mono text-xs text-foreground font-bold uppercase tracking-wider">
                    {cat.category}
                  </span>
                </div>
                <div className="space-y-1.5 pt-1">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#11141d] border border-white/[0.05] text-xs font-mono text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Engineering Highlights */}
        {engineering.highlights && engineering.highlights.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080b10] border border-white/[0.08] space-y-4">
            <div className="text-[11px] font-mono text-accent-cyan uppercase font-bold tracking-widest">
              CORE TECHNICAL HIGHLIGHTS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {engineering.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-foreground/90 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
