import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { BlogCard } from "@/components/blog/blog-card"
import { getAllBlogPosts } from "@/lib/content/blog"
import { getTier1PrioritySlugs } from "@/lib/seo/index-tiers"
import { businessProfile } from "@/lib/seo/business"

const pageUrl = `${businessProfile.url}/blog`

export const metadata: Metadata = {
  title: "Blog Claire Beauty Craiova | Sfaturi Beauty, Masaj & Tratamente",
  description:
    "Articole informative despre tratamente faciale, masaj, remodelare corporală și îngrijire la Claire Beauty Craiova. Ghiduri utile și recomandări de la specialiști.",
  keywords: [
    "blog beauty Craiova",
    "sfaturi ingrijire ten",
    "articole masaj Craiova",
    "tratamente corporale ghid",
    "Claire Beauty blog",
  ],
  alternates: {
    canonical: pageUrl },
  openGraph: {
    title: "Blog Claire Beauty Craiova | Sfaturi Beauty & Wellness",
    description:
      "Ghiduri utile despre tratamente faciale, masaj anticelulitic, remodelare corporală și wellness în Craiova.",
    type: "website",
    locale: "ro_RO",
    url: pageUrl } }

export default function BlogIndexPage() {
  const tier1Slugs = new Set(getTier1PrioritySlugs())
  const allPosts = getAllBlogPosts().sort((a, b) => {
    const aTier = tier1Slugs.has(a.slug) ? 0 : 1
    const bTier = tier1Slugs.has(b.slug) ? 0 : 1
    if (aTier !== bTier) return aTier - bTier
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  })

  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="relative overflow-hidden bg-[#0E2B1F] pb-20 pt-36 sm:pb-24 sm:pt-40">
          <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center text-sm font-medium text-[#FFF9F2]/70 transition-colors hover:text-[#D4AF37]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi acasă
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Blog Claire Beauty
            </p>
            <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold text-[#FFF9F2] sm:text-5xl">
              Sfaturi, ghiduri și noutăți din lumea beauty
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#FFF9F2]/85">
              Articole informative despre tratamente faciale, masaj, remodelare
              corporală și wellness — scrise pentru clientele din Craiova care
              vor informații clare și recomandări de la specialiști.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                  {allPosts.length} articole
                </p>
                <h2 className="font-serif text-3xl font-semibold text-foreground">
                  Toate articolele din blog
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#D4AF37]"
              >
                Programează analiză personalizată
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post) => (
                <li key={post.slug} className="h-full">
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
