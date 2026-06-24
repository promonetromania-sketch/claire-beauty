import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { MicroneedlingHero } from "@/components/services/microneedling/microneedling-hero"
import { MicroneedlingSections } from "@/components/services/microneedling/microneedling-sections"
import {
  microneedlingFaqs} from "@/lib/content/microneedling"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/microneedling-craiova`

export const metadata: Metadata = {
  title:
    "Microneedling Craiova – Tratament pentru Cicatrici Acnee, Pori Dilatați și Regenerare Ten | Claire Beauty Craiova",
  description:
    "Microneedling Craiova pentru cicatrici post-acnee, pori dilatați și regenerarea pielii. Stimulează colagenul și îmbunătățește textura tenului. Programează-te!",
  keywords: [
    "microneedling Craiova",
    "tratament cicatrici acnee Craiova",
    "pori dilatați Craiova",
    "regenerare ten Craiova",
    "rejuvenare ten Craiova",
    "tratamente faciale Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title:
      "Microneedling Craiova – Tratament pentru Cicatrici Acnee, Pori Dilatați și Regenerare Ten | Claire Beauty Craiova",
    description:
      "Microneedling Craiova pentru cicatrici post-acnee, pori dilatați și regenerarea pielii.",
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
  name: "Microneedling Craiova",
  serviceType: "Microneedling",
  description:
    "Microneedling în Craiova pentru cicatrici post-acnee, pori dilatați și regenerarea pielii.",
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
      name: "Microneedling Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: microneedlingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function MicroneedlingPage() {
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
        <MicroneedlingHero />
        <MicroneedlingSections />
        <ServiceFAQ
          title="Întrebări frecvente despre microneedling"
          subtitle="FAQ"
          faqs={[...microneedlingFaqs]}
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
