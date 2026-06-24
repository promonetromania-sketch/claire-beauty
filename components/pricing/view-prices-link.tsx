import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  getPricingHref,
  type PricingSectionId,
} from "@/lib/seo/pricing-links"
import { cn } from "@/lib/utils"

type ViewPricesLinkProps = {
  section?: PricingSectionId
  className?: string
}

export function ViewPricesLink({ section, className }: ViewPricesLinkProps) {
  return (
    <Link
      href={getPricingHref(section)}
      className={cn(
        "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#B8962E]",
        className,
      )}
    >
      Vezi lista completă de prețuri
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  )
}
