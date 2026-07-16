import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  site: {
    name: "Muhamad Ridwan",
    title: "Muhamad Ridwan | Software Engineer",
    description:
      "Software Engineer specializing in building web and mobile applications for healthcare and pilgrimage industries.",
    url: "https://portpolio-two-sable.vercel.app",
    email: "muhamad.ridwan@example.com",
    cvUrl: "/cv.pdf",
    keywords: [
      "Software Engineer",
      "Laravel",
      "React Native",
      "Healthcare",
      "BaytGo",
      "Portfolio",
    ],
  },

  profile: {
    firstName: "Muhamad",
    lastName: "Ridwan",
    displayName: "Muhamad Ridwan",
    shortName: "Ridwan",
    role: "Software Engineer",
    greeting: "Hi, I'm Ridwan.",
    headline: "I build scalable software that",
    headlineAccent: "solves",
    tagline:
      "Software Engineer specializing in building web and mobile applications for healthcare and pilgrimage industries.",
    portrait: "/images/portrait.png",
    available: true,
    availabilityText: "Available for opportunities",
    socialLinks: [
      { id: "github", label: "GitHub", href: "https://github.com/Muhamad-Ridwan18" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/muhamadridwan" },
    ],
    ctas: [
      {
        id: "work",
        label: "View My Work",
        href: "#projects",
        variant: "dark",
        showArrow: true,
      },
      {
        id: "cv",
        label: "Download CV",
        href: "/cv.pdf",
        variant: "ghost",
        download: true,
      },
    ],
  },

  sections: [
    { id: "hero", enabled: true },
    { id: "tech-logos", enabled: true },
    {
      id: "projects",
      enabled: true,
      navLabel: "Work",
      heading: {
        label: "Portfolio",
        title: "Selected Work",
        subtitle: "Products shipped for healthcare, pilgrimage, and enterprise teams.",
      },
    },
    {
      id: "about",
      enabled: true,
      navLabel: "About",
      heading: {
        label: "About",
        title: "Building products people rely on",
        subtitle:
          "From backend architecture to mobile delivery — focused on systems that create real impact.",
      },
    },
    {
      id: "experience",
      enabled: true,
      navLabel: "Experience",
      heading: {
        label: "Career",
        title: "Experience",
        subtitle: "Roles where I designed, built, and shipped production software.",
      },
    },
    {
      id: "writing",
      enabled: true,
      navLabel: "Writing",
      heading: {
        label: "Notes",
        title: "Writing",
        subtitle: "Thoughts on architecture, delivery, and building reliable systems.",
      },
    },
    {
      id: "contact",
      enabled: true,
      navLabel: "Contact",
    },
    { id: "marquee", enabled: false },
    { id: "tech-stack", enabled: false },
    { id: "skills", enabled: false },
    { id: "impact", enabled: false },
    { id: "journey", enabled: false },
    { id: "how-i-build", enabled: false },
    { id: "spotlight", enabled: false },
  ],

  techLogos: [
    { name: "Laravel", icon: "laravel" },
    { name: "React", icon: "react" },
    { name: "React Native", icon: "react-native" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
    { name: "AWS", icon: "aws" },
    { name: "Linux", icon: "linux" },
    { name: "Nginx", icon: "nginx" },
  ],

  about: {
    paragraphs: [
      "Saya Software Engineer yang fokus membangun aplikasi web, mobile, dan backend yang scalable — terutama di domain healthcare dan pilgrimage.",
      "Saya senang merancang arsitektur, menulis API yang andal, dan mengantar produk sampai production dengan standar yang rapi.",
    ],
    highlights: [
      { label: "Focus", value: "Backend & Mobile" },
      { label: "Domain", value: "Healthcare & Umrah" },
      { label: "Approach", value: "Idea → Deploy" },
    ],
  },

  experience: [
    {
      id: "baytgo",
      year: "2025 — Present",
      title: "Founder & Full Stack Engineer",
      company: "BaytGo",
      description:
        "Building a marketplace connecting Umrah pilgrims with certified muthowif guides — booking, escrow, wallet, and mobile apps.",
      highlights: [
        "Backend with Golang & Laravel",
        "React Native mobile apps",
        "Escrow & payment flows",
        "Production deployment on Docker",
      ],
      defaultOpen: true,
    },
    {
      id: "healthcare",
      year: "2023 — 2025",
      title: "Software Engineer",
      company: "Healthcare Tech",
      description:
        "Developed healthcare information systems and EMR platforms with national integrations including SATUSEHAT and BPJS.",
      highlights: [
        "Laravel backend & APIs",
        "SATUSEHAT & BPJS integration",
        "EMR and laboratory modules",
        "Production monitoring",
      ],
    },
    {
      id: "freelance",
      year: "2022 — 2023",
      title: "Freelance Developer",
      company: "Various Clients",
      description:
        "Delivered company websites, CMS platforms, and custom web applications for startups and consultants.",
      highlights: [
        "Full-stack Laravel & React",
        "Server deployment with Nginx",
        "Client communication & delivery",
      ],
    },
  ],

  projects: [
    {
      id: "baytgo",
      name: "BaytGo",
      tagline: "Marketplace Muthowif",
      description:
        "A marketplace platform connecting pilgrims with certified muthowif guides — featuring booking, escrow, wallet, and mobile-first experience.",
      year: "2025",
      stack: ["React Native", "Laravel", "PostgreSQL"],
      contributions: [],
      highlights: ["Booking", "Escrow", "Marketplace", "Wallet"],
      accent: "#164E33",
      featured: true,
      coverImage: "/images/projects/baytgo-hero.png",
      deviceType: "phones",
      caseStudyHref: "/work/baytgo",
      stats: [
        { value: "100K+", label: "Users" },
        { value: "15K+", label: "Bookings" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "24/7", label: "System Uptime" },
      ],
      about:
        "BaytGo helps Umrah pilgrims find and book trusted muthowif guides with transparent pricing, secure escrow payments, and real-time coordination — built as a full marketplace with mobile apps and a robust backend.",
      howItWorks: [
        {
          step: "01",
          title: "Cari Muthowif",
          description: "Browse certified guides by location, rating, and service type.",
        },
        {
          step: "02",
          title: "Pilih Layanan",
          description: "Compare packages and choose the right pilgrimage support.",
        },
        {
          step: "03",
          title: "Booking & Bayar",
          description: "Secure booking with escrow so funds stay protected.",
        },
        {
          step: "04",
          title: "Dikonfirmasi",
          description: "Guide confirms and both parties stay aligned in-app.",
        },
        {
          step: "05",
          title: "Perjalanan",
          description: "Coordinate the journey with wallet and support tools.",
        },
      ],
      caseHighlights: [
        "End-to-end marketplace for Umrah muthowif services",
        "Escrow-based payment and wallet system",
        "React Native apps for pilgrims and guides",
        "Scalable API architecture with PostgreSQL & Redis",
        "Dockerized production deployment",
        "Real-time booking confirmation flows",
      ],
      images: [
        {
          id: "phone-1",
          src: "/images/projects/baytgo-phone-1.png",
          alt: "BaytGo home screen",
          caption: "Marketplace home",
        },
        {
          id: "phone-2",
          src: "/images/projects/baytgo-phone-2.png",
          alt: "BaytGo booking screen",
          caption: "Booking & wallet",
        },
      ],
    },
    {
      id: "jaksimpus",
      name: "JakSimpus",
      tagline: "Healthcare Information System",
      description:
        "Clinic operations platform covering patient management, medical records, and laboratory workflows.",
      year: "2023",
      stack: ["Laravel", "MySQL", "Redis"],
      contributions: [],
      highlights: ["SATUSEHAT", "BPJS", "EMR", "Laboratory"],
      accent: "#164E33",
      featured: false,
      coverImage: "/images/projects/jaksimpus-laptop.png",
      deviceType: "laptop",
    },
    {
      id: "klikmedis",
      name: "KlikMedis",
      tagline: "Electronic Medical Record",
      description:
        "EMR system with national healthcare integrations, insurance, and patient communication channels.",
      year: "2024",
      stack: ["Laravel", "MySQL", "SATUSEHAT"],
      contributions: [],
      highlights: ["National Integration", "BPJS", "WhatsApp", "EMR"],
      accent: "#164E33",
      featured: false,
      coverImage: "/images/projects/klikmedis-tablet.png",
      deviceType: "tablet",
    },
  ],

  writing: [
    {
      id: "clean-architecture-laravel",
      title: "Clean Architecture in Laravel",
      excerpt:
        "How to structure Laravel apps for long-term maintainability without over-engineering.",
      date: "Mar 2025",
      readTime: "6 min read",
    },
    {
      id: "building-escrow-flows",
      title: "Building Escrow Flows for Marketplaces",
      excerpt:
        "Lessons from designing secure booking and payment flows for BaytGo.",
      date: "Jan 2025",
      readTime: "8 min read",
    },
  ],

  contact: {
    cvNote: "",
    cvButtonLabel: "Download CV",
    channels: [
      { id: "email", label: "Email", icon: "email", description: "Send a message" },
      {
        id: "calendar",
        label: "Schedule a Call",
        icon: "calendar",
        description: "Book a conversation",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        icon: "linkedin",
        description: "Connect professionally",
        external: true,
      },
    ],
  },

  footer: {
    brandSuffix: "",
    tagline: "Software Engineer",
    builtWith: ["Next.js", "Tailwind CSS", "Framer Motion"],
    madeBy: "Muhamad Ridwan",
    ctaTitle: "Let's build something great together.",
    ctaSubtitle: "Open for exciting projects and impactful collaborations.",
  },

  social: {
    github: "https://github.com/Muhamad-Ridwan18",
    linkedin: "https://linkedin.com/in/muhamadridwan",
    instagram: "https://instagram.com/muhamadridwan",
  },
};
