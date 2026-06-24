import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { LegalDocument } from "@/components/legal/legal-document"
import type { LegalSection } from "@/lib/legal/documents"
import { legalOperator } from "@/lib/legal/operator"

type LegalPageShellProps = {
  title: string
  description: string
  sections: LegalSection[]
}

const legalNav = [
  { href: "/politica-confidentialitate", label: "Confidențialitate" },
  { href: "/gdpr", label: "GDPR" },
  { href: "/politica-cookie", label: "Cookie" },
  { href: "/termeni-si-conditii", label: "Termeni" },
]

export function LegalPageShell({
  title,
  description,
  sections }: LegalPageShellProps) {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="bg-[#0E2B1F] pb-16 pt-36 sm:pt-40">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center text-sm font-medium text-[#FFF9F2]/70 transition-colors hover:text-[#D4AF37]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi acasă
            </Link>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Informații legale
            </p>
            <h1 className="mb-4 font-serif text-4xl font-semibold text-[#FFF9F2] sm:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-[#FFF9F2]/85">
              {description}
            </p>
            <p className="mt-4 text-sm text-[#FFF9F2]/60">
              Ultima actualizare: {legalOperator.lastUpdated}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Pagini legale"
              className="mb-12 flex flex-wrap gap-3"
            >
              {legalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium text-[#0E2B1F] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <LegalDocument sections={sections} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
