import { portfolio } from "@/data/portfolio";
import type {
  ContactChannel,
  Portfolio,
  Project,
  SectionConfig,
} from "@/types/portfolio";

export interface ResolvedContactChannel extends ContactChannel {
  href: string;
  description: string;
}

export interface ResolvedPortfolio
  extends Omit<Portfolio, "contact" | "profile"> {
  profile: Portfolio["profile"] & {
    socialLinks: (Portfolio["profile"]["socialLinks"][number] & {
      href: string;
    })[];
  };
  contact: Omit<Portfolio["contact"], "channels"> & {
    channels: ResolvedContactChannel[];
  };
}

export function getPortfolio(): ResolvedPortfolio {
  return {
    ...portfolio,
    contact: {
      ...portfolio.contact,
      channels: portfolio.contact.channels.map((channel) =>
        resolveContactChannel(channel, portfolio)
      ),
    },
    profile: {
      ...portfolio.profile,
      ctas: portfolio.profile.ctas.map((cta) => ({
        ...cta,
        href: cta.id === "cv" ? portfolio.site.cvUrl : cta.href,
      })),
      socialLinks: portfolio.profile.socialLinks.map((link) => ({
        ...link,
        href: resolveSocialHref(link.id, portfolio.social, portfolio.site),
      })),
    },
  };
}

export function getEnabledSections(): SectionConfig[] {
  return getPortfolio().sections.filter((section) => section.enabled);
}

export function getNavLinks() {
  return getEnabledSections()
    .filter((section) => section.navLabel)
    .map((section) => ({
      label: section.navLabel!,
      href: `#${section.id}`,
    }));
}

export function getSectionConfig(
  id: SectionConfig["id"]
): SectionConfig | undefined {
  return getPortfolio().sections.find((section) => section.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return getPortfolio().projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return getPortfolio().projects.filter((p) => p.featured);
}

export function getSecondaryProjects(): Project[] {
  return getPortfolio().projects.filter((p) => !p.featured);
}

function resolveContactChannel(
  channel: ContactChannel,
  data: Portfolio
): ResolvedContactChannel {
  const hrefMap: Record<string, string> = {
    email: `mailto:${data.site.email}`,
    github: data.social.github,
    linkedin: data.social.linkedin,
    instagram: data.social.instagram,
    calendar: `mailto:${data.site.email}?subject=Schedule%20a%20call`,
  };

  return {
    ...channel,
    href: hrefMap[channel.id] ?? "#",
    description:
      channel.id === "email" ? data.site.email : channel.description,
  };
}

function resolveSocialHref(
  id: string,
  social: Portfolio["social"],
  site: Portfolio["site"]
): string {
  if (id === "github") return social.github;
  if (id === "linkedin") return social.linkedin;
  if (id === "instagram") return social.instagram;
  if (id === "email") return `mailto:${site.email}`;
  return "#";
}

export const siteConfig = {
  get name() {
    return getPortfolio().site.name;
  },
  get title() {
    return getPortfolio().site.title;
  },
  get description() {
    return getPortfolio().site.description;
  },
  get url() {
    return getPortfolio().site.url;
  },
  get email() {
    return getPortfolio().site.email;
  },
  get github() {
    return getPortfolio().social.github;
  },
  get linkedin() {
    return getPortfolio().social.linkedin;
  },
  get instagram() {
    return getPortfolio().social.instagram;
  },
  get cvUrl() {
    return getPortfolio().site.cvUrl;
  },
  get keywords() {
    return getPortfolio().site.keywords;
  },
};
