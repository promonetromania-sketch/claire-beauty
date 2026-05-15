import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  badge?: string
}

export function ServiceHero({
  title,
  subtitle,
  description,
  image,
  badge,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-2xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
              <span className="text-sm font-medium text-accent">{badge}</span>
            </div>
          )}

          {/* Subtitle */}
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            {subtitle}
          </p>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base font-medium"
          >
            <a href="tel:+40757851882" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>Programează-te Acum</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
