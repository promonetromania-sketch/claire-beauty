import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CicatriciAcneeHero } from "@/components/services/cicatrici-acnee/cicatrici-acnee-hero"
import { CicatriciAcneeSections } from "@/components/services/cicatrici-acnee/cicatrici-acnee-sections"
import { cicatriciAcneeFaqs } from "@/lib/content/cicatrici-acnee"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/cicatrici-acnee-craiova`

const title = "Cicatrici Post-Acnee Craiova | Tratamente Claire Beauty"
const description =
  "Tratamente pentru cicatrici post-acnee în Craiova, gropițe și textură neuniformă. Radiofrecvență fracționată, microneedling și evaluare personalizată."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cicatrici acnee Craiova",
    "tratament cicatrici acnee Craiova",
    "tratament cicatrici post acnee",
    "cicatrici post acnee",
    "urme acnee Craiova",
    "tratament urme acnee",
    "gropite acnee",
    "tratament gropite acnee",
    "radiofrecventa cicatrici acnee",
    "microneedling cicatrici acnee",
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
  name: "Tratament pentru cicatrici post-acnee în Craiova",
  serviceType: "Tratamente estetice pentru cicatrici post-acnee",
  description:
    "Evaluare și tratamente estetice în Craiova pentru aspectul cicatricilor și al texturii neuniforme rămase după acnee. Radiofrecvență fracționată de la 1000 lei / ședință / zonă și microneedling de la 400 lei / ședință.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId,
  },
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
  offers: [
    {
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
    {
      "@type": "Offer",
      name: "Microneedling",
      priceCurrency: "RON",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "400",
        priceCurrency: "RON",
      },
      description: "de la 400 lei / ședință",
      url: `${businessProfile.url}/microneedling-craiova`,
    },
  ],
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
      name: "Cicatrici post-acnee",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cicatriciAcneeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function CicatriciAcneeCraiovaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <CicatriciAcneeHero />
        <CicatriciAcneeSections />
        <ServiceFAQ
          title="Întrebări frecvente despre cicatricile post-acnee"
          subtitle="FAQ"
          faqs={[...cicatriciAcneeFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
