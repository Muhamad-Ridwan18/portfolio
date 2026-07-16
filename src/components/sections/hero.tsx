"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { getPortfolio } from "@/lib/portfolio";

export function Hero() {
  const { profile } = getPortfolio();

  return (
    <section className="chapter bg-background" aria-label="Hero">
      <div className="chapter-inner flex flex-col items-center justify-center text-center">
        <TextReveal
          text={profile.headline}
          className="max-w-4xl font-heading text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <BlurReveal delay={0.4} className="mt-10 space-y-1">
          <p className="font-heading text-lg font-medium text-text-primary md:text-xl">
            {profile.displayName}
          </p>
          <p className="text-base text-text-secondary md:text-lg">{profile.role}</p>
        </BlurReveal>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-text-muted/40"
        />
      </motion.div>
    </section>
  );
}
