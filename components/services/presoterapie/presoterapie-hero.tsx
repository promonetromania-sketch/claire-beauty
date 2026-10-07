import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import {
  presoterapieDeviceName,
  presoterapiePriceLei,
  presoterapieWhatsappHref,
} from "@/lib/content/presoterapie"

const trustChips = [
  "Procedură non-invazivă",
  "Protocol personalizat",
  `${presoterapiePriceLei} lei / ședință`,
] as const

export function PresoterapieHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0E2B1F]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-14 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
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
                <span className="text-[#0E2B1F]">Presoterapie</span>
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm sm:tracking-[0.22em]">
            Presoterapie • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 max-w-3xl font-serif text-[1.75rem] font-semibold leading-[1.2] text-[#0E2B1F] sm:text-5xl lg:text-[3.15rem] lg:leading-[1.15]">
            Presoterapie în Craiova – Drenaj și Senzație de Picioare Ușoare
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            O procedură corporală realizată cu ajutorul compresiei controlate,
            pentru persoanele care caută o experiență de drenaj, relaxare și
            confort corporal.
          </p>

          <div className="mb-6 max-w-xl rounded-[1.5rem] border border-[#D4AF37]/35 bg-white px-5 py-4 shadow-premium">
            <p className="font-serif text-lg font-semibold uppercase leading-snug tracking-[0.04em] text-[#0E2B1F] sm:text-2xl">
              Compresie controlată.
              <br />
              Relaxare.
              <br />
              Senzație de picioare mai ușoare.
            </p>
          </div>

          <ul className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-white px-4 py-2 text-sm font-medium text-[#0E2B1F]"
              >
                <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
                {chip}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] transition-colors hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              Programează presoterapie
            </Link>
            <a
              href={presoterapieWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 bg-white px-8 text-base font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/10 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium-lg sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              {presoterapieDeviceName}
            </p>
            <p className="mt-6 font-serif text-5xl font-semibold leading-none text-[#FFF9F2] sm:text-6xl">
              {presoterapiePriceLei}
              <span className="ml-2 font-serif text-2xl font-medium text-[#D4AF37] sm:text-3xl">
                lei
              </span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#FFF9F2]/75">
              / ședință
            </p>
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-[#FFF9F2]/90 sm:text-base">
              <li>Compresie controlată, cu manșoane.</li>
              <li>Ședință pasivă: stai relaxată.</li>
              <li>Serviciu separat de drenajul manual și de drenajul postoperator.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
