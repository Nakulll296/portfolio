import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SocialLinks } from './social-links'

const stats = [
  { value: '10,000+', label: 'Monte Carlo simulations run' },
  { value: '<200ms', label: 'API response time shipped' },
  { value: '4', label: 'AI & full-stack projects' },
]

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 md:pt-28 md:pb-20">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        Open to SDE & AI/ML roles
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        Hi, I&apos;m {profile.name}.
        <span className="block text-muted-foreground">
          I build AI-driven products, end to end.
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {profile.about}
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4" aria-hidden="true" />
        {profile.location}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
        >
          <Mail className="size-4" aria-hidden="true" />
          Email me
        </a>
        <SocialLinks />
      </div>

      <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 bg-card p-5">
            <dt className="text-sm text-muted-foreground">{s.label}</dt>
            <dd className="order-first font-mono text-2xl font-semibold text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
