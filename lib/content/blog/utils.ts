import type { BlogBlock, BlogFaq } from "./types"

function countWordsInInline(content: (string | { text: string })[]): number {
  return content
    .map((part) => (typeof part === "string" ? part : part.text))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length
}

export function estimateReadTimeMinutes(
  blocks: BlogBlock[],
  faqs: BlogFaq[],
): number {
  let words = 0

  for (const block of blocks) {
    switch (block.type) {
      case "h2":
      case "h3":
        words += block.text.split(/\s+/).length
        break
      case "p":
        words += countWordsInInline(block.content)
        break
      case "ul":
      case "ol":
        for (const item of block.items) {
          words += countWordsInInline(item)
        }
        break
      case "callout":
        words += block.title.split(/\s+/).length
        words += countWordsInInline(block.content)
        words += block.link.text.split(/\s+/).length
        break
    }
  }

  for (const faq of faqs) {
    words += faq.question.split(/\s+/).length
    words += faq.answer.split(/\s+/).length
  }

  return Math.max(6, Math.round(words / 180))
}
