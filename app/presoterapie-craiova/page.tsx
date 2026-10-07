import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { PresoterapieHero } from "@/components/services/presoterapie/presoterapie-hero"
import { PresoterapieSections } from "@/components/services/presoterapie/presoterapie-sections"
import {
  presoterapieFaqs,
  presoterapiePath,
  presoterapiePriceLei,
} from "@/lib/content/presoterapie"
import {
  businessProfile,
  localBusinessId,
  postalAddressSchema,
} from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}${presoterapiePath}`

const title = "Presoterapie Craiova | Drenaj & Picioare Ușoare | Claire Beauty"
const description =
  "Presoterapie în Craiova la Claire Beauty. Procedură cu compresie controlată pentru drenaj, relaxare și senzația de picioare ușoare. Vezi prețul și detaliile."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "presoterapie Craiova",
    "pressoterapie Craiova",
    "presoterapie preț",
    "presoterapie picioare",
    "drenaj limfatic aparat",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
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
  name: "Presoterapie Craiova",
  serviceType: "Presoterapie",
  description:
    "Presoterapie Starvac în Craiova: procedură corporală cu compresie controlată, pentru drenaj, relaxare și senzația de picioare ușoare. 80 lei pe ședință.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId,
  },
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
  offers: {
    "@type": "Offer",
    price: String(presoterapiePriceLei),
    priceCurrency: "RON",
    url: pageUrl,
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
      name: "Tratamente corporale",
      item: `${businessProfile.url}/tratamente-corporale-craiova`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Presoterapie în Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: presoterapieFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function PresoterapieCraiovaPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Header />
      <main className="overflow-x-clip pb-24 md:pb-0">
        <PresoterapieHero />
        <PresoterapieSections />
        <ServiceFAQ
          title="Întrebări frecvente despre presoterapie"
          subtitle="FAQ"
          faqs={[...presoterapieFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
