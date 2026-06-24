import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogBlock } from "@/lib/content/blog"
import { BlogInlineText } from "@/components/blog/blog-inline-text"

export function BlogArticleContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <article className="prose-blog mx-auto max-w-3xl space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="font-serif text-2xl font-semibold text-foreground sm:text-3xl"
              >
                {block.text}
              </h2>
            )
          case "h3":
            return (
              <h3
                key={index}
                className="font-serif text-xl font-semibold text-foreground"
              >
                {block.text}
              </h3>
            )
          case "p":
            return (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground"
              >
                <BlogInlineText content={block.content} />
              </p>
            )
          case "ul":
            return (
              <ul key={index} className="space-y-3 pl-1">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span className="leading-relaxed">
                      <BlogInlineText content={item} />
                    </span>
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol
                key={index}
                className="list-decimal space-y-3 pl-5 text-muted-foreground"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed pl-1">
                    <BlogInlineText content={item} />
                  </li>
                ))}
              </ol>
            )
          case "callout":
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D4AF37]/25 bg-[#FFF9F2]/80 p-6 shadow-premium sm:p-8"
              >
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                  {block.title}
                </h3>
                <p className="mb-5 leading-relaxed text-muted-foreground">
                  <BlogInlineText content={block.content} />
                </p>
                <Link
                  href={block.link.href}
                  className="inline-flex items-center text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#D4AF37]"
                >
                  {block.link.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )
          default:
            return null
        }
      })}
    </article>
  )
}
