"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getNavLinks, getPortfolio } from "@/lib/portfolio";

export function Navbar() {
  const navLinks = getNavLinks();
  const { site } = getPortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/90 backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-bold tracking-tight text-ink">
          MR
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="btn-primary hidden sm:inline-flex">
            Let&apos;s Connect
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-surface-muted hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="#contact"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Let&apos;s Connect
              </Link>
            </li>
            <li>
              <Link
                href={site.cvUrl}
                download
                className="btn-ghost w-full"
                onClick={() => setMobileOpen(false)}
              >
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
