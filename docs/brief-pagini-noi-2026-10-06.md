# Brief: 3 pagini noi de serviciu (6 oct 2026)

Scheletele există deja (`PlaceholderPage`), iar meniul, footerul, cardurile din hub-uri și
sitemap-ul sunt deja legate — commit `61a9295`. De scris: **conținutul** celor 3 pagini.

Sursa cifrelor: Keyword Planner, 6 oct 2026, geo Dolj (cerere locală) + România (formularea).
Fișier: `C:\Users\Mihai\CLAUDE\google-ads\promonet\research-clairebeauty-servicii-noi-2026-10-06.json`.

## Tiparul de respectat (copiat după `/hifu-facial-craiova`)

Pentru fiecare pagină:

| Fișier | Ce conține |
|---|---|
| `app/<slug>/page.tsx` | există ca schelet — se înlocuiește `PlaceholderPage` cu Hero + Sections + ServiceFAQ; **metadata se păstrează**, e scrisă pe research |
| `components/services/<nume>/<nume>-hero.tsx` | hero cu H1, subtitlu, 2 butoane (Sună / Programare) |
| `components/services/<nume>/<nume>-sections.tsx` | secțiunile de conținut |
| `lib/content/<nume>.ts` | `<nume>WhatsappMessage` + `<nume>Faqs` |

În `page.tsx` se adaugă, ca la HIFU: `JsonLd` cu `localBusinessSchema`, `serviceSchema`,
`breadcrumbSchema`, `faqSchema`, apoi `<Header />`, `<main className="pb-24 md:pb-0">`,
`<ServiceFAQ />`, `<Footer />`, `<WhatsAppButton />`, `<MobileCTA layout="triple" />`.

## Reguli de conținut (cerute de clientă / impuse de Google)

1. **Zero mențiuni „Dermapen" și „Hydrafacial"** — mărci scoase de pe site în septembrie.
   Se scrie „microneedling", respectiv „Hydrablast".
2. **Fără promisiuni de rezultat** („scapi garantat de vergeturi", „rezultate permanente").
   Se scrie „ameliorează", „reduce aspectul", „rezultatele diferă de la o persoană la alta".
3. **Fără limbaj medical pentru proceduri nemedicale**: nu „tratăm", ci „lucrăm asupra".
   Excepție: drenajul post-operator, care se face la recomandarea medicului.
4. Fiecare pagină are contraindicațiile ei, scurt și onest (sarcină, implanturi metalice,
   afecțiuni de piele active, perioada imediat după intervenție pentru RF).
5. Numărul de telefon afișat: **+40 757 851 882**.

---

## 1. `/cicatrici-vergeturi-craiova` — RF fracțional, 1.000 lei/ședință

**H1:** Tratament cicatrici și vergeturi în Craiova
**Componente:** `components/services/cicatrici-vergeturi/` · `lib/content/cicatrici-vergeturi.ts`

Pagina cea mai valoroasă: serviciul cel mai scump al salonului, fără pagină până acum.

**Căutări țintă** (RO/lună, dacă nu scrie altfel):
`radiofrecventa fractionata` 140 · `microneedling cu radiofrecventa` 110 · `cicatrici acnee` 90 ·
`semne post acneice` 210 · `pete post acneice` 140 · `tratament vergeturi laser pret` 90 ·
`cicatrice cezariana tratament` · `rf fractionat`

**Secțiuni:**
1. Ce rezolvă — vergeturi (sarcină, slăbire, creștere), cicatrici de acnee, cicatrici după
   operații și cezariană, textură neuniformă, laxitate ușoară.
2. Cum funcționează radiofrecvența fracționată — microzone de căldură în derm → producție de
   colagen nou. De explicat pe înțelesul clientei, fără jargon.
3. **„Fără laser" — diferențiatorul.** Oamenii caută „tratament vergeturi laser", dar salonul
   folosește radiofrecvență. De explicat într-un paragraf de ce RF e o alternativă validă,
   fără a denigra laserul. (Asta a ieșit din researchul din septembrie.)
4. Cum decurge o ședință, senzația, timpul de refacere, câte ședințe sunt uzual necesare.
5. Vergeturi vechi (albe) vs. noi (roșii) — ce se poate și ce nu. Onest.
6. Preț: **1.000 lei / ședință**. Link spre `/preturi`.
7. Contraindicații.

**FAQ (6):** Doare? · Câte ședințe îmi trebuie? · Merge și pe vergeturi albe, vechi? · Pot face
vara? · Cât durează până se văd rezultate? · Se poate pe cicatrice de cezariană și după cât timp
de la operație?

**Linkuri interne:** spre `/microneedling-craiova` (tratament complementar),
`/tratamente-faciale-craiova`, `/tratamente-corporale-craiova`, `/preturi`.
Dinspre: blogul `vergeturi-tratamente-rezultate` și `microneedling-ce-este-cum-functioneaza-rezultate`.

---

## 2. `/hifu-corporal-craiova` — HIFU pe corp, 800–1.100 lei/ședință

**H1:** HIFU corporal în Craiova
**Componente:** `components/services/hifu-corporal/` · `lib/content/hifu-corporal.ts`
**Imagini deja existente:** `claireImages.hifuCorporal`, `claireImages.cfuCorporal`

Pagina facială rămâne neatinsă la `/hifu-facial-craiova`. Atenție la canibalizare: pagina nouă
vorbește **doar despre corp**, iar cea facială doar despre față; fiecare o linkează pe cealaltă.

**Căutări țintă:** `hifu craiova` 70/lună **în Dolj** (cel mai bun termen local al salonului) ·
`hifu gusa` 480 RO · `hifu corporal` 260 RO · `hifu facial pret` 260 · `hifu pret` 110 ·
`hifu corporal pret` · `lifting facial fara operatie` 70

**Secțiuni:**
1. Pe ce zone — abdomen, flancuri, brațe, interiorul coapselor, genunchi, fesieri.
2. Ce face efectiv: fermitate și lifting, **nu** slăbire. De spus clar, altfel vin oameni cu
   așteptări greșite și rămân nemulțumiți.
3. HIFU corporal vs. HIFU facial — tabel sau două coloane, cu link spre pagina facială.
4. Cui i se potrivește: piele lăsată după slăbire sau după naștere, lipsă de fermitate.
   Cui nu: obezitate, așteptare de scădere în greutate.
5. Cum decurge, câte ședințe, în cât timp apar rezultatele (colagenul lucrează 8–12 săptămâni).
6. Preț: **800–1.100 lei / ședință**, în funcție de zonă.
7. Contraindicații.

**Linkuri interne:** `/hifu-facial-craiova`, `/radiofrecventa-corporala-craiova`,
`/remodelare-corporala-craiova`, `/preturi`.

---

## 3. `/drenaj-limfatic-post-operator-craiova` — 250 lei/ședință

**H1:** Drenaj limfatic post-operator în Craiova
**Componente:** `components/services/drenaj-post-operator/` · `lib/content/drenaj-post-operator.ts`

Pagina existentă de drenaj vorbește despre retenție de apă și picioare grele. Omul care tocmai
a făcut o liposucție nu se regăsește acolo — de aceea pagina separată.

**Căutări țintă:** `masaj limfatic` 1.900 RO · `pret drenaj limfatic` 170 · `drenaj limfatic pret` 140 ·
`drenaj limfatic dupa liposuctie` · `masaj dupa liposuctie` · `drenaj limfatic post operator` ·
`recuperare dupa abdominoplastie`. Volume mici, dar intenția e maximă și concurența aproape zero.

**Secțiuni:**
1. După ce intervenții: liposucție, abdominoplastie, BBL, mamoplastie, alte intervenții estetice
   sau chirurgicale.
2. De ce contează — reducerea edemului, a fibrozei, confort în recuperare. **Formulare prudentă:
   se face la recomandarea și cu acordul medicului curant.**
3. Când se începe și cât de des (de preluat exact de la clientă — nu inventăm protocoale).
4. Ce simte pacientul, cât durează o ședință.
5. Diferența față de drenajul limfatic clasic, cu link spre `/drenaj-limfatic-craiova`.
6. Preț: **250 lei / ședință**. De menționat dacă există pachete.
7. Când NU se face: infecție, febră, tromboză, fără acordul medicului.

**Linkuri interne:** `/drenaj-limfatic-craiova`, `/masaj-craiova`, `/preturi`.

---

## De făcut în plus, în același pas

1. **Cardul „RF Fractionat" de pe hub-ul facial nu are link.**
   `components/services/tratamente-faciale-craiova/tratamente-faciale-craiova-sections.tsx:132` —
   se adaugă `href: "/cicatrici-vergeturi-craiova"`.
2. **Bloc de trimitere pe pagina de drenaj clasic:** „Ai avut o intervenție chirurgicală?" →
   `/drenaj-limfatic-post-operator-craiova`. Acolo e clientul care plătește 250 lei ședința.
3. **`lib/content/pricing.ts`** — de adăugat cele 3 servicii cu preț și `href` spre paginile noi
   (acum lipsesc din lista de prețuri; „hifu pret", „microneedling pret", „drenaj limfatic pret"
   sunt printre cele mai căutate formulări din research).
4. **Verificare înainte de push:** `npm run build` trebuie să treacă, iar cele 3 rute să apară în
   listă. Erorile de tip din folderele `_backup_*` sunt vechi și nu intră în build.

## Ce rămâne nedecis (nu se scrie încă)

Clienta a mai cerut Ads pe **Endolase**, **Sonobeat** și **EMS Tesla**. Primele două nu există ca
termeni de căutare (zero rezultate în Keyword Planner) și nu am confirmare ce aparate sunt —
fără asta nu se poate scrie o pagină corectă. EMS Tesla apare deja în prețuri ca
„Electrostimulare Tesla, 80 lei" și are pagina `/electrostimulare-craiova`.
