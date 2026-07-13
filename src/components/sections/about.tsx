import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="section-container">
        <FadeUp>
          <SectionHeading title="Who I Am" />
        </FadeUp>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <p className="text-lg leading-relaxed text-text-secondary">
              Saya adalah Software Engineer yang fokus pada pengembangan
              backend, web application, mobile application, dan deployment
              server.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg leading-relaxed text-text-secondary">
              Saya senang membangun produk yang scalable, maintainable, dan
              memiliki dampak nyata bagi pengguna. Pengalaman saya meliputi
              pengembangan sistem kesehatan, marketplace, company profile,
              hingga deployment infrastructure.
            </p>
          </FadeUp>
        </div>
      </div>
    </AnimatedSection>
  );
}
