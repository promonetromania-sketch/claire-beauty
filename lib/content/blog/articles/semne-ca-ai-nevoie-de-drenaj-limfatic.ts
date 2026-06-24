import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "semne-ca-ai-nevoie-de-drenaj-limfatic",
  title: "5 semne clare că ai nevoie de drenaj limfatic",
  excerpt:
    "Retenția de apă, picioarele grele și oboseala persistentă pot indica un sistem limfatic care funcționează sub ritmul optim. Află cele cinci semne de alarmă și cum te poate ajuta drenajul limfatic manual.",
  metaDescription:
    "5 semne că ai nevoie de drenaj limfatic: picioare grele, umflături, oboseală, digestie lentă. Beneficii, protocol și programare la Claire Beauty Craiova.",
  keywords: [
    "semne drenaj limfatic",
    "cand ai nevoie de drenaj limfatic",
    "drenaj limfatic Craiova",
    "retentie apa tratament",
    "picioare grele umflaturi",
  ],
  tag: "Masaj",
  publishedAt: "2026-02-01",
  image: {
    src: "/images/blog/blog-drenaj-limfatic-semne.jpg",
    alt: "Stil de viață wellness — semne că ai nevoie de drenaj limfatic",
    title: "Semne că ai nevoie de drenaj limfatic",
  },
  relatedService: L.drenaj,
  recommendedServices: [L.masajAnticelulitic, L.tratamenteCorporale, L.masaj],
  blocks: [
    {
      type: "p",
      content: [
        "Sistemul limfatic este rețeaua de « canalizare » a corpului — colectează deșeurile celulare, proteinele reziduale și excesul de lichide interstițiale, direcționându-le spre eliminare. Spre deosebire de circulația sanguină, limfa nu are o pompă proprie; mișcarea depinde de contracția musculară, respirație și masaj. Când fluxul încetinește, corpul acumulează apă, te simți grea, apar umflături. ",
        L.drenaj,
        " este soluția profesională pentru reactivarea acestui sistem — blândă, eficientă și profund relaxantă.",
      ],
    },
    {
      type: "h2",
      text: "Ce este drenajul limfatic manual?",
    },
    {
      type: "p",
      content: [
        "Drenajul limfatic manual (DLM) este o tehnică specializată de masaj cu presiune ușoară, ritmică, care urmează traseele sistemului limfatic. Spre deosebire de masajul clasic, presiunea este mult mai blândă — suficientă pentru a stimula fluxul limfatic, fără a comprima vasele de sânge. La ",
        L.contact,
        ", DLM este unul dintre cele mai solicitate ",
        L.tratamenteCorporale,
        ", apreciat atât pentru efectele vizibile, cât și pentru senzația de ușurare imediată.",
      ],
    },
    {
      type: "h2",
      text: "Semnul 1: Picioare grele spre seară",
    },
    {
      type: "p",
      content: [
        "Dacă seara abia te ridici de pe scaun din cauza senzației de greutate la picioare, lichidele s-au acumulat pe parcursul zilei. Statul prelungit în picioare sau pe scaun, pantofii strânți și lipsa mișcării încetinesc returnarea limfei. Drenajul limfatic redirecționează lichidele spre ganglionii limfatici și aduce ușurare — mulți clienți simt diferența chiar după prima ședință.",
      ],
    },
    {
      type: "h3",
      text: "Ce poți face între ședințe",
    },
    {
      type: "ul",
      items: [
        ["Ridică picioarele 10–15 minute seara, deasupra nivelului inimii"],
        ["Plimbări scurte la fiecare oră, dacă lucrezi la birou"],
        ["Evită pantofii cu toc foarte înalt zilnic, ore consecutive"],
        ["Hidratare constantă — paradoxal, apa ajută la reducerea retenției"],
      ],
    },
    {
      type: "h2",
      text: "Semnul 2: Umflături la glezne, mâini sau față",
    },
    {
      type: "p",
      content: [
        "Inelele care se strâng pe degete, șosetele care lasă urme adânci sau gleznele umflate dimineața sunt semne clare de retenție. Edemul facial ușor poate apărea după somn sau consum de sare. Un protocol de drenaj limfatic de 4–6 ședințe reduce semnificativ aceste manifestări, mai ales când este completat de obiceiuri zilnice sănătoase.",
      ],
    },
    {
      type: "h2",
      text: "Semnul 3: Oboseală cronică fără cauză aparentă",
    },
    {
      type: "p",
      content: [
        "Când corpul transportă un surplus de toxine și lichide, metabolismul celular funcționează mai greu. Te simți epuizată chiar după odihnă. Drenajul limfatic accelerează eliminarea deșeurilor metabolice, iar clienții raportează adesea o creștere a energiei după 2–3 ședințe consecutive. Nu este o soluție pentru anemie sau afecțiuni tiroidiene — dar poate contribui la senzația de ușurare când retenția este factorul principal.",
      ],
    },
    {
      type: "h2",
      text: "Semnul 4: Digestie lentă și balonare",
    },
    {
      type: "p",
      content: [
        "Sistemul limfatic din zona abdominală este strâns legat de procesele digestive. Când limfa circulă lent, balonarea cronică și senzația de « burta plină » pot persista indiferent de alimentație. Drenajul limfatic abdominal, realizat de terapeut experimentat, poate stimula peristaltismul și reduce disconfortul — mulți clienți observă îmbunătățiri după câteva ședințe.",
      ],
    },
    {
      type: "h3",
      text: "Alimentație complementară",
    },
    {
      type: "p",
      content: [
        "Reducerea sării procesate, a alimentelor foarte sărate și a băuturilor carbogazoase susține efectele drenajului. Nu este vorba de diete drastice — ci de obiceiuri care nu contracarează tratamentul.",
      ],
    },
    {
      type: "h2",
      text: "Semnul 5: Celulită cu componentă de retenție",
    },
    {
      type: "p",
      content: [
        "Celulita agravată de retenție arată diferit — piele încordată, aspect edematos, « cd-iță » mai moale la presiune. În acest caz, drenajul limfatic singur nu rezolvă totul, dar pregătește țesuturile pentru ",
        L.masajAnticelulitic,
        ". Combinarea celor două — drenaj pentru lichide, anticelulitic pentru contur și fermitate — este protocolul pe care îl recomandăm frecvent la ",
        L.contact,
        ".",
      ],
    },
    {
      type: "h2",
      text: "Alte situații în care drenajul limfatic ajută",
    },
    {
      type: "ul",
      items: [
        ["După călătorii lungi cu avionul — edemul post-zbor este foarte frecvent"],
        ["Recuperare după efort fizic intens sau competiții sportive"],
        ["Post-operator, la recomandarea medicului — pentru reducerea edemului"],
        ["Perioade de stres prelungit, când mișcarea și somnul sunt reduse"],
        ["Schimbări hormonale — premenstrual sau menopauză — cu retenție accentuată"],
      ],
    },
    {
      type: "h2",
      text: "Cum decurge o ședință de drenaj limfatic",
    },
    {
      type: "ol",
      items: [
        ["Discuție scurtă: simptome, zone prioritare, contraindicații"],
        ["Așezare confortabilă — drenajul se poate face pe spate, lateral sau abdominal"],
        ["Mișcări lente, ritmice, urmând traseele limfatic — presiune ușoară"],
        ["Durata tipică: 45–60 de minute pentru corp complet sau zone specifice"],
        ["Recomandări post-ședință: apă, mișcare ușoară, evitarea efortului intens imediat"],
      ],
    },
    {
      type: "h3",
      text: "Ce simți în timpul și după tratament",
    },
    {
      type: "p",
      content: [
        "Majoritatea clienților descriu experiența ca profund relaxantă — presiunea ușoară poate induce somnolență. După tratament, picioarele sunt mai ușoare, iar energia poate crește în următoarele 24–48 de ore. Ocazional, urinarea devine mai frecventă — semn normal că organismul elimină excesul de lichide.",
      ],
    },
    {
      type: "h2",
      text: "Cât de des ai nevoie de drenaj limfatic?",
    },
    {
      type: "p",
      content: [
        "Pentru retenție acută: 2 ședințe pe săptămână, timp de 3–4 săptămâni. Pentru întreținere: 1 ședință lunară. După călătorii lungi cu avionul, o singură ședință poate face diferența. Pentru celulită edematoză, alternăm drenajul cu ",
        L.masajAnticelulitic,
        " — vezi toate opțiunile în hub-ul de ",
        L.tratamenteCorporale,
        ".",
      ],
    },
    {
      type: "h2",
      text: "Drenaj limfatic vs masaj clasic",
    },
    {
      type: "p",
      content: [
        "Masajul clasic lucrează pe mușchi, cu presiune medie spre fermă. Drenajul limfatic urmărește vasele limfatice, cu presiune mult mai ușoară și mișcări direcționate spre ganglionii limfatici. Obiectivele diferă: relaxare musculară vs eliminarea lichidelor. Articolul nostru despre ",
        { text: "masaj anticelulitic vs drenaj limfatic", href: "/blog/masaj-anticelulitic-vs-drenaj-limfatic" },
        " explică diferențele în detaliu.",
      ],
    },
    {
      type: "h2",
      text: "Recomandări înainte și după ședință",
    },
    {
      type: "h3",
      text: "Înainte",
    },
    {
      type: "ul",
      items: [
        ["Hidratează-te normal — nu veni deshidratată"],
        ["Evită mesele foarte copioase cu o oră înainte"],
        ["Informează terapeutul despre infecții, tromboză, sarcină sau operații recente"],
        ["Poartă haine confortabile, ușor de schimbat"],
      ],
    },
    {
      type: "h3",
      text: "După",
    },
    {
      type: "ul",
      items: [
        ["Bea apă pe parcursul zilei — susține eliminarea"],
        ["Evită alcoolul și sarea în exces 24 de ore"],
        ["Mișcare ușoară — plimbare — amplifică efectul drenajului"],
        ["Nu aplica presiune fermă sau sport intens imediat după ședință"],
      ],
    },
    {
      type: "h2",
      text: "Când este momentul potrivit să programezi",
    },
    {
      type: "p",
      content: [
        "Dacă recunoști două sau mai multe semne din acest articol, drenajul limfatic merită o ședință de probă. Nu aștepta vara, când retenția devine vizibilă în sandale — un protocol de primăvară pregătește corpul pentru sezonul cald. După zboruri lungi, programează în primele 48 de ore de la aterizare pentru efect maxim.",
      ],
    },
    {
      type: "h2",
      text: "De ce Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Practicăm drenajul limfatic manual conform tehnicilor recunoscute — presiune corectă, trasee precise, ritm constant. Evaluăm dacă ai nevoie doar de drenaj sau de un protocol combinat cu ",
        L.masajAnticelulitic,
        " sau ",
        L.remodelare,
        ". Fără promisiuni de « detox total » — doar tratamente profesionale care aduc ușurare reală.",
      ],
    },
    {
      type: "callout",
      title: "Simți aceste semne?",
      content: [
        "Programează un drenaj limfatic la Claire Beauty Craiova și simte ușurarea de la prima ședință — picioare mai ușoare, corp mai energic.",
      ],
      link: L.drenaj,
    },
  ],
  faqs: [
    {
      question: "Cum știu sigur că am nevoie de drenaj limfatic?",
      answer:
        "Picioare grele seara, umflături la glezne, inele care se strâng și oboseală persistentă sunt semne frecvente. Consultația inițială confirmă dacă drenajul este potrivit sau dacă alt tratament corporal ar fi mai eficient.",
    },
    {
      question: "Drenajul limfatic este dureros?",
      answer:
        "Nu. Presiunea este ușoară, ritmică, adesea relaxantă. Este mult mai blând decât masajul anticelulitic sau terapeutic.",
    },
    {
      question: "Câte ședințe am nevoie pentru rezultate vizibile?",
      answer:
        "Ușurarea poate fi simțită după prima ședință. Pentru retenție cronică, recomandăm 6–8 ședințe (2 pe săptămână, 3–4 săptămâni), apoi întreținere lunară.",
    },
    {
      question: "Pot face drenaj limfatic în sarcină?",
      answer:
        "Cu precauții și acordul medicului, drenajul poate ajuta la edemul picioarelor din trimestrul doi și trei. Evită zona abdominală și informează terapeutul.",
    },
    {
      question: "Drenajul limfatic ajută la slăbit?",
      answer:
        "Elimină excesul de lichide, ceea ce poate reduce câteva sute de grame — nu kilograme de grăsime. Este o procedură de wellness și contur, nu de slăbire.",
    },
    {
      question: "Pot combina drenajul cu masaj anticelulitic?",
      answer:
        "Da, și este recomandat pentru celulită cu retenție. Drenajul pregătește țesuturile; masajul anticelulitic lucrează apoi pe fermitate și contur.",
    },
    {
      question: "Există contraindicații?",
      answer:
        "Tromboză venoasă activă, infecții acute, febră, cancer activ netratat și anumite afecțiuni cardiace necesită evaluare medicală înainte. Informează terapeutul despre orice condiție.",
    },
    {
      question: "Cât durează efectul unei ședințe?",
      answer:
        "Ușurarea imediată poate dura câteva zile. Pentru menținere, ședințe regulate (săptămânal sau lunar) sunt necesare — limfa se acumulează din nou fără întreținere și obiceiuri sănătoase.",
    },
  ],
}

export const semneDrenajPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
