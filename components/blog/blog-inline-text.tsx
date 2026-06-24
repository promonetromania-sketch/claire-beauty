import Link from "next/link"
import type { BlogInline } from "@/lib/content/blog"

export function BlogInlineText({ content }: { content: BlogInline[] }) {
  return (
    <>
      {content.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <Link
            key={index}
            href={part.href}
            className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
          >
            {part.text}
          </Link>
        ),
      )}
    </>
  )
}
