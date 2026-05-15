import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ElectrostimulareHero } from "@/components/services/electrostimulare/electrostimulare-hero"
import { ElectrostimulareSections } from "@/components/services/electrostimulare/electrostimulare-sections"
import {
  electrostimulareFaqs,
  electrostimulareWhatsappMessage,
} from "@/lib/content/electrostimulare"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/electrostimulare-craiova`

export const metadata: Metadata = {
  title: "Electrostimulare Craiova – Tonifiere Musculară și Remodelare Corporală",
  description:
    "Electrostimulare Craiova pentru tonifiere rapidă, ardere calorică și remodelare corporală. Rezultate vizibile fără sală. Programează-te!",
  keywords: [
    "electrostimulare Craiova",
    "tonifiere corporală Craiova",
    "remodelare corporală Craiova",
    "electrostimulare abdomen Craiova",
    "ardere calorică Craiova",
    "fermitate corporală Craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Electrostimulare Craiova – Tonifiere Musculară și Remodelare Corporală",
    description:
      "Electrostimulare Craiova pentru tonifiere rapidă, ardere calorică și remodelare corporală.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: businessProfile.address.locality,
    addressRegion: businessProfile.address.region,
    addressCountry: businessProfile.address.country,
  },
  sameAs: businessProfile.sameAs,
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrostimulare Craiova",
  serviceType: "Electrostimulare",
  description:
    "Electrostimulare în Craiova pentru tonifiere musculară, ardere calorică și remodelare corporală.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId,
  },
  areaServed: {
    "@type": "City",
    name: "Craiova",
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
      name: "Electrostimulare Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: electrostimulareFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function ElectrostimularePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema,
          serviceSchema,
          breadcrumbSchema,
          faqSchema,
        ]}
      />
      <Header />
      <main className="pb-24 md:pb-0">
        <ElectrostimulareHero />
        <ElectrostimulareSections />
        <ServiceFAQ
          title="Întrebări frecvente despre electrostimulare"
          subtitle="FAQ"
          faqs={[...electrostimulareFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA
        layout="triple"
        whatsappMessage={electrostimulareWhatsappMessage}
      />
    </>
  )
}
