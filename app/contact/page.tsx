import type { Metadata } from "next"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { ContactForm } from "@/components/contact/contact-form"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Claire's Studio by Ana Savovici - Body Spa Craiova",
  description:
    "Contactează-ne pentru programări și informații. Claire's Studio by Ana Savovici - salonul tău premium de body spa în Craiova. Telefon: +40 757 851 882",
  keywords: [
    "contact salon beauty Craiova",
    "programare body spa Craiova",
    "Claire's Studio contact",
    "Ana Savovici contact",
  ],
  openGraph: {
    title: "Contact | Claire's Studio by Ana Savovici",
    description:
      "Contactează-ne pentru programări și informații. Body Spa Premium în Craiova.",
    type: "website",
    locale: "ro_RO",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+40 757 851 882",
    href: "tel:+40757851882",
    description: "Sună-ne pentru programări rapide",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+40 757 851 882",
    href: "https://wa.me/40757851882?text=Bună%20ziua!%20Aș%20dori%20să%20fac%20o%20programare.",
    description: "Scrie-ne oricând pe WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Anasavovici@yahoo.com",
    href: "mailto:Anasavovici@yahoo.com",
    description: "Pentru întrebări detaliate",
  },
  {
    icon: MapPin,
    title: "Adresă",
    content: "Craiova, România",
    href: "https://maps.google.com/?q=Craiova,Romania",
    description: "Ne găsești ușor în centrul orașului",
  },
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/anasavovici_body/",
    handle: "@anasavovici_body",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/clairestudiobyana",
    handle: "Claire's Studio by Ana Savovici",
  },
]

const openingHours = [
  { day: "Luni", hours: "09:00 - 20:00" },
  { day: "Marți", hours: "09:00 - 20:00" },
  { day: "Miercuri", hours: "09:00 - 20:00" },
  { day: "Joi", hours: "09:00 - 20:00" },
  { day: "Vineri", hours: "09:00 - 20:00" },
  { day: "Sâmbătă", hours: "10:00 - 16:00" },
  { day: "Duminică", hours: "Închis" },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 pt-40 bg-primary overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Contactează-ne
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
              Suntem Aici
              <span className="text-gold-gradient"> Pentru Tine</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Ai întrebări sau dorești să faci o programare? Contactează-ne prin
              oricare dintre metodele de mai jos și îți vom răspunde cât mai
              curând.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group p-6 rounded-2xl bg-card shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent font-medium mb-1">{item.content}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
                  Scrie-ne Un Mesaj
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                  Formular de Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Completează formularul de mai jos și te vom contacta în cel
                  mai scurt timp posibil pentru a răspunde la întrebările tale.
                </p>
                <ContactForm />
              </div>

              {/* Info Column */}
              <div className="space-y-10">
                {/* Opening Hours */}
                <div className="p-8 rounded-2xl bg-card shadow-premium">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Program de Lucru
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-foreground font-medium">
                          {item.day}
                        </span>
                        <span
                          className={`${
                            item.hours === "Închis"
                              ? "text-muted-foreground"
                              : "text-accent"
                          }`}
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="p-8 rounded-2xl bg-card shadow-premium">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Urmărește-ne pe Social Media
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-accent/10 transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          <social.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {social.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Programare Rapidă
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Cel mai rapid mod de a face o programare este prin WhatsApp.
                    Scrie-ne și îți răspundem imediat!
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                  >
                    <a
                      href="https://wa.me/40757851882?text=Bună%20ziua!%20Aș%20dori%20să%20fac%20o%20programare."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Scrie-ne pe WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
                Locație
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Unde Ne Găsești
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Salonul {"Claire's Studio"} se află în Craiova, într-o locație
                centrală și ușor accesibilă.
              </p>
            </div>

            <div className="relative aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-premium-lg">
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
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
