import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Global scan overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="animate-scan-line absolute left-0 h-0.5 w-full bg-primary/5" />
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
