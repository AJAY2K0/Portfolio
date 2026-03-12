"use client"

import { SectionHeader } from "./about-section"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 82 },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "JWT Authentication", level: 82 },
      { name: "Context API", level: 88 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 75 },
      { name: "Mongoose", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "AWS (Cloud Basics)", level: 65 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="02" title="Skills & Expertise" />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass rounded-sm p-6 transition-all hover:border-primary/20"
            >
              <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                {`// ${group.category}`}
              </h3>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-mono text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MERN stack highlight */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { letter: "M", name: "MongoDB", color: "text-chart-2" },
            { letter: "E", name: "Express.js", color: "text-muted-foreground" },
            { letter: "R", name: "React", color: "text-primary" },
            { letter: "N", name: "Node.js", color: "text-chart-2" },
          ].map((tech) => (
            <div key={tech.letter} className="group flex flex-col items-center gap-2">
              <span
                className={`font-mono text-5xl font-bold ${tech.color} transition-all group-hover:scale-110 md:text-6xl`}
              >
                {tech.letter}
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
