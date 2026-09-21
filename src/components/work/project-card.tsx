import { useRef, type FC } from "react";
import { type Project, type ProjectStatus, type ProjectType } from "@/types";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
  total: number;
  onOpenCommission: () => void;
  onSelectProject?: (project: Project) => void;
  isSticky?: boolean;
}

const formatTypeStatusBadge = (type: ProjectType, status: ProjectStatus) => {
  if (type === "INDUSTRY DEMO" && status === "DEMO") {
    return {
      label: "INDUSTRY DEMO · DEMO",
      style: "bg-amber-950/40 border-amber-500/30 text-amber-300",
      dot: "bg-amber-400",
    };
  }
  if (type === "CONCEPT" && status === "LIVE") {
    return {
      label: "CONCEPT · LIVE",
      style: "bg-emerald-950/40 border-emerald-500/30 text-emerald-400",
      dot: "bg-emerald-400 animate-pulse",
    };
  }
  if (type === "CLIENT PROJECT" && status === "LIVE") {
    return {
      label: "CLIENT · LIVE",
      style: "bg-blue-950/40 border-blue-500/30 text-blue-300",
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
    style: "bg-cyan-950/40 border-cyan-500/30 text-accent-cyan",
    dot: "bg-accent-cyan",
  };
};

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  index = 0,
  total,
  onOpenCommission: _onOpenCommission,
  onSelectProject,
  isSticky: _isSticky = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const typeStatus = formatTypeStatusBadge(project.type, project.status);
  const imageSrc = project.thumbnail || project.image;
  const techStack = project.technology || project.technologies || [];

  // Subtle entrance reveal animation
  useGSAPContext(
    () => {
      if (prefersReducedMotion || !imageWrapperRef.current || !cardRef.current) return;

      gsap.fromTo(
        imageWrapperRef.current,
        {
          opacity: 0,
          scale: 1.06,
          y: 8,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    cardRef,
    [prefersReducedMotion]
  );

  const handleOpenDetail = () => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <article
      ref={cardRef}
      className="group relative w-full rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#07090e]/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/20"
      aria-label={`${project.title} - ${project.industry}`}
    >
      <div className="space-y-8 sm:space-y-10">
        {/* 1. Project Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-muted-foreground">
              <span className="text-accent-cyan font-bold tracking-widest">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="text-white/20">&middot;</span>
              <span className="uppercase tracking-widest text-muted-foreground/90 font-medium">
                {project.industry}
              </span>
              {project.subIndustry && (
                <>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-muted-foreground/70 hidden md:inline">
                    {project.subIndustry}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Unified Type & Status Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono border ${typeStatus.style}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${typeStatus.dot}`}
                aria-hidden="true"
              />
              <span className="font-semibold tracking-wider">{typeStatus.label}</span>
            </span>

            {/* Year */}
            <span className="text-xs font-mono text-muted-foreground/60 pl-1">
              {project.year}
            </span>
          </div>
        </div>

        {/* 2. Dominant Primary Visual Viewport */}
        <div
          data-cursor="VIEW"
          onClick={handleOpenDetail}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050608] cursor-pointer group/image"
        >
          <div ref={imageWrapperRef} className="w-full h-full overflow-hidden will-change-transform">
            <img
              src={imageSrc}
              alt={`${project.title} - ${project.industry}`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/image:scale-[1.03] filter saturate-[0.98] contrast-[1.03]"
            />
          </div>

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Action Pill */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-full bg-[#0a0c10]/90 border border-white/20 backdrop-blur-md text-[11px] font-mono tracking-wider text-foreground flex items-center gap-2 shadow-2xl group-hover/image:border-accent-cyan group-hover/image:text-accent-cyan transition-all select-none">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>

          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3.5 py-1 rounded bg-[#0a0c10]/85 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-wider text-accent-cyan select-none">
            {project.subIndustry || project.category || project.industry}
          </div>
        </div>

        {/* 3. Project Summary & Action Details Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          <div className="lg:col-span-6 space-y-1">
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-4">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#10141f] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button
                type="button"
                onClick={handleOpenDetail}
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer px-2.5 py-2.5 -my-2.5 min-h-[44px]"
                data-cursor="VIEW"
                aria-label={`View ${project.title} case study`}
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent-cyan transition-colors px-2.5 py-2.5 -my-2.5 min-h-[44px]"
                  data-cursor="OPEN"
                  aria-label={`View live website for ${project.title}`}
                >
                  <span>VIEW LIVE SITE &rarr;</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
