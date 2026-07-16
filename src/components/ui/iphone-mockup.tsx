"use client";

import Image from "next/image";

interface IPhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export function IPhoneMockup({ src, alt, className = "" }: IPhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-[240px] sm:w-[280px] md:w-[300px] ${className}`}>
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.75rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl shadow-black/20">
        <div className="absolute top-3 left-1/2 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
        <div className="absolute inset-[3px] overflow-hidden rounded-[2.35rem] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="300px"
            priority
          />
        </div>
      </div>
      <div
        className="absolute -inset-4 -z-10 rounded-[3.5rem] bg-gradient-to-b from-primary/5 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
