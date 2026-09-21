import { type FC } from "react";
import { type Project } from "@/types";
import { Info, ShieldAlert, CheckCircle2 } from "lucide-react";

interface CaseStudyBusinessContextProps {
  project: Project;
}

export const CaseStudyBusinessContext: FC<CaseStudyBusinessContextProps> = ({
  project,
}) => {
  const caseStudy = project.caseStudy;
  const businessContext = caseStudy?.businessContext;
  const challenge = typeof caseStudy?.challenge === "object" ? caseStudy.challenge : null;
  const challengeText = typeof caseStudy?.challenge === "string" ? caseStudy.challenge : challenge?.description;

  if (!businessContext && !challengeText) return null;

  return (
    <section
      id="context"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Business Context and Digital Challenge"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* 03 · Business Context */}
        {businessContext && (
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                <span>03 &middot; BUSINESS CONTEXT &amp; HERITAGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
                {businessContext.title || "INDUSTRIAL MANUFACTURING CONTEXT"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Narrative Explanations */}
              <div className="lg:col-span-7 space-y-4">
                {businessContext.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}

                {businessContext.disclaimer && (
                  <div className="p-4 rounded-xl bg-[#0b0e14] border border-white/[0.08] flex items-start gap-3 mt-4">
                    <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                      {businessContext.disclaimer}
                    </p>
                  </div>
                )}
              </div>

              {/* Verified Domain Facts Dossier */}
              {businessContext.verifiedFacts && businessContext.verifiedFacts.length > 0 && (
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080b10] border border-white/[0.08] space-y-4">
                  <div className="text-[11px] font-mono tracking-wider text-accent-cyan uppercase font-bold">
                    VERIFIED DOMAIN CONTEXT
                  </div>
                  <div className="space-y-3">
                    {businessContext.verifiedFacts.map((fact, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 text-[10px] font-mono text-muted-foreground/60 border-t border-white/[0.06]">
                    {businessContext.sourceNote || "Source: Domain research & verified industry taxonomy"}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 04 · Digital Challenge */}
        {challengeText && (
          <div className="space-y-8 pt-8 border-t border-white/[0.06]">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                <span>04 &middot; THE DIGITAL EXPERIENCE CHALLENGE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
                {challenge?.title || "CLARIFYING INDUSTRIAL COMPLEXITY"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {challengeText}
                </p>
                {challenge?.framing && (
                  <p className="text-xs sm:text-sm font-mono text-foreground/80 leading-relaxed p-4 rounded-xl bg-surface-elevated/40 border border-white/[0.06]">
                    {challenge.framing}
                  </p>
                )}
              </div>

              {challenge?.painPoints && challenge.painPoints.length > 0 && (
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0a0708] border border-amber-500/20 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-amber-300 uppercase font-bold">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>KEY INTERACTION FRICTIONS</span>
                  </div>
                  <div className="space-y-3">
                    {challenge.painPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-foreground/85">
                        <span className="text-amber-400 font-bold shrink-0">0{idx + 1}</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
