"use client";

import HeroText from "./HeroText";
import HeroInteractive from "@/canvas/HeroInteractive";

export default function Hero() {
  return (
    // 1. Root tag se 'border-b border-[#181914]' hata diya hai
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-[#080906] overflow-hidden flex flex-col justify-between">
      {/* Background Contour Waves */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80 bg-repeat bg-center"
        style={{
          backgroundImage: `url('/generated/hero-field.svg')`,
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 max-w-[1720px] mx-auto flex-1">
        {/* Left Typography */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <HeroText />
        </div>

        {/* Right Cube Canvas Frame */}
        <div className="lg:col-span-6 flex flex-col justify-between lg:pr-8 xl:pr-14">
          <div className="h-full border-r border-[#181914]/80 flex flex-col justify-between">
            <HeroInteractive />
          </div>
        </div>
      </div>

      {/* 2. Yahan add kiya gaya hai: Bounded Divider Line jo content padding ke sath match karegi */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>
    </section>
  );
}