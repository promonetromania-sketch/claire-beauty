import Link from "next/link"
import Image from "next/image"
import { Star, Quote, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { businessProfile } from "@/lib/seo/business"
import { googleTestimonials } from "@/lib/content/testimonials"

type Testimonial = (typeof googleTestimonials)[number]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="premium-testimonial-card group relative h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-primary-foreground/8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-8">
      <Quote
        className="mb-5 h-9 w-9 text-accent/40 transition-colors group-hover:text-accent/60"
        aria-hidden
      />

      <div
        className="mb-4 flex items-center gap-1"
        aria-label={`${testimonial.rating} stele`}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-accent"
            fill="currentColor"
            aria-hidden
          />
        ))}
      </div>

      <p className="mb-6 text-sm leading-relaxed text-primary-foreground/92 sm:text-base">
        {`"${testimonial.content}"`}
      </p>

      <div className="border-t border-primary-foreground/10 pt-4">
        <p className="font-serif text-lg font-semibold text-primary-foreground">
          {testimonial.name}
        </p>
        <p className="text-sm text-primary-foreground/65">{testimonial.role}</p>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Recenzii Google
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
            Ce spun clientele
            <span className="text-gold-gradient"> noastre</span>
          </h2>

          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-3 backdrop-blur-sm">
              <Image
                src="/images/google-logo-color.svg"
                alt="Google"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0"
              />
              <p className="text-left text-sm font-medium text-primary-foreground/90 sm:text-base">
                Recenzii verificate pe Google
              </p>
            </div>
            <p className="text-xs text-primary-foreground/60 sm:text-sm">
              Recenzii din profilul Google Business
            </p>
          </div>

          <div
            className="mb-4 flex items-center justify-center gap-1.5"
            aria-label="Evaluare 5 din 5 stele"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-7 w-7 text-accent drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]"
                fill="currentColor"
                aria-hidden
              />
            ))}
          </div>
          <p className="text-lg leading-relaxed text-primary-foreground/80">
            {businessProfile.googleReviews.rating.toFixed(1).replace(".0", ",0")}{" "}
            din 5 · {businessProfile.googleReviews.count} recenzii pe Google Maps
            — experiențe reale ale clientelor noastre.
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal swipe carousel */}
        <div
          className="md:hidden -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Recenzii Google — carusel"
        >
          {googleTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[88%] max-w-[88%] shrink-0 snap-center sm:w-[85%] sm:max-w-[85%]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Desktop / tablet: grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {googleTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 90}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center" delay={120}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground transition-all hover:border-[#D4AF37]/50 hover:bg-primary-foreground/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Link
              href={businessProfile.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Vezi recenziile pe Google
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
