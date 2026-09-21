import { useRef, type FC } from "react";
import { type Project } from "@/types";
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

  // Subtle 3-second entrance reveal animation
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
      aria-label={`${project.title} - ${project.category}`}
    >
      <div className="space-y-8 sm:space-y-10">
        {/* 1. Project Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="text-accent-cyan font-bold tracking-widest">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="text-white/20">&middot;</span>
              <span className="uppercase tracking-widest text-muted-foreground/80 font-medium">
                {project.industry}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-foreground group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono border ${
                project.tag === "LIVE"
                  ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                  : "bg-cyan-950/40 border-cyan-500/30 text-accent-cyan"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.tag === "LIVE" ? "bg-emerald-400 animate-pulse" : "bg-accent-cyan"
                }`}
                aria-hidden="true"
              />
              <span className="font-semibold tracking-wider">{project.tag}</span>
            </span>

            <span className="text-xs font-mono text-muted-foreground/60">
              {project.year}
            </span>
          </div>
        </div>

        {/* 2. Large Cinematic Visual Viewport */}
        <div
          data-cursor="VIEW"
          onClick={handleOpenDetail}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050608] cursor-pointer group/image"
        >
          <div ref={imageWrapperRef} className="w-full h-full overflow-hidden will-change-transform">
            <img
              src={project.image}
              alt={`${project.title} - ${project.category}`}
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
            {project.category}
          </div>
        </div>

        {/* 3. Project Summary & Technical Details Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          <div className="lg:col-span-6 space-y-1">
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-4">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#10141f] border border-white/[0.06] text-[10px] sm:text-[11px] font-mono tracking-wider text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={handleOpenDetail}
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider font-bold text-accent-cyan hover:text-white transition-colors cursor-pointer py-1"
                data-cursor="VIEW"
              >
                <span>CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent-cyan transition-colors py-1"
                  data-cursor="OPEN"
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
