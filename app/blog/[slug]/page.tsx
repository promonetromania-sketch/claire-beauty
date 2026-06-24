import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { BlogArticleContent } from "@/components/blog/blog-article-content"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogRecommendedServices } from "@/components/blog/blog-recommended-services"
import { ServiceCTA } from "@/components/services/service-cta"
import { ServiceFAQ } from "@/components/services/service-faq"
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogSlugs } from "@/lib/content/blog"
import { businessProfile, localBusinessId } from "@/lib/seo/business"
import { resolveBlogImageSrc, resolveBlogOgImageSrc } from "@/lib/seo/blog-images"
import { isTier1Slug } from "@/lib/seo/index-tiers"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: "Articol negăsit" }
  }

  const pageUrl = `${businessProfile.url}/blog/${post.slug}`
  const ogImageSrc = resolveBlogOgImageSrc(post.slug, post.image.src)

  return {
    title: `${post.title} | Claire Beauty Craiova`,
    description: post.metaDescription,
    keywords: [...post.keywords],
    alternates: {
      canonical: pageUrl },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      locale: "ro_RO",
      url: pageUrl,
      publishedTime: post.publishedAt,
      images: [
        {
          url: `${businessProfile.url}${ogImageSrc}`,
          alt: post.image.alt },
      ] } }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const pageUrl = `${businessProfile.url}/blog/${post.slug}`
  const heroImageSrc = resolveBlogImageSrc(post.slug, post.image.src)

  const relatedFromPatch = post.relatedArticles ?? []
  const relatedPosts =
    relatedFromPatch.length >= 3
      ? relatedFromPatch
          .slice(0, 3)
          .map((link) => getBlogPostBySlug(link.href.replace("/blog/", "")))
          .filter((item): item is NonNullable<typeof item> => Boolean(item))
      : getAllBlogPosts()
          .filter((item) => item.slug !== post.slug)
          .sort((a, b) => {
            const aTier = isTier1Slug(a.slug) ? 0 : 1
            const bTier = isTier1Slug(b.slug) ? 0 : 1
            return aTier - bTier
          })
          .slice(0, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${businessProfile.url}${heroImageSrc}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: businessProfile.name,
      url: businessProfile.url },
    publisher: {
      "@type": "Organization",
      name: businessProfile.name,
      "@id": localBusinessId },
    mainEntityOfPage: pageUrl,
    url: pageUrl }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: businessProfile.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${businessProfile.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl },
    ] }

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer } })) }
      : null

  return (
    <>
      <JsonLd
        data={
          faqSchema
            ? [articleSchema, breadcrumbSchema, faqSchema]
            : [articleSchema, breadcrumbSchema]
        }
      />
      <Header />
      <main className="pb-24 md:pb-0">
        <section className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="relative h-[42vh] min-h-[320px] max-h-[480px] w-full">
            <Image
              src={heroImageSrc}
              alt={post.image.alt}
              title={post.image.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2B1F]/90 via-[#0E2B1F]/50 to-[#0E2B1F]/30" />
          </div>

          <div className="relative mx-auto -mt-32 max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/95 p-6 shadow-premium-lg backdrop-blur-sm sm:p-10">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-[#D4AF37]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Toate articolele
              </Link>

              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 font-semibold text-[#0E2B1F]">
                  <Tag className="h-3.5 w-3.5 text-[#D4AF37]" />
                  {post.tag}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTimeMinutes} min citire
                </span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric" })}
                </time>
              </div>

              <h1 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <BlogArticleContent blocks={[...post.blocks]} />

          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href={post.relatedService.href}
              className="group flex items-center justify-between rounded-2xl border border-[#D4AF37]/25 bg-secondary/50 p-6 transition-all hover:border-[#D4AF37]/50 hover:shadow-premium"
            >
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  Serviciu recomandat
                </p>
                <p className="font-serif text-lg font-semibold text-foreground group-hover:text-[#D4AF37]">
                  {post.relatedService.text}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-[#0E2B1F] transition-transform group-hover:translate-x-1 group-hover:text-[#D4AF37]" />
            </Link>
          </div>
        </section>

        <BlogRecommendedServices services={[...post.recommendedServices]} />

        {post.faqs.length > 0 ? (
          <ServiceFAQ
            title="Întrebări frecvente"
            subtitle="FAQ"
            faqs={[...post.faqs]}
          />
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="border-t border-[#D4AF37]/15 bg-secondary/40 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-foreground">
                Articole similare
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ServiceCTA
          title="Ai întrebări? Programează-te la Claire Beauty Craiova"
          description="Echipa noastră te ajută să alegi tratamentul potrivit — telefonic, WhatsApp sau prin formularul de contact."
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA layout="triple" />
    </>
  )
}
