"use client";

import { useEffect, useRef, useState } from "react";

// Interactive playable snake experiment with touch buttons and swipe controls
export default function Playground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "running" | "paused">("idle");

  const dirRef = useRef<{ dx: number; dy: number }>({ dx: 1, dy: 0 });
  const statusRef = useRef(status);
  statusRef.current = status;

  // Direction handlers for Touch and Keyboard
  const setDirection = (dx: number, dy: number) => {
    if (statusRef.current !== "running") return;
    const current = dirRef.current;
    if (dx !== 0 && current.dx === 0) dirRef.current = { dx, dy: 0 };
    if (dy !== 0 && current.dy === 0) dirRef.current = { dx: 0, dy };
  };

  useEffect(() => {
    if (status !== "running") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 20;
    const tileCount = 14;
    let snake = [{ x: 7, y: 7 }];
    let food = { x: 3, y: 3 };
    dirRef.current = { dx: 1, dy: 0 };
    let localScore = score;

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setStatus((prev) => (prev === "running" ? "paused" : "running"));
        return;
      }
      if (e.key === "ArrowUp" || e.key === "w") setDirection(0, -1);
      if (e.key === "ArrowDown" || e.key === "s") setDirection(0, 1);
      if (e.key === "ArrowLeft" || e.key === "a") setDirection(-1, 0);
      if (e.key === "ArrowRight" || e.key === "d") setDirection(1, 0);
    };

    window.addEventListener("keydown", handleKey);

    const interval = setInterval(() => {
      if (statusRef.current !== "running") return;

      const head = {
        x: snake[0].x + dirRef.current.dx,
        y: snake[0].y + dirRef.current.dy,
      };

      // Wrap edges
      if (head.x < 0) head.x = tileCount - 1;
      if (head.x >= tileCount) head.x = 0;
      if (head.y < 0) head.y = tileCount - 1;
      if (head.y >= tileCount) head.y = 0;

      // Self-collision
      if (snake.some((s) => s.x === head.x && s.y === head.y)) {
        setStatus("idle");
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        localScore += 10;
        setScore(localScore);
        setHighScore((prev) => Math.max(prev, localScore));
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };
      } else {
        snake.pop();
      }

      // Render
      ctx.fillStyle = "#121316";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#34d399";
      ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);

      snake.forEach((seg, i) => {
        ctx.fillStyle = i === 0 ? "#6ee7b7" : "#10b981";
        ctx.fillRect(seg.x * gridSize + 1, seg.y * gridSize + 1, gridSize - 2, gridSize - 2);
      });
    }, 110);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKey);
    };
  }, [status]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        <span>05 / Off the Clock</span>
        <span>Canvas Experiment</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight">
            Built for <br />
            <span className="font-editorial italic font-normal text-zinc-400">interaction.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Move with <strong>WASD / Keys</strong> or use the <strong>touch controls</strong> below.
          </p>

          <div className="flex items-center space-x-6 pt-2">
            <button
              onClick={() => {
                if (status === "idle") {
                  setScore(0);
                  setStatus("running");
                } else if (status === "running") {
                  setStatus("paused");
                } else {
                  setStatus("running");
                }
              }}
              className="px-6 py-2.5 rounded-full bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-emerald-400 transition-colors"
            >
              {status === "idle" ? "Start Game" : status === "running" ? "Pause" : "Resume"}
            </button>

            <div className="flex space-x-4 text-xs font-mono">
              <span className="text-zinc-400">Score: <strong className="text-emerald-400">{score}</strong></span>
              <span className="text-zinc-500">Best: <strong className="text-zinc-300">{highScore}</strong></span>
            </div>
          </div>
        </div>

        {/* Canvas & Touch D-Pad */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <canvas ref={canvasRef} width={280} height={280} className="rounded-xl border border-zinc-800/60 bg-[#121316]" />
          </div>

          {/* Touch D-Pad Controller */}
          <div className="flex flex-col items-center gap-1.5 mt-5">
            <button
              onClick={() => setDirection(0, -1)}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 active:bg-emerald-500 active:text-black font-mono text-xs"
            >
              ▲
            </button>
            <div className="flex gap-1.5">
              <button
                onClick={() => setDirection(-1, 0)}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 active:bg-emerald-500 active:text-black font-mono text-xs"
              >
                ◀
              </button>
              <button
                onClick={() => setDirection(0, 1)}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 active:bg-emerald-500 active:text-black font-mono text-xs"
              >
                ▼
              </button>
              <button
                onClick={() => setDirection(1, 0)}
                className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 active:bg-emerald-500 active:text-black font-mono text-xs"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}