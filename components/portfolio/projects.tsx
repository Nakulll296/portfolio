import { projects } from '@/lib/portfolio-data'
import { Section } from './section'

export function Projects() {
  return (
    <Section id="projects" index="01" title="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-primary">{p.subtitle}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">{p.date}</span>
            </div>
            <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary">
                    {'>'}
                  </span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.title} tech stack`}>
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
