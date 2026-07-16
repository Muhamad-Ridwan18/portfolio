export type SectionId =
  | "hero"
  | "tech-logos"
  | "projects"
  | "about"
  | "experience"
  | "writing"
  | "contact"
  | "marquee"
  | "tech-stack"
  | "skills"
  | "impact"
  | "journey"
  | "how-i-build"
  | "spotlight";

export type ContactIcon = "email" | "linkedin" | "github" | "instagram" | "twitter" | "website" | "calendar";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

export interface SectionHeading {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  cvUrl: string;
  keywords: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  variant?: ButtonVariant;
}

export interface HeroCta {
  id: string;
  label: string;
  href: string;
  variant: ButtonVariant;
  external?: boolean;
  download?: boolean;
  showArrow?: boolean;
}

export interface Profile {
  firstName: string;
  lastName?: string;
  displayName: string;
  shortName: string;
  role: string;
  greeting: string;
  headline: string;
  headlineAccent: string;
  tagline: string;
  portrait: string;
  available: boolean;
  availabilityText: string;
  socialLinks: SocialLink[];
  ctas: HeroCta[];
}

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  navLabel?: string;
  heading?: SectionHeading;
  className?: string;
}

export interface AboutContent {
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  defaultOpen?: boolean;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  contributions: string[];
  highlights?: string[];
  accent: string;
  featured?: boolean;
  coverImage?: string;
  deviceType?: "phones" | "laptop" | "tablet";
  caseStudyHref?: string;
  stats?: CaseStudyStat[];
  about?: string;
  howItWorks?: CaseStudyStep[];
  caseHighlights?: string[];
  images?: ProjectImage[];
  url?: string;
}

export interface TechLogo {
  name: string;
  icon: string;
}

export interface WritingPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href?: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  icon: ContactIcon;
  description: string;
  external?: boolean;
}

export interface ContactContent {
  cvNote: string;
  cvButtonLabel: string;
  channels: ContactChannel[];
}

export interface FooterContent {
  brandSuffix: string;
  tagline: string;
  builtWith: string[];
  madeBy: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export interface Portfolio {
  site: SiteConfig;
  profile: Profile;
  sections: SectionConfig[];
  about: AboutContent;
  experience: ExperienceItem[];
  projects: Project[];
  techLogos: TechLogo[];
  writing: WritingPost[];
  contact: ContactContent;
  footer: FooterContent;
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}
