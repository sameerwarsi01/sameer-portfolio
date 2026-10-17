import { Project } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-zinc-800/60 pb-16 group">
      {/* Visual Preview */}
      <div className="lg:col-span-6 aspect-video w-full rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden relative group-hover:border-zinc-700 transition-colors">
        {project.image ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-mono text-zinc-300 flex items-center gap-1">
                View Project <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </span>
            </div>
          </a>
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>{project.index} / {project.title.toLowerCase()}</span>
              <span className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
            <div className="my-auto text-center">
              <h4 className="text-2xl font-light text-zinc-200">{project.title}</h4>
              <p className="text-xs text-zinc-500 font-mono mt-1">{project.tagline}</p>
            </div>
            <div className="text-xs text-zinc-500 font-mono flex justify-between">
              <span>Status: Live</span>
              <span>Production</span>
            </div>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="lg:col-span-6 space-y-4">
        <span className="text-xs font-mono text-emerald-400">{project.category}</span>
        <h3 className="text-2xl font-light text-zinc-100">{project.tagline}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

        <ul className="space-y-1.5 text-sm text-zinc-400 border-l border-zinc-800 pl-4">
          {project.highlights.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-6 pt-3 text-sm">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-200 hover:text-emerald-400">
            Live <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 hover:text-white">
            Source <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </article>
  );
}