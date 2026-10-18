"use client";

export default function HeroText() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none">
      {/* 1. Top Sub-header Line */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#686a60]">
        <p>Independent developer, experimental mind.</p>
        <p className="hidden sm:block">Portfolio</p>
      </div>

      {/* 2. Main Editorial Typography */}
      <div className="space-y-6 my-auto py-8">
        <p className="text-[11px] font-mono text-[#686a60]">hello, I&apos;m Sameer.</p>

        <h1 className="text-6xl sm:text-7xl lg:text-[84px] font-medium tracking-tight text-[#f5f5f0] leading-[0.98]">
          Code. <br />
          Architecture. <br />
          Impact<span className="text-[#c8e98a]">.</span>
        </h1>

        <div className="space-y-2 max-w-md pt-2">
          <p className="text-xs font-mono text-[#c8e98a]">
            Full-stack / systems developer
          </p>
          <p className="text-sm text-[#8e9083] leading-relaxed">
            I build full-stack web applications, robust backend architectures, and performant user experiences with modern systems.
          </p>
        </div>
      </div>

      {/* 3. Bottom Action Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#c8e98a] text-[#080906] font-mono text-xs font-medium hover:bg-[#d9f5ad] transition-colors"
        >
          <span>Explore the work</span>
          <span>↗</span>
        </a>
        <a
          href="https://github.com/sameerwarsi01/sameer-portfolio"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#212419] text-[#a8aaa0] font-mono text-xs hover:border-[#383d2a] hover:text-[#f5f5f0] transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}