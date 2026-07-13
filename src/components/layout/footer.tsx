import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Built with{" "}
            <span className="text-text-primary">Next.js</span>,{" "}
            <span className="text-text-primary">TailwindCSS</span>,{" "}
            <span className="text-text-primary">Framer Motion</span>
          </p>
          <p className="text-sm text-text-secondary">
            Made with <span aria-hidden="true">❤️</span> by Ridwan
          </p>
        </div>
      </div>
    </footer>
  );
}
