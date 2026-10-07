import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { VergeturiDupaSarcinaHero } from "@/components/services/vergeturi-dupa-sarcina/vergeturi-dupa-sarcina-hero"
import { VergeturiDupaSarcinaSections } from "@/components/services/vergeturi-dupa-sarcina/vergeturi-dupa-sarcina-sections"
import { vergeturiDupaSarcinaFaqs } from "@/lib/content/vergeturi-dupa-sarcina"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/vergeturi-dupa-sarcina-craiova`

const title = "Vergeturi după Sarcină Craiova | Tratament | Claire Beauty"
const description =
  "Tratament pentru vergeturi după sarcină în Craiova. Opțiuni personalizate pentru vergeturi recente sau vechi și evaluare la Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "vergeturi dupa sarcina craiova",
    "tratament vergeturi dupa sarcina",
    "vergeturi dupa nastere",
    "vergeturi abdomen",
    "vergeturi pe burta",
    "vergeturi rosii",
    "vergeturi albe",
    "tratament vergeturi craiova",
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
  name: "Tratament pentru vergeturi după sarcină în Craiova",
  serviceType: "Radiofrecvență fracționată pentru aspectul vergeturilor după sarcină",
  description:
    "Evaluare în Craiova pentru vergeturi apărute în timpul sau după sarcină. Radiofrecvență fracționată de la 1000 lei / ședință / zonă, dacă procedura este potrivită. Fără promisiunea că vergeturile dispar complet.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  offers: {
    "@type": "Offer",
    name: "Radiofrecvență fracționată",
    priceCurrency: "RON",
    price: "1000",
    description:
      "Preț de pornire: de la 1000 lei / ședință / zonă. Poate varia în funcție de zona tratată.",
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
      name: "Vergeturi după sarcină",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vergeturiDupaSarcinaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function VergeturiDupaSarcinaCraiovaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <VergeturiDupaSarcinaHero />
        <VergeturiDupaSarcinaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre vergeturile după sarcină"
          subtitle="FAQ"
          faqs={[...vergeturiDupaSarcinaFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
