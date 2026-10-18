export interface ProjectItem {
  id: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  footerMeta: string;
  stack: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  liveUrl?: string;
  repoUrl: string;
  imageOnLeft: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    tag: "01 / sameer / portfolio",
    category: "Personal website / Creative development",
    title: "A space for curiosity.",
    description:
      "A portfolio that brings together the interfaces I build and the systems I like to explore.",
    bullets: [
      "A procedural cube with exact layer turns and a lightweight static alternative.",
      "Original Python-generated artwork, responsive layouts and four playable experiments.",
    ],
    footerMeta: "Independent project · You’re exploring it now.",
    stack: "Next.js / TypeScript / Tailwind CSS",
    imageSrc: "/projects/portfolio.png",
    imageAlt: "Sameer Portfolio Hero Preview",
    caption: "An interface with a little personality.",
    liveUrl: "#",
    repoUrl: "https://github.com/sameerwarsi01/sameer-portfolio",
    imageOnLeft: true,
  },
  {
    id: "02",
    tag: "02 / search & track",
    category: "Developer tool / Full-Stack Platform",
    title: "Tracking pipelines without friction.",
    description:
      "Managing job hunt pipelines can quickly become scattered across spreadsheets. Search & Track centralizes application workflows with smart parsing and pipeline analytics.",
    bullets: [
      "Built-in ATS resume skill parsing to assess relevance before applying.",
      "A drag-and-drop Kanban interface keeps interview stages organized in real time.",
    ],
    footerMeta: "Independent project · Full-stack application architecture.",
    stack: "React / Node.js / Express / MongoDB / Tailwind CSS",
    imageSrc: "/projects/Search&Track.webp",
    imageAlt: "Search and Track Platform Preview",
    caption: "From application tracking to interview insight.",
    liveUrl: "#",
    repoUrl: "https://github.com/sameerwarsi01",
    imageOnLeft: false,
  },
  {
    id: "03",
    tag: "03 / wanderlust / travel marketplace",
    category: "Full-Stack Web Application / Hospitality Platform",
    title: "Wanderlust: Curated Stays & Experiences.",
    description:
      "A full-featured travel accommodations marketplace built to provide seamless listing discovery, verified reservations, and detailed property showcases.",
    bullets: [
      "Dynamic search, category filters, and interactive Mapbox location coordinates.",
      "Full CRUD operations with secure authentication, cloud image uploads, and reviews.",
    ],
    footerMeta: "Independent project · Production-grade MERN architecture.",
    stack: "Node.js / Express / MongoDB / Bootstrap / Cloudinary",
    imageSrc: "/projects/wanderlust.webp",
    imageAlt: "Wanderlust Travel Marketplace Preview",
    caption: "A comprehensive listing and booking architecture.",
    liveUrl: "#",
    repoUrl: "https://github.com/sameerwarsi01/Wanderlust.git",
    imageOnLeft: true,
  },
  {
    id: "04",
    tag: "04 / taskflow / task management",
    category: "Productivity system / Task Architecture",
    title: "TaskFlow: Frictionless Task Execution.",
    description:
      "A focused task management interface engineered to streamline daily task lifecycles, project milestones, and workflow prioritization.",
    bullets: [
      "Intuitive task creation, priority badges, and deadline status indicators.",
      "Optimized client state updates for instantaneous responsiveness and progress monitoring.",
    ],
    footerMeta: "Independent project · Modern web application.",
    stack: "React / TypeScript / Tailwind CSS / Node.js",
    imageSrc: "/projects/taskflow.webp",
    imageAlt: "TaskFlow Management Application Preview",
    caption: "A structured workflow for productive execution.",
    liveUrl: "#",
    repoUrl: "https://github.com/sameerwarsi01/task-management-app.git",
    imageOnLeft: false, // Right side frame Osaid ke screenshot ki tarah
  },
];