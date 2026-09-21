import { useState, useCallback } from "react";
import { Navbar } from "./components/navigation/navbar";
import { HeroGateway } from "./components/hero/hero-gateway";
import { SelectedWorks } from "./components/work/selected-works";
import {
  AboutSection,
  CapabilitiesSection,
  ProcessSection,
  BackgroundSection,
  ContactSection,
} from "./components/sections";
import { Marquee } from "./components/ui/marquee";
import { DigitalLab } from "./components/lab/digital-lab";
import { Footer } from "./components/navigation/footer";
import { ProjectDetailModal } from "./components/work/project-detail-modal";
import { CommissionModal } from "./components/commission/commission-modal";
import { CustomCursor } from "./components/ui/custom-cursor";
import { LoadingScreen } from "./components/ui/loading-screen";
import { LenisProvider } from "./animations/lenis-provider";
import { type Project } from "./types";

export function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [commissionOpen, setCommissionOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-[#050608] text-[#f8fafc] overflow-x-hidden selection:bg-[#00f2fe]/20 selection:text-white font-sans antialiased">
        {/* Cinematic Loading Gate */}
        {!loadingComplete && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}

        {/* Desktop Contextual Custom Cursor */}
        <CustomCursor />

        {/* Minimal Sticky Architectural Header */}
        <Navbar onOpenCommission={() => setCommissionOpen(true)} />

        {/* Main Experience Flow */}
        <main id="main-content">
          <HeroGateway onOpenCommission={() => setCommissionOpen(true)} />
          <AboutSection />
          <CapabilitiesSection onOpenCommission={() => setCommissionOpen(true)} />
          <SelectedWorks
            onOpenCommission={() => setCommissionOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
          <Marquee />
          <DigitalLab onOpenCommission={() => setCommissionOpen(true)} />
          <ProcessSection onOpenCommission={() => setCommissionOpen(true)} />
          <BackgroundSection />
          <ContactSection onOpenCommission={() => setCommissionOpen(true)} />
        </main>

        {/* Minimal Studio Footer */}
        <Footer onOpenCommission={() => setCommissionOpen(true)} />

        {/* In-Depth Case Study Modal */}
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
