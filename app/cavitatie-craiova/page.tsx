import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CavitatieHero } from "@/components/services/cavitatie/cavitatie-hero"
import { CavitatieSections } from "@/components/services/cavitatie/cavitatie-sections"
import { cavitatieFaqs } from "@/lib/content/cavitatie"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/cavitatie-craiova`

export const metadata: Metadata = {
  title: "Cavitație Craiova | Remodelare Corporală | Claire Beauty",
  description:
    "Cavitație corporală în Craiova la Claire Beauty. Descoperă cum funcționează procedura, pentru ce zone este potrivită și care este prețul unei ședințe.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Cavitație Craiova | Remodelare Corporală | Claire Beauty",
    description:
      "Cavitație corporală în Craiova la Claire Beauty. Procedură pentru aspectul unei zone, 150 lei pe ședință. Nu este un program de slăbire.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cavitație corporală Craiova",
  serviceType: "Cavitație corporală",
  description:
    "Cavitație corporală în Craiova, procedură non-invazivă pentru remodelarea aspectului unei zone. 150 lei pe ședință, 40 de minute. Nu este o metodă de slăbire.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  offers: {
    "@type": "Offer",
    priceCurrency: "RON",
    price: "150",
    description: "150 lei pe ședință. Durata din lista de prețuri: 40 de minute.",
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
      name: "Remodelare corporală Craiova",
      item: `${businessProfile.url}/remodelare-corporala-craiova`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Cavitație Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cavitatieFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function CavitatieCraiovaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <CavitatieHero />
        <CavitatieSections />
        <ServiceFAQ
          title="Întrebări frecvente despre cavitație"
          subtitle="FAQ"
          faqs={[...cavitatieFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
