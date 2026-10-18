"use client";

import Image from "next/image";

export default function Toolkit() {
  const categories = [
    {
      title: "Interfaces",
      desc: "Responsive layouts, clear state boundaries, and keyboard controls.",
      stack: "React / Next.js / TypeScript",
    },
    {
      title: "Systems",
      desc: "Turning database schemas and query patterns into performant endpoints.",
      stack: "Node.js / Express / MongoDB / Docker",
    },
    {
      title: "Foundations",
      desc: "Algorithmic thinking, visual mathematics, and robust application structures.",
      stack: "C++ / Python / Git",
    },
  ];

  return (
    <section id="toolkit" className="relative w-full bg-[#080906] text-[#e4e4dd]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 pb-20">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="font-mono text-[11px] text-[#c8e98a]">Connected capabilities</p>
            <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-medium tracking-tight text-[#f5f5f0] leading-[1.05]">
              Different tools. <br />
              One <span className="italic font-serif text-[#c8e98a] font-normal">connected</span> approach.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right font-mono text-[11px] space-y-12 pt-2">
            <p className="text-[#787a70]">Toolkit</p>
            <p className="text-[#787a70] max-w-xs lg:ml-auto leading-relaxed">
              From the interface you touch to the logic beneath it.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16">
          
          {/* Left: Python Generated Card */}
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-sm border border-[#212318] bg-[#0c0d09] p-4 sm:p-6">
              <div className="font-mono text-[11px] text-[#63655a] pb-4">
                Capability map
              </div>

              <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] bg-[#080906] border border-[#1a1c13] rounded-[2px] overflow-hidden">
                <Image
                  src="/generated/capability-map.svg"
                  alt="Capability Map Network Graphic"
                  fill
                  unoptimized
                  priority
                  className="object-contain object-center"
                />
              </div>

              <div className="pt-4 font-mono text-[11px] text-[#55574e]">
                &apos;Relationships, not ratings&apos;
              </div>
            </div>
          </div>

          {/* Right: Structured Categories */}
          <div className="lg:col-span-5 space-y-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="space-y-3 pb-8 border-b border-[#181914] last:border-b-0">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#f5f5f0]">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#9ea094] leading-relaxed">
                  {cat.desc}
                </p>
                <p className="font-mono text-xs text-[#6e7164] pt-1">
                  {cat.stack}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>
    </section>
  );
}