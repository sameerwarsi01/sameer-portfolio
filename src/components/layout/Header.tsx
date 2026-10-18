"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScroll > 0) {
        setScrollProgress((scrollY / totalScroll) * 100);
      }

      setIsScrolled(scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Server render aur client hydration ko identical rakhne ke liye safe check
  const scrolled = mounted && isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center">
      <div
        className={`w-full transition-all duration-300 ease-out border-b border-[#181914] backdrop-blur-md ${
          scrolled
            ? "max-w-[1580px] mt-2 rounded-xl bg-[#080906]/90 border border-[#24261d] shadow-lg shadow-black/40"
            : "max-w-[1720px] mt-0 bg-[#080906]/75"
        }`}
      >
        <div
          className={`w-full mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between font-mono text-[11px] transition-all duration-300 ${
            scrolled ? "h-12" : "h-16"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-sans font-medium text-lg tracking-tight text-[#f5f5f0] flex items-center gap-0.5 group"
          >
            <span>s</span>
            <span className="text-[#c8e98a] text-xs font-mono -mt-1 group-hover:rotate-45 transition-transform duration-200">
              +
            </span>
            <span>ameer.</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8 text-[#787a70]">
            <Link href="#work" className="hover:text-[#c8e98a] transition-colors">
              Work
            </Link>
            <Link href="#about" className="hover:text-[#c8e98a] transition-colors">
              About
            </Link>
            <Link href="#games" className="hover:text-[#c8e98a] transition-colors">
              Arcade
            </Link>
            <Link href="#contact" className="hover:text-[#c8e98a] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-[#a8cc72]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8e98a] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8e98a]" />
            </span>
            <span className="hidden sm:inline">available</span>
          </div>
        </div>

        {/* Scroll Progress Line */}
        <div className="w-full h-[1.5px] bg-transparent overflow-hidden">
          <div
            className="h-full bg-[#c8e98a] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </header>
  );
}