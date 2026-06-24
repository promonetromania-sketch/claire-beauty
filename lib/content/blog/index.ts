import { blogPosts } from "./posts"
import type { BlogPost } from "./types"

export type {
  BlogBlock,
  BlogFaq,
  BlogInline,
  BlogInlineLink,
  BlogPost,
} from "./types"
export { blogServiceLinks } from "./links"
export { estimateReadTimeMinutes } from "./utils"

export { blogPosts }

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
