import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-spa.jpg"
          alt="Claire's Studio Body Spa Craiova"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
            <Star className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-primary-foreground">
              Salon Premium de Body Spa
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
            Descoperă frumusețea
            <span className="block text-gold-gradient">din interior</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
            Îți oferim tratamente premium de înfrumusețare și relaxare în
            inima orașului Craiova. Lasă-ne să avem grijă de tine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base font-medium"
            >
              <a href="tel:+40757851882">
                Programează-te Acum
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium bg-transparent"
            >
              <Link href="/#servicii">
                Vezi Serviciile
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="font-serif text-3xl font-semibold text-accent">10+</p>
              <p className="text-sm text-primary-foreground/70">Ani experiență</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-accent">500+</p>
              <p className="text-sm text-primary-foreground/70">Clienți mulțumiți</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-accent">15+</p>
              <p className="text-sm text-primary-foreground/70">Tratamente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
