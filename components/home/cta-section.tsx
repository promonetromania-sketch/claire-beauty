import Link from "next/link"
import { ArrowRight, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { businessProfile } from "@/lib/seo/business"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/18 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-foreground/6 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Programează-te Astăzi
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
            Ești pregătită pentru
            <span className="text-gold-gradient"> transformarea ta?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            Consultație personalizată, tratamente adaptate nevoilor tale și
            rezultate vizibile — într-un salon premium din Craiova.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="premium-btn-primary rounded-full px-10 text-base font-semibold"
            >
              <a
                href={`tel:${businessProfile.telephone}`}
                className="inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Programează-te
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/35 bg-transparent px-10 text-base font-semibold text-primary-foreground transition-all hover:border-[#D4AF37]/50 hover:bg-primary-foreground/10"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contactează-ne
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
