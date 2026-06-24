import type { BlogPost } from "../../types"
import { blogServiceLinks as L } from "../../links"
import { estimateReadTimeMinutes } from "../../utils"

const post: Omit<BlogPost, "readTimeMinutes"> = {
  slug: "recuperare-ten-dupa-soare",
  title:
    "Recuperarea tenului după expunerea la soare: ce faci corect în primele săptămâni",
  excerpt:
    "După vacanță, tenul poate fi uscat, pătat sau iritat — chiar fără arsură vizibilă. Ghid pas cu pas pentru recuperare în primele săptămâni: ce eviți, ce aplici și când merită un tratament profesional.",
  metaDescription:
    "Recuperare ten după soare: pași corecți în primele săptămâni. Cum calmezi pielea, reduci petele și când treci de la rutină acasă la tratament facial profesional.",
  keywords: [
    "recuperare ten după soare",
    "ingrijire ten dupa vacanta",
    "pielea uscata dupa soare",
    "pete solare tratament",
    "ten iritat dupa plaja",
  ],
  tag: "Tratamente faciale",
  publishedAt: "2026-08-07",
  image: {
    src: "/images/blog/drafts/recuperare-ten-dupa-soare.jpg",
    alt: "Recuperarea tenului după expunerea la soare — ghid primele săptămâni",
    title: "Recuperare ten după soare",
  },
  relatedService: L.tratamenteFaciale,
  recommendedServices: [L.hydrafacial, L.microdermabraziune, L.hifu],
  hubLink: L.tratamenteFaciale,
  relatedArticles: [
    {
      text: "Cum pregătești tenul înainte de un tratament facial",
      href: "/blog/cum-pregatesti-tenul-tratament-facial",
    },
    {
      text: "Ce este microdermabraziunea și care sunt beneficiile",
      href: "/blog/ce-este-microdermabraziunea-beneficii",
    },
  ],
  blocks: [
    {
      type: "p",
      content: [
        "Te-ai întors din vacanță cu amintiri frumoase — și poate cu tenul care « arată obosit », uscat, mai închis la culoare sau cu pete care nu existau înainte. Expunerea la soare, apă sărată, clor, vânt și schimbarea rutinei de îngrijire lasă urme chiar și fără arsură solară vizibilă. Primele săptămâni după vacanță sunt critice: pielea e vulnerabilă, bariera poate fi compromisă, iar impulsul de a « repara totul rapid » cu exfoliere agresivă sau acid puternic poate agrava situația. Mai jos găsești ce se întâmplă cu tenul după soare, ce pași urmezi acasă în săptămânile 1–4 și când merită trecerea la tratament profesional — cu calm, nu panică.",
      ],
    },
    {
      type: "h2",
      text: "Ce i se întâmplă tenului după expunerea la soare",
    },
    {
      type: "p",
      content: [
        "Soarele declanșează melanogeneza — producția de melanină ca protecție. Rezultatul: bronz, dar și pete solare, hiperpigmentare post-inflamatorie dacă au existat mici iritații sau coșuri. UV-urile degradează colagenul și elastina, ceea ce pe termen scurt se traduce prin uscăciune, textură aspră, fine lines mai vizibile. Deshidratarea — din căldură, apă sărată, alcool, aer condiționat — reduce lipidele din stratul cornos; pielea devine sensibilă, reactivă, uneori cu senzație de « strângere ». Chiar dacă ai folosit SPF (sperăm!), acumularea zilnică de radiație plus factorii externi de la mare sau munte modifică echilibrul pielii. Recuperarea nu e cosmetică superficială — e restaurarea barierei și calmarea inflamației subtile.",
      ],
    },
    {
      type: "h2",
      text: "Timeline: zilele 1–7 și 7–21 post-vacanță",
    },
    {
      type: "p",
      content: [
        "Primele 7 zile sunt despre oprirea daunelor, nu despre « reparare activă ». Ziua 1–2: pielea poate fi caldă, uscată, ușor strânsă — chiar fără arsură vizibilă. Demachiere blândă seara, apă termală sau ser cu acid hialuronic, cremă calmantă, SPF 50+ dimineața indiferent de vreme. Zero exfoliere, zero retinol, zero aparat de curățat porii. Dacă ai arsut, vezicule sau durere intensă, dermatolog — nu salon. Ziua 3–5: senzația de uscăciune persistă; hidratarea în straturi (ser apos + cremă) aduce confort. Evită piscina, sauna, sportul cu fața roșie. Ziua 6–7: dacă pielea nu mai arde la aplicarea produselor și roșeața s-a estompat, ești pe traseul corect — încă fără active agresive. Săptămâna 2 (zilele 8–14): reintrodu treptat vitamina C în concentrație mică dimineața, o dată pe săptămână PHA sau acid lactic blând. Retinolul așteaptă. SPF rămâne non-negociabil — petele noi se formează rapid pe piele vulnerabilă. Săptămâna 3 (zilele 15–21): textura începe să se uniformizeze; petele superficiale pot părea mai evidente pe fond de bronz estompat — normal. Poți programa prima evaluare profesională blândă (Hydrafacial hidratant) dacă bariera e stabilă. Nu combina acasă retinol cu tratament activ la salon în aceeași săptămână. La finalul celor 21 de zile, majoritatea tenurilor revin la confort și hidratare; uniformizarea tonului și estomparea petelor durează încă 4–8 săptămâni — răbdarea e parte din protocol, nu pasivitate.",
      ],
    },
    {
      type: "h2",
      text: "Săptămâna 1: calmare, hidratare, zero agresiune",
    },
    {
      type: "p",
      content: [
        "Primele 7 zile: simplifică la maximum. Demachiere blândă (fără parfum, fără alcool), apă termală sau ser cu acid hialuronic, cremă calmantă (panthenol, centella, aloe), SPF 50+ dimineața — chiar dacă stai « doar în oraș ». Evită: exfoliere (scrub, AHA, BHA, retinol), aparatul de curățat porii, măști « purificatoare » pe ten uscat post-soare, tratamente cu laser sau peeling. Pielea arsă sau foarte roșie necesită doar produse emoliente; dacă ai vezicule sau durere intensă, dermatolog, nu salon. Dacă ai planificat tratamente estetice, amână-le — ",
        { text: "pregătirea tenului înainte de tratament", href: "/blog/cum-pregatesti-tenul-tratament-facial" },
        " include evitarea expunerii recente la soare; acum e momentul invers: lasă pielea să se stabilizeze.",
      ],
    },
    {
      type: "h3",
      text: "Checklist săptămâna 1",
    },
    {
      type: "ul",
      items: [
        ["SPF 50+ zilnic, reaplicat la expunere"],
        ["Demachiere blândă seara, fără frecare"],
        ["Ser hidratant + cremă oclusivă ușoară seara"],
        ["Fără retinol, AHA, BHA, vitamina C concentrată"],
        ["Apă suficientă, somn, limitarea alcoolului"],
      ],
    },
    {
      type: "h2",
      text: "Săptămânile 2–3: reintroducere graduală",
    },
    {
      type: "p",
      content: [
        "Dacă pielea nu mai e roșie, nu arde la aplicarea produselor și nu descuamează în plăci, poți reintroduce treptat: vitamina C dimineața (concentrație mică), apoi o dată pe săptămână acid lactic sau PHA blând. Retinolul — dacă îl foloseai înainte — așteaptă săptămâna 3–4, sau mai mult dacă ai pete sau sensibilitate. Exfolierea mecanică rămâne interzisă încă o săptămână. Petele noi de pigmentare: nu le « scrub-ui » — protecția solară strictă e primul « tratament »; ingrediente depigmentante (niacinamidă, arbutin, acid azelaic blând) se pot adăuga treptat. Dacă bronzul s-a estompat dar au rămas diferențe de culoare, e normal; procesul de recuperare a tonului uniform durează 4–8 săptămâni, uneori mai mult.",
      ],
    },
    {
      type: "h2",
      text: "Pete, uscăciune și textură — abordări diferențiate",
    },
    {
      type: "p",
      content: [
        "Uscăciunea răspunde la hidratare în straturi: ser apos, apoi cremă, eventual sleeping mask 1–2 ori pe săptămână. Textura aspră — adesea celule moarte plus deshidratare — se îmbunătățește cu enzime blânde sau PHA, nu cu scrub. Petele solare superficiale pot fi atenuate cu vitamina C, niacinamidă, acid azelaic; cele mai adânci necesită tratamente profesionale (microdermabraziune, peelings controlate, protocoale cu acid). ",
        { text: "Microdermabraziunea", href: "/blog/ce-este-microdermabraziunea-beneficii" },
        " poate uniformiza textura și stimula reinnoirea celulară, dar doar după ce bariera e restaurată — de obicei după săptămâna 3–4 post-vacanță, cu SPF impecabil.",
      ],
    },
    {
      type: "h2",
      text: "Greșeli frecvente în recuperarea post-soare",
    },
    {
      type: "p",
      content: [
        "« Exfoliez ca să « scot » bronzul » — risc de iritare, pete mai intense, barieră distrusă. « Folosesc retinol ca să « repar » rapid » — pe piele vulnerabilă, retinolul poate arde și întârzia recuperarea. « Nu mai am nevoie de SPF, bronzul e deja acolo » — UV-urile continuă să accentueze petele; fără protecție, recuperarea e sabotată. « Fac acasă peeling cu lămâie/bicarbonat » — iritație, arsuri chimice, hiperpigmentare. « Ignor tenul până « trece singur » » — da, parțial trece, dar deshidratarea cronică și petele netratate devin mai greu de corectat pe termen lung. Abordarea echilibrată: calmare, apoi intervenție graduală, apoi profesional dacă e cazul.",
      ],
    },
    {
      type: "h2",
      text: "Când merită tratament profesional după vacanță",
    },
    {
      type: "p",
      content: [
        "Semne că rutina acasă a atins limitele: pete care nu se estompează după 4–6 săptămâni de SPF + ingrediente active blânde; textură persistent aspră; ten « cenușiu », fără luminozitate; pori încărcați după oprirea exfolierii; laxitate ușoară accentuată de deshidratare. ",
        L.hydrafacial,
        " e adesea primul pas post-vacanță: curățare blândă, hidratare, infuzie de antioxidanți — fără traumatism. ",
        L.microdermabraziune,
        " uniformizează textura după ce bariera e OK. ",
        L.hifu,
        " poate fi relevant dacă expunerea a accentuat laxitatea — stimulare colagen, aspect mai ferm. Consultația evaluează ce e sigur acum vs ce așteaptă încă 2–4 săptămâni.",
      ],
    },
    {
      type: "h2",
      text: "Protocol salon vs acasă — cum le combini",
    },
    {
      type: "p",
      content: [
        "Model recomandat: săptămânile 1–2 acasă (calmare), săptămânile 3–4 reintroducere ușoară + eventual prima ședință profesională blândă (Hydrafacial), săptămânile 5–8 tratamente țintite (microdermabraziune, pete) dacă e nevoie. Nu suprapune acasă retinol puternic cu peeling la salon în aceeași săptămână. Opțiunile post-vacanță — de la hidratare intensă la protocoale de luminozitate — sunt detaliate pe pagina de ",
        L.tratamenteFaciale,
        ", cu recomandare adaptată stadiului tău de recuperare. Dacă vrei să previi daunele data viitoare, ",
        { text: "pregătirea tenului pentru vară", href: "/blog/pregatire-ten-vara-pasi" },
        " explică pașii înainte de expunere, nu doar după.",
      ],
    },
    {
      type: "h2",
      text: "Timeline realist — ce poți aștepta",
    },
    {
      type: "ol",
      items: [
        ["Săptămâna 1–2: senzație de confort, reducerea uscăciunii și roșeii"],
        ["Săptămâna 3–4: textură mai fină, început de uniformizare a tonului"],
        ["Săptămâna 5–8: pete superficiale estompate vizibil cu rutină + eventual tratament"],
        ["Luni 3–6: pete adânci necesită protocoale repetate; SPF continuu obligatoriu"],
      ],
    },
    {
      type: "h2",
      text: "Prevenție pentru data viitoare — lecții din recuperare",
    },
    {
      type: "p",
      content: [
        "Recuperarea te învață ce să faci diferit: SPF generos, reaplicat, umbra în orele de vârf; hidratare zilnică chiar și când « nu simți » uscăciunea la mare; evitarea parfumurilor pe piele expusă la soare; duș imediat după clor sau apă sărată; pălărie, ochelari, protecție fizică. Nu e vorba de a evita soarele complet — ci de a reduce daunele cumulative. Tenul care se recuperează bine e tenul care a avut barieră solidă înainte de vacanță; investiția în îngrijire pre-expunere (vezi ghidul de pregătire estivală) costă mai puțin decât corectarea petelor după.",
      ],
    },
    {
      type: "h2",
      text: "Ten sensibil sau cu rosacee — precauții suplimentare",
    },
    {
      type: "p",
      content: [
        "Dacă ai ten sensibil, cuperoză sau rosacee, recuperarea post-soare cere și mai multă prudență. Soarele poate declanșa pusee de roșeață care persistă săptămâni după vacanță. Evită apă foarte fierbinte la spălare, produse cu alcool sau mentol, scrub-uri și tratamente termice acasă. Ingredientele calmante — azelaic acid în concentrație mică, centella, niacinamidă blândă — pot ajuta, dar introducerea e treptată. La salon, protocoalele agresive sunt contraindicate până la stabilizare; Hydrafacial blând sau hidratare profesională sunt adesea singurele opțiuni sigure în primele săptămâni. Comunică diagnosticul sau sensibilitatea înainte de programare — adaptarea protocolului previne regresul, nu doar disconfortul temporar.",
      ],
    },
    {
      type: "h2",
      text: "Alimentație, somn și stres — ce susține recuperarea",
    },
    {
      type: "p",
      content: [
        "Recuperarea tenului nu e doar topică. Deshidratarea internă — prea puțină apă, prea multă cafea sau alcool — menține uscăciunea chiar dacă aplici creme corecte. Antioxidanții din alimentație (legume colorate, fructe de pădure, nuci) susțin repararea celulară. Somnul insuficient crește cortizolul, care poate accentua inflamația și întârzia uniformizarea tonului. Stresul cronic se vede pe ten ca oboseală, cenușiu, uneori erupții — nu e cosmetic secundar, e parte din ecuație. Nu trebuie dietă perfectă; ci consecvență rezonabilă în săptămânile de recuperare, alături de rutina aplicată pe față.",
      ],
    },
    {
      type: "callout",
      title: "Ten care nu se recuperează după vacanță?",
      content: [
        "Solicită o programare evaluare la Claire Beauty — analizăm starea pielii tale post-vacanță și recomandăm protocolul potrivit pentru recuperare sigură.",
      ],
      link: L.tratamenteFaciale,
    },
  ],
  faqs: [
    {
      question: "Cât durează recuperarea tenului după soare?",
      answer:
        "Confortul și hidratarea revin în 1–2 săptămâni. Uniformizarea tonului și estomparea petelor superficiale: 4–8 săptămâni. Petele adânci pot necesita luni de tratament constant plus SPF zilnic.",
    },
    {
      question: "Pot folosi retinol imediat după vacanță?",
      answer:
        "Nu recomandat în prima 1–2 săptămâni. Pielea e vulnerabilă; retinolul poate irita. Reintrodu treptat după ce bariera e restaurată, de obicei săptămâna 3–4.",
    },
    {
      question: "Hydrafacial e sigur după expunere la soare?",
      answer:
        "Da, dacă nu ai arsură activă sau piele foarte inflamată. Hydrafacial e blând, hidratant — adesea ideal 2–4 săptămâni post-vacanță. Consultația confirmă dacă e momentul potrivit.",
    },
    {
      question: "Pete noi după soare — dispar singure?",
      answer:
        "Pete superficiale se pot estompa parțial cu timp și SPF strict. Majoritatea necesită ingrediente active sau tratamente profesionale pentru estompare semnificativă.",
    },
    {
      question: "Exfolierea ajută la « scoaterea » bronzului?",
      answer:
        "Exfolierea agresivă pe piele post-soare irită și poate accentua petele. Exfoliere blândă (enzime, PHA) după săptămâna 2–3 e OK; scrub-urile și AHA puternic — nu imediat.",
    },
    {
      question: "Pot face microdermabraziune după vacanță?",
      answer:
        "Da, dar nu în primele 2 săptămâni. Așteaptă ca pielea să nu mai fie sensibilă, roșie sau descamată. SPF impecabil înainte și după e obligatoriu.",
    },
    {
      question: "Tenul gras se deshidratează și după soare?",
      answer:
        "Da. Deshidratarea afectează toate tipurile de ten. Tenul gras poate produce mai mult sebum compensator — hidratarea rămâne esențială.",
    },
    {
      question: "Când merg la dermatolog, nu la salon?",
      answer:
        "Arsură severă, vezicule, durere intensă, pete care se modifică rapid (formă, culoare, margini), sau erupții suspecte necesită dermatolog. Recuperare estetică post-vacanță fără leziuni acute poate fi abordată la salon după evaluare.",
    },
  ],
}

export const recuperareTenDupaSoarePost: BlogPost = {
  ...post,
  readTimeMinutes: estimateReadTimeMinutes(post.blocks, post.faqs),
}
