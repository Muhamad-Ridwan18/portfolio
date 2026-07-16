"use client";

import { BlurReveal } from "@/components/ui/blur-reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { getPortfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function Journey() {
  const { journey } = getPortfolio();

  return (
    <section id="journey" className="chapter bg-background" aria-label="Journey">
      <div className="chapter-inner">
        <TextReveal
          text="The journey so far."
          as="h2"
          className="mb-16 font-heading text-3xl font-semibold tracking-[-0.02em] text-text-primary md:text-4xl"
        />

        <div className="mx-auto max-w-2xl space-y-0">
          {journey.map((step, index) => (
            <BlurReveal key={step.year} delay={index * 0.1}>
              <div className="group relative flex gap-8 border-t border-border py-10 first:border-t-0 first:pt-0">
                <span className="w-16 shrink-0 font-heading text-lg font-medium text-text-muted md:w-20 md:text-xl">
                  {step.year}
                </span>
                <div className="flex-1">
                  <motion.p
                    className="font-heading text-xl font-medium text-text-primary md:text-2xl"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
