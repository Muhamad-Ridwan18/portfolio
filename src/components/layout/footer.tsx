import Link from "next/link";
import { getNavLinks, getPortfolio } from "@/lib/portfolio";

export function Footer() {
  const { site, profile, footer } = getPortfolio();
  const navLinks = getNavLinks();

  return (
    <footer className="relative border-t border-border bg-white">
      <div className="section-container py-10 md:py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="#"
              className="flex items-center gap-2.5 font-heading text-base font-bold text-text-primary"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                MR
              </span>
              {profile.displayName}
            </Link>
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-text-muted md:text-right">
            Built with {footer.builtWith.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
