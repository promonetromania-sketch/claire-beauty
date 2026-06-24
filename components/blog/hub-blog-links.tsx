import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogInlineLink } from "@/lib/content/blog/types"

type HubBlogLinksProps = {
  eyebrow?: string
  title?: string
  links: BlogInlineLink[]
}

export function HubBlogLinks({
  eyebrow = "Ghiduri Claire Beauty",
  title = "Articole recomandate din blog",
  links }: HubBlogLinksProps) {
  if (links.length === 0) return null

  return (
    <section className="border-t border-[#D4AF37]/15 bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-[#D4AF37]/20 bg-[#FFF9F2]/80 px-5 py-4 transition-all hover:border-[#D4AF37]/45 hover:shadow-premium"
              >
                <span className="pr-4 text-sm font-medium leading-snug text-foreground group-hover:text-[#0E2B1F]">
                  {link.text}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#D4AF37]"
          >
            Vezi toate articolele din blog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  )
}
