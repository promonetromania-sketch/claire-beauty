import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Phone,
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

const trustBadgesDesktop = [
  { icon: Star, label: "Rating Google" },
  { icon: MapPin, label: "Craiova" },
  { icon: UserRound, label: "Specialist dedicat" },
  { icon: Clock, label: "Program flexibil" },
] as const

const googleReviewsBadgeMobile = `${businessProfile.googleReviews.rating.toFixed(1)} Google Reviews`

const trustBadgesMobile = [
  { icon: Star, label: googleReviewsBadgeMobile },
  { icon: MapPin, label: "Craiova" },
  { icon: UserRound, label: "1.000+ Cliente mulțumite" },
  { icon: Clock, label: "Program flexibil" },
] as const

function TrustBadges({
  badges,
  className,
}: {
  badges: readonly { icon: typeof Star; label: string }[]
  className?: string
}) {
  return (
    <div className={className}>
      {badges.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground/90 backdrop-blur-sm sm:text-sm"
        >
          <Icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          {label}
        </span>
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden max-md:min-h-[92vh] max-md:items-start">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.hero}
          fill
          priority
          sizes="100vw"
          className="max-md:[object-position:center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/68 to-primary/42 max-md:from-primary/78 max-md:via-primary/58 max-md:to-primary/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/58 via-transparent to-transparent max-md:from-primary/48" />
        <div
          className="pointer-events-none absolute inset-0 hidden max-md:block bg-[#FFF9F2]/10"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8 max-md:pb-24 max-md:pt-32">
        <div className="max-w-3xl max-md:mt-14">
          <TrustBadges
            badges={trustBadgesDesktop}
            className="mb-6 hidden flex-wrap items-center gap-3 md:inline-flex"
          />
          <TrustBadges
            badges={trustBadgesMobile}
            className="mb-6 inline-flex flex-wrap items-center gap-2 md:hidden"
          />

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-4 py-2 backdrop-blur-sm">
            <Star
              className="h-4 w-4 text-accent"
              fill="currentColor"
              aria-hidden
            />
            <span className="text-sm font-medium text-primary-foreground">
              Salon Premium de Body Spa · Craiova
            </span>
          </div>

          <h1 className="mb-6 hidden font-serif text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl md:block">
            Remodelare corporală, tratamente faciale și masaj premium în
            Craiova
          </h1>
          <h1 className="mb-5 font-serif text-[1.65rem] font-semibold leading-snug text-primary-foreground max-[380px]:text-2xl sm:text-[1.85rem] md:hidden">
            Masaj, remodelare corporală și tratamente faciale premium în Craiova
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl max-md:mb-6 max-md:text-base">
            Rezultate personalizate pentru ten, siluetă și relaxare — protocoale
            adaptate fiecărei cliente, într-un spațiu elegant Claire Beauty.
          </p>

          <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 max-md:mb-8 max-md:gap-2.5">
            {heroBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-sm text-primary-foreground/92 sm:text-base max-md:text-[0.9rem]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row max-md:gap-3">
            <Button
              asChild
              size="lg"
              className="premium-btn-primary rounded-full px-8 text-base font-medium max-md:h-11 max-md:text-sm"
            >
              <a href={`tel:${businessProfile.telephone}`}>
                Programează-te acum
                <ArrowRight className="ml-2 h-5 w-5 max-md:h-4 max-md:w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent px-8 text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 max-md:h-11 max-md:text-sm"
            >
              <Link href="#servicii-populare">Vezi serviciile</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary-foreground/10 bg-primary/35 px-4 py-3.5 pb-[calc(0.875rem+4.25rem)] backdrop-blur-sm md:hidden">
        <a
          href={`tel:${businessProfile.telephone}`}
          className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/8 px-5 py-2.5 text-sm font-medium text-primary-foreground/95 transition-colors hover:border-accent/40 hover:bg-primary-foreground/12"
        >
          <Phone className="h-4 w-4 text-accent" aria-hidden />
          Solicită Rapel
        </a>
      </div>
    </section>
  )
}
