import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { hifuCorporalWhatsappMessage } from "@/lib/content/hifu-corporal"
import { claireImages } from "@/lib/images/claire-beauty"
import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const chips = [
  "Tratament corporal",
  "Evaluare individuală",
  "Protocol personalizat",
]

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(hifuCorporalWhatsappMessage)}`

export function HifuCorporalHero() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.hifuCorporal}
          alt="Aplicare HIFU corporal pe coapsă, în salonul Claire Beauty din Craiova"
          objectPosition="center 22%"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2B1F]/92 via-[#0E2B1F]/78 to-[#0E2B1F]/50" />
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-premium-lg backdrop-blur-md sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm sm:tracking-[0.22em]">
            HIFU corporal • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-3xl font-semibold leading-tight text-[#FFF9F2] sm:text-4xl lg:text-5xl">
            HIFU Corporal în Craiova – Fermitate și Tonifierea Aspectului Pielii
          </h1>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-[#FFF9F2]/90 sm:text-lg">
            Tratament corporal cu ultrasunete focalizate, destinat persoanelor
            care urmăresc un aspect mai ferm și mai bine conturat al pielii.
          </p>

          <p className="mb-4 inline-flex max-w-full items-center rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F]/80 px-4 py-2 text-sm font-semibold tracking-[0.14em] text-[#D4AF37] sm:text-base">
            FERMITATE, NU SLĂBIRE.
          </p>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#FFF9F2]/85 sm:text-base">
            HIFU corporal nu este un program de slăbit. Tratamentul este
            orientat către fermitatea și aspectul pielii și se recomandă în
            urma unei evaluări individuale.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#FFF9F2]/12 px-4 py-2 text-sm font-medium text-[#FFF9F2] backdrop-blur-sm"
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
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Programează o evaluare
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-[#D4AF37]/60 bg-[#FFF9F2]/10 px-8 text-base font-semibold text-[#FFF9F2] backdrop-blur-sm hover:bg-[#FFF9F2]/20 sm:w-auto"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
