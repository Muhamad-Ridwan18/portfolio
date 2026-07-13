import fs from "fs";
import path from "path";

const projects = {
  jaksimpus: {
    accent: "#4F46E5",
    screens: {
      dashboard: { title: "Patient Dashboard", subtitle: "Real-time clinic overview", layout: "dashboard" },
      records: { title: "Medical Records", subtitle: "Patient history & diagnosis", layout: "table" },
      analytics: { title: "Analytics", subtitle: "Healthcare insights", layout: "chart" },
    },
  },
  klikmedis: {
    accent: "#06B6D4",
    screens: {
      emr: { title: "EMR System", subtitle: "Electronic medical records", layout: "dashboard" },
      integration: { title: "SATUSEHAT", subtitle: "API integration panel", layout: "api" },
      patient: { title: "Patient Portal", subtitle: "Appointment scheduling", layout: "cards" },
    },
  },
  baytgo: {
    accent: "#8B5CF6",
    screens: {
      marketplace: { title: "BaytGo", subtitle: "Muthowif marketplace", layout: "cards" },
      mobile: { title: "Mobile App", subtitle: "React Native UI", layout: "mobile" },
      booking: { title: "Booking", subtitle: "Pilgrim reservation flow", layout: "form" },
    },
  },
  webyouneed: {
    accent: "#3B82F6",
    screens: {
      homepage: { title: "WebYouNeed", subtitle: "Company homepage", layout: "hero" },
      services: { title: "Services", subtitle: "What we offer", layout: "cards" },
      cms: { title: "Admin CMS", subtitle: "Content management", layout: "table" },
    },
  },
  daksa: {
    accent: "#10B981",
    screens: {
      profile: { title: "Daksa Consultant", subtitle: "Company profile", layout: "hero" },
      team: { title: "Our Team", subtitle: "Expert consultants", layout: "cards" },
      contact: { title: "Contact Us", subtitle: "Get in touch", layout: "form" },
    },
  },
};

function bodyFor(layout, accent) {
  const layouts = {
    mobile: `
      <rect x="430" y="60" width="340" height="620" rx="36" fill="#09090b" stroke="rgba(255,255,255,0.08)"/>
      <rect x="450" y="100" width="300" height="56" rx="12" fill="${accent}" opacity="0.2"/>
      <rect x="450" y="180" width="300" height="100" rx="12" fill="#27272a"/>
      <rect x="450" y="300" width="140" height="120" rx="12" fill="#27272a"/>
      <rect x="610" y="300" width="140" height="120" rx="12" fill="#27272a"/>
      <rect x="450" y="540" width="300" height="48" rx="24" fill="${accent}" opacity="0.8"/>`,
    chart: `
      <rect x="40" y="80" width="200" height="600" rx="16" fill="#27272a"/>
      <rect x="280" y="80" width="860" height="200" rx="16" fill="#27272a"/>
      <rect x="280" y="310" width="420" height="370" rx="16" fill="#27272a"/>
      <polyline points="320,420 380,360 440,390 500,300 560,320 620,250" fill="none" stroke="${accent}" stroke-width="4"/>
      <rect x="320" y="500" width="40" height="140" rx="4" fill="${accent}" opacity="0.6"/>
      <rect x="380" y="460" width="40" height="180" rx="4" fill="${accent}" opacity="0.4"/>`,
    api: `
      <rect x="40" y="80" width="240" height="600" rx="16" fill="#27272a"/>
      <rect x="300" y="80" width="840" height="600" rx="16" fill="#27272a"/>
      <rect x="330" y="120" width="780" height="48" rx="8" fill="#09090b"/>
      <text x="350" y="150" fill="#10B981" font-family="monospace" font-size="14">POST /api/satusehat/patient</text>
      <rect x="330" y="190" width="780" height="200" rx="8" fill="#09090b"/>
      <rect x="330" y="410" width="200" height="40" rx="8" fill="${accent}" opacity="0.7"/>`,
    form: `
      <rect x="280" y="120" width="640" height="520" rx="20" fill="#27272a"/>
      <rect x="320" y="200" width="560" height="48" rx="10" fill="#09090b"/>
      <rect x="320" y="270" width="560" height="48" rx="10" fill="#09090b"/>
      <rect x="320" y="340" width="560" height="120" rx="10" fill="#09090b"/>
      <rect x="320" y="490" width="200" height="48" rx="24" fill="${accent}" opacity="0.85"/>`,
    hero: `
      <rect x="0" y="80" width="1200" height="400" fill="${accent}" opacity="0.15"/>
      <rect x="80" y="200" width="400" height="24" rx="4" fill="#fafafa" opacity="0.9"/>
      <rect x="80" y="250" width="300" height="16" rx="4" fill="#a1a1aa"/>
      <rect x="80" y="290" width="160" height="44" rx="22" fill="${accent}" opacity="0.9"/>
      <rect x="80" y="520" width="340" height="140" rx="16" fill="#27272a"/>
      <rect x="450" y="520" width="340" height="140" rx="16" fill="#27272a"/>
      <rect x="820" y="520" width="300" height="140" rx="16" fill="#27272a"/>`,
    table: `
      <rect x="40" y="80" width="200" height="600" rx="16" fill="#27272a"/>
      <rect x="280" y="80" width="860" height="600" rx="16" fill="#27272a"/>
      <rect x="310" y="180" width="800" height="48" rx="6" fill="#1f1f23"/>
      <rect x="310" y="240" width="800" height="48" rx="6" fill="#27272a"/>
      <rect x="310" y="300" width="800" height="48" rx="6" fill="#1f1f23"/>
      <rect x="310" y="360" width="800" height="48" rx="6" fill="#27272a"/>`,
    cards: `
      <rect x="40" y="80" width="200" height="600" rx="16" fill="#27272a"/>
      <rect x="280" y="120" width="260" height="200" rx="16" fill="#27272a"/>
      <rect x="560" y="120" width="260" height="200" rx="16" fill="#27272a"/>
      <rect x="840" y="120" width="260" height="200" rx="16" fill="#27272a"/>
      <rect x="300" y="150" width="80" height="80" rx="40" fill="${accent}" opacity="0.3"/>`,
    dashboard: `
      <rect x="40" y="80" width="200" height="600" rx="16" fill="#27272a"/>
      <rect x="280" y="80" width="200" height="120" rx="16" fill="#27272a"/>
      <rect x="500" y="80" width="200" height="120" rx="16" fill="#27272a"/>
      <rect x="720" y="80" width="420" height="120" rx="16" fill="#27272a"/>
      <rect x="280" y="230" width="560" height="450" rx="16" fill="#27272a"/>
      <rect x="860" y="230" width="280" height="450" rx="16" fill="#27272a"/>
      <rect x="310" y="280" width="500" height="12" rx="4" fill="${accent}" opacity="0.5"/>`,
  };

  return layouts[layout] ?? layouts.dashboard;
}

function svg(projectId, id, accent, screen) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <rect width="1200" height="750" fill="#18181b"/>
  <rect width="1200" height="56" fill="#09090b"/>
  <circle cx="28" cy="28" r="6" fill="#ef4444" opacity="0.8"/>
  <circle cx="52" cy="28" r="6" fill="#eab308" opacity="0.8"/>
  <circle cx="76" cy="28" r="6" fill="#22c55e" opacity="0.8"/>
  <text x="100" y="34" fill="#71717a" font-family="monospace" font-size="13">${projectId}/${id}.tsx</text>
  <text x="80" y="110" fill="#fafafa" font-family="sans-serif" font-size="28" font-weight="bold">${screen.title}</text>
  <text x="80" y="140" fill="#a1a1aa" font-family="sans-serif" font-size="16">${screen.subtitle}</text>
  ${bodyFor(screen.layout, accent)}
</svg>`;
}

for (const [projectId, cfg] of Object.entries(projects)) {
  const dir = path.join("public", "projects", projectId);
  fs.mkdirSync(dir, { recursive: true });
  for (const [id, screen] of Object.entries(cfg.screens)) {
    fs.writeFileSync(path.join(dir, `${id}.svg`), svg(projectId, id, cfg.accent, screen));
  }
}

console.log("Generated project screenshots");
