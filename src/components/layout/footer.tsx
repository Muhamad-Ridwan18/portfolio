import { getPortfolio } from "@/lib/portfolio";

export function Footer() {
  const { site, footer } = getPortfolio();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs text-text-muted">
          {footer.builtWith.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
