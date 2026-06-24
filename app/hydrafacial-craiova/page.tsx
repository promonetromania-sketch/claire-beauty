import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { HubBlogLinks } from "@/components/blog/hub-blog-links"
import { HydrafacialHero } from "@/components/services/hydrafacial/hydrafacial-hero"
import { HydrafacialSections } from "@/components/services/hydrafacial/hydrafacial-sections"
import {
  hydrafacialFaqs} from "@/lib/content/hydrafacial"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"
import { servicePageBlogLinks } from "@/lib/seo/traffic-push"

const pageUrl = `${businessProfile.url}/hydrafacial-craiova`

export const metadata: Metadata = {
  title: "Hydrafacial Craiova – Curățare Facială Profesională | Claire Beauty Craiova",
  description:
    "Hydrafacial Craiova pentru curățare profundă, hidratare intensă și ten luminos. Elimină punctele negre. Rezultate imediate. Programează-te!",
  keywords: [
    "Hydrafacial Craiova",
    "curățare facială Craiova",
    "tratament facial Craiova",
    "hidratare ten Craiova",
    "ten luminos Craiova",
    "puncte negre Craiova",
    "tratamente faciale Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title: "Hydrafacial Craiova – Curățare Facială Profesională | Claire Beauty Craiova",
    description:
      "Hydrafacial Craiova pentru curățare profundă, hidratare intensă și ten luminos.",
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
  name: "Hydrafacial Craiova",
  serviceType: "Hydrafacial",
  description:
    "Hydrafacial în Craiova pentru curățare profundă, hidratare intensă și ten luminos.",
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
      name: "Hydrafacial Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hydrafacialFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function HydrafacialPage() {
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
        <HydrafacialHero />
        <HydrafacialSections />
        <ServiceFAQ
          title="Întrebări frecvente despre Hydrafacial"
          subtitle="FAQ"
          faqs={[...hydrafacialFaqs]}
        />
        <HubBlogLinks links={servicePageBlogLinks["/hydrafacial-craiova"]} />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
