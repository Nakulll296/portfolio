import { Contact } from '@/components/portfolio/contact'
import { Education } from '@/components/portfolio/education'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteHeader } from '@/components/portfolio/site-header'
import { Skills } from '@/components/portfolio/skills'
import { profile } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            {'© '}
            {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </>
  )
}
