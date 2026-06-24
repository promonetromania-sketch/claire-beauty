# Raport SEO — Canibalizare keyword-uri

**Site:** Claire Beauty Craiova  
**Data analizei:** 21 iunie 2026  
**Scope:** 43 URL-uri indexabile (homepage, contact, blog index, 20 articole, 19 pagini servicii/categorii)  
**Notă:** Analiză exclusiv din cod/sursă — fără modificări aplicate.

---

## Rezumat executiv

Structura site-ului urmează un model **hub → serviciu → blog informativ**, corect ca direcție. Blogul trimite de regulă spre paginile de serviciu (`relatedService`, `Servicii recomandate`), ceea ce reduce riscul.

Problemele principale:

1. **Paginile hub** (`/masaj-craiova`, `/tratamente-faciale-craiova`) au title/H1 care listează toate sub-serviciile — concurează direct cu paginile copil.
2. **20 articole × ~1200 cuvinte** acoperă aceleași subiecte ca paginile de serviciu, cu H2 similare („Ce este…”, „Beneficii…”, „Cum decurge…”).
3. **Cluster drenaj limfatic** — 1 pagină serviciu + 3 articole blog.
4. **Cluster masaj** — 1 hub + 4 servicii + 4 articole blog.
5. **`/remodelare-corporala-craiova`** e placeholder — hub-ul și blogul acaparează keyword-ul principal.
6. **Inconsistență brand** în title-uri: „Claire Beauty” vs „Claire's Studio” — nu e canibalizare clasică, dar diluează semnalele locale.

**Verdict general:** risc **mediu-ridicat** pe servicii cu articol dedicat „Ce este… / Ghid…”. Risc **scăzut-mediu** pe articole comparative („vs”, „când alegi”). Interlinking-ul blog → serviciu e un punct forte.

---

## Inventar pagini importante

| URL | Tip | Title (principal) | H1 | Keyword principal | Intenție |
|-----|-----|-------------------|-----|-------------------|----------|
| `/` | Homepage | Claire's Studio… Body Spa Craiova | Tratamente faciale, remodelare corporală și masaj în Craiova | salon beauty Craiova | Brand + descoperire locală |
| `/contact` | Contact | Contact \| Claire's Studio… | (fără H1 dedicat SEO) | contact salon Craiova | Navigațional / conversie |
| `/masaj-craiova` | Hub categorie | Masaj Craiova – Anticelulitic, Terapeutic, Drenaj… | Masaj Craiova – Ghid complet… | masaj Craiova | Comercial + orientare |
| `/masaj-terapeutic-craiova` | Serviciu | Masaj Terapeutic Craiova – Dureri de spate… | Masaj Terapeutic Craiova – Recuperare… | masaj terapeutic Craiova | Comercial / conversie |
| `/masaj-anticelulitic-craiova` | Serviciu | Masaj Anticelulitic Craiova – Scapă de Celulită… | Masaj Anticelulitic Craiova – Scapă de Celulită… | masaj anticelulitic Craiova | Comercial / conversie |
| `/drenaj-limfatic-craiova` | Serviciu | Drenaj Limfatic Craiova – Retenție de Apă… | Drenaj Limfatic Craiova – Detoxifiere… Remodelare | drenaj limfatic Craiova | Comercial / conversie |
| `/reflexoterapie-craiova` | Serviciu | Reflexoterapie Craiova \| Claire's Studio… | Reflexoterapie Craiova | reflexoterapie Craiova | Comercial / conversie |
| `/tratamente-faciale-craiova` | Hub categorie | Tratamente Faciale Craiova – Hydrafacial, Dermapen, HIFU… | Tratamente Faciale Craiova – Ghid Complet… | tratamente faciale Craiova | Comercial + orientare |
| `/hydrafacial-craiova` | Serviciu | Hydrafacial Craiova – Curățare Facială Profesională | Hydrafacial Craiova – Curățare Profundă… | Hydrafacial Craiova | Comercial / conversie |
| `/dermapen-craiova` | Serviciu | Dermapen Craiova – Cicatrici, Riduri… | Dermapen Craiova – Cicatrici, Riduri… | Dermapen Craiova | Comercial / conversie |
| `/microneedling-craiova` | Serviciu | Microneedling Craiova – Cicatrici Acnee… | Microneedling Craiova – Cicatrici, Acnee… | microneedling Craiova | Comercial / conversie |
| `/microdermabraziune-craiova` | Serviciu | Microdermabraziune Craiova – Curățare Facială… | Microdermabraziune Craiova – Curățare Profundă… | microdermabraziune Craiova | Comercial / conversie |
| `/hifu-craiova` | Serviciu | HIFU Craiova – Lifting Facial Fără Operație | HIFU Craiova – Lifting Facial Fără Operație… | HIFU Craiova | Comercial / conversie |
| `/tratamente-corporale-craiova` | Hub categorie | Tratamente Corporale Craiova \| Remodelare și Masaj | Tratamente corporale Craiova | tratamente corporale Craiova | Comercial + orientare |
| `/remodelare-corporala-craiova` | Serviciu (placeholder) | Remodelare corporală Craiova \| Claire's Studio | Remodelare corporală Craiova (placeholder) | remodelare corporală Craiova | Comercial — **conținut slab** |
| `/electrostimulare-craiova` | Serviciu | Electrostimulare Craiova – Tonifiere… | Electrostimulare Craiova – Tonifiere… | electrostimulare Craiova | Comercial / conversie |
| `/radiofrecventa-corporala-craiova` | Serviciu | Radiofrecvență Craiova – Fermitate… | Radiofrecvență Craiova – Fermitate… | radiofrecvență corporală Craiova | Comercial / conversie |
| `/blog` | Blog index | Blog Claire Beauty Craiova… | Sfaturi, ghiduri și noutăți… | blog beauty Craiova | Informațional general |
| `/blog/*` | Articol (×20) | `{titlu articol} \| Claire Beauty Craiova` | = titlul articolului | variabil per articol | Informațional / educațional |

---

## Conflicte identificate

### Conflict 1 — Hydrafacial: serviciu vs articol

**1. Pagina A**
- **URL:** `/hydrafacial-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Hydrafacial Craiova – Curățare Facială Profesională
- **H1:** Hydrafacial Craiova – Curățare Profundă, Hidratare Intensă și Efect de Glow Imediat
- **Keyword principal:** Hydrafacial Craiova
- **Intenție de căutare:** Comercială — programare tratament

**2. Pagina B**
- **URL:** `/blog/ce-este-hydrafacial-beneficii-craiova`
- **Tip pagină:** Articol blog
- **Title:** Ce este Hydrafacial: beneficii, pași… \| Claire Beauty Craiova
- **H1:** (același ca title articol)
- **Keyword principal:** ce este Hydrafacial / Hydrafacial beneficii
- **Intenție de căutare:** Informațională — înțelegere tratament

**3. Nivel risc:** Ridicat

**4. Explicație:**
Ambele pagini au H2 „Ce este Hydrafacial?”, „Beneficii”, „Cum decurge ședința”, FAQ despre același tratament. Google poate alege articolul (conținut mai lung) în locul paginii de conversie. Blogul are link către serviciu — ajută, dar nu elimină overlap-ul semantic.

**5. Recomandare:**
- Păstrează ambele pagini
- Schimbă focusul articolului spre „ghid pentru începători / ce să știi înainte” (nu duplică pagina serviciu)
- Title blog: fără „Hydrafacial Craiova” ca prim termen — ex. „Ce este Hydrafacial? Ghid complet pentru ten”
- Interlinking: articol → serviciu cu anchor „Programează Hydrafacial în Craiova”
- Nu canonical, nu redirect

---

### Conflict 2 — Microdermabraziune: serviciu vs articol

**1. Pagina A**
- **URL:** `/microdermabraziune-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Microdermabraziune Craiova – Curățare Facială, Exfoliere…
- **H1:** Microdermabraziune Craiova – Curățare Profundă, Exfoliere…
- **Keyword principal:** microdermabraziune Craiova
- **Intenție de căutare:** Comercială

**2. Pagina B**
- **URL:** `/blog/ce-este-microdermabraziunea-beneficii`
- **Tip pagină:** Articol blog
- **Title:** Ce este microdermabraziunea și de ce revigorează tenul tern
- **H1:** idem
- **Keyword principal:** microdermabraziune beneficii
- **Intenție de căutare:** Informațională

**3. Nivel risc:** Ridicat

**4. Explicație:**
Meta description articol conține explicit „Microdermabraziune Craiova”. Structură H2 aproape identică cu pagina serviciu. Overlap și cu Hydrafacial („curățare profundă”, „ten luminos”).

**5. Recomandare:**
- Păstrează ambele pagini
- Meta description articol — scoate keyword-ul exact „Microdermabraziune Craiova” din primele 60 caractere
- H1 articol — orientat spre problemă: „Ten tern și pori dilatați: când ajută microdermabraziunea”
- Interlinking puternic către `/microdermabraziune-craiova`

---

### Conflict 3 — HIFU: serviciu vs articol

**1. Pagina A**
- **URL:** `/hifu-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** HIFU Craiova – Lifting Facial Fără Operație
- **H1:** HIFU Craiova – Lifting Facial Fără Operație, Rejuvenare Profundă…
- **Keyword principal:** HIFU Craiova
- **Intenție de căutare:** Comercială

**2. Pagina B**
- **URL:** `/blog/hifu-facial-lifting-nechirurgical`
- **Tip pagină:** Articol blog
- **Title:** HIFU facial: lifting nechirurgical — cum funcționează…
- **H1:** idem
- **Keyword principal:** HIFU facial / lifting nechirurgical
- **Intenție de căutare:** Informațională

**3. Nivel risc:** Ridicat

**4. Explicație:**
Titluri și conținut acoperă aceeași procedură. Meta articol: „HIFU facial Craiova”.

**5. Recomandare:**
- Păstrează ambele pagini
- Articol = educație pre-decizie („lifting fără operație — la cine funcționează”)
- Serviciu = pagina principală pentru „HIFU Craiova”
- Title serviciu păstrat; title blog fără „Craiova” în prima jumătate

---

### Conflict 4 — Drenaj limfatic: serviciu vs articol ghid

**1. Pagina A**
- **URL:** `/drenaj-limfatic-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Drenaj Limfatic Craiova – Elimină Retenția de Apă…
- **H1:** Drenaj Limfatic Craiova – Detoxifiere, Eliminarea Retenției de Apă și Remodelare Corporală
- **Keyword principal:** drenaj limfatic Craiova
- **Intenție de căutare:** Comercială

**2. Pagina B**
- **URL:** `/blog/ghid-complet-drenaj-limfatic`
- **Tip pagină:** Articol blog
- **Title:** Ghid complet drenaj limfatic: beneficii, frecvență…
- **H1:** idem
- **Keyword principal:** drenaj limfatic ghid / beneficii
- **Intenție de căutare:** Informațională

**3. Nivel risc:** Ridicat

**4. Explicație:**
Articolul e practic o pagină serviciu extinsă. H2 „Ce este…”, „Beneficii”, „Frecvență” duplicate serviciul. H1 serviciu include „Remodelare Corporală” — overlap suplimentar cu hub corporal.

**5. Recomandare:**
- Păstrează ambele pagini
- Diferențiere clară: serviciu = programare + durată/experiență salon; ghid = simptome, stil de viață, mituri
- H1 serviciu: elimină „Remodelare Corporală” din H1 drenaj
- Interlinking din ghid → serviciu în primele 300 cuvinte

---

### Conflict 5 — Drenaj limfatic: două articole blog între ele

**1. Pagina A**
- **URL:** `/blog/ghid-complet-drenaj-limfatic`
- **Tip pagină:** Articol blog (ghid enciclopedic)
- **Keyword principal:** ghid drenaj limfatic
- **Intenție de căutare:** Informațională

**2. Pagina B**
- **URL:** `/blog/semne-ca-ai-nevoie-de-drenaj-limfatic`
- **Tip pagină:** Articol blog (simptome)
- **Keyword principal:** semne drenaj limfatic / când ai nevoie
- **Intenție de căutare:** Informațională

**3. Nivel risc:** Mediu

**4. Explicație:**
A = ghid complet; B = simptome. Overlap pe beneficii și frecvență. Plus `/blog/masaj-anticelulitic-vs-drenaj-limfatic` — al treilea articol în același cluster.

**5. Recomandare:**
- Păstrează toate trei articolele
- Focus distinct: ghid = enciclopedic; semne = checklist simptome; vs = comparație
- Cross-link între ele + către `/drenaj-limfatic-craiova`
- Nu unifica, nu redirect

---

### Conflict 6 — Masaj anticelulitic vs articol celulită

**1. Pagina A**
- **URL:** `/masaj-anticelulitic-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Masaj Anticelulitic Craiova – Scapă de Celulită Rapid…
- **H1:** Masaj Anticelulitic Craiova – Scapă de Celulită și Redefinește-ți Silueta
- **Keyword principal:** masaj anticelulitic Craiova + celulită
- **Intenție de căutare:** Comercială

**2. Pagina B**
- **URL:** `/blog/cum-scapi-de-celulita-ghid-complet`
- **Tip pagină:** Articol blog
- **Title:** Cum scapi de celulită: ghid complet cu soluții…
- **H1:** idem
- **Keyword principal:** cum scapi de celulita / celulita tratament
- **Intenție de căutare:** Informațională (problem-aware)

**3. Nivel risc:** Ridicat

**4. Explicație:**
Articolul vizează exact query-ul din title-ul serviciului. Ambele recomandă masaj anticelulitic — corect ca funnel, dar Google poate prefera articolul pentru „celulită Craiova”.

**5. Recomandare:**
- Păstrează ambele pagini
- Serviciu = pagina principală pentru „masaj anticelulitic Craiova”
- Articol = pagina principală pentru „cum scapi de celulita” (keyword diferit, fără local obligatoriu în title)
- Title serviciu: reduce „Scapă de Celulită Rapid” — prea promoțional și suprapus
- Interlinking articol → serviciu în callout + FAQ

---

### Conflict 7 — Hub masaj vs pagini copil

**1. Pagina A**
- **URL:** `/masaj-craiova`
- **Tip pagină:** Hub categorie
- **Title:** Masaj Craiova – Anticelulitic, Terapeutic, Drenaj Limfatic și Reflexoterapie
- **H1:** Masaj Craiova – Ghid complet pentru alegerea tratamentului potrivit
- **Keyword principal:** masaj Craiova
- **Intenție de căutare:** Comercială + orientare

**2. Pagina B**
- **URL:** `/masaj-terapeutic-craiova` (similar pentru anticelulitic, drenaj, reflexoterapie)
- **Tip pagină:** Pagină serviciu
- **Title:** Masaj Terapeutic Craiova – Tratament pentru Dureri de Spate…
- **H1:** Masaj Terapeutic Craiova – Recuperare, Relaxare…
- **Keyword principal:** masaj terapeutic Craiova
- **Intenție de căutare:** Comercială specifică

**3. Nivel risc:** Ridicat

**4. Explicație:**
Title-ul hub-ului conține keyword-urile exacte ale tuturor copiilor. Keywords array include toate variantele. Google poate rank-ui hub-ul pentru „masaj terapeutic Craiova” în locul paginii dedicate.

**5. Recomandare:**
- Păstrează ambele pagini
- Modifică title hub: „Masaj Craiova – Alege tratamentul potrivit la Claire Beauty” (fără listarea copiilor)
- Modifică meta description hub: orientare, fără 4 servicii enumerate
- Interlinking: hub → fiecare copil cu anchor exact
- Copiii = pagini principale pentru keyword-urile long-tail

---

### Conflict 8 — Hub tratamente faciale vs copii + articol

**1. Pagina A**
- **URL:** `/tratamente-faciale-craiova`
- **Tip pagină:** Hub categorie
- **Title:** Tratamente Faciale Craiova – Hydrafacial, Dermapen, HIFU și Microneedling…
- **H1:** Tratamente Faciale Craiova – Ghid Complet pentru Alegerea Corectă a Procedurii
- **Keyword principal:** tratamente faciale Craiova
- **Intenție de căutare:** Hub comercial

**2. Pagina B**
- **URL:** `/blog/cum-alegi-tratament-facial-tip-ten`
- **Tip pagină:** Articol blog
- **Title:** Cum alegi tratamentul facial potrivit tipului tău de ten
- **H1:** idem
- **Keyword principal:** tratament facial tip ten
- **Intenție de căutare:** Informațională

**3. Nivel risc:** Mediu-Ridicat

**4. Explicație:**
H1 hub și titlu articol folosesc același concept „ghid / alegere tratament”. Articolul linkează Hydrafacial, microdermabraziune, HIFU — aceleași servicii ca hub-ul.

**5. Recomandare:**
- Păstrează ambele pagini
- Hub = pagina principală „tratamente faciale Craiova”
- Articol = focus pe tip ten (gras/uscat/sensibil), nu pe listă servicii
- H1 hub: scurtat — prea lung pentru SERP
- Title hub: fără enumerarea tuturor procedurilor

---

### Conflict 9 — Microneedling vs Dermapen (servicii + articol)

**1. Pagina A**
- **URL:** `/microneedling-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Microneedling Craiova – Tratament pentru Cicatrici Acnee, Pori Dilatați…
- **H1:** Microneedling Craiova – Tratament Eficient pentru Cicatrici, Acnee…
- **Keyword principal:** microneedling Craiova
- **Intenție de căutare:** Comercială

**2. Pagina B**
- **URL:** `/dermapen-craiova`
- **Tip pagină:** Pagină serviciu
- **Title:** Dermapen Craiova – Tratament pentru Cicatrici Post-Acnee, Riduri…
- **H1:** Dermapen Craiova – Tratament pentru Cicatrici, Riduri…
- **Keyword principal:** Dermapen Craiova
- **Intenție de căutare:** Comercială

**3. Pagina C**
- **URL:** `/blog/microneedling-vs-dermapen-diferente`
- **Tip pagină:** Articol blog comparativ
- **Keyword principal:** microneedling vs dermapen
- **Intenție de căutare:** Informațională comparativă

**4. Nivel risc:** Ridicat (A vs B); Scăzut-Mediu (C vs A/B)

**5. Explicație:**
Cele două servicii concurează între ele pentru „cicatrici acnee Craiova”, „regenerare ten”. Articolul comparativ e bine poziționat, dar poate outrank-ui serviciile pentru query-uri comparative.

**6. Recomandare:**
- Păstrează toate paginile
- Diferențiere servicii: Microneedling = tehnologie generală; Dermapen = dispozitiv premium, precizie
- Title-uri distincte pe indicații diferite
- Articol = pagina principală pentru „microneedling vs dermapen”
- Serviciile = conversie post-decizie
- Interlinking bidirecțional articol ↔ ambele servicii

---

### Conflict 10 — Hub tratamente corporale vs articol + placeholder remodelare

**1. Pagina A**
- **URL:** `/tratamente-corporale-craiova`
- **Tip pagină:** Hub categorie
- **Keyword principal:** tratamente corporale Craiova
- **Intenție de căutare:** Comercială + orientare

**2. Pagina B**
- **URL:** `/blog/tratamente-corporale-ghid-incepatori`
- **Tip pagină:** Articol blog
- **Keyword principal:** tratamente corporale ghid / începători
- **Intenție de căutare:** Informațională

**3. Pagina C**
- **URL:** `/remodelare-corporala-craiova`
- **Tip pagină:** Serviciu (placeholder — conținut minimal)
- **Keyword principal:** remodelare corporală Craiova
- **Intenție de căutare:** Comercială

**4. Nivel risc:** A vs B = Mediu; C vs blog `/blog/remodelare-corporala-fara-operatie-tehnologii` = Ridicat

**5. Explicație:**
Pagina remodelare e goală — blogul și hub-ul absorb autoritatea. Articolul „ghid începători” duplicate structura hub-ului.

**6. Recomandare:**
- Păstrează toate URL-urile
- Prioritate urgentă (conținut): finalizare `/remodelare-corporala-craiova` ca pagină principală remodelare
- Articol ghid = onboarding începători, nu duplicat hub
- Nu redirect până remodelarea e live

---

### Conflict 11 — Electrostimulare și radiofrecvență: servicii vs articole

**Electrostimulare**
- **Pagina A:** `/electrostimulare-craiova` — serviciu | keyword: electrostimulare Craiova | intenție: comercială
- **Pagina B:** `/blog/electrostimulare-corporala-tonifiere` — articol | keyword: electrostimulare corporală | intenție: informațională
- **Nivel risc:** Ridicat
- **Recomandare:** Serviciu = principal comercial. Articol = tehnologie explicată + când alegi EMS. Title blog fără duplicarea exactă a title-ului serviciu.

**Radiofrecvență**
- **Pagina A:** `/radiofrecventa-corporala-craiova` — serviciu | keyword: radiofrecvență corporală Craiova | intenție: comercială
- **Pagina B:** `/blog/radiofrecventa-corporala-ghid` — articol | keyword: radiofrecvență corporală ghid | intenție: informațională
- **Nivel risc:** Ridicat
- **Recomandare:** Serviciu = principal comercial. Articol = tehnologie + când alegi RF vs alte proceduri.

---

### Conflict 12 — Masaj terapeutic / relaxare: hub + servicii + articole

| Pagini | Nivel risc |
|--------|------------|
| `/masaj-craiova` vs `/blog/beneficii-masaj-relaxare-craiova` | Mediu |
| `/masaj-terapeutic-craiova` vs `/blog/beneficii-masaj-terapeutic-stres-dureri` | Ridicat |
| Blog terapeutic vs `/blog/masaj-terapeutic-vs-anticelulitic-cand` | Scăzut (intenții diferite) |

**Recomandare:**
- Serviciile = principale comerciale
- Articole „beneficii” = suport educațional — title fără „Craiova” ca focus principal, anchor către serviciu
- Hub masaj nu targeta „masaj terapeutic Craiova” în title

---

### Conflict 13 — Reflexoterapie: serviciu vs articol

**1. Pagina A:** `/reflexoterapie-craiova` — serviciu | keyword: reflexoterapie Craiova | intenție: comercială  
**2. Pagina B:** `/blog/ce-este-reflexoterapia-beneficii` — articol | keyword: ce este reflexoterapia | intenție: informațională  

**3. Nivel risc:** Mediu-Ridicat

**4. Explicație:** Același pattern „Ce este + beneficii”. H2 „Ce este reflexoterapia” există și pe serviciu (`ServiceDetails`).

**5. Recomandare:** Articol = wellness/educație; serviciu = programare. Interlinking articol → serviciu.

---

### Conflict 14 — Puncte negre: articol vs Hydrafacial + microdermabraziune

**1. Pagina A:** `/blog/cum-scapi-de-puncte-negre-corect` — keyword: cum scapi de puncte negre | intenție: informațională  
**2. Pagina B:** `/hydrafacial-craiova` + `/microdermabraziune-craiova` — curățare pori / puncte negre | intenție: comercială  

**3. Nivel risc:** Mediu

**4. Explicație:** Intenții parțial diferite (problemă vs soluție comercială).

**5. Recomandare:** Articol = pagina principală „puncte negre”. Serviciile = soluții cu link din articol.

---

### Conflict 15 — Homepage vs hub-uri

**1. Pagina A:** `/` — H1: „Tratamente faciale, remodelare corporală și masaj în Craiova”  
**2. Pagina B:** Hub-uri categorie  

**3. Nivel risc:** Mediu

**4. Explicație:** Homepage concurează pentru termeni generici locali.

**5. Recomandare:** Homepage = brand + „salon beauty / body spa Craiova”. Hub-urile = pagini principale categorie. Linkuri puternice homepage → hub-uri.

---

### Conflict 16 — Blog pregătire ten vs hub facial

**1. Pagina A:** `/blog/cum-pregatesti-tenul-tratament-facial`  
**2. Pagina B:** `/tratamente-faciale-craiova`  

**3. Nivel risc:** Scăzut — intenție distinctă (pregătire pre-vizită)

**5. Recomandare:** Păstrează; rol clar suport.

---

### Conflict 17 — Blog vergeturi vs remodelare

**1. Pagina A:** `/blog/vergeturi-tratamente-rezultate`  
**2. Pagina B:** `/remodelare-corporala-craiova` + `/blog/remodelare-corporala-fara-operatie-tehnologii`  

**3. Nivel risc:** Mediu pe cluster remodelare/vergeturi

**5. Recomandare:** Vergeturi = keyword propriu (problem-specific). Remodelare blog = tehnologii. Serviciu remodelare = principal când e finalizat.

---

## Linkuri interne — observații

| Pattern | Evaluare |
|---------|----------|
| Blog → serviciu via `relatedService` | ✅ Bun |
| Blog → 2–4 servicii via `Servicii recomandate` | ✅ Bun |
| Hub → copii (carduri) | ✅ Bun pe tratamente corporale |
| Hub masaj/facial — title keyword stuffing | ⚠️ Slăbește semnalul către copii |
| Articole similare (3 random) | ⚠️ Nu prioritizează pagina serviciu |
| Placeholder remodelare primit linkuri fără conținut | ❌ Risc UX + SEO |

---

## Meta descriptions / title — duplicări notabile

- **Microneedling vs Dermapen (servicii):** descriptions ~80% identice
- **Hub masaj title** = suma title-urilor copiilor
- **Hub facial title** = suma procedurilor
- **Blog „ghid complet” + serviciu** — aceeași formulare „Ghid complet… Claire Beauty Craiova”
- **Brand split:** 8 pagini „Claire's Studio”, restul „Claire Beauty” — diluare entitate locală

---

## Harta recomandată de keyword-uri

| URL | Tip pagină | Keyword principal recomandat | Keyword-uri secundare | Intenție de căutare | Rol SEO | Link intern principal de primit |
|-----|------------|------------------------------|----------------------|---------------------|---------|--------------------------------|
| `/` | Homepage | salon beauty Craiova | body spa Craiova, Claire Beauty | Brand local | Pagină principală brand | — (trimite spre hub-uri) |
| `/contact` | Contact | contact Claire Beauty Craiova | programare, adresă | Navigațional | Conversie | Homepage, toate serviciile |
| `/masaj-craiova` | Hub | masaj Craiova | alegere masaj, tipuri masaj | Comercial orientare | Pagină principală categorie | Homepage, blog masaj |
| `/masaj-terapeutic-craiova` | Serviciu | masaj terapeutic Craiova | dureri spate, tensiune musculară | Comercial | Pagină principală | Hub masaj, blog terapeutic |
| `/masaj-anticelulitic-craiova` | Serviciu | masaj anticelulitic Craiova | celulită, contur corporal | Comercial | Pagină principală | Hub masaj, blog celulită |
| `/drenaj-limfatic-craiova` | Serviciu | drenaj limfatic Craiova | retenție apă, picioare grele | Comercial | Pagină principală | Hub masaj/corporale, blog drenaj |
| `/reflexoterapie-craiova` | Serviciu | reflexoterapie Craiova | masaj tălpi, wellness | Comercial | Pagină principală | Hub masaj, blog reflexoterapie |
| `/tratamente-faciale-craiova` | Hub | tratamente faciale Craiova | alegere tratament facial | Comercial orientare | Pagină principală categorie | Homepage, blog tip ten |
| `/hydrafacial-craiova` | Serviciu | Hydrafacial Craiova | curățare facială, puncte negre | Comercial | Pagină principală | Hub facial, blog Hydrafacial |
| `/dermapen-craiova` | Serviciu | Dermapen Craiova | cicatrici acnee, colagen | Comercial | Pagină principală | Hub facial, blog vs dermapen |
| `/microneedling-craiova` | Serviciu | microneedling Craiova | pori dilatați, rejuvenare | Comercial | Pagină principală | Hub facial, blog vs dermapen |
| `/microdermabraziune-craiova` | Serviciu | microdermabraziune Craiova | exfoliere, ten tern | Comercial | Pagină principală | Hub facial, blog microdermabraziune |
| `/hifu-craiova` | Serviciu | HIFU Craiova | lifting nechirurgical | Comercial | Pagină principală | Hub facial, blog HIFU |
| `/tratamente-corporale-craiova` | Hub | tratamente corporale Craiova | masaj corporal, wellness | Comercial orientare | Pagină principală categorie | Homepage, blog ghid corporal |
| `/remodelare-corporala-craiova` | Serviciu | remodelare corporală Craiova | contur, fermitate | Comercial | Pagină principală (de finalizat) | Hub corporale, blog remodelare |
| `/electrostimulare-craiova` | Serviciu | electrostimulare Craiova | tonifiere musculară | Comercial | Pagină principală | Hub corporale, blog EMS |
| `/radiofrecventa-corporala-craiova` | Serviciu | radiofrecvență corporală Craiova | fermitate, centimetri | Comercial | Pagină principală | Hub corporale, blog RF |
| `/blog` | Blog index | blog beauty Craiova | sfaturi îngrijire | Informațional | Pagină suport | Homepage |
| `/blog/ce-este-hydrafacial-beneficii-craiova` | Articol | ce este Hydrafacial | beneficii, pași tratament | Informațional | Articol suport | `/hydrafacial-craiova` |
| `/blog/cum-scapi-de-celulita-ghid-complet` | Articol | cum scapi de celulita | masaj anticelulitic, mituri | Informațional | Articol suport | `/masaj-anticelulitic-craiova` |
| `/blog/masaj-anticelulitic-vs-drenaj-limfatic` | Articol | masaj anticelulitic vs drenaj | diferențe tratamente | Informațional | Articol comparativ | `/masaj-anticelulitic-craiova`, `/drenaj-limfatic-craiova` |
| `/blog/remodelare-corporala-fara-operatie-tehnologii` | Articol | remodelare corporală fără operație | EMS, RF | Informațional | Articol suport | `/remodelare-corporala-craiova` |
| `/blog/beneficii-masaj-terapeutic-stres-dureri` | Articol | beneficii masaj terapeutic | stres, dureri musculare | Informațional | Articol suport | `/masaj-terapeutic-craiova` |
| `/blog/microneedling-vs-dermapen-diferente` | Articol | microneedling vs dermapen | comparație tratamente | Informațional | Articol comparativ | `/microneedling-craiova`, `/dermapen-craiova` |
| `/blog/hifu-facial-lifting-nechirurgical` | Articol | HIFU facial lifting | ultrasunete, întinerire | Informațional | Articol suport | `/hifu-craiova` |
| `/blog/cum-pregatesti-tenul-tratament-facial` | Articol | pregătire ten tratament facial | înainte/după facial | Informațional | Articol suport | `/tratamente-faciale-craiova` |
| `/blog/ce-este-reflexoterapia-beneficii` | Articol | ce este reflexoterapia | beneficii wellness | Informațional | Articol suport | `/reflexoterapie-craiova` |
| `/blog/semne-ca-ai-nevoie-de-drenaj-limfatic` | Articol | semne drenaj limfatic | picioare grele, umflături | Informațional | Articol conversie soft | `/drenaj-limfatic-craiova` |
| `/blog/ce-este-microdermabraziunea-beneficii` | Articol | ce este microdermabraziunea | ten tern, exfoliere | Informațional | Articol suport | `/microdermabraziune-craiova` |
| `/blog/ghid-complet-drenaj-limfatic` | Articol | ghid drenaj limfatic | beneficii, frecvență | Informațional | Articol suport | `/drenaj-limfatic-craiova` |
| `/blog/electrostimulare-corporala-tonifiere` | Articol | electrostimulare corporală | tonifiere, EMS | Informațional | Articol suport | `/electrostimulare-craiova` |
| `/blog/radiofrecventa-corporala-ghid` | Articol | radiofrecvență corporală | conturare, fermitate | Informațional | Articol suport | `/radiofrecventa-corporala-craiova` |
| `/blog/cum-alegi-tratament-facial-tip-ten` | Articol | tratament facial tip ten | ten gras, uscat, sensibil | Informațional | Articol suport | `/tratamente-faciale-craiova` |
| `/blog/beneficii-masaj-relaxare-craiova` | Articol | masaj relaxare beneficii | stres, somn | Informațional | Articol suport | `/masaj-craiova` |
| `/blog/cum-scapi-de-puncte-negre-corect` | Articol | cum scapi de puncte negre | curățare pori | Informațional | Articol suport | `/hydrafacial-craiova` |
| `/blog/tratamente-corporale-ghid-incepatori` | Articol | tratamente corporale începători | prima vizită spa | Informațional | Articol suport | `/tratamente-corporale-craiova` |
| `/blog/vergeturi-tratamente-rezultate` | Articol | tratament vergeturi | piele lăsată, colagen | Informațional | Articol suport | `/remodelare-corporala-craiova` |
| `/blog/masaj-terapeutic-vs-anticelulitic-cand` | Articol | masaj terapeutic vs anticelulitic | când alegi masaj | Informațional | Articol comparativ | `/masaj-terapeutic-craiova`, `/masaj-anticelulitic-craiova` |

---

## Priorități recomandate (la implementare)

1. **Finalizare `/remodelare-corporala-craiova`** — cel mai mare gap structural
2. **Title/meta hub masaj și facial** — reduce canibalizarea copiilor
3. **Diferențiere title articole „Ce este / Ghid”** — evită duplicate cu serviciile
4. **Unificare brand în title-uri** (Claire Beauty vs Claire's Studio)
5. **H1 drenaj** — scoate „Remodelare Corporală”
6. **Title masaj anticelulitic** — mai puțin focus pe „celulită” generic, mai mult pe serviciu

---

*Document generat pe baza analizei codului sursă. Nicio modificare nu a fost aplicată pe site.*
