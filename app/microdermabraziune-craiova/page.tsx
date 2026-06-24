import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { MicrodermabraziuneHero } from "@/components/services/microdermabraziune/microdermabraziune-hero"
import { MicrodermabraziuneSections } from "@/components/services/microdermabraziune/microdermabraziune-sections"
import {
  microdermabraziuneFaqs} from "@/lib/content/microdermabraziune"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/microdermabraziune-craiova`

export const metadata: Metadata = {
  title:
    "Microdermabraziune Craiova – Curățare Facială, Exfoliere și Ten Curat Imediat | Claire Beauty Craiova",
  description:
    "Microdermabraziune Craiova pentru curățare profundă, exfoliere și ten mai luminos. Elimină celulele moarte și îmbunătățește textura pielii. Programează-te!",
  keywords: [
    "microdermabraziune Craiova",
    "curățare facială Craiova",
    "exfoliere facială Craiova",
    "tratamente faciale Craiova",
    "ten luminos Craiova",
    "pori dilatați Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title:
      "Microdermabraziune Craiova – Curățare Facială, Exfoliere și Ten Curat Imediat | Claire Beauty Craiova",
    description:
      "Microdermabraziune Craiova pentru curățare profundă, exfoliere și ten mai luminos.",
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
  name: "Microdermabraziune Craiova",
  serviceType: "Microdermabraziune",
  description:
    "Microdermabraziune în Craiova pentru curățare profundă, exfoliere și ten mai luminos.",
  url: pageUrl,
  provider: {
    "@id": localBusinessId },
  areaServed: {
    "@type": "City",
    name: "Craiova" } }

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Acasă",
      item: businessProfile.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Microdermabraziune Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: microdermabraziuneFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function MicrodermabraziunePage() {
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
        <MicrodermabraziuneHero />
        <MicrodermabraziuneSections />
        <ServiceFAQ
          title="Întrebări frecvente despre microdermabraziune"
          subtitle="FAQ"
          faqs={[...microdermabraziuneFaqs]}
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
