"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary md:text-lg">
              Selected work spanning healthcare systems, marketplaces, and
              enterprise applications.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.05}>
              <article
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient} lg:[direction:ltr]`}
                >
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <span className="font-mono text-sm text-text-secondary">
                        {project.year}
                      </span>
                      <h3 className="mt-2 font-heading text-3xl font-bold text-text-primary">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-text-secondary">
                        {project.tagline}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="lg:[direction:ltr]">
                  <span className="font-mono text-sm text-primary">
                    {project.year}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-text-primary md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-secondary">{project.tagline}</p>
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-text-primary">
                      Contribution
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.contributions.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-text-primary">
                      Tech Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
