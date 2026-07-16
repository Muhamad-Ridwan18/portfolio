"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPortfolio } from "@/lib/portfolio";

export function Hero() {
  const { profile } = getPortfolio();

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium text-primary md:text-base"
            >
              {profile.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-[3.25rem]"
            >
              {profile.headline}{" "}
              <em className="font-bold italic text-primary">
                {profile.headlineAccent}
              </em>{" "}
              real problems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="#projects" className="btn-primary">
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href={profile.ctas.find((c) => c.id === "cv")?.href ?? "/cv.pdf"} download className="btn-ghost">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download CV
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
          >
            <div
              className="absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ececec] sm:h-[340px] sm:w-[340px] md:h-[380px] md:w-[380px]"
              aria-hidden="true"
            />
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl shadow-black/10">
              <Image
                src={profile.portrait}
                alt={`${profile.displayName} — Software Engineer`}
                width={420}
                height={520}
                priority
                className="h-auto w-[260px] object-cover object-top sm:w-[300px] md:w-[340px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
