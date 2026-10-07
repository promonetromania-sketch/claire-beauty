import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { cicatriciVergeturiWhatsappHref } from "@/lib/content/cicatrici-vergeturi"
import { claireImages } from "@/lib/images/claire-beauty"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Phone } from "lucide-react"

const trustChips = [
  "Evaluare individuală",
  "Procedură cu radiofrecvență",
  "Tratament personalizat",
] as const

const whatsappHref = cicatriciVergeturiWhatsappHref(businessProfile.whatsappUrl)

export function CicatriciVergeturiHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2]">
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0E2B1F]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-14 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="min-w-0 animate-fade-in-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Tratament premium • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-[#0E2B1F] sm:text-5xl lg:text-[3.25rem]">
            Tratament pentru Cicatrici și Vergeturi în Craiova
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            Radiofrecvență pentru îmbunătățirea aspectului vergeturilor,
            cicatricilor post-acnee, cicatricilor postoperatorii și cicatricilor
            după cezariană.
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
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0E2B1F]/70">
            Procedura și numărul orientativ de ședințe se stabilesc în funcție de
            zona și particularitățile pielii.
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-premium-lg sm:aspect-[5/4] lg:aspect-[4/5]">
            <ClaireImage
              {...claireImages.tratamenteCorporaleHero}
              alt="Tratament corporal premium la Claire Beauty Craiova, pentru îngrijirea pielii"
              title="Tratament cicatrici și vergeturi Craiova"
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
