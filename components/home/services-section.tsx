import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Reflexoterapie",
    description:
      "Terapie holistică care stimulează punctele reflexogene din tălpi pentru echilibrarea întregului organism.",
    image: "/images/treatment-reflexology.jpg",
    href: "/reflexoterapie-craiova",
    featured: true,
  },
  {
    title: "Masaj Anticelulitic",
    description:
      "Tratament intensiv pentru reducerea celulitei și îmbunătățirea aspectului pielii.",
    image: "/images/treatment-body.jpg",
    href: "/masaj-anticelulitic-craiova",
    featured: false,
  },
  {
    title: "Drenaj Limfatic",
    description:
      "Tehnici specializate pentru eliminarea toxinelor și reducerea retenției de apă.",
    image: "/images/treatment-body.jpg",
    href: "/drenaj-limfatic-craiova",
    featured: false,
  },
  {
    title: "Tratamente Faciale",
    description:
      "Îngrijire premium pentru ten, de la curățare profundă la tratamente anti-aging.",
    image: "/images/treatment-facial.jpg",
    href: "/tratamente-faciale-craiova",
    featured: false,
  },
  {
    title: "Remodelare Corporală",
    description:
      "Tehnologii avansate pentru conturarea și remodelarea siluetei tale.",
    image: "/images/treatment-body.jpg",
    href: "/remodelare-corporala-craiova",
    featured: false,
  },
  {
    title: "Radiofrecvență",
    description:
      "Tratament non-invaziv pentru fermitatea pielii și reducerea ridurilor.",
    image: "/images/treatment-facial.jpg",
    href: "/radiofrecventa-craiova",
    featured: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicii" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Serviciile Noastre
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Tratamente Premium pentru
            <span className="text-gold-gradient"> Frumusețea Ta</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descoperă gama noastră completă de servicii de înfrumusețare și
            wellness, create pentru a-ți oferi rezultate vizibile și relaxare
            profundă.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-premium hover:shadow-premium-lg transition-all duration-500 ${
                service.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 line-clamp-2 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Află mai multe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
