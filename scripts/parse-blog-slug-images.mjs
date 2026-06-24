import { readFileSync } from "fs"

const html = readFileSync("scripts/blog-page.html", "utf8")
const cards = html.split('href="/blog/').slice(1)
for (const card of cards) {
  const slug = card.match(/^([a-z0-9-]+)/)?.[1]
  const img = card.match(/url=([^&"]+)/)?.[1]
  if (slug && img) console.log(decodeURIComponent(slug), "=>", decodeURIComponent(img))
}
