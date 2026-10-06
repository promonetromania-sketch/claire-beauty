import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/pages/placeholder-page"
import { businessProfile } from "@/lib/seo/business"

// PAGINĂ ÎN LUCRU — scheletul există ca linkurile din meniu, footer și hub-uri
// să nu ducă în 404. Conținutul se scrie separat (RF fracțional: vergeturi,
// cicatrici de acnee, cicatrici post-operatorii și de cezariană).

const pageUrl = `${businessProfile.url}/cicatrici-vergeturi-craiova`

export const metadata: Metadata = {
  title:
    "Tratament Cicatrici și Vergeturi Craiova | Radiofrecvență Fracționată | Claire Beauty",
  description:
    "Tratament pentru vergeturi, cicatrici de acnee și cicatrici după operații sau cezariană, cu radiofrecvență fracționată, în Craiova.",
  keywords: [
    "tratament vergeturi Craiova",
    "tratament cicatrici Craiova",
    "cicatrici acnee Craiova",
    "cicatrice cezariana tratament",
    "radiofrecventa fractionata Craiova",
    "RF fractionat Craiova",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Tratament Cicatrici și Vergeturi Craiova | Claire Beauty",
    description:
      "Radiofrecvență fracționată pentru vergeturi, cicatrici de acnee și cicatrici post-operatorii, în Craiova.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl },
}

export default function CicatriciVergeturiCraiovaPage() {
  return (
    <PlaceholderPage
      title="Tratament cicatrici și vergeturi în Craiova"
      description="Pregătim pagina dedicată tratamentului cu radiofrecvență fracționată pentru vergeturi, cicatrici de acnee și cicatrici rămase după operații sau cezariană. Pentru programări și detalii, ne poți suna la +40 757 851 882."
    />
  )
}
