import { Terminal, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">
        <a href="#" className="flex items-center gap-2 text-primary font-mono text-sm font-bold">
          <Terminal className="h-4 w-4" />
          <span>{"<AM />"}</span>
        </a>

        <div className="flex items-center gap-6">
          {[
            { icon: Github, href: "https://github.com/AJAY2K0", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ajaymaharia/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ajaymaheria01@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-center text-xs font-mono text-muted-foreground">
          {"Designed & Built by Ajay Maharia"}
        </p>
        <p className="text-center text-xs font-mono text-muted-foreground/50">
          {"// MERN Stack Developer Portfolio"}
        </p>
      </div>
    </footer>
  )
}
