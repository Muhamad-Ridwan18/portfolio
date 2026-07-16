import { getPortfolio, getSectionConfig } from "@/lib/portfolio";

export function Writing() {
  const { writing } = getPortfolio();
  const section = getSectionConfig("writing");
  const heading = section?.heading;

  return (
    <section id="writing" className="section-padding bg-surface-muted">
      <div className="section-container">
        {heading && (
          <div className="mb-12 md:mb-14">
            <p className="mb-3 text-sm font-medium text-primary">{heading.label}</p>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {heading.title}
            </h2>
            {heading.subtitle && (
              <p className="mt-3 max-w-xl text-text-secondary">{heading.subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {writing.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md md:p-7"
            >
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-ink">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {post.excerpt}
              </p>
              <p className="mt-5 text-sm font-semibold text-primary">Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
