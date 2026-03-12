"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { SectionHeader } from "./about-section"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="relative px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="05" title="Get In Touch" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left - info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!"}
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "ajaymaheria01@gmail.com", href: "mailto:ajaymaheria01@gmail.com" },
                { icon: MapPin, label: "Location", value: "New Delhi, India", href: undefined },
                { icon: Phone, label: "Phone", value: "+91 9358664168", href: "tel:+919358664168" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-secondary/50">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini terminal */}
            <div className="rounded-sm border border-border bg-secondary/50 p-4 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> npx connect-with-ajay
              </p>
              <p className="mt-1 text-foreground">
                {"Initializing connection... "}<span className="text-primary animate-glow-pulse">Ready.</span>
              </p>
            </div>
          </div>

          {/* Right - form */}
          <form onSubmit={handleSubmit} className="glass rounded-sm p-6 md:p-8 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none rounded-sm border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-mono font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_var(--neon-glow)]"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
