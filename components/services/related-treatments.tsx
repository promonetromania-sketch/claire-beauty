import Link from "next/link"

export type RelatedTreatment = {
  href: string
  title: string
  text: string
}

export function RelatedTreatments({
  eyebrow = "Tratamente asociate",
  title = "Alte tratamente care te-ar putea interesa",
  description,
  items,
}: {
  eyebrow?: string
  title?: string
  description?: string
  items: RelatedTreatment[]
}) {
  return (
    <section className="bg-[#FFF9F2] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            {eyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium transition-colors hover:border-[#D4AF37]/50"
            >
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
