import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function LocalSEOSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Locație
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Body Spa Premium în
              <span className="text-gold-gradient"> Craiova</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {"Claire's Studio"} este salonul tău de încredere pentru tratamente
              de înfrumusețare și wellness în Craiova. Ne găsești într-o locație
              centrală, ușor accesibilă, pregătiți să îți oferim cele mai bune
              servicii de body spa.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresă</p>
                  <p className="text-muted-foreground">Craiova, România</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Program</p>
                  <p className="text-muted-foreground">
                    Luni - Vineri: 09:00 - 20:00
                  </p>
                  <p className="text-muted-foreground">Sâmbătă: 10:00 - 16:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href="tel:+40757851882"
                    className="text-accent hover:underline"
                  >
                    +40 757 851 882
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:Anasavovici@yahoo.com"
                    className="text-accent hover:underline"
                  >
                    Anasavovici@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-premium-lg bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91899.91756376377!2d23.729726068359374!3d44.31663560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d700ac8c1097%3A0xe23a6e6b3e8d90e5!2sCraiova%2C%20Romania!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Claire's Studio Craiova Location"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>{"Claire's Studio by Ana Savovici"}</strong> - Salonul tău de body
            spa în Craiova. Oferim servicii premium de reflexoterapie Craiova,
            masaj anticelulitic Craiova, drenaj limfatic Craiova, tratamente
            faciale Craiova, remodelare corporală Craiova și radiofrecvență
            Craiova. Vizitează-ne pentru o experiență de wellness de neuitat.
          </p>
        </div>
      </div>
    </section>
  )
}
