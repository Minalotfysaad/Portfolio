export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export interface PillarItem {
  number: string;
  title: string;
  quote?: string;
  description: string;
  iconName: string;
  keywords?: string[];
}

export interface ExperienceContribution {
  category: string;
  text: string;
  iconName?: string;
}

export interface ExperienceCategory {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  contributions: ExperienceContribution[];
  tech: string[];
  description?: string;
  categories?: ExperienceCategory[];
}

export interface SkillItem {
  name: string;
  category?: string;
  description?: string;
  highlight?: boolean;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: SkillItem[];
}

export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  description: string;
  tech: string[];
  color?: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
  category?: string;
  isPlaceholder?: boolean;
}

export interface ProjectDecision {
  title: string;
  problem: string;
  decision: string;
  outcome: string;
}

export interface ProjectEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  authRequired?: boolean;
  role?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  isFeatured?: boolean;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  approach: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  architectureNodes: ArchitectureNode[];
  endpoints: ProjectEndpoint[];
  engineeringDecisions: ProjectDecision[];
  screenshots: ProjectScreenshot[];
  securityModel: {
    title: string;
    items: string[];
  };
  dataAccessModel: {
    title: string;
    items: string[];
  };
  validationAndTesting: {
    title: string;
    items: string[];
  };
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  highlights: string[];
  isHighlighted?: boolean;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  nativeName?: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
  relocation: string;
  cvUrl: string;
}
