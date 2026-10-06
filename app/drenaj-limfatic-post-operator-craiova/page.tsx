import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/pages/placeholder-page"
import { businessProfile } from "@/lib/seo/business"

// PAGINĂ ÎN LUCRU — scheletul există ca linkurile din meniu, footer și hub-uri
// să nu ducă în 404. Conținutul se scrie separat (drenaj limfatic medical,
// recuperare după liposucție, abdominoplastie, BBL; pagina generală rămâne
// /drenaj-limfatic-craiova).

const pageUrl = `${businessProfile.url}/drenaj-limfatic-post-operator-craiova`

export const metadata: Metadata = {
  title:
    "Drenaj Limfatic Post-operator Craiova | Recuperare după Operație | Claire Beauty",
  description:
    "Drenaj limfatic medical post-operator în Craiova: recuperare după liposucție, abdominoplastie și alte intervenții estetice sau chirurgicale.",
  keywords: [
    "drenaj limfatic post operator Craiova",
    "drenaj limfatic dupa liposuctie",
    "masaj dupa liposuctie Craiova",
    "drenaj limfatic medical Craiova",
    "recuperare dupa abdominoplastie",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Drenaj Limfatic Post-operator Craiova | Claire Beauty",
    description:
      "Recuperare după liposucție, abdominoplastie și alte intervenții, prin drenaj limfatic medical.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl },
}

export default function DrenajLimfaticPostOperatorCraiovaPage() {
  return (
    <PlaceholderPage
      title="Drenaj limfatic post-operator în Craiova"
      description="Pregătim pagina dedicată drenajului limfatic medical pentru recuperarea după liposucție, abdominoplastie și alte intervenții. Pentru programări și detalii, ne poți suna la +40 757 851 882."
    />
  )
}
