import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CicatriceCezarianaHero } from "@/components/services/cicatrice-cezariana/cicatrice-cezariana-hero"
import { CicatriceCezarianaSections } from "@/components/services/cicatrice-cezariana/cicatrice-cezariana-sections"
import { cicatriceCezarianaFaqs } from "@/lib/content/cicatrice-cezariana"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/cicatrice-cezariana-craiova`

const title = "Cicatrice Cezariană Craiova | Tratament Estetic | Claire Beauty"
const description =
  "Tratament în Craiova pentru îmbunătățirea aspectului cicatricii vindecate după cezariană. Evaluare individuală și proceduri personalizate la Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cicatrice cezariana craiova",
    "tratament cicatrice cezariana craiova",
    "tratament cicatrice cezariana",
    "cicatrice dupa cezariana",
    "cicatrice cezariana veche",
    "tratament cicatrice dupa nastere",
    "cicatrici postoperatorii craiova",
    "radiofrecventa cicatrice cezariana",
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
  name: "Tratament pentru cicatrice după cezariană în Craiova",
  serviceType: "Radiofrecvență fracționată pentru aspectul cicatricii după cezariană",
  description:
    "Procedură estetică în Craiova pentru îmbunătățirea aspectului unei cicatrici vindecate după cezariană. Radiofrecvență fracționată, de la 1000 lei / ședință / zonă, după evaluare.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  offers: {
    "@type": "Offer",
    name: "Radiofrecvență fracționată",
    priceCurrency: "RON",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "1000",
      priceCurrency: "RON",
    },
    description: "de la 1000 lei / ședință / zonă",
    url: `${businessProfile.url}/radiofrecventa-fractionata-craiova`,
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
      name: "Cicatrici și vergeturi",
      item: `${businessProfile.url}/cicatrici-vergeturi-craiova`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cicatrice după cezariană",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cicatriceCezarianaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function CicatriceCezarianaCraiovaPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <CicatriceCezarianaHero />
        <CicatriceCezarianaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre cicatricea după cezariană"
          subtitle="FAQ"
          faqs={[...cicatriceCezarianaFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
