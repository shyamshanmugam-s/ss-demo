import { useState, useCallback } from "react";
import { Navbar } from "./components/navigation/navbar";
import { HeroGateway } from "./components/hero/hero-gateway";
import { SelectedWorks } from "./components/work/selected-works";
import {
  IndustriesSection,
  ServicesSection,
  SystemsSection,
  ProcessSection,
  WhySSSection,
  ContactSection,
} from "./components/sections";
import { Footer } from "./components/navigation/footer";
import { ProjectDetailModal } from "./components/work/project-detail-modal";
import { CommissionModal } from "./components/commission/commission-modal";
import { CaseStudyPage } from "./components/case-study";
import { CustomCursor } from "./components/ui/custom-cursor";
import { LoadingScreen } from "./components/ui/loading-screen";
import { LenisProvider } from "./animations/lenis-provider";
import { useRouter } from "./lib/router";
import { type Project } from "./types";

export function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [commissionOpen, setCommissionOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isCaseStudy, slug, navigate } = useRouter();

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  const handleSelectProject = useCallback(
    (project: Project) => {
      navigate(`/work/${project.slug}`);
    },
    [navigate]
  );

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#00f2fe]/20 selection:text-white font-sans antialiased">
        {/* Cinematic Loading Gate */}
        {!loadingComplete && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}

        {/* Desktop Contextual Custom Cursor */}
        <CustomCursor />

        {/* Conditional Route: Case Study Page vs Homepage */}
        {isCaseStudy && slug ? (
          <CaseStudyPage
            slug={slug}
            onNavigate={navigate}
            onOpenCommission={() => setCommissionOpen(true)}
          />
        ) : (
          <>
            {/* Minimal Sticky Architectural Header */}
            <Navbar onOpenCommission={() => setCommissionOpen(true)} />

            {/* Main Experience Flow */}
            <main id="main-content">
              <HeroGateway onOpenCommission={() => setCommissionOpen(true)} />
              <SelectedWorks
                onOpenCommission={() => setCommissionOpen(true)}
                onSelectProject={handleSelectProject}
              />
              <IndustriesSection onOpenCommission={() => setCommissionOpen(true)} />
              <ServicesSection onOpenCommission={() => setCommissionOpen(true)} />
              <SystemsSection onOpenCommission={() => setCommissionOpen(true)} />
              <ProcessSection onOpenCommission={() => setCommissionOpen(true)} />
              <WhySSSection onOpenCommission={() => setCommissionOpen(true)} />
              <ContactSection onOpenCommission={() => setCommissionOpen(true)} />
            </main>

            {/* Minimal Studio Footer */}
            <Footer onOpenCommission={() => setCommissionOpen(true)} />
          </>
        )}

        {/* Quick Dossier Modal (Kept for compatibility) */}
        <ProjectDetailModal
          project={selectedProject}
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
          onStartProject={() => {
            setSelectedProject(null);
            setCommissionOpen(true);
          }}
        />

        {/* Project Commission Inquiry Modal */}
        <CommissionModal
          open={commissionOpen}
          onOpenChange={setCommissionOpen}
        />
      </div>
    </LenisProvider>
  );
}

export default App;
