"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project, ProjectImage } from "@/types/portfolio";

type ProjectWithImages = Project & { images: ProjectImage[] };

interface ProjectGalleryProps {
  project: ProjectWithImages;
  index: number;
  onOpen: (imageIndex: number) => void;
}

export function ProjectGallery({ project, index, onOpen }: ProjectGalleryProps) {
  const images = project.images;
  const hasImages = images.length > 0;
  const [main, ...rest] = images;

  if (!hasImages) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 text-xl font-bold backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${project.accent}30, transparent)`,
              color: project.accent,
            }}
          >
            {project.initials}
          </div>
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            {project.name}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(0)}
      className="group/gallery relative block w-full cursor-zoom-in text-left"
      aria-label={`Open ${project.name} gallery`}
    >
      <div
        className="absolute -inset-3 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover/gallery:opacity-100"
        style={{ background: `${project.accent}25` }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="grid grid-cols-4 grid-rows-2 gap-1.5 p-1.5">
          <motion.div
            className="relative col-span-3 row-span-2 overflow-hidden rounded-xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover/gallery:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />

              <div className="absolute top-3 left-3 font-mono text-xs text-white/70">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
                <div>
                  <p
                    className="font-heading text-lg font-bold text-white md:text-xl"
                    style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
                  >
                    {project.name}
                  </p>
                  <p className="text-xs text-white/70 md:text-sm">
                    {project.tagline}
                  </p>
                </div>
                <span
                  className="rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[10px] text-white/90 backdrop-blur-sm"
                >
                  {images.length} screens
                </span>
              </div>
            </div>
          </motion.div>

          {rest.slice(0, 2).map((image, i) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover/gallery:scale-105"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-background/20 transition-colors group-hover/gallery:bg-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover/gallery:opacity-100">
          <span
            className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md"
            style={{
              borderColor: `${project.accent}50`,
              background: `${project.accent}30`,
              boxShadow: `0 0 40px ${project.accent}30`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View Gallery
          </span>
        </div>
      </div>
    </button>
  );
}
