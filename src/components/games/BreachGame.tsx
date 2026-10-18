"use client";

import React, { useState, useEffect, useCallback } from "react";

export default function BreachGame() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<string[][]>([]);
  const [targetSeq, setTargetSeq] = useState<string[]>([]);
  const [playerSeq, setPlayerSeq] = useState<string[]>([]);
  const [cursorPos, setCursorPos] = useState<[number, number]>([0, 0]);
  const [timeLeft, setTimeLeft] = useState(18);

  const startRound = useCallback((lvl: number) => {
    const chars = "123456789ABCDEF";
    const newGrid: string[][] = [];
    for (let r = 0; r < 4; r++) {
      const row: string[] = [];
      for (let c = 0; c < 4; c++) {
        row.push(chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)]);
      }
      newGrid.push(row);
    }

    // Sequence length: Level 1 = 2 codes, Level 2 = 3 codes
    const seqLen = Math.min(2 + Math.floor(lvl / 2), 4);
    const target: string[] = [];
    for (let i = 0; i < seqLen; i++) {
      target.push(newGrid[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)]);
    }

    setGrid(newGrid);
    setTargetSeq(target);
    setPlayerSeq([]);
    setCursorPos([0, 0]);
    setTimeLeft(18);
    setGameOver(false);
  }, []);

  const resetGame = () => {
    setScore(0);
    setLevel(1);
    startRound(1);
    setIsActive(true);
  };

  useEffect(() => {
    if (grid.length === 0) startRound(1);
  }, [grid.length, startRound]);

  // Timer Countdown
  useEffect(() => {
    if (!isActive || gameOver) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameOver(true);
          setIsActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, gameOver]);

  // Handle cell click or spacebar selection
  const handleSelectVal = useCallback((val: string) => {
    if (!isActive || gameOver) return;

    const neededCode = targetSeq[playerSeq.length];

    if (val === neededCode) {
      const nextSeq = [...playerSeq, val];
      setPlayerSeq(nextSeq);
      setScore((s) => {
        const next = s + 25;
        setBestScore((b) => Math.max(b, next));
        return next;
      });

      // Target complete -> Level Up!
      if (nextSeq.length === targetSeq.length) {
        setLevel((l) => {
          const nextLvl = l + 1;
          setTimeout(() => startRound(nextLvl), 200);
          return nextLvl;
        });
      }
    } else {
      // Wrong code selected
      setGameOver(true);
      setIsActive(false);
    }
  }, [gameOver, isActive, playerSeq, startRound, targetSeq]);

  const handleMove = useCallback((dir: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
    setCursorPos(([r, c]) => {
      if (dir === "UP") return [Math.max(0, r - 1), c];
      if (dir === "DOWN") return [Math.min(3, r + 1), c];
      if (dir === "LEFT") return [r, Math.max(0, c - 1)];
      if (dir === "RIGHT") return [r, Math.min(3, c + 1)];
      return [r, c];
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") handleMove("UP");
      if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") handleMove("DOWN");
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") handleMove("LEFT");
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") handleMove("RIGHT");
      if (e.key === " ") {
        if (grid.length > 0) {
          const [r, c] = cursorPos;
          handleSelectVal(grid[r][c]);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cursorPos, grid, handleMove, handleSelectVal]);

  return (
    <div className="w-full">
      {/* Top Meta Bar */}
      <div className="p-6 pb-4 border-b border-[#181a13] flex items-center justify-between font-mono text-xs">
        <span className="text-[#9ea094]">■ BREACH / 002 (LVL {level})</span>
        <span className="text-[#c8e98a] uppercase font-semibold">
          {gameOver ? "TERMINATED" : !isActive ? "STANDBY" : `TIMER: ${timeLeft}s`}
        </span>
      </div>

      {/* Score Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-[#181a13] font-mono">
        <div className="flex gap-8 sm:gap-12 text-xs">
          <div>
            <p className="text-[10px] text-[#55574e]">SCORE</p>
            <p className="text-xl text-[#c8e98a] font-medium">{String(score).padStart(3, "0")}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#55574e]">PERSONAL BEST</p>
            <p className="text-xl text-[#f5f5f0] font-medium">{String(bestScore).padStart(3, "0")}</p>
          </div>
        </div>
        <div className="text-[11px] text-[#787a70]">CLICK OR WASD + SPACE</div>
      </div>

      {/* Main Play Area */}
      <div className="relative w-full aspect-square max-h-[460px] bg-[#080906] flex items-center justify-center p-4">
        <div className="w-full max-w-sm flex flex-col items-center justify-center space-y-6">
          
          {/* Target Sequence Header */}
          <div className="w-full text-center space-y-2.5">
            <p className="font-mono text-[11px] text-[#8e9084] tracking-wider uppercase">
              Target Sequence: Click in order
            </p>
            <div className="flex justify-center items-center gap-2.5 font-mono">
              {targetSeq.map((tok, idx) => {
                const isMatched = idx < playerSeq.length;
                const isCurrentTarget = idx === playerSeq.length;
                return (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-[2px] text-xs font-bold transition-all border ${
                      isMatched
                        ? "border-[#c8e98a] bg-[#c8e98a]/20 text-[#c8e98a]"
                        : isCurrentTarget
                        ? "border-[#c8e98a] bg-[#12140e] text-[#f5f5f0] ring-1 ring-[#c8e98a] animate-pulse"
                        : "border-[#212318] bg-[#0c0d09] text-[#55574e]"
                    }`}
                  >
                    {tok}
                  </span>
                );
              })}
            </div>
          </div>

          {/* 4x4 Code Grid */}
          <div className="grid grid-cols-4 gap-2.5 p-3 rounded-sm border border-[#1b1e15] bg-[#090b07]">
            {grid.map((row, r) =>
              row.map((val, c) => {
                const isCur = cursorPos[0] === r && cursorPos[1] === c;
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => {
                      setCursorPos([r, c]);
                      handleSelectVal(val);
                    }}
                    className={`w-14 h-12 flex items-center justify-center font-mono text-sm font-semibold rounded-[2px] transition-all cursor-pointer ${
                      isCur
                        ? "bg-[#c8e98a] text-[#080906] scale-105 shadow-md shadow-[#c8e98a]/20"
                        : "bg-[#0f110c] text-[#d5d7cb] hover:border-[#c8e98a] hover:text-[#c8e98a] border border-[#1e2217]"
                    }`}
                  >
                    {val}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Start Game Overlay */}
        {!isActive && !gameOver && (
          <div className="absolute inset-0 bg-[#080906]/90 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 space-y-4">
            <p className="font-mono text-[10px] text-[#787a70] tracking-widest uppercase">A Playable Experiment</p>
            <h3 className="text-3xl sm:text-4xl font-medium text-[#f5f5f0]">A little detour.</h3>
            <p className="font-mono text-xs text-[#9ea094] max-w-xs leading-relaxed">
              Match the target codes in sequence from the matrix before time runs out.
            </p>
            <button
              onClick={resetGame}
              className="mt-2 px-6 py-2.5 bg-[#c8e98a] text-[#080906] font-mono text-xs font-semibold rounded-[2px] hover:bg-[#d8f59d] transition-colors"
            >
              Start game ↗
            </button>
          </div>
        )}

        {/* Game Over Screen */}
        {gameOver && (
          <div className="absolute inset-0 bg-[#080906]/95 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 space-y-4">
            <p className="font-mono text-[10px] text-red-400 tracking-widest uppercase">Protocol Interrupted</p>
            <h3 className="text-3xl font-medium text-[#f5f5f0]">Breach Terminated</h3>
            <p className="font-mono text-xs text-[#9ea094]">
              Reached Level {level} with {score} pts.
            </p>
            <button
              onClick={resetGame}
              className="mt-2 px-6 py-2.5 bg-[#c8e98a] text-[#080906] font-mono text-xs font-semibold rounded-[2px] hover:bg-[#d8f59d] transition-colors"
            >
              Retry Breach ↗
            </button>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="p-6 border-t border-[#181a13] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="space-y-1 text-[#686a5e] text-center sm:text-left">
          <p>Click boxes directly, or steer with WASD / Arrows + Spacebar.</p>
          <p className="text-[11px] text-[#55574e]">Find each required code in order.</p>
        </div>

        {/* D-Pad */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => handleMove("UP")}
            className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
          >
            ↑
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => handleMove("LEFT")}
              className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
            >
              ←
            </button>
            <button
              onClick={() => handleMove("DOWN")}
              className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
            >
              ↓
            </button>
            <button
              onClick={() => handleMove("RIGHT")}
              className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}