"use client";

import { AnimatedCounter } from "@/components/ui";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { getPortfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function EngineeringImpact() {
  const { launchImpact } = getPortfolio();

  return (
    <section id="impact" className="chapter bg-background" aria-label="Impact">
      <div className="chapter-inner flex flex-col items-center justify-center text-center">
        <BlurReveal>
          <p className="font-heading text-[clamp(4rem,15vw,10rem)] font-semibold leading-none tracking-[-0.04em] text-text-primary">
            <AnimatedCounter
              id="launch-impact-counter"
              value={launchImpact.value}
              suffix={launchImpact.suffix}
            />
          </p>
          <p className="mt-4 text-lg text-text-secondary md:text-xl">
            {launchImpact.label}
          </p>
        </BlurReveal>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
        >
          {launchImpact.domains.map((domain) => (
            <motion.span
              key={domain}
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="font-heading text-xl font-medium text-text-primary md:text-2xl"
            >
              {domain}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
