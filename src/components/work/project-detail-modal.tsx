import { type FC } from "react";
import { type Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartProject?: () => void;
}

export const ProjectDetailModal: FC<ProjectDetailModalProps> = ({
  project,
  open,
  onOpenChange,
  onStartProject,
}) => {
  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#07090e] border-white/15 text-foreground p-6 sm:p-10 selection:bg-accent-cyan/20 selection:text-white">
        <DialogHeader className="space-y-4 pb-6 border-b border-white/[0.08]">
          {/* Top Status & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border ${
                  project.tag === "LIVE"
                    ? "bg-emerald-950/60 border-emerald-500/30 text-emerald-400"
                    : "bg-cyan-950/60 border-cyan-500/30 text-accent-cyan"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.tag === "LIVE" ? "bg-emerald-400 animate-pulse" : "bg-accent-cyan"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-semibold">{project.tag}</span>
              </span>

              <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-white/5 border border-white/10">
                {project.industry}
              </span>
            </div>

            <div className="text-xs font-mono text-muted-foreground">
              {project.year} &middot; SS STUDIO
            </div>
          </div>

          <DialogTitle className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-foreground">
            {project.title}
          </DialogTitle>

          <DialogDescription className="text-sm sm:text-base font-mono text-accent-cyan/90">
            {project.category}
          </DialogDescription>
        </DialogHeader>

        {/* Modal Scrollable Body */}
        <div className="space-y-8 pt-4">
          {/* 1. Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050608]">
            <img
              src={project.heroImage || project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 2. Overview */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
              01 &middot; OVERVIEW
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            {caseStudy?.summary && (
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-mono pt-1">
                {caseStudy.summary}
              </p>
            )}
          </div>

          {/* 3. Challenge & Approach */}
          {(caseStudy?.challenge || caseStudy?.approach) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy?.challenge && (
                <div className="p-5 rounded-xl bg-surface-elevated/50 border border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono tracking-wider text-accent-cyan uppercase font-bold">
                    02 &middot; THE CHALLENGE
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              )}
              {caseStudy?.approach && (
                <div className="p-5 rounded-xl bg-surface-elevated/50 border border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold">
                    03 &middot; THE APPROACH
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.approach}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 4. Delivered Systems / Features */}
          {caseStudy?.whatWeBuilt && caseStudy.whatWeBuilt.length > 0 && (
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                04 &middot; DELIVERED ARCHITECTURE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.whatWeBuilt.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-surface-elevated/40 border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-muted-foreground leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Project Sections */}
          {caseStudy?.sections && caseStudy.sections.length > 0 && (
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                05 &middot; KEY SYSTEM MODULES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.sections.map((sec) => (
                  <div
                    key={sec.number}
                    className="p-4 rounded-xl bg-[#090c12] border border-white/[0.06] space-y-1.5"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent-cyan font-bold">{sec.number}</span>
                      <span className="text-foreground font-semibold">{sec.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Technology Stack */}
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
              06 &middot; TECHNOLOGY ECOSYSTEM
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#10141f] border border-white/[0.08] text-xs font-mono text-accent-cyan/90 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 7. Visual Gallery */}
          {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                07 &middot; VISUAL DOSSIER
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#050608] space-y-2 p-2 bg-surface-elevated/30"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="font-mono text-xs font-bold text-foreground">
                        {item.title}
                      </div>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Result / Deliverable */}
          {caseStudy?.result && (
            <div className="p-5 rounded-xl bg-surface-elevated/60 border border-white/[0.08] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  DELIVERED RESULT
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          )}

          {/* 9. Action Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.08]">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-void text-xs font-mono font-bold hover:bg-accent-cyan/90 transition-colors shadow-lg text-center"
              >
                <span>VIEW LIVE SITE &rarr;</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            ) : (
              <div className="text-xs font-mono text-muted-foreground/70">
                Official SS Studio Case Study Dossier
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto justify-end">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onOpenChange(false)}
                className="font-mono text-xs w-full sm:w-auto justify-center"
              >
                Close Dossier
              </Button>

              {onStartProject && (
                <Button
                  type="button"
                  variant="default"
                  size="sm"
                  onClick={onStartProject}
                  className="font-mono text-xs gap-1.5 px-5 w-full sm:w-auto justify-center bg-accent-cyan text-void font-bold"
                >
                  <span>START A SIMILAR PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
