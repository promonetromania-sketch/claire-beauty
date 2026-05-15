import { Sparkles, Heart, Clock, Award, Shield, Users } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Echipamente Premium",
    description:
      "Folosim cele mai avansate tehnologii în domeniu pentru rezultate vizibile.",
  },
  {
    icon: Heart,
    title: "Abordare Personalizată",
    description:
      "Fiecare tratament este adaptat nevoilor și obiectivelor tale specifice.",
  },
  {
    icon: Clock,
    title: "Program Flexibil",
    description:
      "Programări convenabile, adaptate stilului tău de viață aglomerat.",
  },
  {
    icon: Award,
    title: "Experiență Dovedită",
    description:
      "Peste 10 ani de experiență în domeniul înfrumusețării și wellness.",
  },
  {
    icon: Shield,
    title: "Siguranță Garantată",
    description:
      "Protocoale stricte de igienă și produse certificate pentru siguranța ta.",
  },
  {
    icon: Users,
    title: "Rezultate Reale",
    description:
      "Sute de clienți mulțumiți care se bucură de transformări vizibile.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            De Ce Să Ne Alegi
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Excelență în Fiecare
            <span className="text-gold-gradient"> Detaliu</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La {"Claire's Studio"}, fiecare detaliu contează. Suntem dedicați să
            îți oferim o experiență de neuitat.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <benefit.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
