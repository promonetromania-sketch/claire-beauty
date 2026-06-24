import type { BlogPost } from "../types"
import { blogServiceLinks as L } from "../links"
import { estimateReadTimeMinutes } from "../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "cum-pregatesti-tenul-tratament-facial",
  title: "Cum pregătești tenul înainte de un tratament facial profesional",
  excerpt:
    "Pregătirea corectă înainte de un tratament facial poate face diferența între rezultate bune și rezultate remarcabile. Ghid practic cu pași clari pentru fiecare etapă — de la două săptămâni înainte până în ziua programării.",
  metaDescription:
    "Ghid complet de pregătire a tenului înainte de tratament facial: ce eviți, ce faci în ziua ședinței, îngrijire post-tratament. Recomandări Claire Beauty Craiova.",
  keywords: [
    "pregatire ten tratament facial",
    "inainte de tratament facial",
    "ingrijire ten Craiova",
    "sfaturi tratament facial",
    "skincare inainte facial",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-02-28",
  image: {
    src: "/images/blog/blog-pregatire-ten-facial.jpg",
    alt: "Produse de curățare și pregătire ten înainte de tratament facial",
    title: "Pregătire ten tratament facial",
  },
  relatedService: L.tratamenteFaciale,
  recommendedServices: [L.hydrafacial, L.microdermabraziune, L.dermapen],
  blocks: [
    {
      type: "p",
      content: [
        "Indiferent dacă vii pentru ",
        L.hydrafacial,
        ", ",
        { text: "microdermabraziune", href: "/microdermabraziune-craiova" },
        ", Dermapen sau ",
        L.hifu,
        ", starea pielii tale în ziua tratamentului influențează direct calitatea rezultatelor. Pregătirea nu înseamnă ritualuri complicate — ci câteva reguli simple, respectate constant. La ",
        L.contact,
        ", consultația inițială include recomandări personalizate; acest ghid îți oferă baza comună pentru orice ",
        L.tratamenteFaciale,
        ".",
      ],
    },
    {
      type: "h2",
      text: "De ce contează pregătirea tenului",
    },
    {
      type: "p",
      content: [
        "Pielea are o barieră protectoare care reacționează la produse active, la soare și la proceduri estetice. Un ten iritat, deshidratat sau recent expus la soare răspunde mai greu la tratament și poate necesita o intensitate redusă — ceea ce limitează rezultatele. Pregătirea corectă optimizează toleranța, reduce riscul de reacții adverse și permite specialistului să lucreze la intensitatea potrivită obiectivelor tale.",
      ],
    },
    {
      type: "h2",
      text: "Cu 1–2 săptămâni înainte de tratament",
    },
    {
      type: "p",
      content: [
        "Această perioadă este crucială pentru tratamentele active — peeling-uri, microneedling, microdermabraziune sau proceduri cu retinoizi. Pielea are timp să se stabilizeze între produsele de acasă și intervenția profesională.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Evită expunerea prelungită la soare și solarul — risc de hiperpigmentare post-tratament"],
        ["Oprește retinoizii (Retin-A, tretinoin, adapalen) cu 5–7 zile înainte, dacă nu ți s-a spus altfel"],
        ["Nu face peeling chimic acasă (AHA, BHA, TCA) cu 7–10 zile înainte"],
        ["Renunță la waxing, epilare cu ceară sau alte proceduri iritante pe față cu 5–7 zile înainte"],
        ["Informează specialistul despre alergii, medicamente, sarcină sau tratamente recente"],
        ["Menține o hidratare bună — pielea deshidratată reacționează mai intens"],
      ],
    },
    {
      type: "h3",
      text: "Produse de evitat înainte de tratament",
    },
    {
      type: "ul",
      items: [
        ["Retinoizi și derivate de vitamina A (cu excepția cazurilor în care protocolul o prevede)"],
        ["Acizi exfolianți concentrați: glicolic, salicilic, mandelic"],
        ["Produse cu alcool ridicat sau parfum intens"],
        ["Scrub-uri fizice agresive sau aparate de curățare cu perii abrazive"],
        ["Autobronzante — pot interfera cu evaluarea tenului și cu unele proceduri"],
      ],
    },
    {
      type: "h2",
      text: "În ziua tratamentului",
    },
    {
      type: "p",
      content: [
        "Simplitatea este cheia. Pielea trebuie să fie curată, fără straturi de produse care pot interfera cu procedura sau cu absorbția serurilor active.",
      ],
    },
    {
      type: "ol",
      items: [
        ["Vino cu fața curată, fără machiaj — inclusiv fond de ten, rimel și SPF"],
        ["Spală-te pe față dimineața cu un cleanser blând, fără toner cu alcool"],
        ["Evită cafeaua în exces — poate crește sensibilitatea pielii la anumite proceduri"],
        ["Hidratează-te bine (apă) — pielea hidratată din interior răspunde mai bine"],
        ["Poartă haine confortabile și evită gulerele strânse sau eșarfă care irită gâtul"],
        ["Ajunge la timp, fără grabă — stresul se reflectă și în comportamentul pielii"],
      ],
    },
    {
      type: "h3",
      text: "Ce aduci (și ce nu) la salon",
    },
    {
      type: "p",
      content: [
        "Nu este necesar să aduci produse proprii, decât dacă ai alergii documentate la anumite ingrediente. Dacă folosești retinoizi sau tratamente prescrise, menționează-le la recepție. O listă scurtă a produselor din rutina ta de acasă ajută specialistul să adapteze protocolul.",
      ],
    },
    {
      type: "h2",
      text: "Pregătire specifică pe tip de tratament",
    },
    {
      type: "h3",
      text: "Hydrafacial și curățări profunde",
    },
    {
      type: "p",
      content: [
        L.hydrafacial,
        " este tolerant și necesită pregătire minimă. Evită totuși stoarcerea punctelor negre acasă cu 2–3 zile înainte — pielea iritată răspunde mai greu la extragerea profesională. Vino cu ten curat; restul îl facem noi.",
      ],
    },
    {
      type: "h3",
      text: "Microdermabraziune",
    },
    {
      type: "p",
      content: [
        { text: "Microdermabraziunea", href: "/microdermabraziune-craiova" },
        " necesită ten fără iritații active, arsuri solare sau erupții. Oprește retinoizii cu 5 zile înainte. Nu aplica produse noi cu 48 de ore înainte — dacă apare o reacție, nu știm dacă provine de la produs sau de la procedură.",
      ],
    },
    {
      type: "h3",
      text: "Microneedling și Dermapen",
    },
    {
      type: "p",
      content: [
        { text: "Dermapen", href: "/dermapen-craiova" },
        " și microneedling-ul au cea mai strictă pregătire: fără retinoizi 7 zile, fără acizi 5–7 zile, fără soare intens 7–10 zile. Herpes labial activ amână tratamentul. Anestezia topică se aplică la salon — nu este nevoie să faci nimic special acasă.",
      ],
    },
    {
      type: "h3",
      text: "HIFU și tratamente de tonifiere",
    },
    {
      type: "p",
      content: [
        L.hifu,
        " necesită ten curat, fără produse grase care ar putea interfera cu gelul conductor. Evită antiinflamatoarele nesteroidiene în exces în ziua tratamentului, dacă nu sunt prescrise — pot masca reacțiile normale ale pielii.",
      ],
    },
    {
      type: "h2",
      text: "Ce să eviți după tratament",
    },
    {
      type: "p",
      content: [
        "Post-tratamentul este la fel de important ca pregătirea. Pielea este temporar mai sensibilă, bariera cutanată poate fi compromisă ușor, iar riscul de hiperpigmentare crește dacă ignori câteva reguli simple.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Soare direct și SPF obligatoriu minimum 7 zile — chiar și pe timp înnorat"],
        ["Saună, baie fierbinte, piscină cu clor și sport intens 24–48 ore (mai mult pentru microneedling)"],
        ["Machiaj greu în primele 24 ore — depinde de tipul tratamentului; întreabă specialistul"],
        ["Produse cu alcool, acizi, retinoizi sau exfolianți timp de 3–7 zile"],
        ["Atingerea feței cu mâinile nespălate sau stoarcerea eventualelor impurități"],
      ],
    },
    {
      type: "h2",
      text: "Rutina de acasă între ședințe",
    },
    {
      type: "p",
      content: [
        "Tratamentele profesionale funcționează cel mai bine alături de o rutină simplă acasă: curățare blândă dimineața și seara, hidratare zilnică, SPF în fiecare dimineață. Nu acumula produse noi între ședințe — stabilitatea ajută pielea să răspundă predictibil. Dacă vrei recomandări de produse, specialistul ți le poate sugera la finalul vizitei.",
      ],
    },
    {
      type: "h3",
      text: "Când amânăm tratamentul",
    },
    {
      type: "ul",
      items: [
        ["Herpes labial activ sau infecții cutanate"],
        ["Arsuri solare recente"],
        ["Eruptii alergice sau dermatită necontrolată"],
        ["Proceduri dentare majore în aceeași zi (pentru tratamente faciale extinse)"],
        ["Stare generală de febră sau infecție virală"],
      ],
    },
    {
      type: "h2",
      text: "Cum decurge consultația inițială",
    },
    {
      type: "p",
      content: [
        "Prima vizită la ",
        L.contact,
        " include evaluarea tipului de ten, a sensibilității, a obiectivelor și a istoricului tău. Pe baza acestor informații, primești un plan de pregătire adaptat — nu un checklist generic. Dacă ești în dubiu, sună înainte de programare; preferăm să amânăm o ședință decât să o facem în condiții suboptime.",
      ],
    },
    {
      type: "h2",
      text: "Când este momentul potrivit să programezi",
    },
    {
      type: "p",
      content: [
        "Pentru evenimente importante — nuntă, botez, fotografii — planifică tratamentul cu 2–4 săptămâni înainte, nu cu o zi. Procedurile active (peeling, microneedling) necesită timp de refacere. Hydrafacial sau microdermabraziunea ușoară pot fi făcute mai aproape de eveniment, dar consultă specialistul. Toamna și iarna sunt ideale pentru tratamente intensive, datorită expunerii solare reduse.",
      ],
    },
    {
      type: "h2",
      text: "De ce Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Pregătirea nu se termină la ușa salonului — te ghidăm înainte, în timpul și după fiecare ",
        L.tratamenteFaciale,
        ". Recomandările noastre sunt clare, realiste și adaptate tenului tău, nu copiate din tutoriale online. Scopul este un rezultat sigur și progresiv, nu o ședință grăbită cu riscuri inutile.",
      ],
    },
    {
      type: "callout",
      title: "Prima ta vizită la Claire Beauty?",
      content: [
        "Consultația inițială include evaluarea tenului și recomandări personalizate de pregătire și îngrijire post-tratament — clare, aplicabile și adaptate obiectivelor tale.",
      ],
      link: L.tratamenteFaciale,
    },
  ],
  faqs: [
    {
      question: "Pot veni cu machiaj la tratament facial?",
      answer:
        "Recomandăm să vii cu fața curată, fără machiaj. Dacă ai machiaj, îl curățăm noi la salon, dar tenul curat de acasă ne permite să evaluăm pielea corect înainte de procedură.",
    },
    {
      question: "Când opresc retinoizii înainte de tratament?",
      answer:
        "De regulă cu 5–7 zile înainte pentru microdermabraziune, microneedling sau peeling-uri. Pentru Hydrafacial, oprirea poate să nu fie necesară — confirmă la consultație.",
    },
    {
      question: "Pot face tratament facial dacă am herpes?",
      answer:
        "Herpes labial activ amână tratamentul, mai ales pentru microneedling sau proceduri pe zona buzelor. După vindecare completă, putem reprograma.",
    },
    {
      question: "Trebuie să evit soarele după tratament?",
      answer:
        "Da. SPF 30+ zilnic, minimum 7 zile, este esențial după majoritatea tratamentelor faciale. Soarele direct crește riscul de hiperpigmentare.",
    },
    {
      question: "Pot face sport în ziua tratamentului?",
      answer:
        "Pentru Hydrafacial sau curățări blânde, sportul ușor este posibil. Pentru microneedling, HIFU sau peeling-uri, evită sportul intens 24–48 de ore.",
    },
    {
      question: "Cât timp evit produsele cu acizi după tratament?",
      answer:
        "De obicei 3–7 zile, în funcție de intensitatea procedurii. Specialistul îți va spune exact ce poți relua și când.",
    },
    {
      question: "Pot programa tratament înainte de vacanță la mare?",
      answer:
        "Pentru proceduri active (microneedling, peeling), planifică cu minimum 2–3 săptămâni înainte de expunere solară intensă. Hydrafacial este mai flexibil, dar SPF rămâne obligatoriu.",
    },
    {
      question: "Ce fac dacă pielea mea reacționează la un produs acasă?",
      answer:
        "Oprește produsul, simplifică rutina la curățare blândă și hidratare, și anunță-ne înainte de următoarea programare. Putem adapta protocolul sau amâna tratamentul.",
    },
  ],
}

export const pregatireTenPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
