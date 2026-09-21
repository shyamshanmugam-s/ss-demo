import { Project } from "@/types";

export type { Project };

export const PROJECTS: Project[] = [
  {
    id: "forge-flow",
    number: "01",
    title: "FORGE FLOW",
    slug: "forge-flow",
    industry: "Manufacturing",
    subIndustry: "Industrial Pumping Systems",
    type: "INDUSTRY DEMO",
    status: "DEMO",
    tag: "INDUSTRY DEMO",
    category: "Industrial Pumping Solutions — Concept Website",
    clientName: "V. VIDHYA INDUSTRIES",
    location: "Coimbatore, Tamil Nadu",
    year: "2026",
    shortDescription:
      "A premium digital experience concept for an industrial pump manufacturer, focused on product discovery, technical information architecture and commercial enquiry pathways.",
    description:
      "A premium digital experience concept for an industrial pump manufacturer, focused on product discovery, technical information architecture and commercial enquiry pathways.",
    thumbnail: "/assets/images/forge-flow-industrial.jpg",
    image: "/assets/images/forge-flow-industrial.jpg",
    heroImage: "/assets/images/forge-flow-industrial.jpg",
    tags: [
      "Manufacturing",
      "Industrial",
      "B2B",
      "Product Catalog",
      "RFQ Funnel",
      "Pumping Systems",
      "Coimbatore",
    ],
    featured: true,
    services: [
      "Strategy & Positioning",
      "Technical UI / UX Architecture",
      "Frontend Development",
      "Interactive Product Discovery",
      "Commercial RFQ Experience",
      "Responsive System Engineering",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Forge Flow is an industry demonstration created by SS STUDIO to showcase how an established industrial pump manufacturer can modernize its digital presence, clarify complex engineering specifications, guide commercial buyers to suitable pump families, and streamline quotation inquiries.",
      challenge: {
        title: "The Industrial Experience Challenge",
        description:
          "Industrial equipment websites frequently suffer from fragmented PDF catalogs, cluttered technical tables, and rigid navigation that obscure engineering quality. Diverse buyer personas—ranging from agricultural dealers and civil contractors to industrial plant engineers and domestic homeowners—require rapid, unambiguous product discovery without technical friction.",
        painPoints: [
          "Dense engineering specifications trapped in static, unsearchable PDF brochures",
          "Lack of guided pathways for non-technical buyers needing installation-matched pumps",
          "Generic template designs that fail to reflect manufacturing precision and heritage",
          "High-friction quotation workflows lacking context on application parameters",
        ],
        framing:
          "Framed by SS STUDIO as a digital experience architecture challenge: how to translate more than three decades of engineering expertise into a clear, modern digital experience.",
      },
      approach:
        "Engineered an obsidian-framed technical interface combining structured product tables, an interactive 3-step Guided Pump Finder, application domain visual mapping, and responsive GSAP scroll motion.",
      businessContext: {
        title: "Business Context & Heritage",
        paragraphs: [
          "V. Vidhya Industries is an industrial pump manufacturer located in Coimbatore, Tamil Nadu, India.",
          "With more than three decades of engineering expertise, the company produces a range of pumping solutions spanning domestic monoblocks, agricultural submersibles, horizontal openwell units, industrial pressure boosters, and stainless steel submersibles.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, product discovery, and commercial inquiry workflows tailored to the manufacturer's operational domain.",
        ],
        verifiedFacts: [
          "Industrial pump manufacturer located in Coimbatore, Tamil Nadu, India",
          "More than three decades of engineering expertise",
          "Comprehensive product spectrum across domestic, agricultural, and industrial pumping",
          "Core product categories: Monoblock, Submersible, Openwell, Pressure Boosting, Stainless Steel",
        ],
        clientContext: "V. Vidhya Industries · Coimbatore, Tamil Nadu, India",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the industrial manufacturing domain. Product specifications and categories reflect verified public domain engineering taxonomies.",
      },
      strategy: {
        title: "Strategy & Digital Architecture",
        description:
          "Rather than replicating static catalog brochures online, SS STUDIO architected an application-first digital strategy that categorizes pumps by operational environment, progressively discloses technical specs, and directs users toward tailored commercial enquiry pathways.",
        pillars: [
          {
            title: "Business-First Information Architecture",
            description:
              "Organized products around commercial use-cases (Domestic, Agricultural, Industrial, High-Pressure) rather than obscure part numbers, making navigation intuitive for diverse buyers.",
          },
          {
            title: "Progressive Technical Disclosure",
            description:
              "Present high-level capabilities, head range, and discharge capacity immediately, while offering deep-dive technical data sheets on demand.",
          },
          {
            title: "Guided Product Discovery",
            description:
              "Engineered a 3-step interactive selector wizard that matches user parameters (application, fluid depth, head requirement) to recommended pump models.",
          },
          {
            title: "Commercial Enquiry Integration",
            description:
              "Embedded direct Request for Quote (RFQ) triggers alongside every product family, capturing essential operational parameters prior to submission.",
          },
          {
            title: "Mobile-First Field Accessibility",
            description:
              "Optimized data tables and discovery tools for on-site contractors, distributors, and field engineers accessing specifications on mobile devices.",
          },
        ],
      },
      experienceDesign: {
        title: "Experience & Industrial Visual Language",
        description:
          "The visual language blends industrial precision with high-end editorial restraint. Monolithic obsidian canvases, crisp geometric typography, and technical schematic accents create an atmosphere of engineering authority and uncompromising craft.",
        designPrinciples: [
          {
            title: "Engineering Precision",
            description:
              "Razor-sharp 1px hairline borders, blueprint grid references, and mono-spaced technical metadata communicate rigorous build quality.",
          },
          {
            title: "High-Contrast Legibility",
            description:
              "Deep obsidian surfaces paired with high-contrast off-white typography and subtle amber status accents ensure effortless scanning of performance figures.",
          },
          {
            title: "Tactile Interaction",
            description:
              "Subtle physics-based button responses, smooth card depth transitions, and interactive filter states reinforce digital responsiveness.",
          },
        ],
        image: "/assets/images/forge-flow-industrial.jpg",
        imageCaption: "Representative hydraulic assembly schematic and visual direction created for Forge Flow.",
      },
      productDiscovery: {
        title: "Find Your Pump — Guided Discovery",
        subtitle: "Interactive Product Matching Engine",
        description:
          "The 'Find Your Pump' module assists prospective buyers in identifying appropriate pump configurations based on application requirements, installation environment, and operating head constraints.",
        discoveryFlow: [
          {
            step: "01",
            title: "Select Application Domain",
            description: "Choose from Domestic Water Supply, Agricultural Irrigation, Industrial Fluid Transfer, or Pressure Boosting.",
          },
          {
            step: "02",
            title: "Define Operating Parameters",
            description: "Specify water source type (borewell, open well, sumps, municipal lines) and required head / discharge range.",
          },
          {
            step: "03",
            title: "Inspect Matching Families",
            description: "Review matching pump series with key performance envelopes, motor ratings, and material construction.",
          },
          {
            step: "04",
            title: "Initiate Commercial RFQ",
            description: "Transfer pre-filled selection parameters directly into the commercial quotation workflow with one click.",
          },
        ],
        disclaimer:
          "Disclaimer: Product selection is presented as a digital discovery experience; final technical sizing and selection should be confirmed directly with the manufacturer's engineering team.",
        productCategories: [
          {
            name: "Centrifugal Monoblock Systems",
            application: "Domestic & Light Commercial Water Supply",
            image: "/assets/images/forgeflow/product-centrifugal-monoblock.jpg",
          },
          {
            name: "Horizontal Openwell Submersible",
            application: "Riverbeds, Sumps & Agricultural Open Wells",
            image: "/assets/images/forgeflow/product-horizontal-openwell.jpg",
          },
          {
            name: "Pressure Boosting Systems",
            application: "Multi-Story Residential & Commercial Pressurization",
            image: "/assets/images/forgeflow/product-pressure-boosting.jpg",
          },
          {
            name: "Self-Priming Pumps",
            application: "Overhead Tank Filling & Domestic Transfer",
            image: "/assets/images/forgeflow/product-self-priming.jpg",
          },
          {
            name: "Stainless Steel Submersible",
            application: "Deep Borewell Irrigation & Industrial Fluid Transfer",
            image: "/assets/images/forgeflow/product-ss-submersible.jpg",
          },
        ],
        image: "/assets/images/forgeflow/engineering-manufacturing.jpg",
        imageCaption: "Precision manufacturing and hydraulic assembly workflow visualization.",
      },
      enquiryExperience: {
        title: "Commercial RFQ & Enquiry Workflow",
        subtitle: "Streamlined Procurement Pathway",
        description:
          "To bridge the gap between initial product discovery and commercial transactions, Forge Flow integrates an intuitive Request for Quote (RFQ) workflow that captures project requirements, pump series, and delivery constraints.",
        badge: "DEMO ENQUIRY FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Pre-populated product context from the Guided Pump Finder",
          "Structured fields for horsepower, phase (single/three), and quantity",
          "Commercial location and timeline specification",
          "Interactive validation and demo submission feedback loop",
        ],
        disclaimer:
          "Note: This enquiry workflow is currently configured as an interactive frontend demonstration. Production deployment connects to enterprise CRM, ERP, or designated commercial sales endpoints.",
      },
      engineering: {
        title: "Technical Implementation & Architecture",
        description:
          "Forge Flow is engineered on a modern frontend stack designed for extreme responsiveness, 60fps scroll orchestration, and modular component reusability.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Custom Obsidian Design Tokens", "CSS Grid & Flexbox"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Components & Icons",
            items: ["Radix UI Primitives", "Lucide React", "Accessible Focus Trap"],
          },
        ],
        highlights: [
          "Strict TypeScript typings across all product categories, specifications, and wizard states",
          "GPU-accelerated transform animations with full prefers-reduced-motion fallback",
          "Zero layout shift design with fluid clamp typography and responsive aspect ratio boxes",
          "Centralized data schema enabling instant updates to product catalogs and case study specs",
        ],
      },
      visualSystem: {
        title: "Design System & Visual Taxonomy",
        typography: [
          {
            role: "Display Headings",
            family: "Syne",
            usage: "Monumental section titles, project titles, and focal numbers",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Pump specs, step badges, status indicators, and table headers",
          },
          {
            role: "Editorial Body",
            family: "Plus Jakarta Sans",
            usage: "Narrative descriptions, engineering explanations, and form inputs",
          },
        ],
        palette: [
          {
            name: "Obsidian Void",
            hex: "#050608",
            role: "Deep foundational background canvas",
            bgClass: "bg-[#050608]",
          },
          {
            name: "Carbon Surface",
            hex: "#0a0c10",
            role: "Card and elevated container backgrounds",
            bgClass: "bg-[#0a0c10]",
          },
          {
            name: "Industrial Amber",
            hex: "#f59e0b",
            role: "Demo status badging and technical highlight markers",
            bgClass: "bg-amber-500",
          },
          {
            name: "Luminous Cyan",
            hex: "#00f2fe",
            role: "Active interaction states, primary CTAs, and focus rings",
            bgClass: "bg-[#00f2fe]",
          },
          {
            name: "Warm Off-White",
            hex: "#f8fafc",
            role: "High-contrast headings and primary text",
            bgClass: "bg-[#f8fafc]",
          },
        ],
        principles: [
          "1px hairline borders (rgba(255,255,255,0.08)) over muddy drop shadows",
          "Consistent 8pt spatial grid guaranteeing balanced negative space",
          "Atmospheric dark mode tailored for technical B2B industrial aesthetics",
        ],
      },
      responsive: {
        title: "Responsive Multi-Device Adaptation",
        description:
          "The interface adapts seamlessly across screen resolutions, ensuring technical data and discovery tools remain fully operational on job-site smartphones, office tablets, and wide workstation displays.",
        breakpoints: [
          {
            device: "Desktop Workstations (1440px+)",
            resolution: "Full editorial split grids, sticky table headers, and expanded discovery flows",
            focus: "Comprehensive comparative analysis and procurement workflows",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution: "2-column modular cards, collapsible spec drawers, and adaptive touch targets",
            focus: "Sales presentations and distributor consultations",
          },
          {
            device: "Mobile Devices (360px – 430px)",
            resolution: "Single-column stacked flows, swipeable category lists, and 48px touch controls",
            focus: "On-site field specification check and rapid RFQ initiation",
          },
        ],
      },
      deliverables: {
        title: "Delivered Project Experience",
        summary:
          "SS STUDIO engineered a complete, production-ready frontend experience tailored to industrial pump manufacturing.",
        items: [
          "Complete Industrial Digital Flagship Architecture",
          "Application-Centric Product Hierarchy & Information Sheets",
          "Interactive 'Find Your Pump' 3-Step Guided Selection Wizard",
          "Visual 4-Stage Pumping System Flow Schematic",
          "Commercial RFQ & Quotation Inquiry Interface with Validation",
          "Responsive Obsidian Design System with GSAP Scroll Choreography",
          "Accessible Headless Modal Architecture & Focus Management",
        ],
      },
      theExperience:
        "Visitors can explore a structured set of representative pump categories (Centrifugal Monoblock, Horizontal Openwell, Pressure Boosting, Self-Priming, Stainless Steel Submersible), inspect technical product information, and submit RFQ inquiries seamlessly across devices.",
      whatWeBuilt: [
        "Product presentation across representative pump categories with structured information sheets",
        "Interactive Guided Pump Finder matching application type, requirements, and installation setup",
        "Visual 4-stage pumping flow schematic from fluid source to discharge delivery",
        "Application domain mapping covering Domestic, Agricultural, Open Well, Submersible, and Pressure Boosting",
        "Engineering process breakdown with pump geometry lines and workflow stages",
        "Commercial RFQ and inquiry funnel with frontend validation",
        "Responsive, modern frontend architecture synchronized with Lenis and GSAP",
      ],
      sections: [
        {
          number: "01",
          title: "Hero & Positioning",
          description:
            "Industrial hero gateway featuring technical assembly metadata, dual inquiry CTAs, and responsive typography.",
        },
        {
          number: "02",
          title: "Product Systems Catalog",
          description:
            "Categorized pump lineup featuring Centrifugal Monoblock, Horizontal Openwell, Pressure Boosting, Self-Priming, and SS Submersible models.",
        },
        {
          number: "03",
          title: "Pumping System Flow",
          description:
            "Step-by-step visual schematic outlining the four phases from water source and pump unit to fluid delivery.",
        },
        {
          number: "04",
          title: "Guided Pump Finder",
          description:
            "Interactive 3-step selector wizard guiding users to suggested product families based on application and installation requirements.",
        },
        {
          number: "05",
          title: "Application Environments",
          description:
            "Interactive application browser mapping pump families across domestic, agricultural, open well, submersible, and pressure boosting environments.",
        },
        {
          number: "06",
          title: "Engineering & Manufacturing",
          description:
            "Structured presentation of engineering workflow stages and illustrative pump geometry schematic.",
        },
        {
          number: "07",
          title: "Enterprise Overview & Capabilities",
          description:
            "Presentation of engineering standards, design system foundations, and digital infrastructure.",
        },
        {
          number: "08",
          title: "Commercial RFQ Funnel",
          description:
            "Quotation request workflow with requirement selection, validation, and technical inquiry handling.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/forge-flow-industrial.jpg",
          title: "Hydraulic Assembly & Geometry",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/engineering-manufacturing.jpg",
          title: "Precision Engineering & Assembly",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/product-centrifugal-monoblock.jpg",
          title: "Centrifugal Monoblock Systems",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/product-ss-submersible.jpg",
          title: "Stainless Steel Submersible",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/product-pressure-boosting.jpg",
          title: "Pressure Boosting Systems",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/product-horizontal-openwell.jpg",
          title: "Horizontal Openwell Submersible",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/app-agricultural.jpg",
          title: "Agricultural Applications",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
        {
          image: "/assets/images/forgeflow/app-water-handling.jpg",
          title: "Fluid Handling Environments",
          caption: "Representative visual created for the Forge Flow industry demo.",
        },
      ],
      result:
        "Engineered an industry demonstration showcasing structured industrial information architecture, interactive guided selection, and quotation workflows for industrial equipment enterprises.",
    },
  },
  {
    id: "atelier-forma",
    number: "02",
    title: "ATELIER FORMA",
    slug: "atelier-forma",
    industry: "Interior & Architecture",
    subIndustry: "Spatial Design & Objects",
    type: "CONCEPT",
    status: "LIVE",
    tag: "LIVE",
    category: "Spatial Design & Architecture — Concept Experience",
    year: "2026",
    shortDescription:
      "A premium editorial digital experience for an architecture and interior studio focused on spatial storytelling, material studies, tactile objects, and architectural project dossiers.",
    description:
      "A premium editorial digital experience for an architecture and interior studio focused on spatial storytelling, material studies, tactile objects, and architectural project dossiers.",
    thumbnail: "/assets/images/atelier-forma-architecture.jpg",
    image: "/assets/images/atelier-forma-architecture.jpg",
    heroImage: "/assets/images/atelier-forma-architecture.jpg",
    liveUrl: "https://atelier-forma-weld.vercel.app/",
    tags: [
      "Interior Design",
      "Architecture",
      "Spatial Design",
      "Material Studies",
      "Editorial Monograph",
      "Tactile Objects",
    ],
    featured: true,
    services: [
      "Spatial Architecture & Layout",
      "Interactive Material Studies",
      "Tactile Editorial Typography",
      "Monograph Exhibition System",
      "Spatial Project Dossier Index",
      "Responsive Frontend Architecture",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Atelier Forma is an editorial architectural studio concept designed by SS STUDIO to showcase how an architecture and interior practice can present spatial scale, tactile material palettes, and conceptual spatial projects as an immersive digital exhibition.",
      challenge: {
        title: "The Spatial Digital Challenge",
        description:
          "Architecture and interior studios frequently struggle to translate the physical gravity of spaces, raw material textures, and quiet craft onto the web. Traditional portfolio sites often devolve into flat, uncontextualized image grids that lack spatial pacing, materiality narrative, and architectural depth.",
        painPoints: [
          "Flat image galleries that fail to convey architectural scale, light, and tactile materiality",
          "Generic agency grids that strip spatial projects of their architectural context and narrative",
          "Inability to explore conceptual material palettes (such as travertine, bronze, and linen) interactively",
          "Cluttered inquiry workflows that detract from the serene, gallery-like studio atmosphere",
        ],
        framing:
          "Framed by SS STUDIO as a digital monograph challenge: how to craft a serene, material-driven digital space that feels like walking through a private architectural exhibition.",
      },
      approach:
        "Crafted a quiet, material-driven layout pairing architectural typography with deep negative space, tactile material studies, spatial dossier drawers, and smooth GSAP scroll choreography.",
      businessContext: {
        title: "Architectural Practice & Spatial Context",
        paragraphs: [
          "Architecture and interior design studios require digital spaces that reflect the same intentionality, proportions, and material honesty present in their physical environments.",
          "Rather than standard commercial sales pitches, architectural studios communicate authority through spatial monograph presentation, tactile material taxonomy, and curated project dossiers.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, spatial project exploration, and bespoke commission inquiry workflows.",
        ],
        verifiedFacts: [
          "Conceptual digital experience designed for high-end interior and architectural studios",
          "Conceptual project spectrum spanning residential villas, hospitality pavilions, cultural spaces, and objects",
          "Conceptual material direction: Roman Travertine, Patinated Bronze, Natural Linen, Smoked Oak, Lime Plaster",
          "Editorial monograph layout with spatial metadata and intentional reading rhythm",
        ],
        sourceNote: "Source: Spatial design research & architectural monograph information architecture",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the architectural and spatial design domain. Project dossiers and material studies reflect conceptual design research.",
      },
      strategy: {
        title: "Editorial Monograph & Spatial Hierarchy",
        description:
          "SS STUDIO structured the digital experience as a digital monograph—prioritizing spatial storytelling, tactile material exploration, and quiet project dossiers over loud marketing patterns.",
        pillars: [
          {
            title: "Spatial Storytelling as Monograph",
            description:
              "Organized conceptual architectural projects as immersive monographs with spatial proportions, location studies, and architectural scale rather than generic thumbnail grids.",
          },
          {
            title: "Interactive Material Taxonomy",
            description:
              "Engineered an interactive material board exploring the conceptual tactile interplay of honed travertine, brushed bronze, raw linen, and lime plaster.",
          },
          {
            title: "Restrained Editorial Pacing",
            description:
              "Employed generous whitespace, architectural serif headings, and disciplined reading rhythms that emulate high-end architectural publications.",
          },
          {
            title: "Project Dossier Progressive Disclosure",
            description:
              "Allowed visitors to inspect conceptual project metadata, spatial programs, and construction details without disrupting visual flow.",
          },
          {
            title: "Private Project Inquiry Pathway",
            description:
              "Integrated an understated, conceptual commission inquiry channel designed for prospective private commissions and spatial consultations.",
          },
        ],
      },
      experienceDesign: {
        title: "Tactile Materiality & Editorial Restraint",
        description:
          "The visual language pairs obsidian void surfaces with warm architectural stone accents, refined serif typography, and hairline grid dividers to evoke the atmosphere of a serene architectural studio.",
        designPrinciples: [
          {
            title: "Material Honesty",
            description:
              "Every visual element respects the physical nature of materials—earth tones, stone hues, and subtle atmospheric depth.",
          },
          {
            title: "Architectural Proportions",
            description:
              "Generous whitespace, asymmetric columns, and strict vertical grid rhythm mirror physical architectural blueprints.",
          },
          {
            title: "Serene Motion Discipline",
            description:
              "Micro-motion and scroll transitions move with measured, deliberate pacing to reinforce quiet spatial luxury.",
          },
        ],
        image: "/assets/images/atelier-forma-architecture.jpg",
        imageCaption:
          "Representative architectural spatial composition and material direction created for Atelier Forma.",
      },
      productDiscovery: {
        title: "Explore Projects & Spatial Dossiers",
        subtitle: "Curated Spatial & Object Portfolio",
        description:
          "The project discovery system allows visitors to explore conceptual spatial works across diverse domains, inspect architectural parameters, and examine bespoke material specifications.",
        sequenceTitle: "Spatial Discovery",
        categoriesTitle: "CONCEPTUAL SPATIAL & OBJECT CATEGORIES",
        discoveryFlow: [
          {
            step: "01",
            title: "Select Spatial Domain",
            description:
              "Explore conceptual domains spanning Residential Architecture, Hospitality Environments, Cultural Workspaces, or Object Editions.",
          },
          {
            step: "02",
            title: "Inspect Spatial Dossier",
            description:
              "Examine conceptual site context, spatial orientation, material palette, and architectural scale.",
          },
          {
            step: "03",
            title: "Explore Material Studies",
            description:
              "Explore tactile material direction (travertine, smoked oak, brushed bronze, raw linen).",
          },
          {
            step: "04",
            title: "Initiate Studio Discussion",
            description:
              "Seamlessly transition spatial requirements into a conceptual project consultation request.",
          },
        ],
        productCategories: [
          {
            name: "Residential Architecture",
            application: "Conceptual Studies: Private Villas, Modern Sanctuaries & Heritage Renovations",
            image: "/assets/images/atelier-forma-architecture.jpg",
          },
          {
            name: "Hospitality & Pavilions",
            application: "Conceptual Studies: Boutique Hotel Environments, Dining Spaces & Retreats",
            image: "/assets/images/atelier-forma-architecture.jpg",
          },
          {
            name: "Cultural & Commercial",
            application: "Conceptual Studies: Art Gallerias, Exhibition Spaces & Atelier Workspaces",
            image: "/assets/images/atelier-forma-architecture.jpg",
          },
          {
            name: "Spatial Objects & Furniture",
            application: "Conceptual Studies: Cast Bronze, Sculpted Stone & Limited Architectural Editions",
            image: "/assets/images/atelier-forma-architecture.jpg",
          },
        ],
        disclaimer:
          "Disclaimer: Spatial works and project classifications are presented as conceptual digital design studies demonstrating portfolio information architecture.",
      },
      enquiryExperience: {
        title: "Discuss a Project — Private Commission Pathway",
        subtitle: "Refined Studio Inquiry Channel",
        eyebrow: "CONCEPTUAL CONSULTATION & COMMISSION WORKFLOW",
        description:
          "Designed as an architectural consultation pathway, the conceptual commission workflow captures project typology, site location, timeline, and spatial requirements in an elegant, structured format.",
        badge: "CONCEPT ENQUIRY FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Conceptual spatial typology selection (Residential, Hospitality, Cultural, Custom Objects)",
          "Site location, project scope, and anticipated timeline specification",
          "Structured brief overview with optional architectural program notes",
          "Interactive frontend validation with demo consultation feedback loop (no production CRM connected)",
        ],
        workflowSteps: [
          {
            step: "1",
            title: "Spatial Scope & Typology",
            description: "Select conceptual residential, hospitality, commercial, or object scope.",
          },
          {
            step: "2",
            title: "Site & Timeline Context",
            description: "Specify conceptual project location, scope scale, and planned timeline.",
          },
          {
            step: "3",
            title: "Consultation Dispatch",
            description: "Structured enquiry routed to interactive frontend demo feedback loop.",
          },
        ],
        disclaimer:
          "Note: This inquiry workflow is implemented as an interactive frontend demonstration. In production environments, submissions connect to studio CRM or private scheduling endpoints.",
      },
      engineering: {
        title: "Frontend Engineering & Monograph Architecture",
        description:
          "Atelier Forma is built on a high-performance React and TypeScript architecture designed for fluid 60fps editorial transitions, responsive aspect ratios, and zero layout shift.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Custom Stone/Obsidian Tokens", "Hairline Spatial Grids"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Primitives & A11y",
            items: ["Accessible Headless Modals", "Lucide React", "Prefers-Reduced-Motion Fallbacks"],
          },
        ],
        highlights: [
          "Strict TypeScript typings for all spatial projects, material taxonomy, and inquiry states",
          "GPU-accelerated smooth scrolling integrated with Lenis and GSAP ScrollTrigger",
          "Responsive image aspect ratios and fluid typography with zero cumulative layout shift",
          "Modular component architecture allowing instant updates to project monographs and material boards",
        ],
      },
      visualSystem: {
        title: "Design System & Material Taxonomy",
        typography: [
          {
            role: "Display Titles",
            family: "Syne / Serif Display",
            usage: "Monumental project headings, spatial chapter titles, and monograph numbers",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Spatial coordinates, material codes, scale indicators, and dossier dates",
          },
          {
            role: "Editorial Body",
            family: "Plus Jakarta Sans",
            usage: "Architectural narratives, spatial philosophy essays, and consultation forms",
          },
        ],
        palette: [
          {
            name: "Obsidian Void",
            hex: "#050608",
            role: "Deep foundational background canvas",
            bgClass: "bg-[#050608]",
          },
          {
            name: "Travertine Stone",
            hex: "#d6c7b2",
            role: "Warm architectural stone and highlight typography",
            bgClass: "bg-[#d6c7b2]",
          },
          {
            name: "Patinated Bronze",
            hex: "#96704b",
            role: "Material accents, active states, and focus rings",
            bgClass: "bg-[#96704b]",
          },
          {
            name: "Carbon Surface",
            hex: "#0a0c10",
            role: "Elevated card backgrounds and dossier containers",
            bgClass: "bg-[#0a0c10]",
          },
          {
            name: "Warm Parchment",
            hex: "#f5f2eb",
            role: "High-contrast display text and primary headings",
            bgClass: "bg-[#f5f2eb]",
          },
        ],
        principles: [
          "Subtle 1px hairline borders (rgba(255,255,255,0.08)) that emulate architectural drafting lines",
          "Generous negative space and asymmetric columns honoring spatial stillness",
          "Atmospheric palette evoking raw stone, natural timber, and museum gallery lighting",
        ],
      },
      responsive: {
        title: "Multi-Device Spatial Presentation",
        description:
          "The digital exhibition adapts seamlessly across resolutions—maintaining editorial proportions, tactile material clarity, and readable spatial dossiers on mobile phones, tablets, and wide monitors.",
        breakpoints: [
          {
            device: "Workstation Displays (1440px+)",
            resolution:
              "Wide editorial split grids, full-bleed imagery, and interactive side-by-side material boards",
            focus: "Comprehensive monograph review and architectural presentations",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution:
              "2-column modular layouts, touch-optimized material drawers, and adaptive typography",
            focus: "Consultation reviews and mobile portfolio walk-throughs",
          },
          {
            device: "Mobile Phones (360px – 430px)",
            resolution:
              "Single-column editorial flow, full-width project cards, and 48px touch controls",
            focus: "On-the-go project discovery and rapid consultation initiation",
          },
        ],
      },
      deliverables: {
        title: "Delivered Architectural Experience",
        summary:
          "SS STUDIO engineered a complete digital exhibition and studio flagship architecture tailored to interior design and architectural practices.",
        items: [
          "Complete Architectural Studio Digital Flagship Architecture",
          "Spatial Project Index & Interactive Conceptual Dossier System",
          "Interactive Material Direction Showcase (Travertine, Bronze, Linen)",
          "Curated Monograph Exhibition Layouts & Narrative Rhythm",
          "Conceptual Studio Consultation & Commission Inquiry Workflow",
          "Responsive Obsidian & Stone Design System with GSAP Choreography",
          "Accessible Headless Navigation & Focus Management System",
        ],
      },
      theExperience:
        "Visitors explore a curated monograph showcasing conceptual spatial projects, interactive material direction (travertine, linen, bronze), and editorial dossier drawers.",
      whatWeBuilt: [
        "Editorial architectural studio gateway with refined typography and full-bleed imagery",
        "Interactive tactile material study board exploring travertine, linen, and patinated bronze direction",
        "Spatial project dossier presentations and monograph exhibition layouts",
        "Live responsive digital exhibition synchronized with Lenis smooth scroll and GSAP",
      ],
      sections: [
        {
          number: "01",
          title: "Editorial Gateway",
          description:
            "Minimalist spatial entrance featuring high-contrast serif typography and full-bleed architectural photography.",
        },
        {
          number: "02",
          title: "Selected Works Exhibition",
          description:
            "Curated conceptual spatial dossier index with representative photography, architectural scales, and location studies.",
        },
        {
          number: "03",
          title: "Tactile Material Studies",
          description:
            "Interactive material palette exploring conceptual travertine, brushed bronze, and natural linen textures.",
        },
        {
          number: "04",
          title: "Spatial Philosophy & Monograph",
          description:
            "Monograph layout celebrating spatial purity, craft precision, and editorial restraint.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/atelier-forma-architecture.jpg",
          title: "Monolithic Spatial Study",
          caption: "Representative architectural atmosphere created for Atelier Forma.",
        },
      ],
      result:
        "Engineered a quiet, material-driven editorial digital exhibition demonstrating web design and spatial storytelling for interior design and architecture practices.",
    },
  },
  {
    id: "ember-grain",
    number: "03",
    title: "EMBER & GRAIN",
    slug: "ember-grain",
    industry: "Hospitality",
    subIndustry: "Café & Coffee Roasters",
    type: "CONCEPT",
    status: "LIVE",
    tag: "LIVE",
    category: "Specialty Coffee & Hospitality — Concept Experience",
    year: "2026",
    shortDescription:
      "A premium café and coffee-roaster digital experience combining hospitality atmosphere, specialty roast discovery, seasonal kitchen menus, and visit intent.",
    description:
      "A premium café and coffee-roaster digital experience combining hospitality atmosphere, specialty roast discovery, seasonal kitchen menus, and visit intent.",
    thumbnail: "/assets/images/ember-and-grain-cafe.jpg",
    image: "/assets/images/ember-and-grain-cafe.jpg",
    heroImage: "/assets/images/ember-and-grain-cafe.jpg",
    liveUrl: "https://ember-and-grain-pi.vercel.app/",
    tags: [
      "Hospitality",
      "Specialty Coffee",
      "Coffee Roaster",
      "Café Menu",
      "Tactile Editorial",
      "Culinary Ritual",
    ],
    featured: true,
    services: [
      "Hospitality UI/UX Architecture",
      "Specialty Coffee Roast & Tasting System",
      "Seasonal Kitchen & Bakery Hierarchy",
      "Tactile Atmosphere & Material Storytelling",
      "Café Visit & Table Enquiry Flow",
      "Responsive Frontend Architecture",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Ember & Grain is a premium hospitality digital experience concept designed by SS STUDIO to showcase how an artisanal café and specialty coffee roaster can translate physical warmth, roast craftsmanship, and culinary ritual into an evocative digital presence.",
      challenge: {
        title: "The Hospitality Experience Challenge",
        description:
          "Specialty coffee roasters and artisanal cafés thrive on physical atmosphere—the aroma of roasting beans, warm timber surfaces, morning light, and friendly neighborhood hospitality. Digital café websites often fail to capture this tactile warmth, feeling either like utilitarian e-commerce storefronts or sterile PDF menu downloads.",
        painPoints: [
          "Generic café websites that strip the physical warmth, aroma, and craft of specialty roasting",
          "Unsearchable PDF food and drink menus with clunky navigation on mobile devices",
          "Lack of structured storytelling for single-origin roast profiles, varietals, and brew methods",
          "High friction for prospective visitors seeking opening sessions, tasting events, and table inquiries",
        ],
        framing:
          "Framed by SS STUDIO as a sensory hospitality challenge: how to translate the quiet ritual of slow coffee and tactile interior warmth into a frictionless, modern digital space.",
      },
      approach:
        "Crafted an intimate, warm editorial interface combining rich espresso tones, tactile photography, structured specialty coffee tasting notes, seasonal bakery menus, and fluid scroll interactions.",
      businessContext: {
        title: "Specialty Coffee & Hospitality Context",
        paragraphs: [
          "Specialty coffee roasters and neighborhood cafés occupy a unique cultural space—serving as daily community rituals, artisanal craft workshops, and gathering grounds.",
          "An elevated digital presence must balance evocative brand storytelling with instantaneous access to essential guest information: roast profiles, seasonal bakery selections, opening rhythms, and visit logistics.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, roast discovery, and table inquiry workflows tailored to specialty hospitality.",
        ],
        verifiedFacts: [
          "Conceptual digital experience designed for specialty coffee roasters and artisanal cafés",
          "Conceptual product spectrum spanning single-origin filter, espresso blends, cold extractions, and seasonal bakes",
          "Conceptual coffee discovery taxonomy: Flavor Notes, Process (Washed/Natural), Roast Level, Brew Methods",
          "Warm editorial layout emphasizing slow living, tactile materials, and hospitality rituals",
        ],
        sourceNote: "Source: Specialty coffee research & hospitality digital architecture",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the specialty hospitality domain. Roast profiles, bean origins, tasting notes, and seasonal menus reflect conceptual culinary research rather than a specific operational café.",
      },
      strategy: {
        title: "Sensory Atmosphere & Immediate Utility",
        description:
          "SS STUDIO architected a dual-purpose digital strategy: enveloping visitors in rich sensory atmosphere while delivering immediate, structured access to coffee roasts, seasonal food menus, and café visit information.",
        pillars: [
          {
            title: "Atmospheric Brand Storytelling",
            description:
              "Immersed guests in the tactile warmth of the roastery—charred oak, morning light, brass details, and the ritual of slowing down.",
          },
          {
            title: "Structured Roast & Tasting Notes",
            description:
              "Engineered a dedicated coffee profile card system showing how tasting notes, altitude, processing methods, and recommended brew parameters can be presented digitally.",
          },
          {
            title: "Seasonal Kitchen & Bakery Presentation",
            description:
              "Categorized conceptual morning bakes, sourdough dishes, and seasonal plates in a clear, appetizing, mobile-optimized format.",
          },
          {
            title: "Tactile Material & Journal Narrative",
            description:
              "Explored the physical materiality of the space through editorial journals celebrating craft, local suppliers, and slow coffee culture.",
          },
          {
            title: "Frictionless Visit & Table Inquiry",
            description:
              "Integrated a conceptual visit inquiry funnel for small gatherings, tasting table sessions, and roastery events.",
          },
        ],
      },
      experienceDesign: {
        title: "Tactile Warmth & Editorial Pacing",
        description:
          "The visual language blends deep espresso-toned backgrounds with amber highlights, warm cream typography, and tactile photography to evoke the comforting ambiance of a sunlit neighborhood café.",
        designPrinciples: [
          {
            title: "Sensory Warmth",
            description:
              "Deep roasted tones, soft amber accents, and creamy off-white text create an inviting, tactile reading atmosphere.",
          },
          {
            title: "Editorial Clarity",
            description:
              "Clear typographic hierarchy and scannable menu cards ensure guests find pricing, ingredients, and roast notes effortlessly.",
          },
          {
            title: "Unhurried Motion",
            description:
              "Deliberately smooth, gentle scroll reveals mirror the deliberate, measured cadence of pour-over brewing.",
          },
        ],
        image: "/assets/images/ember-and-grain-cafe.jpg",
        imageCaption:
          "Representative café interior atmosphere and warm lighting created for Ember & Grain.",
      },
      productDiscovery: {
        title: "Explore Roasts & Seasonal Menus",
        subtitle: "Specialty Coffee & Culinary Offerings",
        description:
          "The menu and product discovery engine allows guests to browse single-origin roasts, signature espresso profiles, slow brews, and seasonal bakery plates with full tasting notes.",
        sequenceTitle: "Roast & Menu Discovery",
        categoriesTitle: "CONCEPTUAL SPECIALTY ROAST & KITCHEN CATEGORIES",
        discoveryFlow: [
          {
            step: "01",
            title: "Select Coffee or Kitchen",
            description:
              "Explore conceptual offerings between Specialty Single-Origins, Espresso Blends, Slow Cold Brews, or Seasonal Bakes.",
          },
          {
            step: "02",
            title: "Review Tasting Notes",
            description:
              "Review conceptual flavor profiles (e.g. stone fruit, cocoa, floral), roast intensity, and brew recommendations.",
          },
          {
            step: "03",
            title: "Discover Kitchen Pairings",
            description:
              "Explore conceptual morning bakery plates, sourdough toasts, and seasonal savory pairings.",
          },
          {
            step: "04",
            title: "Plan Café Visit",
            description:
              "Test the interactive visit inquiry and session reservation flow.",
          },
        ],
        productCategories: [
          {
            name: "Single-Origin Pour Over",
            application: "Conceptual Profile: Light & Medium Roasts with Floral & Fruity Tasting Envelopes",
            image: "/assets/images/ember-and-grain-cafe.jpg",
          },
          {
            name: "Signature House Espresso",
            application: "Conceptual Profile: Balanced Medium-Dark Roast with Notes of Dark Chocolate & Hazelnut",
            image: "/assets/images/ember-and-grain-cafe.jpg",
          },
          {
            name: "Slow-Drip Cold Brew",
            application: "Conceptual Profile: 18-Hour Kyoto-Style Cold Extraction with Velvet Mouthfeel",
            image: "/assets/images/ember-and-grain-cafe.jpg",
          },
          {
            name: "Seasonal Bakery & Kitchen",
            application: "Conceptual Menu: Artisanal Sourdough, Cardamom Buns & Morning Savory Plates",
            image: "/assets/images/ember-and-grain-cafe.jpg",
          },
        ],
        disclaimer:
          "Disclaimer: Roast notes, menu items, prices, and brew parameters are presented as a conceptual hospitality digital experience demonstrating catalog and menu architecture. No commercial coffee sales or operational café bookings are implied.",
      },
      enquiryExperience: {
        title: "Visit the Café & Tasting Table Inquiry",
        subtitle: "Guest Visit & Event Pathway",
        eyebrow: "CONCEPTUAL VISIT PLANNING & TASTING INQUIRY WORKFLOW",
        description:
          "To demonstrate guest visit workflows, Ember & Grain provides a conceptual inquiry interface for tasting table sessions and small roastery events.",
        badge: "CONCEPT VISIT FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Conceptual inquiry for coffee tasting flights, roastery walk-throughs, and group tables",
          "Party size selection, preferred visit session, and dietary preferences",
          "Representative location schedule details and transit context",
          "Interactive frontend validation with demo feedback loop (no live booking system)",
        ],
        workflowSteps: [
          {
            step: "1",
            title: "Session & Experience",
            description: "Choose between Walk-In Info, Tasting Table Flight, or Private Event.",
          },
          {
            step: "2",
            title: "Party & Schedule",
            description: "Select group size, preferred date, and morning/afternoon session.",
          },
          {
            step: "3",
            title: "Direct Confirmation",
            description: "Validated demo inquiry dispatched to interactive frontend confirmation state.",
          },
        ],
        disclaimer:
          "Note: This visit inquiry workflow is implemented as an interactive frontend demonstration. In a live production deployment, it connects to hospitality booking platforms (e.g., OpenTable, SevenRooms) or a direct concierge endpoint.",
      },
      engineering: {
        title: "Frontend Engineering & Menu Architecture",
        description:
          "Ember & Grain is engineered with a focus on instantaneous mobile load times, accessible high-contrast typography, and smooth micro-interactions.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Warm Amber & Espresso Tokens", "CSS Grid Layouts"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Primitives & A11y",
            items: ["Accessible Dialogs", "Lucide React", "WCAG AA Contrast Ratios"],
          },
        ],
        highlights: [
          "Zero layout shift during fast image loading on mobile devices in coffee shop environments",
          "GPU-accelerated smooth scrolling integrated with Lenis and GSAP ScrollTrigger",
          "Structured menu data schema enabling real-time seasonal rotation of dishes and bean origins",
          "Full keyboard navigation and accessible touch targets (min 48px) for effortless mobile browsing",
        ],
      },
      visualSystem: {
        title: "Design System & Hospitality Palette",
        typography: [
          {
            role: "Display Headings",
            family: "Syne / Serif Display",
            usage: "Warm chapter titles, café philosophy headlines, and section numbers",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Roast profiles, elevation meters, brew temperatures, and menu pricing",
          },
          {
            role: "Editorial Body",
            family: "Plus Jakarta Sans",
            usage: "Roasting narratives, recipe explanations, and guest visit forms",
          },
        ],
        palette: [
          {
            name: "Deep Espresso",
            hex: "#0c0a08",
            role: "Foundational warm dark background",
            bgClass: "bg-[#0c0a08]",
          },
          {
            name: "Charred Timber",
            hex: "#18130e",
            role: "Elevated card surfaces and menu containers",
            bgClass: "bg-[#18130e]",
          },
          {
            name: "Roastery Amber",
            hex: "#d97706",
            role: "Active accents, tasting tags, and primary CTAs",
            bgClass: "bg-amber-600",
          },
          {
            name: "Warm Cream",
            hex: "#fef3c7",
            role: "High-contrast headings and primary typographic elements",
            bgClass: "bg-amber-100",
          },
          {
            name: "Steamed Milk",
            hex: "#f8fafc",
            role: "Body copy and secondary descriptions",
            bgClass: "bg-[#f8fafc]",
          },
        ],
        principles: [
          "Warm earth and roast-inspired color palette avoiding cold grey tones",
          "Scannable card components tailored for rapid food and beverage discovery",
          "Tactile photographic textures paired with clean hairline borders",
        ],
      },
      responsive: {
        title: "Multi-Device Hospitality Adaptation",
        description:
          "Optimized for patrons browsing on mobile devices while walking or sitting in the café, as well as visitors exploring on laptops and tablets.",
        breakpoints: [
          {
            device: "Desktop Workstations (1440px+)",
            resolution:
              "Full editorial magazine spreads, side-by-side coffee and food catalogs, and atmospheric photography",
            focus: "Immersive brand storytelling and roastery exploration",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution:
              "2-column responsive menus, interactive tasting notes drawers, and touch-friendly tabs",
            focus: "Café event planning and menu browsing",
          },
          {
            device: "Mobile Phones (360px – 430px)",
            resolution:
              "Single-column stacked menu lists, fast visit info, and 1-tap table inquiries",
            focus: "On-the-go menu inspection and location checking",
          },
        ],
      },
      deliverables: {
        title: "Delivered Café & Roastery Experience",
        summary:
          "SS STUDIO engineered a complete digital flagship and menu discovery platform tailored to specialty coffee roasters and hospitality brands.",
        items: [
          "Complete Specialty Café Digital Flagship Architecture",
          "Specialty Coffee Roast Taxonomy & Conceptual Tasting Notes Showcase",
          "Seasonal Kitchen & Bakery Structured Menu Interface",
          "Atmospheric Journal & Craft Philosophy Storytelling",
          "Conceptual Guest Visit & Tasting Table Reservation Inquiry Pathway",
          "Responsive Espresso & Amber Design System with GSAP Choreography",
          "Accessible Headless Navigation & Fast Mobile Experience",
        ],
      },
      theExperience:
        "Visitors explore conceptual roast profiles and tasting notes, curated seasonal menus, the artisanal story behind the space, and an interactive visit inquiry interface.",
      whatWeBuilt: [
        "Atmospheric hero gateway featuring warm architectural café visuals and unhurried typography",
        "Interactive specialty coffee showcase with conceptual roast notes, brew methods, and flavor profiles",
        "Curated conceptual seasonal food and pastry menu with culinary pairings",
        "Sensory journal and spatial material narrative celebrating warmth, craft, and hospitality",
        "Interactive frontend table reservation inquiry experience",
      ],
      sections: [
        {
          number: "01",
          title: "Atmospheric Gateway",
          description:
            "Warm, tactile editorial opening establishing the philosophy of slowing down and sensory presence.",
        },
        {
          number: "02",
          title: "Specialty Coffee & Brews",
          description:
            "Single-origin coffees, espresso craft, and pour-over rituals detailed with conceptual roast profiles and flavor notes.",
        },
        {
          number: "03",
          title: "Seasonal Kitchen & Bakery",
          description:
            "Editorial presentation of conceptual morning bakes, savory plates, and house specialties crafted with honest ingredients.",
        },
        {
          number: "04",
          title: "Space, Materials & Hospitality",
          description:
            "Atmospheric material study exploring blackened steel, warm timber, travertine, and morning light.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/ember-and-grain-cafe.jpg",
          title: "Atmospheric Café Interior",
          caption: "Representative café ambiance created for Ember & Grain.",
        },
      ],
      result:
        "Engineered an evocative, editorial digital presence that captures the sensory warmth and hospitality of a specialty café while delivering modern performance.",
    },
  },
  {
    id: "lume",
    number: "04",
    title: "LUME",
    slug: "lume",
    industry: "Hospitality",
    subIndustry: "Restaurant & Fine Dining",
    type: "CONCEPT",
    status: "LIVE",
    tag: "LIVE",
    category: "Contemporary Dining & Culinary — Concept Experience",
    year: "2026",
    shortDescription:
      "A cinematic fine-dining digital experience focused on culinary storytelling, seasonal tasting chapters, dining sequences, and private table reservations.",
    description:
      "A cinematic fine-dining digital experience focused on culinary storytelling, seasonal tasting chapters, dining sequences, and private table reservations.",
    thumbnail: "/assets/images/lume-restaurant.jpg",
    image: "/assets/images/lume-restaurant.jpg",
    heroImage: "/assets/images/lume-restaurant.jpg",
    liveUrl: "https://lume-restaurant-xi.vercel.app/",
    tags: [
      "Hospitality",
      "Fine Dining",
      "Cinematic",
      "Culinary Storytelling",
      "Tasting Menu",
      "Table Reservation",
    ],
    featured: true,
    services: [
      "Cinematic Culinary UI/UX Architecture",
      "Seasonal Tasting Menu Hierarchy",
      "4-Stage Dining Progression Engine",
      "Architectural Light & Shadow Storytelling",
      "Reservation Concierge Inquiry Funnel",
      "Responsive Frontend Architecture",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Lume is a cinematic fine-dining digital experience concept created by SS STUDIO to demonstrate how a contemporary restaurant can translate culinary philosophy, architectural intimacy, and evening atmosphere into an evocative digital prologue to the dining room.",
      challenge: {
        title: "The Culinary Atmosphere Challenge",
        description:
          "Contemporary fine-dining restaurants rely deeply on sensory intimacy—subtle architectural lighting, raw cast bronze, curated acoustic warmth, and the sequential drama of a multi-course tasting menu. Digital restaurant websites frequently fail to communicate this atmosphere, defaulting to generic booking widgets or cluttered layouts that spoil the culinary mystery.",
        painPoints: [
          "Sterile third-party reservation widgets that disrupt the restaurant's visual world and brand intimacy",
          "Flat text menus that fail to communicate culinary chapters, seasonal provenance, and wine pairings",
          "Heavy video backgrounds that compromise performance and mobile load speeds",
          "Lack of narrative framing for the multi-stage guest dining journey (Arrival, Aperitif, Service, Digestif)",
        ],
        framing:
          "Framed by SS STUDIO as an architectural prologue challenge: how to treat the website as an evocative extension of the dining room that builds anticipation while streamlining table inquiries.",
      },
      approach:
        "Engineered a cinematic, midnight-noir digital experience featuring dramatic chiaroscuro lighting, editorial typography, structured seasonal tasting chapters, a 4-stage dining progression, and smooth GSAP choreography.",
      businessContext: {
        title: "Fine Dining & Culinary Experience Context",
        paragraphs: [
          "Contemporary fine dining is an immersive theatrical art form—unfolding through spatial architecture, hyper-seasonal ingredients, and orchestrated service pacing.",
          "A restaurant's digital presence serves as the guest's first contact—setting expectations for culinary rigor, intimacy, and hospitality standards long before the first course is served.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, seasonal menu storytelling, and reservation concierge workflows.",
        ],
        verifiedFacts: [
          "Conceptual digital experience designed for contemporary fine dining and culinary institutions",
          "Conceptual tasting menu structure organized into progressive seasonal culinary chapters",
          "Conceptual 4-Stage guest dining journey: The Arrival, The Aperitif, The Progression, The Digestif",
          "Cinematic visual language balancing deep architectural noir, warm gold highlights, and typography",
        ],
        sourceNote: "Source: Contemporary culinary research & fine-dining digital architecture",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the fine dining hospitality domain. Menus, dishes, wines, and culinary philosophies reflect conceptual gastronomic research. No chef identity, culinary awards, or live table booking is claimed or implied.",
      },
      strategy: {
        title: "Cinematic Immersion & Dining Progression",
        description:
          "SS STUDIO structured the digital experience to mirror the evening dining experience—guiding guests through architectural atmosphere, seasonal menu chapters, pairing philosophies, and private table reservations.",
        pillars: [
          {
            title: "The Digital Prologue",
            description:
              "Established a mood of quiet sophistication through high-contrast chiaroscuro photography, architectural shadows, and restrained serif typography.",
          },
          {
            title: "Seasonal Tasting Chapters",
            description:
              "Presented conceptual multi-course menus as culinary chapters—highlighting ingredient provenance, cooking techniques, and botanical pairings.",
          },
          {
            title: "4-Stage Dining Journey",
            description:
              "Structured the conceptual guest progression from foyer arrival and aperitif salon through the dining progression and digestif ritual.",
          },
          {
            title: "Architectural Materiality",
            description:
              "Showcased the dining room's tactile surfaces—blackened steel, fluted amber glass, honed basalt, and warm candlelight.",
          },
          {
            title: "Reservation Concierge Inquiry",
            description:
              "Engineered an elegant, conceptual table reservation inquiry workflow tailored to intimate dinners and private salon bookings.",
          },
        ],
      },
      experienceDesign: {
        title: "Chiaroscuro Atmosphere & Midnight Noir",
        description:
          "The visual language embraces architectural shadow, deep midnight-noir surfaces (#030406), subtle amber candlelight accents, and refined serif typography to create an aura of culinary drama and refined luxury.",
        designPrinciples: [
          {
            title: "Dramatic Chiaroscuro",
            description:
              "High-contrast lighting and deep shadows focus attention on culinary craft and architectural textures.",
          },
          {
            title: "Gastronomic Restraint",
            description:
              "Sparse, curated text and generous negative space emulate the minimalism of modern plating.",
          },
          {
            title: "Atmospheric Pacing",
            description:
              "Gentle, velvety scroll animations create a calm, unhurried reading experience reminiscent of evening dining.",
          },
        ],
        image: "/assets/images/lume-restaurant.jpg",
        imageCaption:
          "Representative dining room ambiance, architectural lighting, and chiaroscuro textures created for LUME.",
      },
      productDiscovery: {
        title: "Explore the Dining Experience & Chapters",
        subtitle: "Seasonal Tasting Menu & Gastronomic Progression",
        description:
          "The culinary discovery engine guides guests through curated seasonal chapters, signature dish philosophies, cellar selections, and private dining salon configurations.",
        sequenceTitle: "Dining Progression",
        categoriesTitle: "CONCEPTUAL SEASONAL TASTING CHAPTERS & EXPERIENCES",
        discoveryFlow: [
          {
            step: "01",
            title: "Explore the Philosophy",
            description:
              "Discover conceptual hyper-seasonal cooking philosophies, foraged botanicals, and agrarian pairings.",
          },
          {
            step: "02",
            title: "Inspect Tasting Chapters",
            description:
              "Review conceptual multi-course chapters from marine broths and earth roots to wood-fired finishes.",
          },
          {
            step: "03",
            title: "Discover Cellar Pairings",
            description:
              "Explore conceptual low-intervention wines, rare reserves, and botanical non-alcoholic infusions.",
          },
          {
            step: "04",
            title: "Request a Table",
            description:
              "Submit an interactive table reservation inquiry demonstration.",
          },
        ],
        productCategories: [
          {
            name: "Seasonal Tasting Progression",
            application: "Conceptual Menu: Curated 8-to-10 Course Evening Progression Exploring Earth, Coast & Fire",
            image: "/assets/images/lume-restaurant.jpg",
          },
          {
            name: "Cellar & Botanical Pairings",
            application: "Conceptual Pairings: Sommelier-Curated Low-Intervention Wines & Fermented Infusions",
            image: "/assets/images/lume-restaurant.jpg",
          },
          {
            name: "The Private Dining Salon",
            application: "Conceptual Space: Exclusive Architectural Dining Room for Up to 14 Guests",
            image: "/assets/images/lume-restaurant.jpg",
          },
          {
            name: "Late Digestif & Bar Ritual",
            application: "Conceptual Ritual: Curated Amari, Rare Spirits & Botanical Infusions at the Basalt Bar",
            image: "/assets/images/lume-restaurant.jpg",
          },
        ],
        disclaimer:
          "Disclaimer: Tasting courses, wine selections, and dining chapters are presented as a conceptual fine-dining digital experience demonstrating culinary information architecture. No real reservation availability or menu pricing is implied.",
      },
      enquiryExperience: {
        title: "Reservation Enquiry & Private Table Request",
        subtitle: "Table Concierge & Booking Pathway",
        eyebrow: "CONCEPTUAL RESERVATION INQUIRY & TABLE CONCIERGE",
        description:
          "Lume's conceptual table reservation workflow captures guest party size, preferred service seating (Early / Main / Late Evening), dietary requirements, and special occasions in a seamless, discreet format.",
        badge: "CONCEPT RESERVATION FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Seating preference selection (Main Dining Room, Chef's Counter, Private Salon)",
          "Party scale (1 to 14 guests), date selection, and service seating window",
          "Dietary profile and bespoke culinary note capture",
          "Interactive frontend validation with demo confirmation state (no external booking engine connected)",
        ],
        workflowSteps: [
          {
            step: "1",
            title: "Seating & Salon",
            description: "Select Main Dining Room, Chef's Counter, or Private Dining Salon.",
          },
          {
            step: "2",
            title: "Date, Party & Time",
            description: "Select desired date, guest count, and service seating window.",
          },
          {
            step: "3",
            title: "Concierge Dispatch",
            description: "Validated reservation inquiry routed to interactive demo confirmation state.",
          },
        ],
        disclaimer:
          "Note: This reservation inquiry workflow is implemented as an interactive frontend demonstration. In a production environment, it connects to restaurant booking platforms (e.g., SevenRooms, Resy) or private concierge endpoints.",
      },
      engineering: {
        title: "Frontend Engineering & Performance Architecture",
        description:
          "Lume is engineered on a modern React and TypeScript foundation with hardware-accelerated transitions, responsive image loading, and accessible interactive overlays.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Midnight Noir Tokens", "Chiaroscuro CSS Gradients"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Primitives & A11y",
            items: ["Accessible Focus Trap", "Lucide React", "ARIA Live Reservation Modals"],
          },
        ],
        highlights: [
          "Smooth 60fps scroll transitions optimized for high-end mobile and desktop displays",
          "Accessible reservation dialogs with focus trap and keyboard ESC listeners",
          "Modular tasting menu data structures enabling rapid seasonal updates without code changes",
          "Zero layout shift across responsive breakpoints with optimized aspect-ratio containers",
        ],
      },
      visualSystem: {
        title: "Design System & Chiaroscuro Taxonomy",
        typography: [
          {
            role: "Display Headings",
            family: "Syne / Serif Display",
            usage: "Monumental restaurant branding, tasting course titles, and atmosphere headers",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Course numbers, vintage years, seating times, and temperature notes",
          },
          {
            role: "Editorial Body",
            family: "Plus Jakarta Sans",
            usage: "Culinary philosophies, ingredient provenance stories, and reservation forms",
          },
        ],
        palette: [
          {
            name: "Midnight Noir",
            hex: "#030406",
            role: "Deep foundational architectural background",
            bgClass: "bg-[#030406]",
          },
          {
            name: "Basalt Carbon",
            hex: "#0d0f14",
            role: "Elevated card surfaces and menu containers",
            bgClass: "bg-[#0d0f14]",
          },
          {
            name: "Candlelight Gold",
            hex: "#c9a86a",
            role: "Restrained warm metallic highlights and active markers",
            bgClass: "bg-[#c9a86a]",
          },
          {
            name: "Luminous White",
            hex: "#ffffff",
            role: "High-contrast primary headings and dish titles",
            bgClass: "bg-white",
          },
          {
            name: "Muted Stone",
            hex: "#94a3b8",
            role: "Secondary body text and ingredient descriptions",
            bgClass: "bg-slate-400",
          },
        ],
        principles: [
          "High-contrast chiaroscuro visual hierarchy emphasizing culinary artistry",
          "Hairline borders (rgba(201,168,106,0.15)) reflecting warm brass detailing",
          "Velvety dark mode designed for evening browsing on mobile and desktop devices",
        ],
      },
      responsive: {
        title: "Multi-Device Fine-Dining Adaptation",
        description:
          "Engineered to provide an immaculate digital experience whether guests are reviewing tasting menus on desktop monitors or booking a table on their phone during a taxi ride.",
        breakpoints: [
          {
            device: "Desktop Workstations (1440px+)",
            resolution:
              "Full-width chiaroscuro spreads, side-by-side tasting chapters, and atmospheric spatial photography",
            focus: "Immersive culinary storytelling and private event planning",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution:
              "2-column modular cards, collapsible wine list drawers, and touch-friendly controls",
            focus: "Table reservation browsing and menu consultations",
          },
          {
            device: "Mobile Phones (360px – 430px)",
            resolution:
              "Single-column streamlined tasting flow, prominent reservation button, and 48px touch targets",
            focus: "Rapid table inquiry and instant directions checking",
          },
        ],
      },
      deliverables: {
        title: "Delivered Fine-Dining Experience",
        summary:
          "SS STUDIO engineered a complete digital flagship and reservation concierge experience tailored to contemporary fine dining restaurants.",
        items: [
          "Complete Contemporary Restaurant Digital Flagship Architecture",
          "Seasonal Tasting Menu Hierarchy & Conceptual Culinary Chapters",
          "4-Stage Guest Dining Progression Engine (Arrival to Digestif)",
          "Architectural Lighting & Material Atmosphere Presentation",
          "Conceptual Table Reservation Concierge Inquiry Workflow",
          "Responsive Midnight Noir Design System with GSAP Choreography",
          "Accessible Headless Overlays & Mobile Performance Optimization",
        ],
      },
      theExperience:
        "Visitors explore the conceptual menu, signature dishes, restaurant architecture, dining sequence and journal stories.",
      whatWeBuilt: [
        "Cinematic restaurant gateway with architectural chiaroscuro lighting",
        "Editorial conceptual seasonal tasting menu with course chapters",
        "Interactive dish detail experience with culinary notes",
        "Material and architectural spatial study",
        "Four-stage dining progression experience",
        "Interactive reservation concierge inquiry interface",
      ],
      sections: [
        {
          number: "01",
          title: "Cinematic Gateway",
          description:
            "Atmospheric restaurant entrance exploring architectural shadow, warm evening light, and refined editorial typography.",
        },
        {
          number: "02",
          title: "Conceptual Seasonal Menu",
          description:
            "Curated conceptual culinary chapters with seasonal provenance, culinary philosophies, and interactive course breakdowns.",
        },
        {
          number: "03",
          title: "Material & Spatial Study",
          description:
            "Exploration of blackened steel, fluted glass, cast bronze, and architectural concrete textures.",
        },
        {
          number: "04",
          title: "Dining Sequence & Reservations",
          description:
            "Four-stage dining journey from arrival to digestif, paired with conceptual table reservation inquiry interfaces.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/lume-restaurant.jpg",
          title: "Atmospheric Restaurant Interior",
          caption: "Representative dining ambiance and architectural lighting created for LUME.",
        },
      ],
      result:
        "Engineered a cinematic, editorial digital presence that captures the sensory atmosphere, culinary craft, and architectural intimacy of a contemporary restaurant.",
    },
  },
  {
    id: "axis-structures",
    number: "05",
    title: "AXIS STRUCTURES",
    slug: "axis-structures",
    industry: "Construction & Engineering",
    subIndustry: "Structural Engineering & Infrastructure",
    type: "CONCEPT",
    status: "LIVE",
    tag: "LIVE",
    category: "Structural Engineering & Infrastructure — Concept Experience",
    year: "2026",
    shortDescription:
      "A precision-driven digital experience for a structural engineering and infrastructure enterprise, showcasing tectonic capabilities, engineering dossiers, material systems, and project tender pathways.",
    description:
      "A precision-driven digital experience for a structural engineering and infrastructure enterprise, showcasing tectonic capabilities, engineering dossiers, material systems, and project tender pathways.",
    thumbnail: "/assets/images/axis-structures.jpg",
    image: "/assets/images/axis-structures.jpg",
    heroImage: "/assets/images/axis-structures.jpg",
    liveUrl: "https://axis-structures.vercel.app/",
    tags: [
      "Structural Engineering",
      "Infrastructure",
      "Construction",
      "Tectonic Systems",
      "Engineering Dossiers",
      "Tender Inquiries",
    ],
    featured: true,
    services: [
      "Structural Engineering UI/UX Architecture",
      "Material Taxonomy & Structural Systems Engine",
      "Infrastructure Dossier Showcase",
      "4-Phase Engineering Execution Breakdown",
      "Commercial Tender & RFP Funnel",
      "Responsive Technical Frontend Architecture",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Axis Structures is a technical, high-trust digital experience concept created by SS STUDIO to demonstrate how a structural engineering and infrastructure enterprise can project monumental scale, engineering rigor, and material precision to institutional developers, architects, and public authorities.",
      challenge: {
        title: "The Tectonic Credibility Challenge",
        description:
          "Large-scale structural engineering and infrastructure enterprises undertake monumental, high-risk civil works—high-rise framing, long-span bridges, transit hubs, and heavy industrial facilities. Their digital presence must project unyielding structural integrity, rigorous safety methodologies, and technical mastery without overwhelming non-specialist stakeholders with impenetrable calculations.",
        painPoints: [
          "Cluttered engineering websites buried under dry technical tables and unsearchable PDF credentials",
          "Inability to convey the massive physical scale and structural elegance of monumental infrastructure",
          "Lack of structured breakdown for complex material systems (reinforced concrete, structural steel, post-tensioned cables)",
          "Cumbersome tender and RFP submission workflows that create friction for commercial developers",
        ],
        framing:
          "Framed by SS STUDIO as a high-trust digital architecture challenge: how to translate monumental civil scale and engineering rigor into a sleek, authoritative digital flagship.",
      },
      approach:
        "Engineered an industrial-architectural interface combining blueprint precision grids, structured material taxonomy, modular infrastructure dossiers, multi-phase engineering methodologies, and smooth GSAP choreography.",
      businessContext: {
        title: "Structural Engineering & Civil Infrastructure Context",
        paragraphs: [
          "Structural engineering and heavy construction enterprises operate in high-stakes environments where precision, load calculations, seismic resilience, and material durability are paramount.",
          "Digital flagships in this sector must instill deep institutional confidence among developers, municipal agencies, and architectural partners through structured capability dossiers and clear technical information architecture.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, engineering capability discovery, and project tender inquiry workflows.",
        ],
        verifiedFacts: [
          "Conceptual digital experience designed for structural engineering and infrastructure firms",
          "Conceptual engineering domains: Commercial Superstructures, Transit Infrastructure, Long-Span Bridges, Industrial Plants",
          "Conceptual material systems direction: High-Strength Structural Steel, Precast Concrete, Post-Tensioned Cables, Composite Framing",
          "Conceptual 4-phase execution framework: Geotechnical Survey, Structural Modeling, Fabrication, Commissioning",
        ],
        sourceNote: "Source: Civil engineering research & structural infrastructure taxonomy",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the structural engineering and construction domain. Project dossiers, load specs, material systems, and civil classifications reflect conceptual engineering research. No actual engineering licenses, government contracts, or completed client projects are claimed.",
      },
      strategy: {
        title: "Technical Authority & Structural Hierarchy",
        description:
          "SS STUDIO architected an authoritative, high-trust digital hierarchy: Core Engineering Capabilities → Structural Material Taxonomy → Heavy Civil Dossiers → Engineering Execution Process → Commercial Tender Inquiry.",
        pillars: [
          {
            title: "Blueprint Precision & Technical Grid",
            description:
              "Employed 1px hairline blueprint grids, technical metadata badges, and monospaced callouts to communicate engineering discipline.",
          },
          {
            title: "Material Systems Taxonomy",
            description:
              "Structured conceptual profiles demonstrating how structural steel, high-performance concrete, tensile cables, and seismic dampening systems can be presented.",
          },
          {
            title: "Infrastructure Project Dossiers",
            description:
              "Organized conceptual civil projects into structured dossiers detailing span length, load capacity, structural framing, and site conditions.",
          },
          {
            title: "4-Phase Execution Methodology",
            description:
              "Visualized a conceptual end-to-end engineering workflow from initial geotechnical analysis and BIM modeling through fabrication and commissioning.",
          },
          {
            title: "Commercial Tender & RFP Integration",
            description:
              "Embedded a streamlined conceptual tender inquiry interface for developers, contractors, and procurement teams.",
          },
        ],
      },
      experienceDesign: {
        title: "Tectonic Monumentality & Blueprint Rigor",
        description:
          "The visual language blends monolithic graphite canvases with sharp hairline grids, high-visibility technical cyan accents (#00f2fe), and robust geometric typography to evoke the unyielding strength of modern engineering.",
        designPrinciples: [
          {
            title: "Engineering Precision",
            description:
              "Sharp 1px hairline drafting lines, coordinate stamps, and monospaced technical figures reinforce structural accuracy.",
          },
          {
            title: "Monumental Scale",
            description:
              "Full-bleed structural photography and wide typography communicate the physical gravity of civil infrastructure.",
          },
          {
            title: "Tactile Technical Response",
            description:
              "Crisp card hover states and kinetic data reveals give interactive life to heavy engineering dossiers.",
          },
        ],
        image: "/assets/images/axis-structures.jpg",
        imageCaption:
          "Representative structural engineering visual and steel framing geometry created for AXIS STRUCTURES.",
      },
      productDiscovery: {
        title: "Explore Capabilities & Sectors",
        subtitle: "Structural Systems & Infrastructure Portfolio",
        description:
          "The engineering discovery engine allows developers and public authorities to inspect capabilities across civil sectors, examine material systems, and review structural case studies.",
        sequenceTitle: "Capability Discovery",
        categoriesTitle: "CONCEPTUAL STRUCTURAL CAPABILITIES & CIVIL SECTORS",
        discoveryFlow: [
          {
            step: "01",
            title: "Select Civil Sector",
            description:
              "Explore conceptual sectors across Commercial Superstructures, Transit Corridors, Long-Span Bridges, or Industrial Facilities.",
          },
          {
            step: "02",
            title: "Inspect Structural System",
            description:
              "Review conceptual framing topology (post-tensioned concrete, moment-resisting steel frame, cable-stayed trusses).",
          },
          {
            step: "03",
            title: "Review Engineering Dossier",
            description:
              "Inspect conceptual engineering dossiers (load criteria, seismic resilience ratings, span parameters).",
          },
          {
            step: "04",
            title: "Initiate Project Tender",
            description:
              "Test the interactive project tender and RFP inquiry workflow.",
          },
        ],
        productCategories: [
          {
            name: "Commercial Superstructures",
            application: "Conceptual Domain: High-Rise Core Engineering, Braced Frames & Composite Slabs",
            image: "/assets/images/axis-structures.jpg",
          },
          {
            name: "Transit & Civil Infrastructure",
            application: "Conceptual Domain: Viaducts, Multi-Modal Transit Hubs & Heavy Railway Corridors",
            image: "/assets/images/axis-structures.jpg",
          },
          {
            name: "Long-Span Bridges & Spans",
            application: "Conceptual Domain: Cable-Stayed & Steel Truss Spans for River & Highway Crossings",
            image: "/assets/images/axis-structures.jpg",
          },
          {
            name: "Heavy Industrial Facilities",
            application: "Conceptual Domain: Long-Span Logistics Warehouses & Advanced Manufacturing Plants",
            image: "/assets/images/axis-structures.jpg",
          },
        ],
        disclaimer:
          "Disclaimer: Engineering capabilities, project values, and structural specifications are presented as a conceptual digital design study demonstrating civil engineering information architecture. No real structural engineering licenses or contractual guarantees are implied.",
      },
      enquiryExperience: {
        title: "Project Tender & Engineering Enquiry",
        subtitle: "Commercial RFP & Procurement Pathway",
        eyebrow: "CONCEPTUAL PROJECT TENDER & PROCUREMENT WORKFLOW",
        description:
          "Designed for developers, general contractors, and procurement teams, the conceptual tender workflow captures project classification, estimated square footage, site geography, and structural requirements.",
        badge: "CONCEPT TENDER FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Conceptual sector selection (Superstructures, Civil Infrastructure, Bridges, Industrial)",
          "Project scale classification, site geography, and procurement timeline",
          "Engineering brief parameter capture and specification input",
          "Interactive frontend validation with demo dispatch state (no live ERP/BIM backend)",
        ],
        workflowSteps: [
          {
            step: "1",
            title: "Sector & Scope",
            description: "Select commercial, transit, bridge, or industrial infrastructure domain.",
          },
          {
            step: "2",
            title: "Site & Scale Data",
            description: "Specify project location, estimated scale, and procurement schedule.",
          },
          {
            step: "3",
            title: "Tender Dispatch",
            description: "Structured tender package routed to interactive demo confirmation state.",
          },
        ],
        disclaimer:
          "Note: This tender inquiry workflow is implemented as an interactive frontend demonstration. In a production environment, it connects to enterprise procurement portals, ERP systems, or senior estimating team endpoints.",
      },
      engineering: {
        title: "Frontend Engineering & Technical Architecture",
        description:
          "Axis Structures is engineered on a resilient React and TypeScript foundation built for instant data indexing, accessible technical tables, and fluid 60fps scroll choreography.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Graphite & Cyan Blueprint Tokens", "CSS Grid"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Primitives & A11y",
            items: ["Accessible Headless Modals", "Lucide React", "WCAG AA Technical Contrast"],
          },
        ],
        highlights: [
          "Strict TypeScript typing for all structural capabilities, material specifications, and tender states",
          "GPU-accelerated transform choreography with full prefers-reduced-motion fallback",
          "Zero layout shift architecture across wide engineering monitors and field tablets",
          "Modular data architecture enabling rapid updates to infrastructure portfolios and technical data sheets",
        ],
      },
      visualSystem: {
        title: "Design System & Technical Taxonomy",
        typography: [
          {
            role: "Display Headings",
            family: "Syne / Geometric Display",
            usage: "Monumental capability titles, sector headings, and structural project names",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Load parameters, steel grades, concrete PSI ratings, and tender coordinates",
          },
          {
            role: "Technical Body",
            family: "Plus Jakarta Sans",
            usage: "Engineering descriptions, methodology breakdowns, and RFP forms",
          },
        ],
        palette: [
          {
            name: "Graphite Void",
            hex: "#06080b",
            role: "Deep foundational technical background",
            bgClass: "bg-[#06080b]",
          },
          {
            name: "Structural Steel",
            hex: "#0e131b",
            role: "Elevated card surfaces and blueprint containers",
            bgClass: "bg-[#0e131b]",
          },
          {
            name: "Technical Cyan",
            hex: "#00f2fe",
            role: "Active interaction states, blueprint lines, and primary CTAs",
            bgClass: "bg-[#00f2fe]",
          },
          {
            name: "Blueprint Slate",
            hex: "#94a3b8",
            role: "Secondary technical labels and drafting annotations",
            bgClass: "bg-slate-400",
          },
          {
            name: "High-Contrast White",
            hex: "#f8fafc",
            role: "Primary headings and structural data values",
            bgClass: "bg-[#f8fafc]",
          },
        ],
        principles: [
          "1px hairline blueprint grids and coordinate borders defining spatial structure",
          "High-contrast data hierarchy ensuring immediate scanning of load ratings and steel grades",
          "Atmospheric industrial aesthetic balancing tectonic authority with modern design precision",
        ],
      },
      responsive: {
        title: "Multi-Device Technical Adaptation",
        description:
          "The interface adapts seamlessly across screen resolutions—ensuring engineering dossiers and capability selectors remain fully functional for field engineers on smartphones, project managers on tablets, and executive architects on wide workstation monitors.",
        breakpoints: [
          {
            device: "Workstation Displays (1440px+)",
            resolution:
              "Full blueprint grid matrices, side-by-side technical dossier inspections, and interactive material selectors",
            focus: "In-depth project analysis and commercial tender reviews",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution:
              "2-column modular capability cards, collapsible engineering sheets, and touch controls",
            focus: "Consultations and field project reviews",
          },
          {
            device: "Mobile Phones (360px – 430px)",
            resolution:
              "Single-column technical flow, touch-optimized tender inquiry forms, and rapid contact access",
            focus: "On-site capability verification and rapid tender initiation",
          },
        ],
      },
      deliverables: {
        title: "Delivered Engineering Experience",
        summary:
          "SS STUDIO engineered a complete digital flagship and technical capability platform tailored to structural engineering and heavy construction enterprises.",
        items: [
          "Complete Structural Engineering Digital Flagship Architecture",
          "Conceptual Material Taxonomy & Structural Systems Information Sheets",
          "Interactive 4-Phase Engineering Execution Methodology Breakdown",
          "Curated Civil Infrastructure Project Dossiers (Conceptual Studies)",
          "Conceptual Commercial Project Tender & RFP Submission Pathway",
          "Responsive Blueprint & Technical Cyan Design System with GSAP Choreography",
          "Accessible Headless Overlays & High-Precision Touch Optimization",
        ],
      },
      theExperience:
        "Visitors explore conceptual engineering case studies, structural systems breakdown, architectural material specifications, and interactive project tender flows across all devices.",
      whatWeBuilt: [
        "Monumental structural engineering gateway with precision technical metadata",
        "Conceptual material & structural system exploration (high-strength steel, precast concrete, tension cables)",
        "Structured conceptual engineering dossiers covering commercial towers, transit infrastructure, and bridge spans",
        "Interactive 4-phase engineering execution process breakdown",
        "Responsive, high-performance frontend with GSAP ScrollTrigger interactions",
      ],
      sections: [
        {
          number: "01",
          title: "Structural Gateway",
          description:
            "Atmospheric engineering entrance establishing structural integrity, tectonic scale, and precision geometry.",
        },
        {
          number: "02",
          title: "Material & Structural Systems",
          description:
            "Technical taxonomy exploring conceptual structural steel framing, composite concrete, and tensile engineering.",
        },
        {
          number: "03",
          title: "Infrastructure & Civil Feats",
          description:
            "Curated conceptual dossiers of monumental bridges, commercial superstructures, and transit corridors.",
        },
        {
          number: "04",
          title: "Engineering Process & Safety",
          description:
            "Phase-by-phase execution methodology from geotechnical survey to structural commissioning.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/axis-structures.jpg",
          title: "Monumental Structural Engineering",
          caption: "Representative architectural and engineering visual created for AXIS STRUCTURES.",
        },
      ],
      result:
        "Engineered a precision-driven, high-performance digital presence showcasing monumental architecture, structural engineering rigor, and modern material systems.",
    },
  },
  {
    id: "verra-residences",
    number: "06",
    title: "VERRA RESIDENCES",
    slug: "verra-residences",
    industry: "Real Estate",
    subIndustry: "Residential Developments",
    type: "CONCEPT",
    status: "LIVE",
    tag: "LIVE",
    category: "Residential Architecture & Property — Concept Experience",
    year: "2026",
    shortDescription:
      "A refined property and residential development digital experience focused on architectural stillness, curated residence collections, communal amenities, and private inquiry.",
    description:
      "A refined property and residential development digital experience focused on architectural stillness, curated residence collections, communal amenities, and private inquiry.",
    thumbnail: "/assets/images/verra-residences.jpg",
    image: "/assets/images/verra-residences.jpg",
    heroImage: "/assets/images/verra-residences.jpg",
    liveUrl: "https://verra-residences.vercel.app/",
    tags: [
      "Real Estate",
      "Residential Development",
      "Luxury Living",
      "Architectural Stillness",
      "Spatial Floorplans",
      "Private Inquiry",
    ],
    featured: true,
    services: [
      "Residential Development UI/UX Architecture",
      "Residence Collection & Spatial Program Showcase",
      "Tactile Architectural Material Studies",
      "Communal Wellness & Amenity Presentation",
      "Private Presentation & Inquiry Funnel",
      "Responsive Frontend Architecture",
    ],
    technology: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP & ScrollTrigger",
      "Lenis Smooth Scroll",
      "Lucide Icons",
      "Vite",
    ],
    caseStudy: {
      summary:
        "Verra Residences is a premium property and residential development digital experience concept created by SS STUDIO to demonstrate how high-end residential architecture can be presented through spatial stillness, tactile materiality, and quiet luxury rather than aggressive sales tactics.",
      challenge: {
        title: "The Real Estate Storytelling Challenge",
        description:
          "Premium residential developments often struggle in digital environments—frequently burdened with aggressive sales popups, garish countdown timers, and cluttered floorplan tables that alienate discerning buyers. High-end property buyers seek an emotional connection to architectural stillness, natural light, material craftsmanship, and community wellness.",
        painPoints: [
          "Aggressive real-estate marketing tropes that destroy the serene prestige of luxury architecture",
          "Confusing floorplan grids that fail to communicate spatial volume, daylight orientation, and indoor-outdoor flow",
          "Lack of tactile representation for architectural materials (honed limestone, smoked oak, cast bronze)",
          "High-friction lead-capture forms that feel invasive rather than providing a private concierge service",
        ],
        framing:
          "Framed by SS STUDIO as an architectural presentation challenge: how to build an intimate digital sanctuary that communicates architectural stillness, material depth, and refined living before private sales engagement.",
      },
      approach:
        "Crafted an editorial property experience balancing serene visual pacing, curated residence studies (Garden, Courtyard, Penthouse), tactile materiality palettes, communal amenity showcases, and smooth GSAP choreography.",
      businessContext: {
        title: "Residential Development & Architectural Context",
        paragraphs: [
          "Modern residential developments are not merely physical buildings; they represent considered lifestyles, sanctuary from urban noise, and enduring architectural legacies.",
          "Digital experiences in this domain must evoke the serenity, light quality, and craftsmanship of the physical residences—establishing a sense of place long before an in-person private salon viewing.",
          "This project represents an independent digital experience concept developed by SS STUDIO to demonstrate modern web architecture, residence discovery, and private presentation inquiry workflows.",
        ],
        verifiedFacts: [
          "Conceptual digital experience designed for high-end residential and property developments",
          "Conceptual residence collections: Garden Residences, Courtyard Suites, Crown Penthouses",
          "Conceptual materiality palette: Honed Roman Limestone, Smoked Oak, Patinated Bronze, Travertine",
          "Conceptual communal amenities: Reflecting Pool, Wellness Sanctuary, Private Library, Garden Pavilions",
        ],
        sourceNote: "Source: Residential architecture research & real estate digital architecture",
        disclaimer:
          "Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the residential real estate domain. Residence collections, floorplans, amenities, and spatial dimensions reflect conceptual architectural research. No real property prices, unit availability, RERA certifications, developer claims, or investment returns are stated or implied.",
      },
      strategy: {
        title: "Architectural Stillness & Spatial Discovery",
        description:
          "SS STUDIO structured a tranquil, architectural narrative: Development Vision → Curated Residences → Tactile Materiality → Communal Amenities → Orientation & Context → Private Presentation Enquiry.",
        pillars: [
          {
            title: "Architectural Stillness & Sanctuary",
            description:
              "Established an atmosphere of unhurried elegance using spacious compositions, serene twilight lighting, and refined typography.",
          },
          {
            title: "Curated Residence Collections",
            description:
              "Presented conceptual residence typologies (Garden, Courtyard, Penthouse) demonstrating how spatial programs, ceiling heights, and daylight exposures can be structured digitally.",
          },
          {
            title: "Tactile Materiality Palette",
            description:
              "Showcased conceptual physical surfaces—honed limestone, smoked oak millwork, fluted stone, and cast bronze hardware.",
          },
          {
            title: "Communal Wellness & Retreats",
            description:
              "Highlighted 6 conceptual lifestyle spaces including the reflecting pool, wellness bathhouse, private library, and landscaped gardens.",
          },
          {
            title: "Private Presentation Inquiry",
            description:
              "Engineered a discreet, conceptual inquiry pathway for private sales salon appointments and residence dossiers.",
          },
        ],
      },
      experienceDesign: {
        title: "Calm Luxury & Architectural Light",
        description:
          "The visual language embraces serene charcoal and basalt foundations (#07080a), warm limestone and champagne gold accents (#d4af37), generous negative space, and refined typography to evoke a quiet residential sanctuary.",
        designPrinciples: [
          {
            title: "Quiet Luxury",
            description:
              "Understated color palettes, subtle metallic accents, and generous whitespace replace aggressive marketing tropes.",
          },
          {
            title: "Spatial Proportions",
            description:
              "Harmonious grid layouts and full-bleed architectural compositions reflect balanced spatial design.",
          },
          {
            title: "Serene Interaction",
            description:
              "Silky smooth scroll pacing and gentle fades reinforce the restorative atmosphere of a private home.",
          },
        ],
        image: "/assets/images/verra-residences.jpg",
        imageCaption:
          "Representative architectural exterior, reflecting pool pavilion, and limestone facade created for VERRA RESIDENCES.",
      },
      productDiscovery: {
        title: "Explore Residence Collections & Spaces",
        subtitle: "Curated Architectural Homes & Amenity Pavilions",
        description:
          "The residence discovery engine allows prospective residents to explore distinct living typologies, inspect spatial programs, and review communal amenities.",
        sequenceTitle: "Residence Discovery",
        categoriesTitle: "CONCEPTUAL RESIDENCE EDITIONS & SPACES",
        discoveryFlow: [
          {
            step: "01",
            title: "Select Residence Collection",
            description:
              "Explore conceptual collections: The Garden Residences, The Courtyard Suites, or The Crown Penthouses.",
          },
          {
            step: "02",
            title: "Inspect Spatial Program",
            description:
              "Review conceptual spatial volumes, terrace layouts, material finishes, and daylight orientations.",
          },
          {
            step: "03",
            title: "Explore Communal Amenities",
            description:
              "Explore conceptual communal spaces including the reflecting pool, wellness retreat, and garden lounges.",
          },
          {
            step: "04",
            title: "Request Private Presentation",
            description:
              "Test the interactive private presentation and digital dossier inquiry workflow.",
          },
        ],
        productCategories: [
          {
            name: "The Garden Residences",
            application: "Conceptual Study: Ground-Level Living with Private Landscaped Courtyards & Reflecting Pools",
            image: "/assets/images/verra-residences.jpg",
          },
          {
            name: "The Courtyard Suites",
            application: "Conceptual Study: Light-Filled Mid-Level Architectural Homes with Deep Loggias",
            image: "/assets/images/verra-residences.jpg",
          },
          {
            name: "The Crown Penthouses",
            application: "Conceptual Study: Expansive Multi-Level Sky Residences with Panoramic Horizons & Private Terraces",
            image: "/assets/images/verra-residences.jpg",
          },
          {
            name: "Communal Wellness & Pavilions",
            application: "Conceptual Amenities: Curated Wellness Sanctuary, Private Library & Resident Garden Lounges",
            image: "/assets/images/verra-residences.jpg",
          },
        ],
        disclaimer:
          "Disclaimer: Residence collections, spatial programs, and amenities are presented as a conceptual digital design study demonstrating real estate information architecture. No unit pricing, square footage, possession schedules, or commercial availability are asserted.",
      },
      enquiryExperience: {
        title: "Private Residential Enquiry & Presentation",
        subtitle: "Bespoke Sales Salon & Dossier Pathway",
        eyebrow: "CONCEPTUAL RESIDENCE INQUIRY & APPOINTMENTS",
        description:
          "Designed for prospective buyers and representatives, the conceptual private enquiry workflow captures residence typology interest, planned timeframe, and private salon consultation requests in a discreet, respectful format.",
        badge: "CONCEPT ENQUIRY FLOW · FRONTEND IMPLEMENTATION",
        features: [
          "Conceptual residence collection selection (Garden, Courtyard, Penthouse, Full Development)",
          "Private salon appointment scheduling and digital dossier dispatch",
          "Discreet preference profiling with custom architectural notes",
          "Interactive frontend validation with demo confirmation state (no live CRM connected)",
        ],
        workflowSteps: [
          {
            step: "1",
            title: "Residence Interest",
            description: "Select Garden Residences, Courtyard Suites, or Crown Penthouses.",
          },
          {
            step: "2",
            title: "Timeframe & Profile",
            description: "Specify buyer timeframe, preferred contact method, and custom requirements.",
          },
          {
            step: "3",
            title: "Private Dispatch",
            description: "Structured appointment inquiry routed to interactive demo confirmation state.",
          },
        ],
        disclaimer:
          "Note: This private inquiry workflow is implemented as an interactive frontend demonstration. In a production deployment, it connects to enterprise real estate CRM or private sales concierge endpoints.",
      },
      engineering: {
        title: "Frontend Engineering & Spatial Architecture",
        description:
          "Verra Residences is engineered with a high-performance React and TypeScript architecture focused on serene visual pacing, fluid 60fps animations, and zero cumulative layout shift.",
        stack: [
          {
            category: "Core Framework",
            items: ["React 18", "TypeScript", "Vite Build Engine"],
          },
          {
            category: "Styling & Tokens",
            items: ["Tailwind CSS", "Limestone & Basalt Tokens", "Hairline Spatial Grids"],
          },
          {
            category: "Motion & Choreography",
            items: ["GSAP 3.12", "ScrollTrigger", "Lenis Smooth Scroll"],
          },
          {
            category: "UI Primitives & A11y",
            items: ["Accessible Focus Trap", "Lucide React", "ARIA Live Dialog Systems"],
          },
        ],
        highlights: [
          "Strict TypeScript typings across all residence categories, spatial programs, and inquiry states",
          "GPU-accelerated smooth scrolling integrated with Lenis and GSAP ScrollTrigger",
          "High-resolution responsive imagery with zero layout shift and fluid typography scaling",
          "Modular component system enabling rapid updates to floorplan dossiers and amenity features",
        ],
      },
      visualSystem: {
        title: "Design System & Materiality Taxonomy",
        typography: [
          {
            role: "Display Headings",
            family: "Syne / Serif Display",
            usage: "Monumental residence titles, collection names, and architectural headlines",
          },
          {
            role: "Technical Metadata",
            family: "Space Mono",
            usage: "Spatial dimensions, ceiling heights, orientation coordinates, and dates",
          },
          {
            role: "Editorial Body",
            family: "Plus Jakarta Sans",
            usage: "Architectural narratives, amenity descriptions, and private enquiry forms",
          },
        ],
        palette: [
          {
            name: "Basalt Sanctuary",
            hex: "#07080a",
            role: "Deep foundational background canvas",
            bgClass: "bg-[#07080a]",
          },
          {
            name: "Charcoal Surface",
            hex: "#111318",
            role: "Elevated card surfaces and residence containers",
            bgClass: "bg-[#111318]",
          },
          {
            name: "Warm Limestone",
            hex: "#d4af37",
            role: "Understated champagne gold and limestone highlight accents",
            bgClass: "bg-[#d4af37]",
          },
          {
            name: "Honed Travertine",
            hex: "#d6c7b2",
            role: "Secondary material markers and border highlights",
            bgClass: "bg-[#d6c7b2]",
          },
          {
            name: "Pure Off-White",
            hex: "#f8fafc",
            role: "High-contrast primary headings and display text",
            bgClass: "bg-[#f8fafc]",
          },
        ],
        principles: [
          "Calm, warm dark palette avoiding aggressive high-saturation commercial tones",
          "Refined 1px hairline borders (rgba(212,175,55,0.12)) evoking fine architectural joinery",
          "Atmospheric serenity honoring daylight, spatial proportions, and material craft",
        ],
      },
      responsive: {
        title: "Multi-Device Architectural Adaptation",
        description:
          "The digital presentation delivers a flawless, tranquil experience across all screen sizes—from full-screen desktop presentations to mobile devices.",
        breakpoints: [
          {
            device: "Desktop Workstations (1440px+)",
            resolution:
              "Expansive full-bleed architectural spreads, side-by-side residence comparisons, and interactive material boards",
            focus: "Immersive private viewing and spatial exploration",
          },
          {
            device: "Tablets & Laptops (768px – 1024px)",
            resolution:
              "2-column modular cards, touch-optimized amenity drawers, and adaptive typography",
            focus: "Consultations and digital portfolio walk-throughs",
          },
          {
            device: "Mobile Phones (360px – 430px)",
            resolution:
              "Single-column serene flow, swipeable residence collections, and 48px touch controls",
            focus: "On-the-go residence review and rapid private inquiry",
          },
        ],
      },
      deliverables: {
        title: "Delivered Residential Experience",
        summary:
          "SS STUDIO engineered a complete digital flagship and residence discovery platform tailored to luxury residential developments.",
        items: [
          "Complete Residential Development Digital Flagship Architecture",
          "Curated Conceptual Residence Collection Showcases (Garden, Courtyard, Penthouse)",
          "Tactile Architectural Materiality Palette Direction (Limestone, Oak, Bronze)",
          "Communal Wellness & Amenity Pavilions Conceptual Presentation",
          "Conceptual Private Sales Salon & Dossier Consultation Inquiry Workflow",
          "Responsive Basalt & Limestone Design System with GSAP Choreography",
          "Accessible Headless Navigation & Focus Management System",
        ],
      },
      theExperience:
        "Visitors explore curated conceptual residence studies (Garden, Courtyard, Penthouse), tactile materiality palettes (limestone, smoked oak, travertine, bronze), quiet luxury communal amenities, and private enquiry channels across all devices.",
      whatWeBuilt: [
        "Atmospheric property-launch hero gateway with responsive editorial typography and entrance reveals",
        "Interactive conceptual residence showcase with multi-view floorplan and spatial program modals",
        "Communal amenities presentation featuring 6 conceptual quiet luxury spaces",
        "Interactive architectural material palette exploring honed limestone, smoked oak, and patinated bronze direction",
        "Bespoke interactive vector orientation diagram with landmark inspector",
        "Long-form architectural journal essays with reading drawer modals",
        "Validated private enquiry interface with interactive form workflows",
      ],
      sections: [
        {
          number: "01",
          title: "Architectural Gateway",
          description:
            "Atmospheric property-launch entrance establishing architectural stillness, proportions, and twilight ambience.",
        },
        {
          number: "02",
          title: "The Residences Showcase",
          description:
            "Curated conceptual residence studies with spatial programs, material specifications, and interactive dossiers.",
        },
        {
          number: "03",
          title: "Materiality & Communal Amenities",
          description:
            "Tactile material exploration paired with 6 conceptual wellness, lounge, and garden retreat spaces.",
        },
        {
          number: "04",
          title: "Orientation, Journal & Enquiry",
          description:
            "Precinct vector orientation map, architectural essays, and conceptual private residential enquiry workflows.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/verra-residences.jpg",
          title: "Reflecting Pool & Limestone Pavilion",
          caption: "Representative architectural visual created for VERRA RESIDENCES.",
        },
      ],
      result:
        "Engineered an evocative, high-performance digital presence showcasing refined residential architecture, material craftsmanship, and considered spatial storytelling.",
    },
  },
];

export const SELECTED_PROJECTS = PROJECTS;
