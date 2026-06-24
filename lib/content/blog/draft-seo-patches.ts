import type { ArticleSeoPatch } from "./enrich-posts"
import { blogServiceLinks as L } from "./links"

/** SEO patches for newly deployed drafts — no body content changes. */
export const draftArticleSeoPatches: Record<string, ArticleSeoPatch> = {
  "de-ce-apare-retentia-de-apa-cauze": {
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Picioare grele seara — cauze",
        href: "/blog/picioare-grele-seara-cauze",
      },
      {
        text: "5 semne că ai nevoie de drenaj limfatic",
        href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
      },
      {
        text: "Protocol drenaj limfatic",
        href: "/blog/ghid-complet-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.drenaj, L.masaj, L.tratamenteCorporale],
  },
  "picioare-grele-seara-cauze": {
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "De ce apare retenția de apă",
        href: "/blog/de-ce-apare-retentia-de-apa-cauze",
      },
      {
        text: "Protocol drenaj limfatic",
        href: "/blog/ghid-complet-drenaj-limfatic",
      },
    ],
    extraServiceLinks: [L.drenaj, L.masajTerapeutic, L.masaj],
  },
  "curatare-faciala-acasa-vs-salon": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Cum scapi de puncte negre corect",
        href: "/blog/cum-scapi-de-puncte-negre-corect",
      },
      {
        text: "Hydrafacial pentru începători",
        href: "/blog/ce-este-hydrafacial-beneficii-craiova",
      },
      {
        text: "Microdermabraziune — când e recomandată",
        href: "/blog/ce-este-microdermabraziunea-beneficii",
      },
    ],
    extraServiceLinks: [L.hydrafacial, L.tratamenteFaciale, L.microdermabraziune],
  },
  "ce-evitat-dupa-tratamente-estetice": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Curățare facială acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
      {
        text: "Cum pregătești tenul înainte de tratament",
        href: "/blog/cum-pregatesti-tenul-tratament-facial",
      },
      {
        text: "Pregătire ten vară — pași",
        href: "/blog/pregatire-ten-vara-pasi",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.dermapen],
  },
  "tratamente-inainte-de-concediu": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Pregătire ten vară",
        href: "/blog/pregatire-ten-vara-pasi",
      },
      {
        text: "Celulită — ghid complet",
        href: "/blog/cum-scapi-de-celulita-ghid-complet",
      },
      {
        text: "Vergeturi — tratamente și rezultate",
        href: "/blog/vergeturi-tratamente-rezultate",
      },
    ],
    extraServiceLinks: [L.remodelare, L.tratamenteFaciale, L.drenaj],
  },
  "pregatire-ten-vara-pasi": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Tratamente înainte de concediu",
        href: "/blog/tratamente-inainte-de-concediu",
      },
      {
        text: "Hydrafacial pentru începători",
        href: "/blog/ce-este-hydrafacial-beneficii-craiova",
      },
      {
        text: "Cum scapi de puncte negre corect",
        href: "/blog/cum-scapi-de-puncte-negre-corect",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.microdermabraziune],
  },
  "masaj-manual-vs-aparat-remodelare": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Cât de des tratamente corporale",
        href: "/blog/cat-de-des-tratamente-corporale",
      },
      {
        text: "De ce apare celulita — cauze",
        href: "/blog/de-ce-apare-celulita-cauze-mituri",
      },
    ],
    extraServiceLinks: [L.remodelare, L.electrostimulare, L.masajAnticelulitic],
  },
  "cat-dureaza-rezultate-tratamente-estetice": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Lifting nechirurgical vs chirurgical",
        href: "/blog/lifting-nechirurgical-vs-chirurgical",
      },
      {
        text: "Hydrafacial pentru începători",
        href: "/blog/ce-este-hydrafacial-beneficii-craiova",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hifu, L.dermapen],
  },
  "de-ce-apare-celulita-cauze-mituri": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Celulită — ghid complet",
        href: "/blog/cum-scapi-de-celulita-ghid-complet",
      },
      {
        text: "Masaj manual vs aparat remodelare",
        href: "/blog/masaj-manual-vs-aparat-remodelare",
      },
    ],
    extraServiceLinks: [L.masajAnticelulitic, L.remodelare, L.drenaj],
  },
  "cauze-ten-tern-fara-stralucire": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Pori dilatați",
        href: "/blog/pori-dilatati-cauze-obiceiuri",
      },
      {
        text: "Microdermabraziune — când e recomandată",
        href: "/blog/ce-este-microdermabraziunea-beneficii",
      },
    ],
    extraServiceLinks: [L.microdermabraziune, L.hydrafacial, L.tratamenteFaciale],
  },
  "cat-de-des-tratamente-faciale": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Curățare acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
      {
        text: "Ce eviți după tratamente estetice",
        href: "/blog/ce-evitat-dupa-tratamente-estetice",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.dermapen],
  },
  "pori-dilatati-cauze-obiceiuri": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Curățare facială acasă vs salon",
        href: "/blog/curatare-faciala-acasa-vs-salon",
      },
      {
        text: "Puncte negre — ghid corect",
        href: "/blog/cum-scapi-de-puncte-negre-corect",
      },
    ],
    extraServiceLinks: [L.hydrafacial, L.microdermabraziune, L.microneedling],
  },
  "cat-de-des-tratamente-corporale": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Tratamente înainte de concediu",
        href: "/blog/tratamente-inainte-de-concediu",
      },
      {
        text: "Masaj manual vs aparat",
        href: "/blog/masaj-manual-vs-aparat-remodelare",
      },
    ],
    extraServiceLinks: [L.tratamenteCorporale, L.remodelare, L.drenaj],
  },
  "recuperare-ten-dupa-soare": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Pregătire ten vară",
        href: "/blog/pregatire-ten-vara-pasi",
      },
      {
        text: "Ce eviți după tratamente",
        href: "/blog/ce-evitat-dupa-tratamente-estetice",
      },
    ],
    extraServiceLinks: [L.tratamenteFaciale, L.hydrafacial, L.microdermabraziune],
  },
  "de-ce-apar-vergeturile-cauze": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "Vergeturi — tratamente și rezultate",
        href: "/blog/vergeturi-tratamente-rezultate",
      },
      {
        text: "Piele lăsată fără operație",
        href: "/blog/piele-lasa-cauze-fara-operatie",
      },
    ],
    extraServiceLinks: [L.remodelare, L.radiofrecventa, L.tratamenteCorporale],
  },
  "colagen-explicat-simplu": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Microneedling vs Dermapen",
        href: "/blog/microneedling-vs-dermapen-diferente",
      },
      {
        text: "HIFU facial — candidat ideal",
        href: "/blog/hifu-facial-lifting-nechirurgical",
      },
    ],
    extraServiceLinks: [L.microneedling, L.hifu, L.tratamenteFaciale],
  },
  "detoxifiere-limfatica-ce-inseamna": {
    hubLink: L.masaj,
    relatedArticles: [
      {
        text: "Ghid complet drenaj limfatic",
        href: "/blog/ghid-complet-drenaj-limfatic",
      },
      {
        text: "Retenție de apă — cauze",
        href: "/blog/de-ce-apare-retentia-de-apa-cauze",
      },
    ],
    extraServiceLinks: [L.drenaj, L.masaj, L.masajTerapeutic],
  },
  "piele-lasa-cauze-fara-operatie": {
    hubLink: L.tratamenteCorporale,
    relatedArticles: [
      {
        text: "De ce apar vergeturile",
        href: "/blog/de-ce-apar-vergeturile-cauze",
      },
      {
        text: "Remodelare corporală fără operație",
        href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
      },
    ],
    extraServiceLinks: [L.remodelare, L.radiofrecventa, L.tratamenteCorporale],
  },
  "lifting-nechirurgical-vs-chirurgical": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "HIFU facial — lifting nechirurgical",
        href: "/blog/hifu-facial-lifting-nechirurgical",
      },
      {
        text: "Cât durează rezultatele tratamentelor",
        href: "/blog/cat-dureaza-rezultate-tratamente-estetice",
      },
    ],
    extraServiceLinks: [L.hifu, L.tratamenteFaciale, L.dermapen],
  },
  "dermapen-peeling-laser-cicatrici-textura": {
    hubLink: L.tratamenteFaciale,
    relatedArticles: [
      {
        text: "Microneedling vs Dermapen",
        href: "/blog/microneedling-vs-dermapen-diferente",
      },
      {
        text: "Colagen explicat simplu",
        href: "/blog/colagen-explicat-simplu",
      },
    ],
    extraServiceLinks: [L.dermapen, L.microneedling, L.tratamenteFaciale],
  },
}
