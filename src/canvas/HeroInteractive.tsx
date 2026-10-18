"use client";

import React, { useState, useEffect } from "react";

// 3x3 Rubik structure coordinates: x (-1, 0, 1), y (-1, 0, 1), z (-1, 0, 1)
const PIECES: { x: number; y: number; z: number }[] = [];
for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      PIECES.push({ x, y, z });
    }
  }
}

export default function HeroInteractive() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [staticView, setStaticView] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Solving moves sequence cycle
  useEffect(() => {
    if (!isPlaying || staticView) return;

    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 6) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 750);

    return () => clearInterval(interval);
  }, [isPlaying, staticView]);

  const getPieceTransform = (px: number, py: number, pz: number) => {
    const size = 46;
    const gap = 2;
    const baseTranslate = `translate3d(${px * (size + gap)}px, ${py * (size + gap)}px, ${pz * (size + gap)}px)`;

    if (!isPlaying || staticView || step === 0) {
      return baseTranslate;
    }

    if (step === 1 && py === -1) return `rotateY(90deg) ${baseTranslate}`;
    if (step === 2 && px === 1) return `rotateX(90deg) ${baseTranslate}`;
    if (step === 3 && px === 0) return `rotateX(-90deg) ${baseTranslate}`;
    if (step === 4 && pz === 1) return `rotateZ(90deg) ${baseTranslate}`;
    if (step === 5 && py === -1) return `rotateY(-90deg) ${baseTranslate}`;

    return baseTranslate;
  };

  const handleReplay = () => {
    setStaticView(false);
    setStep(1);
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 select-none">
      {/* 1. Top Meta Bar */}
      <div className="flex items-start justify-between text-[11px] font-mono">
        <div className="space-y-1">
          <p className="text-[#c8e98a]">Interactive studies</p>
          <p className="text-[#686a60]">01 / Finding structure</p>
        </div>
        <div className="flex items-center gap-4 text-[#686a60]">
          <span className="text-[#c8e98a]">01 / Cube</span>
          <span>02 / Core</span>
          <span className="text-[#c8e98a] text-sm leading-none cursor-pointer">+</span>
        </div>
      </div>

      {/* 2. Real Isometric 3D Rubik's Stage */}
      <div
        className="flex items-center justify-center my-auto py-12"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-[150px] h-[150px] transition-transform duration-300 hover:scale-[1.04]"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-32deg) rotateY(45deg) rotateZ(0deg)",
          }}
        >
          {mounted &&
            PIECES.map((piece, idx) => {
              const transform = getPieceTransform(piece.x, piece.y, piece.z);
              const isCenterHatch = piece.x === 0 && piece.y === -1 && piece.z === 0;

              return (
                <div
                  key={idx}
                  className="absolute top-0 left-0 w-[46px] h-[46px] pointer-events-none"
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                    transition: isPlaying ? "transform 550ms cubic-bezier(0.4, 0.0, 0.2, 1)" : "none",
                  }}
                >
                  {/* TOP FACE */}
                  {piece.y === -1 && (
                    <div
                      className="absolute inset-0 bg-[#e3f4ba] border-[2.5px] border-[#080906] flex items-center justify-center"
                      style={{ transform: "rotateX(90deg) translateZ(23px)" }}
                    >
                      {isCenterHatch && (
                        <div className="w-2.5 h-2.5 border-t-2 border-b-2 border-[#080906]/50" />
                      )}
                    </div>
                  )}

                  {/* BOTTOM FACE */}
                  {piece.y === 1 && (
                    <div
                      className="absolute inset-0 bg-[#657d38] border-[2.5px] border-[#080906]"
                      style={{ transform: "rotateX(-90deg) translateZ(23px)" }}
                    />
                  )}

                  {/* FRONT / LEFT FACE */}
                  {piece.z === 1 && (
                    <div
                      className="absolute inset-0 bg-[#b8dc7c] border-[2.5px] border-[#080906] flex items-center justify-center"
                      style={{ transform: "translateZ(23px)" }}
                    >
                      {piece.x === 0 && piece.y === 0 && (
                        <div className="space-y-0.5">
                          <div className="w-2.5 h-[1.5px] bg-[#080906]/40" />
                          <div className="w-2.5 h-[1.5px] bg-[#080906]/40" />
                          <div className="w-2.5 h-[1.5px] bg-[#080906]/40" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* BACK FACE */}
                  {piece.z === -1 && (
                    <div
                      className="absolute inset-0 bg-[#2b3518] border-[2.5px] border-[#080906]"
                      style={{ transform: "rotateY(180deg) translateZ(23px)" }}
                    />
                  )}

                  {/* RIGHT FACE */}
                  {piece.x === 1 && (
                    <div
                      className="absolute inset-0 bg-[#7a9c44] border-[2.5px] border-[#080906] flex items-center justify-center"
                      style={{ transform: "rotateY(90deg) translateZ(23px)" }}
                    >
                      {piece.y === 0 && piece.z === 0 && (
                        <div className="w-[1.5px] h-3 bg-[#080906]/40" />
                      )}
                    </div>
                  )}

                  {/* LEFT INTERIOR */}
                  {piece.x === -1 && (
                    <div
                      className="absolute inset-0 bg-[#252f14] border-[2.5px] border-[#080906]"
                      style={{ transform: "rotateY(-90deg) translateZ(23px)" }}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* 3. Bottom Controls */}
      <div className="w-full font-mono text-[11px] text-[#686a60] pt-4">
        {/* Top text line with dimension tag */}
        <div className="flex justify-between items-end pb-3">
          <div className="space-y-0.5">
            <p className="text-[#9ea094]">A few considered moves.</p>
            <p className="text-[#55574e]">Something falls into place.</p>
          </div>
          <span className="text-[#55574e] tracking-wider">03 × 03</span>
        </div>

        {/* Separator Divider Line */}
        <div className="w-full border-t border-[#181914]" />

        {/* Action Triggers Row */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleReplay}
              className="text-[#c8e98a] hover:underline cursor-pointer transition-colors flex items-center gap-1"
            >
              <span>Play animation</span>
              <span>↗</span>
            </button>
            <span className="text-[#3a3b34]">/</span>
            <button
              onClick={() => {
                setIsPlaying(false);
                setStaticView(true);
                setStep(0);
              }}
              className="text-[#8e9083] hover:text-[#f5f5f0] cursor-pointer transition-colors"
            >
              Static view
            </button>
          </div>

          <span className={isPlaying ? "text-[#c8e98a]" : "text-[#55574e]"}>
            {isPlaying ? "Solving..." : "At rest"}
          </span>
        </div>
      </div>
    </div>
  );
}