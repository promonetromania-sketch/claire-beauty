import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { pieleLasataWhatsappMessage } from "@/lib/content/piele-lasata"
import { claireImages } from "@/lib/images/claire-beauty"
import Link from "next/link"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const chips = [
  "Evaluare individuală",
  "Tratament în funcție de obiectiv",
  "Tehnologii profesionale",
]

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(pieleLasataWhatsappMessage)}`

export function PieleLasataHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.tratamenteCorporaleHero}
          alt="Îngrijire corporală în salonul Claire Beauty din Craiova, cu siluetă naturală și braț relaxat"
          title="Fermitate corporală la Claire Beauty Craiova"
          objectPosition="center 40%"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2B1F]/92 via-[#0E2B1F]/78 to-[#0E2B1F]/55" />
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
        <div className="max-w-3xl rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-premium-lg backdrop-blur-md sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:text-sm sm:tracking-[0.22em]">
            Fermitate corporală • Claire Beauty Craiova
          </p>
          <h1 className="mb-5 font-serif text-[1.65rem] font-semibold leading-tight text-[#FFF9F2] sm:text-4xl lg:text-5xl">
            Tratament pentru Piele Lăsată și Lipsă de Fermitate în Craiova
          </h1>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-[#FFF9F2]/90 sm:text-lg">
            Tratamente corporale personalizate pentru persoanele care urmăresc
            îmbunătățirea fermității și aspectului pielii după slăbire,
            modificări corporale sau pierderea elasticității.
          </p>

          <p className="mb-6 max-w-xl text-sm font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#D4AF37] sm:text-base sm:tracking-[0.12em]">
            Pielea lăsată nu are o singură cauză.
            <span className="mt-1 block">Nici tratamentul nu trebuie ales la întâmplare.</span>
          </p>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#FFF9F2]/12 px-4 py-2 text-sm font-medium text-[#FFF9F2] backdrop-blur-sm"
              >
                <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="min-h-11 w-full rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-sm font-semibold uppercase tracking-[0.06em] text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
            >
              <Link href="/contact" className="flex items-center justify-center">
                Programează o evaluare
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 w-full rounded-full border-[#D4AF37]/60 bg-[#FFF9F2]/10 px-8 text-sm font-semibold uppercase tracking-[0.06em] text-[#FFF9F2] backdrop-blur-sm hover:bg-[#FFF9F2]/20 sm:w-auto"
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
      </div>
    </section>
  )
}
