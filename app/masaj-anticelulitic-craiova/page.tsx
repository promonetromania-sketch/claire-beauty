import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { MasajAnticeluliticHero } from "@/components/services/masaj-anticelulitic/masaj-anticelulitic-hero"
import { MasajAnticeluliticSections } from "@/components/services/masaj-anticelulitic/masaj-anticelulitic-sections"
import {
  masajAnticeluliticFaqs} from "@/lib/content/masaj-anticelulitic"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/masaj-anticelulitic-craiova`

export const metadata: Metadata = {
  title: "Masaj Anticelulitic Craiova – Tratament Profesional pentru Tonifiere | Claire Beauty Craiova",
  description:
    "Masaj anticelulitic Craiova la Claire Beauty: tehnici specializate pentru tonifiere, circulație și aspect îmbunătățit al pielii. Programează consultația ta.",
  keywords: [
    "masaj anticelulitic Craiova",
    "remodelare corporală Craiova",
    "reducere celulită Craiova",
    "tratament anticelulitic Craiova",
    "fermitate piele Craiova",
    "salon body spa Craiova",
    "masaj anticelulitic manual Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title:
      "Masaj Anticelulitic Craiova – Tratament Profesional pentru Tonifiere | Claire Beauty Craiova",
    description:
      "Masaj anticelulitic Craiova la Claire Beauty: tehnici specializate pentru tonifiere, circulație și aspect îmbunătățit al pielii.",
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
  name: "Masaj anticelulitic Craiova",
  serviceType: "Masaj anticelulitic",
  description:
    "Masaj anticelulitic în Craiova pentru reducerea celulitei, fermitatea pielii și remodelare corporală.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId },
  areaServed: {
    "@type": "City",
    name: "Craiova" } }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: masajAnticeluliticFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function MasajAnticeluliticPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, serviceSchema, faqSchema]} />
      <Header />
      <main className="pb-24 md:pb-0">
        <MasajAnticeluliticHero />
        <MasajAnticeluliticSections />
        <ServiceFAQ
          title="Întrebări frecvente despre masaj anticelulitic"
          subtitle="FAQ"
          faqs={[...masajAnticeluliticFaqs]}
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
