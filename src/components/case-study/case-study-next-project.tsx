import { type FC } from "react";
import { type Project, type ProjectStatus, type ProjectType } from "@/types";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyNextProjectProps {
  nextProject: Project;
  onNavigateNext: (slug: string) => void;
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

export const CaseStudyNextProject: FC<CaseStudyNextProjectProps> = ({
  nextProject,
  onNavigateNext,
  onOpenCommission,
}) => {
  const nextImage = nextProject.thumbnail || nextProject.image;
  const typeStatus = formatTypeStatusBadge(nextProject.type, nextProject.status);

  return (
    <section
      id="next-project"
      className="py-24 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#030406] text-foreground border-b border-white/[0.08]"
      aria-label="Next Project and Commission Inquiries"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Next Project Gateway Card */}
        <div className="group relative rounded-3xl border border-white/[0.09] bg-[#07090e] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-widest font-semibold">
                <span>14 &middot; NEXT CASE STUDY</span>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono border ${typeStatus.style}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${typeStatus.dot}`}
                      aria-hidden="true"
                    />
                    <span className="font-semibold tracking-wider">{typeStatus.label}</span>
                  </span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {nextProject.industry}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
                  {nextProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                {nextProject.shortDescription}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigateNext(nextProject.slug)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-elevated hover:bg-white/10 border border-white/15 text-xs font-mono text-foreground hover:text-accent-cyan transition-all cursor-pointer group/btn"
                >
                  <span>EXPLORE {nextProject.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Preview Thumbnail */}
            <div
              onClick={() => onNavigateNext(nextProject.slug)}
              className="lg:col-span-5 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050608] cursor-pointer group/img"
            >
              <img
                src={nextImage}
                alt={nextProject.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700 filter saturate-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0a0c10]/90 border border-white/20 backdrop-blur-md text-[10px] font-mono text-accent-cyan flex items-center gap-1.5">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Start a Project Callout */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 border border-white/[0.08]">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="font-mono text-xs text-accent-cyan uppercase tracking-widest font-semibold">
              START A PROJECT WITH SS STUDIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-foreground max-w-3xl mx-auto">
            Ready to build a distinctive digital presence for your business?
          </h2>

          <div className="pt-2">
            <Button
              onClick={onOpenCommission}
              variant="default"
              size="lg"
              className="font-mono text-xs sm:text-sm tracking-wider font-bold gap-2 h-14 px-9 bg-accent-cyan hover:bg-accent-cyan/90 text-void shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
