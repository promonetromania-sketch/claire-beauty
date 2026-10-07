import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import {
  drenajPostOperatorWhatsappHref,
} from "@/lib/content/drenaj-post-operator"
import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"

const trustChips = [
  "Abordare individuală",
  "Protocol adaptat situației",
  "Programare în Craiova",
]

export function DrenajPostOperatorHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.masajAtmosfera}
          alt="Îngrijire corporală calmă la Claire Beauty Craiova, în context de recuperare"
          title="Drenaj limfatic postoperator în Craiova"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2B1F]/92 via-[#0E2B1F]/80 to-[#0E2B1F]/55" />
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="flex max-w-3xl animate-fade-in-up flex-col rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-premium-lg backdrop-blur-md sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:mb-4 sm:text-sm sm:tracking-[0.22em]">
            Îngrijire postoperatorie • Claire Beauty Craiova
          </p>
          <h1 className="mb-4 font-serif text-[2rem] font-semibold leading-[1.15] text-[#FFF9F2] sm:mb-6 sm:text-5xl sm:leading-tight lg:text-6xl">
            Drenaj Limfatic Postoperator în Craiova
          </h1>
          <p className="mb-4 max-w-2xl text-base leading-relaxed text-[#FFF9F2]/90 sm:text-lg">
            Drenaj limfatic destinat perioadei de recuperare după anumite
            intervenții, realizat în funcție de situația individuală și de
            recomandările primite de la medic.
          </p>

          <div className="order-2 mb-4 rounded-2xl border border-[#D4AF37]/40 bg-[#0E2B1F]/35 px-4 py-3 sm:order-none sm:px-5 sm:py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
              După o intervenție, protocolul contează.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#FFF9F2]/90 sm:text-base">
              Drenajul postoperator nu trebuie tratat ca un masaj corporal
              obișnuit. Înainte de programare este important să știm ce
              intervenție ai avut și recomandările primite pentru perioada de
              recuperare.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#FFF9F2]/12 px-4 text-sm font-medium text-[#FFF9F2] backdrop-blur-sm"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 mb-4 sm:order-none sm:mb-0">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] transition-colors hover:bg-[#0E2B1F]/90 sm:w-auto"
              >
                Programează-te
              </Link>
              <a
                href={drenajPostOperatorWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 bg-[#FFF9F2]/10 px-6 text-center text-base font-semibold text-[#FFF9F2] backdrop-blur-sm transition-colors hover:bg-[#FFF9F2]/20 sm:w-auto sm:px-8"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                Discută cu noi pe WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#FFF9F2]/75">
              Spune-ne ce intervenție ai avut și dacă ai recomandări specifice
              din partea medicului.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
