"use client";

import { TextReveal } from "@/components/ui/text-reveal";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { getPortfolio } from "@/lib/portfolio";

export function Spotlight() {
  const { spotlight, site, social } = getPortfolio();

  const actions = [
    {
      id: "email",
      label: "Email",
      href: `mailto:${site.email}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: social.linkedin,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      href: social.github,
      external: true,
    },
    {
      id: "cv",
      label: "Download CV",
      href: site.cvUrl,
      download: true,
    },
  ];

  return (
    <section id="spotlight" className="chapter bg-background" aria-label="Contact">
      <div className="chapter-inner flex flex-col items-center justify-center text-center">
        <TextReveal
          text={spotlight.title}
          as="h2"
          className="max-w-3xl font-heading text-3xl font-semibold tracking-[-0.02em] text-text-primary md:text-4xl lg:text-5xl"
        />

        <BlurReveal delay={0.35} className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {actions.map((action, i) => (
            <a
              key={action.id}
              href={action.href}
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(action.download ? { download: true } : {})}
              className={`inline-flex min-w-[140px] items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                i === 0
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border border-border text-text-primary hover:border-border-hover hover:bg-surface"
              }`}
            >
              {action.label}
            </a>
          ))}
        </BlurReveal>
      </div>
    </section>
  );
}
