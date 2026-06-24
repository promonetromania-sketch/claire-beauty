import type { MetadataRoute } from "next"
import { businessProfile } from "@/lib/seo/business"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/" },
    sitemap: `${businessProfile.url}/sitemap.xml` }
}
