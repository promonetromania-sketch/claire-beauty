import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Tratamente personalizate pentru fiecare client",
  "Echipamente de ultimă generație",
  "Atmosferă relaxantă și prietenoasă",
  "Rezultate vizibile de la prima ședință",
]

export function AboutSection() {
  return (
    <section id="despre" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-premium-lg">
              <Image
                src="/images/logo.jpg"
                alt="Ana Savovici - Claire's Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Despre Noi
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Bine ai venit la
              <span className="text-gold-gradient"> {"Claire's Studio"}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Suntem un salon premium de body spa, dedicat să oferim servicii de
              înfrumusețare și relaxare la cele mai înalte standarde. Cu o
              experiență de peste 10 ani în domeniu, Ana Savovici și echipa ei
              îți promit o experiență de neuitat.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La {"Claire's Studio"}, credem că fiecare persoană merită să se
              simtă frumoasă și încrezătoare. De aceea, fiecare tratament este
              adaptat nevoilor tale specifice, folosind doar cele mai bune
              produse și echipamente din industrie.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <Link href="/contact">
                Contactează-ne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
