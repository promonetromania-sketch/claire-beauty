export type PricingSectionId =
  | "pachete-terapii"
  | "masaj"
  | "remodelare"
  | "faciale"

export const PRICING_PAGE = "/preturi"

export function getPricingHref(section?: PricingSectionId): string {
  return section ? `${PRICING_PAGE}#${section}` : PRICING_PAGE
}

/** Service landing pages → relevant pricing section anchor. */
export const servicePathToPricingSection: Record<string, PricingSectionId> = {
  "/masaj-craiova": "masaj",
  "/masaj-terapeutic-craiova": "masaj",
  "/masaj-anticelulitic-craiova": "masaj",
  "/drenaj-limfatic-craiova": "masaj",
  "/drenaj-limfatic-post-operator-craiova": "masaj",
  "/reflexoterapie-craiova": "masaj",
  "/tratamente-faciale-craiova": "faciale",
  "/hydrablast-craiova": "faciale",
  "/head-spa-craiova": "faciale",
  "/hifu-facial-craiova": "faciale",
  "/rejuvenare-faciala-craiova": "faciale",
  "/microneedling-craiova": "faciale",
  "/microdermabraziune-craiova": "faciale",
  "/tratamente-corporale-craiova": "pachete-terapii",
  "/remodelare-corporala-craiova": "remodelare",
  "/cavitatie-craiova": "remodelare",
  "/electrostimulare-craiova": "pachete-terapii",
  "/presoterapie-craiova": "pachete-terapii",
  "/radiofrecventa-corporala-craiova": "remodelare",
  "/hifu-corporal-craiova": "remodelare",
  "/cicatrici-vergeturi-craiova": "remodelare",
  "/vergeturi-dupa-sarcina-craiova": "remodelare",
  "/vergeturi-rosii-albe-craiova": "remodelare",
  "/cicatrice-cezariana-craiova": "remodelare",
}

export function getPricingHrefForService(path: string): string {
  const section = servicePathToPricingSection[path]
  return getPricingHref(section)
}

/** Outbound links from /preturi to service & hub pages. */
export const pricingHubLinks = [
  {
    label: "Masaj Craiova",
    href: "/masaj-craiova",
    section: "masaj" as const,
  },
  {
    label: "Drenaj limfatic",
    href: "/drenaj-limfatic-craiova",
    section: "masaj" as const,
  },
  {
    label: "Tratamente faciale",
    href: "/tratamente-faciale-craiova",
    section: "faciale" as const,
  },
  {
    label: "Hydrablast",
    href: "/hydrablast-craiova",
    section: "faciale" as const,
  },
  {
    label: "Head Spa",
    href: "/head-spa-craiova",
    section: "faciale" as const,
  },
  {
    label: "HIFU facial",
    href: "/hifu-facial-craiova",
    section: "faciale" as const,
  },
  {
    label: "Rejuvenare facială",
    href: "/rejuvenare-faciala-craiova",
    section: "faciale" as const,
  },
  {
    label: "Microneedling",
    href: "/microneedling-craiova",
    section: "faciale" as const,
  },
  {
    label: "Remodelare corporală",
    href: "/remodelare-corporala-craiova",
    section: "remodelare" as const,
  },
  {
    label: "Cavitație",
    href: "/cavitatie-craiova",
    section: "remodelare" as const,
  },
  {
    label: "Electrostimulare",
    href: "/electrostimulare-craiova",
    section: "pachete-terapii" as const,
  },
  {
    label: "Presoterapie",
    href: "/presoterapie-craiova",
    section: "pachete-terapii" as const,
  },
  {
    label: "Radiofrecvență corporală",
    href: "/radiofrecventa-corporala-craiova",
    section: "remodelare" as const,
  },
  {
    label: "HIFU corporal",
    href: "/hifu-corporal-craiova",
    section: "remodelare" as const,
  },
  {
    label: "Tratamente corporale",
    href: "/tratamente-corporale-craiova",
    section: "pachete-terapii" as const,
  },
] as const

export const pricingCategoryHubHref: Record<PricingSectionId, string> = {
  "pachete-terapii": "/tratamente-corporale-craiova",
  masaj: "/masaj-craiova",
  remodelare: "/remodelare-corporala-craiova",
  faciale: "/tratamente-faciale-craiova",
}
