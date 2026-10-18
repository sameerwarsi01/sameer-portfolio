"use client";

import Image from "next/image";

export default function About() {
  const metadataRows = [
    {
      label: "Focus",
      value: "Web applications / interactive experiences",
    },
    {
      label: "Approach",
      value: "Build, inspect, understand, refine",
    },
    {
      label: "Off screen",
      value: "Competitive programming, algorithms & interactive 3D",
    },
  ];

  return (
    // 1. Root section se border-b hata diya hai
    <section id="about" className="relative w-full bg-[#080906] text-[#e4e4dd] overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 sm:pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          
          {/* LEFT: Heading & Clean Graphic Artwork (Without Frame Lines) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="font-mono text-[11px] text-[#787a70]">About</p>
              <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-medium tracking-tight text-[#f5f5f0] leading-[1.02]">
                Built on <br />
                <span className="text-[#c8e98a]">curiosity.</span>
              </h2>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="relative w-full max-w-[420px] aspect-[4/3] overflow-hidden">
                <Image
                  src="/generated/study-02.svg"
                  alt="Study 02, finding structure in complexity"
                  fill
                  unoptimized
                  priority
                  className="object-contain object-left"
                />
              </div>
              
              <p className="font-mono text-[11px] text-[#6d6f64] tracking-wide">
                Study 02, finding structure in complexity
              </p>
            </div>
          </div>

          {/* RIGHT: Bio & Metadata Rows */}
          <div className="lg:col-span-7 space-y-10 lg:pt-3">
            <div className="flex justify-end font-mono text-[11px] text-[#787a70]">
              <span>Profile</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-tight text-[#f5f5f0] leading-snug">
              I’m Sameer. I like the moment an idea becomes something you can actually use.
            </h3>

            <div className="space-y-5 text-sm sm:text-base text-[#9ea094] leading-relaxed">
              <p>
                I build websites and interactive interfaces with modern systems, then inspect the code, test component state boundaries, and refine what feels unclear. This portfolio is part of that practice.
              </p>
              <p className="text-[13px] text-[#6d6f65] leading-relaxed">
                Off screen, the same curiosity takes me to algorithms, system architecture, and interactive 3D experiments.
              </p>
            </div>

            <div className="pt-8 border-t border-[#181914] divide-y divide-[#181914] font-mono text-xs">
              {metadataRows.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-center">
                  <span className="sm:col-span-3 text-[#55574e]">{item.label}</span>
                  <span className="sm:col-span-9 text-[#d5d7cb]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM: Python Generated Wave Ribbon (Centered Mesh Graphic) */}
        <div className="mt-16 sm:mt-24 w-full flex justify-center items-center pointer-events-none">
          <div className="relative w-full max-w-[620px] h-20 sm:h-24 opacity-85">
            <Image
              src="/generated/about-wave.svg"
              alt="Computational wave ribbon graphic"
              fill
              unoptimized
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>
    </section>
  );
}