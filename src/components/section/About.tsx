// Profile, engineering philosophy, and focus areas
export default function About() {
  const details = [
    { label: "Focus", value: "Full-Stack Web Architecture & Performance" },
    { label: "Approach", value: "Design, build, benchmark, refine" },
    { label: "Current Status", value: "Available for full-time roles & contracts" },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        <span>04 / Profile</span>
        <span>About</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight leading-tight">
            Built on <br />
            <span className="font-editorial italic font-normal text-zinc-400">
              engineering discipline.
            </span>
          </h2>
          <p className="text-xs font-mono text-zinc-500">
            Finding structure in complex systems
          </p>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed">
            I enjoy the precise point where an architectural idea turns into an application that
            users can rely on.
          </p>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            My workflow combines structured backend APIs with responsive, type-safe interfaces.
            I focus heavily on clean database indexing, secure auth layers, and keeping bundle sizes minimal.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800/60">
            {details.map((item, i) => (
              <div key={i} className="space-y-1">
                <dt className="text-xs font-mono text-emerald-400 tracking-wider uppercase">
                  {item.label}
                </dt>
                <dd className="text-sm text-zinc-300 font-light">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}