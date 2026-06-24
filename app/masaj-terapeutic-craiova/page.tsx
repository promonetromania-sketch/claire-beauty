import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { MasajTerapeuticHero } from "@/components/services/masaj-terapeutic/masaj-terapeutic-hero"
import { MasajTerapeuticSections } from "@/components/services/masaj-terapeutic/masaj-terapeutic-sections"
import {
  masajTerapeuticFaqs} from "@/lib/content/masaj-terapeutic"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/masaj-terapeutic-craiova`

export const metadata: Metadata = {
  title:
    "Masaj Terapeutic Craiova – Tratament pentru Dureri de Spate și Tensiune Musculară | Claire Beauty Craiova",
  description:
    "Masaj terapeutic Craiova pentru dureri de spate, tensiune musculară și mobilitate redusă. Reduce disconfortul și îmbunătățește starea generală. Programează-te!",
  keywords: [
    "masaj terapeutic Craiova",
    "dureri de spate Craiova",
    "tensiune musculară Craiova",
    "recuperare musculară Craiova",
    "mobilitate redusă Craiova",
    "masaj pentru dureri Craiova",
    "salon body spa Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title:
      "Masaj Terapeutic Craiova – Tratament pentru Dureri de Spate și Tensiune Musculară | Claire Beauty Craiova",
    description:
      "Masaj terapeutic Craiova pentru dureri de spate, tensiune musculară și mobilitate redusă.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl } }

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
    name: "Craiova" } }

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Masaj terapeutic Craiova",
  serviceType: "Masaj terapeutic",
  description:
    "Masaj terapeutic în Craiova pentru dureri de spate, tensiune musculară, recuperare și mobilitate.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId },
  areaServed: {
    "@type": "City",
    name: "Craiova" } }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: masajTerapeuticFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function MasajTerapeuticPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <MasajTerapeuticHero />
        <MasajTerapeuticSections />
        <ServiceFAQ
          title="Întrebări frecvente despre masaj terapeutic"
          subtitle="FAQ"
          faqs={[...masajTerapeuticFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA
        layout="triple"
      />
    </>
  )
}
