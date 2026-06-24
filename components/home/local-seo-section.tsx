import Link from "next/link"
import { MapPin, Clock, Phone, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { businessProfile } from "@/lib/seo/business"

export function LocalSEOSection() {
  return (
    <section id="locatie" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Locație
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Unde ne găsești
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Claire Beauty te așteaptă în Craiova pentru masaj, remodelare
            corporală și tratamente faciale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal>
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-card shadow-premium-lg sm:h-[350px] lg:h-[450px]">
              <iframe
                src={businessProfile.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Hartă Claire's Beauty Craiova"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="premium-contact-card rounded-2xl border border-[#D4AF37]/15 bg-card p-6 shadow-premium-lg sm:p-8">
              <div className="mb-6 flex items-start gap-4 border-b border-border/60 pb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent shadow-[inset_0_0_0_1px_rgba(212,175,55,0.2)]">
                  <MapPin className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <p className="font-serif text-xl font-semibold text-foreground">
                    {businessProfile.locationName}
                  </p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {businessProfile.address.formatted}
                  </p>
                </div>
              </div>

              <div className="mb-8 space-y-5">
                <div className="flex items-start gap-4 rounded-xl bg-secondary/60 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Clock className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Program</p>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 09:00 - 20:00
                    </p>
                    <p className="text-muted-foreground">
                      Sâmbătă: 10:00 - 16:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/8 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Phone className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <a
                      href={`tel:${businessProfile.telephone}`}
                      className="font-serif text-xl font-semibold text-accent hover:underline"
                    >
                      {businessProfile.telephoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="premium-btn-primary rounded-full"
                >
                  <Link
                    href={businessProfile.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Deschide în Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={`tel:${businessProfile.telephone}`}
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Sună acum
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={businessProfile.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
