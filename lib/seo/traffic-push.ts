import type { BlogInlineLink } from "@/lib/content/blog/types"

export type HubKey = "masaj" | "facial" | "corporal"

/** Category hub pages → priority blog articles (link authority distributors). */
export const hubBlogLinks: Record<HubKey, BlogInlineLink[]> = {
  masaj: [
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
    {
      text: "De ce apare retenția de apă — cauze explicate",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara — cauze frecvente",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic — diferențe",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
    {
      text: "Drenaj limfatic: protocol și frecvență",
      href: "/blog/ghid-complet-drenaj-limfatic",
    },
    {
      text: "Masaj terapeutic vs anticelulitic — când alegi fiecare",
      href: "/blog/masaj-terapeutic-vs-anticelulitic-cand",
    },
    {
      text: "Masaj terapeutic pentru stres și dureri",
      href: "/blog/beneficii-masaj-terapeutic-stres-dureri",
    },
    {
      text: "Masaj de relaxare — beneficii wellness Craiova",
      href: "/blog/beneficii-masaj-relaxare-craiova",
    },
    {
      text: "Reflexoterapie: beneficii reale și mituri",
      href: "/blog/ce-este-reflexoterapia-beneficii",
    },
  ],
  facial: [
    {
      text: "Curățare facială acasă vs tratament profesional",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Cum scapi de puncte negre fără a deteriora pielea",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
    {
      text: "Pregătire ten vară — pași esențiali",
      href: "/blog/pregatire-ten-vara-pasi",
    },
    {
      text: "Ce eviți după tratamente estetice",
      href: "/blog/ce-evitat-dupa-tratamente-estetice",
    },
    {
      text: "Hydrafacial pentru începători — ce trebuie să știi",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "Microdermabraziune — când este recomandată",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
    {
      text: "HIFU facial — lifting nechirurgical",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
    {
      text: "Microneedling vs Dermapen — diferențe",
      href: "/blog/microneedling-vs-dermapen-diferente",
    },
    {
      text: "Cum alegi tratamentul facial potrivit tipului de ten",
      href: "/blog/cum-alegi-tratament-facial-tip-ten",
    },
    {
      text: "Cum pregătești tenul înainte de un tratament facial",
      href: "/blog/cum-pregatesti-tenul-tratament-facial",
    },
  ],
  corporal: [
    {
      text: "Tratamente recomandate înainte de concediu",
      href: "/blog/tratamente-inainte-de-concediu",
    },
    {
      text: "Celulită: cauze, mituri și abordări realiste",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "Vergeturi: ce tratamente aduc rezultate reale",
      href: "/blog/vergeturi-tratamente-rezultate",
    },
    {
      text: "Remodelare corporală fără operație — tehnologii",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
    {
      text: "De ce apare retenția de apă",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Tratamente corporale: ghid pentru începători",
      href: "/blog/tratamente-corporale-ghid-incepatori",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
    {
      text: "Electrostimulare corporală — când alegi EMS",
      href: "/blog/electrostimulare-corporala-tonifiere",
    },
    {
      text: "Radiofrecvență corporală — ghid complet",
      href: "/blog/radiofrecventa-corporala-ghid",
    },
  ],
}

/** Service landing pages → supporting blog articles. */
export const servicePageBlogLinks: Record<string, BlogInlineLink[]> = {
  "/drenaj-limfatic-craiova": [
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
    {
      text: "De ce apare retenția de apă — cauze",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Protocol drenaj limfatic — frecvență și stil de viață",
      href: "/blog/ghid-complet-drenaj-limfatic",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
  ],
  "/hydrafacial-craiova": [
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
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
    {
      text: "Pregătire ten vară — pași esențiali",
      href: "/blog/pregatire-ten-vara-pasi",
    },
  ],
  "/remodelare-corporala-craiova": [
    {
      text: "Celulită: ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "Vergeturi — tratamente și rezultate",
      href: "/blog/vergeturi-tratamente-rezultate",
    },
    {
      text: "Remodelare corporală fără operație",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
    {
      text: "Tratamente înainte de concediu",
      href: "/blog/tratamente-inainte-de-concediu",
    },
    {
      text: "Electrostimulare corporală — când alegi EMS",
      href: "/blog/electrostimulare-corporala-tonifiere",
    },
    {
      text: "Radiofrecvență corporală — ghid",
      href: "/blog/radiofrecventa-corporala-ghid",
    },
  ],
}

/**
 * Extra outbound internal links appended via enrich block (no article body edits).
 * Supports traffic push to Tier 1 + cluster rebalancing.
 */
export const articleTrafficPushOutbounds: Record<string, BlogInlineLink[]> = {
  "semne-ca-ai-nevoie-de-drenaj-limfatic": [
    {
      text: "De ce apare retenția de apă — cauze frecvente",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Protocol drenaj limfatic",
      href: "/blog/ghid-complet-drenaj-limfatic",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
  ],
  "ghid-complet-drenaj-limfatic": [
    {
      text: "Retenție de apă — 7 cauze explicate",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
    {
      text: "Detoxifiere limfatică — ce înseamnă",
      href: "/blog/detoxifiere-limfatica-ce-inseamna",
    },
  ],
  "masaj-anticelulitic-vs-drenaj-limfatic": [
    {
      text: "Retenție de apă — cauze",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Picioare grele seara",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Celulită — ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
  ],
  "beneficii-masaj-relaxare-craiova": [
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Reflexoterapie — beneficii reale",
      href: "/blog/ce-este-reflexoterapia-beneficii",
    },
    {
      text: "Masaj terapeutic vs anticelulitic",
      href: "/blog/masaj-terapeutic-vs-anticelulitic-cand",
    },
  ],
  "beneficii-masaj-terapeutic-stres-dureri": [
    {
      text: "Picioare grele seara",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Retenție de apă — cauze",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "Masaj de relaxare — beneficii wellness",
      href: "/blog/beneficii-masaj-relaxare-craiova",
    },
  ],
  "ce-este-reflexoterapia-beneficii": [
    {
      text: "Masaj de relaxare — beneficii",
      href: "/blog/beneficii-masaj-relaxare-craiova",
    },
    {
      text: "Masaj terapeutic pentru stres",
      href: "/blog/beneficii-masaj-terapeutic-stres-dureri",
    },
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
  ],
  "masaj-terapeutic-vs-anticelulitic-cand": [
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
    {
      text: "Celulită — ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
  ],
  "cum-scapi-de-puncte-negre-corect": [
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Pori dilatați — cauze și obiceiuri",
      href: "/blog/pori-dilatati-cauze-obiceiuri",
    },
    {
      text: "Hydrafacial pentru începători",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "Microdermabraziune — când e recomandată",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
    {
      text: "HIFU facial — lifting nechirurgical",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
  ],
  "ce-este-hydrafacial-beneficii-craiova": [
    {
      text: "Curățare acasă vs salon — când treci la profesional",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Pori dilatați — cauze",
      href: "/blog/pori-dilatati-cauze-obiceiuri",
    },
    {
      text: "Microdermabraziune — indicații",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
    {
      text: "Puncte negre — ghid corect",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
  ],
  "ce-este-microdermabraziunea-beneficii": [
    {
      text: "Pori dilatați — cauze și obiceiuri",
      href: "/blog/pori-dilatati-cauze-obiceiuri",
    },
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Hydrafacial pentru începători",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "HIFU facial — lifting nechirurgical",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
  ],
  "hifu-facial-lifting-nechirurgical": [
    {
      text: "Lifting nechirurgical vs chirurgical",
      href: "/blog/lifting-nechirurgical-vs-chirurgical",
    },
    {
      text: "Cât durează rezultatele tratamentelor",
      href: "/blog/cat-dureaza-rezultate-tratamente-estetice",
    },
    {
      text: "Microneedling vs Dermapen",
      href: "/blog/microneedling-vs-dermapen-diferente",
    },
    {
      text: "Microdermabraziune — când e recomandată",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
  ],
  "microneedling-vs-dermapen-diferente": [
    {
      text: "Dermapen, peeling sau laser pentru cicatrici",
      href: "/blog/dermapen-peeling-laser-cicatrici-textura",
    },
    {
      text: "Colagen explicat simplu",
      href: "/blog/colagen-explicat-simplu",
    },
    {
      text: "HIFU facial — candidat ideal",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
    {
      text: "Microdermabraziune — indicații",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
  ],
  "cum-pregatesti-tenul-tratament-facial": [
    {
      text: "Ce eviți după tratamente estetice",
      href: "/blog/ce-evitat-dupa-tratamente-estetice",
    },
    {
      text: "Pregătire ten vară — pași",
      href: "/blog/pregatire-ten-vara-pasi",
    },
    {
      text: "Hydrafacial pentru începători",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
  ],
  "cum-alegi-tratament-facial-tip-ten": [
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Pori dilatați",
      href: "/blog/pori-dilatati-cauze-obiceiuri",
    },
    {
      text: "HIFU facial — lifting nechirurgical",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
  ],
  "cum-scapi-de-celulita-ghid-complet": [
    {
      text: "De ce apare celulita — cauze și mituri",
      href: "/blog/de-ce-apare-celulita-cauze-mituri",
    },
    {
      text: "Vergeturi — de ce apar",
      href: "/blog/de-ce-apar-vergeturile-cauze",
    },
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
  "vergeturi-tratamente-rezultate": [
    {
      text: "De ce apar vergeturile — cauze",
      href: "/blog/de-ce-apar-vergeturile-cauze",
    },
    {
      text: "Piele lăsată fără operație",
      href: "/blog/piele-lasa-cauze-fara-operatie",
    },
    {
      text: "Celulită — ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "Remodelare corporală fără operație",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
  ],
  "remodelare-corporala-fara-operatie-tehnologii": [
    {
      text: "Masaj manual vs aparat remodelare",
      href: "/blog/masaj-manual-vs-aparat-remodelare",
    },
    {
      text: "Cât de des tratamente corporale",
      href: "/blog/cat-de-des-tratamente-corporale",
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
  "tratamente-corporale-ghid-incepatori": [
    {
      text: "Tratamente înainte de concediu",
      href: "/blog/tratamente-inainte-de-concediu",
    },
    {
      text: "Cât de des tratamente corporale",
      href: "/blog/cat-de-des-tratamente-corporale",
    },
    {
      text: "De ce apare celulita — cauze",
      href: "/blog/de-ce-apare-celulita-cauze-mituri",
    },
    {
      text: "Vergeturi — tratamente și rezultate",
      href: "/blog/vergeturi-tratamente-rezultate",
    },
  ],
  "electrostimulare-corporala-tonifiere": [
    {
      text: "Radiofrecvență corporală — ghid",
      href: "/blog/radiofrecventa-corporala-ghid",
    },
    {
      text: "Remodelare corporală fără operație",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
    {
      text: "Tratamente înainte de concediu",
      href: "/blog/tratamente-inainte-de-concediu",
    },
  ],
  "radiofrecventa-corporala-ghid": [
    {
      text: "Electrostimulare corporală — când alegi EMS",
      href: "/blog/electrostimulare-corporala-tonifiere",
    },
    {
      text: "Remodelare corporală fără operație",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
    {
      text: "Celulită — ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
  ],
  "de-ce-apare-retentia-de-apa-cauze": [
    {
      text: "Picioare grele seara — cauze",
      href: "/blog/picioare-grele-seara-cauze",
    },
    {
      text: "Protocol drenaj limfatic",
      href: "/blog/ghid-complet-drenaj-limfatic",
    },
    {
      text: "Masaj anticelulitic vs drenaj limfatic",
      href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic",
    },
  ],
  "picioare-grele-seara-cauze": [
    {
      text: "De ce apare retenția de apă",
      href: "/blog/de-ce-apare-retentia-de-apa-cauze",
    },
    {
      text: "5 semne că ai nevoie de drenaj limfatic",
      href: "/blog/semne-ca-ai-nevoie-de-drenaj-limfatic",
    },
    {
      text: "Masaj terapeutic vs anticelulitic",
      href: "/blog/masaj-terapeutic-vs-anticelulitic-cand",
    },
  ],
  "pregatire-ten-vara-pasi": [
    {
      text: "Recuperare ten după soare",
      href: "/blog/recuperare-ten-dupa-soare",
    },
    {
      text: "Tratamente înainte de concediu",
      href: "/blog/tratamente-inainte-de-concediu",
    },
    {
      text: "Hydrafacial pentru începători",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "Cum alegi tratamentul facial potrivit",
      href: "/blog/cum-alegi-tratament-facial-tip-ten",
    },
  ],
  "recuperare-ten-dupa-soare": [
    {
      text: "Pregătire ten vară — pași",
      href: "/blog/pregatire-ten-vara-pasi",
    },
  ],
  "curatare-faciala-acasa-vs-salon": [
    {
      text: "Pori dilatați — cauze",
      href: "/blog/pori-dilatati-cauze-obiceiuri",
    },
    {
      text: "Puncte negre — ghid corect",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
    {
      text: "Hydrafacial pentru începători",
      href: "/blog/ce-este-hydrafacial-beneficii-craiova",
    },
    {
      text: "Microdermabraziune — indicații",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
  ],
  "pori-dilatati-cauze-obiceiuri": [
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Puncte negre — cum scapi corect",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
  ],
  "tratamente-inainte-de-concediu": [
    {
      text: "Pregătire ten vară",
      href: "/blog/pregatire-ten-vara-pasi",
    },
    {
      text: "Cât durează rezultatele tratamentelor",
      href: "/blog/cat-dureaza-rezultate-tratamente-estetice",
    },
    {
      text: "Celulită — ghid complet",
      href: "/blog/cum-scapi-de-celulita-ghid-complet",
    },
    {
      text: "Vergeturi — tratamente și rezultate",
      href: "/blog/vergeturi-tratamente-rezultate",
    },
    {
      text: "Remodelare corporală fără operație",
      href: "/blog/remodelare-corporala-fara-operatie-tehnologii",
    },
    {
      text: "Electrostimulare corporală — când alegi EMS",
      href: "/blog/electrostimulare-corporala-tonifiere",
    },
  ],
  "ce-evitat-dupa-tratamente-estetice": [
    {
      text: "Pregătire ten înainte de tratament",
      href: "/blog/cum-pregatesti-tenul-tratament-facial",
    },
    {
      text: "Curățare facială acasă vs salon",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Microneedling vs Dermapen",
      href: "/blog/microneedling-vs-dermapen-diferente",
    },
    {
      text: "HIFU facial — lifting nechirurgical",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
  ],
}

export function dedupeLinks(links: BlogInlineLink[]): BlogInlineLink[] {
  const seen = new Set<string>()
  return links.filter((link) => {
    if (seen.has(link.href)) return false
    seen.add(link.href)
    return true
  })
}

export function mergeArticleLinks(
  base: BlogInlineLink[],
  extra: BlogInlineLink[] = [],
): BlogInlineLink[] {
  return dedupeLinks([...base, ...extra])
}
