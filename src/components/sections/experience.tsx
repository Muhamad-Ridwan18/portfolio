"use client";

import { motion } from "framer-motion";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";

export function Experience() {
  const { experience } = getPortfolio();
  const section = getSectionConfig("experience");
  const heading = section?.heading;

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="section-container">
        {heading && (
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-medium text-primary">{heading.label}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {heading.title}
            </h2>
            {heading.subtitle && (
              <p className="mt-3 max-w-xl text-text-secondary">{heading.subtitle}</p>
            )}
          </div>
        )}

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[7px]"
            aria-hidden="true"
          />

          <ul className="space-y-10">
            {experience.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative pl-10"
              >
                <span className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-[3px] border-primary bg-white" />
                <p className="text-sm font-medium text-primary">{item.year}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-0.5 text-sm text-text-secondary">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
