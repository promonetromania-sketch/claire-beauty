import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { cookiePolicySections } from "@/lib/legal/documents"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/politica-cookie`

export const metadata: Metadata = {
  title: "Politica de cookie | Claire Beauty Craiova",
  description:
    "Politica de cookie Claire Beauty Craiova — tipuri de cookie-uri, scopuri și cum îți gestionezi preferințele.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true } }

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Politica de cookie"
      description="Detalii despre cookie-urile utilizate pe site și opțiunile tale de consimțământ."
      sections={cookiePolicySections}
    />
  )
}
