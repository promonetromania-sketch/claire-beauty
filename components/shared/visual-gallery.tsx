import { ClaireImage } from "@/components/ui/claire-image"
import type { ClaireImageMeta } from "@/lib/images/claire-beauty"
import { cn } from "@/lib/utils"

type VisualGalleryProps = {
  images: readonly ClaireImageMeta[]
  eyebrow?: string
  title?: string
  description?: string
  className?: string
  columns?: 2 | 3 | 4
}

export function VisualGallery({
  images,
  eyebrow,
  title,
  description,
  className,
  columns = 3,
}: VisualGalleryProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl mx-auto text-center">
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        )}

        <div className={cn("grid gap-4 sm:gap-6", gridClass)}>
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium"
            >
              <ClaireImage
                {...image}
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
