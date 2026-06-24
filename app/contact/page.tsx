import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { ContactForm } from "@/components/contact/contact-form"
import { VisualGallery } from "@/components/shared/visual-gallery"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages, pageGalleries } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact | Claire Beauty Craiova",
  description:
    "Contactează Claire Beauty Craiova pentru programări și informații. Salon premium body spa — telefon: +40 757 851 882.",
  keywords: [
    "contact Claire Beauty Craiova",
    "programare body spa Craiova",
    "salon beauty Craiova contact",
    "Ana Savovici contact",
  ],
  openGraph: {
    title: "Contact | Claire Beauty Craiova",
    description:
      "Contactează Claire Beauty Craiova pentru programări și informații despre tratamente faciale, masaj și remodelare corporală.",
    type: "website",
    locale: "ro_RO" } }

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: businessProfile.telephoneDisplay,
    href: `tel:${businessProfile.telephone}`,
    description: "Sună-ne pentru programări rapide" },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: businessProfile.telephoneDisplay,
    href: businessProfile.whatsappUrl,
    description: "Scrie-ne oricând pe WhatsApp" },
  {
    icon: Mail,
    title: "Email",
    content: businessProfile.email,
    href: `mailto:${businessProfile.email}`,
    description: "Pentru întrebări detaliate" },
  {
    icon: MapPin,
    title: "Adresă",
    content: businessProfile.address.formatted,
    href: businessProfile.googleMapsUrl,
    description: businessProfile.locationName },
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/anasavovici_body/",
    handle: "@anasavovici_body" },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/clairestudiobyana",
    handle: "Claire Beauty Craiova" },
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
              curând. Consultă și{" "}
              <Link
                href="/preturi"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                lista de prețuri
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pageGalleries.contact.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg"
                >
                  <ClaireImage
                    {...image}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
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
                      href={businessProfile.whatsappUrl}
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
                {businessProfile.locationName} — {businessProfile.address.formatted}
              </p>
            </div>

            <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-premium-lg">
              <iframe
                src={businessProfile.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Hartă Claire's Beauty Craiova"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="rounded-full">
                <a
                  href={businessProfile.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deschide în Google Maps
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`tel:${businessProfile.telephone}`}>Sună acum</a>
              </Button>
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
