import type { MetadataRoute } from "next"
import { getBlogSlugs } from "@/lib/content/blog"
import { businessProfile } from "@/lib/seo/business"

const STATIC_ROUTES = [
  "",
  "/blog",
  "/preturi",
  "/contact",
  "/masaj-craiova",
  "/tratamente-faciale-craiova",
  "/tratamente-corporale-craiova",
  "/remodelare-corporala-craiova",
  "/drenaj-limfatic-craiova",
  "/hydrafacial-craiova",
  "/masaj-terapeutic-craiova",
  "/masaj-anticelulitic-craiova",
  "/hifu-facial-craiova",
  "/dermapen-craiova",
  "/microneedling-craiova",
  "/microdermabraziune-craiova",
  "/electrostimulare-craiova",
  "/radiofrecventa-corporala-craiova",
  "/reflexoterapie-craiova",
  "/politica-confidentialitate",
  "/gdpr",
  "/politica-cookie",
  "/termeni-si-conditii",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessProfile.url
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8 }))

  const blogEntries: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7 }))

  return [...staticEntries, ...blogEntries]
}
