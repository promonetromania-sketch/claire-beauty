import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { DrenajHero } from "@/components/services/drenaj-limfatic/drenaj-hero"
import { DrenajSections } from "@/components/services/drenaj-limfatic/drenaj-sections"
import { drenajFaqs, drenajWhatsappMessage } from "@/lib/content/drenaj-limfatic"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/drenaj-limfatic-craiova`

export const metadata: Metadata = {
  title: "Drenaj Limfatic Craiova – Elimină Retenția de Apă | Claire Beauty",
  description:
    "Drenaj limfatic Craiova la Claire Beauty. Elimină retenția de apă, detoxifică organismul și reduce inflamația. Programează-te acum!",
  keywords: [
    "drenaj limfatic Craiova",
    "eliminare retenție apă Craiova",
    "detoxifiere Craiova",
    "drenaj limfatic anticelulitic Craiova",
    "remodelare corporală Craiova",
    "drenaj limfatic manual Craiova",
    "salon body spa Craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Drenaj Limfatic Craiova – Elimină Retenția de Apă | Claire Beauty",
    description:
      "Drenaj limfatic Craiova la Claire Beauty. Elimină retenția de apă, detoxifică organismul și reduce inflamația.",
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
  name: "Drenaj limfatic Craiova",
  serviceType: "Drenaj limfatic",
  description:
    "Drenaj limfatic manual în Craiova pentru eliminarea retenției de apă, detoxifiere și remodelare corporală.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId,
  },
  areaServed: {
    "@type": "City",
    name: "Craiova",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: drenajFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function DrenajLimfaticPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <DrenajHero />
        <DrenajSections />
        <ServiceFAQ
          title="Întrebări frecvente despre drenaj limfatic"
          subtitle="FAQ"
          faqs={[...drenajFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA
        layout="triple"
        whatsappMessage={drenajWhatsappMessage}
      />
    </>
  )
}
