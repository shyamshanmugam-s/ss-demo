import { type FC } from "react";
import { type Project, type ProjectStatus, type ProjectType } from "@/types";
import { ArrowLeft, ArrowUpRight, MapPin, Building2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyHeroProps {
  project: Project;
  onBack: () => void;
  onOpenCommission: () => void;
}

const formatTypeStatusBadge = (type: ProjectType, status: ProjectStatus) => {
  if (type === "INDUSTRY DEMO" && status === "DEMO") {
    return {
      label: "INDUSTRY DEMO · DEMO",
      style: "bg-amber-950/50 border-amber-500/40 text-amber-300",
      dot: "bg-amber-400",
    };
  }
  if (type === "CONCEPT" && status === "LIVE") {
    return {
      label: "CONCEPT · LIVE",
      style: "bg-emerald-950/50 border-emerald-500/40 text-emerald-400",
      dot: "bg-emerald-400 animate-pulse",
    };
  }
  if (type === "CLIENT PROJECT" && status === "LIVE") {
    return {
      label: "CLIENT · LIVE",
      style: "bg-blue-950/50 border-blue-500/40 text-blue-300",
      dot: "bg-blue-400",
    };
  }
  if (status === "IN DEVELOPMENT") {
    return {
      label: "IN DEVELOPMENT",
      style: "bg-zinc-900/60 border-zinc-700/40 text-zinc-300",
      dot: "bg-zinc-400",
    };
  }
  return {
    label: `${type} · ${status}`,
    style: "bg-cyan-950/50 border-cyan-500/40 text-accent-cyan",
    dot: "bg-accent-cyan",
  };
};

export const CaseStudyHero: FC<CaseStudyHeroProps> = ({
  project,
  onBack,
  onOpenCommission,
}) => {
  const typeStatus = formatTypeStatusBadge(project.type, project.status);
  const heroImageSrc = project.heroImage || project.thumbnail || project.image;

  return (
    <header className="relative z-10 pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent-cyan transition-colors cursor-pointer py-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded"
            aria-label="Back to Selected Work"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO SELECTED WORK</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/60 hidden sm:inline">
              CASE STUDY {project.number || "01"} &middot; SS STUDIO
            </span>
            <Button
              onClick={onOpenCommission}
              variant="outline"
              size="sm"
              className="font-mono text-xs border-white/15 hover:border-accent-cyan hover:text-accent-cyan h-8"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* Hero Title and Metadata Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {/* Top Badging Strip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border ${typeStatus.style}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${typeStatus.dot}`} aria-hidden="true" />
                <span className="font-semibold tracking-wider">{typeStatus.label}</span>
              </span>

              <span className="text-xs font-mono text-accent-cyan px-3 py-1 rounded-full bg-surface-elevated border border-white/10 uppercase tracking-wider">
                {project.industry}
              </span>

              {project.subIndustry && (
                <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] hidden sm:inline">
                  {project.subIndustry}
                </span>
              )}
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] font-display text-foreground leading-[0.95]">
              {project.title}
            </h1>

            {/* Positioning Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl font-normal leading-relaxed pt-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Context Metadata Dossier Pill */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#080b10] border border-white/[0.09] space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
              PROJECT DOSSIER &middot; SS STUDIO
            </div>

            <div className="space-y-3 font-mono text-xs">
              {project.clientName && (
                <div className="flex items-start gap-2.5 text-foreground/90">
                  <Building2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase">
                      {project.type === "CLIENT PROJECT" ? "CLIENT" : "BUSINESS REFERENCED"}
                    </div>
                    <div className="font-bold text-foreground">{project.clientName}</div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5 text-foreground/90">
                <div className="w-4 h-4 text-accent-cyan flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                  &sect;
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">RELATIONSHIP</div>
                  <div className="text-amber-300 font-medium">
                    {project.type === "CLIENT PROJECT"
                      ? "COMMISSIONED CLIENT PROJECT"
                      : "CONCEPTUAL DIGITAL EXPERIENCE"}
                  </div>
                </div>
              </div>

              {project.location && (
                <div className="flex items-start gap-2.5 text-foreground/90">
                  <MapPin className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase">LOCATION</div>
                    <div>{project.location}</div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5 text-foreground/90">
                <Calendar className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase">STATUS</div>
                  <div className="text-accent-cyan font-bold">{typeStatus.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Dominant Visual */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] bg-[#050608] shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          <img
            src={heroImageSrc}
            alt={`${project.title} - ${project.industry}`}
            className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.03]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-lg bg-[#0a0c10]/90 border border-white/15 backdrop-blur-md text-[11px] font-mono tracking-wider text-accent-cyan">
            {project.category || project.subIndustry}
          </div>
        </div>
      </div>
    </header>
  );
};
