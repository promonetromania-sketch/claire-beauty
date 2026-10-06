import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/pages/placeholder-page"
import { businessProfile } from "@/lib/seo/business"

// PAGINĂ ÎN LUCRU — scheletul există ca linkurile din meniu, footer și hub-uri
// să nu ducă în 404. Conținutul se scrie separat (HIFU pe corp: abdomen,
// brațe, coapse; pagina facială rămâne /hifu-facial-craiova).

const pageUrl = `${businessProfile.url}/hifu-corporal-craiova`

export const metadata: Metadata = {
  title: "HIFU Corporal Craiova | Lifting și Fermitate fără Operație | Claire Beauty",
  description:
    "HIFU corporal în Craiova: fermitate și lifting fără operație pentru abdomen, brațe și coapse, cu ultrasunete focalizate.",
  keywords: [
    "HIFU corporal Craiova",
    "HIFU Craiova",
    "hifu corporal pret",
    "lifting corporal fara operatie Craiova",
    "fermitate piele abdomen Craiova",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "HIFU Corporal Craiova | Claire Beauty",
    description:
      "Lifting și fermitate fără operație pentru abdomen, brațe și coapse, cu ultrasunete focalizate.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl },
}

export default function HifuCorporalCraiovaPage() {
  return (
    <PlaceholderPage
      title="HIFU corporal în Craiova"
      description="Pregătim pagina dedicată tratamentului HIFU pe corp — abdomen, brațe și coapse. Pentru programări și detalii, ne poți suna la +40 757 851 882."
    />
  )
}
