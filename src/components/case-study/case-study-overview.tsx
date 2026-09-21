import { type FC } from "react";
import { type Project } from "@/types";
import { Layers, Wrench, CheckCircle2 } from "lucide-react";

interface CaseStudyOverviewProps {
  project: Project;
}

export const CaseStudyOverview: FC<CaseStudyOverviewProps> = ({ project }) => {
  const caseStudy = project.caseStudy;
  const servicesList = project.services || [];
  const techStack = project.technology || project.technologies || [];

  return (
    <section
      id="overview"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Project Overview & Dossier"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
            <span>02 &middot; PROJECT DOSSIER &amp; OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            EXECUTIVE SPECIFICATION
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {caseStudy?.summary || project.description}
          </p>
        </div>

        {/* Structured Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#080a0f] border border-white/[0.08]">
          <div className="space-y-1 p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.04]">
            <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
              PROJECT NAME
            </span>
            <div className="font-display font-bold text-base text-foreground">
              {project.title}
            </div>
            <div className="text-xs font-mono text-accent-cyan">
              {project.category || project.subIndustry || project.industry}
            </div>
          </div>

          <div className="space-y-1 p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.04]">
            <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
              {project.type === "CLIENT PROJECT" ? "CLIENT NAME" : "BUSINESS REFERENCED"}
            </span>
            <div className="font-display font-bold text-base text-foreground">
              {project.clientName || "SS STUDIO CONCEPT"}
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              {project.industry} &middot; {project.subIndustry}
            </div>
          </div>

          <div className="space-y-1 p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.04]">
            <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
              TYPE &middot; STATUS
            </span>
            <div className="font-display font-bold text-base text-amber-300">
              {project.type === "INDUSTRY DEMO" && project.status === "DEMO"
                ? "INDUSTRY DEMO · DEMO"
                : `${project.type} · ${project.status}`}
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Relationship: Conceptual Digital Experience
            </div>
          </div>

          <div className="space-y-1 p-3.5 rounded-xl bg-surface-elevated/40 border border-white/[0.04]">
            <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase">
              LOCATION &middot; ARCHITECTURE
            </span>
            <div className="font-display font-bold text-base text-foreground">
              {project.location || "Digital Flagship Concept"}
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              {project.year} &middot; SS STUDIO Architecture
            </div>
          </div>
        </div>

        {/* Services & Technology Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Services Pillar */}
          <div className="lg:col-span-6 space-y-4 p-6 sm:p-8 rounded-2xl bg-[#080a0f] border border-white/[0.07]">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4 text-accent-cyan" />
              <span>SERVICES &amp; DISCIPLINES DELIVERED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {servicesList.map((service, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface-elevated/50 border border-white/[0.05] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-foreground/90">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Pillar */}
          <div className="lg:col-span-6 space-y-4 p-6 sm:p-8 rounded-2xl bg-[#080a0f] border border-white/[0.07]">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider font-bold">
              <Wrench className="w-4 h-4 text-accent-cyan" />
              <span>TECHNOLOGY ECOSYSTEM</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              Engineered exclusively with verified modern web technologies, performance libraries, and accessible headless primitives.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#111622] border border-white/[0.09] text-xs font-mono text-accent-cyan/90 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
