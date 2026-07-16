"use client";

import { motion } from "framer-motion";
import { getPortfolio } from "@/lib/portfolio";

export function Spotlight() {
  const { spotlight, site, social } = getPortfolio();

  const actions = [
    {
      id: "email",
      label: "Email",
      href: `mailto:${site.email}`,
      variant: "primary" as const,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: social.linkedin,
      variant: "outline" as const,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      href: social.github,
      variant: "outline" as const,
      external: true,
    },
    {
      id: "cv",
      label: "Download CV",
      href: site.cvUrl,
      variant: "light" as const,
      download: true,
    },
  ];

  return (
    <section id="spotlight" className="relative bg-[#0b1220] py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {spotlight.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-400">
            {spotlight.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action) => {
              const className =
                action.variant === "primary"
                  ? "bg-primary text-white hover:bg-primary/90"
                  : action.variant === "light"
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5";

              return (
                <a
                  key={action.id}
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(action.download ? { download: true } : {})}
                  className={`inline-flex min-w-[140px] items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${className}`}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
