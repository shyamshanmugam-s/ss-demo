import { useState, useRef, type FC } from "react";
import { useGSAPContext } from "@/hooks/use-gsap-context";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/gsap";
import {
  Factory,
  Compass,
  Coffee,
  UtensilsCrossed,
  HardHat,
  Home,
  Dumbbell,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenCommission: () => void;
}

interface IndustryData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  aesthetic: string;
  icon: typeof Factory;
  keyHighlights: string[];
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    category: "B2B / Engineering",
    tagline: "Technical precision, equipment catalogs & structured quotation inquiries.",
    description:
      "Engineered for precision machining, tooling manufacturers, and industrial suppliers. Focuses on technical machinery specifications, material parameters, quality processes, and commercial RFQ pathways.",
    aesthetic: "Technical · Precise · Structured",
    icon: Factory,
    keyHighlights: [
      "Machinery & Plant Capacity Catalogs",
      "Structured RFQ / Quotation Forms",
      "Quality & Certification Documentation",
      "Responsive Desktop & Mobile Layout",
    ],
  },
  {
    id: "interior-arch",
    name: "Interior & Architecture",
    category: "Design / Spatial",
    tagline: "Editorial restraint, generous whitespace & spatial materiality.",
    description:
      "Crafted for architectural practices, spatial designers, and interior ateliers. Emphasizes full-bleed project photography, editorial typography, and project storytelling.",
    aesthetic: "Editorial · Architectural · Minimal",
    icon: Compass,
    keyHighlights: [
      "Full-Bleed Spatial Image Galleries",
      "Project Case Study Architecture",
      "Tactile Typography & Minimal Pacing",
      "Fluid Smooth-Scroll Navigation",
    ],
  },
  {
    id: "cafe",
    name: "Café & Coffee Roasters",
    category: "Hospitality / Specialty",
    tagline: "Atmospheric branding, origin storytelling & digital discovery.",
    description:
      "Tailored for specialty coffee shops, artisan bakeries, and roasteries. Captures shop ambiance, bean roast profiles, seasonal specials, and clear location details.",
    aesthetic: "Warm · Organic · Atmospheric",
    icon: Coffee,
    keyHighlights: [
      "Interactive Digital Menu Cards",
      "Roast Profile & Origin Storytelling",
      "Location & Hours Discovery",
      "E-Commerce & Merchandise Readiness",
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant & Fine Dining",
    category: "Culinary / Hospitality",
    tagline: "Sensory culinary presentation & direct reservation pathways.",
    description:
      "Built for contemporary dining rooms and culinary concepts. Prioritizes food photography, seasonal tasting menus, chef philosophy, and table booking options.",
    aesthetic: "Premium · Elegant · Food-Focused",
    icon: UtensilsCrossed,
    keyHighlights: [
      "Seasonal Menu Presentations",
      "Direct Table Reservation Linking",
      "Private Dining & Event Inquiries",
      "Mobile-Optimized Menu Discovery",
    ],
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    category: "Commercial Infrastructure",
    tagline: "Structural authority, safety records & project credentials.",
    description:
      "Structured for commercial builders, civil engineering contractors, and infrastructure developers. Establishes project scale, safety milestones, and company credentials.",
    aesthetic: "Bold · Architectural · Strong",
    icon: HardHat,
    keyHighlights: [
      "Project Portfolio Timelines",
      "Safety & Compliance Documentation",
      "Capability & Technical References",
      "Commercial Inquiry & Contact Hub",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Developments",
    category: "Property / Commercial",
    tagline: "Property showcases, floorplans & clear inquiry pathways.",
    description:
      "Engineered for boutique agencies, residential developments, and commercial leasing. Focuses on property highlights, neighborhood context, and direct inquiries.",
    aesthetic: "Clean · Premium · Property-Focused",
    icon: Home,
    keyHighlights: [
      "Property Specifications & Galleries",
      "Floorplan & Architectural Views",
      "Neighborhood Location Overview",
      "Direct Broker / Agent Contact Forms",
    ],
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness Studios",
    category: "Fitness / Wellness",
    tagline: "High-energy visual pacing, membership tiers & class schedules.",
    description:
      "Built for boutique fitness studios, CrossFit gyms, and personal training facilities. Presents class schedules, trainer profiles, and membership options.",
    aesthetic: "Dark · Energetic · Powerful",
    icon: Dumbbell,
    keyHighlights: [
      "Class Schedule & Booking Modules",
      "Transparent Membership Tier Comparison",
      "Trainer & Coach Profiles",
      "Trial Pass Inquiry Forms",
    ],
  },
];

export const IndustriesSection: FC<IndustriesSectionProps> = ({
  onOpenCommission: _onOpenCommission,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAPContext(() => {
    if (prefersReducedMotion) return;

    gsap.from(".industry-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.06,
      ease: "power3.out",
    });
  }, sectionRef, [prefersReducedMotion]);

  const activeIndustry = INDUSTRIES[activeTab];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative z-10 py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-t border-white/[0.06]"
      aria-label="Industries and Vertical Solutions"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.07]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>03 &middot; TAILORED BY INDUSTRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-foreground font-display">
              Website Experiences Across Industries
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal leading-relaxed">
              Every industry requires a distinct visual identity, content structure, and user journey.
              We build websites that match the operational reality and audience expectations of your specific niche.
            </p>
          </div>
        </div>

        {/* Interactive Industry Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Industry Selector List (5 Columns) */}
          <div className="lg:col-span-5 space-y-2">
            {INDUSTRIES.map((ind, index) => {
              const Icon = ind.icon;
              const isSelected = activeTab === index;

              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`industry-item w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-surface-elevated border-primary/50 shadow-[0_4px_20px_rgba(0,242,254,0.08)]"
                      : "bg-[#090b0f]/60 border-white/[0.06] hover:border-white/15 hover:bg-[#0c0f16]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-primary/15 text-primary border border-primary/30"
                          : "bg-surface-elevated text-muted-foreground border border-white/[0.06]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold font-display ${
                          isSelected ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {ind.name}
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        {ind.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs ${
                      isSelected ? "text-primary font-bold" : "text-muted-foreground/40"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Industry Deep Dive Card (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl border border-white/[0.09] bg-[#090b0f]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Card Header */}
              <div className="space-y-4 pb-6 border-b border-white/[0.07]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-primary uppercase tracking-wider">
                        INDUSTRY FOCUS 0{activeTab + 1}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-display">
                        {activeIndustry.name}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-surface-elevated border border-white/10 text-[11px] font-mono text-muted-foreground">
                    {activeIndustry.category}
                  </div>
                </div>

                <div className="text-sm font-mono text-primary/90 font-medium">
                  {activeIndustry.tagline}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Aesthetic & Visual Identity Direction */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span>Visual &amp; Aesthetic Identity Direction</span>
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-[#11141e] border border-white/[0.07] font-mono text-xs text-foreground font-semibold">
                  {activeIndustry.aesthetic}
                </div>
              </div>

              {/* Key Website Modules Checklist */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  Tailored Functional Modules
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeIndustry.keyHighlights.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#0d1017] border border-white/[0.05] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-muted-foreground leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
