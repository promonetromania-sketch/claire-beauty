# Raport — Draft articole blog (Batch 1)

**Data:** 7 iunie 2026  
**Sursă:** `docs/strategie-topic-cluster-30-articole.md` (Luna 1, săpt. 1–3 + 2 din săpt. 4)  
**Status:** draft — **nepublicat** (`posts.ts` neschimbat)  
**Build:** `npm run build` — ✅ 40 pagini (fără draft-uri în routing)

---

## 1. Articole create (10)

| # | Slug | Titlu SEO | Tip | readTime est. | H2 | FAQ |
|---|------|-----------|-----|---------------|-----|-----|
| 1 | `de-ce-apare-retentia-de-apa-cauze` | De ce apare retenția de apă: 7 cauze frecvente explicate simplu | Probleme | ~9 min | 12 | 8 |
| 2 | `pregatire-ten-vara-pasi` | Pregătirea tenului pentru vară: pași esențiali înainte de sezonul cald | Sezonier | ~9 min | 11 | 8 |
| 3 | `picioare-grele-seara-cauze` | Picioare grele seara: cauze frecvente și când merită o abordare dedicată | Probleme | ~9 min | 13 | 8 |
| 4 | `masaj-manual-vs-aparat-remodelare` | Masaj manual sau aparat de remodelare: ce alegi în funcție de obiectiv | Comparativ | ~9 min | 12 | 8 |
| 5 | `cat-dureaza-rezultate-tratamente-estetice` | Cât durează până vezi rezultate la tratamente estetice: așteptări realiste pe tipuri | FAQ | ~9 min | 12 | 8 |
| 6 | `de-ce-apare-celulita-cauze-mituri` | De ce apare celulita: factori reali, mituri demontate și ce poți controla | Probleme | ~9 min | 11 | 8 |
| 7 | `tratamente-inainte-de-concediu` | Tratamente recomandate înainte de concediu: față și corp, cu timing realist | Sezonier | ~9 min | 11 | 8 |
| 8 | `cauze-ten-tern-fara-stralucire` | Ten tern și fără strălucire: cauzele reale și obiceiurile care agravează problema | Probleme | ~9 min | 11 | 8 |
| 9 | `cat-de-des-tratamente-faciale` | Cât de des poți face tratamente faciale: frecvențe recomandate pe obiective | FAQ | ~9 min | 13 | 8 |
| 10 | `pori-dilatati-cauze-obiceiuri` | Pori dilatați: de ce apar și ce obiceiuri îi fac mai vizibili | Probleme | ~9 min | 12 | 8 |

*readTime = `estimateReadTimeMinutes()` (~1600–1900 cuvinte per articol, în intervalul 1500–2500 cerut)*

---

## 2. Fișiere create

### Articole draft (10)
```
lib/content/blog/articles/drafts/de-ce-apare-retentia-de-apa-cauze.ts
lib/content/blog/articles/drafts/pregatire-ten-vara-pasi.ts
lib/content/blog/articles/drafts/picioare-grele-seara-cauze.ts
lib/content/blog/articles/drafts/masaj-manual-vs-aparat-remodelare.ts
lib/content/blog/articles/drafts/cat-dureaza-rezultate-tratamente-estetice.ts
lib/content/blog/articles/drafts/de-ce-apare-celulita-cauze-mituri.ts
lib/content/blog/articles/drafts/tratamente-inainte-de-concediu.ts
lib/content/blog/articles/drafts/cauze-ten-tern-fara-stralucire.ts
lib/content/blog/articles/drafts/cat-de-des-tratamente-faciale.ts
lib/content/blog/articles/drafts/pori-dilatati-cauze-obiceiuri.ts
```

### Infrastructură draft
```
lib/content/blog/draft-posts.ts          — agregator (neimportat în posts.ts)
lib/content/blog/articles/drafts/README.md
docs/raport-draft-articole-batch1.md    — acest raport
```

### Imagini (de adăugat la publicare)
```
public/images/blog/drafts/[slug].jpg   — 10 fișiere placeholder referite, încă lipsesc
```

---

## 3. Linkuri interne propuse (per articol)

| Articol | Hub | Servicii (≥3) | Articole existente (≥2) |
|---------|-----|---------------|-------------------------|
| **#1** Retenție apă | Masaj Craiova | Drenaj, Masaj, Tratamente corporale, Masaj anticelulitic | Semne drenaj, Ghid drenaj |
| **#2** Pregătire vară | Tratamente faciale | Tratamente faciale, Hydrafacial, Microdermabraziune | Pregătire ten, Puncte negre |
| **#3** Picioare grele | Masaj Craiova | Drenaj, Masaj, Masaj terapeutic, Reflexoterapie | Semne drenaj, Masaj relaxare |
| **#4** Masaj vs aparat | Tratamente corporale | Remodelare, Electrostimulare, RF, Masaj anticelulitic | Remodelare tehnologii, Ghid corporale |
| **#5** Cât durează rezultate | Tratamente faciale | Tratamente faciale, Hydrafacial, HIFU, Dermapen | Alegere tip ten, Hydrafacial începători |
| **#6** Celulita cauze | Tratamente corporale | Masaj anticelulitic, Remodelare, Drenaj | Celulita ghid, Masaj vs drenaj |
| **#7** Înainte concediu | Tratamente corporale | Remodelare, Tratamente faciale, Drenaj, Masaj anticelulitic | Ghid corporale, Pregătire ten |
| **#8** Ten tern | Tratamente faciale | Tratamente faciale, Hydrafacial, Microdermabraziune, HIFU | Microderm când e recomandată, Puncte negre |
| **#9** Frecvență faciale | Tratamente faciale | Tratamente faciale, Hydrafacial, Dermapen, Microdermabraziune | Pregătire ten, Alegere tip ten |
| **#10** Pori dilatați | Tratamente faciale | Microdermabraziune, Hydrafacial, Tratamente faciale, Microneedling | Puncte negre, Microderm beneficii |

Fiecare articol include **callout CTA** final + câmpuri `hubLink` și `relatedArticles` pentru interlinking la publicare (via `enrich-posts.ts`).

---

## 4. Conflicte SEO identificate

| Severitate | Articol(e) | Conflict | Recomandare |
|------------|------------|----------|-------------|
| **Scăzută** | #1, #3 vs `semne-ca-ai-nevoie-de-drenaj-limfatic`, `ghid-complet-drenaj-limfatic` | Cluster drenaj/retenție — subiecte adjacente | Păstrat: #1 = cauze, #3 = picioare grele seara, existente = semne/protocol. Linkuri bidirecționale la publicare. |
| **Scăzută** | #6 vs `cum-scapi-de-celulita-ghid-complet` | Ambele menționează celulita | Diferențiere OK: #6 = cauze + mituri only; ghid existent = abordări + protocol. |
| **Scăzută** | #8 vs `ce-este-microdermabraziunea-beneficii` | Ten tern / pori | #8 = cauze generale ten tern; microderm = când e indicată procedura. |
| **Scăzută** | #10 vs `cum-scapi-de-puncte-negre-corect` | Pori / curățare | #10 = cauze pori dilatați; puncte negre = abordare sigură comedone. |
| **Monitorizare** | #5, #9 | Menționează tipuri de tratament (Hydrafacial, HIFU etc.) fără „Craiova” în title | La publicare: păstrați anchor comercial spre pagini serviciu; evitați title de tip „Hydrafacial Craiova”. |
| **Niciun conflict** | — | Keyword `[serviciu] Craiova` ca principal | ✅ Niciun draft nu vizează keyword-urile rezervate serviciilor. |

**Eliminat din batch (conform strategiei, nu generate):** #10 curatare acasa vs salon, #29 frecvență corporale — programate în săptămâna 4, batch următor.

---

## 5. La publicare (checklist)

1. Adaugă imagini JPG în `public/images/blog/drafts/` (sau mută în `/images/blog/`).
2. Importă postările în `lib/content/blog/posts.ts`.
3. Adaugă patch-uri în `lib/content/blog/enrich-posts.ts` (bloc interlinking cluster).
4. Setează `publishedAt` la data reală de publicare.
5. Rulează `npm run build` — ar trebui 50 rute blog.

---

## 6. Note tehnice

- **FAQ Schema:** se generează automat în `app/blog/[slug]/page.tsx` când articolele sunt adăugate în `posts.ts`.
- **H1:** = `post.title` (unic per articol).
- **Brand:** Claire Beauty Craiova în CTA / secțiuni finale; fără „Claire's Studio”.
