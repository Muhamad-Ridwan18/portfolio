import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiLaravel,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiNginx,
} from "react-icons/si";
import { getPortfolio } from "@/lib/portfolio";

const brandIcons: Record<string, IconType> = {
  laravel: SiLaravel,
  react: SiReact,
  "react-native": SiReact,
  postgresql: SiPostgresql,
  docker: SiDocker,
  aws: FaAws,
  linux: SiLinux,
  nginx: SiNginx,
};

export function TechLogos() {
  const { techLogos } = getPortfolio();

  return (
    <section className="border-y border-border bg-surface-muted py-10 md:py-12">
      <div className="section-container">
        <p className="mb-8 text-center text-[11px] font-semibold tracking-[0.2em] text-text-muted uppercase">
          Trusted by Technologies
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
          {techLogos.map((tech) => {
            const Icon = brandIcons[tech.icon] ?? SiReact;
            return (
              <li
                key={tech.name}
                className="group flex items-center gap-2.5 text-text-secondary transition-colors hover:text-ink"
              >
                <Icon
                  className="h-5 w-5 shrink-0 opacity-80 transition-opacity group-hover:opacity-100 md:h-6 md:w-6"
                  aria-hidden
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
