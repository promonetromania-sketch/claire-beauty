import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { RejuvenareFacialaHero } from "@/components/services/rejuvenare-faciala/rejuvenare-faciala-hero"
import { RejuvenareFacialaSections } from "@/components/services/rejuvenare-faciala/rejuvenare-faciala-sections"
import { rejuvenareFacialaFaqs } from "@/lib/content/rejuvenare-faciala"
import { pricingCategories } from "@/lib/content/pricing"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/rejuvenare-faciala-craiova`

const title = "Rejuvenare Facială Craiova | Tratamente Claire Beauty"
const description =
  "Rejuvenare facială în Craiova cu tratamente personalizate pentru fermitate, textură și aspect revitalizat. HIFU, microneedling și radiofrecvență. Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "rejuvenare faciala craiova",
    "rejuvenare faciala",
    "tratament rejuvenare faciala",
    "stimulare colagen craiova",
    "tratament stimulare colagen",
    "fermitate ten craiova",
    "tratament facial craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
}

function findPrice(name: string) {
  return pricingCategories.flatMap((category) => category.items).find((item) => item.name === name)
}

function minPrice(price: string | undefined) {
  const match = price?.match(/de la\s+(\d+)/i)
  return match?.[1]
}

const hifuFace = findPrice("HIFU față")
const hifuPackage = findPrice("HIFU față + gușă + decolteu")
const microneedling = findPrice("Microneedling")
const radiofrecventa = findPrice("Radiofrecvență fracționată")
const radiofrecventaOffer = radiofrecventa
  ? { ...radiofrecventa, href: "/radiofrecventa-fractionata-craiova" }
  : undefined

function offerFrom(item: { name: string; price: string; detail?: string; href?: string } | undefined) {
  if (!item) return null
  const minimum = minPrice(item.price)
  return {
    "@type": "Offer",
    name: item.name,
    priceCurrency: "RON",
    ...(minimum
      ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: minimum,
            priceCurrency: "RON",
          },
        }
      : {}),
    description: [item.price, item.detail].filter(Boolean).join(" "),
    url: item.href ? `${businessProfile.url}${item.href}` : pageUrl,
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": localBusinessId,
  name: businessProfile.name,
  legalName: businessProfile.legalName,
  url: businessProfile.url,
  telephone: businessProfile.telephone,
  email: businessProfile.email,
  address: postalAddressSchema,
  sameAs: businessProfile.sameAs,
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rejuvenare facială Craiova",
  serviceType: "Rejuvenare facială",
  description:
    "Evaluare și tratamente personalizate de rejuvenare facială în Craiova, alese între HIFU facial, microneedling și radiofrecvență fracționată, în funcție de obiectivul pielii.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId,
  },
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamente de rejuvenare facială",
    itemListElement: [offerFrom(hifuFace), offerFrom(hifuPackage), offerFrom(microneedling), offerFrom(radiofrecventaOffer)].filter(
      Boolean,
    ),
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Acasă",
      item: businessProfile.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tratamente faciale",
      item: `${businessProfile.url}/tratamente-faciale-craiova`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rejuvenare facială Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rejuvenareFacialaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function RejuvenareFacialaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <RejuvenareFacialaHero />
        <RejuvenareFacialaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre rejuvenarea facială"
          subtitle="FAQ"
          faqs={[...rejuvenareFacialaFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
