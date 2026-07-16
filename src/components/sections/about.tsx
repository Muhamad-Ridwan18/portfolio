import { CardSpotlight } from "@/components/ui/card-spotlight";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

function StatIcon({ icon }: { icon?: string }) {
  const className = "h-5 w-5";
  switch (icon) {
    case "folder":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "layers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function About() {
  const { about, profile } = getPortfolio();
  const section = getSectionConfig("about");
  const heading = section?.heading;
  const title = heading?.title ?? "About";
  const highlight = "real impact";
  const titleParts = title.includes(highlight)
    ? {
        before: title.slice(0, title.indexOf(highlight)),
        highlight,
        after: title.slice(title.indexOf(highlight) + highlight.length),
      }
    : null;

  return (
    <AnimatedSection id="about" className="section-padding section-glow bg-background">
      <div className="section-container">
        {heading && (
          <FadeUp>
            <div className="mb-12 max-w-3xl md:mb-16">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">
                  {heading.label}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {titleParts ? (
                  <>
                    {titleParts.before}
                    <span className="text-primary">{titleParts.highlight}</span>
                    {titleParts.after}
                  </>
                ) : (
                  title
                )}
              </h2>
              {heading.subtitle && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
                  {heading.subtitle}
                </p>
              )}
            </div>
          </FadeUp>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <FadeUp>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-text-secondary md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              <p
                className="pt-2 font-heading text-xl font-semibold text-text-primary"
                style={{ fontFamily: "cursive, var(--font-heading), sans-serif" }}
              >
                — {profile.displayName}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {profile.stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={0.08 + index * 0.06}>
                <CardSpotlight className="glass-card group h-full rounded-2xl p-5 transition-all duration-300 hover:border-primary/25">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-primary">
                    <StatIcon icon={stat.icon} />
                  </div>
                  <p className="font-heading text-xl font-bold text-text-primary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</p>
                </CardSpotlight>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
