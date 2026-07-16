import { getPortfolio } from "@/lib/portfolio";

const iconPaths: Record<string, React.ReactNode> = {
  laravel: (
    <path d="M1.5 9.5L8 2l6.5 7.5L8 17 1.5 9.5zm13 0L21 2v14l-6.5-6.5z" fill="currentColor" />
  ),
  react: (
    <path
      d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-9c-3.5 0-6.5 1.2-8 3 1.5 1.8 4.5 3 8 3s6.5-1.2 8-3c-1.5-1.8-4.5-3-8-3zm0 12c3.5 0 6.5-1.2 8-3-1.5-1.8-4.5-3-8-3s-6.5 1.2-8 3c1.5 1.8 4.5 3 8 3z"
      fill="currentColor"
    />
  ),
  "react-native": (
    <path
      d="M12 9a3 3 0 110 6 3 3 0 010-6zm-7.5 3c0-2.5 3.4-4.5 7.5-4.5s7.5 2 7.5 4.5-3.4 4.5-7.5 4.5S4.5 14.5 4.5 12z"
      fill="currentColor"
    />
  ),
  postgresql: (
    <path
      d="M12 3c-4 0-7 2.2-7 6v3c0 2.2 1.2 4 3.2 5.1L9 21h6l.8-3.9C17.8 16 19 14.2 19 12V9c0-3.8-3-6-7-6z"
      fill="currentColor"
    />
  ),
  docker: (
    <path
      d="M3 13h2v2H3v-2zm3 0h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zM6 10h2v2H6v-2zm3 0h2v2H9v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zM9 7h2v2H9V7zm3 0h2v2h-2V7zm7.5 5.5c-.8-1.2-2-1.8-3.3-2l-.4-1.8h-1.5l.3 1.5H4.2c-.7 0-1.2.5-1.2 1.1v.4C1.8 12.5 1 13.5 1 14.8 1 16.5 2.3 18 4.2 18h12.4c2 0 3.6-1.5 3.6-3.4 0-1.2-.6-2.2-1.7-2.6z"
      fill="currentColor"
    />
  ),
  aws: (
    <path
      d="M6 15.5c1.8 1.3 4.2 2 6.5 2 1.6 0 3.3-.3 4.7-1 .4-.2.7.2.3.5-1.6 1.3-4 2-6.2 2-2.7 0-5.4-.8-7.5-2.3-.3-.2-.1-.6.2-.5.6.2 1.3.3 2 .3zm13.2-1.2c.3.2.1.6-.4.8-4.4 2.5-10.7 1.6-14.5-.3-.5-.2-.2-.7.2-.5 3.3 1.6 8.9 2.3 12.7.2.4-.2.8-.1 2-.2zm-3.4-8.6v-.7c0-.2.1-.3.3-.3h5.4c.2 0 .3.2.3.3v.6c0 .1-.1.3-.2.4l-3.4 4.8c.9 0 1.9.1 2.8.3.2 0 .3.2.3.4v.7c0 .2-.2.3-.4.3h-6.1c-.2 0-.3-.1-.3-.3v-.6c0-.2.1-.3.2-.4l3.5-4.9c-.9-.1-1.7-.2-2.5-.3-.2 0-.3-.2-.3-.3z"
      fill="currentColor"
    />
  ),
  linux: (
    <path
      d="M12 3c-1.5 2-2.5 4-2.5 6.2 0 1.5.5 2.8 1.2 3.6-.8.3-1.7 1.2-1.7 2.7 0 1.3.8 2.3 1.8 2.8-.1.4-.2.9-.2 1.4 0 1.3.8 2.3 2.4 2.3s2.4-1 2.4-2.3c0-.5-.1-1-.2-1.4 1-.5 1.8-1.5 1.8-2.8 0-1.5-.9-2.4-1.7-2.7.7-.8 1.2-2.1 1.2-3.6C14.5 7 13.5 5 12 3z"
      fill="currentColor"
    />
  ),
  nginx: (
    <path d="M4 6l8-3 8 3v6.5L12 21 4 12.5V6zm8 2.2L8 10v3.2l4 2.8 4-2.8V10l-4-1.8z" fill="currentColor" />
  ),
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
          {techLogos.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2.5 text-text-secondary transition-colors hover:text-ink"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="opacity-70"
                aria-hidden="true"
              >
                {iconPaths[tech.icon] ?? iconPaths.react}
              </svg>
              <span className="text-sm font-medium">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
