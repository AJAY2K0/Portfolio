"use client"

import { Code2, Server, Database, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="01" title="About Me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Left - bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {"I'm a passionate MERN Stack Developer based in New Delhi, specializing in building scalable, full-stack web applications. I have hands-on experience across the entire MongoDB, Express.js, React.js, and Node.js ecosystem, focusing on seamless end-to-end integration."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"From architecting secure Node.js APIs and MongoDB schemas to crafting responsive React interfaces with Tailwind CSS, I deliver production-grade solutions. My expertise includes JWT authentication, Redux state management, and building high-performance dashboards that balance complex logic with clean, user-centric design."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"An MCA graduate from AMC Engineering College, Bangalore, I am constantly evolving my technical stack and actively seeking MERN Stack / Full-Stack Developer opportunities to build impactful digital products."}
            </p>

            {/* Terminal-style stats */}
            <div className="mt-8 rounded-sm border border-border bg-secondary/50 p-4 font-mono text-sm">
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="ml-2">terminal</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  <span className="text-primary">$</span> cat ajay.json
                </p>
                <p className="text-foreground">
                  {"{"} <span className="text-primary">&quot;location&quot;</span>: &quot;New Delhi, India&quot;,
                </p>
                <p className="text-foreground">
                  {"  "}<span className="text-primary">&quot;education&quot;</span>: &quot;MCA - AMC Engineering College, Bangalore&quot;,
                </p>
                <p className="text-foreground">
                  {"  "}<span className="text-primary">&quot;focus&quot;</span>: &quot;React.js &amp; MERN Stack&quot;,
                </p>
                <p className="text-foreground">
                  {"  "}<span className="text-primary">&quot;status&quot;</span>: &quot;Open to opportunities&quot; {"}"}
                </p>
              </div>
            </div>
          </div>

          {/* Right - quick cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[
              { icon: Code2, title: "Frontend", desc: "React.js, Redux, Context API, Tailwind CSS, HTML5" },
              { icon: Server, title: "Backend", desc: "Node.js, Express.js, RESTful APIs, JWT Auth" },
              { icon: Database, title: "Database", desc: "MongoDB, MySQL, Mongoose" },
              { icon: GraduationCap, title: "Education", desc: "MCA - AMC Engineering College, Bangalore" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group glass rounded-sm p-4 transition-all hover:border-primary/30 hover:shadow-[0_0_15px_var(--neon-glow-dim)]"
              >
                <Icon className="mb-3 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                <h3 className="text-sm font-mono font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{label}.</span>
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <div className="hidden flex-1 sm:block">
        <div className="h-px bg-border" />
      </div>
    </div>
  )
}
