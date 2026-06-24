import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "cum-scapi-de-puncte-negre-corect",
  title: "Cum scapi de puncte negre fără a-ți deteriora pielea",
  excerpt:
    "Strips, extragere manuală sau tratamente profesionale? Află ce funcționează cu adevărat, ce metode îți pot deteriora pielea și de ce curățarea profundă la salon rămâne cea mai sigură soluție pe termen lung.",
  metaDescription:
    "Cum scapi de puncte negre în mod sigur: Hydrafacial, microdermabraziune și rutină acasă. Ghid complet pentru ten curat la Claire Beauty Craiova.",
  keywords: [
    "cum scapi de puncte negre",
    "puncte negre tratament",
    "curatare pori Craiova",
    "extractie puncte negre",
    "Hydrafacial puncte negre",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-05-28",
  image: {
    src: "/images/blog/blog-puncte-negre.jpg",
    alt: "Produse de curățare profesională pentru eliminarea punctelor negre",
    title: "Eliminarea punctelor negre — ghid sigur",
  },
  relatedService: L.hydrafacial,
  recommendedServices: [
    L.hydrafacial,
    L.microdermabraziune,
    L.tratamenteFaciale,
    L.dermapen,
  ],
  blocks: [
    {
      type: "p",
      content: [
        "Punctele negre sunt una dintre cele mai frecvente frustrări estetice — vizibile, persistente și adesea tratate greșit acasă. Apar când porii se înfundă cu sebum oxidat și celule moarte, formând acele mici puncte închise la culoare de pe nas, bărbie sau frunte. Tentatia de a-i stoarce manual este mare, dar este una dintre cele mai dăunătoare obiceiuri pentru piele. La ",
        L.contact,
        ", abordăm punctele negre cu metode profesionale care curăță profund, fără a compromite bariera cutanată.",
      ],
    },
    {
      type: "h2",
      text: "Ce sunt punctele negre și de ce reapar",
    },
    {
      type: "p",
      content: [
        "Comedonele deschise — cunoscute popular ca „puncte negre” — nu sunt murdărie, ci sebum care s-a oxidat la contactul cu aerul. Porii dilatați, tenul gras, deshidratarea paradoxală și folosirea greșită a produselor pot amplifica problema. Exfolierea insuficientă lasă celule moarte care blochează deschiderea porilor, iar produsele comedogene mențin ciclul. Înțelegerea cauzei este primul pas spre o soluție durabilă, nu doar spre o curățare temporară.",
      ],
    },
    {
      type: "h3",
      text: "Zonele cele mai afectate",
    },
    {
      type: "ul",
      items: [
        ["Zona T — frunte, nas, bărbie — unde glandele sebacee sunt mai active"],
        ["Obrajii, dacă tenul este mixt sau gras"],
        ["Spatele și umerii, mai ales la persoane tinere"],
      ],
    },
    {
      type: "h2",
      text: "Ce metode funcționează cu adevărat",
    },
    {
      type: "h3",
      text: "Curățare profesională — Hydrafacial",
    },
    {
      type: "p",
      content: [
        L.hydrafacial,
        " este considerat standardul de aur pentru curățarea profundă a porilor. Tehnologia vortex aspiră delicat impuritățile — inclusiv punctele negre — fără presiune manuală agresivă. După extracție, serurile infuzate hidratează și calmează pielea, reducând riscul de iritație. Rezultatul este vizibil imediat: pori mai curați, ten mai fin, fără roșeață prelungită. Pentru ten cu puncte negre recurente, o ședință la 4–6 săptămâni menține porii curați pe termen lung.",
      ],
    },
    {
      type: "h3",
      text: "Exfoliere profesională — microdermabraziune",
    },
    {
      type: "p",
      content: [
        L.microdermabraziune,
        " îndepărtează stratul superficial de celule moarte, prevenind reinfundarea porilor. Nu extrage comedonele existente la fel de direct ca Hydrafacial, dar este excelentă ca tratament complementar — mai ales pentru textură rugoasă sau ten tern. Combinarea celor două proceduri, la intervale adaptate tipului de ten, oferă rezultate mai complete decât oricare singură.",
      ],
    },
    {
      type: "h3",
      text: "Exfoliere chimică acasă — acid salicilic (BHA)",
    },
    {
      type: "p",
      content: [
        "Acidul salicilic pătrunde în pori și dizolvă sebumul acumulat. Produsele cu BHA (seruri, tonice) sunt utile în rutina zilnică, dar nu înlocuiesc curățarea profesională. Folosește concentrații moderate (0,5–2%) și introdu treptat, de 2–3 ori pe săptămână, pentru a evita iritarea.",
      ],
    },
    {
      type: "h2",
      text: "Ce trebuie să eviți cu orice preț",
    },
    {
      type: "ul",
      items: [
        [
          "Stoarcerea manuală — poate cauza inflamație, cicatrici, infecții și pori și mai dilatați",
        ],
        [
          "Benzi adezive folosite excesiv — irită pielea și nu previn reapariția",
        ],
        [
          "Scrub-uri abrazive zilnice — deteriorarea barierei cutanate stimulează mai mult sebum",
        ],
        [
          "Produse cu alcool ridicat — usucă superficial, dar glandele compensa prin secreție crescută",
        ],
        [
          "Extracție cu unelte neigienizate acasă — risc major de infecție",
        ],
      ],
    },
    {
      type: "h2",
      text: "Cui i se recomandă tratamentul profesional",
    },
    {
      type: "p",
      content: [
        "Curățarea profesională este potrivită pentru ten gras, mixt sau normal cu puncte negre persistente. Este recomandată și ca pregătire înainte de evenimente importante, când vrei un ten impecabil fără risc de iritație. Dacă ai ten sensibil, acnee activă severă sau dermatită, discutăm în prealabil despre protocolul adaptat. Pagina ",
        L.tratamenteFaciale,
        " descrie toate opțiunile disponibile pentru fiecare tip de ten.",
      ],
    },
    {
      type: "h2",
      text: "Cum decurge o ședință de curățare profundă la salon",
    },
    {
      type: "p",
      content: [
        "La Claire Beauty, procesul începe cu evaluarea tenului: tip de piele, sensibilități, produse folosite acasă. Apoi urmează curățare blândă, exfoliere controlată, extracția impurităților (manuală delicată sau prin Hydrafacial, în funcție de protocol) și mască calmantă. Întreaga ședință durează 45–60 de minute. Pielea poate fi ușor roz imediat după, dar disconfortul dispare rapid — spre deosebire de stoarcerea agresivă acasă, care poate lăsa roșeață și umflătură zile întregi.",
      ],
    },
    {
      type: "h2",
      text: "Rezultate așteptate — realiste, nu miraculoase",
    },
    {
      type: "p",
      content: [
        "După prima ședință, porii sunt vizibil mai curați, iar tenul capătă un aspect proaspăt. Punctele negre nu dispar definitiv — glandele sebacee continuă să funcționeze — dar reapariția se poate controla prin rutină corectă acasă și curățări profesionale periodice. Așteptările realiste: îmbunătățire semnificativă, nu eliminare permanentă fără întreținere. Constanța bate intensitatea.",
      ],
    },
    {
      type: "h2",
      text: "Rutina de prevenție acasă",
    },
    {
      type: "ol",
      items: [
        ["Curățare blândă dimineața și seara — fără săpun agresiv"],
        ["Exfoliere chimică ușoară (BHA) de 2–3 ori pe săptămână"],
        ["Hidratare zilnică — tenul gras are nevoie de hidratare, nu de uscare"],
        ["SPF zilnic — protejează pielea și previne deteriorarea porilor"],
        ["Curățare profesională la 4–6 săptămâni, adaptată tipului de ten"],
      ],
    },
    {
      type: "h2",
      text: "Când să programezi o curățare profesională",
    },
    {
      type: "p",
      content: [
        "Ideal: înainte ca punctele negre să devină profunde și vizibile de la distanță. Semne că ai nevoie de o ședință: textură neregulată pe nas, machiajul „alunecă” pe zone cu pori dilatați, produsele acasă nu mai fac diferența. Nu aștepta să ajungi la stoarcere manuală — de obicei, deja e prea târziu pentru pielea ta.",
      ],
    },
    {
      type: "h2",
      text: "Greșeli frecvente care agravează punctele negre",
    },
    {
      type: "p",
      content: [
        "Multe persoane cu ten gras evită hidratarea, crezând că uscarea pielii va reduce sebumul. Efectul este invers: pielea compensa prin producție crescută de ulei, iar porii se înfundă mai rapid. La fel, folosirea zilnică a benzilor adezive sau a uneltelor de extracție creează un ciclu vicios — pori iritați, barieră compromisă, inflamație. Schimbarea rutinei acasă, combinată cu curățare profesională periodică, rupe acest ciclu mult mai eficient decât orice stoarcere.",
      ],
    },
    {
      type: "h3",
      text: "Machiajul și punctele negre",
    },
    {
      type: "p",
      content: [
        "Fondul de ten aplicat pe pori necurăți accentuează textura neregulată și poate agrava infundarea pe termen lung dacă demachierea este superficială. Demachierea în doi pași — ulei sau balsam, apoi curățător apos — este esențială seara. Dimineața, curățarea blândă este suficientă. Evită pudra compactă excesivă pe zona T dacă ai tendința spre comedone — sigilează porii deja congestionati.",
      ],
    },
    {
      type: "h2",
      text: "De ce Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Echipa noastră lucrează cu protocol personalizat, nu cu scheme generice. Evaluăm tenul tău, alegem combinația potrivită de ",
        L.hydrafacial,
        ", microdermabraziune sau tratamente complementare și îți explicăm ce poți face acasă între vizite. Scopul nu este o curățare spectaculoasă o singură dată, ci un ten sănătos pe termen lung — cu pori curați, barieră intactă și recomandări pe care le poți aplica zi de zi.",
      ],
    },
    {
      type: "callout",
      title: "Pori curați, fără iritații",
      content: [
        "Programează un Hydrafacial la Claire Beauty Craiova și vezi diferența de la prima ședință — curățare profundă, ten calm, fără compromisuri.",
      ],
      link: {
        text: "Hydrafacial Craiova",
        href: "/hydrafacial-craiova",
      },
    },
  ],
  faqs: [
    {
      question: "Pot elimina punctele negre definitiv?",
      answer:
        "Nu există eliminare permanentă, deoarece glandele sebacee continuă să funcționeze. Cu rutină corectă și curățări profesionale regulate, însă, le poți controla eficient și menține porii curați.",
    },
    {
      question: "Hydrafacial sau microdermabraziune — ce aleg?",
      answer:
        "Hydrafacial este ideal pentru extracția directă a punctelor negre. Microdermabraziunea previne acumularea celulelor moarte. Adesea, le combinăm pentru rezultate optime.",
    },
    {
      question: "Cât de des ar trebui să fac curățare profesională?",
      answer:
        "Pentru ten gras sau mixt: la 4–6 săptămâni. Pentru ten normal: la 6–8 săptămâni. Adaptăm frecvența după răspunsul pielii tale.",
    },
    {
      question: "Stoarcerea acasă chiar e atât de rea?",
      answer:
        "Da. Presiunea necontrolată traumatizează pielea, poate lăsa cicatrici, extinde porii și introduce bacterii. Este una dintre principalele cauze ale porilor dilatați permanenți.",
    },
    {
      question: "Tenul meu va fi roșu după tratament?",
      answer:
        "O ușoară roșeață temporară este normală și dispare în câteva ore. Spre deosebire de stoarcerea manuală, nu rămân urme sau inflamație prelungită.",
    },
    {
      question: "Pot face curățare profundă dacă am acnee activă?",
      answer:
        "Depinde de severitate. Acneea ușoară sau moderată poate beneficia de curățare adaptată. Pentru acnee severă, recomandăm consultație prealabilă.",
    },
    {
      question: "Ce produse recomandați acasă între ședințe?",
      answer:
        "Curățător blând, serum cu acid salicilic (BHA) de 2–3 ori pe săptămână, hidratant ușor și SPF zilnic. Evită produsele comedogene și scrub-urile abrazive.",
    },
    {
      question: "Cât durează o ședință de curățare profundă?",
      answer:
        "Între 45 și 60 de minute, inclusiv evaluarea inițială, curățare, extracție, mască calmantă și recomandări personalizate pentru rutina ta de acasă.",
    },
  ],
}

export const puncteNegrePost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
