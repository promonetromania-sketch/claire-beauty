import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import type { PricingCategory } from "@/lib/content/pricing"
import { pricingCategoryHubHref } from "@/lib/seo/pricing-links"

type PricingCategoryCardProps = {
  category: PricingCategory
  icon: LucideIcon
}

export function PricingCategoryCard({
  category,
  icon: Icon,
}: PricingCategoryCardProps) {
  const hubHref = pricingCategoryHubHref[category.id]

  return (
    <article
      id={category.id}
      className="premium-service-card scroll-mt-28 rounded-3xl border border-[#0E2B1F]/8 bg-[#FFF9F2] p-6 shadow-premium sm:p-8"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0E2B1F]/6 ring-1 ring-[#D4AF37]/25">
            <Icon className="h-5 w-5 text-[#B8962E]" aria-hidden />
          </div>
          <h2 className="font-serif text-xl font-semibold text-[#0E2B1F] sm:text-2xl">
            {category.title}
          </h2>
        </div>
        <Link
          href={hubHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#0E2B1F]/70 transition-colors hover:text-[#B8962E]"
        >
          Vezi serviciile
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>

      <ul className="space-y-3">
        {category.items.map((item) => (
          <li
            key={`${category.id}-${item.name}-${item.price}-${item.detail ?? ""}`}
            className="flex flex-col gap-2 rounded-2xl border border-[#0E2B1F]/6 bg-white/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-medium text-[#0E2B1F] transition-colors hover:text-[#B8962E]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <p className="font-medium text-[#0E2B1F]">{item.name}</p>
                )}
                {item.isSubscription && (
                  <span className="inline-flex rounded-full bg-[#D4AF37]/18 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#8A7020] ring-1 ring-[#D4AF37]/35">
                    abonament avantajos
                  </span>
                )}
              </div>
              {item.detail && (
                <p className="mt-1 text-sm text-[#0E2B1F]/58">{item.detail}</p>
              )}
            </div>
            <p className="shrink-0 font-serif text-xl font-bold text-[#0E2B1F] sm:text-2xl">
              <span className="text-gold-gradient">{item.price}</span>
            </p>
          </li>
        ))}
      </ul>
    </article>
  )
}
