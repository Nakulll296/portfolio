import { skills } from '@/lib/portfolio-data'
import { Section } from './section'

export function Skills() {
  return (
    <Section id="skills" index="03" title="Technical Skills">
      <dl className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="flex flex-col gap-3 bg-card p-5">
            <dt className="font-mono text-xs uppercase tracking-wider text-primary">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
