"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroInteractive from "@/canvas/HeroInteractive";

// Hero introduction and dynamic interactive canvas
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-zinc-800/70 pb-4 mb-12 text-xs uppercase tracking-widest text-zinc-500 font-mono">
        <span>Full-Stack Engineer</span>
        <span>Portfolio 2026</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-zinc-400 text-sm font-mono tracking-wider">
            hello, I&apos;m Sameer.
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-100 leading-[1.08]">
            Code<span className="text-emerald-400">.</span> <br />
            <span className="font-editorial italic font-normal text-zinc-300">
              Architecture
            </span>
            <span className="text-emerald-400">.</span> <br />
            Impact<span className="text-emerald-400">.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            I build full-stack web applications, robust backend architectures, and
            performant user experiences with modern systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#work"
              className="inline-flex items-center space-x-2 bg-zinc-100 text-zinc-900 font-medium px-6 py-3 rounded-full hover:bg-emerald-400 transition-colors duration-200 text-sm"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center space-x-3 text-zinc-400 pl-2">
              <a
                href="https://github.com/sameerwarsi01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sameer-warsi-b85067314/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 10.74V9.93H5.06v9.57h2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <HeroInteractive />
        </div>
      </div>
    </section>
  );
}