import type { BlogBlock, BlogInlineLink, BlogPost } from "./types"
import { blogServiceLinks as L } from "./links"
import { estimateReadTimeMinutes } from "./utils"
import { draftArticleSeoPatches } from "./draft-seo-patches"
import {
  articleTrafficPushOutbounds,
  mergeArticleLinks,
} from "../../seo/traffic-push"
import { resolveBlogImageSrc } from "../../seo/blog-images"
import { isLiveBlogHref } from "../../seo/index-tiers"
import type { BlogInlineLink } from "./types"

export type ArticleSeoPatch = {
  title?: string
  excerpt?: string
  metaDescription?: string
  hubLink: BlogInlineLink
  relatedArticles: BlogInlineLink[]
  extraServiceLinks?: BlogInlineLink[]
}

export const articleSeoPatches: Record<string, ArticleSeoPatch> = {
  "ce-este-hydrafacial-beneficii-craiova": {
    title:
      "Hydrafacial pentru începători: ce trebuie să știi înainte de prima ședință",
    excerpt:
      "Prima ta ședință Hydrafacial? Află ce presupune, cum te pregătești și ce poți aștepta — ghid prietenos pentru clientele din Craiova.",
    metaDescription:
      "Ghid Hydrafacial pentru începători: pregătire, pași, confort și recomandări înainte de prima ședință. Programează la Claire Beauty Craiova.",
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Curățare facială acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
      {
        text: "Cum scapi de puncte negre fără a deteriora pielea",
        href: "/blog/cum-scapi-de-puncte-negre-corect",
      },
      {
        text: "Cum pregătești tenul înainte de un tratament facial",
        href: "/blog/cum-pregatesti-tenul-tratament-facial",
      },
    ],
    extraServiceLinks: [L.hydrafacial, L.microdermabraziune, L.tratamenteFaciale],
  },
  "ce-este-microdermabraziunea-beneficii": {
    title: "Ten tern și pori dilatați: când este recomandată microdermabraziunea",
    excerpt:
      "Microdermabraziunea nu e pentru orice tip de ten. Descoperă indicațiile reale, contraindicațiile și cum știi dacă ți se potrivește.",
    metaDescription:
      "Când este recomandată microdermabraziunea: indicații, contraindicații și așteptări realiste. Consultație la Claire Beauty Craiova.",
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Hydrafacial pentru începători",
        href: "/blog/ce-este-hydrafacial-beneficii-craiova",
      },
      {
        text: "Cum alegi tratamentul facial potrivit tipului de ten",
        href: "/blog/cum-alegi-tratament-facial-tip-ten",
      },
    ],
    extraServiceLinks: [L.microdermabraziune, L.hydrafacial, L.tratamenteFaciale],
  },
  "ghid-complet-drenaj-limfatic": {
    title:
      "Drenaj limfatic: protocol, frecvență și obiceiuri care susțin rezultatele",
    excerpt:
      "Pe lângă ședințele în salon, stilul de viață contează. Protocol, frecvență recomandată și obiceiuni care amplifică beneficiile drenajului limfatic.",
    metaDescription:
      "Protocol drenaj limfatic: frecvență, pregătire, stil de viață și combinații utile. Claire Beauty Craiova — programare drenaj limfatic.",
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "De ce apare retenția de apă",
        href: "/blog/de-ce-apare-retentia-de-apa-cauze",
      },
      {
        text: "5 semne că ai nevoie de drenaj limfatic",
        href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.drenaj, L.masajAnticelulitic, L.tratamenteCorporale],
  },
  "semne-ca-ai-nevoie-de-drenaj-limfatic": {
    title: "5 semne că ai nevoie de drenaj limfatic — checklist rapid",
    excerpt:
      "Picioare grele, umflături sau oboseală fără cauză clară? Verifică aceste semne și află când drenajul limfatic poate ajuta.",
    metaDescription:
      "5 semne că ai nevoie de drenaj limfatic: picioare grele, retenție, oboseală. Checklist + programare la Claire Beauty Craiova.",
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "De ce apare retenția de apă — cauze",
        href: "/blog/de-ce-apare-retentia-de-apa-cauze",
      },
      {
        text: "Protocol drenaj limfatic: frecvență și stil de viață",
        href: "/blog/ghid-complet-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.drenaj, L.masaj, L.tratamenteCorporale],
  },
  "ce-este-reflexoterapia-beneficii": {
    title: "Reflexoterapie: beneficii reale și mituri demontate",
    excerpt:
      "Ce poate și ce nu poate face reflexoterapia? Beneficii validate de clienți, mituri frecvente și când merită o ședință la salon.",
    metaDescription:
      "Reflexoterapie — beneficii reale, mituri demontate și la cine se potrivește. Programare reflexoterapie Craiova la Claire Beauty.",
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Masaj de relaxare: de ce este esențial",
        href: "/blog/beneficii-masaj-relaxare-craiova",
      },
      {
        text: "Masaj terapeutic pentru stres și dureri",
        href: "/blog/beneficii-masaj-terapeutic-stres-dureri",
      },
    ],
    extraServiceLinks: [L.reflexoterapie, L.masaj, L.masajTerapeutic],
  },
  "hifu-facial-lifting-nechirurgical": {
    title: "HIFU facial: cine este candidatul ideal pentru lifting nechirurgical",
    excerpt:
      "HIFU nu e pentru toată lumea. Află criteriile de candidatură, ce așteptări sunt realiste și când alt tratament facial e mai potrivit.",
    metaDescription:
      "Candidat ideal HIFU facial: vârstă, indicații, contraindicații și așteptări realiste. Consultație HIFU Craiova — Claire Beauty.",
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Microneedling vs Dermapen: care ți se potrivește",
        href: "/blog/microneedling-vs-dermapen-diferente",
      },
      {
        text: "Microdermabraziune — când e recomandată",
        href: "/blog/ce-este-microdermabraziunea-beneficii",
      },
      {
        text: "Curățare facială acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
    ],
    extraServiceLinks: [L.hifu, L.dermapen, L.tratamenteFaciale],
  },
  "electrostimulare-corporala-tonifiere": {
    title:
      "Electrostimulare corporală: când alegi EMS față de sală sau alte proceduri",
    excerpt:
      "EMS completează, nu înlocuiește tot. Află când electrostimularea are sens, cum se combină cu alte tratamente și ce rezultate sunt realiste.",
    metaDescription:
      "Când alegi electrostimulare corporală: indicații, combinații cu RF sau masaj, frecvență. Claire Beauty Craiova.",
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Radiofrecvență corporală: ghid complet",
        href: "/blog/radiofrecventa-corporala-ghid",
      },
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
    ],
    extraServiceLinks: [L.electrostimulare, L.radiofrecventa, L.remodelare],
  },
  "radiofrecventa-corporala-ghid": {
    title:
      "Radiofrecvență corporală: când alegi RF față de electrostimulare sau masaj",
    excerpt:
      "RF vizează fermitatea și conturul prin căldură controlată. Află diferența față de EMS, masaj anticelulitic și când protocolul RF are sens.",
    metaDescription:
      "Radiofrecvență corporală vs alte tratamente: indicații, frecvență, rezultate progresive. Programare Claire Beauty Craiova.",
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Electrostimulare: când alegi EMS",
        href: "/blog/electrostimulare-corporala-tonifiere",
      },
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
    ],
    extraServiceLinks: [L.radiofrecventa, L.electrostimulare, L.remodelare],
  },
  "remodelare-corporala-fara-operatie-tehnologii": {
    title:
      "Remodelare corporală fără operație: tehnologii explicate (perspectivă informativă)",
    excerpt:
      "Electrostimulare, radiofrecvență, masaj — cum se combină tehnologiile non-invazive? Ghid informativ, nu înlocuitor al consultației la salon.",
    metaDescription:
      "Tehnologii remodelare corporală non-invazivă explicate simplu. Pentru protocol personalizat, programează consultația la Claire Beauty Craiova.",
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Tratamente corporale: ghid pentru începători",
        href: "/blog/tratamente-corporale-ghid-incepatori",
      },
      {
        text: "Vergeturi: ce tratamente aduc rezultate reale",
        href: "/blog/vergeturi-tratamente-rezultate",
      },
    ],
    extraServiceLinks: [L.remodelare, L.electrostimulare, L.radiofrecventa],
  },
  "beneficii-masaj-terapeutic-stres-dureri": {
    title:
      "Stres și dureri musculare: cum te poate ajuta masajul terapeutic (perspectivă wellness)",
    excerpt:
      "Masajul terapeutic susține recuperarea și reduce tensiunea — fără promisiuni medicale. Beneficii, frecvență și când programezi o ședință.",
    metaDescription:
      "Masaj terapeutic pentru stres și tensiune musculară: beneficii wellness, frecvență recomandată. Claire Beauty Craiova.",
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Masaj terapeutic vs masaj anticelulitic",
        href: "/blog/masaj-terapeutic-vs-anticelulitic-cand",
      },
      {
        text: "Masaj de relaxare: beneficii pentru echilibru zilnic",
        href: "/blog/beneficii-masaj-relaxare-craiova",
      },
    ],
    extraServiceLinks: [L.masajTerapeutic, L.masaj, L.reflexoterapie],
  },
  "beneficii-masaj-relaxare-craiova": {
    title: "Masaj de relaxare: rutina de wellness care susține echilibrul zilnic",
    excerpt:
      "Relaxarea nu e lux ocazional — e investiție în somn, stres și energie. Cum integrezi masajul de relaxare într-o rutină sănătoasă.",
    metaDescription:
      "Masaj de relaxare: beneficii pentru stres, somn și stare de bine. Programare masaj Craiova — Claire Beauty.",
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Reflexoterapie: beneficii și mituri",
        href: "/blog/ce-este-reflexoterapia-beneficii",
      },
      {
        text: "Masaj terapeutic vs anticelulitic",
        href: "/blog/masaj-terapeutic-vs-anticelulitic-cand",
      },
    ],
    extraServiceLinks: [L.masaj, L.masajTerapeutic, L.reflexoterapie],
  },
  "cum-scapi-de-celulita-ghid-complet": {
    title: "Celulită: cauze, mituri și abordări realiste (ghid informativ)",
    excerpt:
      "Nu există soluții magice pentru celulită. Înțelege cauzele, miturile demontate și rolul masajului anticelulitic într-un protocol complet.",
    metaDescription:
      "Ghid informativ celulită: cauze, mituri, masaj anticelulitic și remodelare. Consultație Claire Beauty Craiova.",
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Vergeturi — tratamente și rezultate",
        href: "/blog/vergeturi-tratamente-rezultate",
      },
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
      {
        text: "Masaj anticelulitic vs drenaj limfatic",
        href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.masajAnticelulitic, L.remodelare, L.drenaj],
  },
  "masaj-anticelulitic-vs-drenaj-limfatic": {
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "5 semne că ai nevoie de drenaj limfatic",
        href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
      },
      {
        text: "Protocol drenaj limfatic",
        href: "/blog/ghid-complet-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.masajAnticelulitic, L.drenaj, L.masaj],
  },
  "masaj-terapeutic-vs-anticelulitic-cand": {
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Beneficii masaj terapeutic pentru stres",
        href: "/blog/beneficii-masaj-terapeutic-stres-dureri",
      },
      {
        text: "Celulită: cauze și abordări realiste",
        href: "/blog/cum-scapi-de-celulita-ghid-complet",
      },
    ],
    extraServiceLinks: [L.masajTerapeutic, L.masajAnticelulitic, L.masaj],
  },
  "microneedling-vs-dermapen-diferente": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "HIFU: cine este candidatul ideal",
        href: "/blog/hifu-facial-lifting-nechirurgical",
      },
      {
        text: "Cum alegi tratamentul facial potrivit",
        href: "/blog/cum-alegi-tratament-facial-tip-ten",
      },
    ],
    extraServiceLinks: [L.microneedling, L.dermapen, L.tratamenteFaciale],
  },
  "cum-pregatesti-tenul-tratament-facial": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Ce eviți după tratamente estetice",
        href: "/blog/ce-evitat-dupa-tratamente-estetice",
      },
      {
        text: "Pregătire ten vară — pași",
        href: "/blog/pregatire-ten-vara-pasi",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.microdermabraziune],
  },
  "cum-alegi-tratament-facial-tip-ten": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Pregătire ten înainte de tratament facial",
        href: "/blog/cum-pregatesti-tenul-tratament-facial",
      },
      {
        text: "Microneedling vs Dermapen",
        href: "/blog/microneedling-vs-dermapen-diferente",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.hifu],
  },
  "cum-scapi-de-puncte-negre-corect": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Curățare facială acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
      {
        text: "Hydrafacial pentru începători",
        href: "/blog/ce-este-hydrafacial-beneficii-craiova",
      },
      {
        text: "Ce eviți după tratamente estetice",
        href: "/blog/ce-evitat-dupa-tratamente-estetice",
      },
    ],
    extraServiceLinks: [L.hydrafacial, L.microdermabraziune, L.tratamenteFaciale],
  },
  "tratamente-corporale-ghid-incepatori": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
      {
        text: "Celulită: cauze și abordări realiste",
        href: "/blog/cum-scapi-de-celulita-ghid-complet",
      },
    ],
    extraServiceLinks: [L.tratamenteCorporale, L.masaj, L.remodelare],
  },
  "vergeturi-tratamente-rezultate": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Celulită — ghid complet",
        href: "/blog/cum-scapi-de-celulita-ghid-complet",
      },
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
      {
        text: "Tratamente corporale — ghid începători",
        href: "/blog/tratamente-corporale-ghid-incepatori",
      },
    ],
    extraServiceLinks: [L.remodelare, L.microneedling, L.radiofrecventa],
  },
}

const allArticleSeoPatches: Record<string, ArticleSeoPatch> = {
  ...articleSeoPatches,
  ...draftArticleSeoPatches,
}

function buildInterlinkBlock(
  hub: BlogInlineLink,
  articles: BlogInlineLink[],
  services: BlogInlineLink[],
): BlogBlock[] {
  return [
    {
      type: "h2",
      text: "Explorează topic cluster Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Pentru programare și detalii comerciale, pagina principală de serviciu rămâne sursa recomandată. Poți explora și ",
        hub,
        " — hub-ul de categorie cu opțiunile disponibile în Craiova.",
      ],
    },
    {
      type: "h3",
      text: "Articole complementare",
    },
    {
      type: "ul",
      items: articles.slice(0, 6).map((a) => [a]),
    },
    {
      type: "h3",
      text: "Servicii Claire Beauty Craiova",
    },
    {
      type: "ul",
      items: services.slice(0, 3).map((s) => [s]),
    },
  ]
}

function filterLiveBlogLinks(links: BlogInlineLink[]): BlogInlineLink[] {
  return links.filter((link) => isLiveBlogHref(link.href))
}

export function enrichBlogPost(post: BlogPost): BlogPost {
  const patch = allArticleSeoPatches[post.slug]
  if (!patch) {
    return {
      ...post,
      image: {
        ...post.image,
        src: resolveBlogImageSrc(post.slug, post.image.src),
      },
    }
  }

  const pushLinks = filterLiveBlogLinks(
    articleTrafficPushOutbounds[post.slug] ?? [],
  )
  const mergedArticles = filterLiveBlogLinks(
    mergeArticleLinks(patch.relatedArticles, pushLinks),
  )

  const serviceLinks = [
    post.relatedService,
    ...post.recommendedServices,
    ...(patch.extraServiceLinks ?? []),
  ].filter(
    (link, index, arr) =>
      arr.findIndex((l) => l.href === link.href) === index,
  )

  const interlinkBlocks = buildInterlinkBlock(
    patch.hubLink,
    mergedArticles,
    serviceLinks,
  )

  return {
    ...post,
    title: patch.title ?? post.title,
    excerpt: patch.excerpt ?? post.excerpt,
    metaDescription: patch.metaDescription ?? post.metaDescription,
    hubLink: patch.hubLink,
    relatedArticles: mergedArticles,
    image: {
      ...post.image,
      src: resolveBlogImageSrc(post.slug, post.image.src),
    },
    blocks: [...post.blocks, ...interlinkBlocks],
    readTimeMinutes: estimateReadTimeMinutes(
      [...post.blocks, ...interlinkBlocks],
      post.faqs,
    ),
  }
}
