import type { BlogInlineLink } from "./types"

export const blogServiceLinks = {
  tratamenteFaciale: {
    text: "Tratamente faciale Craiova",
    href: "/tratamente-faciale-craiova",
  },
  masaj: { text: "Masaj Craiova", href: "/masaj-craiova" },
  remodelare: {
    text: "Remodelare corporală Craiova",
    href: "/remodelare-corporala-craiova",
  },
  drenaj: {
    text: "Drenaj limfatic Craiova",
    href: "/drenaj-limfatic-craiova",
  },
  radiofrecventa: {
    text: "Radiofrecvență corporală Craiova",
    href: "/radiofrecventa-corporala-craiova",
  },
  electrostimulare: {
    text: "Electrostimulare Craiova",
    href: "/electrostimulare-craiova",
  },
  microdermabraziune: {
    text: "Microdermabraziune Craiova",
    href: "/microdermabraziune-craiova",
  },
  hydrafacial: { text: "Hydrafacial Craiova", href: "/hydrafacial-craiova" },
  masajAnticelulitic: {
    text: "Masaj anticelulitic Craiova",
    href: "/masaj-anticelulitic-craiova",
  },
  tratamenteCorporale: {
    text: "Tratamente corporale Craiova",
    href: "/tratamente-corporale-craiova",
  },
  masajTerapeutic: {
    text: "Masaj terapeutic Craiova",
    href: "/masaj-terapeutic-craiova",
  },
  hifu: { text: "HIFU Craiova", href: "/hifu-facial-craiova" },
  dermapen: { text: "Dermapen Craiova", href: "/dermapen-craiova" },
  microneedling: {
    text: "Microneedling Craiova",
    href: "/microneedling-craiova",
  },
  reflexoterapie: {
    text: "Reflexoterapie Craiova",
    href: "/reflexoterapie-craiova",
  },
  contact: { text: "Claire Beauty Craiova", href: "/contact" },
} as const satisfies Record<string, BlogInlineLink>
