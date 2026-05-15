import type { LucideIcon } from "lucide-react"

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceBenefitsProps {
  title: string
  subtitle: string
  description: string
  benefits: Benefit[]
}

export function ServiceBenefits({
  title,
  subtitle,
  description,
  benefits,
}: ServiceBenefitsProps) {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            {subtitle}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
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
