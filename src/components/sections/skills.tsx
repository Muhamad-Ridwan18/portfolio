import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            title="Skills"
            subtitle="Core competencies honed through real-world projects."
          />
        </FadeUp>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <FadeUp key={skill} delay={index * 0.05}>
              <div className="group flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:border-primary/30 hover:bg-surface">
                <span className="flex h-2 w-2 shrink-0 rounded-full bg-secondary transition-transform group-hover:scale-125" />
                <span className="text-text-primary">{skill}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
