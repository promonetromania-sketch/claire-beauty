import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { gdprSections } from "@/lib/legal/documents"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/gdpr`

export const metadata: Metadata = {
  title: "Informații GDPR | Claire Beauty Craiova",
  description:
    "Drepturile tale conform GDPR la Claire Beauty Craiova — cum poți accesa, rectifica sau șterge datele personale și cum depui plângere la ANSPDCP.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true } }

export default function GdprPage() {
  return (
    <LegalPageShell
      title="Informații GDPR"
      description="Drepturile tale conform Regulamentului (UE) 2016/679 și cum le poți exercita la Claire Beauty Craiova."
      sections={gdprSections}
    />
  )
}
