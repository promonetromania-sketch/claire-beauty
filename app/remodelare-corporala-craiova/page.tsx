import type { Metadata } from "next"

import { Header } from "@/components/layout/header"

import { Footer } from "@/components/layout/footer"

import { WhatsAppButton } from "@/components/layout/whatsapp-button"

import { MobileCTA } from "@/components/layout/mobile-cta"

import { JsonLd } from "@/components/seo/json-ld"

import { ServiceFAQ } from "@/components/services/service-faq"

import { HubBlogLinks } from "@/components/blog/hub-blog-links"

import { RemodelareHero } from "@/components/services/remodelare/remodelare-hero"

import { RemodelareSections } from "@/components/services/remodelare/remodelare-sections"

import {

  remodelareCorporalaFaqs} from "@/lib/content/remodelare-corporala-craiova"

import { businessProfile, localBusinessId, postalAddressSchema } from "@/lib/seo/business"

import { servicePageBlogLinks } from "@/lib/seo/traffic-push"



const pageUrl = `${businessProfile.url}/remodelare-corporala-craiova`



export const metadata: Metadata = {

  title:

    "Remodelare Corporală Craiova – Contur, Fermitate și Tonifiere | Claire Beauty Craiova",

  description:

    "Remodelare corporală în Craiova la Claire Beauty: radiofrecvență, electrostimulare, drenaj limfatic și masaj anticelulitic. Protocoale personalizate, fără operație. Programează consultația!",

  keywords: [

    "remodelare corporală Craiova",

    "contur corporal Craiova",

    "fermitate piele Craiova",

    "tonifiere corporală Craiova",

    "remodelare fără operație Craiova",

    "tratamente corporale Craiova",

    "Claire Beauty Craiova",

  ],

  alternates: {

    canonical: pageUrl },

  openGraph: {

    title:

      "Remodelare Corporală Craiova – Contur, Fermitate și Tonifiere | Claire Beauty Craiova",

    description:

      "Remodelare corporală în Craiova: protocoale personalizate cu radiofrecvență, electrostimulare și drenaj limfatic. Fără operație, la Claire Beauty Craiova.",

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

  name: "Remodelare corporală Craiova",

  serviceType: "Remodelare corporală",

  description:

    "Remodelare corporală în Craiova: protocoale personalizate cu radiofrecvență, electrostimulare, drenaj limfatic și masaj anticelulitic, fără operație, la Claire Beauty Craiova.",

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

      name: "Remodelare corporală Craiova",

      item: pageUrl },

  ] }



const faqSchema = {

  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: remodelareCorporalaFaqs.map((faq) => ({

    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {

      "@type": "Answer",

      text: faq.answer } })) }



export default function RemodelareCorporalaCraiovaPage() {

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

        <RemodelareHero />

        <RemodelareSections />

        <ServiceFAQ

          title="Întrebări frecvente despre remodelare corporală"

          subtitle="FAQ"

          faqs={[...remodelareCorporalaFaqs]}

        />

        <HubBlogLinks links={servicePageBlogLinks["/remodelare-corporala-craiova"]} />

      </main>

      <Footer />

      <WhatsAppButton />

      <MobileCTA

        layout="triple"

      />

    </>

  )

}


