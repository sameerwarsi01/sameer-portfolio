"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { ArrowUpRight } from "lucide-react";

// Global keyboard shortcut navigation dialog
export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-[#121316] shadow-2xl overflow-hidden font-sans">
        <Command label="Navigation Command Menu">
          <div className="flex items-center px-4 border-b border-zinc-800">
            <Command.Input
              placeholder="Type a command or jump to section..."
              className="w-full py-3.5 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
            <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded">
              ESC
            </span>
          </div>

          <Command.List className="max-h-72 overflow-y-auto p-2 text-sm text-zinc-300">
            <Command.Empty className="py-6 text-center text-xs text-zinc-500">
              No matching commands found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-mono text-zinc-500 px-2 py-1.5">
              <Command.Item
                onSelect={() => navigateTo("work")}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>Jump to Selected Work</span>
                <span className="text-xs text-zinc-500">#work</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("toolkit")}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>Jump to Toolkit</span>
                <span className="text-xs text-zinc-500">#toolkit</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("about")}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>Jump to Profile & About</span>
                <span className="text-xs text-zinc-500">#about</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigateTo("contact")}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>Jump to Contact</span>
                <span className="text-xs text-zinc-500">#contact</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="External Links" className="text-xs font-mono text-zinc-500 px-2 py-1.5 mt-2">
              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.open("https://github.com/sameerwarsi01", "_blank");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.open("https://www.linkedin.com/in/sameer-warsi-b85067314/", "_blank");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setOpen(false);
                  window.open("https://leetcode.com/u/ssameer_warsi_211/", "_blank");
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-zinc-800/80 hover:text-white"
              >
                <span>LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2 bg-zinc-950/60 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            <span>Navigation shortcut</span>
            <span>Esc to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}