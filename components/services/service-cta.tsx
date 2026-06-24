"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, MessageCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessProfile } from "@/lib/seo/business"
import { getPricingHrefForService } from "@/lib/seo/pricing-links"

interface ServiceCTAProps {
  title: string
  description: string
  pricingHref?: string
}

export function ServiceCTA({
  title,
  description,
  pricingHref,
}: ServiceCTAProps) {
  const pathname = usePathname()
  const resolvedPricingHref = pricingHref ?? getPricingHrefForService(pathname)
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base font-medium"
          >
            <a
              href={`tel:${businessProfile.telephone}`}
              className="flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>{businessProfile.telephoneDisplay}</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium bg-transparent"
          >
            <a
              href={businessProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium bg-transparent"
          >
            <Link href={resolvedPricingHref} className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              <span>Vezi prețurile</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
