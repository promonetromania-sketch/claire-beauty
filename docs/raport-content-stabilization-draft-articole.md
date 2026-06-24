# Raport — Content stabilization draft articole (20)

**Data:** 7 iunie 2026  
**Scope:** toate drafturile Batch 1 + Batch 2  
**Modificat:** conținut body, H2, callout CTA, linkuri inline  
**Neschimbat:** slug, title SEO, meta description, H1, `posts.ts`, routing  
**Build:** `npm run build` — ✅ 40 pagini

---

## 1. Articole modificate (20/20)

| # | Slug | Cuvinte (înainte → după) | Extins | CTA nou |
|---|------|--------------------------|--------|---------|
| 1 | `de-ce-apare-retentia-de-apa-cauze` | 1547 → **1643** | +96 | consultație inițială |
| 2 | `pregatire-ten-vara-pasi` | 1308 → **1560** | +252 | plan tratament personalizat |
| 3 | `picioare-grele-seara-cauze` | 1275 → **1507** | +232 | analiză personalizată |
| 4 | `masaj-manual-vs-aparat-remodelare` | 1490 → **1630** | +140 | programare evaluare |
| 5 | `cat-dureaza-rezultate-tratamente-estetice` | 1470 → **1651** | +181 | consultație inițială |
| 6 | `de-ce-apare-celulita-cauze-mituri` | 1575 → **1576** | +1 | programare evaluare |
| 7 | `tratamente-inainte-de-concediu` | 1445 → **1608** | +163 | plan tratament personalizat |
| 8 | `cauze-ten-tern-fara-stralucire` | 1498 → **1605** | +107 | analiză personalizată |
| 9 | `cat-de-des-tratamente-faciale` | 1489 → **1658** | +169 | recomandare specialist |
| 10 | `pori-dilatati-cauze-obiceiuri` | 1431 → **1621** | +190 | consultație inițială |
| 11 | `curatare-faciala-acasa-vs-salon` | 1619 → **1613** | −6* | analiză personalizată |
| 12 | `cat-de-des-tratamente-corporale` | 1452 → **1745** | +293 | recomandare specialist |
| 13 | `recuperare-ten-dupa-soare` | 1392 → **1660** | +268 | programare evaluare |
| 14 | `ce-evitat-dupa-tratamente-estetice` | 1497 → **1621** | +124 | plan tratament personalizat |
| 15 | `de-ce-apar-vergeturile-cauze` | 1467 → **1607** | +140 | consultație inițială |
| 16 | `colagen-explicat-simplu` | 1444 → **1619** | +175 | recomandare specialist |
| 17 | `detoxifiere-limfatica-ce-inseamna` | 1365 → **1553** | +188 | analiză personalizată |
| 18 | `piele-lasa-cauze-fara-operatie` | 1732 → **1767** | +35 | programare evaluare |
| 19 | `lifting-nechirurgical-vs-chirurgical` | 1528 → **1593** | +65 | consultație inițială |
| 20 | `dermapen-peeling-laser-cicatrici-textura` | 1434 → **1688** | +254 | recomandare specialist |

*\*curatare: ușoară condensare intro, fără pierdere de informație*

**Total cuvinte adăugate (net): ~3.045** (29.458 → 32.503 body+FAQ)  
**Articole sub 1500 cuvinte:** 0 (toate ≥ 1507)

---

## 2. Pattern-uri AI eliminate

| Pattern | Status |
|---------|--------|
| « Acest ghid explică… » | ✅ Eliminat din toate intro-urile (0 apariții) |
| « Obiectivul realist nu este… » | ✅ Eliminat / rescris (concluzii naturale) |
| « Hub-ul nostru reunește… » | ✅ Înlocuit cu « Pagina de [serviciu]… » / link contextual |
| « Când merită o abordare profesională » | ✅ H2 redenumite (ex: « Drenaj limfatic: când intervine salonul ») |
| « fără promisiuni nerealiste » (CTA) | ✅ Eliminat din toate callout-urile |
| « Cauza 1–7: » (H2 numerotate) | ✅ Transformate în titluri descriptive |
| « Explorează toate opțiunile în hub » | ✅ Rescris contextual |

**Verificare grep post-modificare:** 0 match-uri pentru pattern-urile de mai sus.

---

## 3. Diferențiere perechi obligatorii

| Pereche | Separare aplicată |
|---------|-------------------|
| **Retenție apă** vs **Picioare grele** | Retenție = mecanism fiziologic + 7 factori hidrici; Picioare = circulație venoasă + final de zi + scenariu birou; cross-link bidirecțional |
| **Lifting nechir.** vs **HIFU** | Lifting = cadru decizional general; HIFU menționat ca opțiune, callout spre hub facial (nu pagina HIFU) |
| **Dermapen/peeling/laser** vs **Microneedling vs Dermapen** | Articol compară 3 tehnologii; H2 « Matrice de decizie »; focus textură/cicatrici, nu pagina serviciu |
| **Frecvență faciale** vs **Frecvență corporale** | Scenarii distincte (Andreea/ten gras vs calendar corporal narrative) |
| **Pregătire vară** vs **Recuperare soare** | Timeline pre/post; H2 « zilele 1–7 și 7–21 » doar la recuperare |

---

## 4. CTA-uri variate (5 formulări)

| Formulare | Articole |
|-----------|----------|
| **consultație inițială** | retenție apă, cat-dureaza-rezultate, pori dilatați, vergeturi, lifting nechir. |
| **analiză personalizată** | picioare grele, ten tern, curatare acasa, detox limfatic |
| **programare evaluare** | masaj vs aparat, celulita, recuperare soare, piele lasa |
| **plan tratament personalizat** | pregătire vară, tratamente concediu, ce evitat post-procedură |
| **recomandare specialist** | frecvență faciale, frecvență corporale, colagen, dermapen/peeling/laser |

---

## 5. Interlinking

- Linkuri duplicate spre același articol în același paragraf: **reduse** (ex: detox limfatic — max 2 linkuri spre ghid drenaj în body)
- Cross-link draft ↔ draft: păstrat (retenție ↔ picioare grele)
- Hub links: păstrate via `hubLink` + mențiuni inline rescrise

---

## 6. Secțiuni noi adăugate (exemple)

| Articol | H2 / conținut nou |
|---------|-------------------|
| picioare-grele | Scenariu Maria, contabilă — zi tipică birou |
| pregatire-ten-vara | Scenariu Ana — 4 săptămâni înainte de mare |
| recuperare-ten-dupa-soare | Timeline zilele 1–7 și 7–21 post-vacanță |
| cat-de-des-tratamente-corporale | Calendar corporal narrative |
| dermapen-peeling-laser | Matrice de decizie + consultație comparativă |
| colagen-explicat-simplu | Ce degradează colagenul (HIFU ca opțiune secundară) |
| cat-dureaza-rezultate | Timeline Dermapen — scenariu Elena |

---

## 7. Risc SEO actual (după optimizare)

| Severitate | Articol | Status |
|------------|---------|--------|
| **Medie** | `lifting-nechirurgical-vs-chirurgical` | Îmbunătățit — HIFU de-emphasized; monitorizare GSC la publicare |
| **Medie** | `dermapen-peeling-laser-cicatrici-textura` | Îmbunătățit — focus comparativ 3 tech; callout spre hub facial |
| **Scăzută** | Cluster drenaj (retenție, picioare, detox) | Diferențiere editorială clară; risc acceptabil |
| **Scăzută** | Restul | Fără keyword `[serviciu] Craiova` în title |
| **Neschimbat** | slug / title / meta / H1 | ✅ Respectat |

---

## 8. Recomandare publicare

| Verdict | Detaliu |
|---------|---------|
| **✅ PUBLICARE** | Batch 1 + Batch 2 simultan — conținut stabilizat, toate ≥1500 cuvinte, pattern-uri AI eliminate |
| **Înainte de publicare** | Adaugă 20 imagini hero în `public/images/blog/drafts/` |
| **La publicare** | Import în `posts.ts` + patch `enrich-posts.ts` |
| **După indexare (90 zile)** | Verificare GSC pentru lifting nechir. și dermapen/peeling/laser |
| **❌ PAUZĂ** | Nu necesară — rewrite major nu e indicat |
| **❌ REWRITE** | Nu necesar — doar monitorizare post-publicare pe 2 articole |

---

## 9. Fișiere modificate

```
lib/content/blog/articles/drafts/*.ts  (20 fișiere)
docs/raport-content-stabilization-draft-articole.md  (acest raport)
```

**Neschimbat:** `posts.ts`, `app/blog/*`, slug-uri, title, meta.

---

*Generat după content stabilization — iunie 2026*
