import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  site: {
    name: "Muhamad Ridwan",
    title: "Muhamad Ridwan | Software Engineer",
    description:
      "Personal portfolio of Muhamad Ridwan — Software Engineer building products that people rely on. Healthcare systems, marketplaces, and scalable backends.",
    url: "https://portpolio-two-sable.vercel.app",
    email: "muhamad.ridwan@example.com",
    cvUrl: "/cv.pdf",
    keywords: [
      "Software Engineer",
      "Golang",
      "Laravel",
      "React Native",
      "Healthcare",
      "Backend",
      "Portfolio",
    ],
  },

  profile: {
    firstName: "Muhamad",
    lastName: "Ridwan",
    displayName: "Muhamad Ridwan",
    role: "Software Engineer",
    headline: "Building software that people actually use.",
    tagline: "From architecture to deployment — products that create real impact.",
    greeting: "",
    available: true,
    availabilityText: "Available for opportunities",
    codeSnippet: {
      fileName: "engineer.ts",
      variableName: "engineer",
      skills: ["Laravel", "Golang", "React Native", "Next.js"],
      buildLine: "build: () => deploy()",
    },
    socialLinks: [
      { id: "github", label: "GitHub", href: "https://github.com/Muhamad-Ridwan18", variant: "ghost" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/muhamadridwan", variant: "ghost" },
    ],
    ctas: [],
    rotatingPhrases: [],
    stats: [],
  },

  marquee: [],

  sections: [
    { id: "hero", enabled: true },
    { id: "impact", enabled: true, navLabel: "Impact" },
    { id: "journey", enabled: true, navLabel: "Journey" },
    { id: "projects", enabled: true, navLabel: "Work" },
    { id: "how-i-build", enabled: true, navLabel: "Process" },
    { id: "spotlight", enabled: true, navLabel: "Contact" },
    { id: "marquee", enabled: false },
    { id: "about", enabled: false },
    { id: "experience", enabled: false },
    { id: "tech-stack", enabled: false },
    { id: "skills", enabled: false },
    { id: "contact", enabled: false },
  ],

  launchImpact: {
    value: 100,
    suffix: "K+",
    label: "Users Impacted",
    domains: ["Healthcare", "Marketplace", "Mobile", "Cloud"],
  },

  journey: [
    {
      year: "2022",
      label: "Started writing software professionally.",
      description: "Started writing software professionally.",
    },
    {
      year: "2025",
      label: "Building healthcare systems.",
      description: "Building healthcare systems.",
    },
    {
      year: "2026",
      label: "Designing products from idea to deployment.",
      description: "Designing products from idea to deployment.",
    },
  ],

  process: [
    { step: 1, title: "Understand the problem." },
    { step: 2, title: "Design the architecture." },
    { step: 3, title: "Build scalable APIs." },
    { step: 4, title: "Deploy confidently." },
    { step: 5, title: "Improve continuously." },
  ],

  spotlight: {
    title: "Let's build something meaningful together.",
    subtitle: "",
    ctaLabel: "Email Me",
    ctaHref: "mailto:muhamad.ridwan@example.com",
  },

  about: {
    paragraphs: [],
    highlights: [],
  },

  experience: [],

  projects: [
    {
      id: "baytgo",
      name: "BaytGo",
      tagline: "Marketplace Muthowif",
      description:
        "A marketplace platform connecting pilgrims with certified muthowif guides — booking, escrow, wallet, and mobile-first experience.",
      year: "2025",
      stack: ["Go", "React Native", "PostgreSQL", "Redis", "Docker"],
      contributions: [],
      highlights: ["Booking", "Escrow", "Marketplace", "Wallet"],
      gradient: "from-blue-500/10 to-indigo-500/10",
      accent: "#2563EB",
      featured: true,
      useMockup: true,
    },
    {
      id: "jaksimpus",
      name: "JakSimpus",
      tagline: "Healthcare Information System",
      description:
        "Comprehensive healthcare information system for clinic operations, patient management, and medical records.",
      year: "2023",
      stack: ["Laravel", "MySQL", "Redis"],
      contributions: [],
      highlights: ["SATUSEHAT", "BPJS", "EMR", "Laboratory Integration"],
      gradient: "from-blue-500/10 to-slate-500/10",
      accent: "#2563EB",
      featured: true,
    },
    {
      id: "klikmedis",
      name: "KlikMedis",
      tagline: "Electronic Medical Record",
      description:
        "Electronic Medical Record with integrations to national healthcare platforms, insurance, and patient communication.",
      year: "2024",
      stack: ["Laravel", "MySQL", "Redis", "SATUSEHAT API"],
      contributions: [],
      highlights: ["National Integration", "BPJS", "WhatsApp", "EMR"],
      gradient: "from-blue-500/10 to-slate-500/10",
      accent: "#2563EB",
      featured: true,
    },
    {
      id: "webyouneed",
      name: "WebYouNeed",
      tagline: "Company Website",
      description: "Modern company website with full-stack capabilities.",
      year: "2024",
      stack: ["Laravel", "React", "MySQL", "Nginx"],
      contributions: ["Backend", "Frontend", "Deployment"],
      gradient: "from-blue-500/10 to-slate-500/10",
      accent: "#2563EB",
      featured: false,
    },
    {
      id: "daksa",
      name: "Daksa Consultant",
      tagline: "Company Profile",
      description: "Professional company profile with custom CMS.",
      year: "2023",
      stack: ["Laravel", "MySQL", "Nginx"],
      contributions: ["Full Stack Development", "Server Deployment"],
      gradient: "from-blue-500/10 to-slate-500/10",
      accent: "#2563EB",
      featured: false,
    },
  ],

  techStack: [],
  skills: [],

  impact: [
    { id: "users", label: "Users Impacted", value: 100, suffix: "K+" },
    { id: "enterprise", label: "Enterprise Systems", value: 3 },
    { id: "apis", label: "Backend APIs Built", value: 15 },
    { id: "deployments", label: "Production Deployments", value: 10 },
  ],

  contact: {
    cvNote: "",
    cvButtonLabel: "Download CV",
    channels: [
      { id: "email", label: "Email", icon: "email", description: "Send me a message" },
      { id: "linkedin", label: "LinkedIn", icon: "linkedin", description: "Connect professionally", external: true },
      { id: "github", label: "GitHub", icon: "github", description: "View my code", external: true },
    ],
  },

  footer: {
    brandSuffix: "",
    tagline: "Software Engineer",
    builtWith: ["Next.js", "Tailwind CSS", "Framer Motion"],
    madeBy: "Muhamad Ridwan",
  },

  social: {
    github: "https://github.com/Muhamad-Ridwan18",
    linkedin: "https://linkedin.com/in/muhamadridwan",
    instagram: "https://instagram.com/muhamadridwan",
  },
};
