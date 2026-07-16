"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  getFeaturedProjects,
  getSecondaryProjects,
  getSectionConfig,
} from "@/lib/portfolio";

export function Projects() {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();
  const section = getSectionConfig("projects");
  const heading = section?.heading;

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="section-container">
        {heading && (
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-medium text-primary">{heading.label}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {heading.title}
            </h2>
            {heading.subtitle && (
              <p className="mt-3 max-w-xl text-text-secondary">{heading.subtitle}</p>
            )}
          </div>
        )}

        <div className="space-y-8">
          {featured.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-border bg-surface-muted"
            >
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                  <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                    Featured
                  </p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.caseStudyHref && (
                    <Link
                      href={project.caseStudyHref}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
                    >
                      View Case Study
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>

                <div className="relative min-h-[280px] bg-[#e8ebe9] md:min-h-[360px]">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} product mockup`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  )}
                </div>
              </div>
            </motion.article>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {secondary.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative aspect-[16/10] bg-surface-muted">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} mockup`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-bold text-ink">{project.name}</h3>
                  <p className="mt-1 text-sm text-primary">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
