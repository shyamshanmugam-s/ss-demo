import { useState, useRef, useEffect, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Coffee,
  UtensilsCrossed,
  Factory,
  HardHat,
  Home,
  Dumbbell,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenCommission: () => void;
}

interface IndustryData {
  id: string;
  number: string;
  name: string;
  category: string;
  positioning: string;
  image: string;
  icon: typeof Factory;
  digitalNeeds: string[];
  tailoredServices: string[];
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "interior-arch",
    number: "01",
    name: "INTERIOR / ARCHITECTURE",
    category: "Spatial Design & Architectural Practices",
    positioning:
      "Digital portfolios and spatial experiences crafted with editorial pacing, generous whitespace, and tactile material studies.",
    image: "/assets/images/atelier-forma-architecture.jpg",
    icon: Compass,
    digitalNeeds: [
      "Project showcases & monograph exhibitions",
      "Tactile material & texture study boards",
      "Spatial storytelling with high-contrast typography",
      "Client consultation & commission enquiries",
    ],
    tailoredServices: [
      "Custom UI/UX & Editorial Layout",
      "Interactive Material Palette Modules",
      "High-Resolution Spatial Image Dossiers",
      "Smooth Motion & Architectural Pacing",
    ],
  },
  {
    id: "cafe",
    number: "02",
    name: "CAFÉ",
    category: "Specialty Coffee & Artisan Spaces",
    positioning:
      "Warm, atmospheric digital spaces exploring coffee craft, tasting notes, culinary menus, and the ritual of slowing down.",
    image: "/assets/images/ember-and-grain-cafe.jpg",
    icon: Coffee,
    digitalNeeds: [
      "Atmospheric brand & interior experience",
      "Seasonal kitchen & bakery menu presentations",
      "Single-origin roast profiles & tasting notes",
      "Table reservations & private event enquiries",
    ],
    tailoredServices: [
      "Editorial Hospitality UI/UX Design",
      "Interactive Digital Menu Systems",
      "Origin & Craft Storytelling Architecture",
      "Fast Mobile Performance & Local Discovery",
    ],
  },
  {
    id: "restaurant",
    number: "03",
    name: "RESTAURANT",
    category: "Fine Dining & Culinary Concepts",
    positioning:
      "Cinematic dining presentations capturing seasonal provenance, multi-course sequencing, and seamless table reservations.",
    image: "/assets/images/lume-restaurant.jpg",
    icon: UtensilsCrossed,
    digitalNeeds: [
      "Curated seasonal tasting menu presentations",
      "Four-stage dining sequence storytelling",
      "Direct table reservation integrations",
      "Private dining & bespoke event booking",
    ],
    tailoredServices: [
      "Cinematic Culinary UI/UX Architecture",
      "Interactive Dish Detail Modal Experiences",
      "Material & Spatial Storytelling Modules",
      "Direct Table Reservation Inquiry Funnels",
    ],
  },
  {
    id: "manufacturing",
    number: "04",
    name: "MANUFACTURING",
    category: "Engineering & Industrial Equipment",
    positioning:
      "Structured digital platforms for precision manufacturers, engineered around technical discovery, product specifications, and RFQ funnels.",
    image: "/assets/images/forge-flow-industrial.jpg",
    icon: Factory,
    digitalNeeds: [
      "Structured technical product catalogues",
      "Interactive guided product selectors & finders",
      "Visual pumping & assembly flow schematics",
      "Commercial RFQ & quotation request workflows",
    ],
    tailoredServices: [
      "B2B Industrial Information Architecture",
      "3-Step Guided Product Finder Wizards",
      "Commercial RFQ & Inquiry Funnel Systems",
      "High-Performance Technical Frontend Layouts",
    ],
  },
  {
    id: "construction",
    number: "05",
    name: "CONSTRUCTION",
    category: "Engineering & Heavy Civil Infrastructure",
    positioning:
      "Precision-driven digital presences establishing structural scale, tectonic rigor, engineering processes, and tender credentials.",
    image: "/assets/images/axis-structures.jpg",
    icon: HardHat,
    digitalNeeds: [
      "Monumental project dossiers & civil feats",
      "Material taxonomy & blueprint system breakdowns",
      "Phase-by-phase engineering process timelines",
      "Commercial tender & project inquiry generation",
    ],
    tailoredServices: [
      "Structural Engineering UI/UX Design",
      "Interactive Blueprint & Dossier Systems",
      "Milestone & Safety Process Breakdowns",
      "Validated Commercial Inquiry Hubs",
    ],
  },
  {
    id: "real-estate",
    number: "06",
    name: "REAL ESTATE",
    category: "Residential Developments & Properties",
    positioning:
      "Refined property launch experiences focused on architectural stillness, spatial layouts, amenity curation, and private enquiry qualification.",
    image: "/assets/images/verra-residences.jpg",
    icon: Home,
    digitalNeeds: [
      "Interactive residence showcase & floorplans",
      "Tactile materiality & communal amenity curation",
      "Precinct vector orientation diagrams",
      "Private residential enquiry & qualification funnels",
    ],
    tailoredServices: [
      "Bespoke Property Launch UI/UX",
      "Multi-View Floorplan & Modal Dossiers",
      "Architectural Material Palette Studies",
      "Validated Private Enquiry Workflows",
    ],
  },
  {
    id: "fitness",
    number: "07",
    name: "FITNESS",
    category: "Performance Studios & Recovery",
    positioning:
      "High-contrast athletic interfaces centered on strength disciplines, restorative modality systems, coaching credentials, and membership onboarding.",
    image: "/assets/images/vanta-performance.jpg",
    icon: Dumbbell,
    digitalNeeds: [
      "Curated athletic discipline presentations",
      "Dedicated recovery suite & modality showcases",
      "Coaching roster credentials & philosophies",
      "Membership consultations & trial booking funnels",
    ],
    tailoredServices: [
      "Obsidian Athletic Studio UI/UX Design",
      "Interactive Training Program Modules",
      "Recovery Suite & Modality System Cards",
      "Private Membership Consultation Workflows",
    ],
  },
];

export const IndustriesSection: FC<IndustriesSectionProps> = ({
  onOpenCommission,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Entrance reveal for the industry selector list
  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".industry-selector-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 18,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  // Subtle crossfade animation when tab changes
  useEffect(() => {
    if (prefersReducedMotion || !panelRef.current) return;

    gsap.fromTo(
      panelRef.current,
      { opacity: 0.4, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [activeTab, prefersReducedMotion]);

  const handleScrollToWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeIndustry = INDUSTRIES[activeTab];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Industries and Commercial Sectors"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
              <span>02 &middot; INDUSTRIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-foreground font-display leading-[1.02]">
              BUILT AROUND
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                THE BUSINESS.
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Different industries require different digital experiences. SS STUDIO adapts strategy, design, content and technology to the way each business operates.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0 pb-1">
            <button
              type="button"
              onClick={handleScrollToWork}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs border border-white/15 hover:border-accent-cyan/40 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
            </button>
          </div>
        </div>

        {/* Interactive Industry Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-10 sm:mt-12 lg:mt-14">
          {/* Mobile: Horizontally Scrollable Sector Chips (< lg) */}
          <div
            role="tablist"
            aria-label="Industry selection tabs (Mobile)"
            className="lg:hidden flex overflow-x-auto pb-2 gap-2.5 scrollbar-none -mx-4 px-4 sm:-mx-8 sm:px-8 select-none"
          >
            {INDUSTRIES.map((ind, index) => {
              const Icon = ind.icon;
              const isSelected = activeTab === index;

              return (
                <button
                  key={`m-${ind.id}`}
                  id={`m-industry-tab-${ind.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`industry-panel-${ind.id}`}
                  tabIndex={0}
                  onClick={() => setActiveTab(index)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl border font-mono text-xs transition-all duration-200 flex items-center gap-2.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                    isSelected
                      ? "bg-accent-cyan/15 border-accent-cyan/50 text-foreground font-bold shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                      : "bg-[#090b0f]/80 border-white/[0.08] text-muted-foreground hover:border-white/20 hover:text-foreground"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-accent-cyan" : "text-muted-foreground/60"
                    }`}
                  />
                  <span className="font-display font-bold">{ind.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-accent-cyan/20 text-accent-cyan"
                        : "bg-white/5 text-muted-foreground/50"
                    }`}
                  >
                    {ind.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop: Vertical Industry Selector List (>= lg) */}
          <div
            role="tablist"
            aria-label="Industry selection tabs (Desktop)"
            className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-28 flex-col space-y-2"
          >
            {INDUSTRIES.map((ind, index) => {
              const Icon = ind.icon;
              const isSelected = activeTab === index;

              return (
                <button
                  key={ind.id}
                  id={`industry-tab-${ind.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`industry-panel-${ind.id}`}
                  tabIndex={0}
                  onClick={() => setActiveTab(index)}
                  className={`industry-selector-item w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                    isSelected
                      ? "bg-surface-elevated/95 border-accent-cyan/50 shadow-[0_4px_24px_rgba(0,242,254,0.08)] border-l-4 border-l-accent-cyan"
                      : "bg-[#090b0f]/60 border-white/[0.06] hover:border-white/15 hover:bg-[#0c0f16]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isSelected
                          ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                          : "bg-surface-elevated text-muted-foreground border border-white/[0.06]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div
                        className={`text-xs sm:text-sm font-bold font-display tracking-tight ${
                          isSelected ? "text-foreground font-extrabold" : "text-foreground/80"
                        }`}
                      >
                        {ind.name}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground truncate max-w-[240px]">
                        {ind.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs shrink-0 ${
                      isSelected ? "text-accent-cyan font-bold" : "text-muted-foreground/40"
                    }`}
                  >
                    {ind.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Industry Editorial Panel (7 Columns) */}
          <div className="lg:col-span-7">
            <div
              ref={panelRef}
              id={`industry-panel-${activeIndustry.id}`}
              role="tabpanel"
              aria-labelledby={`industry-tab-${activeIndustry.id}`}
              className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090b0f]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-9 space-y-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Card Header & Metadata */}
              <div className="space-y-4 pb-6 border-b border-white/[0.07]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                      <ActiveIcon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider">
                        SECTOR 0{activeTab + 1} / 07
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">
                        {activeIndustry.name}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-surface-elevated border border-white/10 text-[10px] sm:text-[11px] font-mono text-muted-foreground">
                    {activeIndustry.category}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                  {activeIndustry.positioning}
                </p>
              </div>

              {/* Visual Showcase */}
              <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#050608]">
                <img
                  src={activeIndustry.image}
                  alt={`${activeIndustry.name} - ${activeIndustry.category}`}
                  className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-[#090b0f]/85 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-wider text-accent-cyan select-none">
                  SS STUDIO &middot; {activeIndustry.name}
                </div>
              </div>

              {/* Two-Column Grid: Digital Needs & Tailored Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* 1. Relevant Digital Needs */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-cyan uppercase font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>RELEVANT DIGITAL NEEDS</span>
                  </div>
                  <div className="space-y-2">
                    {activeIndustry.digitalNeeds.map((need, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground leading-snug">
                          {need}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Tailored SS STUDIO Services */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SUITABLE STUDIO SERVICES</span>
                  </div>
                  <div className="space-y-2">
                    {activeIndustry.tailoredServices.map((service, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05] flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs font-mono text-foreground/90 leading-snug">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 sm:mt-12 lg:mt-14 pt-8 border-t border-white/[0.07]">
          <div className="text-xs font-mono text-muted-foreground">
            SS STUDIO &middot; TAILORED SECTOR ARCHITECTURE
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="button"
              onClick={handleScrollToWork}
              variant="outline"
              size="default"
              className="font-mono text-xs tracking-wider border-white/15 hover:border-accent-cyan/40 text-muted-foreground hover:text-foreground gap-2 w-full sm:w-auto justify-center"
              data-cursor="EXPLORE"
            >
              <span>EXPLORE A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
            </Button>

            <Button
              type="button"
              onClick={onOpenCommission}
              variant="default"
              size="default"
              className="font-mono text-xs tracking-wider bg-accent-cyan hover:bg-accent-cyan/90 text-void font-bold gap-2 w-full sm:w-auto justify-center"
              data-cursor="OPEN"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
