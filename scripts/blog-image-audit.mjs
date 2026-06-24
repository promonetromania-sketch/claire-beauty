import { readFileSync, existsSync, readdirSync } from "fs"
import { createHash } from "crypto"
import { join } from "path"

const LIVE = [
  "de-ce-apare-retentia-de-apa-cauze",
  "curatare-faciala-acasa-vs-salon",
  "picioare-grele-seara-cauze",
  "cum-scapi-de-puncte-negre-corect",
  "semne-ca-ai-nevoie-de-drenaj-limfatic",
  "ce-evitat-dupa-tratamente-estetice",
  "tratamente-inainte-de-concediu",
  "pregatire-ten-vara-pasi",
  "ce-este-hydrafacial-beneficii-craiova",
  "cum-scapi-de-celulita-ghid-complet",
  "masaj-anticelulitic-vs-drenaj-limfatic",
  "remodelare-corporala-fara-operatie-tehnologii",
  "beneficii-masaj-terapeutic-stres-dureri",
  "microneedling-vs-dermapen-diferente",
  "hifu-facial-lifting-nechirurgical",
  "cum-pregatesti-tenul-tratament-facial",
  "ce-este-reflexoterapia-beneficii",
  "ghid-complet-drenaj-limfatic",
  "ce-este-microdermabraziunea-beneficii",
  "electrostimulare-corporala-tonifiere",
  "radiofrecventa-corporala-ghid",
  "cum-alegi-tratament-facial-tip-ten",
  "beneficii-masaj-relaxare-craiova",
  "tratamente-corporale-ghid-incepatori",
  "vergeturi-tratamente-rezultate",
  "masaj-terapeutic-vs-anticelulitic-cand",
]

const PUBLIC = join(process.cwd(), "public")

function hashFile(rel) {
  const p = join(PUBLIC, rel.replace(/^\//, ""))
  if (!existsSync(p)) return null
  return createHash("md5").update(readFileSync(p)).digest("hex")
}

function resolveSrc(slug, declared) {
  if (existsSync(join(PUBLIC, declared.replace(/^\//, "")))) return declared
  const og = `/og/blog/${slug}.jpg`
  if (existsSync(join(PUBLIC, og.replace(/^\//, "")))) return og
  const def = `/og/blog/default.jpg`
  if (existsSync(join(PUBLIC, def.replace(/^\//, "")))) return og
  return declared
}

const articles = []
for (const dir of ["lib/content/blog/articles", "lib/content/blog/articles/drafts"]) {
  for (const slug of LIVE) {
    const f = join(dir, `${slug}.ts`)
    if (!existsSync(f)) continue
    const m = readFileSync(f, "utf8").match(/src:\s*"([^"]+)"/)
    if (m) {
      const declared = m[1]
      const resolved = resolveSrc(slug, declared)
      const fileExists = existsSync(join(PUBLIC, declared.replace(/^\//, "")))
      articles.push({ slug, declared, resolved, declaredExists: fileExists, hash: hashFile(resolved) })
    }
  }
}

const hashGroups = {}
for (const a of articles) {
  if (!a.hash) {
    if (!hashGroups.missing) hashGroups.missing = []
    hashGroups.missing.push(a.slug)
    continue
  }
  if (!hashGroups[a.hash]) hashGroups[a.hash] = []
  hashGroups[a.hash].push(a.slug)
}

const duplicates = Object.entries(hashGroups).filter(([k, v]) => k !== "missing" && v.length > 1)
const missing = hashGroups.missing ?? []

const ogDir = join(PUBLIC, "og", "blog")
const ogHashes = {}
if (existsSync(ogDir)) {
  for (const f of readdirSync(ogDir).filter((x) => x.endsWith(".jpg"))) {
    const h = hashFile(`/og/blog/${f}`)
    if (!ogHashes[h]) ogHashes[h] = []
    ogHashes[h].push(f)
  }
}

console.log(JSON.stringify({ articles, duplicates, missing, ogDuplicateGroups: ogHashes }, null, 2))
