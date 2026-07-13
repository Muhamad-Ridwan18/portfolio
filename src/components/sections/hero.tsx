"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/lib/animations";

function CodeVisual() {
  const lines = [
    { indent: 0, content: "const engineer = {", color: "text-secondary" },
    { indent: 1, content: 'name: "Ridwan",', color: "text-text-primary" },
    { indent: 1, content: 'role: "Senior Software Engineer",', color: "text-text-primary" },
    { indent: 1, content: "skills: [", color: "text-text-primary" },
    { indent: 2, content: '"Laravel", "Golang",', color: "text-success" },
    { indent: 2, content: '"React Native", "Next.js"', color: "text-success" },
    { indent: 1, content: "],", color: "text-text-primary" },
    { indent: 1, content: "build: () => deploy()", color: "text-primary" },
    { indent: 0, content: "};", color: "text-secondary" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 glow-primary">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-text-secondary">
            portfolio.ts
          </span>
        </div>
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
            >
              <span className="text-text-secondary/50 select-none">
                {String(i + 1).padStart(2, " ")}
              </span>
              <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                <span className={line.color}>{line.content}</span>
              </span>
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <motion.div
        className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        style={{ x: parallaxX, y: parallaxY }}
      />

      <div className="section-container relative z-10 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeUp>
              <p className="mb-4 font-mono text-sm text-secondary">Hello,</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-heading text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                I&apos;m{" "}
                <span className="gradient-text">Ridwan</span>
                <span className="text-primary">.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-4 font-heading text-xl text-text-secondary md:text-2xl">
                Senior Software Engineer
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
                Building reliable software,
                <br />
                from backend architecture
                <br />
                to production deployment.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="#projects" variant="primary">
                  View Projects
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.cvUrl}
                  variant="secondary"
                  download
                >
                  Download CV
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.github}
                  variant="ghost"
                  external
                >
                  GitHub
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.linkedin}
                  variant="ghost"
                  external
                >
                  LinkedIn
                </MagneticButton>
              </div>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: parallaxX, y: parallaxY }}
            className="hidden lg:block"
          >
            <CodeVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
