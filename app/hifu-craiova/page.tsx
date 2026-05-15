import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { HifuHero } from "@/components/services/hifu/hifu-hero"
import { HifuSections } from "@/components/services/hifu/hifu-sections"
import { hifuFaqs, hifuWhatsappMessage } from "@/lib/content/hifu"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/hifu-craiova`

export const metadata: Metadata = {
  title: "HIFU Craiova – Lifting Facial Fără Operație",
  description:
    "HIFU Craiova pentru lifting facial fără operație și fermitatea pielii. Stimulează colagenul și oferă efect de întinerire vizibil. Programează-te!",
  keywords: [
    "HIFU Craiova",
    "lifting facial Craiova",
    "lifting facial fără operație Craiova",
    "rejuvenare facială Craiova",
    "fermitate piele Craiova",
    "tratamente anti-aging Craiova",
    "tratamente faciale Craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "HIFU Craiova – Lifting Facial Fără Operație",
    description:
      "HIFU Craiova pentru lifting facial fără operație și fermitatea pielii.",
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
  name: "HIFU Craiova",
  serviceType: "HIFU",
  description:
    "HIFU în Craiova pentru lifting facial fără operație, fermitate și rejuvenare.",
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
      name: "HIFU Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hifuFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function HifuPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />
      <Header />
      <main className="pb-24 md:pb-0">
        <HifuHero />
        <HifuSections />
        <ServiceFAQ
          title="Întrebări frecvente despre HIFU"
          subtitle="FAQ"
          faqs={[...hifuFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" whatsappMessage={hifuWhatsappMessage} />
    </>
  )
}
