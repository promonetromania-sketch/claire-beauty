import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const blocks: BlogPost["blocks"] = [
  {
    type: "p",
    content: [
      "Drenajul limfatic manual este mult mai mult decât un masaj relaxant. Este o tehnică terapeutică precisă, dezvoltată de dr. Emil Vodder în anii 1930, care stimulează sistemul limfatic să elimine toxinele, excesul de lichide și deșeurile celulare. Spre deosebire de masajul clasic, presiunea este ușoară, ritmică și urmează traseele anatomice ale vaselor limfatice. La ",
      L.contact,
      ", drenajul limfatic este unul dintre cele mai solicitate ",
      L.tratamenteCorporale,
      " — atât pentru retenția de apă, cât și pentru recuperare și wellness general.",
    ],
  },
  {
    type: "h2",
    text: "Ce este sistemul limfatic și de ce contează",
  },
  {
    type: "p",
    content: [
      "Sistemul limfatic este rețeaua de „canalizare” a corpului. Colectează lichidul interstițial, filtrează toxinele prin ganglioni limfatici și returnează fluidul curat în circulația sanguină. Spre deosebire de sistemul circulator, limfa nu are o pompă proprie — mișcarea depinde de contracția musculară, respirație și stimulare externă. Când fluxul limfatic încetinește, corpul acumulează apă, te simți grea, apar umflături, iar pielea poate deveni edematoasă.",
    ],
  },
  {
    type: "h2",
    text: "Cum funcționează drenajul limfatic manual",
  },
  {
    type: "p",
    content: [
      "Terapeutul aplică presiuni ușoare, circulare și ritmice pe zonele cu ganglioni limfatici (gât, axile, abdomen, inghinal) și apoi pe traseele limfatice ale membrelor. Mișcările respectă direcția fluxului limfatic — spre ganglionii regionali, unde lichidul este filtrat. Tehnica este blândă; dacă presiunea este prea mare, vasele limfatice se comprimă și drenajul devine ineficient. O ședință tipică durează 45–60 de minute.",
    ],
  },
  {
    type: "h3",
    text: "Drenaj manual vs drenaj cu aparat",
  },
  {
    type: "p",
    content: [
      "Drenajul manual oferă feedback tactil imediat — terapeutul simte zonele congested și adaptează presiunea. Presoterapia (aparat cu cizme sau mâneci) poate completa protocolul, dar nu înlocuiește complet precizia mâinilor antrenate. La Claire Beauty, prioritizăm drenajul manual pentru control fin și experiență personalizată.",
    ],
  },
  {
    type: "h2",
    text: "Ce probleme poate adresa drenajul limfatic",
  },
  {
    type: "ul",
    items: [
      ["Retenție de apă și picioare grele spre seară"],
      ["Umflături la glezne, mâini, față sau abdomen"],
      ["Senzație de corp încărcat și oboseală cronică"],
      ["Digestie lentă, balonare și disconfort abdominal"],
      ["Recuperare după călătorii lungi, efort fizic sau intervenții estetice"],
      ["Celulită cu componentă edematoasă (retenție + aspect de coajă de portocală)"],
      ["Pregătire sau recuperare pre/post-proceduri chirurgicale estetice (cu aviz medical)"],
    ],
  },
  {
    type: "h2",
    text: "Beneficii principale",
  },
  {
    type: "ul",
    items: [
      ["Ușurare imediată la nivelul picioarelor și al corpului"],
      ["Reducerea umflăturilor și a senzației de încordare"],
      ["Stimularea eliminării toxinelor acumulate"],
      ["Relaxare profundă — activarea sistemului nervos parasimpatic"],
      ["Îmbunătățirea aspectului pielii prin oxigenare și drenaj"],
      ["Susținerea recuperării după sport sau stres prelungit"],
    ],
  },
  {
    type: "h2",
    text: "Cum se simte o ședință",
  },
  {
    type: "p",
    content: [
      "Majoritatea clienților descriu experiența ca profund relaxantă — presiunea ușoară poate induce somnolență, semn că sistemul nervos se calmează. Nu este un masaj profund; dacă cauți eliberarea nodulilor musculari, ",
      L.masajTerapeutic,
      " este alegerea potrivită. După drenaj, mulți simt picioare mai ușoare, energie reînnoită în următoarele 24–48 de ore și, ocazional, urinare mai frecventă — un răspuns normal al organismului care elimină excesul de lichide.",
    ],
  },
  {
    type: "h2",
    text: "Frecvența recomandată",
  },
  {
    type: "ol",
    items: [
      ["Retenție acută: 2 ședințe pe săptămână, timp de 3–4 săptămâni"],
      ["Întreținere și wellness: 1 ședință pe lună"],
      ["Post-călătorie cu avion: 1 ședință imediat după sosire"],
      ["Celulită edematoasă: combinare cu masaj anticelulitic, 1–2 ori pe săptămână"],
      ["Recuperare post-procedură: conform indicațiilor medicului, de obicei după 48–72 de ore"],
    ],
  },
  {
    type: "p",
    content: [
      "Constanța contează mai mult decât o singură ședință intensă. Sistemul limfatic răspunde progresiv — clienții care urmează un protocol complet raportează beneficii cumulative, nu doar efecte temporare.",
    ],
  },
  {
    type: "h2",
    text: "Drenaj limfatic vs masaj anticelulitic",
  },
  {
    type: "p",
    content: [
      "Ambele sunt ",
      L.tratamenteCorporale,
      " manuale, dar cu obiective diferite. ",
      L.drenaj,
      " vizează eliminarea lichidelor și detoxifierea blândă, cu presiune ușoară. ",
      L.masajAnticelulitic,
      " folosește tehnici energice (frământare, palming) pentru a sparge aderențele fibroase și a tonifia țesuturile. Celulita cu retenție de apă beneficiază adesea de ambele — drenajul pregătește țesuturile, iar masajul anticelulitic lucrează apoi pe contur și fermitate.",
    ],
  },
  {
    type: "h2",
    text: "Contraindicații și precauții",
  },
  {
    type: "p",
    content: [
      "Drenajul limfatic este sigur pentru majoritatea persoanelor, dar se evită în infecții acute, tromboză venoasă activă, insuficiență cardiacă necompensată, febră sau inflamații localizate. În sarcină, se evită zona abdominală în trimestrul I; ulterior, cu aviz medical, poate fi adaptat. Dacă ai condiții medicale cronice, discută cu medicul înainte de prima ședință.",
    ],
  },
  {
    type: "h2",
    text: "Drenaj limfatic și stil de viață",
  },
  {
    type: "p",
    content: [
      "Tratamentul profesional funcționează mai bine când este susținut de obiceiuri zilnice sănătoase. Mișcarea regulată — plimbări, yoga, înot — activează natural pompa musculară care propulsează limfa. Hidratarea constantă, reducerea sării în exces și alimentația bogată în legume și fructe scad volumul de toxine de procesat. Somnul odihnitor permite organismului să se regenereze între ședințe. Drenajul limfatic nu înlocuiește aceste obiceiuri — le amplifică.",
    ],
  },
  {
    type: "h3",
    text: "Beneficii pe termen lung",
  },
  {
    type: "p",
    content: [
      "Clienții care urmează protocoale regulate raportează nu doar picioare mai ușoare, ci și digestie îmbunătățită, somn mai profund și o senzație generală de vitalitate. Sistemul limfatic influențează imunitatea, echilibrul hormonal și aspectul pielii. Investiția în drenaj periodic poate fi parte a unui plan holistic de wellness — alături de ",
      L.masaj,
      ", alimentație echilibrată și gestionarea stresului.",
    ],
  },
  {
    type: "h2",
    text: "Mituri despre drenaj limfatic",
  },
  {
    type: "ul",
    items: [
      ["„Este doar un masaj ușor” — tehnica urmează trasee anatomice precise; presiunea greșită reduce eficiența"],
      ["„Slăbești definitiv după o ședință” — elimină lichide reținute, nu grăsimea; efectul asupra centimetrilor poate fi temporar"],
      ["„Nu are contraindicații” — există situații medicale în care se evită; evaluarea inițială este importantă"],
      ["„O dată pe an e suficient” — pentru retenție cronică, protocoalele inițiale necesită frecvență mai mare"],
    ],
  },
  {
    type: "h2",
    text: "Pregătire și recomandări post-drenaj",
  },
  {
    type: "h3",
    text: "Înainte de ședință",
  },
  {
    type: "ul",
    items: [
      ["Hidratează-te bine — apa susține fluxul limfatic"],
      ["Evită mesele foarte copioase cu 2 ore înainte"],
      ["Comunică alergiile, intervențiile recente sau medicamentele"],
    ],
  },
  {
    type: "h3",
    text: "După drenaj",
  },
  {
    type: "ul",
    items: [
      ["Bea apă — ajută la eliminarea toxinelor mobilizate"],
      ["Evită alcoolul și sarea în exces în ziua următoare"],
      ["Mișcare ușoară (plimbare) amplifică efectul drenajului"],
      ["Evită sauna imediat după — poate suprasolicita circulația"],
    ],
  },
  {
    type: "callout",
    title: "Simți corpul încărcat?",
    content: [
      "Programează un drenaj limfatic la Claire Beauty Craiova. Evaluarea inițială stabilește frecvența și protocolul potrivit nevoilor tale.",
    ],
    link: L.drenaj,
  },
]

const faqs: BlogPost["faqs"] = [
  {
    question: "Drenajul limfatic ajută la slăbit?",
    answer:
      "Drenajul elimină excesul de lichide reținute, ceea ce poate reduce câțiva centimetri temporar și senzația de balonare. Nu arde grăsimea în sine. Pentru conturare corporală, combinarea cu remodelare corporală sau masaj anticelulitic poate fi mai potrivită.",
  },
  {
    question: "Cât durează efectul după o ședință?",
    answer:
      "Senzația de ușurare la picioare apare adesea imediat. Efectul complet asupra retenției se menține câteva zile, în funcție de alimentație, hidratare și stil de viață. Protocoalele regulate aduc beneficii cumulative pe termen mai lung.",
  },
  {
    question: "Pot face drenaj limfatic în sarcină?",
    answer:
      "Cu precauții și aviz medical. Se evită zona abdominală în primul trimestru. Ulterior, drenajul la picioare poate reduce umflăturile frecvente în sarcină. Consultă medicul obstetrician înainte de programare.",
  },
  {
    question: "Drenajul limfatic este dureros?",
    answer:
      "Nu. Presiunea este foarte ușoară — mult mai blândă decât la un masaj clasic. Dacă simți durere, presiunea este prea mare. Tehnica corectă este relaxantă, aproape hipnotică.",
  },
  {
    question: "Câte ședințe am nevoie pentru retenție cronică?",
    answer:
      "Pentru retenție persistentă, recomandăm de obicei 2 ședințe pe săptămână, timp de 3–4 săptămâni, urmate de întreținere lunară. Numărul exact se stabilește la evaluarea inițială.",
  },
  {
    question: "Pot combina drenajul cu sport?",
    answer:
      "Da. Drenajul înainte de competiții poate reduce edemul muscular. După efort intens, ajută la recuperare. Evită sportul foarte intens imediat după ședință — lasă corpul să intre în modul de relaxare.",
  },
  {
    question: "Drenajul limfatic facial există?",
    answer:
      "Da. Drenajul facial reduce puffiness-ul, conturează linia maxilarului și poate îmbunătăți aspectul tenului prin oxigenare. Este popular înainte de evenimente sau ca parte a unui protocol de tratamente faciale.",
  },
  {
    question: "Care este diferența față de masajul de relaxare?",
    answer:
      "Masajul de relaxare lucrează pe mușchi, cu presiuni moderate, pentru starea de bine generală. Drenajul limfatic urmează trasee anatomice precise, cu presiune minimă, pentru a mobiliza limfa. Obiectivele și tehnicile sunt fundamental diferite.",
  },
]

export const drenajGhidPost: BlogPost = {
  slug: "ghid-complet-drenaj-limfatic",
  title: "Ghid complet drenaj limfatic: beneficii, frecvență și la cine ajută",
  excerpt:
    "Drenajul limfatic manual este mult mai mult decât un masaj relaxant. Descoperă cum funcționează, cine are nevoie de el și cât de des este recomandat.",
  metaDescription:
    "Ghid drenaj limfatic manual: beneficii, indicații, frecvență recomandată. Tot ce trebuie să știi la Claire Beauty Craiova.",
  keywords: [
    "drenaj limfatic ghid",
    "drenaj limfatic beneficii",
    "drenaj limfatic manual Craiova",
    "retentie apa tratament",
    "detox corporal",
  ],
  tag: "Masaj",
  publishedAt: "2026-06-15",
  readTimeMinutes: estimateReadTimeMinutes(blocks, faqs),
  image: {
    src: "/images/blog/blog-drenaj-limfatic-ghid.jpg",
    alt: "Atmosferă wellness pentru drenaj limfatic și detoxifiere corporală",
    title: "Ghid complet drenaj limfatic",
  },
  relatedService: L.drenaj,
  recommendedServices: [
    L.masajAnticelulitic,
    L.tratamenteCorporale,
    L.masaj,
  ],
  blocks,
  faqs,
}
