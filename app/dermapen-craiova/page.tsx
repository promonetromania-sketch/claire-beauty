import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { DermapenHero } from "@/components/services/dermapen/dermapen-hero"
import { DermapenSections } from "@/components/services/dermapen/dermapen-sections"
import { dermapenFaqs, dermapenWhatsappMessage } from "@/lib/content/dermapen"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/dermapen-craiova`

export const metadata: Metadata = {
  title:
    "Dermapen Craiova – Tratament pentru Cicatrici Post-Acnee, Riduri și Regenerare Ten",
  description:
    "Dermapen Craiova pentru cicatrici post-acnee, riduri și ten neuniform. Stimulează colagenul și îmbunătățește textura pielii. Programează-te!",
  keywords: [
    "Dermapen Craiova",
    "cicatrici post-acnee Craiova",
    "regenerare ten Craiova",
    "colagen Craiova",
    "riduri fine Craiova",
    "tratamente faciale Craiova",
    "textură neuniformă Craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Dermapen Craiova – Tratament pentru Cicatrici Post-Acnee, Riduri și Regenerare Ten",
    description:
      "Dermapen Craiova pentru cicatrici post-acnee, riduri și ten neuniform.",
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
  name: "Dermapen Craiova",
  serviceType: "Dermapen",
  description:
    "Dermapen în Craiova pentru cicatrici post-acnee, riduri și regenerarea pielii.",
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
      name: "Dermapen Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dermapenFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function DermapenPage() {
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
        <DermapenHero />
        <DermapenSections />
        <ServiceFAQ
          title="Întrebări frecvente despre Dermapen"
          subtitle="FAQ"
          faqs={[...dermapenFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" whatsappMessage={dermapenWhatsappMessage} />
    </>
  )
}
