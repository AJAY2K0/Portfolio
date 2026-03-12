"use client"

import { ExternalLink, Github } from "lucide-react"
import { SectionHeader } from "./about-section"

const projects = [
  {
    title: "Workflow Manager",
    description:
      "A full-stack workflow management application to streamline task assignment and tracking between admins and employees. Features JWT-based authentication, role-based access control, real-time task status updates, and dashboard views for improved workflow visibility.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/AJAY2K0/Workflow-Manager.git",
    live: "https://justcool-workflow.vercel.app/",
    featured: true,
  },
  {
    title: "QuizYatra",
    description:
      "A responsive quiz application with 1000+ questions across 10+ categories and custom quiz lengths. Features timed question progression, real-time answer feedback, and a performance dashboard with live accuracy and completion statistics. Optimized with 60% reduced re-renders.",
    tags: ["React.js", "React Hooks", "Tailwind CSS", "State Management"],
    github: "https://github.com/AJAY2K0/Quiz_Web_App.git",
    live: "https://quizyatra.vercel.app/",
    featured: true,
  },
  {
    title: "Investment Calculator",
    description:
      "A React-based investment calculator that helps users plan and visualize their financial growth with interactive inputs and real-time calculation updates.",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/AJAY2K0/React_Investment_Calculator.git",
    live: "#",
    featured: false,
  },
  {
    title: "PlacePicker",
    description:
      "An interactive application for picking and managing favorite places with location-based sorting and persistent storage capabilities.",
    tags: ["React.js", "Geolocation API", "LocalStorage"],
    github: "https://github.com/AJAY2K0/PlacePicker.git",
    live: "#",
    featured: false,
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="03" title="Featured Projects" />

        <div className="mt-16 space-y-12">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <div
                key={project.title}
                className="group glass rounded-sm overflow-hidden transition-all hover:border-primary/30 hover:shadow-[0_0_25px_var(--neon-glow-dim)]"
              >
                <div className="p-6 md:p-8">
                  <span className="mb-2 inline-block font-mono text-xs text-primary uppercase tracking-widest">
                    Featured Project
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 max-w-2xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <h3 className="mt-20 text-center font-mono text-lg text-foreground">
          Other Noteworthy Projects
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="group glass rounded-sm p-6 transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_15px_var(--neon-glow-dim)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-2xl text-primary">{"{ }"}</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
