import type { BlogPost } from "../../types"
import { blogServiceLinks as L } from "../../links"
import { estimateReadTimeMinutes } from "../../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "pregatire-ten-vara-pasi",
  title: "Pregătirea tenului pentru vară: pași esențiali înainte de sezonul cald",
  excerpt:
    "Soarele, clorul din piscină și aerul condiționat pun tenul sub presiune. Descoperă pașii esențiali de pregătire înainte de vară — curățare, exfoliere, protecție — pentru un ten echilibrat tot sezonul.",
  metaDescription:
    "Pregătește tenul pentru vară cu pași clari: curățare blândă, exfoliere controlată, SPF zilnic și hidratare adaptată. Ghid practic pentru un sezon cald fără surprize la piele.",
  keywords: [
    "pregătire ten vară",
    "ingrijire ten vara",
    "rutina ten sezon cald",
    "protectie solara ten",
    "ten uscat vara",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-07-10",
  image: {
    src: "/images/blog/drafts/pregatire-ten-vara-pasi.jpg",
    alt: "Rutină de îngrijire a tenului pentru sezonul cald — curățare și protecție solară",
    title: "Pregătirea tenului pentru vară: pași esențiali",
  },
  relatedService: L.tratamenteFaciale,
  recommendedServices: [L.hydrafacial, L.microdermabraziune, L.tratamenteFaciale],
  hubLink: L.tratamenteFaciale,
  relatedArticles: [
    {
      text: "Cum pregătești tenul înainte de un tratament facial",
      href: "/blog/cum-pregatesti-tenul-tratament-facial",
    },
    {
      text: "Cum scapi de puncte negre corect",
      href: "/blog/cum-scapi-de-puncte-negre-corect",
    },
  ],
  blocks: [
    {
      type: "p",
      content: [
        "Vara nu începe odată cu prima zi caldă — pentru ten, începe cu câteva săptămâni înainte. Soarele intens, umiditatea, clorul din piscină, sarea mării și aerul condiționat creează un cocktail de factori care pot dezechilibra pielea: uscăciune, pete pigmentare, pori dilatați, iritații. Pregătirea tenului pentru vară nu înseamnă schimbarea completă a rutinei sau achiziționarea a zece produse noi; înseamnă ajustări inteligente care întăresc bariera cutanată înainte ca stresorii sezonieri să lovească. Pașii esențiali — de la curățare la protecție solară — te ajută să intri în sezonul cald cu un ten echilibrat, nu cu probleme de recuperat.",
      ],
    },
    {
      type: "h2",
      text: "De ce tenul are nevoie de pregătire înainte de vară",
    },
    {
      type: "p",
      content: [
        "Iarna și primăvara, tenul se adaptează la aer uscat, temperaturi variabile și mai puțină expunere UV. Bariera cutanată poate fi sensibilă după luni de încălzire interioară și schimbări de umiditate. Când vine vara brusc — temperaturi ridicate, index UV crescut, transpirație — pielea reacționează: produce mai mult sebum în zonele mixte, se deshidratează în zonele uscate, iar melanina răspunde neuniform la soare. Pregătirea pre-sezon reduce aceste șocuri: un ten cu barieră intactă, exfoliat moderat și hidratat corect răspunde mai bine la soare și se recuperează mai rapid după expunere.",
      ],
    },
    {
      type: "h2",
      text: "Pasul 1: Curățare blândă, fără agresiune",
    },
    {
      type: "p",
      content: [
        "Primul pas este simplu, dar adesea greșit executat: curățarea. Vara, tentația este să speli tenul de mai multe ori pe zi cu produse degresante — « ca să scapi de ulei ». Rezultatul: bariera se slăbește, pielea produce și mai mult sebum compensator, iritațiile cresc. Optează pentru un gel sau o spumă blândă, fără sulfati agresivi, de dimineață și seara. După sport sau plajă, clătește cu apă călduță și reaplică curățarea blândă doar dacă ai folosit protecție solară sau ai transpirat abundent. Nu folosi exfoliant fizic zilnic « ca să simți că e curat » — asta este una dintre greșelile care duc la ",
        { text: "puncte negre persistente", href: "/blog/cum-scapi-de-puncte-negre-corect" },
        ".",
      ],
    },
    {
      type: "h3",
      text: "Ce eviți în curățare pre-vară",
    },
    {
      type: "ul",
      items: [
        ["Săpunuri alcaline care lasă senzația de « piele strânsă »"],
        ["Exfoliere zilnică cu boabe abrazive"],
        ["Apă foarte fierbinte care deshidratează"],
        ["Produse cu alcool denaturat în primele ingrediente"],
      ],
    },
    {
      type: "h2",
      text: "Pasul 2: Exfoliere controlată — nu exces",
    },
    {
      type: "p",
      content: [
        "Exfolierea elimină celulele moarte și pregătește tenul să absoarbă hidratarea și protecția solară uniform. Pre-vară, 1–2 exfolieri pe săptămână sunt suficiente pentru majoritatea tipurilor de ten. AHA (acid glicolic, lactic) funcționează bine pe ten normal și uscat; BHA (acid salicilic) pe ten gras și mixt, cu pori dilatați. Exfolierea profesională — ",
        L.microdermabraziune,
        " sau tratamente cu enzime — poate fi un accelerator excelent cu 2–4 săptămâni înainte de expuneri prelungite, dar evită procedurile agresive cu 7–10 zile înainte de vacanță la mare: pielea proaspăt exfoliată este mai sensibilă la UV.",
      ],
    },
    {
      type: "h2",
      text: "Pasul 3: Hidratare adaptată tipului de ten",
    },
    {
      type: "p",
      content: [
        "Vara, hidratarea nu dispare — se schimbă textura. Tenul gras beneficiază de geluri ușoare, fără uleiuri comedogene; tenul uscat poate folosi emulsii fluide sau seruri hidratante sub un SPF cu finish confortabil. Ingredientele cheie rămân valabile: acid hialuronic, glicerină, niacinamidă, ceramide. Diferența față de iarnă este cantitatea: straturi mai puține, produse mai ușoare, dar aplicare constantă. Tenul deshidratat sub un strat de sebum — fenomen frecvent vara — arată obosit, cu pori vizibili; hidratarea corectă reduce acest efect fără a încărca pielea.",
      ],
    },
    {
      type: "h2",
      text: "Pasul 4: Protecție solară — non-negociabilă",
    },
    {
      type: "p",
      content: [
        "SPF zilnic este cel mai important pas al pregătirii pentru vară. Nu doar « la plajă » — ci în fiecare zi cu expunere, chiar și parțială. SPF 30 minimum, reaplicare la fiecare 2 ore în expunere directă, cantitate suficientă (aproximativ o linguriță pentru față). Alege formule adaptate tipului tău: fluid mat pentru ten gras, cremă hidratantă cu SPF pentru ten uscat. Protecția solară previne petele post-inflamatorii, îmbătrânirea prematură și arsurile care compromit bariera pentru săptămâni. Dacă urmează un ",
        L.hydrafacial,
        " sau alt ",
        L.tratamenteFaciale,
        ", SPF devine și mai critic în zilele următoare tratamentului.",
      ],
    },
    {
      type: "h2",
      text: "Pasul 5: Tratament profesional pre-sezon — merită?",
    },
    {
      type: "p",
      content: [
        "Da, dacă alegi momentul și procedura corect. Un tratament facial de curățare profundă sau un protocol de hidratare intensă cu 3–4 săptămâni înainte de vacanță poate rezolva acumulările de iarnă — puncte negre, textură irregulată, uscăciune — astfel încât intri în vară cu un ten curat, nu cu probleme de recuperat sub soare. ",
        L.hydrafacial,
        " combină curățare, exfoliere blândă și infuzie de seruri — ideal ca « reset » pre-sezon. ",
        L.microdermabraziune,
        " netezește textura și uniformizează superficial. Consultă terapeutul pentru calendar: unele proceduri necesită zile de recuperare și evitarea soarelui direct. Articolul despre ",
        { text: "cum pregătești tenul înainte de un tratament facial", href: "/blog/cum-pregatesti-tenul-tratament-facial" },
        " detaliază ce să faci și ce să eviți în zilele premergătoare.",
      ],
    },
    {
      type: "h2",
      text: "Pasul 6: Antioxidanți — apărare suplimentară",
    },
    {
      type: "p",
      content: [
        "Vitamina C (ser dimineața, sub SPF) neutralizează radicalii liberi produși de UV și poluare. Vitamina E, niacinamidă și extracte botanice (green tea, resveratrol) completează apărarea. Antioxidanții nu înlocuiesc SPF — îl completează. Aplică serul antioxidant după curățare, înainte de hidratare și protecție solară. Dacă tenul tău este sensibil, introdu vitamina C treptat (concentrație mică, 2–3 aplicări pe săptămână) pentru a evita iritația.",
      ],
    },
    {
      type: "h2",
      text: "Greșeli frecvente în pregătirea tenului pentru vară",
    },
    {
      type: "ul",
      items: [
        ["Exfoliere excesivă « ca să ard mai repede la soare » — periculos și ineficient"],
        ["Renunțarea la hidratare « pentru că e cald »"],
        ["SPF doar la plajă, nu zilnic"],
        ["Produse noi agresive cu câteva zile înainte de vacanță"],
        ["Tratamente laser sau peeling profund fără planificare post-procedură"],
        ["Ignorarea gâtului, decolteului și urechilor la aplicarea SPF"],
      ],
    },
    {
      type: "h2",
      text: "Ten gras vs ten uscat vara — ajustări diferite",
    },
    {
      type: "p",
      content: [
        "Tenul gras: curățare blândă de 2 ori pe zi, BHA ușor, gel hidratant, SPF mat. Evită overwashing. Tenul uscat: curățare cremoasă, AHA blând, ser hidratant, SPF cu emoliere. Evită produsele doar « oil-free » dacă pielea devine și mai uscată. Tenul mixt: abordare pe zone — BHA pe T-zone, hidratare pe obraji. Tenul sensibil: SPF mineral, fără parfum, introdu un singur produs nou la 2 săptămâni. Nu există rutină universală; observă cum răspunde pielea ta la căldură și ajustează.",
      ],
    },
    {
      type: "h2",
      text: "Ce se întâmplă dacă sari peste pregătire",
    },
    {
      type: "p",
      content: [
        "Tenul nepregătit reacționează mai intens: arsuri, pete, deshidratare cu sebum compensator, erupții după clor sau sare. Recuperarea durează săptămâni, nu zile — și poate necesita tratamente corective (peelinguri, hidratare profesională, protocol anti-pigmentare). Investiția de câteva săptămâni pre-vară costă mai puțin decât repararea daunelor estivale. Dacă ai amânat pregătirea, nu e prea târziu: începe cu curățare blândă, SPF zilnic și o consultație pentru evaluarea stării actuale a tenului.",
      ],
    },
    {
      type: "h2",
      text: "Calendar practic: cu câte săptămâni înainte să începi",
    },
    {
      type: "ol",
      items: [
        ["6–4 săptămâni înainte: evaluare ten, eventual tratament profesional (Hydrafacial, microdermabraziune)"],
        ["4–2 săptămâni: rutină stabilă — curățare, exfoliere moderată, hidratare, SPF zilnic"],
        ["2–1 săptămâni: evită produse noi agresive; finalizează tratamentele cu timp de recuperare"],
        ["Săptămâna vacanței: rutină simplificată — curățare, hidratare ușoară, SPF reaplicat"],
        ["Post-vacanță: hidratare intensă, eventual tratament calmant dacă ai avut expunere excesivă"],
      ],
    },
    {
      type: "h2",
      text: "Scenariu: pregătire ten cu 4 săptămâni înainte de mare",
    },
    {
      type: "p",
      content: [
        "Ana, 34 de ani, ten mixt cu tendință la pori înfundati pe nas și obrajii uscați iarna. Pleacă la mare peste patru săptămâni — prima dată după doi ani fără vacanță la soare. În consultație, tenul arată mat, cu strat fin de celule moarte și SPF aplicat inconsistent. Planul propus: săptămâna 1 — curățare profesională ușoară și evaluare produse acasă; săptămâna 2 — Hydrafacial ca reset pre-sezon, fără downtime; săptămâna 3 — rutină stabilă acasă (gel blând, BHA de 2 ori, gel hidratant, SPF 30 zilnic); săptămâna 4 — fără proceduri noi, doar hidratare și reaplicare SPF. Microdermabraziunea a fost amânată pentru toamnă — pielea sensibilizată înainte de expunere ar fi riscantă. Ana intră la mare cu ten curat, barieră intactă și un kit simplu: demachiant blând, ser hidratant, SPF reaplicabil. După vacanță, programează o ședință calmantă de hidratare — nu un peeling « de recuperare » făcut în grabă.",
      ],
    },
    {
      type: "p",
      content: [
        "Scenariul ilustrează principiul: mai puține intervenții, bine plasate, bat orice sprint de produse noi cu o săptămână înainte. Dacă ai pete pigmentare vechi sau ten foarte reactiv, calendarul se ajustează — uneori prioritatea este calmarea și SPF-ul, nu exfolierea. Transmite datele plecării la consultație; planul se construiește invers de acolo, nu de la « ce e la modă » vara asta.",
      ],
    },
    {
      type: "h3",
      text: "Tratamente faciale pentru sezonul cald",
    },
    {
      type: "p",
      content: [
        "Pagina de ",
        L.tratamenteFaciale,
        " descrie opțiunile disponibile — curățare profundă, hidratare, microdermabraziune, Hydrafacial — cu recomandări adaptate tipului tău de ten și calendarului estival. Evaluăm, tratăm și îți explicăm ce merită acasă vs ce necesită mâini profesioniste.",
      ],
    },
    {
      type: "callout",
      title: "Pregătește tenul înainte de soare",
      content: [
        "Solicită un plan tratament personalizat la Claire Beauty — rutină adaptată, tratament pre-sezon dacă e cazul, calendar aliniat cu data plecării tale.",
      ],
      link: L.tratamenteFaciale,
    },
  ],
  faqs: [
    {
      question: "Când ar trebui să încep pregătirea tenului pentru vară?",
      answer:
        "Ideal, cu 4–6 săptămâni înainte de expunerile prelungite. Dacă ai amânat, începe imediat cu SPF zilnic și curățare blândă — orice pregătire e mai bună decât nimic.",
    },
    {
      question: "Pot face microdermabraziune înainte de vacanță la mare?",
      answer:
        "Da, cu 2–4 săptămâni înainte, nu cu câteva zile. Pielea proaspăt exfoliată este sensibilă la UV; planifică procedura cu terapeutul.",
    },
    {
      question: "Tenul gras mai are nevoie de hidratare vara?",
      answer:
        "Da. Deshidratarea poate crește producția de sebum. Geluri ușoare, non-comedogene, aplicare constantă — fără a renunța la hidratare.",
    },
    {
      question: "SPF 50 sau SPF 30 — care e suficient?",
      answer:
        "SPF 30 blockează ~97% din UVB; SPF 50 ~98%. Important este aplicarea generoasă și reaplicarea, nu doar cifra de pe etichetă.",
    },
    {
      question: "Pot folosi retinol vara?",
      answer:
        "Cu precauție: concentrație mică, doar seara, SPF obligatoriu dimineața. Mulți preferă să reducă retinolul în perioadele de expunere intensă.",
    },
    {
      question: "Hydrafacial este potrivit pre-vară?",
      answer:
        "Da, este unul dintre cele mai solicitate « reset-uri » pre-sezon: curățare, exfoliere blândă, hidratare. Ideal cu 2–3 săptămâni înainte de vacanță.",
    },
    {
      question: "Ce fac dacă am pete de la anul trecut?",
      answer:
        "Consultație pentru evaluare: petele necesită adesea protocol dedicat (peelinguri, vitamina C, tratamente profesionale). SPF zilnic previne agravarea.",
    },
    {
      question: "Cât de des ar trebui să exfoliez vara?",
      answer:
        "1–2 ori pe săptămână pentru majoritatea tipurilor de ten. Ten sensibil: o dată pe săptămână sau la 10 zile. Evită exfolierea zilnică.",
    },
  ],
}

export const pregatireTenVaraPasiPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
