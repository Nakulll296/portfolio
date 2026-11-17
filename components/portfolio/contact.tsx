import { Mail, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Section } from './section'
import { SocialLinks } from './social-links'

export function Contact() {
  return (
    <Section id="contact" index="05" title="Get in touch">
      <div className="rounded-lg border border-border bg-card p-8 md:p-12">
        <p className="max-w-xl text-pretty text-xl font-medium md:text-2xl">
          I&apos;m looking for software engineering and AI/ML opportunities. Let&apos;s build
          something together.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Phone className="size-4" aria-hidden="true" />
            {profile.phone}
          </a>
          <SocialLinks />
        </div>
      </div>
    </Section>
  )
}
