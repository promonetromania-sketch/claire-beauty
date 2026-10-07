import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessProfile } from "@/lib/seo/business"
import { radiofrecventaFractionataWhatsappMessage } from "@/lib/content/radiofrecventa-fractionata"

const chips = [
  "Evaluare individuală",
  "Protocol personalizat",
  "Tehnologie profesională",
] as const

const formula = [
  { k: "01", label: "Radiofrecvență" },
  { k: "02", label: "Acțiune controlată pe zona tratată" },
  { k: "03", label: "Remodelarea aspectului pielii" },
] as const

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(radiofrecventaFractionataWhatsappMessage)}`

export function RadiofrecventaFractionataHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0E2B1F]/8 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="min-w-0 animate-fade-in-up">
          <nav aria-label="breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#0E2B1F]/70">
              <li>
                <Link href="/" className="hover:text-[#D4AF37]">
                  Acasă
                </Link>
              </li>
              <li aria-hidden className="text-[#D4AF37]">
                /
              </li>
              <li>
                <span className="text-[#0E2B1F]">Radiofrecvență fracționată</span>
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm sm:tracking-[0.22em]">
            Tehnologie avansată • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-[#0E2B1F] sm:text-5xl lg:text-[3.15rem]">
            Radiofrecvență Fracționată în Craiova
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            Tehnologie utilizată pentru îmbunătățirea aspectului pielii, inclusiv
            în protocoale dedicate cicatricilor, vergeturilor și texturii
            neuniforme.
          </p>

          <ul className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {chips.map((chip) => (
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
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              <Link href="/contact">Programează o evaluare</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-[#D4AF37]/60 bg-white/60 px-8 text-base font-semibold text-[#0E2B1F] hover:bg-[#D4AF37]/10 sm:w-auto"
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
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0E2B1F]/70">
            Indicația și protocolul se stabilesc în funcție de zona tratată și
            particularitățile pielii.
          </p>
        </div>

        <div className="min-w-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium-lg sm:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              aria-hidden
              style={{
                backgroundImage:
                  "radial-gradient(circle, #D4AF37 1px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Principiul serviciului
              </p>
              <p className="mb-6 font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                Energie de radiofrecvență, aplicată controlat.
              </p>
              <ol className="space-y-3">
                {formula.map((item) => (
                  <li
                    key={item.k}
                    className="flex min-h-11 items-center gap-4 rounded-2xl border border-[#D4AF37]/25 bg-white/5 px-4 py-3"
                  >
                    <span className="font-serif text-sm tracking-[0.16em] text-[#D4AF37]">
                      {item.k}
                    </span>
                    <span className="text-sm font-medium sm:text-base">{item.label}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-[#FFF9F2]/75">
                Fotografiile aparatului din salon vor fi publicate după
                confirmarea modelului. Nu afișăm un dispozitiv care nu este
                documentat în materialele Claire Beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
