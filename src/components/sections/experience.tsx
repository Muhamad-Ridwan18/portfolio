"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import {
  getDefaultExperienceId,
  getPortfolio,
  getSectionConfig,
  getSectionNumber,
} from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Experience() {
  const { experience } = getPortfolio();
  const section = getSectionConfig("experience");
  const heading = section?.heading;
  const [activeId, setActiveId] = useState<string | null>(
    getDefaultExperienceId()
  );

  return (
    <AnimatedSection
      id="experience"
      className={section?.className ?? "section-padding section-glow"}
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              number={getSectionNumber("experience")}
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <div className="relative mx-auto max-w-2xl">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-primary via-primary/30 to-transparent"
            aria-hidden="true"
          />

          {experience.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <FadeUp key={item.id} delay={index * 0.08}>
                <div className="relative mb-8 last:mb-0 pl-10">
                  <div
                    className={`absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary"
                        : "border-primary/40 bg-white"
                    }`}
                  />

                  <button
                    type="button"
                    className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                      isActive
                        ? "glass-card border-primary/25 shadow-sm"
                        : "border-border bg-white hover:border-primary/20 hover:shadow-sm"
                    }`}
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-medium text-primary sm:text-sm">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-heading text-base font-semibold text-text-primary sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-text-secondary">
                          {item.company}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        className="mt-1 text-text-muted"
                      >
                        ▾
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                            {item.description}
                          </p>
                          <ul className="mt-4 space-y-2.5">
                            {item.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-3 text-sm text-text-secondary"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
