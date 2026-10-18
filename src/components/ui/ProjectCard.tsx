"use client";

import Image from "next/image";
import { ProjectItem } from "@/data/projects";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const {
    id,
    tag,
    category,
    title,
    description,
    bullets,
    footerMeta,
    stack,
    imageSrc,
    imageAlt,
    caption,
    liveUrl,
    repoUrl,
    imageOnLeft,
  } = project;

  // 1. Framed Image Mockup
  const FrameMockup = (
    <div className="lg:col-span-7">
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className="group block w-full rounded-sm border border-[#222419] bg-[#0c0d09] p-4 sm:p-6 transition-all duration-300 hover:border-[#c8e98a]/80"
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-[#181914] font-mono text-[11px] text-[#63655a]">
          <span className="group-hover:text-[#e4e4dd] transition-colors">{tag}</span>
          <span className="text-[#787a70] group-hover:text-[#c8e98a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            ↗
          </span>
        </div>

        {/* Aspect ratio fixed styles taaki image container kabhi collapse na ho */}
        <div className="relative mt-4 w-full h-[240px] sm:h-[340px] md:h-[380px] bg-[#080906] border border-[#1a1b15] overflow-hidden rounded-[2px] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 850px"
            unoptimized
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]"
            priority={id === "01"}
          />
        </div>

        <div className="pt-4 font-mono text-[11px] text-[#55574e] group-hover:text-[#787a70] transition-colors">
          {caption}
        </div>
      </a>
    </div>
  );

  // 2. Editorial Text Content
  const EditorialText = (
    <div className="lg:col-span-5 space-y-6">
      <p className="font-mono text-[11px] text-[#c8e98a]">{category}</p>

      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#f5f5f0] leading-tight">
        {title}
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-[#9ea094] font-normal leading-relaxed">
        <p>{description}</p>
        {bullets && bullets.length > 0 && (
          <div className="space-y-1.5 text-[13px] text-[#6d6f65] leading-relaxed">
            {bullets.map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
        )}
      </div>

      <p className="font-mono text-[11px] text-[#55574e]">{footerMeta}</p>

      <div className="font-mono text-[11px] text-[#787a70] pt-1">{stack}</div>

      <div className="flex items-center gap-6 pt-3 font-mono text-xs">
        {liveUrl && (
          <a
            href={liveUrl}
            className="text-[#f5f5f0] hover:text-[#c8e98a] transition-colors flex items-center gap-1.5"
          >
            {id === "01" ? "Explore the experience" : "Try the tool"} ↗
          </a>
        )}
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[#787a70] hover:text-[#f5f5f0] transition-colors flex items-center gap-1.5"
        >
          Source code ↗
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full border-b border-[#181914] px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {imageOnLeft ? (
          <>
            {FrameMockup}
            {EditorialText}
          </>
        ) : (
          <>
            <div className="lg:col-span-5 order-2 lg:order-1">{EditorialText}</div>
            <div className="lg:col-span-7 order-1 lg:order-2">{FrameMockup}</div>
          </>
        )}
      </div>
    </div>
  );
}