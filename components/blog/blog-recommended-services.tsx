import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogInlineLink } from "@/lib/content/blog"

export function BlogRecommendedServices({
  services }: {
  services: BlogInlineLink[]
}) {
  if (services.length === 0) return null

  return (
    <section className="border-t border-[#D4AF37]/15 bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          Servicii recomandate
        </p>
        <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-foreground sm:text-3xl">
          Descoperă tratamentele Claire Beauty potrivite pentru tine
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between rounded-2xl border border-[#D4AF37]/20 bg-card p-5 shadow-premium transition-all hover:border-[#D4AF37]/45 hover:shadow-premium-lg"
            >
              <span className="font-serif text-base font-semibold text-foreground group-hover:text-[#D4AF37]">
                {service.text}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#0E2B1F] transition-transform group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
