import { type FC } from "react";
import { type Project, type ProjectStatus, type ProjectType } from "@/types";
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
  Layers,
  Wrench,
  Info,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartProject?: () => void;
}

const formatTypeStatusBadge = (type: ProjectType, status: ProjectStatus) => {
  if (type === "INDUSTRY DEMO" && status === "DEMO") {
    return {
      label: "INDUSTRY DEMO · DEMO",
      style: "bg-amber-950/50 border-amber-500/30 text-amber-300",
      dot: "bg-amber-400",
    };
  }
  if (type === "CONCEPT" && status === "LIVE") {
    return {
      label: "CONCEPT · LIVE",
      style: "bg-emerald-950/50 border-emerald-500/30 text-emerald-400",
      dot: "bg-emerald-400 animate-pulse",
    };
  }
  if (type === "CLIENT PROJECT" && status === "LIVE") {
    return {
      label: "CLIENT · LIVE",
      style: "bg-blue-950/50 border-blue-500/30 text-blue-300",
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
    style: "bg-cyan-950/50 border-cyan-500/30 text-accent-cyan",
    dot: "bg-accent-cyan",
  };
};

export const ProjectDetailModal: FC<ProjectDetailModalProps> = ({
  project,
  open,
  onOpenChange,
  onStartProject,
}) => {
  if (!project) return null;

  const caseStudy = project.caseStudy;
  const typeStatus = formatTypeStatusBadge(project.type, project.status);
  const heroImageSrc = project.heroImage || project.thumbnail || project.image;
  const servicesList = project.services || [];
  const techList = project.technology || project.technologies || [];

  const rawGallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : caseStudy?.gallery || [];

  const galleryItems = rawGallery.map((item) => {
    if (typeof item === "string") {
      return { image: item, title: project.title, caption: project.industry };
    }
    return item;
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#07090e] border-white/15 text-foreground p-6 sm:p-10 selection:bg-accent-cyan/20 selection:text-white">
        <DialogHeader className="space-y-4 pb-6 border-b border-white/[0.08]">
          {/* Top Status & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Type & Status Combined Badge */}
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border ${typeStatus.style}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${typeStatus.dot}`}
                  aria-hidden="true"
                />
                <span className="font-semibold">{typeStatus.label}</span>
              </span>

              {/* Industry / SubIndustry */}
              <span className="text-xs font-mono text-muted-foreground px-2.5 py-1 rounded bg-white/5 border border-white/10">
                {project.industry}
              </span>

              {project.subIndustry && (
                <span className="text-xs font-mono text-muted-foreground/80 hidden sm:inline px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                  {project.subIndustry}
                </span>
              )}
            </div>

            <div className="text-xs font-mono text-muted-foreground">
              {project.year} &middot; SS STUDIO
            </div>
          </div>

          <DialogTitle className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-foreground">
            {project.title}
          </DialogTitle>

          <DialogDescription className="text-sm sm:text-base font-mono text-accent-cyan/90">
            {project.subIndustry || project.category || project.industry}
          </DialogDescription>
        </DialogHeader>

        {/* Modal Scrollable Body */}
        <div className="space-y-8 pt-4">
          {/* 1. Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050608]">
            <img
              src={heroImageSrc}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Context Advisory for Concepts / Demos */}
          {project.type === "CONCEPT" && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
              <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Concept Flagship: </span>
                This project was conceived, designed, and engineered by SS STUDIO as an editorial exploration of digital architecture and interaction design for the {project.industry} sector.
              </div>
            </div>
          )}

          {project.type === "INDUSTRY DEMO" && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Industry Demonstration: </span>
                This project was created by SS STUDIO to demonstrate structured industrial information architecture, interactive product finders, and commercial RFQ workflows.
              </div>
            </div>
          )}

          {/* 2. Overview / Summary */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
              01 &middot; PROJECT SUMMARY
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.description || project.shortDescription}
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
                    {typeof caseStudy.challenge === "object"
                      ? caseStudy.challenge.description
                      : caseStudy.challenge}
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

          {/* 4. Services Delivered */}
          {servicesList.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                <span>04 &middot; SERVICES &amp; DELIVERABLES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesList.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-surface-elevated/40 border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-foreground/90 leading-snug">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Delivered Architecture / Features */}
          {caseStudy?.whatWeBuilt && caseStudy.whatWeBuilt.length > 0 && (
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                05 &middot; DELIVERED ARCHITECTURE
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.whatWeBuilt.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-surface-elevated/40 border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-muted-foreground leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Key System Modules */}
          {caseStudy?.sections && caseStudy.sections.length > 0 && (
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                06 &middot; KEY SYSTEM MODULES
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

          {/* 7. Technology Stack */}
          {techList.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                <Wrench className="w-3.5 h-3.5 text-accent-cyan" />
                <span>07 &middot; TECHNOLOGY ECOSYSTEM</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#10141f] border border-white/[0.08] text-xs font-mono text-accent-cyan/90 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 8. Visual Gallery */}
          {galleryItems.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                08 &middot; VISUAL GALLERY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryItems.map((item, idx) => (
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

          {/* 9. Delivered Result */}
          {caseStudy?.result && (
            <div className="p-5 rounded-xl bg-surface-elevated/60 border border-white/[0.08] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  ARCHITECTURAL DELIVERABLE
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>
            </div>
          )}

          {/* 10. Action Footer */}
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
                Official SS STUDIO Project Dossier
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
