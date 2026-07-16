import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectById, getPortfolio } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { projects } = getPortfolio();
  return projects
    .filter((p) => p.caseStudyHref)
    .map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return { title: "Case Study" };
  return {
    title: `${project.name} Case Study | Muhamad Ridwan`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project || !project.caseStudyHref) notFound();

  return (
    <article className="bg-white pt-24 pb-0">
      <div className="section-container pb-12 md:pb-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-ink"
        >
          ← Back to Work
        </Link>

        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-muted">
          {project.coverImage && (
            <Image
              src={project.coverImage}
              alt={`${project.name} product showcase`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          )}
        </div>
      </div>

      {project.stats && (
        <div className="section-container mt-12 md:mt-16">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface-muted px-6 py-8 md:grid-cols-4 md:px-10">
            {project.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-ink md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-text-muted md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.about && (
        <div className="section-container mt-16 grid gap-10 md:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink">About {project.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {project.about}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {project.images?.slice(0, 2).map((img) => (
              <div
                key={img.id}
                className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.howItWorks && (
        <div className="section-container mt-16 md:mt-20">
          <h2 className="text-2xl font-bold text-ink">How It Works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {project.howItWorks.map((step) => (
              <div key={step.step} className="rounded-xl border border-border p-5">
                <p className="text-sm font-bold text-primary">{step.step}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="section-container mt-16 grid gap-10 pb-20 md:mt-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-ink">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {[...project.stack, "Redis", "Docker", "TypeScript"].map((tech) => (
              <span key={tech} className="tag px-3 py-1.5">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.caseHighlights && (
          <div>
            <h2 className="text-2xl font-bold text-ink">Project Highlights</h2>
            <ul className="mt-6 space-y-3">
              {project.caseHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary md:text-base">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className="bg-primary text-white">
        <div className="section-container py-14 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Interested in working together?
          </h2>
          <Link
            href="/#contact"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </article>
  );
}
