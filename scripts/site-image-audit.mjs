import { readFileSync, existsSync } from "fs"
import { join } from "path"

const PUBLIC = join(process.cwd(), "public")

const PAGES = [
  { path: "/", name: "Homepage", hero: 1, content: 7, gallery: "homepageGallery", note: "6 carduri servicii + about (structură fixă)" },
  { path: "/masaj-craiova", name: "Masaj Craiova (hub)", hero: 1, content: 1, gallery: "masajCraiova" },
  { path: "/tratamente-faciale-craiova", name: "Tratamente faciale (hub)", hero: 1, content: 1, gallery: "tratamenteFaciale" },
  { path: "/tratamente-corporale-craiova", name: "Tratamente corporale (hub)", hero: 1, content: 4, gallery: null, note: "4 carduri hub (structură fixă)" },
  { path: "/hydrafacial-craiova", name: "Hydrafacial", hero: 1, content: 1, gallery: "hydrafacial" },
  { path: "/dermapen-craiova", name: "Dermapen", hero: 1, content: 1, gallery: "dermapen" },
  { path: "/microneedling-craiova", name: "Microneedling", hero: 1, content: 1, gallery: "microneedling" },
  { path: "/hifu-facial-craiova", name: "HIFU Facial", hero: 1, content: 1, gallery: "hifu" },
  { path: "/microdermabraziune-craiova", name: "Microdermabraziune", hero: 1, content: 1, gallery: "microdermabraziune" },
  { path: "/masaj-terapeutic-craiova", name: "Masaj terapeutic", hero: 1, content: 2, gallery: "masajTerapeutic" },
  { path: "/masaj-anticelulitic-craiova", name: "Masaj anticelulitic", hero: 1, content: 2, gallery: "masajAnticelulitic" },
  { path: "/drenaj-limfatic-craiova", name: "Drenaj limfatic", hero: 1, content: 1, gallery: "drenajLimfatic" },
  { path: "/reflexoterapie-craiova", name: "Reflexoterapie", hero: 1, content: 2, gallery: "reflexoterapie" },
  { path: "/electrostimulare-craiova", name: "Electrostimulare", hero: 1, content: 1, gallery: "electrostimulare" },
  { path: "/radiofrecventa-corporala-craiova", name: "Radiofrecvență corporală", hero: 1, content: 1, gallery: "radiofrecventa" },
  { path: "/remodelare-corporala-craiova", name: "Remodelare corporală", hero: 1, content: 2, gallery: null },
  { path: "/contact", name: "Contact", hero: 0, content: 3, gallery: "contact" },
]

const src = readFileSync("lib/images/claire-beauty.ts", "utf8")

function countGallery(key) {
  if (!key) return 0
  if (key === "homepageGallery") {
    const m = src.match(/homepageGallery:[\s\S]*?\[([\s\S]*?)\]/)
    if (!m) return 0
    return (m[1].match(/claireImages\./g) || []).length
  }
  const re = new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "s")
  const m = src.match(re)
  if (!m) return 0
  return (m[1].match(/claireImages\./g) || []).length
}

const logoPath = join(PUBLIC, "images/claire-beauty/claire-beauty-logo.jpg")
const logoOk = existsSync(logoPath)

console.log(JSON.stringify({ logoExists: logoOk, pages: PAGES.map((p) => {
  const g = countGallery(p.gallery)
  const total = p.hero + p.content + g
  return { ...p, galleryCount: g, totalImages: total, withinLimit: total <= 3 || p.note }
}) }, null, 2))
