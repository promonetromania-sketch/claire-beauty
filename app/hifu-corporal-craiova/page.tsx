import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { HifuCorporalHero } from "@/components/services/hifu-corporal/hifu-corporal-hero"
import { HifuCorporalSections } from "@/components/services/hifu-corporal/hifu-corporal-sections"
import { hifuCorporalFaqs } from "@/lib/content/hifu-corporal"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/hifu-corporal-craiova`

export const metadata: Metadata = {
  title: "HIFU Corporal Craiova | Fermitate și Tonifiere | Claire Beauty",
  description:
    "HIFU corporal în Craiova pentru fermitatea și îmbunătățirea aspectului pielii. Tratament personalizat la Claire Beauty. Preț 800-1.100 lei. Programează o evaluare.",
  keywords: [
    "hifu craiova",
    "hifu corporal craiova",
    "tratament hifu craiova",
    "hifu corp",
    "tratament corporal hifu",
    "fermitate piele craiova",
    "tonifiere corporală craiova",
    "tratament fermitate corporală craiova",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "HIFU Corporal Craiova | Fermitate și Tonifiere | Claire Beauty",
    description:
      "HIFU corporal în Craiova pentru fermitatea și îmbunătățirea aspectului pielii. Preț 800-1.100 lei. Programează o evaluare.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HIFU corporal Craiova",
  serviceType: "HIFU corporal",
  description:
    "Tratament HIFU corporal în Craiova pentru fermitatea și aspectul pielii. Nu este un program de slăbit. Preț 800-1.100 lei, în funcție de zonă și protocol.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "RON",
    lowPrice: "800",
    highPrice: "1100",
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
      name: "Tratamente corporale Craiova",
      item: `${businessProfile.url}/tratamente-corporale-craiova`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "HIFU corporal Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hifuCorporalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HifuCorporalCraiovaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <HifuCorporalHero />
        <HifuCorporalSections />
        <ServiceFAQ
          title="Întrebări frecvente despre HIFU corporal"
          subtitle="FAQ"
          faqs={[...hifuCorporalFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
