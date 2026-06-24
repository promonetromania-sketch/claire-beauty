import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { MasajCraiovaHero } from "@/components/services/masaj-craiova/masaj-craiova-hero"
import { MasajCraiovaSections } from "@/components/services/masaj-craiova/masaj-craiova-sections"
import { HubBlogLinks } from "@/components/blog/hub-blog-links"
import {
  masajCraiovaFaqs} from "@/lib/content/masaj-craiova"
import { hubBlogLinks } from "@/lib/seo/traffic-push"
import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/masaj-craiova`

export const metadata: Metadata = {
  title: "Masaj Craiova – Tratamente Profesionale pentru Relaxare și Recuperare | Claire Beauty Craiova",
  description:
    "Masaj Craiova la Claire Beauty: alege tratamentul potrivit pentru relaxare, recuperare musculară sau wellness. Consultație personalizată și programări rapide.",
  keywords: [
    "masaj Craiova",
    "salon masaj Craiova",
    "masaj profesional Craiova",
    "tratament masaj Craiova",
    "Claire Beauty Craiova",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title:
      "Masaj Craiova – Tratamente Profesionale pentru Relaxare și Recuperare | Claire Beauty Craiova",
    description:
      "Masaj Craiova la Claire Beauty: alege tratamentul potrivit pentru relaxare, recuperare musculară sau wellness.",
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
  name: "Masaj Craiova",
  serviceType: "Masaj",
  description:
    "Servicii de masaj în Craiova: masaj terapeutic, masaj anticelulitic, drenaj limfatic și reflexoterapie.",
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
      name: "Masaj Craiova",
      item: pageUrl },
  ] }

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: masajCraiovaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer } })) }

export default function MasajCraiovaPage() {
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
        <MasajCraiovaHero />
        <MasajCraiovaSections />
        <HubBlogLinks links={hubBlogLinks.masaj} />
        <ServiceFAQ
          title="Întrebări frecvente despre masaj în Craiova"
          subtitle="FAQ"
          faqs={[...masajCraiovaFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
