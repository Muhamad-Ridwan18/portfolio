"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";
import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function TechStack() {
  return (
    <AnimatedSection
      id="tech-stack"
      className="section-padding bg-surface/30"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with to build reliable software."
          />
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, items], catIndex) => (
            <FadeUp key={category} delay={catIndex * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="font-heading text-sm font-semibold tracking-wider text-primary uppercase">
                  {category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.08 + i * 0.05 }}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-text-secondary transition-colors hover:border-primary/30 hover:text-text-primary"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
