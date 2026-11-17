export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-16 md:py-20">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  )
}
