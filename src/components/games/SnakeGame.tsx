"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const GRID_SIZE = 20;

interface Point {
  x: number;
  y: number;
}

export default function SnakeGame() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [stepMode, setStepMode] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const snakeRef = useRef<Point[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const dirRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");
  const nextDirRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");
  const foodRef = useRef<Point>({ x: 15, y: 10 });
  const loopRef = useRef<NodeJS.Timeout | null>(null);

  const spawnFood = useCallback((): Point => {
    while (true) {
      const p = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!snakeRef.current.some((s) => s.x === p.x && s.y === p.y)) return p;
    }
  }, []);

  const resetGame = () => {
    snakeRef.current = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    dirRef.current = "RIGHT";
    nextDirRef.current = "RIGHT";
    foodRef.current = spawnFood();
    setScore(0);
    setGameOver(false);
    setIsActive(true);
    setIsPaused(false);
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cell = w / GRID_SIZE;

    ctx.fillStyle = "#080906";
    ctx.fillRect(0, 0, w, h);

    // Grid dots
    ctx.fillStyle = "#1e2118";
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        ctx.fillRect(x * cell + cell / 2 - 0.5, y * cell + cell / 2 - 0.5, 1, 1);
      }
    }

    // Food
    const fx = foodRef.current.x * cell + cell / 2;
    const fy = foodRef.current.y * cell + cell / 2;
    const r = cell * 0.35;
    ctx.fillStyle = "#c8e98a";
    ctx.beginPath();
    ctx.moveTo(fx, fy - r);
    ctx.lineTo(fx + r, fy);
    ctx.lineTo(fx, fy + r);
    ctx.lineTo(fx - r, fy);
    ctx.closePath();
    ctx.fill();

    // Snake
    snakeRef.current.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? "#f5f5f0" : "#a1c26b";
      ctx.fillRect(seg.x * cell + 1.5, seg.y * cell + 1.5, cell - 3, cell - 3);
    });
  }, []);

  const tick = useCallback(() => {
    dirRef.current = nextDirRef.current;
    const head = snakeRef.current[0];
    const dx = dirRef.current === "LEFT" ? -1 : dirRef.current === "RIGHT" ? 1 : 0;
    const dy = dirRef.current === "UP" ? -1 : dirRef.current === "DOWN" ? 1 : 0;

    const nextHead: Point = { x: head.x + dx, y: head.y + dy };

    if (
      nextHead.x < 0 ||
      nextHead.x >= GRID_SIZE ||
      nextHead.y < 0 ||
      nextHead.y >= GRID_SIZE ||
      snakeRef.current.some((s) => s.x === nextHead.x && s.y === nextHead.y)
    ) {
      setGameOver(true);
      setIsActive(false);
      return;
    }

    snakeRef.current.unshift(nextHead);

    if (nextHead.x === foodRef.current.x && nextHead.y === foodRef.current.y) {
      setScore((s) => {
        const next = s + 10;
        setBestScore((b) => Math.max(b, next));
        return next;
      });
      foodRef.current = spawnFood();
    } else {
      snakeRef.current.pop();
    }

    draw();
  }, [draw, spawnFood]);

  const handleDir = useCallback(
    (dir: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
      if (!isActive && !gameOver) setIsActive(true);
      const opp = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
      if (opp[dir] !== dirRef.current) {
        nextDirRef.current = dir;
        if (stepMode && !gameOver) tick();
      }
    },
    [isActive, gameOver, stepMode, tick]
  );

  useEffect(() => {
    draw();
    if (isActive && !gameOver && !isPaused && !stepMode) {
      loopRef.current = setInterval(tick, 110);
    }
    return () => {
      if (loopRef.current) clearInterval(loopRef.current);
    };
  }, [isActive, gameOver, isPaused, stepMode, tick, draw]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") handleDir("UP");
      if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") handleDir("DOWN");
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") handleDir("LEFT");
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") handleDir("RIGHT");
      if (e.key === " ") setIsPaused((p) => !p);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleDir]);

  return (
    <div className="w-full">
      {/* Meta Bar */}
      <div className="p-6 pb-4 border-b border-[#181a13] flex items-center justify-between font-mono text-xs">
        <span className="text-[#9ea094]">■ SNAKE / 001</span>
        <span className="text-[#c8e98a] uppercase">
          {gameOver ? "FINISHED" : isPaused ? "PAUSED" : isActive ? "RUNNING" : "READY"}
        </span>
      </div>

      {/* Score */}
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
        <div className="text-[11px] text-[#55574e]">20 × 20 GRID</div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full aspect-square max-h-[460px] bg-[#080906] flex items-center justify-center p-4">
        <canvas ref={canvasRef} width={420} height={420} className="w-full h-full max-w-[420px] max-h-[420px]" />
        
        {gameOver && (
          <div className="absolute inset-0 bg-[#080906]/90 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <p className="font-mono text-[10px] text-[#787a70] tracking-widest">END OF TRANSMISSION</p>
            <h3 className="text-3xl font-medium text-[#f5f5f0]">One more round?</h3>
            <p className="font-mono text-xs text-[#9ea094]">You collected {score / 10} bytes. Beat that?</p>
            <button
              onClick={resetGame}
              className="px-6 py-2.5 bg-[#c8e98a] text-[#080906] font-mono text-xs font-semibold rounded-[2px] hover:bg-[#d8f59d] transition-colors"
            >
              Play again ↗
            </button>
          </div>
        )}

        {!isActive && !gameOver && (
          <div className="absolute inset-0 bg-[#080906]/80 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <p className="font-mono text-[11px] text-[#c8e98a]">SYSTEM READY</p>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#f5f5f0]">Collect bytes. Avoid walls.</h3>
            <button
              onClick={resetGame}
              className="px-6 py-2.5 bg-[#c8e98a] text-[#080906] font-mono text-xs font-semibold rounded-[2px] hover:bg-[#d8f59d] transition-colors"
            >
              Start Snake ↗
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-6 border-t border-[#181a13] flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="space-y-2 text-[#686a5e] text-center sm:text-left">
          <p>Arrow keys / WASD to steer.</p>
          <p className="text-[11px] text-[#55574e]">Space to pause. Collect ◆. Avoid walls.</p>
          <label className="flex items-center gap-2 pt-1 text-[11px] text-[#787a70] cursor-pointer">
            <input
              type="checkbox"
              checked={stepMode}
              onChange={(e) => setStepMode(e.target.checked)}
              className="accent-[#c8e98a]"
            />
            Step mode (No timer. Your pace.)
          </label>
        </div>

        {/* D-Pad */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => handleDir("UP")}
            className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
          >
            ↑
          </button>
          <div className="flex gap-1">
            <button
              onClick={() => handleDir("LEFT")}
              className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
            >
              ←
            </button>
            <button
              onClick={() => handleDir("DOWN")}
              className="w-8 h-8 rounded border border-[#212318] bg-[#0f110c] flex items-center justify-center text-[#9ea094] hover:text-[#c8e98a]"
            >
              ↓
            </button>
            <button
              onClick={() => handleDir("RIGHT")}
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