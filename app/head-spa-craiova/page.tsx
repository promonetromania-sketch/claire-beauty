import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { HeadSpaHero } from "@/components/services/head-spa/head-spa-hero"
import {
  HeadSpaFinalCta,
  HeadSpaSections,
} from "@/components/services/head-spa/head-spa-sections"
import {
  headSpaFaqs,
  headSpaOffer,
  headSpaPath,
  headSpaPriceAmount,
} from "@/lib/content/head-spa"
import {
  businessProfile,
  localBusinessId,
  postalAddressSchema,
} from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}${headSpaPath}`

const title = "Head Spa Craiova | Ritual Premium pentru Scalp | Claire Beauty"
const description =
  "Descoperă experiența Head Spa la Claire Beauty Craiova: ritual premium pentru scalp, păr și relaxare. Vezi ce include, durata și prețul."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "head spa craiova",
    "headspa craiova",
    "head spa",
    "spa scalp craiova",
    "masaj scalp craiova",
    "head spa pret",
    "head spa craiova pret",
    "tratament scalp craiova",
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
  name: "Head Spa Craiova",
  serviceType: "Head Spa",
  description:
    "Head Spa la Claire Beauty Craiova: serviciu cosmetic și de relaxare pentru scalp și păr, 300 lei pe ședință. Nu este un tratament medical.",
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
    name: headSpaOffer.name,
    price: headSpaPriceAmount,
    priceCurrency: "RON",
    description: [headSpaOffer.price, headSpaOffer.detail].filter(Boolean).join(" "),
    url: pageUrl,
    availability: "https://schema.org/InStock",
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
      name: "Head Spa Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: headSpaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HeadSpaPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Header />
      <main className="overflow-x-clip pb-24 md:pb-0">
        <HeadSpaHero />
        <HeadSpaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre Head Spa"
          subtitle="FAQ"
          faqs={[...headSpaFaqs]}
        />
        <HeadSpaFinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
