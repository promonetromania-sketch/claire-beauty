export type BlogInlineLink = {
  text: string
  href: string
}

export type BlogInline = string | BlogInlineLink

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; content: BlogInline[] }
  | { type: "ul"; items: BlogInline[][] }
  | { type: "ol"; items: BlogInline[][] }
  | {
      type: "callout"
      title: string
      content: BlogInline[]
      link: BlogInlineLink
    }

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  keywords: string[]
  tag: string
  publishedAt: string
  readTimeMinutes: number
  image: {
    src: string
    alt: string
    title: string
  }
  relatedService: BlogInlineLink
  recommendedServices: BlogInlineLink[]
  hubLink?: BlogInlineLink
  relatedArticles?: BlogInlineLink[]
  blocks: BlogBlock[]
  faqs: BlogFaq[]
}
