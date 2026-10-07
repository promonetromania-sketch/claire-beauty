import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { VergeturiRosiiAlbeHero } from "@/components/services/vergeturi-rosii-albe/vergeturi-rosii-albe-hero"
import { VergeturiRosiiAlbeSections } from "@/components/services/vergeturi-rosii-albe/vergeturi-rosii-albe-sections"
import { vergeturiRosiiAlbeFaqs } from "@/lib/content/vergeturi-rosii-albe"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/vergeturi-rosii-albe-craiova`

const title = "Vergeturi Roșii și Albe Craiova | Tratament | Claire Beauty"
const description =
  "Vergeturi roșii sau albe? Află diferențele și opțiunile pentru îmbunătățirea aspectului vergeturilor în Craiova, la Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "vergeturi rosii",
    "vergeturi albe",
    "vergeturi rosii tratament",
    "vergeturi albe tratament",
    "vergeturi vechi",
    "vergeturi recente",
    "tratament vergeturi craiova",
    "vergeturi abdomen",
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
  name: "Vergeturi roșii și albe — evaluare și tratament în Craiova",
  serviceType: "Radiofrecvență fracționată pentru aspectul vergeturilor",
  description:
    "Ghid despre diferența dintre vergeturile roșii și cele albe, cu evaluare în Craiova. Radiofrecvență fracționată de la 1000 lei / ședință / zonă, dacă procedura este potrivită. Fără promisiunea că vergeturile dispar complet.",
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
      name: "Vergeturi roșii și albe",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: vergeturiRosiiAlbeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function VergeturiRosiiAlbeCraiovaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <VergeturiRosiiAlbeHero />
        <VergeturiRosiiAlbeSections />
        <ServiceFAQ
          title="Întrebări frecvente despre vergeturile roșii și albe"
          subtitle="FAQ"
          faqs={[...vergeturiRosiiAlbeFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
