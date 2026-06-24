import { readFileSync, existsSync } from "fs"
import { createHash } from "crypto"
import { join } from "path"

const PUBLIC = join(process.cwd(), "public")

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

const mapContent = readFileSync("lib/seo/blog-images.ts", "utf8")
const BLOG_IMAGE_BY_SLUG = {}
for (const m of mapContent.matchAll(/"([a-z0-9-]+)":\s*\n?\s*"([^"]+)"/g)) {
  if (LIVE.includes(m[1])) BLOG_IMAGE_BY_SLUG[m[1]] = m[2]
}

function hashFile(rel) {
  const p = join(PUBLIC, rel.replace(/^\//, ""))
  if (!existsSync(p)) return null
  return createHash("md5").update(readFileSync(p)).digest("hex")
}

const postsTs = readFileSync("lib/content/blog/posts.ts", "utf8")
const postsSlugs = [...postsTs.matchAll(/\/articles\/(?:drafts\/)?([a-z0-9-]+)/g)].map(
  (m) => m[1],
)

const pathToSlugs = {}
const missingFiles = []
const unmapped = []

for (const slug of LIVE) {
  const src = BLOG_IMAGE_BY_SLUG[slug]
  if (!src) {
    unmapped.push(slug)
    continue
  }
  if (!existsSync(join(PUBLIC, src.replace(/^\//, "")))) {
    missingFiles.push({ slug, src })
  }
  const h = hashFile(src)
  if (h) {
    if (!pathToSlugs[src]) pathToSlugs[src] = []
    pathToSlugs[src].push(slug)
  }
}

const duplicatePaths = Object.entries(pathToSlugs).filter(([, slugs]) => slugs.length > 1)
const hashGroups = {}
for (const slug of LIVE) {
  const src = BLOG_IMAGE_BY_SLUG[slug]
  const h = src ? hashFile(src) : null
  if (!h) continue
  if (!hashGroups[h]) hashGroups[h] = []
  hashGroups[h].push(slug)
}
const duplicateHashes = Object.values(hashGroups).filter((g) => g.length > 1)

const missingFromPosts = LIVE.filter((s) => !postsSlugs.includes(s))
const extraInPosts = postsSlugs.filter((s) => !LIVE.includes(s))

console.log(
  JSON.stringify(
    {
      postsTsCount: postsSlugs.length,
      liveCount: LIVE.length,
      mappedCount: Object.keys(BLOG_IMAGE_BY_SLUG).length,
      postsMatch: postsSlugs.length === LIVE.length && missingFromPosts.length === 0,
      missingFromPosts,
      extraInPosts,
      unmapped,
      missingFiles,
      duplicatePaths,
      duplicateHashes,
      oneToOne: duplicateHashes.length === 0 && missingFiles.length === 0,
    },
    null,
    2,
  ),
)
