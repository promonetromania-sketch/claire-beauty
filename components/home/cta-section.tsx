import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <ClaireImage
          {...claireImages.masajRelaxare1}
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
          Programează-te Astăzi
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
          Ești Gata să Începi
          <span className="text-gold-gradient"> Transformarea?</span>
        </h2>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Contactează-ne acum pentru a programa o consultație gratuită și
          descoperă tratamentul perfect pentru tine.
        </p>

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
              href="https://wa.me/40757851882?text=Bună%20ziua!%20Aș%20dori%20să%20fac%20o%20programare."
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
