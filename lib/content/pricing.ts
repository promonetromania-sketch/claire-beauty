import type { PricingSectionId } from "@/lib/seo/pricing-links"

export type PricingItem = {
  name: string
  price: string
  detail?: string
  isSubscription?: boolean
  href?: string
}

export type PricingCategory = {
  id: PricingSectionId
  title: string
  items: PricingItem[]
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "pachete-terapii",
    title: "Pachete și terapii corporale",
    items: [
      {
        name: "Electrostimulare Tesla",
        price: "80 lei",
        detail: "/ ședință",
        href: "/electrostimulare-craiova",
      },
      {
        name: "Lipocontour / Lipolaser",
        price: "80 lei",
        detail: "/ ședință",
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Presoterapie Starvac",
        price: "80 lei",
        detail: "/ ședință",
        href: "/drenaj-limfatic-craiova",
      },
      {
        name: "Saună",
        price: "80 lei",
        detail: "/ ședință",
        href: "/tratamente-corporale-craiova",
      },
      {
        name: "Abonament 10 ședințe",
        price: "600 lei",
        isSubscription: true,
        href: "/tratamente-corporale-craiova",
      },
    ],
  },
  {
    id: "masaj",
    title: "Masaj",
    items: [
      {
        name: "Masaj 50 min",
        price: "150 lei",
        detail: "/ ședință · femei",
        href: "/masaj-craiova",
      },
      {
        name: "Masaj 50 min",
        price: "170 lei",
        detail: "/ ședință · bărbați",
        href: "/masaj-craiova",
      },
      {
        name: "Abonament 10 ședințe",
        price: "1200 lei",
        detail: "· femei",
        isSubscription: true,
        href: "/masaj-craiova",
      },
      {
        name: "Abonament 10 ședințe",
        price: "1500 lei",
        detail: "· bărbați",
        isSubscription: true,
        href: "/masaj-craiova",
      },
      {
        name: "Masaj parțial 30 min",
        price: "90 lei",
        detail: "· femei",
        href: "/masaj-terapeutic-craiova",
      },
      {
        name: "Masaj parțial 30 min",
        price: "110 lei",
        detail: "· bărbați",
        href: "/masaj-terapeutic-craiova",
      },
      {
        name: "Masaj drenaj limfatic postoperator",
        price: "250 lei",
        detail: "/ ședință",
        href: "/drenaj-limfatic-craiova",
      },
      {
        name: "Abonament drenaj postoperator 10 ședințe",
        price: "2000 lei",
        isSubscription: true,
        href: "/drenaj-limfatic-craiova",
      },
      {
        name: "Masaj endodermic",
        price: "200 lei",
        detail: "/ ședință",
        href: "/masaj-anticelulitic-craiova",
      },
    ],
  },
  {
    id: "remodelare",
    title: "Remodelare corporală",
    items: [
      {
        name: "Endolase 30 min",
        price: "150 lei",
        detail: "/ ședință",
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Sonobeat 30 min",
        price: "150 lei",
        detail: "/ ședință",
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Radiofrecvență bipolară",
        price: "150 lei",
        detail: "/ ședință",
        href: "/radiofrecventa-corporala-craiova",
      },
      {
        name: "Cavitație 40 min",
        price: "150 lei",
        detail: "/ ședință",
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Celludrain 30 min",
        price: "150 lei",
        detail: "/ ședință",
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Abonament 10 ședințe",
        price: "1200 lei",
        detail: "· procedurile de mai sus",
        isSubscription: true,
        href: "/remodelare-corporala-craiova",
      },
      {
        name: "Radiofrecvență monopolară",
        price: "de la 350 lei",
        detail: "/ ședință / zonă",
        href: "/radiofrecventa-corporala-craiova",
      },
      {
        name: "Radiofrecvență fracționată",
        price: "de la 1000 lei",
        detail: "/ ședință / zonă",
        href: "/radiofrecventa-corporala-craiova",
      },
    ],
  },
  {
    id: "faciale",
    title: "Tratamente faciale",
    items: [
      {
        name: "Hydrafacial",
        price: "de la 250 lei",
        detail: "/ tratament",
        href: "/hydrafacial-craiova",
      },
      {
        name: "Microneedling",
        price: "de la 400 lei",
        detail: "/ ședință",
        href: "/microneedling-craiova",
      },
      {
        name: "HIFU față",
        price: "de la 800 lei",
        href: "/hifu-facial-craiova",
      },
      {
        name: "HIFU față + gușă + decolteu",
        price: "până la 1100 lei",
        href: "/hifu-facial-craiova",
      },
      {
        name: "Head Spa",
        price: "300 lei",
        detail: "/ ședință",
        href: "/tratamente-faciale-craiova",
      },
      {
        name: "Herbal Sauna & Fitoterapie",
        price: "100 lei",
        detail: "/ ședință",
        href: "/tratamente-faciale-craiova",
      },
    ],
  },
]

export const pricingFaqs = [
  {
    question: "Există abonamente pentru mai multe ședințe?",
    answer:
      "Da. Pentru masaj, terapii corporale, drenaj postoperator și remodelare corporală oferim abonamente de 10 ședințe, evidențiate pe această pagină. Acestea sunt potrivite dacă îți dorești continuitate și un plan de tratament structurat.",
  },
  {
    question: "Se pot combina procedurile într-un pachet personalizat?",
    answer:
      "Da. În funcție de obiectivul tău, frecvența dorită și tratamentele alese, echipa Claire Beauty poate recomanda un pachet personalizat. Contactează-ne pentru o recomandare adaptată nevoilor tale.",
  },
  {
    question: "Prețurile pot varia în funcție de zonă?",
    answer:
      "Da, pentru anumite proceduri — cum ar fi radiofrecvența monopolară sau radiofrecvența fracționată — prețul poate varia în funcție de zona tratată. Valorile „de la” reflectă acest aspect.",
  },
  {
    question: "Unde pot vedea promoțiile lunare?",
    answer:
      "Promoțiile sunt afișate lunar pe pagina de Facebook Claire Beauty. Urmărește pagina noastră pentru oferte actualizate și pachete speciale.",
  },
  {
    question: "Cum aleg tratamentul potrivit?",
    answer:
      "Dacă nu ești sigură ce procedură ți se potrivește, echipa noastră te poate ghida în funcție de obiectivul tău: relaxare, tonifiere, remodelare, îngrijire facială sau recuperare postoperatorie. Programează o consultație sau sună-ne pentru recomandări.",
  },
] as const
