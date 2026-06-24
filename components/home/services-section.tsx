import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { claireImages } from "@/lib/images/claire-beauty"

const services = [
  {
    title: "Reflexoterapie",
    description:
      "Terapie holistică care stimulează punctele reflexogene din tălpi pentru echilibrarea întregului organism.",
    image: claireImages.reflexoterapie,
    href: "/reflexoterapie-craiova",
    featured: true,
  },
  {
    title: "Masaj Anticelulitic",
    description:
      "Tratament intensiv pentru reducerea celulitei și îmbunătățirea aspectului pielii.",
    image: claireImages.masajAnticelulitic,
    href: "/masaj-anticelulitic-craiova",
    featured: false,
  },
  {
    title: "Drenaj Limfatic",
    description:
      "Tehnici specializate pentru eliminarea toxinelor și reducerea retenției de apă.",
    image: claireImages.drenajLimfatic,
    href: "/drenaj-limfatic-craiova",
    featured: false,
  },
  {
    title: "Tratamente Faciale",
    description:
      "Îngrijire premium pentru ten, de la curățare profundă la tratamente anti-aging.",
    image: claireImages.tratamentFacialMasaj,
    href: "/tratamente-faciale-craiova",
    featured: false,
  },
  {
    title: "Remodelare Corporală",
    description:
      "Tehnologii avansate pentru conturarea și remodelarea siluetei tale.",
    image: claireImages.remodelareCorporala,
    href: "/remodelare-corporala-craiova",
    featured: false,
  },
  {
    title: "Radiofrecvență",
    description:
      "Tratament non-invaziv pentru fermitatea pielii și reducerea ridurilor.",
    image: claireImages.radiofrecventaFacial,
    href: "/radiofrecventa-corporala-craiova",
    featured: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicii-populare" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Serviciile Noastre
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Tratamente Premium pentru
            <span className="text-gold-gradient"> Frumusețea Ta</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Descoperă gama noastră completă de servicii de înfrumusețare și
            wellness, create pentru a-ți oferi rezultate vizibile și relaxare
            profundă.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 70}>
              <Link
                href={service.href}
                className={`premium-service-card group relative block overflow-hidden rounded-2xl bg-card shadow-premium ${
                  service.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <ClaireImage
                    {...service.image}
                    fill
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent transition-opacity duration-500 group-hover:from-primary/90" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-2xl" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-primary-foreground transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm text-primary-foreground/80">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent">
                    Află mai multe
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
