"use client";

import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { getPortfolio } from "@/lib/portfolio";
import { motion } from "framer-motion";

export function Projects() {
  const { projects } = getPortfolio();
  const featured = projects.filter((p) => p.featured);

  return (
    <div id="projects" aria-label="Selected Work">
      {featured.map((project, index) => {
        const mockupImage =
          project.images?.find((img) => img.id === "mobile") ??
          project.images?.[0];
        const reversed = index % 2 === 1;

        return (
          <section
            key={project.id}
            className="chapter bg-background"
            aria-label={project.name}
          >
            <div className="chapter-inner">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <BlurReveal>
                    <p className="mb-4 text-sm text-text-muted">{project.tagline}</p>
                  </BlurReveal>

                  <TextReveal
                    text={project.name}
                    as="h2"
                    delay={0.1}
                    className="font-heading text-4xl font-semibold tracking-[-0.03em] text-text-primary md:text-5xl lg:text-6xl"
                  />

                  <BlurReveal delay={0.3}>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                      {project.description}
                    </p>
                  </BlurReveal>

                  {project.highlights && project.highlights.length > 0 && (
                    <BlurReveal delay={0.4}>
                      <ul className="mt-8 space-y-2">
                        {project.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-text-secondary md:text-base"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </BlurReveal>
                  )}

                  <BlurReveal delay={0.5}>
                    <div className="mt-10 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3.5 py-1.5 text-xs text-text-secondary md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </BlurReveal>
                </div>

                <motion.div
                  className="flex justify-center lg:[direction:ltr]"
                  initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.useMockup && mockupImage ? (
                    <IPhoneMockup src={mockupImage.src} alt={mockupImage.alt} />
                  ) : mockupImage ? (
                    <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/5">
                      <Image
                        src={mockupImage.src}
                        alt={mockupImage.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 512px"
                      />
                    </div>
                  ) : null}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
