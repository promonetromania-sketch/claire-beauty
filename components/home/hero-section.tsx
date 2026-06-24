import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Star,
  UserRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"

const heroBenefits = [
  "Consultație personalizată",
  "Programare rapidă",
  "Aparatură profesională",
  "Tratamente adaptate fiecărei cliente",
]

const trustBadges = [
  { icon: Star, label: "Rating Google" },
  { icon: MapPin, label: "Craiova" },
  { icon: UserRound, label: "Specialist dedicat" },
  { icon: Clock, label: "Program flexibil" },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.hero}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/68 to-primary/42" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/58 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/90 backdrop-blur-sm sm:text-sm"
              >
                <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                {label}
              </span>
            ))}
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-4 py-2 backdrop-blur-sm">
            <Star className="h-4 w-4 text-accent" fill="currentColor" aria-hidden />
            <span className="text-sm font-medium text-primary-foreground">
              Salon Premium de Body Spa · Craiova
            </span>
          </div>

          <h1 className="mb-6 font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            Remodelare corporală, tratamente faciale și masaj premium în
            Craiova
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
            Rezultate personalizate pentru ten, siluetă și relaxare — protocoale
            adaptate fiecărei cliente, într-un spațiu elegant Claire Beauty.
          </p>

          <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-sm text-primary-foreground/92 sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="premium-btn-primary rounded-full px-8 text-base font-medium"
            >
              <a href={`tel:${businessProfile.telephone}`}>
                Programează-te acum
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent px-8 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="#servicii-populare">Vezi serviciile</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
