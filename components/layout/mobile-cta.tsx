"use client"

import { Phone, Calendar, MessageCircle } from "lucide-react"
import { businessProfile } from "@/lib/seo/business"

interface MobileCTAProps {
  layout?: "double" | "triple"
}

export function MobileCTA({ layout = "double" }: MobileCTAProps) {
  if (layout === "triple") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#D4AF37]/20 bg-[#FFF9F2]/95 shadow-premium-lg backdrop-blur-md md:hidden">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href={`tel:${businessProfile.telephone}`}
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#0E2B1F] px-2 py-3 text-xs font-semibold text-[#D4AF37] transition-colors hover:bg-[#0E2B1F]/90"
          >
            <Phone className="h-4 w-4" />
            <span>Sună acum</span>
          </a>
          <a
            href={businessProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/15 px-2 py-3 text-xs font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/25"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#D4AF37] px-2 py-3 text-xs font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/90"
          >
            <Calendar className="h-4 w-4" />
            <span>Programare</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 shadow-premium-lg backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${businessProfile.telephone}`}
          className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          <span>Sună Acum</span>
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Calendar className="h-4 w-4" />
          <span>Programare</span>
        </a>
      </div>
    </div>
  )
}
