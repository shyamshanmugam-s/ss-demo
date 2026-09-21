import { type FC } from "react";
import { type Project } from "@/types";
import { ShieldCheck, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyDeliverablesProps {
  project: Project;
  onOpenCommission: () => void;
}

export const CaseStudyDeliverables: FC<CaseStudyDeliverablesProps> = ({
  project,
  onOpenCommission,
}) => {
  const deliverables = project.caseStudy?.deliverables;
  const items = deliverables?.items || project.caseStudy?.whatWeBuilt || project.services || [];
  const summary = deliverables?.summary || project.caseStudy?.result || "Engineered a production-ready digital experience.";

  return (
    <section
      id="deliverables"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Project Deliverables and Live Experience"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-accent-cyan" />
            <span>12 &middot; DELIVERED PROJECT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {deliverables?.title || "PROJECT DELIVERABLES"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#080a0f] border border-white/[0.08] flex items-start gap-3 hover:border-white/20 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-mono text-foreground/90 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 13 · Live Experience / Demo Gateway */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090c12] border border-white/[0.1] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan font-bold uppercase">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>13 &middot; LIVE EXPERIENCE ACCESS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-foreground">
                {project.liveUrl ? "EXPLORE THE LIVE FLAGSHIP" : "EXPERIENCE THE INDUSTRY DEMO"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                {project.liveUrl
                  ? "View the fully deployed digital experience in real time across desktop and mobile devices."
                  : "This project is currently available as an interactive industry demonstration built by SS STUDIO."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan hover:bg-accent-cyan/90 text-void font-mono text-xs font-bold transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] cursor-pointer"
                  data-cursor="OPEN"
                >
                  <span>VIEW LIVE EXPERIENCE &rarr;</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Button
                  onClick={onOpenCommission}
                  variant="default"
                  size="lg"
                  className="font-mono text-xs font-bold gap-2 px-6 bg-accent-cyan text-void hover:bg-accent-cyan/90"
                >
                  <span>COMMISSION SIMILAR</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
