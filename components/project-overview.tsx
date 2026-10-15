export type ProjectOverviewItem = {
  title: string
  content: string
}

type ProjectOverviewProps = {
  title: string
  items: ProjectOverviewItem[]
}

export function ProjectOverview({ title, items }: ProjectOverviewProps) {
  return (
    <section className="mb-12 md:mb-24">
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground md:mb-12 md:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-border/70 bg-white px-4 py-5 md:p-6"
          >
            <h3 className="mb-2 text-base font-bold text-foreground md:mb-3 md:text-lg">
              {item.title}
            </h3>
            <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
