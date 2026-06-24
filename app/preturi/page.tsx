import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Calendar,
  Facebook,
  Hand,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { Button } from "@/components/ui/button"
import { PricingCategoryCard } from "@/components/pricing/pricing-category-card"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingHubLinks } from "@/components/pricing/pricing-hub-links"
import { pricingCategories } from "@/lib/content/pricing"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/preturi`

const categoryIcons = {
  "pachete-terapii": Zap,
  masaj: Hand,
  remodelare: Activity,
  faciale: Sparkles,
} as const

export const metadata: Metadata = {
  title:
    "Prețuri Claire Beauty Craiova - Masaj, Tratamente Faciale și Remodelare Corporală",
  description:
    "Vezi lista de prețuri Claire Beauty Craiova pentru masaj, drenaj limfatic, remodelare corporală, HIFU, Hydrafacial, microneedling și tratamente body spa.",
  keywords: [
    "prețuri masaj Craiova",
    "prețuri Hydrafacial Craiova",
    "prețuri HIFU Craiova",
    "prețuri remodelare corporală Craiova",
    "Claire Beauty prețuri",
    "body spa Craiova prețuri",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Prețuri Claire Beauty Craiova - Masaj, Tratamente Faciale și Remodelare Corporală",
    description:
      "Listă de prețuri pentru masaj, drenaj limfatic, remodelare corporală, HIFU, Hydrafacial și tratamente body spa la Claire Beauty Craiova.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl,
  },
}

export default function PreturiPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0E2B1F] pb-20 pt-36 sm:pb-24 sm:pt-40">
          <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Body Spa · Craiova
            </p>
            <h1 className="mb-6 font-serif text-3xl font-semibold leading-tight text-[#FFF9F2] sm:text-4xl lg:text-5xl">
              Prețuri Claire Beauty Craiova
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#FFF9F2]/82 sm:text-lg">
              Alege tratamentul potrivit pentru tine: masaj, remodelare
              corporală, tratamente faciale, HIFU, drenaj limfatic și terapii
              body spa.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="premium-btn-primary rounded-full px-8"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Programează-te
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#FFF9F2]/30 bg-transparent px-8 text-[#FFF9F2] hover:bg-[#FFF9F2]/10"
              >
                <Link href="/#servicii-populare" className="inline-flex items-center gap-2">
                  Vezi serviciile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing categories */}
        <section className="bg-[#F7F0E6] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {pricingCategories.map((category) => {
                const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
                return (
                  <PricingCategoryCard
                    key={category.id}
                    category={category}
                    icon={Icon}
                  />
                )
              })}
            </div>
          </div>
        </section>

        <PricingHubLinks />

        {/* Promoții */}
        <section className="bg-[#FFF9F2] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[#B8962E]">
              Oferte speciale
            </p>
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#0E2B1F] sm:text-3xl">
              Promoții și pachete personalizate
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#0E2B1F]/72 sm:text-lg">
              Promoțiile sunt afișate lunar pe pagina de Facebook Claire
              Beauty. Pentru pachetele personalizate se pot oferi reduceri și
              proceduri cadou, în funcție de obiectiv, frecvență și
              tratamentele alese.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="premium-btn-primary rounded-full px-8"
              >
                <Link href="/contact">Cere o recomandare personalizată</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#0E2B1F]/15 bg-transparent px-8 text-[#0E2B1F] hover:bg-[#0E2B1F]/5"
              >
                <a
                  href={businessProfile.sameAs[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Facebook className="h-5 w-5" />
                  Vezi Facebook
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F7F0E6] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-[#B8962E]">
                Întrebări frecvente
              </p>
              <h2 className="font-serif text-2xl font-semibold text-[#0E2B1F] sm:text-3xl">
                Informații utile despre prețuri
              </h2>
            </div>
            <PricingFAQ />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#0E2B1F] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-5 font-serif text-2xl font-semibold text-[#FFF9F2] sm:text-3xl lg:text-4xl">
              Nu știi ce tratament ți se potrivește?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-[#FFF9F2]/80 sm:text-lg">
              Echipa Claire Beauty Craiova te poate ghida către procedura
              potrivită în funcție de obiectivul tău: relaxare, tonifiere,
              remodelare, îngrijire facială sau recuperare postoperatorie.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="premium-btn-primary rounded-full px-8"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Programează-te
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-[#FFF9F2]/30 bg-transparent px-8 text-[#FFF9F2] hover:bg-[#FFF9F2]/10"
              >
                <a
                  href={`tel:${businessProfile.telephone}`}
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Sună acum
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
