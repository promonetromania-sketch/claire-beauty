import type { BlogPost } from "../../types"
import { blogServiceLinks as L } from "../../links"
import { estimateReadTimeMinutes } from "../../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "colagen-explicat-simplu",
  title: "Colagenul explicat simplu: ce face, de ce scade și cum îl susții corect",
  excerpt:
    "Colagenul nu este un trend — este proteina care ține pielea fermă. Ce face în piele, de ce scade după 25 de ani, ce mituri există despre suplimente și cum îl susții corect, acasă și la salon.",
  metaDescription:
    "Ce este colagenul: rol în piele, de ce scade odată cu vârsta, mituri despre suplimente și cum stimulezi producția naturală. Ghid simplu Claire Beauty.",
  keywords: [
    "ce este colagenul",
    "productie colagen",
    "colagen piele",
    "stimulare colagen natural",
    "pierdere colagen ten",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-08-18",
  image: {
    src: "/images/blog/drafts/colagen-explicat-simplu.jpg",
    alt: "Colagen și piele — ce face, de ce scade, cum îl susții",
    title: "Colagenul explicat simplu",
  },
  relatedService: L.microneedling,
  recommendedServices: [L.dermapen, L.hifu, L.tratamenteFaciale],
  hubLink: L.tratamenteFaciale,
  relatedArticles: [
    {
      text: "Microneedling vs Dermapen: diferențe și cum alegi",
      href: "/blog/microneedling-vs-dermapen-diferente",
    },
    {
      text: "HIFU facial: lifting nechirurgical explicat",
      href: "/blog/hifu-facial-lifting-nechirurgical",
    },
  ],
  blocks: [
    {
      type: "p",
      content: [
        "« Colagen » apare pe etichete de creme, cutii de suplimente, reclame la tratamente — dar ce face cu adevărat în piele? Colagenul este cea mai abundentă proteină structurală din corp: formează o rețea de fibre care dă fermitate, rezistență și elasticitate țesuturilor. În ten, colagenul susține volumul, netezimea și aspectul « plin » al pielii tinere. După 25 de ani, producția scade treptat — cu aproximativ 1% pe an — iar degradarea accelerată de soare, fumat, stres și inflamație face ca pierderea să fie vizibilă: riduri fine, laxitate, ten tern. Acest articol explică simplu ce este colagenul, de ce scade și cum îl susții corect — fără promisiuni miracle, cu distincție clară între ce funcționează și ce e marketing.",
      ],
    },
    {
      type: "h2",
      text: "Ce este colagenul și unde se găsește",
    },
    {
      type: "p",
      content: [
        "Colagenul este o proteină fibroasă produsă în principal de fibroblaste — celule din dermă. Există peste 20 de tipuri; tipul I și III domină pielea. Fibrele de colagen sunt organizate ca o rețea tridimensională care rezistă la tracțiune și menține structura. Alături de elastină (elasticitate) și acid hialuronic (hidratare și volum), colagenul definește « scheletul » dermei. Oasele, tendoanele, cartilajele și vasele de sânge conțin colagen — nu e exclusiv pielii. Când vorbim despre « pierdere de colagen » în context estetic, ne referim la dermă: stratul unde apar ridurile și laxitatea, nu la oase (acolo e alt tip de preocupare medicală).",
      ],
    },
    {
      type: "h2",
      text: "Ce face colagenul în piele — efecte vizibile",
    },
    {
      type: "p",
      content: [
        "Colagen dens = piele mai fermă, pori mai puțin « lăsați », contur facial mai definit, cicatrici fine mai puțin vizibile. Colagen redus = piele subțire, laxitate pe mandibulă și gât, riduri statice (cele prezente și când nu te miști), aspect tern — adesea combinat cu deshidratare, dar distinct ca mecanism. Colagenul nu « umple » ridurile ca un filler injectabil; susține structura din profunzime. De aceea tratamentele care stimulează colagenul nou (microneedling, HIFU, radiofrecvență) au rezultate graduale, la săptămâni–luni — nu overnight. Dacă tenul tău arată opac fără riduri profunde, poate fi și problemă de celule moarte sau circulație — vezi ",
        { text: "cauzele tenului tern fără strălucire", href: "/blog/cauze-ten-tern-fara-stralucire" },
        " pentru diferențiere.",
      ],
    },
    {
      type: "h2",
      text: "De ce scade producția de colagen",
    },
    {
      type: "p",
      content: [
        "Îmbătrânirea cronologică: după ~25 de ani, sinteza scade, iar enzimele (colagenaze) degradează fibre existente mai rapid decât se înlocuiesc. Expunerea UV: razele soarelui sunt principalul accelerator extern — foto-îmbătrânire distruge colagen prin radicali liberi și inflamație cronică. Fumatul: nicotina și toxinele reduc fluxul sanguin și blochează sinteza. Stresul oxidativ și alimentația pro-inflamatorie (zahar rafinat, grăsimi trans) mențin un mediu care favorizează degradarea. Hormonii: scăderea estrogenului la menopauză reduce colagenul cutanat semnificativ — pielea poate pierde până la 30% din colagen în primii 5 ani post-menopauză. Nu poți opri complet procesul, dar poți încetini pierderea și stimula producție nouă.",
      ],
    },
    {
      type: "h3",
      text: "Factori acceleratori — checklist",
    },
    {
      type: "ul",
      items: [
        ["Soare fără SPF zilnic — degradare colagen numărul 1"],
        ["Fumat activ sau pasiv frecvent"],
        ["Somn insuficient cronic — cortizol crescut"],
        ["Alcool în exces — deshidratare și stres oxidativ"],
        ["Dietă săracă în proteine, vitamina C, zinc"],
        ["Inflamație cronică — acnee netratată, poluare ignorată"],
      ],
    },
    {
      type: "h2",
      text: "Colagen vs elastină — nu le confunda",
    },
    {
      type: "p",
      content: [
        "Colagenul = fermitate, structură, rezistență. Elastina = capacitatea de a reveni după întindere (« snap-back »). Ridurile din mișcare (expresie) implică elastină; ridurile de repaus și laxitatea implică colagen. Ambele scad cu vârsta, dar tratamentele le vizează parțial diferit: radiofrecvența și microneedling-ul stimulează colagen la niveluri diferite; HIFU este una dintre opțiunile care acționează profund, dar nu singura — alegerea depinde de obiectiv (laxitate vs textură vs riduri fine). Cremele « cu elastină » topice nu repară elastina dermică — molecule prea mari pentru a penetra. Focus pe stimularea fibroblastelor din interior, nu pe aplicarea proteinelor pe suprafață.",
      ],
    },
    {
      type: "h2",
      text: "Mituri despre colagen — suplimente, creme, băuturi",
    },
    {
      type: "p",
      content: [
        "Mit: « Colagenul hidrolizat din plicule se duce direct în piele. » Realitate: suplimentele sunt digerate; aminoacizii circulă și pot susține sinteza generală, dar dovezile pentru « piele mai tânără vizibil » sunt mixte și depend de doză, durată, vârstă. Nu e inutil, dar nu înlocuiește SPF sau tratamente profesionale. Mit: « Crema cu colagen reface colagenul. » Realitate: colagenul topice hidratează filmul superficial; nu pătrunde în dermă ca rețea structurală. Ingredientele utile sunt retinol, vitamina C, peptide care semnalizează fibroblastele — nu colagenul mort din borcan. Mit: « Băutura de colagen înlocuiește microneedling-ul. » Realitate: nu. Stimularea mecanică sau termică controlată declanșează cascada de reparare mult mai eficient decât un shake zilnic.",
      ],
    },
    {
      type: "h2",
      text: "Cum susții colagenul acasă — ce chiar contează",
    },
    {
      type: "p",
      content: [
        "SPF 30+ zilnic, indiferent de anotimp — non-negociabil. Retinol sau retinal seara (introducere treptată) — cel mai documentat stimulator de colagen topice. Vitamina C dimineața — antioxidant, cofactor pentru sinteza colagenului. Proteine suficiente în dietă (colagenul necesită aminoacizi, în special glicină, prolină); vitamina C din alimente (citrice, ardei, pătrunjel). Somn 7–8 h — regenerare celulară maximă noaptea. Fără fumat. Hidratare și barieră cutanată intactă — pielea stresată repară mai greu. Rutina acasă menține, nu reconstruiește colagen pierdut profund — de aceea tratamentele profesionale completează, nu concurează.",
      ],
    },
    {
      type: "h2",
      text: "Cum stimulezi colagenul la salon — mecanisme reale",
    },
    {
      type: "p",
      content: [
        "Microneedling și Dermapen: micro-leziuni controlate → răspuns de vindecare → colagen și elastină noi (neocolagenizare). Rezultate cumulative în 3–6 ședințe. ",
        L.microneedling,
        " și ",
        L.dermapen,
        " diferă ca dispozitiv, nu ca principiu — detalii în ",
        { text: "comparativul dedicat", href: "/blog/microneedling-vs-dermapen-diferente" },
        ". Radiofrecvența încălzește dermă și declanșează remodelare — utilă pentru fermitate ușoară–moderată. HIFU este o opțiune printre altele pentru laxitate profundă; articolul dedicat ",
        { text: "HIFU facial", href: "/blog/hifu-facial-lifting-nechirurgical" },
        " explică când are sens, separat de stimularea generală de colagen. Peelinguri chimice medii: exfoliază și stimulează remodelare — cu downtime. Niciun tratament « adaugă » colagen din exterior; toate pornesc producția ta endogenă.",
      ],
    },
    {
      type: "h2",
      text: "La ce vârstă are sens să te preocupe colagenul",
    },
    {
      type: "p",
      content: [
        "Prevenția începe la 25+ cu SPF și retinol ușor — nu e « prea devreme ». Stimularea activă (microneedling, radiofrecvență, eventual HIFU dacă laxitatea e factorul principal) are sens când apar primele semne: laxitate ușoară, riduri de repaus fine, ten tern persistent, cicatrici post-acnee. Nu există vârstă « prea târzie » pentru îmbunătățire, dar așteptările cresc odată cu pierderea acumulată. La 50+, combinația tratament + rutină acasă + stil de viață aduce adesea cel mai bun raport efort–rezultat. Consultația evaluează dacă ai nevoie de stimulare profundă sau doar de curățare și hidratare profesională.",
      ],
    },
    {
      type: "h2",
      text: "Colagenul și alimentația — ce susține sinteza",
    },
    {
      type: "p",
      content: [
        "Colagenul nu se « mănâncă » direct din farfurie — organismul asamblează proteine din aminoacizi. Proteinele complete (ouă, pește, carne slabă, leguminoase combinate) furnizează materia primă. Vitamina C (citrice, kiwi, ardei) este cofactor esențial pentru hidroxilarea prolinei și lizinei în lanțul de colagen — fără ea, sinteza scade. Zincul și cuprul participă la enzimele de cross-linking. Antioxidanții din legume colorate reduc stresul oxidativ care degradează fibre existente. Nu există « superfood » unic; consistența pe săptămâni contează mai mult decât un smoothie ocazional. Alimentația nu înlocuiește tratamentele care stimulează fibroblastele, dar creează mediul în care acestea lucrează eficient.",
      ],
    },
    {
      type: "h2",
      text: "Colagenul și alte probleme estetice — legături frecvente",
    },
    {
      type: "p",
      content: [
        "Cicatrici atrofice (post-acnee): deficit local de colagen → microneedling reconstruiește parțial. Pori « lăsați »: pierdere de colagen în jurul foliculilor → stimulare ajută textura. Vergeturi: ruptură de colagen → tratamentele pot îmbunătăți, nu șterg complet. Ten tern: poate fi colagen + celule moarte + circulație — abordare combinată. Laxitate post-slabire: colagen redus + volum adipos scăzut → RF, HIFU, eventual protocol corporal. Înțelegerea mecanismului te ajută să alegi tratamentul potrivit, nu « orice are colagen pe etichetă ».",
      ],
    },
    {
      type: "h2",
      text: "Ce degradează colagenul — și ce îl protejează",
    },
    {
      type: "p",
      content: [
        "Gândește colagenul ca o rețea de fire care se rup treptat și se înlocuiesc prea lent după 25 de ani. UV-ul distruge fibre existente prin radicali liberi — principal accelerator extern, chiar și iarna sau prin geam. Fumatul reduce fluxul sanguin și blochează sinteza; efectul se vede pe tot corpul. Zaharul în exces (glicare) face fibrele rigide și fragile. Cortizolul cronic — stres, somn insuficient — inhibă repararea. Menopauza reduce estrogenul, iar pierderea de colagen poate fi abruptă în primii ani. Pe partea de protecție: SPF zilnic oprește degradarea; retinol și vitamina C semnalizează producție nouă; proteine și vitamina C din alimentație furnizează aminoacizii necesari; mișcarea moderată și somnul susțin regenerarea. Nu există un singur « vinovat » — de obicei e combinația soare + timp + obiceiuri pro-inflamatorii. Tratamentele profesionale nu anulează acești factori; le compensează parțial dacă rutina de acasă și stilul de viață susțin procesul.",
      ],
    },
    {
      type: "h2",
      text: "Așteptări realiste — colagenul nu e reset total",
    },
    {
      type: "p",
      content: [
        "Stimularea colagenului îmbunătățește treptat — peak la 2–3 luni post-tratament pentru proceduri profunde, după 4–6 ședințe pentru microneedling. Nu vei arăta ca la 20 de ani la 45 — vei arăta mai bine decât fără intervenție, cu piele mai fermă și textură mai uniformă. Întreținerea e necesară: protocol periodic adaptat obiectivului, SPF zilnic. Opțiunile de stimulare colagen — microneedling, radiofrecvență, peeling mediu — sunt detaliate pe pagina de ",
        L.tratamenteFaciale,
        ", cu secvențiere logică între proceduri. Colagenul e maraton, nu sprint.",
      ],
    },
    {
      type: "callout",
      title: "Vrei să stimulezi colagenul corect?",
      content: [
        "Solicită o recomandare de specialist la Claire Beauty — evaluăm tenul și propunem planul de stimulare colagen potrivit obiectivelor tale.",
      ],
      link: L.microneedling,
    },
  ],
  faqs: [
    {
      question: "Colagenul din cremă pătrunde în piele?",
      answer:
        "Moleculele de colagen topice sunt prea mari pentru dermă; hidratează superficial. Ingredientele care stimulează sinteza — retinol, vitamina C, peptide — sunt mai relevante decât colagenul din borcan.",
    },
    {
      question: "Suplimentele de colagen chiar ajută tenul?",
      answer:
        "Studiile arată îmbunătățiri modeste ale elasticității și hidratării la unii participanți, după săptămâni–luni. Nu înlocuiesc SPF, retinol sau tratamente profesionale. Efectul variază individual.",
    },
    {
      question: "De la ce vârstă scade colagenul?",
      answer:
        "Producția scade treptat după ~25 de ani, cu aproximativ 1% anual. Pierderea accelerează după menopauză și cu expunere solară cronică fără protecție.",
    },
    {
      question: "Microneedling produce colagen permanent?",
      answer:
        "Stimulează neocolagenizare — colagen nou care durează ani, dar procesul de îmbătrânire continuă. Întreținerea periodică susține rezultatele, nu o singură ședință « pentru totdeauna ».",
    },
    {
      question: "HIFU și colagen — cum funcționează?",
      answer:
        "HIFU livrează energie în straturi profunde, încălzește țesutul și declanșează producție de colagen nou în 2–3 luni. Eficient pentru laxitate ușoară–moderată, nu pentru riduri superficiale izolate.",
    },
    {
      question: "Pot stimula colagenul doar cu vitamina C?",
      answer:
        "Vitamina C susține sinteza și protejează împotriva degradării oxidative — e piesă importantă, dar insuficientă singură pentru laxitate pronunțată. Combină cu SPF, retinol și eventual tratamente profesionale.",
    },
    {
      question: "Fumatul distruge colagenul?",
      answer:
        "Da. Nicotina reduce fluxul sanguin către piele, iar radicalii liberi accelerează degradarea colagenului. Fumătorii îmbătrânesc vizibil mai rapid decât nefumătorii cu același istoric solar.",
    },
    {
      question: "Cât durează până văd rezultate după stimulare colagen?",
      answer:
        "Microneedling: îmbunătățiri după 2–3 ședințe, peak la 4–6. HIFU: primele semne la 2–4 săptămâni, maxim la 2–3 luni. Răbdare și consistență sunt esențiale.",
    },
  ],
}

export const colagenExplicatSimpluPost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
