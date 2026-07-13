"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { experience } from "@/data/experience";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <AnimatedSection
      id="experience"
      className="section-padding bg-surface/30"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey in software engineering."
          />
        </FadeUp>

        <div className="relative mx-auto max-w-2xl">
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <div className="relative mb-12 last:mb-0">
                <div className="absolute left-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                <button
                  type="button"
                  className={`ml-16 w-full rounded-xl border p-6 text-left transition-all md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  } ${
                    activeId === item.id
                      ? "border-primary/50 bg-surface glow-primary"
                      : "border-border bg-surface/50 hover:border-primary/30"
                  }`}
                  onClick={() =>
                    setActiveId(activeId === item.id ? null : item.id)
                  }
                  aria-expanded={activeId === item.id}
                >
                  <span className="font-mono text-sm text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {item.company}
                  </p>

                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                          {item.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-sm text-text-secondary"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
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
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
