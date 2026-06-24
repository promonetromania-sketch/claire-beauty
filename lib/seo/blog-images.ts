import { existsSync } from "fs"
import path from "path"
import { LIVE_BLOG_SLUGS } from "./index-tiers"

const OG_BLOG_DIR = path.join(process.cwd(), "public", "og", "blog")
const PUBLIC_DIR = path.join(process.cwd(), "public")

/**
 * Explicit slug → image path. One unique image per live article.
 * Priority source for hero + OG; no shared fallback between slugs.
 */
export const BLOG_IMAGE_BY_SLUG: Record<string, string> = {
  "de-ce-apare-retentia-de-apa-cauze": "/og/blog/unique-5.jpg",
  "curatare-faciala-acasa-vs-salon":
    "/og/blog/facial-curatare-comparatie.jpg",
  "picioare-grele-seara-cauze": "/og/blog/picioare-grele-seara-clinic.jpg",
  "cum-scapi-de-puncte-negre-corect": "/images/blog/blog-puncte-negre.jpg",
  "semne-ca-ai-nevoie-de-drenaj-limfatic":
    "/og/blog/semne-drenaj-limfatic-clinic.jpg",
  "ce-evitat-dupa-tratamente-estetice":
    "/og/blog/post-tratamente-post-procedura.jpg",
  "tratamente-inainte-de-concediu": "/og/blog/pre-vacanta-beauty.jpg",
  "pregatire-ten-vara-pasi": "/og/blog/facial-incepatori-clinic.jpg",
  "ce-este-hydrafacial-beneficii-craiova":
    "/images/blog/blog-hydrafacial-beneficii.jpg",
  "cum-scapi-de-celulita-ghid-complet": "/images/blog/blog-celulita-ghid.jpg",
  "masaj-anticelulitic-vs-drenaj-limfatic":
    "/images/blog/blog-masaj-vs-drenaj.jpg",
  "remodelare-corporala-fara-operatie-tehnologii":
    "/images/blog/blog-remodelare-corporala.jpg",
  "beneficii-masaj-terapeutic-stres-dureri":
    "/images/blog/blog-masaj-terapeutic.jpg",
  "microneedling-vs-dermapen-diferente":
    "/images/blog/blog-microneedling-dermapen.jpg",
  "hifu-facial-lifting-nechirurgical": "/images/blog/blog-hifu-facial.jpg",
  "cum-pregatesti-tenul-tratament-facial":
    "/images/blog/blog-pregatire-ten-facial.jpg",
  "ce-este-reflexoterapia-beneficii": "/images/blog/blog-reflexoterapie.jpg",
  "ghid-complet-drenaj-limfatic": "/images/blog/blog-drenaj-limfatic-ghid.jpg",
  "ce-este-microdermabraziunea-beneficii":
    "/images/blog/blog-microdermabraziune.jpg",
  "electrostimulare-corporala-tonifiere":
    "/images/blog/blog-electrostimulare.jpg",
  "radiofrecventa-corporala-ghid":
    "/images/blog/blog-radiofrecventa-corporala.jpg",
  "cum-alegi-tratament-facial-tip-ten":
    "/images/blog/blog-tip-ten-tratament-facial.jpg",
  "beneficii-masaj-relaxare-craiova": "/images/blog/blog-masaj-relaxare.jpg",
  "tratamente-corporale-ghid-incepatori":
    "/images/blog/blog-tratamente-corporale-ghid.jpg",
  "vergeturi-tratamente-rezultate": "/images/blog/blog-vergeturi-tratament.jpg",
  "masaj-terapeutic-vs-anticelulitic-cand":
    "/images/blog/blog-masaj-terapeutic-vs-anticelulitic.jpg",
}

function publicPath(src: string): string {
  return path.join(PUBLIC_DIR, src.replace(/^\//, ""))
}

function fileExists(src: string): boolean {
  return existsSync(publicPath(src))
}

export function getBlogImageForSlug(slug: string): string | undefined {
  return BLOG_IMAGE_BY_SLUG[slug]
}

/** Validates live slugs each map to a unique, existing path. */
export function getLiveBlogImagePaths(): string[] {
  return LIVE_BLOG_SLUGS.map((slug) => BLOG_IMAGE_BY_SLUG[slug]).filter(Boolean)
}

/**
 * Resolves blog hero + OG image path.
 * Order: explicit slug map → declared src (if on disk) → /og/blog/{slug}.jpg
 */
export function resolveBlogImageSrc(slug: string, declaredSrc: string): string {
  const mapped = BLOG_IMAGE_BY_SLUG[slug]
  if (mapped && fileExists(mapped)) {
    return mapped
  }

  if (fileExists(declaredSrc)) {
    return declaredSrc
  }

  const slugOg = `/og/blog/${slug}.jpg`
  if (fileExists(slugOg)) {
    return slugOg
  }

  return mapped ?? declaredSrc
}

/** OG metadata URL — same resolver, no shared default fallback for live slugs. */
export function resolveBlogOgImageSrc(slug: string, declaredSrc: string): string {
  return resolveBlogImageSrc(slug, declaredSrc)
}
