import { experience } from '@/lib/portfolio-data'
import { Section } from './section'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience & Achievement">
      <article className="rounded-lg border border-border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-sm text-primary">
              {experience.org} · {experience.location}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{experience.date}</span>
        </div>
        <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {experience.points.map((pt) => (
            <li key={pt} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
