import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { RadiofrecventaHero } from "@/components/services/radiofrecventa/radiofrecventa-hero"
import { RadiofrecventaSections } from "@/components/services/radiofrecventa/radiofrecventa-sections"
import {
  radiofrecventaFaqs} from "@/lib/content/radiofrecventa"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/radiofrecventa-corporala-craiova`

export const metadata: Metadata = {
  title: "Radiofrecvență Corporală Craiova – Fermitate și Contur | Claire Beauty Craiova",
  description:
    "Radiofrecvență Craiova pentru fermitatea pielii, reducerea celulitei și remodelare corporală. Rezultate vizibile. Programează-te!",
  keywords: [
    "radiofrecvență Craiova",
    "fermizare piele Craiova",
    "remodelare corporală Craiova",
    "reducere celulită Craiova",
    "tonifiere corporală Craiova",
    "tratamente corporale Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title: "Radiofrecvență Corporală Craiova – Fermitate și Contur | Claire Beauty Craiova",
    description:
      "Radiofrecvență Craiova pentru fermitatea pielii, reducerea celulitei și remodelare corporală.",
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
  name: "Radiofrecvență Craiova",
  serviceType: "Radiofrecvență corporală",
  description:
    "Radiofrecvență în Craiova pentru fermitatea pielii, reducerea celulitei și remodelare corporală.",
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
      name: "Radiofrecvență Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: radiofrecventaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function RadiofrecventaPage() {
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
        <RadiofrecventaHero />
        <RadiofrecventaSections />
        <ServiceFAQ
          title="Întrebări frecvente despre radiofrecvență"
          subtitle="FAQ"
          faqs={[...radiofrecventaFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
