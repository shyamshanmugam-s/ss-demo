import { Project } from "@/types";

export type { Project };

export const SELECTED_PROJECTS: Project[] = [
  {
    id: "forge-flow",
    number: "01",
    title: "FORGE FLOW",
    industry: "MANUFACTURING / INDUSTRIAL",
    category: "Industrial Pumping Solutions — Concept Website",
    shortDescription:
      "A concept website for an industrial pumping brand, designed around product discovery, technical communication, applications, and quotation workflows.",
    description:
      "A concept website for an industrial pumping brand, designed around product discovery, technical communication, applications, and quotation workflows.",
    year: "2026",
    image: "/assets/images/forge-flow-industrial.jpg",
    heroImage: "/assets/images/forge-flow-industrial.jpg",
    services: [
      "Custom UI/UX Architecture",
      "Product Catalog & Information Layout",
      "Interactive Guided Pump Finder",
      "4-Stage Pumping Flow Visual Schematic",
      "Commercial RFQ & Inquiry Funnel",
      "Responsive Frontend Implementation",
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
    status: "Industry Demo",
    tag: "INDUSTRY DEMO",
    featured: true,
    caseStudy: {
      summary:
        "Forge Flow is an industry demonstration created to showcase how industrial manufacturing brands can communicate engineering clarity, assist visitors in pump selection, and streamline commercial procurement inquiries.",
      challenge:
        "Industrial equipment websites frequently suffer from cluttered PDF links, unreadable product layouts, and generic template structures that fail to reflect engineering precision.",
      approach:
        "Engineered an obsidian-framed technical interface combining structured product tables, an interactive 3-step Guided Pump Finder, application domain visual mapping, and responsive GSAP scroll motion.",
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
        "Engineered an industry demonstration demonstrating structured industrial information architecture, interactive guided selection, and quotation workflows for industrial equipment enterprises.",
    },
  },
  {
    id: "atelier-forma",
    number: "02",
    title: "ATELIER FORMA",
    industry: "INTERIORS · ARCHITECTURE · OBJECT",
    category: "INTERIORS · ARCHITECTURE · OBJECT",
    shortDescription:
      "An editorial architectural studio experience exploring space, material, atmosphere and object through a quiet, material-driven digital exhibition.",
    description:
      "An editorial architectural studio experience exploring space, material, atmosphere and object through a quiet, material-driven digital exhibition.",
    year: "2026",
    image: "/assets/images/atelier-forma-architecture.jpg",
    heroImage: "/assets/images/atelier-forma-architecture.jpg",
    liveUrl: "https://atelier-forma-weld.vercel.app/",
    services: [
      "Spatial Architecture & Layout",
      "Interactive Material Studies",
      "Tactile Editorial Typography",
      "Monograph Exhibition System",
      "Responsive Frontend Architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Lenis Smooth Scroll",
      "Three.js",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "An editorial architectural studio experience exploring space, material, atmosphere and object through a quiet, material-driven digital exhibition.",
      challenge:
        "Communicating tactile materiality, spatial atmosphere, and quiet editorial restraint in a digital medium without relying on loud marketing tropes or generic templates.",
      approach:
        "Crafted a warm, material-driven layout using architectural serif typography, subtle spatial grids, tactile material studies, and responsive GSAP scroll motion.",
      theExperience:
        "Visitors explore a curated monograph showcasing built spatial projects, interactive material studies of travertine, linen, and bronze, and editorial dossier drawers.",
      whatWeBuilt: [
        "Editorial architectural studio gateway with refined typography and full-bleed imagery",
        "Interactive tactile material study board highlighting travertine, linen, and patinated bronze",
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
            "Curated spatial dossier index with project photography, architectural scales, and location studies.",
        },
        {
          number: "03",
          title: "Tactile Material Studies",
          description:
            "Interactive tactile material palette showcasing travertine, brushed bronze, and natural linen textures.",
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
    id: "ember-and-grain",
    number: "03",
    title: "EMBER & GRAIN",
    industry: "COFFEE · FOOD · SPACE",
    category: "COFFEE · FOOD · SPACE",
    shortDescription:
      "A premium editorial café experience exploring coffee craft, food, materials, atmosphere and the ritual of slowing down through a warm, tactile digital space.",
    description:
      "A premium editorial café experience exploring coffee craft, food, materials, atmosphere and the ritual of slowing down through a warm, tactile digital space.",
    year: "2026",
    image: "/assets/images/ember-and-grain-cafe.jpg",
    heroImage: "/assets/images/ember-and-grain-cafe.jpg",
    liveUrl: "https://ember-and-grain-pi.vercel.app/",
    services: [
      "Editorial Hospitality UI/UX",
      "Specialty Coffee & Tasting Notes",
      "Seasonal Culinary Menu System",
      "Material & Spatial Storytelling",
      "Responsive Frontend Architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "A premium editorial café experience exploring coffee craft, food, materials, atmosphere and the ritual of slowing down through a warm, tactile digital space.",
      challenge:
        "Translating the rich sensory experience of artisanal coffee, tactile interior materials, and unhurried culinary ambiance into an evocative, seamless digital space.",
      approach:
        "Crafted an editorial hospitality experience blending warm earth palettes, typography with intentional pacing, immersive seasonal journals, and fluid scroll interactions.",
      theExperience:
        "Visitors explore signature roast profiles and tasting notes, curated seasonal menus, the artisanal story behind the space, and table reservations across any device.",
      whatWeBuilt: [
        "Atmospheric hero gateway featuring warm architectural café visuals and unhurried typography",
        "Interactive specialty coffee showcase with roast notes, brew methods, and origins",
        "Curated seasonal food and pastry menu with culinary pairings and ingredient provenance",
        "Sensory journal and spatial material narrative celebrating warmth, craft, and hospitality",
        "Seamless table reservation experience and digital contact touchpoints",
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
            "Single-origin coffees, espresso craft, and pour-over rituals detailed with roast profiles and flavor notes.",
        },
        {
          number: "03",
          title: "Seasonal Kitchen & Bakery",
          description:
            "Editorial presentation of morning bakes, savory plates, and house specialties crafted with honest ingredients.",
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
    industry: "RESTAURANT · DINING · CULTURE",
    category: "RESTAURANT · DINING · CULTURE",
    shortDescription:
      "A cinematic contemporary restaurant experience exploring seasonal cooking, architecture, light, material and atmosphere through an editorial digital space.",
    description:
      "A cinematic contemporary restaurant experience exploring seasonal cooking, architecture, light, material and atmosphere through an editorial digital space.",
    year: "2026",
    image: "/assets/images/lume-restaurant.jpg",
    heroImage: "/assets/images/lume-restaurant.jpg",
    liveUrl: "https://lume-restaurant-xi.vercel.app/",
    services: [
      "Cinematic Culinary UI/UX",
      "Editorial Conceptual Menu System",
      "Signature Dish & Tasting Experience",
      "Material & Spatial Storytelling",
      "Reservation Inquiry Interface",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "A cinematic contemporary restaurant experience exploring seasonal cooking, architecture, light, material and atmosphere through an editorial digital space.",
      challenge:
        "Translate the sensory experience of fine dining, seasonal cooking, architectural materials and evening atmosphere into a sophisticated digital experience.",
      approach:
        "Combine cinematic photography, editorial typography, spatial storytelling, material studies and controlled scroll interactions.",
      theExperience:
        "Visitors explore the conceptual menu, signature dishes, restaurant architecture, dining sequence and journal stories.",
      whatWeBuilt: [
        "Cinematic restaurant gateway",
        "Editorial conceptual menu",
        "Interactive dish detail experience",
        "Material and architectural study",
        "Four-stage dining experience",
        "Signature dish showcase",
        "Editorial journal",
        "Reservation inquiry interface",
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
            "Curated culinary chapters with seasonal provenance, culinary philosophies, and interactive course breakdowns.",
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
            "Four-stage dining journey from arrival to digestif, paired with bespoke table reservation inquiry interfaces.",
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
    id: "axis",
    number: "05",
    title: "AXIS STRUCTURES",
    industry: "CONSTRUCTION · ENGINEERING · INFRASTRUCTURE",
    category: "CONSTRUCTION · ENGINEERING · INFRASTRUCTURE",
    shortDescription:
      "A precision-driven construction and structural engineering experience exploring architecture, material systems, construction processes, and the relationship between structure and space.",
    description:
      "A precision-driven construction and structural engineering experience exploring architecture, material systems, construction processes, and the relationship between structure and space.",
    year: "2026",
    image: "/assets/images/axis-structures.jpg",
    heroImage: "/assets/images/axis-structures.jpg",
    liveUrl: "https://axis-structures.vercel.app/",
    services: [
      "Structural Engineering UI/UX",
      "Interactive Blueprint & Material Systems",
      "Project Dossiers & Engineering Feats",
      "Heavy Infrastructure & Process Breakdown",
      "Responsive Frontend Architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "A precision-driven construction and structural engineering experience exploring architecture, material systems, construction processes, and the relationship between structure and space.",
      challenge:
        "Communicating monumental structural engineering, heavy civil scale, tectonic precision, and complex material systems in a sophisticated, high-performance digital medium.",
      approach:
        "Crafted an industrial-architectural interface combining blueprint precision, material taxonomy (reinforced concrete, structural steel, post-tensioned cable), milestone timelines, and smooth GSAP scroll choreography.",
      theExperience:
        "Visitors explore precision engineering case studies, structural systems breakdown, architectural material specifications, and live project tenders across all devices.",
      whatWeBuilt: [
        "Monumental structural engineering gateway with precision technical metadata",
        "Material & structural system exploration (high-strength steel, precast concrete, tension cables)",
        "Engineered project dossiers covering commercial towers, transit infrastructure, and bridge spans",
        "Interactive construction phases and engineering process breakdown",
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
            "Technical taxonomy exploring structural steel framing, composite concrete, and tensile engineering.",
        },
        {
          number: "03",
          title: "Infrastructure & Civil Feats",
          description:
            "Curated dossiers of monumental bridges, commercial superstructures, and high-load transit corridors.",
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
    industry: "REAL ESTATE · RESIDENTIAL · DEVELOPMENT",
    category: "REAL ESTATE · RESIDENTIAL · DEVELOPMENT",
    shortDescription:
      "A refined residential development experience focused on architecture, materiality, amenities, and a considered sense of place.",
    description:
      "A refined residential development experience focused on architecture, materiality, amenities, and a considered sense of place.",
    year: "2026",
    image: "/assets/images/verra-residences.jpg",
    heroImage: "/assets/images/verra-residences.jpg",
    liveUrl: "https://verra-residences.vercel.app/",
    services: [
      "Residential Development UI/UX",
      "Interactive Residence Detail Modals",
      "Tactile Architectural Material Studies",
      "Interactive Orientation Map & Amenities",
      "Responsive Frontend Architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "A refined residential development experience focused on architecture, materiality, amenities, and a considered sense of place.",
      challenge:
        "Communicating architectural stillness, material depth, and refined residential living in a digital format without loud luxury marketing clichés.",
      approach:
        "Crafted an editorial real-estate experience balancing serene visual pacing, tactile material studies, interactive residence exploration modals, vector orientation diagrams, and smooth GSAP scroll choreography.",
      theExperience:
        "Visitors explore curated conceptual residence studies (Garden, Courtyard, Penthouse), tactile materiality palettes (limestone, smoked oak, travertine, bronze), quiet luxury communal amenities, and private enquiry channels across all devices.",
      whatWeBuilt: [
        "Atmospheric property-launch hero gateway with responsive editorial typography and entrance reveals",
        "Interactive conceptual residence showcase with multi-view floorplan and spatial program modals",
        "Communal amenities presentation featuring 6 curated quiet luxury spaces",
        "Interactive architectural material palette exploring honed limestone, smoked oak, and patinated bronze",
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
            "Tactile material exploration paired with 6 dedicated wellness, lounge, and garden retreat spaces.",
        },
        {
          number: "04",
          title: "Orientation, Journal & Enquiry",
          description:
            "Precinct vector orientation map, architectural essays, and private residential enquiry workflows.",
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
  {
    id: "vanta",
    number: "07",
    title: "VANTA PERFORMANCE",
    industry: "FITNESS · PERFORMANCE · RECOVERY",
    category: "FITNESS · PERFORMANCE · RECOVERY",
    shortDescription:
      "A premium performance studio experience centered on strength, movement, recovery, and intentional progression.",
    description:
      "A premium performance studio experience centered on strength, movement, recovery, and intentional progression.",
    year: "2026",
    image: "/assets/images/vanta-performance.jpg",
    heroImage: "/assets/images/vanta-performance.jpg",
    liveUrl: "https://vanta-performance.vercel.app/",
    services: [
      "Performance Studio UI/UX",
      "Interactive Training Programs",
      "Recovery Suite & Modality Systems",
      "Coaching Roster & Disciplines",
      "Responsive Frontend Architecture",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP ScrollTrigger",
      "Vite",
    ],
    status: "LIVE",
    tag: "LIVE",
    featured: true,
    caseStudy: {
      summary:
        "A premium performance studio experience centered on strength, movement, recovery, and intentional progression.",
      challenge:
        "Translating the physical discipline, athletic precision, and restorative atmosphere of a private performance sanctuary into an uncompromising digital experience.",
      approach:
        "Crafted a deep obsidian and graphite visual hierarchy accented with warm atmospheric lighting, kinetic scroll pacing, interactive training modules, and fluid GSAP interactions.",
      theExperience:
        "Visitors explore dedicated training disciplines, immersive recovery suites (contrast therapy, infrared sauna, compression), private coaching credentials, and seamless membership consultations.",
      whatWeBuilt: [
        "Monolithic athletic hero gateway with cinematic training imagery and entrance choreography",
        "Interactive training disciplines showcase covering Strength, Conditioning, Movement, and Longevity",
        "Dedicated Recovery Suite detailing contrast therapy, infrared sauna, and cold plunge modalities",
        "Private coaching and specialist roster with discipline breakdowns and credentials",
        "Interactive membership consultation and trial booking inquiry interface",
        "Responsive, high-performance frontend synchronized with GSAP ScrollTrigger",
      ],
      sections: [
        {
          number: "01",
          title: "Atmospheric Gateway",
          description:
            "High-contrast athletic entrance establishing physical discipline, architectural shadow, and quiet luxury.",
        },
        {
          number: "02",
          title: "Training Disciplines",
          description:
            "Curated performance modules covering athletic strength, functional mobility, and metabolic conditioning.",
        },
        {
          number: "03",
          title: "The Recovery Suite",
          description:
            "Exploration of active restorative modalities including contrast therapy, infrared sauna, and targeted recovery.",
        },
        {
          number: "04",
          title: "Coaching & Consultations",
          description:
            "Specialist coaching credentials, training philosophies, and bespoke private consultation workflows.",
        },
      ],
      gallery: [
        {
          image: "/assets/images/vanta-performance.jpg",
          title: "Athletic Conditioning & Training Floor",
          caption: "Representative performance visual created for VANTA PERFORMANCE.",
        },
      ],
      result:
        "Engineered an uncompromising, high-performance digital presence showcasing athletic training, recovery science, and refined fitness studio architecture.",
    },
  },
];
