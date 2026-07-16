import Image from "next/image";
import Link from "next/link";
import { getPortfolio } from "@/lib/portfolio";

export function Contact() {
  const { contact, footer, site, social } = getPortfolio();

  return (
    <section id="contact" className="bg-primary text-white">
      <div className="section-container py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight md:text-4xl">
              {footer.ctaTitle}
            </h2>
            <p className="mt-4 max-w-md text-white/75">{footer.ctaSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {contact.channels.map((channel) => (
                <a
                  key={channel.id}
                  href={
                    channel.id === "email"
                      ? `mailto:${site.email}`
                      : channel.id === "linkedin"
                        ? social.linkedin
                        : channel.id === "calendar"
                          ? `mailto:${site.email}?subject=Schedule%20a%20call`
                          : "#"
                  }
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  {channel.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden w-48 sm:block lg:mx-0 lg:justify-self-end">
            <Image
              src="/images/plant.png"
              alt=""
              width={220}
              height={220}
              className="h-auto w-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex items-center gap-4">
            <Link href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </Link>
            <Link href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href={site.cvUrl} download className="hover:text-white">
              CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
