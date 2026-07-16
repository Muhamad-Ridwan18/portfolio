import { getPortfolio, getSectionConfig } from "@/lib/portfolio";

export function About() {
  const { about } = getPortfolio();
  const section = getSectionConfig("about");
  const heading = section?.heading;

  return (
    <section id="about" className="section-padding bg-surface-muted">
      <div className="section-container">
        {heading && (
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="mb-3 text-sm font-medium text-primary">{heading.label}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {heading.title}
            </h2>
            {heading.subtitle && (
              <p className="mt-3 text-text-secondary">{heading.subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-base leading-relaxed text-text-secondary md:text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-white p-5"
              >
                <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
