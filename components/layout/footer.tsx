import Link from "next/link"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react"

const services = [
  { name: "Reflexoterapie", href: "/reflexoterapie-craiova" },
  { name: "Masaj Anticelulitic", href: "/masaj-anticelulitic-craiova" },
  { name: "Drenaj Limfatic", href: "/drenaj-limfatic-craiova" },
  { name: "Tratamente Faciale", href: "/tratamente-faciale-craiova" },
  { name: "Remodelare Corporală", href: "/remodelare-corporala-craiova" },
]

const quickLinks = [
  { name: "Acasă", href: "/" },
  { name: "Despre Noi", href: "/#despre" },
  { name: "Servicii", href: "/#servicii" },
  { name: "Contact", href: "/contact" },
]

const footerLinkClassName =
  "text-sm text-[#FFF9F2]/82 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#D4AF37]"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0E2B1F] text-[#FFF9F2]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#D4AF37]/45 ring-1 ring-[#D4AF37]/20">
                <ClaireImage
                  {...claireImages.logo}
                  fill
                  sizes="64px"
                />
              </div>
            </Link>
            <p className="mb-1 font-serif text-2xl font-bold tracking-[0.5px] text-[#FFF9F2]">
              {"Claire's Studio"}
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              by Ana Savovici
            </p>
            <p className="text-sm leading-relaxed text-[#FFF9F2]/78">
              Salonul tău premium de body spa în Craiova. Oferim tratamente de
              înfrumusețare și relaxare la cele mai înalte standarde.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-bold tracking-[0.5px] text-[#D4AF37]">
              Servicii
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className={footerLinkClassName}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-bold tracking-[0.5px] text-[#D4AF37]">
              Linkuri Rapide
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={footerLinkClassName}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-bold tracking-[0.5px] text-[#D4AF37]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+40757851882"
                  className={`flex items-start gap-3 ${footerLinkClassName}`}
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span>+40 757 851 882</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Anasavovici@yahoo.com"
                  className={`flex items-start gap-3 ${footerLinkClassName}`}
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span>Anasavovici@yahoo.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#FFF9F2]/82">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span>Craiova, România</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#FFF9F2]/82">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                <div>
                  <p>Luni - Vineri: 09:00 - 20:00</p>
                  <p>Sâmbătă: 10:00 - 16:00</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/anasavovici_body/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D4AF37]/25 bg-[#FFF9F2]/5 p-2 text-[#FFF9F2] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/18 hover:text-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/clairestudiobyana"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#D4AF37]/25 bg-[#FFF9F2]/5 p-2 text-[#FFF9F2] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/18 hover:text-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/15">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#FFF9F2]/58">
              © {new Date().getFullYear()} {"Claire's Studio by Ana Savovici"}.
              Toate drepturile rezervate.
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D4AF37]/85">
              Body Spa Premium Craiova
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
