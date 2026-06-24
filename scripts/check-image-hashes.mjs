import { readFileSync, readdirSync, statSync } from "fs"
import { createHash } from "crypto"
import { join } from "path"

const dirs = ["public/og/blog", "public/images/blog"]
const hashes = {}

for (const dir of dirs) {
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".jpg")) continue
    const p = join(dir, f)
    if (!statSync(p).isFile()) continue
    const h = createHash("md5").update(readFileSync(p)).digest("hex")
    const rel = `/${dir.replace("public/", "")}/${f}`
    if (!hashes[h]) hashes[h] = []
    hashes[h].push(rel)
  }
}

const dupes = Object.entries(hashes).filter(([, paths]) => paths.length > 1)
console.log("duplicate hash groups:", dupes.length)
for (const [h, paths] of dupes) console.log(h.slice(0, 8), paths)

const targets = [
  "/og/blog/picioare-grele-seara-cauze.jpg",
  "/images/blog/blog-drenaj-limfatic-semne.jpg",
]
for (const t of targets) {
  const p = join("public", t.replace(/^\//, ""))
  const h = createHash("md5").update(readFileSync(p)).digest("hex")
  console.log(t, h.slice(0, 12), readFileSync(p).length)
}
