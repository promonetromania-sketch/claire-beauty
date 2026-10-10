"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"

const massageLinks = [
  { name: "Masaj", href: "/masaj-craiova" },
  { name: "Masaj terapeutic", href: "/masaj-terapeutic-craiova" },
  { name: "Masaj anticelulitic", href: "/masaj-anticelulitic-craiova" },
  { name: "Drenaj limfatic", href: "/drenaj-limfatic-craiova" },
  { name: "Drenaj limfatic post-operator", href: "/drenaj-limfatic-post-operator-craiova" },
  { name: "Presoterapie", href: "/presoterapie-craiova" },
  { name: "Reflexoterapie", href: "/reflexoterapie-craiova" },
  { name: "Head Spa", href: "/head-spa-craiova" },
]

const facialLinks = [
  { name: "Tratamente faciale", href: "/tratamente-faciale-craiova" },
  { name: "Rejuvenare facială", href: "/rejuvenare-faciala-craiova" },
  { name: "HIFU facial", href: "/hifu-facial-craiova" },
  { name: "Microneedling", href: "/microneedling-craiova" },
  { name: "Hydrablast", href: "/hydrablast-craiova" },
  { name: "Microdermabraziune", href: "/microdermabraziune-craiova" },
]

const bodyLinks = [
  { name: "Tratamente corporale", href: "/tratamente-corporale-craiova" },
  { name: "Remodelare corporală", href: "/remodelare-corporala-craiova" },
  { name: "HIFU corporal", href: "/hifu-corporal-craiova" },
  { name: "Cavitație", href: "/cavitatie-craiova" },
  { name: "Radiofrecvență corporală", href: "/radiofrecventa-corporala-craiova" },
  { name: "Radiofrecvență fracționată", href: "/radiofrecventa-fractionata-craiova" },
  { name: "Electrostimulare", href: "/electrostimulare-craiova" },
  { name: "Piele lăsată", href: "/piele-lasata-craiova" },
]

const specialtyLinks = [
  { name: "Cicatrici și vergeturi", href: "/cicatrici-vergeturi-craiova" },
  { name: "Cicatrici post-acnee", href: "/cicatrici-acnee-craiova" },
  { name: "Cicatrici cheloide", href: "/cicatrici-cheloide-craiova" },
  { name: "Cicatrice după cezariană", href: "/cicatrice-cezariana-craiova" },
  { name: "Vergeturi după sarcină", href: "/vergeturi-dupa-sarcina-craiova" },
  { name: "Vergeturi roșii și albe", href: "/vergeturi-rosii-albe-craiova" },
]

const utilityLinks = [
  { name: "Acasă", href: "/" },
  { name: "Despre noi", href: "/#despre" },
  { name: "Servicii", href: "/#servicii-populare" },
  { name: "Prețuri", href: "/preturi" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Confidențialitate", href: "/politica-confidentialitate" },
  { name: "GDPR", href: "/gdpr" },
  { name: "Politica de cookies", href: "/politica-cookie" },
  { name: "Termeni și condiții", href: "/termeni-si-conditii" },
]

const linkClassName =
  "inline-flex text-[15px] leading-snug text-[#FFF9F2]/88 transition-all duration-200 ease-out hover:translate-x-1 hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] motion-reduce:transition-none motion-reduce:hover:translate-x-0"

function FooterLinkList({
  links,
  className = "space-y-2.5",
}: {
  links: { name: string; href: string }[]
  className?: string
}) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={linkClassName}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function FooterAccordion({
  id,
  title,
  mobileTitle,
  hideTitleOnDesktop = false,
  children,
}: {
  id: string
  title: string
  mobileTitle?: string
  hideTitleOnDesktop?: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const panelId = `${id}-panel`

  return (
    <div>
      {hideTitleOnDesktop ? null : (
        <h3 className="mb-4 hidden font-serif text-[18px] font-medium tracking-wide text-[#D4AF37] md:block">
          {title}
        </h3>
      )}
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between border-b border-[#D4AF37]/25 py-3 text-left font-serif text-[18px] font-medium text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] md:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {mobileTitle ?? title}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          aria-hidden
          strokeWidth={1.5}
        />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} md:block`}
      >
        <div className="overflow-hidden md:overflow-visible">
          <div className="pt-3 md:pt-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0E2B1F] text-[#FFF9F2]">
      <style>{`
        @media (min-width: 1200px) {
          .footer-columns {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            column-gap: 2rem;
          }
          .footer-brand {
            grid-column: span 1;
          }
        }
      `}</style>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="footer-columns grid grid-cols-1 items-start gap-2 py-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 md:py-10">
          <div className="footer-brand pb-6 md:col-span-2 md:pb-0">
            <Link href="/" className="mb-4 inline-flex items-center" aria-label="Claire Beauty Craiova">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D4AF37]/40">
                <ClaireImage
                  {...claireImages.logo}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            </Link>
            <p className="font-serif text-xl font-semibold tracking-wide text-[#FFF9F2]">
              Claire Beauty
            </p>
            <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.18em] text-[#D4AF37]">
              Claire&apos;s Studio — Body Spa
            </p>
            <p className="mt-3 max-w-[16rem] text-[15px] leading-relaxed text-[#FFF9F2]/78">
              Body spa în Craiova, pentru masaj, îngrijire facială și tratamente corporale.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={businessProfile.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#FFF9F2] transition-colors duration-200 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={businessProfile.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#FFF9F2] transition-colors duration-200 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
              </a>
            </div>
            <a
              href={`tel:${businessProfile.telephone}`}
              className="mt-5 inline-flex min-h-11 items-center text-[15px] text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-4 transition-colors hover:decoration-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] md:hidden"
            >
              {businessProfile.telephoneDisplay}
            </a>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-11 items-center rounded-full border border-[#D4AF37]/45 px-4 text-sm text-[#FFF9F2] transition-colors duration-200 hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              Programează-te
            </Link>
          </div>

          <FooterAccordion id="footer-masaj" title="Masaj & Spa">
            <FooterLinkList links={massageLinks} />
          </FooterAccordion>

          <FooterAccordion id="footer-faciale" title="Tratamente Faciale">
            <FooterLinkList links={facialLinks} />
          </FooterAccordion>

          <FooterAccordion id="footer-corporale" title="Tratamente Corporale">
            <FooterLinkList links={bodyLinks} />
          </FooterAccordion>

          <div className="pt-2 md:pt-0">
            <h3 className="mb-4 font-serif text-[18px] font-medium tracking-wide text-[#D4AF37]">
              Contact
            </h3>
            <ul className="space-y-3 text-[15px] leading-snug text-[#FFF9F2]/88">
              <li>
                <a href={`tel:${businessProfile.telephone}`} className={`items-start gap-2.5 ${linkClassName}`}>
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
                  <span>{businessProfile.telephoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${businessProfile.email}`} className={`items-start gap-2.5 ${linkClassName}`}>
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
                  <span>{businessProfile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={businessProfile.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`items-start gap-2.5 ${linkClassName}`}
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
                  <span>{businessProfile.address.formatted}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.5} aria-hidden />
                <div>
                  <p>Luni - Vineri: 09:00 - 20:00</p>
                  <p>Sâmbătă: 10:00 - 16:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#D4AF37] px-4 text-sm font-medium text-[#0E2B1F] transition-colors duration-200 hover:bg-[#e3c56a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              Programează-te
            </Link>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 py-6">
          <FooterAccordion
            id="footer-specializate"
            title="Tratamente specializate"
            mobileTitle="Cicatrici & Vergeturi"
          >
            <FooterLinkList
              links={specialtyLinks}
              className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3"
            />
          </FooterAccordion>
        </div>

        <div className="border-t border-[#D4AF37]/15 py-5">
          <FooterAccordion id="footer-utile" title="Linkuri utile" hideTitleOnDesktop>
            <nav aria-label="Navigare și informații legale">
              <FooterLinkList
                links={utilityLinks}
                className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-2"
              />
            </nav>
          </FooterAccordion>
          <p className="mt-4 text-sm text-[#FFF9F2]/62">
            © {year} Claire Beauty Craiova. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
