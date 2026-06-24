import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const blocks: BlogPost["blocks"] = [
  {
    type: "p",
    content: [
      "Tenul tern, porii dilatați, petele superficiale și textura neuniformă sunt semne clare că stratul superior al pielii acumulează celule moarte și are nevoie de exfoliere profesională. ",
      L.microdermabraziune,
      " este una dintre cele mai sigure și eficiente metode de a reda luminozitatea tenului, fără timp de recuperare semnificativ. La ",
      L.contact,
      ", o folosim ca tratament standalone sau ca pregătire pentru protocoale faciale avansate — iar clientele apreciază în special faptul că pot reveni imediat la rutina zilnică.",
    ],
  },
  {
    type: "h2",
    text: "Ce este microdermabraziunea?",
  },
  {
    type: "p",
    content: [
      "Microdermabraziunea este o procedură estetică non-invazivă care exfoliază controlat stratul superior al epidermei (stratum corneum). Scopul este eliminarea celulelor moarte, stimularea regenerării celulare și îmbunătățirea absorbției produselor active aplicate ulterior. Spre deosebire de peeling-urile chimice agresive, microdermabraziunea acționează mecanic, cu presiune și viteză controlate, ceea ce o face potrivită pentru o gamă largă de tipuri de ten.",
    ],
  },
  {
    type: "h2",
    text: "Cum funcționează tehnic",
  },
  {
    type: "p",
    content: [
      "Dispozitivul profesional abrazează suprafața pielii prin una dintre două metode: microcristale fine de oxid de aluminiu sau vârfuri diamond (diamantate). În ambele cazuri, un flux de aer aspiră simultan celulele exfoliate, menținând zona curată. Procesul durează de obicei 30–45 de minute și poate fi adaptat în intensitate în funcție de sensibilitatea tenului și de obiectivele stabilite la consultație.",
    ],
  },
  {
    type: "h3",
    text: "Ce se întâmplă în piele după tratament",
  },
  {
    type: "p",
    content: [
      "Exfolierea mecanică declanșează un răspuns natural de vindecare: pielea accelerează turnover-ul celular și stimulează producția de colagen. Rezultatul vizibil este un ten mai neted, mai luminos și cu textură uniformizată. Porii par mai mici, iar serurile hidratante sau cu vitamina C absorbite după ședință pot pătrunde mai eficient în straturile superficiale ale pielii.",
    ],
  },
  {
    type: "h2",
    text: "Beneficii principale ale microdermabraziunii",
  },
  {
    type: "ul",
    items: [
      ["Ten mai luminos și uniform — efect vizibil de la prima ședință"],
      ["Reducerea porilor dilatați și a texturii aspre"],
      ["Estomparea petelor pigmentare superficiale și a cicatricilor ușoare"],
      ["Stimularea producției de colagen pentru fermitate progresivă"],
      ["Pregătire ideală pentru hidratare profundă sau tratamente combinate"],
      ["Fără anestezie și fără perioadă lungă de recuperare"],
      ["Potrivită ca întreținere periodică în rutina de skincare profesional"],
    ],
  },
  {
    type: "h2",
    text: "Microdermabraziune vs alte metode de exfoliere",
  },
  {
    type: "p",
    content: [
      "Peeling-urile chimice (AHA, BHA, TCA) dizolvă legăturile dintre celule, în timp ce microdermabraziunea le îndepărtează fizic. Rollerul de acasă (dermaroller) poate irita pielea dacă nu este folosit corect, pe când aparatul profesional oferă presiune uniformă și control total. ",
      L.hydrafacial,
      " combină exfolierea cu curățare profundă și infuzie de seruri — o alternativă excelentă pentru ten gras sau cu pori înfundati. Alegerea depinde de tipul de ten, de toleranță și de obiectivele tale estetice.",
    ],
  },
  {
    type: "h3",
    text: "Când alegem microdermabraziunea",
  },
  {
    type: "ul",
    items: [
      ["Ten tern, fără strălucire naturală"],
      ["Pete superficiale post-soare sau post-acnee"],
      ["Textură neuniformă sau pori vizibili"],
      ["Pregătire înainte de ",
      L.microneedling,
      " sau ",
      L.dermapen,
      ""],
    ],
  },
  {
    type: "h2",
    text: "Cui i se recomandă — și când se evită",
  },
  {
    type: "p",
    content: [
      "Microdermabraziunea este potrivită pentru ten normal, mixt, gras sau cu semne timpurii de îmbătrânire. Persoanele cu ten deshidratat pot beneficia de ea, urmată de hidratare intensă. Se evită în caz de acnee activă severă, herpes labial în faza acută, eczeme deschise, arsuri solare recente sau iritații cutanate. Dacă folosești retinoizi sau ai făcut recent un peeling chimic, informează specialistul — intervalul dintre tratamente contează.",
    ],
  },
  {
    type: "h2",
    text: "Cum decurge o ședință la Claire Beauty",
  },
  {
    type: "ol",
    items: [
      ["Consultație scurtă: evaluarea tenului și stabilirea intensității"],
      ["Curățare profesională și degresare"],
      ["Microdermabraziune pe zonele stabilite (față, gât, decolteu — opțional)"],
      ["Aplicarea unui ser calmant, hidratant sau cu vitamina C"],
      ["Protecție solară SPF și recomandări post-tratament"],
    ],
  },
  {
    type: "p",
    content: [
      "Senzația în timpul procedurii este de exfoliere ușoară, similară cu o ștergere fină. Pielea poate fi ușor rozie timp de câteva ore — un răspuns normal care dispare de obicei în aceeași zi. Poți aplica machiaj ușor după câteva ore, dacă pielea nu prezintă iritație.",
    ],
  },
  {
    type: "h2",
    text: "Pregătire și îngrijire după tratament",
  },
  {
    type: "h3",
    text: "Înainte de ședință",
  },
  {
    type: "ul",
    items: [
      ["Evită expunerea prelungită la soare cu 3–5 zile înainte"],
      ["Oprește retinoizii cu 5–7 zile înainte, dacă îi folosești"],
      ["Nu face peeling acasă cu 7 zile înainte"],
      ["Vino cu fața curată, fără machiaj"],
    ],
  },
  {
    type: "h3",
    text: "După microdermabraziune",
  },
  {
    type: "ul",
    items: [
      ["SPF 30+ obligatoriu minimum 7 zile — pielea este mai sensibilă la UV"],
      ["Evită sauna, sportul intens și produsele cu alcool 24–48 ore"],
      ["Hidratează generos cu creme fără parfum puternic"],
      ["Nu exfolia acasă timp de 5–7 zile"],
    ],
  },
  {
    type: "h2",
    text: "Frecvența recomandată",
  },
  {
    type: "p",
    content: [
      "Pentru ten tern sau cu pete ușoare, o ședință la 3–4 săptămâni este un ritm potrivit. Protocoalele de 4–6 ședințe consecutive pot aduce îmbunătățiri progresive ale texturii și luminozității. După un ciclu complet, întreținerea lunară sau bilunară menține rezultatele obținute. Frecvența exactă se stabilește la consultație, în funcție de răspunsul pielii tale.",
    ],
  },
  {
    type: "h2",
    text: "Combinări eficiente în protocoale faciale",
  },
  {
    type: "p",
    content: [
      "Microdermabraziunea funcționează excelent ca prim pas într-un protocol de ",
      L.tratamenteFaciale,
      ". După exfoliere, pielea absoarbe mai bine serurile cu acid hialuronic, niacinamidă sau peptide. Poate fi alternată cu ",
      L.hydrafacial,
      " pentru curățare profundă sau urmată de ",
      L.microneedling,
      " când obiectivul este stimularea colagenului pentru cicatrici sau riduri fine. Specialistul stabilește secvența optimă — nu toate combinațiile sunt potrivite în aceeași ședință.",
    ],
  },
  {
    type: "h2",
    text: "Mituri frecvente despre microdermabraziune",
  },
  {
    type: "ul",
    items: [
      ["„Este la fel ca un scrub acasă” — aparatul profesional controlează adâncimea și uniformitatea; scrub-urile granulare pot micro-lesiona pielea"],
      ["„Face pielea mai subțire” — exfoliază doar straturile superficiale de celule moarte; stimularea colagenului poate îmbunătăți densitatea în timp"],
      ["„Nu merge pe ten matur” — este potrivită pentru semne timpurii de îmbătrânire, pete și textură neuniformă la orice vârstă adultă"],
      ["„O ședință rezolvă tot” — tenul răspunde progresiv; constanța aduce cele mai bune îmbunătățiri"],
    ],
  },
  {
    type: "h2",
    text: "Așteptări realiste",
  },
  {
    type: "p",
    content: [
      "Microdermabraziunea poate aduce un glow vizibil de la prima vizită, dar estomparea petelor, reducerea cicatricilor superficiale sau refinarea texturii necesită de obicei mai multe ședințe. Rezultatele depind de vârstă, fototip, expunerea la soare și rutina de acasă. Nu există o formulă universală — consultația inițială stabilește un plan realist, adaptat tenului tău.",
    ],
  },
  {
    type: "callout",
    title: "Redă strălucirea tenului tău",
    content: [
      "Programează o ședință de microdermabraziune la Claire Beauty Craiova. Evaluarea inițială include recomandări personalizate pentru tipul tău de ten și obiectivele estetice.",
    ],
    link: L.microdermabraziune,
  },
]

const faqs: BlogPost["faqs"] = [
  {
    question: "Microdermabraziunea doare?",
    answer:
      "Nu. Majoritatea clientelelor descriu senzația ca o exfoliere fină, ușor sandy. Intensitatea se ajustează în funcție de sensibilitatea tenului. Pielea poate fi ușor rozie după tratament, dar disconfortul este minim.",
  },
  {
    question: "Câte ședințe sunt necesare pentru rezultate vizibile?",
    answer:
      "Multe persoane observă un ten mai luminos după prima ședință. Pentru pete, textură neuniformă sau pori dilatați, un protocol de 4–6 ședințe la interval de 3–4 săptămâni poate aduce îmbunătățiri progresive. Rezultatele variază în funcție de tipul de ten și de constanță.",
  },
  {
    question: "Pot face microdermabraziune dacă am ten sensibil?",
    answer:
      "Da, cu precauții. Intensitatea se reduce, iar zona tratată poate fi limitată. Tenul foarte sensibil, cu cuperoză activă sau dermatită, necesită evaluare individuală. Hydrafacial cu seruri calmante poate fi o alternativă mai potrivită.",
  },
  {
    question: "Microdermabraziunea este sigură vara?",
    answer:
      "Da, dacă respecți protecția solară riguroasă după tratament. Pielea exfoliată este mai vulnerabilă la UV, deci SPF 30+ este obligatoriu timp de minimum 7 zile. Evită expunerea directă la soare imediat după ședință.",
  },
  {
    question: "Care este diferența față de peeling-ul chimic?",
    answer:
      "Microdermabraziunea acționează mecanic, îndepărtând celule moarte prin abraziune. Peeling-ul chimic dizolvă legăturile dintre celule cu acizi. Microdermabraziunea are recuperare mai rapidă; peeling-urile chimice pot fi mai intense, dar necesită adesea mai mult timp de refacere.",
  },
  {
    question: "Pot aplica machiaj după microdermabraziune?",
    answer:
      "Da, de obicei după câteva ore, dacă pielea nu este iritată. Recomandăm produse mineral, non-comedogene și demachiere blândă seara. Evită fondurile de ten cu alcool sau parfum puternic în primele 24 de ore.",
  },
  {
    question: "Microdermabraziunea ajută la cicatrici post-acnee?",
    answer:
      "Poate atenua cicatricile superficiale și poate îmbunătăți textura generală. Pentru cicatrici mai adânci, combinarea cu microneedling sau Dermapen poate fi mai potrivită. Consultația inițială clarifică protocolul optim.",
  },
  {
    question: "Cât costă o ședință și cât durează?",
    answer:
      "Durata tipică este 30–45 de minute, inclusiv pregătirea și aplicarea serurilor post-tratament. Prețul variază în funcție de zonele tratate și de protocol. Contactează Claire Beauty Craiova pentru detalii actualizate și programare.",
  },
]

export const microdermabraziunePost: BlogPost = {
  slug: "ce-este-microdermabraziunea-beneficii",
  title: "Ce este microdermabraziunea și de ce revigorează tenul tern",
  excerpt:
    "Microdermabraziunea exfoliază blând, uniformizează textura și redă luminozitatea. Află cum funcționează, cui i se recomandă și ce rezultate poți aștepta.",
  metaDescription:
    "Microdermabraziune Craiova: beneficii, indicații, diferențe față de alte exfolieri. Ghid complet la Claire Beauty pentru ten luminos și neted.",
  keywords: [
    "microdermabraziune beneficii",
    "ce este microdermabraziunea",
    "microdermabraziune Craiova",
    "exfoliere faciala profesionala",
    "ten tern tratament",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-06-18",
  readTimeMinutes: estimateReadTimeMinutes(blocks, faqs),
  image: {
    src: "/images/blog/blog-microdermabraziune.jpg",
    alt: "Echipament profesional pentru microdermabraziune facială în spa premium",
    title: "Microdermabraziune — exfoliere facială profesională",
  },
  relatedService: L.microdermabraziune,
  recommendedServices: [
    L.tratamenteFaciale,
    L.hydrafacial,
    L.microneedling,
  ],
  blocks,
  faqs,
}
