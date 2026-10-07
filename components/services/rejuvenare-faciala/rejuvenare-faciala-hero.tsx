import Link from "next/link"
import { Check, MessageCircle, Phone } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { businessProfile } from "@/lib/seo/business"
import { rejuvenareFacialaWhatsappHref } from "@/lib/content/rejuvenare-faciala"
import { claireImages } from "@/lib/images/claire-beauty"

const trustChips = [
  "Evaluare individuală",
  "Tratament personalizat",
  "Tehnologii profesionale",
] as const

const whatsappHref = rejuvenareFacialaWhatsappHref(businessProfile.whatsappUrl)

export function RejuvenareFacialaHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0E2B1F]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="min-w-0 animate-fade-in-up">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Acasă</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/tratamente-faciale-craiova">Tratamente faciale</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Rejuvenare facială</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Rejuvenare facială • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-[#0E2B1F] sm:text-5xl lg:text-[3.15rem]">
            Rejuvenare Facială în Craiova
            {" "}
            <span className="mt-2 block text-[1.65rem] font-medium leading-snug sm:text-3xl lg:text-4xl">
              – Tratamente pentru Fermitate și Aspect Revitalizat
            </span>
          </h1>
          <p className="mb-4 max-w-xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            Tratamente personalizate pentru îmbunătățirea fermității, texturii
            și aspectului general al pielii, alese în funcție de nevoile tenului
            tău.
          </p>
          <p className="mb-3 max-w-xl text-sm font-semibold uppercase tracking-[0.14em] text-[#0E2B1F]">
            Nu există un singur tratament potrivit pentru toate tipurile de ten.
          </p>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#0E2B1F]/75">
            Evaluăm obiectivul tău și alegem procedura potrivită dintre
            tehnologiile disponibile la Claire Beauty.
          </p>

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
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              <a href={`tel:${businessProfile.telephone}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden />
                <span>Programează o evaluare</span>
              </a>
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
                className="flex items-center gap-2"
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
              {...claireImages.tratamentFacial3}
              alt="Îngrijire facială la Claire Beauty Craiova, cu piele în lumină naturală de salon"
              title="Rejuvenare facială în Craiova"
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
