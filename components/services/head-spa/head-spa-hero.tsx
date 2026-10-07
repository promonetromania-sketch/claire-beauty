import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { businessProfile } from "@/lib/seo/business"
import { claireImages } from "@/lib/images/claire-beauty"
import { headSpaOffer, headSpaWhatsappHref } from "@/lib/content/head-spa"

const trustChips = [
  "Ritual premium",
  "Relaxare profundă",
  headSpaOffer.price,
] as const

const whatsappHref = headSpaWhatsappHref(businessProfile.whatsappUrl)

export function HeadSpaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0E2B1F] text-[#FFF9F2]">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.hero}
          alt="Salonul Claire Beauty din Craiova. Fotografia arată atmosfera spațiului, nu o ședință Head Spa."
          title="Atmosfera Claire Beauty Craiova"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2B1F] via-[#0E2B1F]/72 to-[#0E2B1F]/35" />
      </div>

      <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:min-h-[92svh] lg:px-8 lg:pb-20 lg:pt-32">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-[#FFF9F2]/75">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-[#FFF9F2]/80 hover:text-[#D4AF37]">
                  Acasă
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#D4AF37]/70" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/tratamente-faciale-craiova"
                  className="text-[#FFF9F2]/80 hover:text-[#D4AF37]"
                >
                  Tratamente faciale
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#D4AF37]/70" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#FFF9F2]">Head Spa</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37] sm:text-sm">
          Head Spa • Claire Beauty Craiova
        </p>
        <h1 className="max-w-4xl font-serif text-[2rem] font-semibold leading-[1.15] text-[#FFF9F2] sm:text-5xl lg:text-6xl">
          Head Spa în Craiova – Ritual Premium pentru Scalp și Relaxare
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#FFF9F2]/88 sm:text-lg">
          O experiență dedicată scalpului, părului și relaxării, într-un ritual
          realizat pas cu pas în atmosfera Claire Beauty.
        </p>
        <p className="mt-6 max-w-xl font-serif text-xl leading-snug tracking-wide text-[#F0D78C] sm:text-2xl">
          Închide ochii.
          <span className="mt-1 block">Relaxează-te.</span>
          <span className="mt-1 block">Lasă ritualul să înceapă.</span>
        </p>

        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {trustChips.map((chip) => (
            <li
              key={chip}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#0E2B1F]/45 px-4 py-2 text-sm font-medium text-[#FFF9F2] backdrop-blur-sm"
            >
              <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/80 bg-[#D4AF37] px-8 py-3 text-center text-sm font-semibold tracking-wide text-[#0E2B1F] transition-colors hover:bg-[#F0D78C] sm:w-auto"
          >
            Programează Head Spa
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#FFF9F2]/35 bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF9F2] transition-colors hover:border-[#D4AF37] hover:text-[#F0D78C] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Întreabă pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
