import type { BlogPost } from "../../types"
import { blogServiceLinks as L } from "../../links"
import { estimateReadTimeMinutes } from "../../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "pori-dilatati-cauze-obiceiuri",
  title: "Pori dilatați: de ce apar și ce obiceiuri îi fac mai vizibili",
  excerpt:
    "Pori mari pe față nu apar peste noapte — sunt rezultatul geneticii, sebumului, vârstei și unor obiceiuri zilnice care îi fac mai vizibili decât sunt de fapt. Află cauzele reale și ce poți schimba.",
  metaDescription:
    "Pori dilatați: cauze reale, obiceiuri care îi agravează și când tratamentele profesionale ajută. Ghid complet de la Claire Beauty Craiova.",
  keywords: [
    "pori dilatati cauze",
    "pori mari pe fata",
    "ten cu pori vizibili",
    "sebum exces pori",
    "cum reduci porii dilatati",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-08-07",
  image: {
    src: "/images/blog/drafts/pori-dilatati-cauze-obiceiuri.jpg",
    alt: "Pori dilatați pe față — cauze și obiceiuri care îi fac mai vizibili",
    title: "Pori dilatați — cauze și obiceiuri",
  },
  relatedService: L.microdermabraziune,
  recommendedServices: [L.hydrafacial, L.tratamenteFaciale, L.microneedling],
  hubLink: L.tratamenteFaciale,
  relatedArticles: [
    {
      text: "Curățare facială acasă vs tratament profesional",
      href: "/blog/curatare-faciala-acasa-vs-salon",
    },
    {
      text: "Cum scapi de puncte negre fără a-ți deteriora pielea",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
  ],
  blocks: [
    {
      type: "p",
      content: [
        "Pori dilatați sunt una dintre cele mai frecvente frustrări cosmetice — mai ales pe nas, pe obraji și pe zona T. Crema « care închide porii », filtrele Instagram și oglinda cu lumină naturală par să confirme că porii tăi sunt « prea mari ». Adevărul este mai nuanțat: dimensiunea porilor este influențată de genetică, vârstă și producția de sebum, iar anumite obiceiuri îi fac mai vizibili decât sunt în realitate. La ",
        L.contact,
        ", abordăm porii dilatați cu tratamente care curăță, refinează textura și stimulează colagenul — nu cu promisiuni de « pori invizibili ».",
      ],
    },
    {
      type: "h2",
      text: "Anatomia porilor: ce poți și ce nu poți schimba",
    },
    {
      type: "p",
      content: [
        "Porii nu sunt « găuri » în piele — sunt deschiderile foliculilor pilosebacei, prin care sebumul și părul ajung la suprafață. Dimensiunea lor de bază este determinată genetic: dacă părinții tău au avut pori vizibili, probabil vei avea și tu tendința. Ce poți schimba: cât de înfundati sunt (sebum + celule moarte), cât de bine reflectă lumina pielea din jur (textură, hidratare) și cât de mult s-a relaxat pielea din jur (elasticitate). Ce nu poți schimba complet: dimensiunea structurală a deschiderii foliculare. Tratamentele profesionale — ",
        L.microdermabraziune,
        ", ",
        L.hydrafacial,
        ", ",
        L.microneedling,
        " — lucrează pe ce se poate îmbunătăți.",
      ],
    },
    {
      type: "h2",
      text: "Cauza genetică și tipul de ten",
    },
    {
      type: "p",
      content: [
        "Tenul gras și mixt are pori genetic mai vizibili — glandele sebacee produc mai mult sebum, iar foliculii sunt structural mai dilatați pentru a permite fluxul. Tenul uscat poate avea pori mici dar textură aspră care creează iluzia de pori mari. Nu e vina ta — e tipologia pielii. Strategia diferă: tenul gras beneficiază de curățare profundă regulată; tenul uscat, de hidratare care plutește porii (pielea deshidratată around pori pare mai adâncă). Consultația din gama de ",
        L.tratamenteFaciale,
        " identifică tipul tău și direcția corectă.",
      ],
    },
    {
      type: "h2",
      text: "Sebumul excesiv și dilatarea porilor",
    },
    {
      type: "p",
      content: [
        "Când glandele sebacee produc sebum în exces, acesta se acumulează în folicul împreună cu celule moarte. Foliculul se dilată mecanic — ca un balon care se umflă. Dacă sebumul se oxidează la contact cu aerul, apar punctele negre — porii par și mai mari. Exfolierea insuficientă menține ciclul; curățarea excesivă cu produse agresive stimulează și mai mult sebumul — paradoxul tenului gras. ",
        { text: "Ghidul nostru despre puncte negre", href: "/blog/cum-scapi-de-puncte-negre-corect" },
        " explică cum curățarea corectă reduce vizibilitatea porilor fără a deteriora pielea.",
      ],
    },
    {
      type: "h2",
      text: "Vârsta și pierderea de elasticitate",
    },
    {
      type: "p",
      content: [
        "Cu vârsta, producția de colagen și elastină scade. Pielea din jurul porilor pierde fermitatea — porii par « lăsați », mai largi decât erau la 20 de ani. Soarele fără protecție accelerează degradarea colagenului. De aceea porii par mai vizibili după 35–40 de ani, chiar dacă sebumul a scăzut. ",
        L.microneedling,
        " și ",
        L.dermapen,
        " stimulează colagenul și pot îmbunătăți textura din jurul porilor. ",
        L.hifu,
        " adresează laxitatea care agravează aspectul — consultația stabilește dacă e cazul.",
      ],
    },
    {
      type: "h2",
      text: "Obiceiuri zilnice care fac porii mai vizibili",
    },
    {
      type: "p",
      content: [
        "Unele obiceiuri par logice dar agravează problema. Extragerea comedoanelor cu unghii sau extractoare traumatizează foliculul — porii par mai mari după inflamație. Produsele cu alcool denaturat usucă superficial dar stimulează sebumul. Machiajul peste pori înfundati accentuează textura. Somnul cu machiaj blochează foliculii toată noaptea. Lipsa SPF permite daune solare care slăbesc pielea din jur. Touching-ul feței transferă bacterii și sebum — inflamație, pori mai vizibili.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Squeezing comedoane acasă — inflamație, cicatrici, pori dilatați permanent"],
        ["Over-cleansing cu spuma agresivă — barieră distrusă, sebum compensator"],
        ["Skip SPF — colagen degradat, piele lăsată în jurul porilor"],
        ["Fond de ten mat heavy pe ten gras — sigilează sebumul, accentuează textura"],
        ["Pătură/pilotă necurățată — bacterii, ulei, reziduuri pe față noaptea"],
      ],
    },
    {
      type: "h2",
      text: "Produse și rutină: ce ajută vs ce agravează",
    },
    {
      type: "p",
      content: [
        "Ce ajută: curățare blândă (gel fără sulfat), BHA (acid salicilic) 2–3 ori pe săptămână pentru ten gras, niacinamida pentru reglarea sebumului, hidratare ușoară non-comedogenică, SPF zilnic. Ce agravează: scrub-uri granulare zilnice, uleiuri comedogene pe ten gras, produse « pore shrinking » cu alcool care usucă temporar dar stimulează sebumul pe termen lung. Rutina acasă menține; tratamentele profesionale resetează — ",
        L.hydrafacial,
        " curăță profund, ",
        L.microdermabraziune,
        " refinează textura.",
      ],
    },
    {
      type: "h3",
      text: "Ordinea corectă în rutina de seară",
    },
    {
      type: "ol",
      items: [
        ["Demachiere (ulei/balsam apoi gel, dacă e nevoie)"],
        ["Curățare blândă"],
        ["BHA sau exfoliant chimic — max 3 ori/săptămână pe ten gras"],
        ["Ser cu niacinamida sau acid hialuronic"],
        ["Hidratare ușoară"],
        ["SPF dimineața — obligatoriu"],
      ],
    },
    {
      type: "h2",
      text: "Mituri despre « închiderea » porilor",
    },
    {
      type: "p",
      content: [
        "Porii nu se « deschid » și « închid » ca niște ventile — nu există mușchi care controlează asta. Apa rece « închide » temporar vasele de sânge, nu porii. Produsele « pore minimizer » umplu optic porii cu silicon — efect temporar, nu structural. Ce funcționează real: curățarea regulată care previne dilatarea mecanică, exfolierea care menține foliculii liberi, stimularea colagenului care întărește pielea din jur. ",
        { text: "Microdermabraziunea", href: "/blog/ce-este-microdermabraziunea-beneficii" },
        " refinează textura — nu « închide » porii, dar îi face mai puțin vizibili.",
      ],
    },
    {
      type: "h2",
      text: "Când tratamentele profesionale chiar contează",
    },
    {
      type: "p",
      content: [
        "Dacă porii rămân vizibili după 2–3 luni de rutină corectă acasă, tratamentele profesionale aduc plusul necesar. ",
        L.hydrafacial,
        " — curățare profundă, extragere comedoane sigură, infuzie de seruri. ",
        L.microdermabraziune,
        " — exfoliere mecanică, textură mai fină, luminozitate. ",
        L.microneedling,
        " — colagen pentru piele din jurul porilor, cicatrici post-acnee. Frecvența: Hydrafacial la 3–4 săptămâni pe ten gras; microdermabraziune la 4–6 săptămâni; microneedling la 4–6 săptămâni în protocol. Detalii despre fiecare procedură pe pagina de ",
        L.tratamenteFaciale,
        ".",
      ],
    },
    {
      type: "h2",
      text: "Pori dilatați vs cicatrici post-acnee",
    },
    {
      type: "p",
      content: [
        "Uneori « porii mari » sunt de fapt cicatrici atrofice de la acnee — adâncimi mici în piele care arată ca pori dilatați. Abordarea diferă: microneedling sau Dermapen pentru stimulare colagen, eventual combinat cu microdermabraziune. Consultația diferențiază — nu tratăm la fel porii genetici și cicatricile. Onestitatea în evaluare evită așteptări nerealiste.",
      ],
    },
    {
      type: "h2",
      text: "Make-up și pori: ce funcționează vizual",
    },
    {
      type: "p",
      content: [
        "Până la rezultatele tratamentelor, make-up-ul corect poate reduce vizual aspectul porilor. Primer cu silicon refinde temporar textura — fără a « închide » porii structural. Fond de ten ușor, non-comedogenic, aplicat cu burete umed (nu pensulă care împinge produsul în pori). Evită straturile multiple de pudră mată — accentuează linii și textură. Demachierea completă seara este non-negociabilă; porii înfundati sub machiaj par mai mari dimineața.",
      ],
    },
    {
      type: "h3",
      text: "Obiceiuri săptămânale care mențin porii curați",
    },
    {
      type: "ul",
      items: [
        ["Mască cu argilă sau cărbune — max 1 dată pe săptămână pe ten gras, nu zilnic"],
        ["Schimbă fața de pernă la 2–3 zile — ulei și bacterii"],
        ["Curăță pensulele de machiaj săptămânal"],
        ["Nu atinge fața în timpul zilei — reduce transferul de sebum"],
      ],
    },
    {
      type: "h2",
      text: "Factori sezonieri: vară vs iarnă",
    },
    {
      type: "p",
      content: [
        "Vara, tenul gras produce mai mult sebum — porii par mai vizibili, curățarea profundă la ",
        L.hydrafacial,
        " poate fi programată la 3–4 săptămâni. Evită microdermabraziune intensă sau peeling chimic înainte de expunere prelungită la soare — pielea sensibilizată se pigmentează mai ușor. Iarna este sezonul ideal pentru tratamente active: ",
        L.microdermabraziune,
        ", Dermapen, protocol de microneedling — cu SPF zilnic chiar și când nu vezi soarele. Adaptarea frecvenței la sezon previne iritații și maximizează rezultatele pe tot anul.",
      ],
    },
    {
      type: "h2",
      text: "Scenariu: ten gras, pori pe nas — plan pe 8 săptămâni",
    },
    {
      type: "p",
      content: [
        "Diana, 32 de ani, ten gras, pori vizibili pe nas și pe zona T, puncte negre recurente. A încercat scrub-uri zilnice și aparat de vacuum acasă — porii par mai mari, pielea iritată. Evaluarea arată barieră slăbită și foliculi înfundati, nu laxitate severă. Plan: săptămâna 1 — oprire scrub zilnic, introducere gel blând + BHA de 2 ori pe săptămână; săptămâna 2 — Hydrafacial (curățare profundă, extragere comedoane profesională); săptămânile 4 și 8 — Hydrafacial repetat, cu niacinamidă acasă; fără microdermabraziune până la săptămâna 6 — pielea trebuie să-și refacă bariera. SPF zilnic, fără fond de ten heavy pe nas. După 8 săptămâni, porii rămân vizibili la distanță mică — normal genetic — dar textura e mai fină, punctele negre reduse, tenul nu mai arată inflamat. Diana continuă cu Hydrafacial la 4 săptămâni. Scenariul arată că reducerea vizibilității porilor începe cu oprirea obiceiurilor dăunătoare, apoi curățare profesională regulată — nu cu produse « pore shrinking ».",
      ],
    },
    {
      type: "h2",
      text: "Când este momentul să faci o evaluare profesională",
    },
    {
      type: "p",
      content: [
        "Problema ta — porii vizibili — devine decizie de tratament când rutina acasă nu aduce progres după 2–3 luni, sau squeezing-ul a agravat textura. Semne clare că ai nevoie de serviciu: puncte negre recurente, ten gras cu barieră slăbită, textură aspră persistentă. Tranziția naturală: identifici cauza (sebum, laxitate, cicatrici) → alegi tratamentul potrivit → programezi evaluarea. În cadrul clinicii noastre din Craiova, majoritatea clientelor observă textură mai fină încă după prima ",
        { text: "consultație tratament facial personalizat", href: "/tratamente-faciale-craiova" },
        " — Hydrafacial sau microdermabraziune, după evaluare.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Pori și puncte negre revin constant după rutina acasă"],
        ["Ai iritat pielea cu vacuum sau scrub-uri — ai nevoie de reset profesional"],
        ["Nu știi dacă ai pori genetici, sebum sau cicatrici post-acnee"],
        ["Vrei plan pe 8 săptămâni — compară și ", { text: "curățare acasă vs salon", href: "/blog/curatare-faciala-acasa-vs-salon" }],
      ],
    },
    {
      type: "h2",
      text: "Soluții posibile — Hydrafacial, microdermabraziune, microneedling",
    },
    {
      type: "p",
      content: [
        "Hydrafacial curăță profund; microdermabraziune refinează textura; microneedling stimulează colagenul din jurul porilor. Detalii pe ",
        L.tratamenteFaciale,
        " — hub-ul nostru pentru tratamente faciale.",
      ],
    },
    {
      type: "h2",
      text: "Recomandare Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Problemă → decizie → soluție de tratament: evaluăm cauza porilor dilatați și recomandăm protocolul potrivit — fără mituri despre « închiderea » porilor. Abordare profesională în cadrul clinicii noastre din Craiova, cu progres măsurabil în textură și curățenie.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Evaluare personalizată — sebum, laxitate, cicatrici vs pori genetici"],
        ["Plan adaptat tipului tău de piele — frecvență și procedură corectă"],
        ["Recomandare tratament corect — Hydrafacial, microdermabraziune sau microneedling, după caz"],
      ],
    },
    {
      type: "callout",
      title: "Programează o analiză personalizată la Claire Beauty Craiova",
      content: [
        "Evaluăm cauzele porilor dilatați și îți recomandăm tratamentul facial potrivit.",
      ],
      link: {
        text: "Programează o analiză personalizată la Claire Beauty Craiova",
        href: "/contact",
      },
    },
  ],
  faqs: [
    {
      question: "Pot să « închid » porii definitiv?",
      answer:
        "Nu. Porii nu au mușchi care se deschid și închid. Poți reduce vizibilitatea prin curățare, exfoliere, stimulare colagen și tratamente profesionale — dar dimensiunea structurală rămâne parțial genetică.",
    },
    {
      question: "De ce am pori mai mari pe nas?",
      answer:
        "Zona T are cele mai multe glande sebacee. Nasul produce mai mult sebum, iar foliculii sunt natural mai dilatați. Curățare regulată și BHA ajută; Hydrafacial curăță profund zona.",
    },
    {
      question: "Apa rece « închide » porii?",
      answer:
        "Nu. Apa rece poate reduce temporar fluxul sanguin (vasele se contractă), dar nu modifică dimensiunea porilor. Efectul e iluzie optică, scurt.",
    },
    {
      question: "Cât de des pot face tratamente pentru pori dilatați?",
      answer:
        "Hydrafacial: la 3–4 săptămâni pe ten gras. Microdermabraziune: la 4–6 săptămâni. Microneedling: la 4–6 săptămâni în protocol activ. Respectă intervalele — pielea trebuie să se refacă.",
    },
    {
      question: "Niacinamida chiar reduce porii?",
      answer:
        "Niacinamida reglează sebumul și poate îmbunătăți aspectul porilor prin reducerea inflamației și a acumulării. Nu schimbă dimensiunea structurală, dar reduce vizibilitatea pe termen lung.",
    },
    {
      question: "Extragerea comedoanelor acasă agravează porii?",
      answer:
        "Da. Presiunea traumatizează foliculul, poate cauza inflamație, cicatrici și dilatare permanentă. Extragerea profesională în cadrul Hydrafacial sau curățării estetice este sigură.",
    },
    {
      question: "Pori dilatați la 40 de ani — e normal?",
      answer:
        "Da. Pierderea de colagen face pielea din jurul porilor mai lăsată, ceea ce îi face mai vizibili. Tratamente de stimulare colagen (microneedling, HIFU) pot îmbunătăți aspectul.",
    },
    {
      question: "Ce tratament e cel mai bun pentru pori dilatați?",
      answer:
        "Depinde de cauză: sebum și înfundare — Hydrafacial; textură aspră — microdermabraziune; laxitate și cicatrici — microneedling. Consultația stabilește combinația potrivită.",
    },
  ],
}

export const poriDilatatiPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
