"use client";

import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="relative w-full bg-[#080906] text-[#e4e4dd]">
      
      {/* 1. TOP META TRANSITION BAR */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="w-full border-b border-[#181914] py-7 sm:py-8 flex items-center justify-between font-mono text-[11px]">
          
          {/* Stacked lines: Bullet + Title on top, Subtitle underneath */}
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-[#c8e98a] inline-block shrink-0 mt-1" />
            <div className="flex flex-col space-y-0.5">
              <span className="text-[#9ea094]">Designing the interface.</span>
              <span className="text-[#55574e]">Understanding what’s underneath.</span>
            </div>
          </div>

          {/* Right anchor link */}
          <a 
            href="#work"
            className="flex items-center gap-2 text-[#9ea094] hover:text-[#c8e98a] transition-colors cursor-pointer group"
          >
            <span>Selected work</span>
            <span className="text-[#c8e98a] transition-transform group-hover:translate-y-0.5">↓</span>
          </a>

        </div>
      </div>

      {/* 2. SECTION HEADER */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="font-mono text-[11px] text-[#c8e98a]">Selected work</p>
            <h2 className="text-5xl sm:text-7xl lg:text-[84px] font-medium tracking-tight text-[#f5f5f0] leading-[1.02]">
              Ideas, put <br /> into practice.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right font-mono text-[11px] space-y-12 pt-2">
            <p className="text-[#787a70]">Four things I’ve built</p>
            <div className="text-[#787a70] space-y-0.5">
              <p>Independent projects.</p>
              <p>Real interfaces. Open source.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Header divider */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>

      {/* 3. PROJECT ROWS */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* 4. BOTTOM BOUNDED DIVIDER */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>

    </section>
  );
}