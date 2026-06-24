import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const blocks: BlogPost["blocks"] = [
  {
    type: "p",
    content: [
      "Radiofrecvența corporală (RF) este una dintre cele mai versatile tehnologii de ",
      L.remodelare,
      " disponibile astăzi. Folosește energie electromagnetică pentru a încălzi controlat straturile profunde ale pielii, stimulând colagenul și favorizând conturarea corporală — totul fără incizii, anestezie sau perioade lungi de recuperare. La ",
      L.contact,
      ", radiofrecvența face parte din protocoalele personalizate pentru fermitate, reducerea centimetrilor și îmbunătățirea texturii pielii.",
    ],
  },
  {
    type: "h2",
    text: "Ce este radiofrecvența corporală",
  },
  {
    type: "p",
    content: [
      "Radiofrecvența estetică utilizează unde electromagnetice (de obicei între 0,3 și 10 MHz) care penetrare pielea și generează căldură în dermă și țesutul subcutanat. Căldura controlată contractă fibrele de colagen existente (efect imediat de fermitate) și stimulează fibroblastele să producă colagen nou (efect progresiv în săptămânile următoare). Tehnologia este folosită atât facial, cât și corporal, cu parametri diferiți pentru fiecare zonă.",
    ],
  },
  {
    type: "h2",
    text: "Cum funcționează RF în remodelare corporală",
  },
  {
    type: "p",
    content: [
      "Dispozitivul RF emite energie printr-un cap aplicat pe piele, cu gel conductor pentru a facilita glisarea și distribuția uniformă a căldurii. Temperatura țintă în straturile profunde este monitorizată — senzația este de căldură plăcută, fără durere. Procesul poate favoriza metabolizarea celulelor adipose locale și îmbunătățirea microcirculației, contribuind la conturare și reducerea aspectului de „piele de portocală”.",
    ],
  },
  {
    type: "h3",
    text: "RF monopolar vs bipolar vs multipolar",
  },
  {
    type: "p",
    content: [
      "RF monopolar penetrează mai adânc, ideal pentru conturare corporală. RF bipolar acționează mai superficial, potrivit pentru fermitate ușoară. Multipolar combină adâncimi diferite pentru tratament uniform. Echipamentele profesionale de la salon permit ajustarea parametrilor în funcție de zonă, grosimea țesutului și obiective.",
    ],
  },
  {
    type: "h2",
    text: "Ce zone se pot trata",
  },
  {
    type: "ul",
    items: [
      ["Abdomen — reducerea grăsimii localizate și tonifierea pielii"],
      ["Coapse și fesieri — conturare, fermitate și îmbunătățirea celulitei"],
      ["Brațe — reducerea lăsării pielii („bat wings”)"],
      ["Gambă și genunchi — îmbunătățirea texturii și fermității"],
      ["Flancuri și spate — conturarea taliei"],
    ],
  },
  {
    type: "h2",
    text: "Beneficii ale radiofrecvenței corporale",
  },
  {
    type: "ul",
    items: [
      ["Fermitate progresivă a pielii prin stimularea colagenului"],
      ["Conturare corporală și reducere a centimetrilor în zonele tratate"],
      ["Îmbunătățirea texturii pielii și a aspectului celulitei"],
      ["Non-invaziv — fără timp de recuperare"],
      ["Potrivită pentru piele lăsată după slăbire"],
      ["Combinabilă cu electrostimulare sau tratamente manuale"],
    ],
  },
  {
    type: "h2",
    text: "Cum decurge o ședință",
  },
  {
    type: "ol",
    items: [
      ["Consultație: evaluarea zonei și stabilirea parametrilor"],
      ["Pregătire: curățarea pielii, aplicarea gelului conductor"],
      ["Tratament: 30–45 minute de mișcări circulare uniforme cu capul RF"],
      ["Finalizare: ștergerea gelului, hidratare, recomandări post-tratament"],
    ],
  },
  {
    type: "p",
    content: [
      "Senzația este de căldură graduală, similară cu un masaj cald. Nu arde și nu provoacă roșeață prelungită — poți reveni imediat la activitățile zilnice. Unele cliente preferă ședințele seara, când relaxarea post-tratament se simte ca un bonus.",
    ],
  },
  {
    type: "h2",
    text: "Cui i se recomandă radiofrecvența",
  },
  {
    type: "p",
    content: [
      "RF corporală se adresează persoanelor cu depozite localizate de grăsime, piele lăsată după slăbire, celulită cu laxitate sau pierdere de fermitate din cauza vârstei. Este potrivită și ca întreținere periodică în cadrul unui protocol de ",
      L.tratamenteCorporale,
      ". Nu înlocuiește dieta sau exercițiile — le completează pentru contur și tonifiere.",
    ],
  },
  {
    type: "h3",
    text: "Contraindicații",
  },
  {
    type: "ul",
    items: [
      ["Sarcină și alăptare"],
      ["Stimulator cardiac sau dispozitive metalice implantate în zona tratată"],
      ["Infecții cutanate active, herpes, arsuri solare recente"],
      ["Tromboză venoasă activă"],
      ["Boli autoimune acute sau febră"],
    ],
  },
  {
    type: "h2",
    text: "Rezultate de așteptat — așteptări realiste",
  },
  {
    type: "p",
    content: [
      "Primele schimbări de fermitate pot apărea după 3–4 ședințe. Efectele maxime se conturează de obicei după 8–12 ședințe, cu îmbunătățiri continue timp de 2–3 luni post-protocoll datorită neocolagenogenezei. Rezultatele variază în funcție de vârstă, grosimea țesutului adipos, alimentație, hidratare și constanța ședințelor. RF nu șterge complet celulita sau grăsimea — o abordează progresiv, ca parte a unui stil de viață echilibrat.",
    ],
  },
  {
    type: "h2",
    text: "Frecvența recomandată",
  },
  {
    type: "p",
    content: [
      "Pentru conturare corporală, 1–2 ședințe pe săptămână, timp de 8–12 săptămâni, este un protocol frecvent. Intervalul minim între ședințe pe aceeași zonă este de 48–72 de ore, pentru a permite refacerea țesuturilor. După un ciclu complet, întreținerea la 1 ședință pe lună poate susține rezultatele.",
    ],
  },
  {
    type: "h2",
    text: "Combinări eficiente",
  },
  {
    type: "p",
    content: [
      "Radiofrecvența se combină excelent cu ",
      L.electrostimulare,
      " — RF pentru colagen și contur, EMS pentru tonus muscular. ",
      L.masajAnticelulitic,
      " sau ",
      L.drenaj,
      " pot completa protocolul când celulita sau retenția de apă sunt factori. Consultația inițială stabilește secvența: unele combinații se fac în aceeași ședință, altele alternat.",
    ],
  },
  {
    type: "h2",
    text: "Radiofrecvență vs alte tehnologii de conturare",
  },
  {
    type: "p",
    content: [
      "RF se diferențiază de cavitație (ultrasunete care targetează adipocitele) și de criolipoliză (îngheț controlat al grăsimii) prin mecanismul principal: căldura care stimulează colagenul și favorizează conturarea progresivă. Multe protocoale profesionale combină RF cu ",
      L.electrostimulare,
      " — RF pentru piele și contur, EMS pentru tonus muscular. Alegerea depinde de tipul de țesut, zona tratată și obiectivele stabilite la consultația de ",
      L.remodelare,
      ".",
    ],
  },
  {
    type: "h2",
    text: "Mituri despre radiofrecvența corporală",
  },
  {
    type: "ul",
    items: [
      ["„Arde grăsimea instant” — efectele apar progresiv, în cicluri de 8–12 ședințe"],
      ["„Înlocuiește dieta” — alimentația echilibrată rămâne fundamentul oricărui protocol corporal"],
      ["„Este la fel ca RF facial” — parametrii și profunzimea diferă; echipamentele corporale sunt calibrate pentru zone mai extinse"],
      ["„O ședință face diferența vizibilă” — primele schimbări pot apărea după câteva ședințe; colagenul nou se formează luni de zile"],
    ],
  },
  {
    type: "h2",
    text: "Pregătire și îngrijire post-tratament",
  },
  {
    type: "ul",
    items: [
      ["Hidratează-te bine înainte și după — pielea hidratată răspunde mai bine"],
      ["Evită expunerea la soare intens cu 24 ore înainte și după"],
      ["Nu aplica produse iritante (retinoizi, AHA) pe zona tratată în ziua ședinței"],
      ["Mișcare ușoară și alimentație echilibrată susțin rezultatele pe termen lung"],
    ],
  },
  {
    type: "h2",
    text: "Așteptări realiste și întreținere",
  },
  {
    type: "p",
    content: [
      "Radiofrecvența corporală poate contribui la fermitate, contur și reducerea centimetrilor în zonele tratate, dar rezultatele variază semnificativ de la o persoană la alta. Vârsta, grosimea stratului adipos, calitatea pielii și stilul de viață influențează răspunsul. După un protocol complet, ședințe de întreținere la 4–6 săptămâni pot susține efectele. Comunicarea deschisă cu specialistul — despre obiective, limite și progres — este cheia unei experiențe satisfăcătoare.",
    ],
  },
  {
    type: "callout",
    title: "Conturare fără operație",
    content: [
      "Consultă specialistele Claire Beauty pentru un protocol personalizat de radiofrecvență corporală. Evaluarea inițială include recomandări adaptate siluetei și obiectivelor tale.",
    ],
    link: L.radiofrecventa,
  },
]

const faqs: BlogPost["faqs"] = [
  {
    question: "Radiofrecvența corporală doare?",
    answer:
      "Nu. Senzația este de căldură plăcută, graduală. Dacă devine prea cald, intensitatea se reduce imediat. Nu există durere, arsură sau timp de recuperare.",
  },
  {
    question: "Câte centimetri pot pierde?",
    answer:
      "Reducerea variază de la o persoană la alta — de obicei între 2 și 5 cm în total după un protocol complet, în funcție de zonă, metabolism și stil de viață. RF nu este o metodă de slăbit rapid, ci de conturare progresivă.",
  },
  {
    question: "Câte ședințe sunt necesare?",
    answer:
      "Pentru rezultate vizibile, se recomandă de obicei 8–12 ședințe, de 1–2 ori pe săptămână. Primele îmbunătățiri de fermitate pot apărea după 3–4 ședințe.",
  },
  {
    question: "RF ajută la vergeturi?",
    answer:
      "Poate îmbunătăți textura și fermitatea pielii din jurul vergeturilor prin stimularea colagenului. Vergeturile mature nu dispar complet, dar aspectul poate fi atenuat progresiv. Microneedling poate fi combinat pentru rezultate suplimentare.",
  },
  {
    question: "Pot face RF vara?",
    answer:
      "Da, cu protecție solară riguroasă. Pielea tratată poate fi ușor mai sensibilă la UV timp de 24–48 de ore. SPF 30+ este recomandat zilnic.",
  },
  {
    question: "Care este diferența față de cavitație?",
    answer:
      "Cavitația folosește ultrasunete pentru a distruge celulele adipose, iar RF generează căldură pentru colagen și contur. Multe protocoale profesionale combină ambele tehnologii. La Claire Beauty, evaluăm ce se potrivește obiectivelor tale.",
  },
  {
    question: "Radiofrecvența este sigură?",
    answer:
      "Da, când este administrată de personal calificat, cu echipament certificat și respectarea contraindicațiilor. RF estetică este folosită de decenii, cu profil de siguranță bine documentat.",
  },
  {
    question: "Cât durează efectul?",
    answer:
      "Colagenul nou se formează progresiv timp de 2–3 luni. Efectele pot dura luni de zile, în funcție de vârstă, alimentație și întreținere. Ședințe de întreținere lunare pot prelungi rezultatele.",
  },
]

export const radiofrecventaPost: BlogPost = {
  slug: "radiofrecventa-corporala-ghid",
  title: "Radiofrecvența corporală: cum reduce centimetrii și tonifică pielea",
  excerpt:
    "Radiofrecvența generează căldură controlată în straturile profunde ale pielii, stimulând colagenul și reducând țesutul adipos. Ghid complet despre beneficii și rezultate.",
  metaDescription:
    "Radiofrecvență corporală Craiova: conturare, fermitate, reducere centimetri. Cum funcționează, câte ședințe, rezultate. Claire Beauty.",
  keywords: [
    "radiofrecventa corporala",
    "radiofrecventa beneficii",
    "radiofrecventa Craiova",
    "conturare corporala",
    "fermitate piele tratament",
  ],
  tag: "Remodelare corporală",
  publishedAt: "2026-06-09",
  readTimeMinutes: estimateReadTimeMinutes(blocks, faqs),
  image: {
    src: "/images/blog/blog-radiofrecventa-corporala.jpg",
    alt: "Dispozitiv de radiofrecvență corporală pentru conturare și tonifiere",
    title: "Radiofrecvență corporală — ghid complet",
  },
  relatedService: L.radiofrecventa,
  recommendedServices: [
    L.remodelare,
    L.electrostimulare,
    L.tratamenteCorporale,
  ],
  blocks,
  faqs,
}
