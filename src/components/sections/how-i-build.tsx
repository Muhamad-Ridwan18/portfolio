"use client";

import { BlurReveal } from "@/components/ui/blur-reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { getPortfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function HowIBuild() {
  const { process } = getPortfolio();

  return (
    <section id="how-i-build" className="chapter bg-background" aria-label="How I Build">
      <div className="chapter-inner">
        <TextReveal
          text="How I build."
          as="h2"
          className="mb-16 font-heading text-3xl font-semibold tracking-[-0.02em] text-text-primary md:text-4xl"
        />

        <div className="mx-auto max-w-2xl space-y-0">
          {process.map((item, index) => (
            <BlurReveal key={item.step} delay={index * 0.08}>
              <motion.div
                className="group flex items-baseline gap-6 border-t border-border py-8 first:border-t-0 first:pt-0 md:gap-10 md:py-10"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-heading text-sm font-medium text-text-muted md:text-base">
                  {String(item.step).padStart(2, "0")}
                </span>
                <p className="font-heading text-xl font-medium text-text-primary md:text-2xl lg:text-3xl">
                  {item.title}
                </p>
              </motion.div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
