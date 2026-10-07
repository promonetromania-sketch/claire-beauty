import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { Button } from "@/components/ui/button"
import { businessProfile } from "@/lib/seo/business"
import { cavitatieWhatsappMessage } from "@/lib/content/cavitatie"
import { claireImages } from "@/lib/images/claire-beauty"

const chips = [
  "Procedură non-invazivă",
  "Protocol personalizat",
  "150 lei / ședință",
] as const

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(cavitatieWhatsappMessage)}`

export function CavitatieHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0E2B1F]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="min-w-0 animate-fade-in-up">
          <nav aria-label="breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#0E2B1F]/70">
              <li>
                <Link href="/" className="inline-flex min-h-11 items-center hover:text-[#D4AF37]">
                  Acasă
                </Link>
              </li>
              <li aria-hidden className="text-[#D4AF37]">
                /
              </li>
              <li>
                <Link
                  href="/tratamente-corporale-craiova"
                  className="inline-flex min-h-11 items-center hover:text-[#D4AF37]"
                >
                  Tratamente corporale
                </Link>
              </li>
              <li aria-hidden className="text-[#D4AF37]">
                /
              </li>
              <li>
                <Link
                  href="/remodelare-corporala-craiova"
                  className="inline-flex min-h-11 items-center hover:text-[#D4AF37]"
                >
                  Remodelare corporală
                </Link>
              </li>
              <li aria-hidden className="text-[#D4AF37]">
                /
              </li>
              <li>
                <span className="text-[#0E2B1F]">Cavitație</span>
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:text-sm sm:tracking-[0.2em]">
            Cavitație corporală • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl lg:text-[2.7rem] lg:leading-[1.15]">
            Cavitație în Craiova – Remodelare Corporală pentru Zone Localizate
          </h1>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            Procedură corporală non-invazivă pentru persoanele care urmăresc
            remodelarea anumitor zone și îmbunătățirea aspectului corporal, în
            cadrul unui protocol stabilit individual.
          </p>

          <p className="mb-6 inline-flex max-w-full items-center rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-4 py-2.5 text-sm font-semibold tracking-[0.08em] text-[#D4AF37] sm:tracking-[0.12em]">
            Remodelare corporală. Nu slăbire generală.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-white px-4 py-2 text-sm font-medium text-[#0E2B1F] shadow-premium"
              >
                <Check className="h-4 w-4 text-[#D4AF37]" aria-hidden />
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold uppercase tracking-[0.06em] text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              <Link href="/contact">Programează cavitație</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-[#0E2B1F]/20 bg-white px-8 text-base font-semibold uppercase tracking-[0.04em] text-[#0E2B1F] hover:border-[#D4AF37] hover:bg-[#FFF9F2] sm:w-auto"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Întreabă pe WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 shadow-premium-lg sm:aspect-[5/4] lg:aspect-[4/5]">
            <ClaireImage
              {...claireImages.remodelareCorporala}
              alt="Procedură corporală la Claire Beauty Craiova"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#0E2B1F]/65">
            Procedură corporală în salonul din Craiova. Fotografia nu înlocuiește
            evaluarea zonei.
          </p>
        </div>
      </div>
    </section>
  )
}
