/** Index priority tiers for GSC submit and internal traffic push. */
export const INDEX_TIER_1 = [
  "de-ce-apare-retentia-de-apa-cauze",
  "curatare-faciala-acasa-vs-salon",
  "picioare-grele-seara-cauze",
  "cum-scapi-de-puncte-negre-corect",
  "semne-ca-ai-nevoie-de-drenaj-limfatic",
  "ce-evitat-dupa-tratamente-estetice",
  "tratamente-inainte-de-concediu",
  "pregatire-ten-vara-pasi",
] as const

export const INDEX_TIER_2_PUBLISHED = [
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
] as const

export const INDEX_TIER_2_HUBS = [
  "/masaj-craiova",
  "/tratamente-faciale-craiova",
  "/tratamente-corporale-craiova",
  "/remodelare-corporala-craiova",
  "/drenaj-limfatic-craiova",
  "/hydrafacial-craiova",
] as const

export const INDEX_TIER_3_DRAFTS = [
  "masaj-manual-vs-aparat-remodelare",
  "cat-dureaza-rezultate-tratamente-estetice",
  "de-ce-apare-celulita-cauze-mituri",
  "cauze-ten-tern-fara-stralucire",
  "cat-de-des-tratamente-faciale",
  "pori-dilatati-cauze-obiceiuri",
  "cat-de-des-tratamente-corporale",
  "recuperare-ten-dupa-soare",
  "de-ce-apar-vergeturile-cauze",
  "colagen-explicat-simplu",
  "detoxifiere-limfatica-ce-inseamna",
  "piele-lasa-cauze-fara-operatie",
  "lifting-nechirurgical-vs-chirurgical",
  "dermapen-peeling-laser-cicatrici-textura",
] as const

export type IndexTier1Slug = (typeof INDEX_TIER_1)[number]

export function isTier1Slug(slug: string): slug is IndexTier1Slug {
  return (INDEX_TIER_1 as readonly string[]).includes(slug)
}

export function getTier1PrioritySlugs(): IndexTier1Slug[] {
  return [...INDEX_TIER_1]
}

/** Tier 2 MONEY pages — secondary blog/home amplification after Tier 1. */
export const MONEY_PAGE_AMPLIFY = [
  "masaj-anticelulitic-vs-drenaj-limfatic",
  "microneedling-vs-dermapen-diferente",
  "hifu-facial-lifting-nechirurgical",
  "masaj-terapeutic-vs-anticelulitic-cand",
  "cum-scapi-de-celulita-ghid-complet",
  "electrostimulare-corporala-tonifiere",
] as const

export function getMoneyPageAmplifySlugs(): string[] {
  return [...MONEY_PAGE_AMPLIFY]
}

/** Slugs currently routed via posts.ts (live, in sitemap). */
export const LIVE_BLOG_SLUGS = [
  ...INDEX_TIER_1,
  ...INDEX_TIER_2_PUBLISHED,
] as const

const liveBlogSlugSet = new Set<string>(LIVE_BLOG_SLUGS)

export function isLiveBlogSlug(slug: string): boolean {
  return liveBlogSlugSet.has(slug)
}

export function isLiveBlogHref(href: string): boolean {
  if (!href.startsWith("/blog/")) return true
  return liveBlogSlugSet.has(href.replace("/blog/", ""))
}
