"use client";

import { motion } from "framer-motion";
import { ArrowIcon, MagneticButton } from "@/components/ui";
import { MobileCodeCard } from "@/components/sections/mobile-code-card";
import { buildCodeLines, getPortfolio } from "@/lib/portfolio";
import { FadeUp } from "@/lib/animations";

function CodeVisual() {
  const { profile } = getPortfolio();
  const lines = buildCodeLines();

  return (
    <div className="relative">
      <div className="code-window relative overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-xs text-slate-400">
            {profile.codeSnippet.fileName}
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          {lines.map((line, i) => (
            <motion.div
              key={`${line.content}-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.35 }}
              className="flex"
            >
              <span className="mr-4 w-5 shrink-0 text-right text-slate-600 select-none">
                {i + 1}
              </span>
              <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                <span className={line.color}>{line.content}</span>
                {i === lines.length - 1 && (
                  <span className="ml-0.5 inline-block h-4 w-2 bg-secondary cursor-blink" />
                )}
              </span>
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function SocialIcon({ id }: { id: string }) {
  if (id === "github") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  }

  if (id === "linkedin") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return null;
}

export function Hero() {
  const { profile } = getPortfolio();
  const primaryCtas = profile.ctas.filter((cta) => cta.variant !== "ghost");
  const firstName = profile.firstName;
  const lastName = profile.lastName ?? profile.displayName;

  return (
    <section
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background"
      aria-label="Hero"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="section-container relative z-10 py-16 pt-[5.5rem] sm:py-20 sm:pt-28 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="mb-4 font-mono text-sm font-medium text-primary">
                {profile.role}
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="font-heading text-[2.65rem] font-bold leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                {firstName}{" "}
                <span className="text-primary">{lastName}</span>
              </h1>
            </FadeUp>

            {profile.focusAreas && (
              <FadeUp delay={0.14}>
                <p className="mt-4 font-heading text-lg font-medium text-text-secondary sm:text-xl md:text-2xl">
                  {profile.focusAreas}
                </p>
              </FadeUp>
            )}

            <FadeUp delay={0.2}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                {profile.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                {primaryCtas.map((cta) => (
                  <MagneticButton
                    key={cta.id}
                    href={cta.href}
                    variant={cta.variant}
                    external={cta.external}
                    download={cta.download}
                    icon={cta.showArrow ? <ArrowIcon /> : undefined}
                    className="w-full justify-center sm:w-auto"
                  >
                    {cta.label}
                  </MagneticButton>
                ))}
              </div>
            </FadeUp>

            {profile.socialLinks.length > 0 && (
              <FadeUp delay={0.32}>
                <div className="mt-6 flex items-center gap-3">
                  {profile.socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition-all hover:border-primary/30 hover:text-primary"
                      aria-label={link.label}
                    >
                      <SocialIcon id={link.id} />
                    </a>
                  ))}
                </div>
              </FadeUp>
            )}

            <MobileCodeCard />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <CodeVisual />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[18px] rounded-full border border-border p-1"
        >
          <div className="mx-auto h-1 w-1 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
