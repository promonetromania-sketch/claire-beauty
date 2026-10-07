import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { ServiceFAQ } from "@/components/services/service-faq"
import { PieleLasataHero } from "@/components/services/piele-lasata/piele-lasata-hero"
import { PieleLasataSections } from "@/components/services/piele-lasata/piele-lasata-sections"
import { pieleLasataFaqs } from "@/lib/content/piele-lasata"
import { businessProfile, localBusinessId } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/piele-lasata-craiova`

const title = "Piele Lăsată Craiova | Tratamente pentru Fermitate | Claire Beauty"
const description =
  "Tratamente în Craiova pentru piele lăsată și lipsă de fermitate pe abdomen, brațe și alte zone. Opțiuni personalizate la Claire Beauty."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "piele lasata craiova",
    "tratament piele lasata",
    "piele lasata dupa slabire",
    "piele lasata abdomen",
    "piele lasata brate",
    "tratament fermitate piele",
    "fermitate piele craiova",
    "laxitate piele",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tratamente pentru piele lăsată și fermitate corporală în Craiova",
  serviceType: "Tratamente pentru fermitatea pielii corporale",
  description:
    "Evaluare și tratamente corporale în Craiova pentru piele lăsată și lipsă de fermitate. HIFU corporal și radiofrecvență corporală, alese în funcție de zonă și obiectiv. Nu este un program de slăbit.",
  url: pageUrl,
  provider: { "@id": localBusinessId },
  areaServed: { "@type": "City", name: "Craiova" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Proceduri pentru fermitatea pielii corporale",
    itemListElement: [
      {
        "@type": "Offer",
        name: "HIFU corporal",
        url: `${businessProfile.url}/hifu-corporal-craiova`,
        priceCurrency: "RON",
        lowPrice: "800",
        highPrice: "1100",
      },
      {
        "@type": "Offer",
        name: "Radiofrecvență bipolară",
        url: `${businessProfile.url}/radiofrecventa-corporala-craiova`,
        priceCurrency: "RON",
        price: "150",
      },
      {
        "@type": "Offer",
        name: "Radiofrecvență monopolară",
        url: `${businessProfile.url}/radiofrecventa-corporala-craiova`,
        priceCurrency: "RON",
        price: "350",
        description: "de la 350 lei pe ședință / zonă",
      },
    ],
  },
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
      name: "Tratamente corporale Craiova",
      item: `${businessProfile.url}/tratamente-corporale-craiova`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Piele lăsată Craiova",
      item: pageUrl,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pieleLasataFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function PieleLasataCraiovaPage() {
  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <PieleLasataHero />
        <PieleLasataSections />
        <ServiceFAQ
          title="Întrebări frecvente despre pielea lăsată"
          subtitle="FAQ"
          faqs={[...pieleLasataFaqs]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
