import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/content/blog"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  post: BlogPost
  variant?: "default" | "preview"
}

export function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const isPreview = variant === "preview"

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500",
        isPreview
          ? "border border-border/50 hover:-translate-y-1.5 hover:border-[#D4AF37]/30 hover:shadow-[0_16px_48px_rgba(14,43,31,0.12)]"
          : "hover:-translate-y-1 hover:shadow-premium-lg",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isPreview ? "h-56 sm:h-64" : "h-52 sm:h-56",
        )}
      >
        <Image
          key={post.image.src}
          src={post.image.src}
          alt={post.image.alt}
          title={post.image.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2B1F]/75 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-[#D4AF37]/40 bg-[#0E2B1F]/85 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] backdrop-blur-sm">
          {post.tag}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col", isPreview ? "p-7 sm:p-8" : "p-6 sm:p-7")}>
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{post.readTimeMinutes} min citire</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("ro-RO", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] font-serif text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-[#D4AF37]">
          {post.title}
        </h3>
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center text-sm font-semibold text-[#0E2B1F] transition-colors group-hover:text-[#D4AF37]">
          Citește articolul
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  )
}
