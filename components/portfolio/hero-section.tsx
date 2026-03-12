"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "React.js Specialist",
  "MERN Stack Developer",
  "Full-Stack Developer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative flex max-h-screen items-center overflow-hidden px-6 py-20 md:py-14 md:mt-18">
      {/* Grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT SIDE - PROFILE IMAGE + STATUS */}
        <div className="flex flex-col items-center">
          <div className="relative h-45 w-45 md:h-65 md:w-65">
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-glow-pulse" />
            <div className="absolute -inset-2 rounded-full bg-primary/10 blur-lg" />

            <Image
              src="/images/profile.png"
              alt="Ajay Maharia"
              width={220}
              height={220}
              className="relative rounded-full object-cover object-top h-full w-full border-2 border-primary/30"
              priority
            />
          </div>

          {/* Available for work badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 glass">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              Available for work
            </span>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary neon-text">Ajay Maharia</span>
          </h1>

          <div className="mt-6 flex items-center justify-center gap-1 font-mono text-lg text-muted-foreground md:justify-start md:text-xl">
            <span className="text-primary">{">"}</span>
            <span>{text}</span>
            <span className="ml-1 inline-block h-5 w-0.5 bg-primary animate-glow-pulse" />
          </div>

          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            I’m a MERN Stack Developer with hands-on experience building
            full-stack, real-world web applications. I specialize in the
            MongoDB, Express.js, React.js, and Node.js ecosystem, focusing on
            scalable backends and high-performance UI.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-mono font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_var(--neon-glow)]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-mono text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 justify-center md:justify-start">
            {[
              {
                icon: Github,
                href: "https://github.com/AJAY2K0",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ajaymaharia/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:ajaymaheria01@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
