# Raport — Draft articole blog (Batch 2)

**Data:** 7 iunie 2026  
**Sursă:** `docs/strategie-topic-cluster-30-articole.md` (Săpt. 4 Luna 1 + Luna 2 august)  
**Status:** draft — **nepublicat** (`posts.ts` neschimbat)  
**Build:** `npm run build` — ✅ 40 pagini (drafturile nu sunt în routing)

---

## 1. Articole create (10)

| # strat. | Slug | Titlu SEO | Tip | readTime est. | H2 | FAQ |
|----------|------|-----------|-----|---------------|-----|-----|
| 10 | `curatare-faciala-acasa-vs-salon` | Curățare facială acasă vs tratament profesional: limite, riscuri și când treci la salon | Comparativ | ~9 min | 9 | 8 |
| 29 | `cat-de-des-tratamente-corporale` | Cât de des poți face tratamente corporale: ghid pe protocoale și obiective | FAQ | ~9 min | 11 | 8 |
| 26 | `recuperare-ten-dupa-soare` | Recuperarea tenului după expunerea la soare: ce faci corect în primele săptămâni | Sezonier | ~9 min | 11 | 8 |
| 30 | `ce-evitat-dupa-tratamente-estetice` | Ce trebuie evitat după exfoliere, microneedling și radiofrecvență: checklist post-procedură | FAQ | ~9 min | 11 | 8 |
| 5 | `de-ce-apar-vergeturile-cauze` | Vergeturi: de ce apar și la cine sunt mai frecvente | Probleme | ~9 min | 11 | 8 |
| 15 | `colagen-explicat-simplu` | Colagenul explicat simplu: ce face, de ce scade și cum îl susții corect | Educațional | ~9 min | 11 | 8 |
| 17 | `detoxifiere-limfatica-ce-inseamna` | Detoxifierea limfatică: ce înseamnă cu adevărat (fără mituri wellness) | Educațional | ~8 min | 10 | 8 |
| 6 | `piele-lasa-cauze-fara-operatie` | Pielea lăsată: cauze și ce se poate îmbunătăți fără operație | Probleme | ~10 min | 14 | 8 |
| 11 | `lifting-nechirurgical-vs-chirurgical` | Lifting nechirurgical vs lifting chirurgical: așteptări realiste și diferențe cheie | Comparativ | ~10 min | 14 | 8 |
| 12 | `dermapen-peeling-laser-cicatrici-textura` | Dermapen, peeling sau laser: cum alegi terapia potrivită pentru cicatrici și textură | Comparativ | ~10 min | 14 | 8 |

*readTime = `estimateReadTimeMinutes()` (~1500–1800 cuvinte per articol)*

---

## 2. Fișiere create / modificate

### Articole draft noi (10)
```
lib/content/blog/articles/drafts/curatare-faciala-acasa-vs-salon.ts
lib/content/blog/articles/drafts/cat-de-des-tratamente-corporale.ts
lib/content/blog/articles/drafts/recuperare-ten-dupa-soare.ts
lib/content/blog/articles/drafts/ce-evitat-dupa-tratamente-estetice.ts
lib/content/blog/articles/drafts/de-ce-apar-vergeturile-cauze.ts
lib/content/blog/articles/drafts/colagen-explicat-simplu.ts
lib/content/blog/articles/drafts/detoxifiere-limfatica-ce-inseamna.ts
lib/content/blog/articles/drafts/piele-lasa-cauze-fara-operatie.ts
lib/content/blog/articles/drafts/lifting-nechirurgical-vs-chirurgical.ts
lib/content/blog/articles/drafts/dermapen-peeling-laser-cicatrici-textura.ts
```

### Actualizate
```
lib/content/blog/draft-posts.ts          — +batch2, total 20 drafturi
lib/content/blog/articles/drafts/README.md
docs/raport-draft-articole-batch2.md     — acest raport
```

### Nepublicate / neatinse
```
lib/content/blog/posts.ts                — neschimbat
app/blog/*                               — routing neschimbat (40 pagini)
Batch 1 drafts                           — neschimbate
```

### Imagini (lipsă — la publicare)
```
public/images/blog/drafts/[slug].jpg     — 10 fișiere noi de adăugat
```

---

## 3. Linkuri interne propuse

| Articol | Hub | Servicii (≥3) | Articole publicate | Draft Batch 1 |
|---------|-----|---------------|-------------------|---------------|
| Curățare acasă vs salon | Tratamente faciale | Hydrafacial, Trat. faciale, Microderm, Dermapen | Puncte negre, Pregătire ten | Ten tern cauze |
| Frecvență corporale | Tratamente corporale | Trat. corporale, Remodelare, Anticelulitic, Drenaj | Ghid corporale, Masaj vs drenaj | Masaj vs aparat, Cât durează rezultate |
| Recuperare după soare | Tratamente faciale | Trat. faciale, Hydrafacial, Microderm, HIFU | Pregătire ten, Microderm când | Pregătire ten vară |
| Ce evitat post-procedură | Tratamente faciale | Dermapen, Microneedling, Microderm, RF | Pregătire ten, Microneedling vs Dermapen | Frecvență faciale |
| Vergeturi cauze | Tratamente corporale | Remodelare, Microneedling, RF, Trat. corporale | Vergeturi tratamente, Remodelare tehnologii | — |
| Colagen explicat | Tratamente faciale | Microneedling, Dermapen, HIFU, Trat. faciale | Microneedling vs Dermapen, HIFU candidat | Ten tern cauze |
| Detox limfatic | Masaj Craiova | Drenaj, Masaj, Anticelulitic, Trat. corporale | Ghid drenaj, Semne drenaj | Retenție apă cauze |
| Pielea lăsată | Tratamente corporale | RF, Remodelare, EMS, Trat. corporale | Remodelare tehnologii, RF ghid | Celulita cauze |
| Lifting nechir. vs chir. | Tratamente faciale | HIFU, Trat. faciale, Dermapen, Microneedling | HIFU candidat, Alegere tip ten | Cât durează rezultate |
| Dermapen vs peeling vs laser | Tratamente faciale | Dermapen, Microneedling, Microderm, Trat. faciale | Microneedling vs Dermapen, Microderm beneficii | Pori dilatați |

Fiecare articol: **callout CTA**, `hubLink`, `relatedArticles`, **8 FAQ** (FAQ Schema la publicare via `app/blog/[slug]/page.tsx`).

---

## 4. Riscuri de canibalizare

| Severitate | Articol | Risc | Mitigare aplicată |
|------------|---------|------|-------------------|
| **Medie** | `lifting-nechirurgical-vs-chirurgical` | Suprapunere cu `hifu-facial-lifting-nechirurgical` | Focus decizie generală; HIFU = o opțiune, nu pagina candidat |
| **Medie** | `dermapen-peeling-laser-cicatrici-textura` | Suprapunere cu `microneedling-vs-dermapen-diferente` + pagina Dermapen | Compară 3 tehnologii (dermapen/peeling/laser), nu doar ace |
| **Scăzută** | `detoxifiere-limfatica-ce-inseamna` | Cluster drenaj (3 articole existente + batch1) | Unghi educativ concept, nu protocol |
| **Scăzută** | `de-ce-apar-vergeturile-cauze` | vs `vergeturi-tratamente-rezultate` | Cauze only; link explicit spre articol soluții |
| **Scăzută** | `curatare-faciala-acasa-vs-salon` | vs `cum-scapi-de-puncte-negre` + Hydrafacial serviciu | Comparativ acasă/salon, nu procedură comercială |
| **Scăzută** | `cat-de-des-tratamente-corporale` | vs `cat-de-des-tratamente-faciale` (batch1) | Topic distinct (corp vs față) |
| **Scăzută** | `recuperare-ten-dupa-soare` | vs `pregatire-ten-vara-pasi` (batch1) | Post-soare vs pre-vară |
| **Niciunul** | — | Keyword `[serviciu] Craiova` principal | ✅ Respectat în toate title-urile |

---

## 5. Verificare manuală recomandată înainte de publicare

| Prioritate | Articol | Motiv |
|------------|---------|-------|
| **Ridicată** | `lifting-nechirurgical-vs-chirurgical` | Verifică în GSC după indexare că nu depășește pagina HIFU sau articolul candidat HIFU |
| **Ridicată** | `dermapen-peeling-laser-cicatrici-textura` | Confirmă că title/meta nu domină „Dermapen Craiova”; mențiunea „Dermapen” e ca tehnologie |
| **Medie** | `detoxifiere-limfatica-ce-inseamna` | Citește alături de `ghid-complet-drenaj-limfatic` — diferențiere concept vs protocol |
| **Medie** | `de-ce-apar-vergeturile-cauze` | Confirmă că nu duplică secțiunea de cauze din `vergeturi-tratamente-rezultate` |
| **Medie** | `ce-evitat-dupa-tratamente-estetice` | Actualizează la publicare dacă apar noi proceduri în salon |
| **Scăzută** | Toate batch 2 | Adaugă imagini JPG în `public/images/blog/drafts/` |
| **Scăzută** | Toate batch 2 | La publicare: patch `enrich-posts.ts` + interlinking bidirecțional cu Batch 1 |

---

## 6. Stare totală drafturi

| Batch | Articole | Perioadă calendar |
|-------|----------|-------------------|
| Batch 1 | 10 | Luna 1 — iulie 2026 |
| Batch 2 | 10 | Săpt. 4 iul + Luna 2 — aug 2026 |
| **Total** | **20** | Rămân **10 articole** (Luna 2 S8 + Luna 3) |

---

## 7. Publicare batch 2 (checklist)

1. Imagini pentru cele 10 slug-uri noi
2. Import în `posts.ts` (opțional: publicare batch 1 + 2 simultan)
3. Patch-uri `enrich-posts.ts` per slug
4. Verificare linkuri către draft-uri Batch 1 (devin valide la publicare comună)
5. `npm run build` — așteptat **50** rute blog după publicare completă Batch 1+2
