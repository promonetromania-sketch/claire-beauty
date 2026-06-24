import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal/legal-page-shell"
import { privacyPolicySections } from "@/lib/legal/documents"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/politica-confidentialitate`

export const metadata: Metadata = {
  title: "Politica de confidențialitate | Claire Beauty Craiova",
  description:
    "Politica de confidențialitate GDPR pentru Claire Beauty Craiova — cum prelucrăm datele personale și care sunt drepturile tale.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true } }

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Politica de confidențialitate"
      description="Informații despre prelucrarea datelor cu caracter personal conform Regulamentului (UE) 2016/679 (GDPR)."
      sections={privacyPolicySections}
    />
  )
}
