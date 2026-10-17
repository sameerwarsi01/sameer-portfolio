"use client";

import { useState } from "react";

// Isometric 3D Rubik style cube with real rotating mechanical slices
export default function HeroInteractive() {
  const [isSolving, setIsSolving] = useState(false);
  const [viewMode, setViewMode] = useState<"solve" | "static">("solve");

  const handleReplay = () => {
    setViewMode("solve");
    setIsSolving(true);
    setTimeout(() => {
      setIsSolving(false);
    }, 2400);
  };

  return (
    <div className="relative aspect-square w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm p-6 flex flex-col justify-between overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
        <span>01 / System Sandbox</span>
        <span className={isSolving ? "text-emerald-400 font-bold" : "text-zinc-500"}>
          {isSolving ? "Rotating Slices..." : "Solved"}
        </span>
      </div>

      {/* 3D Scene Container */}
      <div className="relative flex items-center justify-center my-auto w-full h-[300px] [perspective:1000px]">
        {/* Main Isometric Pivot */}
        <div
          className="relative w-44 h-44 [transform-style:preserve-3d] transition-transform duration-700"
          style={{ transform: "rotateX(-30deg) rotateY(45deg)" }}
        >
          {/* Top Layer Slice */}
          <div
            className={`absolute inset-0 [transform-style:preserve-3d] transition-all duration-1000 ease-in-out ${
              isSolving ? "rotate-[-90deg] translate-y-[-8px]" : "rotate-0 translate-y-0"
            }`}
          >
            <div className="grid grid-cols-3 gap-2 w-full h-full">
              {[...Array(9)].map((_, i) => (
                <div
                  key={`top-${i}`}
                  className={`rounded-md border border-zinc-700/60 shadow-lg transition-colors duration-500 ${
                    i === 4 || i === 2
                      ? "bg-emerald-500/90 border-emerald-400 shadow-emerald-500/20"
                      : "bg-zinc-800/90"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Middle Layer Slice */}
          <div
            className={`absolute inset-0 [transform-style:preserve-3d] translate-z-[-50px] transition-all duration-1000 delay-300 ease-in-out ${
              isSolving ? "rotate-[90deg]" : "rotate-0"
            }`}
            style={{ transform: "translateZ(-36px)" }}
          >
            <div className="grid grid-cols-3 gap-2 w-full h-full opacity-80">
              {[...Array(9)].map((_, i) => (
                <div
                  key={`mid-${i}`}
                  className={`rounded-md border border-zinc-800 ${
                    i === 0 ? "bg-emerald-600/80 border-emerald-400" : "bg-zinc-800/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Layer Slice */}
          <div
            className={`absolute inset-0 [transform-style:preserve-3d] transition-all duration-1000 delay-700 ease-in-out ${
              isSolving ? "rotate-[-180deg] translate-y-[8px]" : "rotate-0 translate-y-0"
            }`}
            style={{ transform: "translateZ(-72px)" }}
          >
            <div className="grid grid-cols-3 gap-2 w-full h-full opacity-60">
              {[...Array(9)].map((_, i) => (
                <div
                  key={`bot-${i}`}
                  className="rounded-md border border-zinc-900 bg-zinc-900/90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer Controls */}
      <div className="flex justify-between items-center text-xs font-mono border-t border-zinc-800/60 pt-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleReplay}
            disabled={isSolving}
            className={`transition-colors hover:text-emerald-400 ${
              viewMode === "solve" ? "text-emerald-400 underline underline-offset-4" : "text-zinc-500"
            }`}
          >
            Replay solve ↗
          </button>
          <span className="text-zinc-700">/</span>
          <button
            onClick={() => {
              setViewMode("static");
              setIsSolving(false);
            }}
            className={`transition-colors hover:text-zinc-300 ${
              viewMode === "static" ? "text-zinc-300 underline underline-offset-4" : "text-zinc-500"
            }`}
          >
            Static view
          </button>
        </div>

        <span className="text-zinc-500">Mechanical Slices</span>
      </div>
    </div>
  );
}