import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { termsSections } from "@/lib/legal/documents"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/termeni-si-conditii`

export const metadata: Metadata = {
  title: "Termeni și condiții | Claire Beauty Craiova",
  description:
    "Termenii și condițiile de utilizare a site-ului Claire Beauty Craiova și serviciilor salonului body spa.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true } }

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Termeni și condiții"
      description="Regulile de utilizare a site-ului și condițiile generale pentru serviciile Claire Beauty Craiova."
      sections={termsSections}
    />
  )
}
