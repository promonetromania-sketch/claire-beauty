import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria P.",
    role: "Clientă Fidelă",
    content:
      "Experiență minunată! Tratamentele de la Claire's Studio m-au ajutat să scap de celulită și să mă simt din nou încrezătoare. Recomand cu căldură!",
    rating: 5,
  },
  {
    name: "Elena D.",
    role: "Prima Vizită",
    content:
      "Am fost impresionată de profesionalismul și atenția la detalii. Atmosfera este relaxantă și rezultatele sunt vizibile de la prima ședință.",
    rating: 5,
  },
  {
    name: "Andreea M.",
    role: "Clientă Fidelă",
    content:
      "Reflexoterapia de aici este extraordinară! Mă simt mult mai bine și dorm mult mai bine de când am început ședințele. Ana este un profesionist adevărat.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Testimoniale
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Ce Spun
            <span className="text-gold-gradient"> Clientele Noastre</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Satisfacția clientelor noastre este cea mai mare răsplată. Iată
            câteva dintre experiențele lor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-accent/30 mb-6" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-lg font-semibold text-primary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
