import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCTAProps {
  title: string
  description: string
  whatsappMessage?: string
}

export function ServiceCTA({
  title,
  description,
  whatsappMessage = "Bună ziua! Aș dori să fac o programare la Claire's Studio.",
}: ServiceCTAProps) {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base font-medium"
          >
            <a href="tel:+40757851882" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+40 757 851 882</span>
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium bg-transparent"
          >
            <a
              href={`https://wa.me/40757851882?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
