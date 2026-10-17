// Capabilities and technical systems breakdown
export default function Toolkit() {
  const domains = [
    {
      category: "01 / Systems & Architecture",
      title: "Backend & Distributed Systems",
      desc: "Designing resilient REST endpoints, relational schemas, auth pipelines, and clean API workflows.",
      stack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "REST APIs"],
    },
    {
      category: "02 / Interfaces & Client State",
      title: "Performant Frontend Engineering",
      desc: "Building accessible, highly responsive layouts with strict state management and subtle motion.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "03 / Tooling & Production",
      title: "DevOps & Core Engineering",
      desc: "Containerized environments, automated Git flows, ATS pipelines, and deployment lifecycles.",
      stack: ["Docker", "Git / GitHub", "C++", "Python", "Vercel", "Render"],
    },
  ];

  return (
    <section id="toolkit" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      {/* Section Header */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        <span>03 / Connected Capabilities</span>
        <span>Toolkit</span>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight">
          Different tools. <br />
          <span className="font-editorial italic font-normal text-zinc-400">
            One connected system.
          </span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light max-w-lg">
          From the reactive interface down to the backend logic and data pipelines.
        </p>
      </div>

      {/* Domain Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 tracking-wider">
                {domain.category}
              </span>
              <h3 className="text-xl font-light text-zinc-100">{domain.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{domain.desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
              {domain.stack.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}