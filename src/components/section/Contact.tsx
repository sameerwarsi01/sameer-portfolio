import { ArrowUpRight } from "lucide-react";

// Direct contact links and footer
export default function Contact() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/sameerwarsi01" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sameer-warsi-b85067314/" },
    { name: "LeetCode", href: "https://leetcode.com/u/ssameer_warsi_211/" },
  ];

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        <span>05 / Let&apos;s Connect</span>
        <span>Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-zinc-800/60">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-zinc-100 tracking-tight leading-tight">
            Let&apos;s build <br />
            <span className="font-editorial italic font-normal text-zinc-400">
              something resilient.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-md pt-2">
            Open to software engineering roles, full-stack opportunities, and technical projects.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Direct Email</span>
            <div>
              <a
                href="mailto:contact@sameer.dev"
                className="text-xl sm:text-2xl text-emerald-400 hover:text-emerald-300 font-mono tracking-tight transition-colors"
              >
                contact@sameer.dev
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
              >
                {link.name} <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-mono text-zinc-500 gap-4">
        <span>© 2026 Sameer Warsi. All rights reserved.</span>
        <a href="#" className="hover:text-zinc-300 transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}