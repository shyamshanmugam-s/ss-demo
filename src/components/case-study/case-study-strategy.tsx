import { type FC } from "react";
import { type Project } from "@/types";
import { Compass, Sparkles } from "lucide-react";

interface CaseStudyStrategyProps {
  project: Project;
}

export const CaseStudyStrategy: FC<CaseStudyStrategyProps> = ({ project }) => {
  const caseStudy = project.caseStudy;
  const strategy = caseStudy?.strategy;
  const experienceDesign = caseStudy?.experienceDesign;

  if (!strategy && !experienceDesign) return null;

  return (
    <section
      id="strategy"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Strategy and Experience Design"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* 05 · Strategy */}
        {strategy && (
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
                <Compass className="w-4 h-4 text-accent-cyan" />
                <span>05 &middot; STRATEGY &amp; INFORMATION ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
                {strategy.title || "APPLICATION-CENTRIC DIGITAL STRATEGY"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
                {strategy.description}
              </p>
            </div>

            {strategy.pillars && strategy.pillars.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {strategy.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-3 flex flex-col justify-between hover:border-accent-cyan/30 transition-colors"
                  >
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-accent-cyan font-bold">
                        0{idx + 1} &middot; PILLAR
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 06 · Experience / Design */}
        {experienceDesign && (
          <div className="space-y-8 pt-8 border-t border-white/[0.06]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>06 &middot; EXPERIENCE &amp; VISUAL DIRECTION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
                {experienceDesign.title || "INDUSTRIAL VISUAL LANGUAGE"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
                {experienceDesign.description}
              </p>
            </div>

            {/* Design Principles */}
            {experienceDesign.designPrinciples && experienceDesign.designPrinciples.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experienceDesign.designPrinciples.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#080b10] border border-white/[0.07] space-y-2"
                  >
                    <span className="text-[10px] font-mono text-accent-cyan uppercase font-semibold">
                      PRINCIPLE 0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base text-foreground">
                      {principle.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Featured Image if present */}
            {experienceDesign.image && (
              <div className="space-y-2 pt-4">
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/[0.09] bg-[#050608]">
                  <img
                    src={experienceDesign.image}
                    alt={experienceDesign.title || "Experience Visual"}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {experienceDesign.imageCaption && (
                  <p className="text-[11px] font-mono text-muted-foreground text-center">
                    {experienceDesign.imageCaption}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
