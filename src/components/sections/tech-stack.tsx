"use client";

import { SectionHeading } from "@/components/ui";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function TechStack() {
  const { techStack } = getPortfolio();
  const section = getSectionConfig("tech-stack");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="tech-stack"
      className={section?.className ?? "section-padding section-glow"}
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              number={getSectionNumber("tech-stack")}
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((category, catIndex) => (
            <FadeUp key={category.category} delay={catIndex * 0.06}>
              <CardSpotlight className="glass-card group h-full rounded-2xl p-5 transition-all duration-300 hover:border-primary/20">
                <div className="mb-4 flex items-center gap-2.5">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ background: category.color }}
                  />
                  <h3 className="font-heading text-sm font-semibold tracking-wide text-text-primary">
                    {category.category}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-text-secondary transition-colors group-hover:text-text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardSpotlight>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
