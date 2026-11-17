import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-primary">~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, '')}
        </a>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-md border border-border px-3 py-1.5 text-sm md:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
