import type { BlogPost } from "../../types"
import { blogServiceLinks as L } from "../../links"
import { estimateReadTimeMinutes } from "../../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "tratamente-inainte-de-concediu",
  title: "Tratamente recomandate înainte de concediu: față și corp, cu timing realist",
  excerpt:
    "Vacanța se apropie și vrei să te simți bine în poze, în costum de baie și în haine lejere? Un plan de tratamente față și corp, cu timing realist, poate face diferența — fără grabă de ultim moment și cu ședințe plasate corect în calendar.",
  metaDescription:
    "Ghid tratamente înainte de vacanță: față și corp, calendar realist, ce programezi cu 2–6 săptămâni înainte. Planificare la Claire Beauty Craiova.",
  keywords: [
    "tratamente inainte de vacanta",
    "pregatire corporala vacanta",
    "tratament facial inainte eveniment",
    "plan tratamente concediu",
    "timing tratamente estetice",
  ],
  tag: "Tratamente corporale",
  publishedAt: "2026-07-28",
  image: {
    src: "/images/blog/drafts/tratamente-inainte-de-concediu.jpg",
    alt: "Pregătire față și corp înainte de concediu — plan de tratamente estetice",
    title: "Tratamente recomandate înainte de concediu",
  },
  relatedService: L.remodelare,
  recommendedServices: [L.tratamenteFaciale, L.drenaj, L.masajAnticelulitic],
  hubLink: L.tratamenteCorporale,
  relatedArticles: [
    {
      text: "Cât durează până vezi rezultate la tratamente estetice",
      href: "/blog/cat-dureaza-rezultate-tratamente-estetice",
    },
    {
      text: "Cât de des poți face tratamente corporale",
      href: "/blog/cat-de-des-tratamente-corporale",
    },
  ],
  blocks: [
    {
      type: "p",
      content: [
        "Concediul nu ar trebui să fie un sprint de ultimă oră spre salon — ci rezultatul unui plan scurt, bine plasat în timp. Fie că pleci la mare, la munte sau într-o city break, tenul și corpul răspund diferit la tratamente în funcție de când le programezi, ce combini și ce faci după. La ",
        L.contact,
        ", construim adesea planuri pre-vacanță care alternează ",
        L.tratamenteFaciale,
        " cu proceduri corporale din gama de ",
        L.tratamenteCorporale,
        " — cu intervale realiste între ședințe, nu transformări comprimate într-o săptămână.",
      ],
    },
    {
      type: "h2",
      text: "De ce timing-ul contează înainte de concediu",
    },
    {
      type: "p",
      content: [
        "Pielea are nevoie de timp să se refacă după exfoliere, microneedling sau proceduri cu energie. Corpul acumulează rezultate progresiv — drenajul limfatic aduce ușurare rapid, dar conturul și fermitatea cer protocol. Dacă programezi un peeling intens cu trei zile înainte de plecare, riști roșeață, descuamare sau sensibilitate la soare. Dacă începi un plan de ",
        L.remodelare,
        " cu opt săptămâni înainte, ai șanse reale să observi diferențe în talie, coapse sau brațe — nu spectaculoase, dar vizibile în poze și în haine.",
      ],
    },
    {
      type: "h2",
      text: "Cu cât timp înainte să începi pregătirea",
    },
    {
      type: "p",
      content: [
        "Regula practică: cu cât tratamentul este mai activ, cu atât mai devreme îl planifici. Pentru un ten luminos fără downtime, ",
        L.hydrafacial,
        " poate fi făcut cu 3–7 zile înainte. Pentru microdermabraziune sau Dermapen, ideal 2–3 săptămâni. Pentru corp — drenaj, masaj anticelulitic, electrostimulare — un protocol de 4–6 ședințe început cu 4–6 săptămâni înainte oferă cel mai bun raport efort-rezultat. Articolul nostru despre ",
        { text: "pregătirea tenului înainte de tratament facial", href: "/blog/cum-pregatesti-tenul-tratament-facial" },
        " detaliază ce eviți în săptămânile premergătoare.",
      ],
    },
    {
      type: "h3",
      text: "Calendar orientativ",
    },
    {
      type: "ul",
      items: [
        ["6–8 săptămâni înainte: start protocol corporal (remodelare, anticelulitic, drenaj)",
        ],
        ["4 săptămâni înainte: tratamente active față (peeling, microneedling) dacă e cazul"],
        ["2 săptămâni înainte: ultima ședință corporală intensă; evită proceduri noi experimentale"],
        ["1 săptămână înainte: Hydrafacial, curățare profundă, drenaj ușor — fără iritare"],
        ["3–5 zile înainte: doar hidratare, SPF, fără tratamente agresive"],
      ],
    },
    {
      type: "h2",
      text: "Tratamente faciale recomandate pre-vacanță",
    },
    {
      type: "p",
      content: [
        "Obiectivul nu este să schimbi structura pielii înainte de zbor — ci să ai un ten curat, hidratat, uniform, care arată bine cu sau fără machiaj. ",
        L.hydrafacial,
        " este alegerea clasică: curăță, exfoliază blând, infuzează seruri — fără zile de recuperare. Pentru ten tern sau pori vizibili, microdermabraziunea cu 2–3 săptămâni înainte redă luminozitatea. Dacă vrei efect de lifting subtil, HIFU facial se programează cu minimum 3–4 săptămâni în avans — rezultatul se conturează treptat. Toate aceste opțiuni fac parte din gama de ",
        L.tratamenteFaciale,
        " pe care o adaptăm obiectivului tău de vacanță.",
      ],
    },
    {
      type: "h2",
      text: "Tratamente corporale pentru contur și ușurare",
    },
    {
      type: "p",
      content: [
        "Pe corp, clienții cer de obicei trei lucruri: picioare mai ușoare după zbor, contur mai definit în zonele problemă și piele mai fină pe coapse sau abdomen. ",
        L.drenaj,
        " rezolvă retenția și senzația de greutate — ideal cu 2–3 zile înainte de plecare sau imediat după zborul de întoarcere. ",
        L.masajAnticelulitic,
        " lucrează pe celulită și fermitate, cu rezultate cumulative în 4–6 ședințe. ",
        L.remodelare,
        " — radiofrecvență, electrostimulare, proceduri combinate — adresează conturul atunci când ai timp suficient. Dacă ești la prima experiență cu tratamente corporale, ",
        { text: "ghidul pentru începători", href: "/blog/tratamente-corporale-ghid-incepatori" },
        " îți explică diferențele între proceduri.",
      ],
    },
    {
      type: "h2",
      text: "Protocol combinat față + corp: ordinea corectă",
    },
    {
      type: "p",
      content: [
        "Când combini față și corp, ordinea și spațierea contează. Nu programează microneedling facial și masaj anticelulitic intens în aceeași zi — corpul și pielea au nevoie de recuperare. Varianta eficientă: zile alternate sau săptămâni alternate — o săptămână accent pe corp, următoarea pe față, apoi ambele în modul de întreținere. Consultația inițială la ",
        L.contact,
        " stabilește calendarul concret în funcție de data plecării, tipul de vacanță (soare intens vs city break) și istoricul tău de tratamente.",
      ],
    },
    {
      type: "h3",
      text: "Exemplu de plan pe 6 săptămâni",
    },
    {
      type: "ol",
      items: [
        ["Săptămâna 1–2: drenaj + masaj anticelulitic; evaluare ten"],
        ["Săptămâna 3: microdermabraziune sau Dermapen facial"],
        ["Săptămâna 4: ședință remodelare corporală; hidratare acasă"],
        ["Săptămâna 5: a doua ședință anticelulitic; curățare profundă față dacă e nevoie"],
        ["Săptămâna 6: Hydrafacial cu 5–7 zile înainte de plecare; drenaj ușor opțional"],
      ],
    },
    {
      type: "h2",
      text: "Ce să eviți în săptămâna plecării",
    },
    {
      type: "p",
      content: [
        "Ultima săptămână nu este momentul pentru experimente. Evită peeling-uri chimice noi, laser agresiv, prima ședință de microneedling sau proceduri corporale foarte intense care pot lăsa echimoze. Renunță la waxing facial, epilare cu ceară pe zone sensibile sau produse cu retinol puternic dacă urmează expunere la soare. Nu subestima SPF-ul — chiar dacă tenul arată perfect miercuri, soarele de sâmbătă poate anula beneficiile dacă pielea este sensibilizată.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Tratamente cu downtime vizibil (roșeață, descuamare) — minimum 10–14 zile înainte"],
        ["Proceduri noi pe care nu le-ai mai testat — risc de reacție neprevăzută"],
        ["Combinații multiple de active în aceeași zi — față + corp intens"],
        ["Solarul și expunerea prelungită fără protecție, imediat post-tratament"],
      ],
    },
    {
      type: "h2",
      text: "Îngrijire în vacanță: cum menții rezultatele",
    },
    {
      type: "p",
      content: [
        "Tratamentele nu se termină la ușa salonului. În vacanță, hidratarea constantă, SPF reaplicat și evitarea excessului de alcool și sare susțin efectul drenajului și al tratamentelor faciale. Nu extrage singură comedoanele — risc de inflamație și pete post-soare. Dacă ai făcut microdermabraziune sau Hydrafacial, tenul absoarbe mai bine serurile — profită de asta cu produse simple, fără parfum. La întoarcere, o ședință de drenaj sau o curățare blândă resetează pielea după zbor, clor și soare.",
      ],
    },
    {
      type: "h2",
      text: "Calendar realist: exemple pe tip de concediu",
    },
    {
      type: "p",
      content: [
        "Concediu la mare, 10 zile, plecare peste 5 săptămâni: începe cu drenaj și anticelulitic, programează Hydrafacial la 6–7 zile înainte, evită peeling chimic. City break de weekend, peste 2 săptămâni: doar Hydrafacial sau curățare profesională + drenaj ușor — fără proceduri active. Nuntă sau eveniment, peste 8 săptămâni: protocol complet față + corp, cu HIFU sau Dermapen la jumătatea planului și finisare cu Hydrafacial în săptămâna evenimentului. Nu există plan universal — consultația personalizează calendarul.",
      ],
    },
    {
      type: "h2",
      text: "Mituri despre « pregătirea de vacanță »",
    },
    {
      type: "ul",
      items: [
        ["« O ședință e suficientă » — ușurarea se simte, dar conturul și luminozitatea cer constanță"],
        ["« Cu o săptămână înainte rezolv tot » — tratamentele active au nevoie de mai mult timp"],
        ["« Drenajul slăbește » — elimină lichide, nu grăsime; util pentru aspect, nu pentru kilograme"],
        ["« Pot face orice tratament oricând » — soarele, zborul și sensibilitatea pielii limitează opțiunile"],
      ],
    },
    {
      type: "h3",
      text: "Checklist rapid pre-vacanță",
    },
    {
      type: "ul",
      items: [
        ["Confirmă data plecării la consultație — calendarul se construiește invers de acolo"],
        ["Notează tratamentele recente (peeling, laser, injectabile) — influențează ce poți face"],
        ["Planifică SPF și produse simple pentru vacanță — fără active noi pe plajă"],
        ["Programează ședința post-vacanță (drenaj sau curățare) înainte de plecare — slot rezervat"],
      ],
    },
    {
      type: "h2",
      text: "Scenariu: city break peste 3 săptămâni — plan față + corp",
    },
    {
      type: "p",
      content: [
        "Ioana, 29 de ani, pleacă la un city break de 4 zile peste trei săptămâni. Vrea ten luminos în poze și picioare mai ușoare după zbor — fără downtime vizibil. Nu are timp pentru protocol lung de remodelare. Planul propus: săptămâna 1 — drenaj limfatic ușor (ușurare imediată, fără echimoze); săptămâna 2 — curățare profesională facială + hidratare intensă; săptămâna 3, cu 5 zile înainte de plecare — Hydrafacial ca finisare, SPF recomandat pentru vacanță. Fără microneedling, fără peeling chimic, fără masaj anticelulitic intens — risc de roșeață sau sensibilitate înainte de eveniment. Acasă: demachiant blând, ser hidratant, SPF reaplicabil în geantă. La întoarcere, slot rezervat pentru drenaj post-zbor. Scenariul arată cum prioritizarea și renunțarea la proceduri « de efect maxim » bat graba de ultim moment când calendarul e scurt.",
      ],
    },
    {
      type: "h2",
      text: "Buget și prioritizare: față sau corp?",
    },
    {
      type: "p",
      content: [
        "Nu toată lumea are timp sau buget pentru protocol complet față + corp. Prioritizează în funcție de ce te deranjează cel mai mult în vacanță: tenul în poze, picioarele grele după zbor, conturul în costum de baie. Dacă ai doar 2–3 ședințe disponibile, Hydrafacial plus drenaj oferă cel mai rapid « feel-good ». Dacă ai 6+ ședințe, poți alterna masaj anticelulitic cu tratament facial activ. Comunică transparent obiectivele și constrângerile — planul se adaptează, nu se impune.",
      ],
    },
    {
      type: "h2",
      text: "Când este momentul să faci o evaluare profesională",
    },
    {
      type: "p",
      content: [
        "Deadline-ul concediului se apropie — tranziția de la « vreau să arăt bine » la programare concretă are loc când ai 4–6 săptămâni înainte de plecare (protocol complet) sau 2–3 săptămâni (plan scurt față + corp). Semne clare că ai nevoie de serviciu: nu știi ce proceduri combini, ai tentatia de « o ședință înainte de plecare » cu așteptări nerealiste, sau vrei ten luminos fără downtime vizibil. Tranziția naturală: deadline clar → soluție rapidă adaptată → programare. În cadrul clinicii noastre din Craiova, majoritatea clientelor observă diferență de confort și aspect încă din primele ședințe de ",
        { text: "consultație tratament facial personalizat", href: "/tratamente-faciale-craiova" },
        " sau drenaj pre-vacanță.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Plecarea e în 4–6 săptămâni — ai timp pentru protocol față + corp"],
        ["City break în 2–3 săptămâni — ai nevoie de plan scurt, fără downtime"],
        ["Nu știi ce combini: Hydrafacial, drenaj, anticelulitic, remodelare"],
        ["Vrei calendar invers de la data plecării — nu ghiceli"],
      ],
    },
    {
      type: "h2",
      text: "Soluții posibile — plan față + corp pre-vacanță",
    },
    {
      type: "p",
      content: [
        "Nu vindem pachete standard « pre-vacanță » fără evaluare. Analizăm data plecării, tipul de vacanță și construim plan fezabil cu ",
        { text: "evaluare remodelare corporală", href: "/remodelare-corporala-craiova" },
        ", ",
        L.tratamenteFaciale,
        " și ",
        { text: "programare drenaj limfatic Craiova", href: "/drenaj-limfatic-craiova" },
        ". Timeline realist: vezi ",
        { text: "cât durează rezultatele tratamentelor estetice", href: "/blog/cat-dureaza-rezultate-tratamente-estetice" },
        ".",
      ],
    },
    {
      type: "h2",
      text: "Recomandare Claire Beauty Craiova",
    },
    {
      type: "p",
      content: [
        "Deadline → soluție rapidă → programare: construim calendar față + corp adaptat datei plecării tale, cu proceduri din gama completă corporală și facială. Planificare transparentă în cadrul clinicii noastre din Craiova — timing realist, rezultate pe care te poți baza în poze.",
      ],
    },
    {
      type: "ul",
      items: [
        ["Evaluare personalizată — data plecării, obiective față + corp, istoric tratamente"],
        ["Plan adaptat tipului tău de piele/corp — frecvență și ordine proceduri"],
        ["Recomandare tratament corect — Hydrafacial, drenaj, anticelulitic sau remodelare, după calendar"],
      ],
    },
    {
      type: "callout",
      title: "Programează o analiză personalizată la Claire Beauty Craiova",
      content: [
        "Calendar față + corp adaptat datei plecării tale — fără grabă de ultim moment.",
      ],
      link: {
        text: "Programează o analiză personalizată la Claire Beauty Craiova",
        href: "/contact",
      },
    },
  ],
  faqs: [
    {
      question: "Cu cât timp înainte de vacanță ar trebui să încep tratamentele?",
      answer:
        "Ideal, cu 4–6 săptămâni pentru protocol corporal complet și 2–3 săptămâni pentru tratamente faciale active. Hydrafacial poate fi făcut cu 3–7 zile înainte, fără downtime semnificativ.",
    },
    {
      question: "Pot face tratament facial cu o săptămână înainte de plecare?",
      answer:
        "Da, dacă alegi proceduri blânde — Hydrafacial, curățare profesională, hidratare intensă. Evită peeling chimic, microneedling sau laser dacă urmează expunere la soare imediat după.",
    },
    {
      question: "Ce tratament corporal are efect cel mai rapid?",
      answer:
        "Drenajul limfatic — ușurare la picioare și reducerea retenției se simt adesea după prima ședință. Conturul și fermitatea necesită mai multe ședințe de masaj anticelulitic sau remodelare.",
    },
    {
      question: "Pot combina drenajul cu masaj anticelulitic înainte de concediu?",
      answer:
        "Da, și este frecvent recomandat. Drenajul pregătește țesuturile; masajul anticelulitic lucrează apoi pe contur. Le alternăm în aceeași ședință sau în zile diferite, în funcție de intensitate.",
    },
    {
      question: "Merită să fac HIFU facial înainte de vacanță?",
      answer:
        "HIFU are nevoie de 2–4 săptămâni pentru ca rezultatul să se contureze. Programează-l cu minimum 3–4 săptămâni înainte dacă vrei efect vizibil în concediu, nu cu câteva zile înainte.",
    },
    {
      question: "Ce evit în vacanță după tratamente faciale?",
      answer:
        "Soare direct fără SPF, solarul, extragerea comedoanelor acasă, produse agresive noi și alcool/sare în exces dacă ai făcut drenaj. Hidratarea constantă susține rezultatele.",
    },
    {
      question: "O singură ședință de remodelare corporală ajută?",
      answer:
        "O ședință poate oferi o senzație de fermitate temporară, dar rezultatele vizibile de contur apar după un protocol de 4–8 ședințe, cu frecvență săptămânală sau bilunară.",
    },
    {
      question: "Cum programez un plan pre-vacanță la Claire Beauty?",
      answer:
        "Contactează-ne cu data aproximativă a plecării și obiectivele tale (ten, corp, ambele). Consultația stabilește tratamentele, ordinea și calendarul — fără pachete impuse.",
    },
  ],
}

export const tratamenteInainteConcediuPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
