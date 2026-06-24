import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog/blog-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog"
import { getTier1PrioritySlugs } from "@/lib/seo/index-tiers"

export function BlogPreviewSection() {
  const tier1Slugs = getTier1PrioritySlugs()
  const tier1Posts = tier1Slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .slice(0, 3)

  const fallbackPosts = getAllBlogPosts().slice(0, 3)
  const posts = tier1Posts.length >= 3 ? tier1Posts : fallbackPosts

  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Blog
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Sfaturi și noutăți
            <span className="text-gold-gradient"> Claire Beauty</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ghiduri utile despre îngrijirea tenului, masaj și remodelare corporală
            în Craiova — articole informative cu recomandări de la specialiști.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 80}>
              <BlogCard post={post} variant="preview" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={120}>
          <Link
            href="/blog"
            className="premium-btn-primary inline-flex items-center rounded-full px-10 py-3.5 text-sm font-semibold transition-all hover:shadow-[0_0_24px_rgba(212,175,55,0.32)]"
          >
            Vezi toate articolele
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
