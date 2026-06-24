import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { TratamenteCorporaleHero } from "@/components/services/tratamente-corporale/tratamente-corporale-hero"
import { TratamenteCorporaleSections } from "@/components/services/tratamente-corporale/tratamente-corporale-sections"
import { HubBlogLinks } from "@/components/blog/hub-blog-links"
import {
  tratamenteCorporaleFaqs} from "@/lib/content/tratamente-corporale-craiova"
import { hubBlogLinks } from "@/lib/seo/traffic-push"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/tratamente-corporale-craiova`

export const metadata: Metadata = {
  title: "Tratamente Corporale Craiova | Remodelare și Masaj | Claire Beauty Craiova",
  description:
    "Descoperă tratamente corporale în Craiova la Claire Beauty: remodelare corporală, masaj anticelulitic, masaj de relaxare și îngrijire personalizată.",
  keywords: [
    "tratamente corporale Craiova",
    "remodelare corporală Craiova",
    "masaj anticelulitic Craiova",
    "masaj Craiova",
    "îngrijire corporală Craiova",
    "Claire Beauty Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title: "Tratamente Corporale Craiova | Remodelare și Masaj | Claire Beauty Craiova",
    description:
      "Descoperă tratamente corporale în Craiova la Claire Beauty: remodelare corporală, masaj anticelulitic, masaj de relaxare și îngrijire personalizată.",
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
  name: "Tratamente corporale Craiova",
  serviceType: "Tratamente corporale",
  description:
    "Tratamente corporale în Craiova: remodelare corporală, masaj anticelulitic, masaj de relaxare și îngrijire personalizată la Claire Beauty.",
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
      name: "Tratamente corporale Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: tratamenteCorporaleFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function TratamenteCorporaleCraiovaPage() {
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
        <TratamenteCorporaleHero />
        <TratamenteCorporaleSections />
        <HubBlogLinks links={hubBlogLinks.corporal} />
        <ServiceFAQ
          title="Întrebări frecvente despre tratamente corporale"
          subtitle="FAQ"
          faqs={[...tratamenteCorporaleFaqs]}
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
