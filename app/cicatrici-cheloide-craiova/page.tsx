import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CicatriciCheloideHero } from "@/components/services/cicatrici-cheloide/cicatrici-cheloide-hero"
import { CicatriciCheloideSections } from "@/components/services/cicatrici-cheloide/cicatrici-cheloide-sections"
import { cicatriciCheloideFaqs } from "@/lib/content/cicatrici-cheloide"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/cicatrici-cheloide-craiova`

const title = "Cicatrici Cheloide Craiova | Evaluare și Opțiuni | Claire Beauty"
const description =
  "Ai o cicatrice îngroșată sau reliefată? Află diferența dintre cicatricile cheloide și alte cicatrici și ce opțiuni pot fi discutate în Craiova."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cicatrice cheloida craiova",
    "cicatrici cheloide",
    "cicatrice reliefata",
    "cicatrice ingrosata",
    "cicatrice hipertrofica",
    "cicatrice cheloida cezariana",
    "cicatrice postoperatorie",
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
  name: "Evaluare pentru cicatrici reliefate în Craiova",
  serviceType: "Evaluare estetică pentru cicatrici reliefate",
  description:
    "Discuție la Claire Beauty Craiova despre cicatrici reliefate și despre întrebarea legată de cicatricile cheloide. Procedurile estetice se iau în calcul numai pentru anumite cicatrici vindecate, când sunt potrivite. Nu este un diagnostic medical.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
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
      name: "Cicatrici reliefate",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: cicatriciCheloideFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function CicatriciCheloideCraiovaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <CicatriciCheloideHero />
        <CicatriciCheloideSections />
        <ServiceFAQ
          title="Întrebări frecvente despre cicatricile reliefate"
          subtitle="FAQ"
          faqs={[...cicatriciCheloideFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
