import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { pricingHubLinks } from "@/lib/seo/pricing-links"

export function PricingHubLinks() {
  return (
    <section className="border-t border-[#0E2B1F]/8 bg-[#FFF9F2] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-[#B8962E]">
            Servicii Claire Beauty
          </p>
          <h2 className="font-serif text-xl font-semibold text-[#0E2B1F] sm:text-2xl">
            Află detalii despre fiecare tratament
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#0E2B1F]/68 sm:text-base">
            De pe pagina de prețuri poți accesa direct paginile de servicii
            pentru programare, beneficii și recomandări personalizate.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {pricingHubLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#0E2B1F]/10 bg-white/80 px-4 py-2.5 text-sm font-medium text-[#0E2B1F] shadow-premium transition-all hover:border-[#D4AF37]/40 hover:text-[#B8962E]"
            >
              {link.label}
              <ArrowRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
