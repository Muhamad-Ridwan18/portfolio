import type { SectionId } from "@/types/portfolio";
import { Hero } from "./hero";
import { TechLogos } from "./tech-logos";
import { Projects } from "./projects";
import { About } from "./about";
import { Experience } from "./experience";
import { Writing } from "./writing";
import { Contact } from "./contact";

function DisabledSection() {
  return null;
}

export const sectionRegistry: Record<SectionId, React.ComponentType> = {
  hero: Hero,
  "tech-logos": TechLogos,
  projects: Projects,
  about: About,
  experience: Experience,
  writing: Writing,
  contact: Contact,
  marquee: DisabledSection,
  "tech-stack": DisabledSection,
  skills: DisabledSection,
  impact: DisabledSection,
  journey: DisabledSection,
  "how-i-build": DisabledSection,
  spotlight: DisabledSection,
};
