import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { DrenajPostOperatorHero } from "@/components/services/drenaj-post-operator/drenaj-post-operator-hero"
import { DrenajPostOperatorSections } from "@/components/services/drenaj-post-operator/drenaj-post-operator-sections"
import {
  drenajPostOperatorFaqs,
  drenajPostOperatorPriceLei,
} from "@/lib/content/drenaj-post-operator"
import {
  businessProfile,
  localBusinessId,
  postalAddressSchema,
} from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/drenaj-limfatic-post-operator-craiova`

const title = "Drenaj Limfatic Postoperator Craiova | Claire Beauty"
const description =
  "Drenaj limfatic postoperator în Craiova, inclusiv după liposucție și alte intervenții, în funcție de recomandarea medicală. Preț 250 lei. Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "drenaj limfatic post operator Craiova",
    "drenaj limfatic postoperator Craiova",
    "drenaj limfatic după operație Craiova",
    "masaj limfatic postoperator Craiova",
    "drenaj după liposucție Craiova",
    "masaj după liposucție Craiova",
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
  name: "Drenaj limfatic postoperator Craiova",
  serviceType: "Drenaj limfatic postoperator",
  description:
    "Drenaj limfatic postoperator în Craiova, pentru perioada de după anumite intervenții, în funcție de situația individuală și de recomandările primite de la medic. 250 lei pe ședință.",
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
    price: String(drenajPostOperatorPriceLei),
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
      name: "Drenaj limfatic postoperator în Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: drenajPostOperatorFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function DrenajLimfaticPostOperatorCraiovaPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Header />
      <main className="pb-24 md:pb-0">
        <DrenajPostOperatorHero />
        <DrenajPostOperatorSections />
        <ServiceFAQ
          title="Întrebări frecvente despre drenajul postoperator"
          subtitle="FAQ"
          faqs={[...drenajPostOperatorFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
