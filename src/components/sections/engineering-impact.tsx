import { impactStats } from "@/data/skills";
import { AnimatedCounter } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function EngineeringImpact() {
  return (
    <AnimatedSection
      id="impact"
      className="section-padding bg-surface/30"
    >
      <div className="section-container">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Engineering Impact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary md:text-lg">
              Measurable contributions across projects and production systems.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1}>
              <div className="rounded-xl border border-border bg-surface p-8 text-center">
                <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-3 text-sm text-text-secondary">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
