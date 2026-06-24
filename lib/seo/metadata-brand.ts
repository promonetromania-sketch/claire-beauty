/** Suffix standard pentru title-uri SEO — identitate unică */
export const SEO_BRAND = "Claire Beauty Craiova"

export function seoTitle(pageTitle: string): string {
  return `${pageTitle} | ${SEO_BRAND}`
}
