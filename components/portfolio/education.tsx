import { Award } from 'lucide-react'
import { certifications, education } from '@/lib/portfolio-data'
import { Section } from './section'

export function Education() {
  return (
    <Section id="education" index="04" title="Education & Certifications">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <ol className="flex flex-col border-l border-border">
          {education.map((e) => (
            <li key={e.school} className="relative pb-8 pl-6 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] size-2.5 rounded-full border-2 border-primary bg-background"
              />
              <p className="font-mono text-xs text-muted-foreground">{e.date}</p>
              <h3 className="mt-1 font-semibold">{e.school}</h3>
              <p className="text-sm text-muted-foreground">
                {e.detail} · {e.location}
              </p>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <Award className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
