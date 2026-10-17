import { projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/60">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
        <span>02 / Selected Work</span>
        <span>Curated Systems</span>
      </div>

      <div className="space-y-3 mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight">
          Ideas, put <br />
          <span className="font-editorial italic font-normal text-zinc-400">into production.</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base font-light max-w-lg">
          Production-ready web applications, end-to-end architectures, and scalable tools.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}