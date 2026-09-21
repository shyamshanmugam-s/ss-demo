import { useState, useEffect, type FC } from "react";
import { type Project } from "@/types";
import { SELECTED_PROJECTS } from "@/data/projects";
import { CaseStudyHero } from "./case-study-hero";
import { CaseStudyOverview } from "./case-study-overview";
import { CaseStudyBusinessContext } from "./case-study-business-context";
import { CaseStudyStrategy } from "./case-study-strategy";
import { CaseStudyDiscovery } from "./case-study-discovery";
import { CaseStudyRfq } from "./case-study-rfq";
import { CaseStudyEngineering } from "./case-study-engineering";
import { CaseStudyVisualSystem } from "./case-study-visual-system";
import { CaseStudyResponsive } from "./case-study-responsive";
import { CaseStudyDeliverables } from "./case-study-deliverables";
import { CaseStudyNextProject } from "./case-study-next-project";
import { Footer } from "@/components/navigation/footer";

interface CaseStudyPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenCommission: () => void;
}

export const CaseStudyPage: FC<CaseStudyPageProps> = ({
  slug,
  onNavigate,
  onOpenCommission,
}) => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Locate project by slug or ID with fallback aliases
  const currentIndex = SELECTED_PROJECTS.findIndex(
    (p) =>
      p.slug === slug ||
      p.id === slug ||
      (slug === "ember-grain" && (p.slug === "ember-and-grain" || p.id === "ember-and-grain")) ||
      (slug === "ember-and-grain" && (p.slug === "ember-grain" || p.id === "ember-grain")) ||
      (slug === "axis" && (p.slug === "axis-structures" || p.id === "axis-structures")) ||
      (slug === "axis-structures" && (p.slug === "axis" || p.id === "axis"))
  );

  // If slug is not found, display a polished 404 state
  if (currentIndex === -1) {
    return (
      <div className="min-h-screen bg-void text-foreground flex flex-col items-center justify-center p-6 text-center space-y-6">
        <div className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
          404 · CASE STUDY NOT FOUND
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
          CASE STUDY NOT LOCATED
        </h1>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          The requested portfolio case study does not exist or has been relocated within the SS STUDIO archive.
        </p>
        <button
          onClick={() => onNavigate("/")}
          className="px-6 py-3 rounded-lg bg-accent-cyan text-void font-mono text-xs font-bold hover:bg-accent-cyan/90 transition-colors cursor-pointer"
        >
          RETURN TO SELECTED WORK
        </button>
      </div>
    );
  }

  const project: Project = SELECTED_PROJECTS[currentIndex];
  const nextIndex = (currentIndex + 1) % SELECTED_PROJECTS.length;
  const nextProject = SELECTED_PROJECTS[nextIndex];

  // Dynamic SEO & Open Graph metadata update
  useEffect(() => {
    const originalTitle = document.title;
    const pageTitle = `${project.title} — SS STUDIO · ${project.industry}`;
    document.title = pageTitle;

    const newDesc = `${project.title}: ${project.shortDescription} Architecture and digital experience engineered by SS STUDIO.`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDesc = metaDescription?.getAttribute("content") || "";
    if (metaDescription) metaDescription.setAttribute("content", newDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const originalOgTitle = ogTitle?.getAttribute("content") || "";
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    const originalOgDesc = ogDesc?.getAttribute("content") || "";
    if (ogDesc) ogDesc.setAttribute("content", newDesc);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const originalTwitterTitle = twitterTitle?.getAttribute("content") || "";
    if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    const originalTwitterDesc = twitterDesc?.getAttribute("content") || "";
    if (twitterDesc) twitterDesc.setAttribute("content", newDesc);

    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDesc) metaDescription.setAttribute("content", originalDesc);
      if (ogTitle && originalOgTitle) ogTitle.setAttribute("content", originalOgTitle);
      if (ogDesc && originalOgDesc) ogDesc.setAttribute("content", originalOgDesc);
      if (twitterTitle && originalTwitterTitle) twitterTitle.setAttribute("content", originalTwitterTitle);
      if (twitterDesc && originalTwitterDesc) twitterDesc.setAttribute("content", originalTwitterDesc);
    };
  }, [project]);

  // Track active section for floating mini-index
  useEffect(() => {
    const sectionIds = ["overview", "strategy", "discovery", "engineering", "deliverables"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = [
    { id: "overview", label: "02 OVERVIEW" },
    { id: "strategy", label: "05 STRATEGY" },
    { id: "discovery", label: "07 DISCOVERY" },
    { id: "engineering", label: "09 ENGINEERING" },
    { id: "deliverables", label: "12 DELIVERABLES" },
  ];

  const handleJumpToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-void text-foreground font-sans selection:bg-[#00f2fe]/20 selection:text-white antialiased">
      {/* 01 · Hero */}
      <CaseStudyHero
        project={project}
        onBack={() => onNavigate("/")}
        onOpenCommission={onOpenCommission}
      />

      {/* Floating Desktop-Only Mini-Index (<nav>) */}
      <nav
        aria-label="Case study sections"
        className="hidden xl:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#07090e]/90 border border-white/[0.1] backdrop-blur-xl rounded-full p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] items-center gap-1 select-none"
      >
        {navSections.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleJumpToSection(item.id)}
              className={`px-3 py-1.5 rounded-full font-mono text-[10px] tracking-wider transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                isActive
                  ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Main Case Study Flow */}
      <main id="case-study-content">
        {/* 02 · Project Dossier & Overview */}
        <CaseStudyOverview project={project} />

        {/* 03 · Business Context & 04 · Challenge */}
        <CaseStudyBusinessContext project={project} />

        {/* 05 · Strategy & 06 · Experience / Design */}
        <CaseStudyStrategy project={project} />

        {/* 07 · Product Discovery */}
        <CaseStudyDiscovery project={project} />

        {/* 08 · RFQ / Enquiry Experience */}
        <CaseStudyRfq project={project} />

        {/* 09 · Engineering Architecture */}
        <CaseStudyEngineering project={project} />

        {/* 10 · Visual System & Taxonomy */}
        <CaseStudyVisualSystem project={project} />

        {/* 11 · Responsive Multi-Device Experience */}
        <CaseStudyResponsive project={project} />

        {/* 12 · Delivered Experience & 13 · Live Experience Access */}
        <CaseStudyDeliverables
          project={project}
          onOpenCommission={onOpenCommission}
        />

        {/* 14 · Next Project Gateway & Commission Trigger */}
        <CaseStudyNextProject
          nextProject={nextProject}
          onNavigateNext={(nextSlug) => onNavigate(`/work/${nextSlug}`)}
          onOpenCommission={onOpenCommission}
        />
      </main>

      {/* Studio Footer */}
      <Footer onOpenCommission={onOpenCommission} />
    </div>
  );
};
