"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  external?: boolean;
  download?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
  icon,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-primary text-white border border-primary shadow-sm hover:bg-primary/90",
    secondary:
      "bg-white text-text-primary border border-border hover:border-primary/40 hover:bg-emerald-50/50",
    ghost:
      "bg-transparent text-text-secondary border border-border hover:text-text-primary hover:border-border-hover hover:bg-surface-elevated",
    dark:
      "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.12, y: y * 0.12 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15 }}
      className={`inline-block ${className.includes("w-full") ? "w-full sm:w-auto" : ""}`}
    >
      <Link
        href={href}
        download={download || undefined}
        className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...linkProps}
      >
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </Link>
    </motion.div>
  );
}

interface CounterProps {
  value: number;
  suffix?: string;
  id: string;
}

export function AnimatedCounter({ value, suffix = "+", id }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 1800;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(id);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [value, hasAnimated, id]);

  return (
    <span id={id}>
      {count}
      {suffix}
    </span>
  );
}

export function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SectionHeading, SectionLabel } from "./section-heading";
export { ScrollProgress } from "./scroll-progress";
