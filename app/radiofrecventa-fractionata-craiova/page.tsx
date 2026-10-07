import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { RadiofrecventaFractionataHero } from "@/components/services/radiofrecventa-fractionata/radiofrecventa-fractionata-hero"
import { RadiofrecventaFractionataSections } from "@/components/services/radiofrecventa-fractionata/radiofrecventa-fractionata-sections"
import { radiofrecventaFractionataFaqs } from "@/lib/content/radiofrecventa-fractionata"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/radiofrecventa-fractionata-craiova`

export const metadata: Metadata = {
  title: "Radiofrecvență Fracționată Craiova | Claire Beauty",
  description:
    "Radiofrecvență fracționată în Craiova pentru îmbunătățirea aspectului cicatricilor, vergeturilor și texturii pielii. Descoperă tratamentul Claire Beauty.",
  keywords: [
    "radiofrecventa fractionata craiova",
    "radiofrecventa fractionata",
    "radiofrecventa craiova",
    "tratament radiofrecventa craiova",
    "radiofrecventa pentru cicatrici",
    "radiofrecventa pentru vergeturi",
    "radiofrecventa cicatrici acnee",
    "radiofrecventa rejuvenare",
    "radiofrecventa pret",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Radiofrecvență Fracționată Craiova | Claire Beauty",
    description:
      "Radiofrecvență fracționată în Craiova pentru îmbunătățirea aspectului cicatricilor, vergeturilor și texturii pielii. Descoperă tratamentul Claire Beauty.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Radiofrecvență fracționată Craiova",
  serviceType: "Radiofrecvență fracționată",
  description:
    "Radiofrecvență fracționată în Craiova pentru îmbunătățirea aspectului cicatricilor, vergeturilor și texturii pielii. Preț de la 1000 lei pe ședință și zonă.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  offers: {
    "@type": "Offer",
    priceCurrency: "RON",
    price: "1000",
    description:
      "Preț de pornire: de la 1000 lei / ședință / zonă. Poate varia în funcție de zona tratată.",
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
      name: "Radiofrecvență fracționată Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: radiofrecventaFractionataFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function RadiofrecventaFractionataCraiovaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <RadiofrecventaFractionataHero />
        <RadiofrecventaFractionataSections />
        <ServiceFAQ
          title="Întrebări frecvente despre radiofrecvența fracționată"
          subtitle="FAQ"
          faqs={[...radiofrecventaFractionataFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
