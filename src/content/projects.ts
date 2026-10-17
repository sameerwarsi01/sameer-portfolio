export interface Project {
  index: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Search&Track",
    category: "Full-Stack Application / AI Tool",
    tagline: "AI Resume Parsing & Job Application Pipeline",
    description:
      "An intelligent career tracking platform featuring automated resume skill parsing, ATS compatibility insights, and a stage-by-stage application workflow.",
    highlights: [
      "Engineered automated skill extraction matching candidate resumes with dynamic job criteria.",
      "Built an intuitive Kanban pipeline with persistent status tracking and JWT auth.",
      "Optimized query performance and deployment lifecycle across modern cloud environments.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://job-search-liard-sigma.vercel.app/",
    githubUrl: "https://github.com/sameerwarsi01",
    image: "/projects/Search&Track.webp",
  },
  {
    index: "02",
    title: "Wanderlust",
    category: "Full-Stack Marketplace / Web App",
    tagline: "Full-Featured Travel & Stay Booking Platform",
    description:
      "A complete accommodation rental marketplace inspired by Airbnb, featuring geospatial property search, cloud image uploads, reviews, and secure reservation management.",
    highlights: [
      "Implemented relational schemas with complex filtering and date availability checks.",
      "Integrated secure authentication, role-based authorization, and review workflows.",
      "Configured robust cloud asset pipelines for high-resolution property galleries.",
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    liveUrl: "https://sameer-warsi.onrender.com",
    githubUrl: "https://github.com/sameerwarsi01",
    image: "/projects/wanderlust.webp",
  },
  {
    index: "03",
    title: "TaskFlow",
    category: "SaaS Workspace / Workflow Engine",
    tagline: "Real-time Issue & Task Tracking Platform",
    description:
      "A collaborative workspace management platform featuring Supabase authentication, multi-status issue workflows, priority routing, and real-time team assignment.",
    highlights: [
      "Implemented secure OAuth 2.0 PKCE authentication flow and persistent workspace sessions via Supabase.",
      "Designed dynamic issue pipeline with multi-state filters (Active, Done) and granular task management.",
      "Engineered responsive, high-velocity dashboard with Next.js App Router and optimized Tailwind layouts.",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "REST API"],
    liveUrl: "https://task-management-app-sable-eight.vercel.app",
    githubUrl: "https://github.com/sameerwarsi01",
    image: "/projects/taskflow.webp",
  },
];