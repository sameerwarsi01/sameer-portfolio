"use client";

import React, { useState } from "react";
import SnakeGame from "@/components/games/SnakeGame";
import BreachGame from "@/components/games/BreachGame";

export default function Games() {
  const [activeTab, setActiveTab] = useState<"snake" | "breach">("snake");

  return (
    <section id="games" className="relative w-full bg-[#080906] text-[#e4e4dd] overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 sm:pt-28 pb-20">
        
        {/* Top Header Labels */}
        <div className="flex justify-between items-center font-mono text-[11px] text-[#787a70] pb-10">
          <span>Off the clock</span>
          <span>Two small experiments</span>
        </div>

        {/* 2-Column Split: Left = Heading + Subtitle, Right = Game Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Heading & Context */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-medium tracking-tight text-[#f5f5f0] leading-[1.02]">
              Built for <br />
              <span className="italic font-serif text-[#c8e98a] font-normal">play.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#9ea094] max-w-md leading-relaxed">
              <p>A grid, a pattern, a split-second decision.</p>
              <p className="text-[13px] text-[#6d6f65]">Small systems made to be explored.</p>
            </div>

            <p className="font-mono text-[11px] text-[#55574e] pt-4">
              Pick one. Take a little detour.
            </p>
          </div>

          {/* RIGHT: Arcade Console */}
          <div className="lg:col-span-7 flex justify-end">
            <div className="w-full max-w-[580px] rounded-sm border border-[#212318] bg-[#0c0d09] overflow-hidden">
              
              {/* Tabs */}
              <div className="grid grid-cols-2 border-b border-[#1a1c13] font-mono text-xs">
                <button
                  onClick={() => setActiveTab("snake")}
                  className={`py-3.5 px-4 text-center border-r border-[#1a1c13] transition-colors ${
                    activeTab === "snake"
                      ? "bg-[#10120c] text-[#c8e98a] font-medium border-b-2 border-b-[#c8e98a]"
                      : "text-[#787a70] hover:text-[#d8dad0]"
                  }`}
                >
                  01 SNAKE
                </button>
                <button
                  onClick={() => setActiveTab("breach")}
                  className={`py-3.5 px-4 text-center transition-colors ${
                    activeTab === "breach"
                      ? "bg-[#10120c] text-[#c8e98a] font-medium border-b-2 border-b-[#c8e98a]"
                      : "text-[#787a70] hover:text-[#d8dad0]"
                  }`}
                >
                  02 BREACH
                </button>
              </div>

              {/* Active Game */}
              <div className="w-full">
                {activeTab === "snake" ? <SnakeGame /> : <BreachGame />}
              </div>

            </div>
          </div>

        </div>

      </div>

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="border-b border-[#181914]" />
      </div>
    </section>
  );
}