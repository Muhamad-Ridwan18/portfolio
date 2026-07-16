"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingTextProps {
  phrases: string[];
  className?: string;
}

export function RotatingText({ phrases, className = "" }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <span
      className={`relative inline-flex h-[1.4em] overflow-hidden align-bottom ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 font-medium text-primary"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
