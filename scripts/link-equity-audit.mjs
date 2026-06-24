import { readFileSync, readdirSync, writeFileSync } from "fs"
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

const TIER1 = new Set(LIVE.slice(0, 8))
const MONEY_AMPLIFY = new Set([
  "masaj-anticelulitic-vs-drenaj-limfatic",
  "microneedling-vs-dermapen-diferente",
  "hifu-facial-lifting-nechirurgical",
  "masaj-terapeutic-vs-anticelulitic-cand",
  "cum-scapi-de-celulita-ghid-complet",
  "electrostimulare-corporala-tonifiere",
])
const liveSet = new Set(LIVE)

const inbound = Object.fromEntries(
  LIVE.map((s) => [s, { blog: [], hub: [], serviceHub: [], site: [] }]),
)
const outboundBlog = Object.fromEntries(LIVE.map((s) => [s, new Set()]))
const outboundSvc = Object.fromEntries(LIVE.map((s) => [s, new Set()]))

function addBlogLink(from, to) {
  if (!liveSet.has(from) || !liveSet.has(to) || from === to) return
  outboundBlog[from].add(to)
  inbound[to].blog.push(from)
}

function scanHrefBlocks(content, fromSlug) {
  for (const m of content.matchAll(/href:\s*"\/blog\/([^"]+)"/g)) {
    addBlogLink(fromSlug, m[1])
  }
}

for (const dir of ["lib/content/blog/articles", "lib/content/blog/articles/drafts"]) {
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".ts"))) {
    const slug = f.replace(".ts", "")
    if (liveSet.has(slug)) scanFile(join(dir, f), slug)
  }
}

function scanFile(path, fromSlug) {
  scanHrefBlocks(readFileSync(path, "utf8"), fromSlug)
  const content = readFileSync(path, "utf8")
  for (const m of content.matchAll(/href:\s*"\/(?!blog)([a-z0-9-]+)"/g)) {
    if (m[1] !== "contact") outboundSvc[fromSlug].add("/" + m[1])
  }
}

function scanRecordBlocks(filePath, recordName) {
  const content = readFileSync(filePath, "utf8")
  const start = content.indexOf(`export const ${recordName}`)
  if (start === -1) return
  const slice = content.slice(start)
  const blocks = slice.matchAll(/"([a-z0-9-]+)": \[/g)
  for (const match of blocks) {
    const from = match[1]
    if (!liveSet.has(from)) continue
    const blockStart = match.index + start
    const blockEnd = slice.indexOf("\n  ],", match.index)
    const block = slice.slice(match.index, blockEnd === -1 ? undefined : blockEnd)
    scanHrefBlocks(block, from)
  }
}

scanRecordBlocks("lib/seo/traffic-push.ts", "articleTrafficPushOutbounds")

for (const file of ["lib/content/blog/enrich-posts.ts", "lib/content/blog/draft-seo-patches.ts"]) {
  const content = readFileSync(file, "utf8")
  const blocks = content.matchAll(/"([a-z0-9-]+)": \{[\s\S]*?relatedArticles: \[([\s\S]*?)\],/g)
  for (const match of blocks) {
    const from = match[1]
    if (!liveSet.has(from)) continue
    scanHrefBlocks(match[2], from)
  }
}

const tpContent = readFileSync("lib/seo/traffic-push.ts", "utf8")
for (const [hub, pattern] of [
  ["masaj", /masaj: \[([\s\S]*?)\],\s*\n\s*facial:/],
  ["facial", /facial: \[([\s\S]*?)\],\s*\n\s*corporal:/],
  ["corporal", /corporal: \[([\s\S]*?)\],\s*\n\}/],
]) {
  const section = tpContent.match(pattern)?.[1] ?? ""
  for (const m of section.matchAll(/href:\s*"\/blog\/([^"]+)"/g)) {
    if (liveSet.has(m[1])) inbound[m[1]].hub.push(hub)
  }
}

const svcMatch = tpContent.match(/servicePageBlogLinks[\s\S]*?^}/m)?.[0] ?? ""
for (const m of svcMatch.matchAll(/href:\s*"\/blog\/([^"]+)"/g)) {
  if (liveSet.has(m[1])) inbound[m[1]].serviceHub.push("service-page")
}

for (const s of TIER1) {
  inbound[s].site.push("homepage", "blog-index-tier1")
}
for (const s of MONEY_AMPLIFY) {
  inbound[s].site.push("blog-index-amplify")
}

const MONEY = new Set([
  "de-ce-apare-retentia-de-apa-cauze",
  "curatare-faciala-acasa-vs-salon",
  "picioare-grele-seara-cauze",
  "cum-scapi-de-puncte-negre-corect",
  "semne-ca-ai-nevoie-de-drenaj-limfatic",
  "ce-evitat-dupa-tratamente-estetice",
  "tratamente-inainte-de-concediu",
  "pregatire-ten-vara-pasi",
  "masaj-anticelulitic-vs-drenaj-limfatic",
  "microneedling-vs-dermapen-diferente",
  "hifu-facial-lifting-nechirurgical",
  "electrostimulare-corporala-tonifiere",
  "masaj-terapeutic-vs-anticelulitic-cand",
])

const results = LIVE.map((slug) => {
  const uniqueBlogFrom = [...new Set(inbound[slug].blog)]
  const total =
    uniqueBlogFrom.length +
    inbound[slug].hub.length +
    inbound[slug].serviceHub.length +
    inbound[slug].site.length
  return {
    slug,
    isMoney: MONEY.has(slug),
    inboundBlog: uniqueBlogFrom.length,
    inboundHub: inbound[slug].hub.length,
    inboundServiceHub: inbound[slug].serviceHub.length,
    inboundSite: inbound[slug].site.length,
    totalInbound: total,
    outboundBlog: outboundBlog[slug].size,
    outboundService: outboundSvc[slug].size,
    totalOutbound: outboundBlog[slug].size + outboundSvc[slug].size,
    inboundFrom: uniqueBlogFrom,
  }
})

const orphans = results.filter((r) => r.totalInbound === 0)
const moneyUnder5 = results.filter((r) => r.isMoney && r.totalInbound < 5)
const heavyOutbound = results.filter((r) => r.totalOutbound > 12)

const hubOutbound = {
  masaj: (tpContent.match(/masaj: \[([\s\S]*?)\],\s*\n\s*facial:/)?.[1].match(/href:/g) ?? []).length,
  facial: (tpContent.match(/facial: \[([\s\S]*?)\],\s*\n\s*corporal:/)?.[1].match(/href:/g) ?? []).length,
  corporal: (tpContent.match(/corporal: \[([\s\S]*?)\],\s*\n\}/)?.[1].match(/href:/g) ?? []).length,
}

results.sort((a, b) => b.totalInbound - a.totalInbound)

writeFileSync(
  "scripts/link-equity-audit-output.json",
  JSON.stringify({ results, orphans, moneyUnder5, heavyOutbound, hubOutbound }, null, 2),
)
console.log("Orphans:", orphans.length)
console.log("Money <5:", moneyUnder5.map((m) => `${m.slug}:${m.totalInbound}`))
console.log("Hub outbound:", hubOutbound)
console.log("Top 10:", results.slice(0, 10).map((r) => `${r.slug}: ${r.totalInbound}`).join("\n"))
