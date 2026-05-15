import Image from "next/image"
import Link from "next/link"
import { Calendar, MessageCircle, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { radiofrecventaWhatsappMessage } from "@/lib/content/radiofrecventa"

const badges = [
  "Fermitate",
  "Colagen",
  "Remodelare corporală",
  "Reducerea celulitei",
  "Tonifiere",
]

export function RadiofrecventaHero() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/treatment-body.jpg"
          alt="Radiofrecvență Craiova la Claire Beauty pentru fermitate și remodelare corporală"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E2B1F]/92 via-[#0E2B1F]/78 to-[#0E2B1F]/45" />
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-premium-lg backdrop-blur-md sm:p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Tratament premium body contouring
          </p>
          <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#FFF9F2] sm:text-5xl lg:text-6xl">
            Radiofrecvență Craiova – Fermitate, Tonifiere și Remodelare Corporală
            Fără Intervenții
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-[#FFF9F2]/90">
            Dacă te confrunți cu piele lăsată, lipsă de fermitate sau celulită care
            nu dispare, radiofrecvența este una dintre cele mai eficiente soluții
            non-invazive disponibile în Craiova. Acest tratament nu este orientat
            spre relaxare, ci spre rezultate vizibile: fermitate și îmbunătățirea
            pielii.
          </p>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#FFF9F2]/90">
            Procedura de{" "}
            <Link
              href="/"
              className="font-medium text-[#D4AF37] underline-offset-4 hover:underline"
            >
              radiofrecvență
            </Link>{" "}
            este integrată într-un protocol complet de remodelare corporală, pentru
            rezultate vizibile: piele mai fermă, tonifiere și îmbunătățirea aspectului
            pielii. Practic, pielea ta se regenerează din interior.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#FFF9F2]/12 px-4 py-2 text-sm font-medium text-[#FFF9F2] backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] hover:bg-[#0E2B1F]/90"
            >
              <a href="tel:+40757851882" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Începe fermizarea pielii</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#D4AF37]/60 bg-[#FFF9F2]/10 px-8 text-base font-semibold text-[#FFF9F2] backdrop-blur-sm hover:bg-[#FFF9F2]/20"
            >
              <a
                href={`https://wa.me/40757851882?text=${encodeURIComponent(radiofrecventaWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[#D4AF37]/40 bg-transparent px-8 text-base font-semibold text-[#FFF9F2] hover:bg-[#FFF9F2]/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Consultație pentru remodelare corporală</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
