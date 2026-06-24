# Export complet — Draft articole blog Claire Beauty Craiova

**Scop document:** context pentru ChatGPT sau alt AI — tot ce s-a creat până acum (20 articole draft), regulile folosite, articolele publicate existente și ce rămâne de generat.

**Brand:** Claire Beauty Craiova (salon estetic Craiova — tratamente faciale, corporale, masaj, remodelare)  
**Status drafturi:** nepublicate — NU sunt în `posts.ts`, NU apar pe site  
**Data export:** 7 iunie 2026

---

## 1. Context proiect

### Ce există deja pe site (20 articole PUBLICATE)

| Slug | Subiect |
|------|---------|
| `ce-este-hydrafacial-beneficii-craiova` | Hydrafacial — beneficii |
| `cum-scapi-de-celulita-ghid-complet` | Celulită — ghid complet |
| `masaj-anticelulitic-vs-drenaj-limfatic` | Anticelulitic vs drenaj |
| `remodelare-corporala-fara-operatie-tehnologii` | Remodelare corporală — tehnologii |
| `beneficii-masaj-terapeutic-stres-dureri` | Masaj terapeutic |
| `microneedling-vs-dermapen-diferente` | Microneedling vs Dermapen |
| `hifu-facial-lifting-nechirurgical` | HIFU facial |
| `cum-pregatesti-tenul-tratament-facial` | Pregătire ten tratament |
| `ce-este-reflexoterapia-beneficii` | Reflexoterapie |
| `semne-ca-ai-nevoie-de-drenaj-limfatic` | Semne drenaj limfatic |
| `ce-este-microdermabraziunea-beneficii` | Microdermabraziune |
| `ghid-complet-drenaj-limfatic` | Ghid drenaj limfatic |
| `electrostimulare-corporala-tonifiere` | Electrostimulare |
| `radiofrecventa-corporala-ghid` | Radiofrecvență corporală |
| `cum-alegi-tratament-facial-tip-ten` | Alegere tratament după tip ten |
| `beneficii-masaj-relaxare-craiova` | Masaj relaxare |
| `cum-scapi-de-puncte-negre-corect` | Puncte negre |
| `tratamente-corporale-ghid-incepatori` | Tratamente corporale începători |
| `vergeturi-tratamente-rezultate` | Vergeturi — tratamente |
| `masaj-terapeutic-vs-anticelulitic-cand` | Masaj terapeutic vs anticelulitic |

### Hub-uri și servicii (pentru interlinking)

- **Hub facial:** `/tratamente-faciale-craiova` — Hydrafacial, HIFU, microdermabraziune, microneedling, Dermapen
- **Hub corporal:** `/tratamente-corporale-craiova` — remodelare, RF, electrostimulare
- **Hub masaj:** `/masaj-craiova` — terapeutic, anticelulitic, drenaj, reflexoterapie
- **Pagini serviciu separate:** `/hydrafacial-craiova`, `/hifu-craiova`, `/dermapen-craiova`, etc.

### Reguli SEO obligatorii (respectate în toate drafturile)

- **Fără** keyword principal de tip `[serviciu] Craiova` în title/meta blog
- **Fără** canibalizare cu paginile de serviciu (blog = educație, cauze, comparații, FAQ)
- Fiecare articol: **1500–2500 cuvinte**, **H1 unic** (= title), **title SEO unic**, **meta description unică**
- **6–10 H2**, **8 FAQ** cu FAQ Schema (generată automat la publicare)
- Minim **3 linkuri servicii**, **2 linkuri articole** (publicate sau draft), **1 link hub**
- Ton: premium, natural, profesional, română
- Fără texte repetitive între articole
- CTA final spre consultație Claire Beauty Craiova

### Structură tehnică fișier draft

```
lib/content/blog/articles/drafts/[slug].ts
lib/content/blog/draft-posts.ts  ← agregator (20 drafturi, neimportat în posts.ts)
```

Fiecare fișier exportă un `BlogPost` cu: slug, title, excerpt, metaDescription, keywords, tag, publishedAt, image, relatedService, recommendedServices, hubLink, relatedArticles, blocks (p/h2/h3/ul/callout), faqs (8 perechi Q&A).

---

## 2. BATCH 1 — 10 articole draft (Luna 1, iulie 2026)

### 2.1 `de-ce-apare-retentia-de-apa-cauze`
- **Tip:** Probleme | **Tag:** Masaj & drenaj | **Hub:** Masaj Craiova
- **Title SEO / H1:** De ce apare retenția de apă: 7 cauze frecvente explicate simplu
- **Meta:** Retenția de apă explicată simplu: cauze frecvente, semne și când merită drenaj limfatic sau masaj. Ghid informativ de la Claire Beauty Craiova.
- **Excerpt:** Retenția de apă nu e mereu despre cât bei. Află cauzele reale — de la alimentație și hormoni la circulație — și când o abordare dedicată chiar face diferența.
- **Keywords:** retenție apă cauze, de ce rețin apă, retenție lichide picioare, cauze edeme, retenție apă tratament
- **H2:** 12 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii linkate:** Drenaj limfatic, Masaj, Tratamente corporale, Masaj anticelulitic
- **Articole linkate:** Semne drenaj limfatic, Ghid complet drenaj limfatic
- **Unghi editorial:** Cauze retenție apă — NU protocol drenaj (există deja ghid)

---

### 2.2 `pregatire-ten-vara-pasi`
- **Tip:** Sezonier | **Tag:** Tratamente faciale | **Hub:** Tratamente faciale
- **Title SEO / H1:** Pregătirea tenului pentru vară: pași esențiali înainte de sezonul cald
- **Meta:** Pregătește tenul pentru vară: SPF, hidratare, exfoliere blândă și tratamente recomandate înainte de soare. Ghid practic Claire Beauty Craiova.
- **Excerpt:** Vară fără surprize pe ten: ce ajustezi în rutină, ce tratamente faciale merită înainte de sezon și cum eviți petele și deshidratarea.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente faciale, Hydrafacial, Microdermabraziune
- **Articole:** Cum pregătești tenul tratament facial, Cum scapi de puncte negre
- **Unghi:** Pre-vară — complementar cu `recuperare-ten-dupa-soare` (post-soare, batch 2)

---

### 2.3 `picioare-grele-seara-cauze`
- **Tip:** Probleme | **Tag:** Masaj & drenaj | **Hub:** Masaj Craiova
- **Title SEO / H1:** Picioare grele seara: cauze frecvente și când merită o abordare dedicată
- **Meta:** Picioare grele seara — cauze de la circulație la retenție și obiceiuri zilnice. Află când masajul sau drenajul limfatic chiar ajută.
- **Excerpt:** Senzația de picioare grele la final de zi are explicații concrete. Înțelege cauzele și semnele că ai nevoie de mai mult decât odihnă.
- **H2:** 13 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Drenaj, Masaj, Masaj terapeutic, Reflexoterapie
- **Articole:** Semne drenaj, Beneficii masaj relaxare
- **Unghi:** Picioare grele seara — distinct de retenție apă generală (#1)

---

### 2.4 `masaj-manual-vs-aparat-remodelare`
- **Tip:** Comparativ | **Tag:** Tratamente corporale | **Hub:** Tratamente corporale
- **Title SEO / H1:** Masaj manual sau aparat de remodelare: ce alegi în funcție de obiectiv
- **Meta:** Masaj manual vs aparat remodelare corporală: diferențe, obiective, durere, frecvență. Ghid comparativ pentru decizie informată.
- **Excerpt:** Nu e vorba despre « mai bun » ci despre « potrivit pentru tine ». Comparăm masajul manual cu electrostimularea și radiofrecvența pe obiective reale.
- **H2:** 12 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Remodelare corporală, Electrostimulare, RF corporală, Masaj anticelulitic
- **Articole:** Remodelare tehnologii, Tratamente corporale ghid începători
- **FAQ exemple:** Pot alege doar masaj manual? / RF sau masaj anticelulitic pentru coapse?

---

### 2.5 `cat-dureaza-rezultate-tratamente-estetice`
- **Tip:** FAQ | **Tag:** Tratamente faciale | **Hub:** Tratamente faciale
- **Title SEO / H1:** Cât durează până vezi rezultate la tratamente estetice: așteptări realiste pe tipuri
- **Meta:** Cât durează rezultatele la Hydrafacial, HIFU, Dermapen, microdermabraziune și tratamente corporale? Așteptări realiste pe tipuri de proceduri.
- **Excerpt:** Prima ședință sau a cincea? Timeline-uri realiste pentru față și corp — ca să știi ce aștepți și când e normal să nu vezi încă diferența.
- **H2:** 12 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente faciale, Hydrafacial, HIFU, Dermapen
- **Articole:** Cum alegi tratament facial tip ten, Hydrafacial beneficii
- **FAQ exemple:** Cât durează efectul Hydrafacial? / Când apare liftingul după HIFU?

---

### 2.6 `de-ce-apare-celulita-cauze-mituri`
- **Tip:** Probleme | **Tag:** Tratamente corporale | **Hub:** Tratamente corporale
- **Title SEO / H1:** De ce apare celulita: factori reali, mituri demontate și ce poți controla
- **Meta:** De ce apare celulita — factori genetici, hormonali și de stil de viață. Mituri demontate și ce poți controla cu adevărat.
- **Excerpt:** Celulita nu e despre greutate. Demontăm miturile, explicăm factorii reali și clarificăm ce poți influența — fără promisiuni false.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Masaj anticelulitic, Remodelare, Drenaj
- **Articole:** Celulita ghid complet, Masaj vs drenaj
- **Unghi:** CAUZE ONLY — nu duplică ghidul `cum-scapi-de-celulita-ghid-complet`

---

### 2.7 `tratamente-inainte-de-concediu`
- **Tip:** Sezonier | **Tag:** Tratamente corporale | **Hub:** Tratamente corporale
- **Title SEO / H1:** Tratamente recomandate înainte de concediu: față și corp, cu timing realist
- **Meta:** Tratamente faciale și corporale înainte de vacanță: ce programezi, cu cât timp înainte și ce eviți. Planificare realistă pre-concediu.
- **Excerpt:** Vacanța perfectă începe cu un plan — nu cu tratamente făcute în ultima zi. Timeline pentru față și corp, cu recomandări clare de timing.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Remodelare, Tratamente faciale, Drenaj, Masaj anticelulitic
- **Articole:** Tratamente corporale ghid, Pregătire ten tratament
- **FAQ exemple:** Cu cât timp înainte de vacanță? / Merită HIFU înainte de concediu?

---

### 2.8 `cauze-ten-tern-fara-stralucire`
- **Tip:** Probleme | **Tag:** Tratamente faciale | **Hub:** Tratamente faciale
- **Title SEO / H1:** Ten tern și fără strălucire: cauzele reale și obiceiurile care agravează problema
- **Meta:** Ten tern, cenușiu, fără strălucire — cauze reale de la dead skin la deshidratare și stres. Obiceiuri care agravează și ce funcționează.
- **Excerpt:** Lipsa strălucirii nu se rezolvă doar cu highlighter. Identifică cauzele reale — de la acumulare celulară la obiceiuri zilnice — și abordarea corectă.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente faciale, Hydrafacial, Microdermabraziune, HIFU
- **Articole:** Microdermabraziune beneficii, Puncte negre
- **FAQ exemple:** Tenul tern = pielea uscată? / HIFU ajută la ten tern sau doar lifting?

---

### 2.9 `cat-de-des-tratamente-faciale`
- **Tip:** FAQ | **Tag:** Tratamente faciale | **Hub:** Tratamente faciale
- **Title SEO / H1:** Cât de des poți face tratamente faciale: frecvențe recomandate pe obiective
- **Meta:** Frecvența tratamentelor faciale: cât de des Hydrafacial, Dermapen, microdermabraziune, HIFU. Ghid pe obiective și tip de ten.
- **Excerpt:** Prea des sau prea rar — ambele pot fi problemă. Frecvențe recomandate pe proceduri și obiective, ca să maximizezi rezultatele fără supra-solicitare.
- **H2:** 13 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente faciale, Hydrafacial, Dermapen, Microdermabraziune
- **Articole:** Pregătire ten tratament, Alegere tip ten
- **FAQ exemple:** Pot face Hydrafacial lunar? / Cât timp între ședințe Dermapen?

---

### 2.10 `pori-dilatati-cauze-obiceiuri`
- **Tip:** Probleme | **Tag:** Tratamente faciale | **Hub:** Tratamente faciale
- **Title SEO / H1:** Pori dilatați: de ce apar și ce obiceiuri îi fac mai vizibili
- **Meta:** Pori dilatați — cauze genetice, sebum, îmbătrânire și obiceiuri care îi accentuează. Ce poți schimba acasă și când merită tratament profesional.
- **Excerpt:** Pori vizibili nu sunt o condamnare. Înțelege de ce apar, ce obiceiuri îi agravează și ce abordări chiar îmbunătățesc aspectul pe termen lung.
- **H2:** 12 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Microdermabraziune, Hydrafacial, Tratamente faciale, Microneedling
- **Articole:** Puncte negre, Microdermabraziune beneficii
- **Unghi:** Cauze pori — distinct de `cum-scapi-de-puncte-negre-corect`

---

## 3. BATCH 2 — 10 articole draft (Săpt. 4 iul + Luna 2 aug 2026)

### 3.1 `curatare-faciala-acasa-vs-salon`
- **Tip:** Comparativ (#10 strategie) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Curățare facială acasă vs tratament profesional: limite, riscuri și când treci la salon
- **Meta:** Curățare facială acasă vs salon: limite, riscuri și semne că ai nevoie de tratament profesional. Ghid practic pentru ten curat, fără iritare sau supra-exfoliere.
- **Excerpt:** Demachierea și exfolierea acasă sunt esențiale — dar nu înlocuiesc o curățare profesională. Află ce poți face singură, unde apar riscurile și când merită o ședință la salon.
- **H2:** 9 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Hydrafacial, Tratamente faciale, Microdermabraziune, Dermapen
- **Articole publicate:** Puncte negre, Pregătire ten tratament
- **Draft linkat:** Ten tern cauze (batch 1)
- **FAQ:** Pot înlocui salonul cu produse acasă? / Hydrafacial sau curățare clasică? / Aparatul de curățat porii e periculos?

---

### 3.2 `cat-de-des-tratamente-corporale`
- **Tip:** FAQ (#29 strategie) | **Tag:** Tratamente corporale
- **Title SEO / H1:** Cât de des poți face tratamente corporale: ghid pe protocoale și obiective
- **Meta:** Frecvența tratamentelor corporale: drenaj, anticelulitic, remodelare, RF. Cât de des, câte ședințe, ce se întâmplă dacă sari o ședință.
- **Excerpt:** Față are un calendar, corpul altul. Frecvențe recomandate pentru drenaj, anticelulitic și remodelare — adaptate obiectivului tău, nu unui șablon generic.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente corporale, Remodelare, Anticelulitic, Drenaj
- **Articole:** Tratamente corporale ghid, Masaj vs drenaj
- **Draft:** Masaj vs aparat, Cât durează rezultate
- **Unghi:** Corp vs față — pereche cu `cat-de-des-tratamente-faciale`

---

### 3.3 `recuperare-ten-dupa-soare`
- **Tip:** Sezonier (#26) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Recuperarea tenului după expunerea la soare: ce faci corect în primele săptămâni
- **Meta:** Ten după soare: cum recuperezi corect pielea expusă — hidratare, ce eviți, când revii la exfoliere și tratamente faciale. Ghid post-vacanță.
- **Excerpt:** După vacanță, tenul arată obosit, uscat sau cu pete noi. Pașii corecți de recuperare — ce faci, ce amâni și când revii la tratamente profesionale.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Tratamente faciale, Hydrafacial, Microdermabraziune, HIFU
- **Articole:** Pregătire ten, Microderm beneficii
- **Draft:** Pregătire ten vară
- **Unghi:** POST-soare — complementar cu batch 1 pre-vară

---

### 3.4 `ce-evitat-dupa-tratamente-estetice`
- **Tip:** FAQ (#30) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Ce trebuie evitat după exfoliere, microneedling și radiofrecvență: checklist post-procedură
- **Meta:** Checklist post-procedură: ce eviți după microdermabraziune, microneedling, Dermapen, radiofrecvență. Soare, sport, produse — ghid clar.
- **Excerpt:** Primele 48 de ore după un tratament decid mult din rezultat. Checklist clar: ce eviți, ce folosești și când revii la rutina normală.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Dermapen, Microneedling, Microdermabraziune, RF
- **Articole:** Pregătire ten, Microneedling vs Dermapen
- **Draft:** Frecvență faciale
- **FAQ:** Machiaj după microneedling? / Când revin la retinol? / Pot înota după Dermapen?

---

### 3.5 `de-ce-apar-vergeturile-cauze`
- **Tip:** Probleme (#5) | **Tag:** Tratamente corporale
- **Title SEO / H1:** Vergeturi: de ce apar și la cine sunt mai frecvente
- **Meta:** Vergeturi — cauze: sarcină, creștere rapidă, hormoni, genetică. La cine apar mai des și ce NU le cauzează. Ghid informativ, fără promisiuni.
- **Excerpt:** Vergeturile nu apar doar la sarcină și nu țin de greutate. Factorii reali, miturile despre prevenție și când merită să cauți soluții profesionale.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Remodelare, Microneedling, RF, Tratamente corporale
- **Articole:** Vergeturi tratamente, Remodelare tehnologii
- **Unghi:** CAUZE ONLY — link explicit spre `vergeturi-tratamente-rezultate`

---

### 3.6 `colagen-explicat-simplu`
- **Tip:** Educațional (#15) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Colagenul explicat simplu: ce face, de ce scade și cum îl susții corect
- **Meta:** Colagen — ce face în piele, de ce scade odată cu vârsta, mituri despre creme și suplimente. Cum îl susții corect: acasă și la salon.
- **Excerpt:** Colagenul e buzzword-ul beauty — dar ce face cu adevărat? Explicat simplu: rol, declin, mituri și metode care chiar stimulează producția naturală.
- **H2:** 11 | **FAQ:** 8 | **readTime:** ~9 min
- **Servicii:** Microneedling, Dermapen, HIFU, Tratamente faciale
- **Articole:** Microneedling vs Dermapen, HIFU candidat
- **Draft:** Ten tern cauze
- **FAQ:** Colagenul din cremă pătrunde? / Suplimentele ajută tenul? / HIFU și colagen?

---

### 3.7 `detoxifiere-limfatica-ce-inseamna`
- **Tip:** Educațional (#17) | **Tag:** Masaj & drenaj
- **Title SEO / H1:** Detoxifierea limfatică: ce înseamnă cu adevărat (fără mituri wellness)
- **Meta:** Detox limfatic — ce înseamnă cu adevărat, ce mituri wellness demontăm și cum se leagă de drenaj limfatic profesional. Explicat simplu.
- **Excerpt:** « Detox limfatic » sună bine în marketing — dar ce e real și ce e mit? Separăm faptele de promisiuni și explicăm cum funcționează sistemul limfatic.
- **H2:** 10 | **FAQ:** 8 | **readTime:** ~8 min
- **Servicii:** Drenaj, Masaj, Anticelulitic, Tratamente corporale
- **Articole:** Ghid drenaj, Semne drenaj
- **Draft:** Retenție apă cauze
- **Unghi:** Concept educativ — NU protocol (există ghid drenaj)

---

### 3.8 `piele-lasa-cauze-fara-operatie`
- **Tip:** Probleme (#6) | **Tag:** Tratamente corporale
- **Title SEO / H1:** Pielea lăsată: cauze și ce se poate îmbunătăți fără operație
- **Meta:** Pielea lăsată — cauze după slăbire, sarcină, vârstă. Ce se poate îmbunătăți fără operație: RF, remodelare, electrostimulare. Așteptări realiste.
- **Excerpt:** Laxitatea pielii are cauze clare — și soluții care nu implică neapărat operație. Ce funcționează, ce limite există și când e realist să aștepți îmbunătățiri.
- **H2:** 14 | **FAQ:** 8 | **readTime:** ~10 min
- **Servicii:** RF corporală, Remodelare, Electrostimulare, Tratamente corporale
- **Articole:** Remodelare tehnologii, RF ghid
- **Draft:** Celulita cauze

---

### 3.9 `lifting-nechirurgical-vs-chirurgical`
- **Tip:** Comparativ (#11) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Lifting nechirurgical vs lifting chirurgical: așteptări realiste și diferențe cheie
- **Meta:** Lifting nechirurgical vs chirurgical — diferențe, cost, recuperare, durabilitate. HIFU, radiofrecvență vs facelift. Ghid pentru decizie informată.
- **Excerpt:** Nu e o competiție — sunt opțiuni diferite pentru nevoi diferite. Comparăm lifting nechirurgical (HIFU, RF) cu cel chirurgical: ce obții, ce riști, ce alegi când.
- **H2:** 14 | **FAQ:** 8 | **readTime:** ~10 min
- **Servicii:** HIFU, Tratamente faciale, Dermapen, Microneedling
- **Articole:** HIFU candidat, Alegere tip ten
- **Draft:** Cât durează rezultate
- **⚠️ Risc canibalizare MEDIE** cu `hifu-facial-lifting-nechirurgical` — verificare GSC la publicare

---

### 3.10 `dermapen-peeling-laser-cicatrici-textura`
- **Tip:** Comparativ (#12) | **Tag:** Tratamente faciale
- **Title SEO / H1:** Dermapen, peeling sau laser: cum alegi terapia potrivită pentru cicatrici și textură
- **Meta:** Dermapen, peeling sau laser pentru cicatrici și textură — comparație pe tip de leziune, recuperare, ședințe. Ghid de alegere informată.
- **Excerpt:** Cicatrici post-acnee, textură neregulată, pete — trei tehnologii, trei abordări. Cum alegi între Dermapen, peeling chimic și laser, fără presiune comercială.
- **H2:** 14 | **FAQ:** 8 | **readTime:** ~10 min
- **Servicii:** Dermapen, Microneedling, Microdermabraziune, Tratamente faciale
- **Articole:** Microneedling vs Dermapen, Microderm beneficii
- **Draft:** Pori dilatați
- **⚠️ Risc canibalizare MEDIE** cu `microneedling-vs-dermapen-diferente` + pagina `/dermapen-craiova`

---

## 4. Mapare cluster — unde se încadrează drafturile

```
Homepage (Claire Beauty Craiova)
├── Hub Masaj (/masaj-craiova)
│   └── Draft: retenție apă, picioare grele, detox limfatic
├── Hub Facial (/tratamente-faciale-craiova)
│   └── Draft: pregătire vară, ten tern, frecvență faciale, pori, curățare acasă vs salon,
│       recuperare soare, ce evitat post-procedură, colagen, lifting nechir vs chir,
│       dermapen/peeling/laser, cât durează rezultate
└── Hub Corporal (/tratamente-corporale-craiova)
    └── Draft: masaj vs aparat, celulita cauze, înainte concediu, frecvență corporale,
        vergeturi cauze, piele lăsată
```

---

## 5. Riscuri canibalizare — sumar

| Severitate | Articole | Acțiune |
|------------|----------|---------|
| **Medie** | lifting-nechirurgical-vs-chirurgical | Monitorizare GSC vs HIFU |
| **Medie** | dermapen-peeling-laser-cicatrici-textura | Confirmă title fără „Dermapen Craiova" |
| **Scăzută** | detox limfatic, vergeturi cauze, curatare acasa, frecvență corporale, recuperare soare | Diferențiere OK prin unghi editorial |
| **Niciunul** | Keyword serviciu + Craiova | ✅ Respectat |

---

## 6. Ce RĂMÂNE de generat — BATCH 3 (10 articole)

Conform `docs/strategie-topic-cluster-30-articole.md`:

| # | Slug propus | Titlu / subiect | Tip |
|---|-------------|-----------------|-----|
| 7 | `semne-imbatranire-prematura-ten` | Semne de îmbătrânire prematură la ten | Probleme |
| 13 | `radiofrecventa-vs-electrostimulare-diferente` | Radiofrecvență vs electrostimulare — diferențe | Comparativ |
| 16 | `elasticitate-piele-ce-o-afecteaza` | Elasticitatea pielii — ce o afectează | Educațional |
| 18 | `hidratare-ten-impact-aspect-piele` | Hidratarea tenului — impact asupra aspectului | Educațional |
| 14 | `masaj-relaxare-vs-reflexoterapie` | Masaj relaxare vs reflexoterapie | Comparativ |
| 19 | `circulatie-limfatica-rol-obiceiuri` | Circulația limfatică — rol și obiceiuri | Educațional |
| 20 | `bariera-cutanata-protectie` | Bariera cutanată — protecție și îngrijire | Educațional |
| 21 | `stres-piele-cortizol-ten` | Stres, cortizol și impactul asupra tenului | Probleme |
| 22 | `tonifiere-musculara-masaj-tehnologii` | Tonifiere musculară — masaj vs tehnologii | Comparativ |
| 24 | `protejare-ten-iarna` | Protejarea tenului iarna | Sezonier |

---

## 7. Checklist publicare (când se decid drafturile)

1. Adaugă imagini JPG: `public/images/blog/drafts/[slug].jpg`
2. Importă în `lib/content/blog/posts.ts`
3. Patch interlinking în `lib/content/blog/enrich-posts.ts`
4. Setează `publishedAt` la data reală
5. `npm run build` → 50 rute blog (20 existente + 30 noi)

---

## 8. Prompt sugerat pentru ChatGPT

Poți copia blocul de mai jos ca mesaj inițial:

---

**Context:** Lucrez la blogul SEO al salonului Claire Beauty Craiova (tratamente faciale, corporale, masaj). Am 20 articole publicate și 20 drafturi nepublicate (Batch 1 + Batch 2) — vezi documentul atașat.

**Reguli:**
- Fără keyword `[serviciu] Craiova` în blog
- 1500–2500 cuvinte, 6–10 H2, 8 FAQ, ton premium română
- Min 3 linkuri servicii, 2 articole, 1 hub
- Fără canibalizare cu paginile de serviciu

**Ce am nevoie:** [descrie task-ul — ex: „generează Batch 3", „rescrie intro articol X", „propune meta descriptions", „verifică canibalizare", etc.]

**Articole draft existente (20):**
Batch 1: de-ce-apare-retentia-de-apa-cauze, pregatire-ten-vara-pasi, picioare-grele-seara-cauze, masaj-manual-vs-aparat-remodelare, cat-dureaza-rezultate-tratamente-estetice, de-ce-apare-celulita-cauze-mituri, tratamente-inainte-de-concediu, cauze-ten-tern-fara-stralucire, cat-de-des-tratamente-faciale, pori-dilatati-cauze-obiceiuri

Batch 2: curatare-faciala-acasa-vs-salon, cat-de-des-tratamente-corporale, recuperare-ten-dupa-soare, ce-evitat-dupa-tratamente-estetice, de-ce-apar-vergeturile-cauze, colagen-explicat-simplu, detoxifiere-limfatica-ce-inseamna, piele-lasa-cauze-fara-operatie, lifting-nechirurgical-vs-chirurgical, dermapen-peeling-laser-cicatrici-textura

**Articole publicate (20):** ce-este-hydrafacial-beneficii-craiova, cum-scapi-de-celulita-ghid-complet, masaj-anticelulitic-vs-drenaj-limfatic, remodelare-corporala-fara-operatie-tehnologii, beneficii-masaj-terapeutic-stres-dureri, microneedling-vs-dermapen-diferente, hifu-facial-lifting-nechirurgical, cum-pregatesti-tenul-tratament-facial, ce-este-reflexoterapia-beneficii, semne-ca-ai-nevoie-de-drenaj-limfatic, ce-este-microdermabraziunea-beneficii, ghid-complet-drenaj-limfatic, electrostimulare-corporala-tonifiere, radiofrecventa-corporala-ghid, cum-alegi-tratament-facial-tip-ten, beneficii-masaj-relaxare-craiova, cum-scapi-de-puncte-negre-corect, tratamente-corporale-ghid-incepatori, vergeturi-tratamente-rezultate, masaj-terapeutic-vs-anticelulitic-cand

---

*Document generat automat din rapoartele batch 1 + batch 2 și strategia topic cluster.*
