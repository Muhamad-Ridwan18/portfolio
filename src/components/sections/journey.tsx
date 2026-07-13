"use client";

import { journey } from "@/data/experience";
import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Journey() {
  return (
    <AnimatedSection id="journey" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            title="Journey"
            subtitle="From intern to senior engineer — building expertise across domains."
          />
        </FadeUp>

        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max items-center gap-0 px-4">
            {journey.map((step, index) => (
              <FadeUp key={`${step.year}-${step.label}`} delay={index * 0.08}>
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-xs text-primary">
                      {step.year}
                    </span>
                    <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-surface">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="mt-3 max-w-[100px] text-center text-sm text-text-secondary">
                      {step.label}
                    </span>
                  </div>
                  {index < journey.length - 1 && (
                    <div
                      className="mx-2 h-px w-12 bg-gradient-to-r from-primary/50 to-secondary/50 md:w-20"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
