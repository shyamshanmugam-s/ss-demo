export type ProjectStatus = "CLIENT" | "LIVE" | "CONCEPT" | "DEMO" | "IN DEVELOPMENT";

export type ProjectType = "CLIENT PROJECT" | "INDUSTRY DEMO" | "CONCEPT" | "INTERNAL SYSTEM" | "EXPERIMENT";

export interface ProjectSectionItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  image: string;
  title: string;
  caption: string;
}

export interface CaseStudyBusinessContext {
  title?: string;
  paragraphs: string[];
  verifiedFacts?: string[];
  clientContext?: string;
  disclaimer?: string;
  sourceNote?: string;
}

export interface CaseStudyChallenge {
  title?: string;
  description: string;
  painPoints?: string[];
  framing?: string;
}

export interface CaseStudyStrategy {
  title?: string;
  description: string;
  pillars?: { title: string; description: string; detail?: string }[];
}

export interface CaseStudyExperienceDesign {
  title?: string;
  description: string;
  designPrinciples?: { title: string; description: string }[];
  image?: string;
  imageCaption?: string;
}

export interface CaseStudyProductDiscovery {
  title?: string;
  subtitle?: string;
  description: string;
  discoveryFlow?: { step: string; title: string; description: string }[];
  disclaimer?: string;
  image?: string;
  imageCaption?: string;
  productCategories?: { name: string; application: string; image?: string }[];
  categoriesTitle?: string;
  sequenceTitle?: string;
}

export interface CaseStudyEnquiryExperience {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  description: string;
  features?: string[];
  badge?: string;
  image?: string;
  imageCaption?: string;
  disclaimer?: string;
  workflowSteps?: { step: string; title: string; description: string }[];
}

export interface CaseStudyEngineering {
  title?: string;
  description?: string;
  stack?: { category: string; items: string[] }[];
  highlights?: string[];
}

export interface CaseStudyVisualSystem {
  title?: string;
  typography?: { role: string; family: string; usage: string }[];
  palette?: { name: string; hex: string; role: string; bgClass?: string }[];
  principles?: string[];
}

export interface CaseStudyResponsive {
  title?: string;
  description: string;
  breakpoints?: { device: string; resolution: string; focus: string }[];
}

export interface CaseStudyDeliverables {
  title?: string;
  summary?: string;
  items: string[];
}

export interface ProjectCaseStudy {
  summary: string;
  theProject?: string;
  challenge?: string | CaseStudyChallenge;
  approach?: string;
  theExperience?: string;
  whatWeBuilt?: string[];
  sections?: ProjectSectionItem[];
  gallery?: ProjectGalleryItem[];
  result?: string;
  highlights?: string[];

  // Modular Case Study Extended Sections (Phase 4A)
  businessContext?: CaseStudyBusinessContext;
  strategy?: CaseStudyStrategy;
  experienceDesign?: CaseStudyExperienceDesign;
  productDiscovery?: CaseStudyProductDiscovery;
  enquiryExperience?: CaseStudyEnquiryExperience;
  engineering?: CaseStudyEngineering;
  visualSystem?: CaseStudyVisualSystem;
  responsive?: CaseStudyResponsive;
  deliverables?: CaseStudyDeliverables;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  industry: string;
  subIndustry: string;
  type: ProjectType;
  status: ProjectStatus;
  year: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  heroImage?: string;
  gallery?: (ProjectGalleryItem | string)[];
  liveUrl?: string;
  tags: string[];
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
  technology: string[];
  services: string[];
  clientName?: string;
  location?: string;

  // Backward compatibility convenience accessors
  number?: string;
  image?: string;
  technologies?: string[];
  category?: string;
  tag?: string;
}

export interface ServiceCapability {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}
