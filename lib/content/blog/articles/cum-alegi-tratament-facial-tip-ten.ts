import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const blocks: BlogPost["blocks"] = [
  {
    type: "p",
    content: [
      "Alegerea greșită a unui tratament facial poate irita pielea, irosi timp și bani, sau oferi rezultate sub așteptări. Secretul stă în identificarea corectă a tipului de ten și a problemelor specifice — nu în trendurile de pe rețele sociale. La ",
      L.contact,
      ", evaluarea inițială este parte integrantă din fiecare ",
      L.tratamenteFaciale,
      ". Acest ghid te ajută să înțelegi ce se potrivește tenului tău înainte de programare.",
    ],
  },
  {
    type: "h2",
    text: "De ce contează tipul de ten",
  },
  {
    type: "p",
    content: [
      "Pielea produce sebum, reține apă și reacționează la stimuli în mod diferit de la o persoană la alta. Tenul gras nu are nevoie de aceleași active ca tenul uscat; tenul sensibil poate reacționa la exfolianți pe care tenul normal îi tolerează. Tratamentele faciale profesionale sunt adaptabile — dar alegerea greșită a protocolului poate agrava problemele existente. Identificarea tipului de ten este primul pas spre rezultate relevante.",
    ],
  },
  {
    type: "h2",
    text: "Cum îți identifici tipul de ten",
  },
  {
    type: "h3",
    text: "Testul simplu acasă",
  },
  {
    type: "p",
    content: [
      "Curăță fața cu un produs blând, așteaptă 30–60 de minute fără să aplici nimic, apoi observă: dacă tot fața strălucește — ten gras; dacă doar zona T (frunte, nas, bărbie) — ten mixt; dacă pielea se strânge și descuamează ușor — ten uscat; dacă apare roșeață sau disconfort — ten sensibil. Tenul poate fi și combinat: uscat + sensibil, gras + deshidratat (da, sebumul excesiv poate coexista cu deshidratare).",
    ],
  },
  {
    type: "h2",
    text: "Ten gras sau mixt",
  },
  {
    type: "p",
    content: [
      "Porii dilatați, luciu excesiv pe frunte, nas și bărbie, tendință acneică ușoară sau puncte negre frecvente indică ten gras sau mixt. Obiectivul: curățare profundă, controlul sebumului, exfoliere fără a usca pielea.",
    ],
  },
  {
    type: "h3",
    text: "Tratamente recomandate",
  },
  {
    type: "ul",
    items: [
      [L.hydrafacial, " — curățare profundă, extragere pori, hidratare echilibrată"],
      [L.microdermabraziune, " — exfoliere, uniformizare textură, pregătire pentru seruri"],
      [L.microneedling, " — cicatrici post-acnee, pori, textură neuniformă"],
    ],
  },
  {
    type: "p",
    content: [
      "Evită tratamentele prea hidratante sau cu uleiuri grele. Acidul salicilic (BHA) și niacinamida sunt aliați buni între ședințe. Curățarea profesională la 4–6 săptămâni previne reinfundarea porilor.",
    ],
  },
  {
    type: "h2",
    text: "Ten uscat sau deshidratat",
  },
  {
    type: "p",
    content: [
      "Senzația de strângere, descuamare ușoară, linii fine premature și aspect tern semnalează deshidratare — lipsa apei în piele, distinctă de tenul uscat (lipsă de sebum). Obiectivul: hidratare profundă, refacerea barierei cutanate, protecție.",
    ],
  },
  {
    type: "h3",
    text: "Tratamente recomandate",
  },
  {
    type: "ul",
    items: [
      [L.hydrafacial, " cu seruri hidratante — infuzie acid hialuronic, glow imediat"],
      ["Tratamente cu acid hialuronic și peptide — hidratare în profunzime"],
      [L.microdermabraziune, " blândă — urmată de hidratare intensă (exfolierea permite absorbția serurilor)"],
    ],
  },
  {
    type: "p",
    content: [
      "Evită exfolierile agresive, alcoolul în produse și spațiile supraîncălzite. Hidratarea aduce adesea un glow vizibil de la prima ședință profesională.",
    ],
  },
  {
    type: "h2",
    text: "Ten sensibil",
  },
  {
    type: "p",
    content: [
      "Roșeață ușoară, reacții la produse noi, disconfort la schimbări de temperatură, cuperoză sau dermatită indică sensibilitate. Obiectivul: calmare, întărirea barierei, evitarea iritanților.",
    ],
  },
  {
    type: "h3",
    text: "Tratamente recomandate",
  },
  {
    type: "ul",
    items: [
      [L.hydrafacial, " cu seruri calmante — centella, aloe, pantenol"],
      ["Tratamente cu LED (roșu) — antiinflamator, vindecare"],
      ["Evită peeling-urile chimice agresive și microdermabraziunea intensă până la testarea toleranței"],
    ],
  },
  {
    type: "p",
    content: [
      "Testăm întotdeauna toleranța pe o zonă mică înainte de protocoale active. Tenul sensibil beneficiază de constanță blândă, nu de tratamente agresive „de șoc”.",
    ],
  },
  {
    type: "h2",
    text: "Ten matur — riduri, laxitate, pete",
  },
  {
    type: "p",
    content: [
      "Riduri fine, laxitate ușoară spre moderată, pierderea fermității, pete pigmentare și ten tern sunt semne ale îmbătrânirii cutanate. Obiectivul: stimularea colagenului, lifting, uniformizarea tonului.",
    ],
  },
  {
    type: "h3",
    text: "Tratamente recomandate",
  },
  {
    type: "ul",
    items: [
      [L.hifu, " — lifting nechirurgical, fermitate, contur facial"],
      [L.dermapen, " — stimulare colagen, riduri fine, textură"],
      [L.microneedling, " — cicatrici, pete, rejuvenare progresivă"],
      [L.tratamenteFaciale, " combinate — protocoale personalizate anti-aging"],
    ],
  },
  {
    type: "p",
    content: [
      "HIFU adresează laxitatea; Dermapen și microneedling lucrează pe textură și colagen. Combinațiile se planifică în timp — nu toate tratamentele se fac în aceeași ședință.",
    ],
  },
  {
    type: "h2",
    text: "Probleme specifice — ce tratament pentru ce",
  },
  {
    type: "ul",
    items: [
      ["Puncte negre și pori înfundati → ", L.hydrafacial, " sau ", L.microdermabraziune],
      ["Cicatrici post-acnee → ", L.microneedling, " sau ", L.dermapen],
      ["Pete pigmentare → microdermabraziune, peeling-uri blânde, vitamina C profesională"],
      ["Laxitate ușoară → ", L.hifu],
      ["Ten tern, fără strălucire → ", L.hydrafacial, ", microdermabraziune, hidratare profundă"],
    ],
  },
  {
    type: "h2",
    text: "Greșeli frecvente la alegerea tratamentului",
  },
  {
    type: "ul",
    items: [
      ["Alegerea după trend, nu după nevoie — nu toate tenurile tolerează același protocol"],
      ["Exfoliere excesivă acasă înainte de tratament — irită pielea și limitează opțiunile"],
      ["Așteptarea unui singur tratament „miraculos” — majoritatea protocoalelor necesită constanță"],
      ["Ignorarea protecției solare post-tratament — anulează progresul"],
      ["Amestecarea prea multor active acasă între ședințe — simplificarea rutinei ajută"],
    ],
  },
  {
    type: "h2",
    text: "Consultația — de ce nu o sari",
  },
  {
    type: "p",
    content: [
      "La Claire Beauty, consultația inițială include analiza tenului cu lampă Woods (când e cazul), discuția despre rutina acasă, alergii, medicamente și obiective. Pe baza acestor informații, recomandăm protocolul optim — nu cel mai scump sau cel mai la modă, ci cel potrivit pielii tale. Poți aduce produsele pe care le folosești; uneori ajustarea rutinei acasă face diferența înainte de orice tratament.",
    ],
  },
  {
    type: "h2",
    text: "Ten deshidratat vs ten uscat — nu sunt același lucru",
  },
  {
    type: "p",
    content: [
      "Tenul uscat produce puțin sebum — pielea poate fi descuamată, aspră, cu linii fine premature. Tenul deshidratat poate apărea la orice tip (inclusiv gras): lipsește apa din piele, nu uleiul. Un ten gras deshidratat poate produce sebum în exces ca reacție compensatorie. Tratamentele diferă: tenul uscat are nevoie de lipide și emolienți; tenul deshidratat, de humectanți precum acidul hialuronic. ",
      L.hydrafacial,
      " evaluează ambele dimensiuni și infuzează seruri adaptate — motiv pentru care este adesea primul pas înainte de protocoale mai active.",
    ],
  },
  {
    type: "h2",
    text: "Frecvența tratamentelor faciale",
  },
  {
    type: "p",
    content: [
      "Curățare profundă (Hydrafacial): la 4–6 săptămâni. Microdermabraziune: la 3–4 săptămâni. Microneedling/Dermapen: la 4–6 săptămâni, cicluri de 3–6 ședințe. HIFU: la 12–18 luni, în funcție de răspuns. Constanța bate intensitatea — o ședință excelentă urmată de luni de neglijență nu aduce beneficii durabile.",
    ],
  },
  {
    type: "h2",
    text: "Rutina acasă — baza oricărui tratament",
  },
  {
    type: "p",
    content: [
      "Tratamentele profesionale funcționează pe o fundație: curățare blândă dimineața și seara, hidratare adaptată tipului de ten, SPF zilnic indiferent de anotimp. Produsele agresive acasă pot anula progresul din salon — dacă exfoliezi zilnic cu acizi puternici, pielea nu va tolera microdermabraziunea sau microneedling-ul. Simplificarea rutinei, testarea toleranței la produse noi și comunicarea cu specialistul despre ce folosești acasă fac diferența între rezultate mediocre și rezultate remarcabile.",
    ],
  },
  {
    type: "callout",
    title: "Nu ești sigur ce tratament ți se potrivește?",
    content: [
      "Consultația inițială la Claire Beauty include evaluarea tenului și recomandarea protocolului ideal — adaptat tipului tău de piele și obiectivelor estetice.",
    ],
    link: L.tratamenteFaciale,
  },
]

const faqs: BlogPost["faqs"] = [
  {
    question: "Pot avea ten mixt și sensibil în același timp?",
    answer:
      "Da, este foarte frecvent. Zona T poate fi grasă, iar obrajii uscați și reactivi. Protocolul se adaptează: zone diferite, intensități diferite, seruri specifice pentru fiecare zonă.",
  },
  {
    question: "Hydrafacial este potrivit pentru toate tipurile de ten?",
    answer:
      "Pentru majoritatea, da. Serurile se personalizează: hidratante pentru ten uscat, cu acid salicilic pentru ten gras, calmante pentru ten sensibil. Consultația stabilește formula optimă.",
  },
  {
    question: "Tenul gras are nevoie de hidratare?",
    answer:
      "Absolut. Deseori, tenul gras este și deshidratat — pielea produce mai mult sebum pentru a compensa lipsa apei. Hidratarea ușoară, non-comedogenă, poate reduce paradoxal producția de sebum.",
  },
  {
    question: "La ce vârstă încep tratamentele anti-aging?",
    answer:
      "Prevenția poate începe de la 25–30 de ani cu hidratare, SPF și curățare profesională. HIFU și microneedling se recomandă de obicei de la 30–35+, când apar primele semne de laxitate sau riduri fine. Nu există o vârstă fixă — depinde de piele.",
  },
  {
    question: "Pot face microdermabraziune dacă am acnee?",
    answer:
      "Acneea activă severă este contraindicație. Acneea ușoară sau cicatricile post-acnee pot beneficia de microdermabraziune blândă sau microneedling. Evaluarea la consultație clarifică opțiunile.",
  },
  {
    question: "Cât costă o consultație facială?",
    answer:
      "La Claire Beauty, consultația este inclusă în prima ședință de tratament facial. Contactează-ne pentru detalii actualizate despre protocoale și programare.",
  },
  {
    question: "Pot combina mai multe tratamente în aceeași zi?",
    answer:
      "Uneori da — de exemplu, microdermabraziune urmată de hidratare intensă. Alte combinații (HIFU + microneedling) necesită interval. Specialistul stabilește secvența sigură.",
  },
  {
    question: "Ce fac acasă între ședințele profesionale?",
    answer:
      "Curățare blândă, hidratare adaptată tipului de ten, SPF zilnic, evitarea exfolierii agresive. Rutina simplă, constantă, susține rezultatele tratamentelor de la salon.",
  },
]

export const tipTenPost: BlogPost = {
  slug: "cum-alegi-tratament-facial-tip-ten",
  title: "Cum alegi tratamentul facial potrivit tipului tău de ten",
  excerpt:
    "Ten gras, uscat, sensibil sau matur — fiecare tip necesită un protocol diferit. Ghid practic pentru alegerea tratamentului facial ideal în Craiova.",
  metaDescription:
    "Cum alegi tratamentul facial potrivit: ten gras, uscat, sensibil, mixt. Recomandări Hydrafacial, microdermabraziune, HIFU la Claire Beauty Craiova.",
  keywords: [
    "tratament facial tip ten",
    "ce tratament facial imi trebuie",
    "tratamente faciale Craiova",
    "ten gras tratament",
    "ten uscat hidratare",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-06-06",
  readTimeMinutes: estimateReadTimeMinutes(blocks, faqs),
  image: {
    src: "/images/blog/blog-tip-ten-tratament-facial.jpg",
    alt: "Produse de îngrijire facială pentru diferite tipuri de ten",
    title: "Alegerea tratamentului facial potrivit",
  },
  relatedService: L.tratamenteFaciale,
  recommendedServices: [
    L.hydrafacial,
    L.microdermabraziune,
    L.hifu,
    L.dermapen,
  ],
  blocks,
  faqs,
}
