"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sameerwarsibgp786@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/sameer-warsi-b85067314/";
  const githubUrl = "https://github.com/sameerwarsi01";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#080906] text-[#e4e4dd] overflow-hidden">
      
      {/* 1. Precise Natural Sweep Wave Background (Exact Image Overlay Curve Image 35) */}
      <div className="absolute right-0 top-[28%] md:top-[22%] w-[90%] md:w-[75%] max-w-[1400px] h-[340px] opacity-45 pointer-events-none select-none z-0">
        <Image
          src="/generated/contact-wave.svg"
          alt="Contact generative wave sweep"
          fill
          unoptimized
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 pt-24">
        
        {/* Top meta data labels */}
        <div className="flex justify-between items-center font-mono text-[11px] text-[#787a70] pb-10">
          <span>Have something in mind?</span>
          <a href={`mailto:${email}`} className="flex items-center gap-2.5 hover:text-[#c8e98a] transition-colors group">
            <span>Let&apos;s talk</span>
            <span className="text-xl text-[#c8e98a] leading-none font-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>

        {/* Display headline section */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-5xl sm:text-7xl lg:text-[96px] font-medium tracking-tight text-[#f5f5f0] leading-[1.02]">
            Let&apos;s build <br />
            <span className="text-[#c8e98a]">something useful.</span>
          </h2>
        </div>

        {/* Supporting description */}
        <div className="pt-10 pb-6 text-sm sm:text-base text-[#9ea094] leading-relaxed max-w-md z-10">
          <p>Tell me what you&apos;re building,</p>
          <p>what you need, and your timeline.</p>
        </div>

        {/* Large email link and dynamic status toggle */}
        <div className="pt-4 pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#181914]">
          <div className="z-10">
            <a
              href={`mailto:${email}`}
              className="group inline-block text-2xl sm:text-4xl lg:text-[44px] font-mono tracking-tight text-[#f5f5f0] hover:text-[#c8e98a] transition-all border-b border-transparent hover:border-b-[#c8e98a]"
            >
              {email}
            </a>

            {/* Click to Copy Interface */}
            <div className="pt-4 font-mono text-xs flex items-center gap-2 select-none">
              <button
                onClick={handleCopy}
                className="text-[#787a70] hover:text-[#d8dad0] transition-colors cursor-pointer"
              >
                Copy address ↗
              </button>
              {copied && (
                <span className="text-[#c8e98a] transition-all animate-pulse">
                  Copied to clipboard.
                </span>
              )}
            </div>
          </div>

          {/* Connected Profiles List */}
          <div className="flex items-center gap-6 font-mono text-xs text-[#787a70] pb-2 z-10">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#c8e98a] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#c8e98a] transition-colors"
            >
              <span className="w-4 h-4 border border-current rounded-[2px] flex items-center justify-center text-[10px] font-bold">in</span>
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-[#c8e98a] transition-colors"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* 2. Brand Sub-Footer Overlay Group */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 select-none">
          
          {/* Brand mark, roles & offset anchor */}
          <div className="flex items-baseline gap-5">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f5f0]">
              Sameer<span className="text-[#c8e98a] font-normal">+</span>
            </h3>
            <div className="space-y-1 font-mono text-[11px] text-[#787a70]">
              <p>Full-stack / creative developer</p>
              <button
                onClick={scrollToTop}
                className="hover:text-[#c8e98a] transition-colors text-left flex items-center gap-1 cursor-pointer"
              >
                Back to top <span className="text-[#c8e98a]">↑</span>
              </button>
            </div>
          </div>

          {/* Command trigger signature */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#55574e]">
            <span>Quick navigation</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#10120c] border border-[#212318] text-[#8e9084] text-[10.5px]">
              ⌘ K
            </kbd>
          </div>

          {/* Legal copyrights */}
          <div className="font-mono text-xs text-[#787a70]">
            © {new Date().getFullYear()} Sameer
          </div>

        </div>

      </div>
    </footer>
  );
}