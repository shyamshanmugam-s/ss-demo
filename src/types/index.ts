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

export interface ProjectCaseStudy {
  summary: string;
  theProject?: string;
  challenge?: string;
  approach?: string;
  theExperience?: string;
  whatWeBuilt?: string[];
  sections?: ProjectSectionItem[];
  gallery?: ProjectGalleryItem[];
  result?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  industry: string;
  category: string;
  shortDescription: string;
  description: string;
  year: string;
  image: string;
  heroImage?: string;
  services: string[];
  technologies: string[];
  liveUrl?: string;
  caseStudy?: ProjectCaseStudy;
  featured: boolean;
  status: "Industry Demo" | "Concept Project" | "Selected Concept" | "Speculative Experience" | "LIVE" | "Live";
  tag: "INDUSTRY DEMO" | "CONCEPT PROJECT" | "SELECTED CONCEPT" | "SPECULATIVE EXPERIENCE" | "LIVE";
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
