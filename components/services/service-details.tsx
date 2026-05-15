import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface ServiceDetailsProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  reversed?: boolean
}

export function ServiceDetails({
  title,
  subtitle,
  description,
  image,
  features,
  reversed = false,
}: ServiceDetailsProps) {
  return (
    <section className={`py-24 ${reversed ? "bg-secondary" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div
              className={`absolute -bottom-6 ${
                reversed ? "-left-6" : "-right-6"
              } w-48 h-48 bg-accent/10 rounded-2xl -z-10`}
            />
          </div>

          {/* Content */}
          <div className={reversed ? "lg:order-1" : ""}>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              {subtitle}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
