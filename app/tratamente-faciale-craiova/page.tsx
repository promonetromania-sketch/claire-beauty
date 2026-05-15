import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { TratamenteFacialeCraiovaHero } from "@/components/services/tratamente-faciale-craiova/tratamente-faciale-craiova-hero"
import { TratamenteFacialeCraiovaSections } from "@/components/services/tratamente-faciale-craiova/tratamente-faciale-craiova-sections"
import {
  tratamenteFacialeFaqs,
  tratamenteFacialeWhatsappMessage,
} from "@/lib/content/tratamente-faciale-craiova"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/tratamente-faciale-craiova`

export const metadata: Metadata = {
  title:
    "Tratamente Faciale Craiova – Hydrafacial, Dermapen, HIFU și Microneedling pentru Ten Perfect",
  description:
    "Tratamente faciale Craiova pentru curățare, hidratare, cicatrici și lifting. Hydrafacial, Dermapen, microneedling și HIFU. Alege tratamentul potrivit pentru tenul tău.",
  keywords: [
    "tratamente faciale Craiova",
    "tratament facial Craiova",
    "Hydrafacial Craiova",
    "Dermapen Craiova",
    "microneedling Craiova",
    "HIFU Craiova",
    "microdermabraziune Craiova",
    "curățare ten Craiova",
    "lifting facial Craiova",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tratamente Faciale Craiova – Hydrafacial, Dermapen, HIFU și Microneedling pentru Ten Perfect",
    description:
      "Tratamente faciale Craiova pentru curățare, hidratare, cicatrici și lifting. Hydrafacial, Dermapen, microneedling și HIFU.",
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
  name: "Tratamente faciale Craiova",
  serviceType: "Tratamente faciale",
  description:
    "Tratamente faciale în Craiova: Hydrafacial, Dermapen, microneedling, HIFU și microdermabraziune.",
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
      name: "Tratamente faciale Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: tratamenteFacialeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function TratamenteFacialeCraiovaPage() {
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
        <TratamenteFacialeCraiovaHero />
        <TratamenteFacialeCraiovaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre tratamente faciale"
          subtitle="FAQ"
          faqs={[...tratamenteFacialeFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA
        layout="triple"
        whatsappMessage={tratamenteFacialeWhatsappMessage}
      />
    </>
  )
}
