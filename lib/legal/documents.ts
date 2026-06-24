import { legalOperator as o } from "./operator"

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
  list?: string[]
}

export const privacyPolicySections: LegalSection[] = [
  {
    id: "operator",
    title: "1. Operatorul de date",
    paragraphs: [
      `Operatorul datelor cu caracter personal este ${o.legalName}, denumit comercial ${o.brand}, cu sediul de activitate în ${o.locality}, ${o.region}, ${o.country}.`,
      `Contact pentru protecția datelor: ${o.email}, telefon ${o.phoneDisplay}.`,
    ],
  },
  {
    id: "scope",
    title: "2. Ce date prelucrăm",
    paragraphs: ["Putem prelucra următoarele categorii de date:"],
    list: [
      "date de identificare și contact (nume, telefon, e-mail) transmise prin formularul de contact, WhatsApp sau telefon",
      "date despre serviciul solicitat sau preferințe de programare",
      "date tehnice limitate (adresă IP, tip browser, pagini vizitate) prin cookie-uri, doar cu consimțământul tău pentru analiză",
      "conținutul mesajelor pe care ni le trimiți voluntar",
    ],
  },
  {
    id: "purpose",
    title: "3. Scopurile prelucrării",
    paragraphs: ["Datele sunt utilizate pentru:"],
    list: [
      "preluarea și gestionarea solicitărilor de programare",
      "comunicarea cu tine privind serviciile salonului",
      "îmbunătățirea experienței pe site (doar cu acord pentru cookie-uri analitice)",
      "respectarea obligațiilor legale aplicabile",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Temeiul legal",
    paragraphs: ["Prelucrăm datele în baza:"],
    list: [
      "consimțământului tău (formular contact, cookie-uri analitice)",
      "executării măsurilor precontractuale / contractuale (programări, ofertare servicii)",
      "interesului legitim (răspuns la solicitări, securitate site)",
      "obligațiilor legale, când este cazul",
    ],
  },
  {
    id: "retention",
    title: "5. Perioada de stocare",
    paragraphs: [
      "Păstrăm datele doar cât este necesar scopurilor menționate: mesajele de contact — până la soluționarea solicitării și maximum 24 de luni; date analitice agregate — conform politicii cookie; documente contabile/fiscale — conform termenelor legale.",
    ],
  },
  {
    id: "recipients",
    title: "6. Destinatari și transferuri",
    paragraphs: [
      "Nu vindem datele tale. Putem utiliza furnizori tehnici (hosting, Google Analytics pentru statistici web) care acționează ca împuterniciți, cu obligații contractuale de confidențialitate. Transferul în afara SEE are loc doar dacă există garanții adecvate (ex. clauze contractuale standard).",
    ],
  },
  {
    id: "rights",
    title: "7. Drepturile tale",
    paragraphs: ["Conform GDPR, ai dreptul la:"],
    list: [
      "informare și acces la date",
      "rectificare și ștergere („dreptul de a fi uitat”), în limitele legii",
      "restricționarea prelucrării și opoziție",
      "portabilitatea datelor, când este aplicabil",
      "retragerea consimțământului oricând, fără a afecta legalitatea prelucrării anterioare",
      "depunerea plângerii la ANSPDCP",
    ],
  },
  {
    id: "security",
    title: "8. Securitate",
    paragraphs: [
      "Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor împotriva accesului neautorizat, pierderii sau alterării.",
    ],
  },
  {
    id: "updates",
    title: "9. Actualizări",
    paragraphs: [
      `Ultima actualizare: ${o.lastUpdated}. Modificările relevante vor fi publicate pe această pagină.`,
    ],
  },
]

export const cookiePolicySections: LegalSection[] = [
  {
    id: "what",
    title: "1. Ce sunt cookie-urile",
    paragraphs: [
      "Cookie-urile sunt fișiere mici stocate în browserul tău. Ne ajută să oferim funcționalități esențiale și, doar cu acordul tău, să înțelegem cum este utilizat site-ul.",
    ],
  },
  {
    id: "types",
    title: "2. Tipuri de cookie-uri folosite",
    paragraphs: ["Pe clairebeauty.ro utilizăm:"],
    list: [
      "Cookie-uri strict necesare — preferința ta privind consimțământul (stocată local, fără tracking)",
      "Cookie-uri analitice (opționale) — Google Analytics 4, statistici agregate de vizitare (ex. _ga, _ga_*), activate doar dacă apeși „Accept toate”",
    ],
  },
  {
    id: "manage",
    title: "3. Cum îți gestionezi preferințele",
    paragraphs: [
      "La prima vizită poți alege „Accept toate” sau „Doar necesare”. Poți șterge oricând consimțământul ștergând datele site-ului din browser sau revizitând setările cookie din banner (reîncarcă pagina după ștergerea stocării locale).",
    ],
  },
  {
    id: "third",
    title: "4. Cookie-uri terțe",
    paragraphs: [
      "Google Analytics (Google Ireland Limited) poate seta cookie-uri proprii când ai acceptat cookie-urile analitice. Linkurile către rețele sociale (Instagram, Facebook, WhatsApp) pot plasa cookie-uri proprii când interacționezi cu ele. Consultă politicile acelor platforme.",
    ],
  },
  {
    id: "contact",
    title: "5. Contact",
    paragraphs: [
      `Întrebări despre cookie-uri: ${o.email}. Ultima actualizare: ${o.lastUpdated}.`,
    ],
  },
]

export const gdprSections: LegalSection[] = [
  {
    id: "intro",
    title: "1. Despre GDPR",
    paragraphs: [
      "Regulamentul (UE) 2016/679 privind protecția datelor (GDPR) stabilește drepturile persoanelor vizate și obligațiile operatorilor care prelucrează date cu caracter personal. Această pagină explică cum poți exercita drepturile tale în relația cu Claire Beauty Craiova.",
      "Pentru detalii complete despre ce date colectăm, de ce și cât timp le păstrăm, consultă și Politica de confidențialitate.",
    ],
  },
  {
    id: "operator",
    title: "2. Operatorul de date",
    paragraphs: [
      `Operator: ${o.legalName} (${o.brand}), ${o.locality}, ${o.region}, ${o.country}.`,
      `Contact protecția datelor: ${o.email}, telefon ${o.phoneDisplay}. Nu am desemnat un responsabil cu protecția datelor (DPO), însă răspundem direct la solicitările privind datele personale la adresa de e-mail de mai sus.`,
    ],
  },
  {
    id: "categories",
    title: "3. Categorii de date și scopuri",
    paragraphs: ["Prelucrăm date personale în principal pentru:"],
    list: [
      "gestionarea solicitărilor de contact și programări",
      "comunicarea privind serviciile salonului",
      "analiză web agregată (Google Analytics), doar cu consimțământul tău explicit",
      "respectarea obligațiilor legale, când este cazul",
    ],
  },
  {
    id: "rights",
    title: "4. Drepturile tale (GDPR)",
    paragraphs: ["Ai următoarele drepturi, în condițiile prevăzute de lege:"],
    list: [
      "Dreptul de acces — poți solicita confirmarea prelucrării și o copie a datelor tale",
      "Dreptul la rectificare — poți cere corectarea datelor inexacte sau incomplete",
      "Dreptul la ștergere („dreptul de a fi uitat”) — în anumite situații, poți solicita ștergerea datelor",
      "Dreptul la restricționarea prelucrării — poți limita modul în care folosim datele tale",
      "Dreptul la opoziție — te poți opune prelucrării bazate pe interes legitim",
      "Dreptul la portabilitate — poți primi datele într-un format structurat, când este aplicabil",
      "Dreptul de a retrage consimțământul — oricând, pentru prelucrările bazate pe consimțământ (ex. cookie-uri analitice), fără a afecta legalitatea prelucrării anterioare",
    ],
  },
  {
    id: "exercise",
    title: "5. Cum îți exercită drepturile",
    paragraphs: [
      `Trimite o solicitare scrisă la ${o.email}, cu subiect „Solicitare GDPR”, menționând dreptul pe care dorești să îl exerciți și datele de identificare necesare pentru verificare.`,
      "Răspundem în termen de maximum 30 de zile de la confirmarea identității tale. În cazuri complexe, termenul poate fi prelungit cu încă 60 de zile, cu informare prealabilă.",
      "Serviciul este gratuit, cu excepția solicitărilor manifest nefondate, excesive sau repetitive.",
    ],
  },
  {
    id: "complaint",
    title: "6. Plângere la autoritate",
    paragraphs: [
      `Dacă consideri că drepturile tale nu au fost respectate, poți depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP): ${o.anspdcpUrl}.`,
      "Recomandăm totuși să ne contactezi mai întâi — vom încerca să rezolvăm orice problemă direct și prompt.",
    ],
  },
  {
    id: "cookies",
    title: "7. Consimțământ cookie-uri analitice",
    paragraphs: [
      "Google Analytics este activat doar dacă alegi „Accept toate” în bannerul de cookie-uri. Poți retrage acordul ștergând datele site-ului din browser (inclusiv preferința de consimțământ) sau contactându-ne.",
      "Detalii tehnice despre cookie-uri: Politica de cookie.",
    ],
  },
  {
    id: "updates",
    title: "8. Actualizări",
    paragraphs: [
      `Ultima actualizare: ${o.lastUpdated}. Modificările vor fi publicate pe această pagină.`,
    ],
  },
]

export const termsSections: LegalSection[] = [
  {
    id: "intro",
    title: "1. Informații generale",
    paragraphs: [
      `Prezentele termeni guvernează utilizarea site-ului ${o.url} și relația cu ${o.legalName} (${o.brand}), salon body spa din ${o.locality}. Accesând site-ul, accepți acești termeni.`,
    ],
  },
  {
    id: "services",
    title: "2. Servicii",
    paragraphs: [
      "Informațiile de pe site au caracter informativ. Detaliile procedurilor, durata, contraindicațiile și prețurile finale se confirmă la programare sau consultație în salon.",
    ],
  },
  {
    id: "appointments",
    title: "3. Programări și anulări",
    paragraphs: ["Pentru programări:"],
    list: [
      "contactează-ne telefonic, WhatsApp, e-mail sau formularul de contact",
      "te rugăm să anunți anularea cu cel puțin 24 de ore înainte",
      "ne rezervăm dreptul de a refuza servicii în caz de contraindicații medicale sau comportament neadecvat",
    ],
  },
  {
    id: "liability",
    title: "4. Limitarea răspunderii",
    paragraphs: [
      "Depunem eforturi pentru acuratețea informațiilor, însă nu garantăm absența erorilor tehnice sau tipografice. Rezultatele tratamentelor variază în funcție de tipul de ten, stil de viață și indicațiile specialistului.",
    ],
  },
  {
    id: "ip",
    title: "5. Proprietate intelectuală",
    paragraphs: [
      "Conținutul site-ului (texte, imagini, logo, structură) aparține operatorului sau licențiatorilor și nu poate fi copiat fără acord scris.",
    ],
  },
  {
    id: "links",
    title: "6. Linkuri externe",
    paragraphs: [
      "Site-ul poate conține linkuri către platforme terțe. Nu suntem responsabili pentru conținutul sau politicile acelor site-uri.",
    ],
  },
  {
    id: "law",
    title: "7. Lege aplicabilă",
    paragraphs: [
      "Termenii sunt guvernați de legea română. Litigiile se soluționează pe cale amiabilă, iar în lipsa acordului, de instanțele competente din România.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact",
    paragraphs: [
      `${o.brand} · ${o.email} · ${o.phoneDisplay}. Ultima actualizare: ${o.lastUpdated}.`,
    ],
  },
]
