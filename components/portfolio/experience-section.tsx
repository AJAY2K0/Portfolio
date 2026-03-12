"use client"

import { SectionHeader } from "./about-section"

const experiences = [
  {
    role: "Software Developer",
    company: "Freelance",
    location: "New Delhi, India",
    period: "Oct 2025 - Present",
    description:
      "Developing multiple web apps using React.js & Node.js with secure REST APIs and role-based authentication. Building responsive and interactive UIs, improving usability and cross-device experience. Implementing modern front-end practices and deploying on Vercel and Netlify.",
    tags: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "Responsive Design", "Vercel", "GraphQL", "Netlify"],
  },
  {
    role: "Full Stack Web Developer",
    company: "Unified Mentor Pvt Ltd",
    location: "Gurugram, Haryana",
    period: "Mar 2025 - May 2025",
    description:
      "Built a React.js-based Quiz Application as part of internship work. Developed reusable UI components and managed application state using React Hooks. Implemented responsive layouts using HTML5 and Tailwind CSS for cross-device compatibility.",
    tags: ["HTML5", "Tailwind CSS", "React.js", "React Hooks", "TypeScript", "Node.js", "RESTful API", "MongoDB", "JWT", "GraphQL"],
  },
]

const education = [
  {
    degree: "MCA (Master of Computer Application)",
    institution: "AMC Engineering College, Bangalore",
    period: "2022 - 2024",
    score: "Percentage: 82.18%",
  },
  {
    degree: "B.Sc. (Bachelor of Science)",
    institution: "Lal Bahadur Shastri PG College, Jaipur",
    period: "2017 - 2020",
    score: "",
  },
]

const certifications = [
  "AWS Job Roles in Cloud - Amazon Web Services",
  "React.JS Developer - One Roadmap Skill Certification",
  "Programming in Java - NPTEL (IIT Kharagpur)",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="04" title="Experience" />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-sm p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_15px_var(--neon-glow-dim)]">
                    <span className="mb-1 inline-block font-mono text-xs text-primary">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="mb-1 font-mono text-sm text-muted-foreground">{exp.company}</p>
                    <p className="mb-3 font-mono text-xs text-muted-foreground/70">{exp.location}</p>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-border px-2 py-0.5 text-xs font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {"Education"}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="glass rounded-sm p-6 transition-all hover:border-primary/30"
              >
                <span className="mb-1 inline-block font-mono text-xs text-primary">{edu.period}</span>
                <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                {edu.score && (
                  <p className="mt-2 text-xs font-mono text-primary">{edu.score}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {"Certifications"}
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-sm border border-border px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
