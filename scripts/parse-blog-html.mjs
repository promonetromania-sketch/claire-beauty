import { readFileSync } from "fs"

const html = readFileSync("scripts/blog-page.html", "utf8")
const re = /_next\/image\?url=([^&"]+)/g
const urls = [...html.matchAll(re)].map((m) => decodeURIComponent(m[1]))
const uniq = [...new Set(urls)].filter(
  (u) => u.includes("blog") || u.includes("/og/"),
)
console.log("unique blog image urls:", uniq.length)
for (const u of uniq.sort()) console.log(u)

const counts = {}
for (const u of urls.filter((u) => u.includes("blog") || u.includes("/og/"))) {
  counts[u] = (counts[u] || 0) + 1
}
const dupes = Object.entries(counts).filter(([, n]) => n > 1)
console.log("\nduplicate urls in html:")
for (const [u, n] of dupes) console.log(n, u)
