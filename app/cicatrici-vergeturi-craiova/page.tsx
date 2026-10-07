import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CicatriciVergeturiHero } from "@/components/services/cicatrici-vergeturi/cicatrici-vergeturi-hero"
import { CicatriciVergeturiSections } from "@/components/services/cicatrici-vergeturi/cicatrici-vergeturi-sections"
import { cicatriciVergeturiFaqs } from "@/lib/content/cicatrici-vergeturi"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/cicatrici-vergeturi-craiova`

const title = "Tratament Cicatrici și Vergeturi Craiova | Claire Beauty"
const description =
  "Tratament profesional pentru cicatrici și vergeturi în Craiova, cu radiofrecvență. Vergeturi, cicatrici post-acnee, postoperatorii și după cezariană. Programează o evaluare."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "tratament cicatrici Craiova",
    "tratament vergeturi Craiova",
    "tratament cicatrici acnee Craiova",
    "tratament cicatrici post-acnee",
    "tratament cicatrice cezariană",
    "tratament cicatrici postoperatorii",
    "radiofrecvență cicatrici",
    "radiofrecvență vergeturi",
    "laser vergeturi Craiova",
    "tratament vergeturi laser Craiova",
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
  name: "Tratament cicatrici și vergeturi Craiova",
  serviceType: "Radiofrecvență pentru cicatrici și vergeturi",
  description:
    "Tratament cu radiofrecvență în Craiova pentru îmbunătățirea aspectului vergeturilor, cicatricilor post-acnee, cicatricilor postoperatorii și cicatricilor după cezariană.",
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
    price: "1000",
    priceCurrency: "RON",
    url: pageUrl,
    description: "1.000 lei pe ședință. Protocolul se stabilește după evaluarea zonei.",
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
      name: "Tratament cicatrici și vergeturi Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cicatriciVergeturiFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function CicatriciVergeturiCraiovaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <CicatriciVergeturiHero />
        <CicatriciVergeturiSections />
        <ServiceFAQ
          title="Întrebări frecvente despre cicatrici și vergeturi"
          subtitle="FAQ"
          faqs={[...cicatriciVergeturiFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
