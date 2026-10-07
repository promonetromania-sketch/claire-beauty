import Link from "next/link"
import { Check, MessageCircle, Phone } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { Button } from "@/components/ui/button"
import { businessProfile } from "@/lib/seo/business"
import { vergeturiDupaSarcinaWhatsappMessage } from "@/lib/content/vergeturi-dupa-sarcina"
import { claireImages } from "@/lib/images/claire-beauty"

const trustChips = [
  "Evaluare individuală",
  "Protocol personalizat",
  "Așteptări realiste",
] as const

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(vergeturiDupaSarcinaWhatsappMessage)}`

export function VergeturiDupaSarcinaHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0E2B1F]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="min-w-0">
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
                  href="/cicatrici-vergeturi-craiova"
                  className="inline-flex min-h-11 items-center hover:text-[#D4AF37]"
                >
                  Cicatrici și vergeturi
                </Link>
              </li>
              <li aria-hidden className="text-[#D4AF37]">
                /
              </li>
              <li>
                <span className="text-[#0E2B1F]">Vergeturi după sarcină</span>
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#D4AF37] sm:text-sm sm:tracking-[0.18em]">
            Vergeturi după sarcină • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-[1.65rem] font-semibold leading-tight text-[#0E2B1F] sm:text-4xl lg:text-5xl">
            Tratament pentru Vergeturi după Sarcină în Craiova
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            Proceduri personalizate pentru îmbunătățirea aspectului vergeturilor
            apărute în timpul sau după sarcină, în funcție de vechimea, culoarea
            și caracteristicile pielii.
          </p>

          <div className="mb-6 max-w-xl rounded-[1.5rem] border border-[#D4AF37]/35 bg-white/80 px-5 py-4">
            <p className="font-serif text-lg font-semibold uppercase leading-snug tracking-[0.03em] text-[#0E2B1F] sm:text-2xl">
              Vergeturile se pot schimba în timp.
              <span className="mt-1 block">
                Și tratamentul trebuie ales în funcție de cum arată acum.
              </span>
            </p>
          </div>

          <ul className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-white/70 px-4 py-2 text-sm font-medium text-[#0E2B1F]"
              >
                <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
                {chip}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-sm font-semibold uppercase tracking-[0.04em] text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto sm:text-base"
            >
              <a
                href={`tel:${businessProfile.telephone}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" aria-hidden />
                <span>Programează o evaluare</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-[#D4AF37]/60 bg-white/60 px-8 text-sm font-semibold uppercase tracking-[0.04em] text-[#0E2B1F] hover:bg-[#D4AF37]/10 sm:w-auto sm:text-base"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                <span>Întreabă pe WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-premium-lg sm:aspect-[5/4] lg:aspect-[4/5]">
            <ClaireImage
              {...claireImages.tratamenteCorporaleHero}
              alt="Îngrijire corporală discretă la Claire Beauty Craiova, cu silueta acoperită într-un cadru calm"
              title="Tratament pentru vergeturi după sarcină la Claire Beauty Craiova"
              objectPosition="center 55%"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
