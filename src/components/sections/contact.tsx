import { MagneticButton } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { AnimatedSection, FadeUp } from "@/lib/animations";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    description: siteConfig.email,
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Connect professionally",
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    description: "View my code",
    external: true,
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    description: "Follow my journey",
    external: true,
  },
];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="section-padding bg-surface/30"
    >
      <div className="section-container">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary md:text-lg">
              Open to opportunities, collaborations, and interesting projects.
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <FadeUp key={link.label} delay={index * 0.08}>
              <a
                href={link.href}
                className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:bg-surface/80"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-primary">
                  {link.label}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {link.description}
                </p>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              href={siteConfig.cvUrl}
              variant="primary"
              download
            >
              Download CV
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </AnimatedSection>
  );
}
