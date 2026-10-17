// components/layout/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto backdrop-blur-md bg-[#0c0d0e]/60 border-b border-zinc-800/40">
      {/* Monogram / Logo */}
      <Link
        href="/"
        className="text-lg font-medium tracking-tight text-zinc-100 hover:text-white transition-colors"
      >
        sameer<span className="text-emerald-400 font-serif italic text-xl">.</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8 text-sm text-zinc-400">
        <Link href="#work" className="hover:text-zinc-100 transition-colors">
          Work
        </Link>
        <Link href="#toolkit" className="hover:text-zinc-100 transition-colors">
          Toolkit
        </Link>
        <Link href="#about" className="hover:text-zinc-100 transition-colors">
          About
        </Link>
        <Link href="#contact" className="hover:text-zinc-100 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Live Status Badge */}
      <div className="flex items-center space-x-2 text-xs text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-mono tracking-wide">available for work</span>
      </div>
    </header>
  );
}