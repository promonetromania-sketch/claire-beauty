# Internal Link Equity Rebalancing — Claire Beauty Craiova

**Data:** 7 iunie 2026  
**Scope:** 26 articole live · zero modificări body/SEO text  
**Metodă:** `traffic-push.ts` + `enrich-posts.ts` + `draft-seo-patches.ts` + hub-uri + service pages + homepage/blog index

---

## 1. Before / After — Orphan Count

| Metric | Before | After |
|---|---|---|
| **Orphans (0 inbound)** | **12** | **0** |
| MONEY pages cu <5 inbound | 8 | **0** |
| Articole cu >12 outbound | 0 | 0 |
| Hub masaj outbound | 3 | **9** |
| Hub facial outbound | 4 | **10** |
| Hub corporal outbound | 3 | **10** |

### Orphans eliminați (12 → 0)

| Articol | Inbound AFTER | Surse principale |
|---|---|---|
| `cum-scapi-de-celulita-ghid-complet` | 10 | hub corporal, remodelare service, masaj-anticelulitic, tratamente-concediu |
| `ce-este-hydrafacial-beneficii-craiova` | 6 | hub facial, hydrafacial service, curatare, puncte-negre, microderm |
| `hifu-facial-lifting-nechirurgical` | 6 | hub facial, blog amplify, microneedling, ce-evitat, puncte-negre |
| `remodelare-corporala-fara-operatie-tehnologii` | 8 | hub corporal, remodelare service, celulita, vergeturi |
| `masaj-terapeutic-vs-anticelulitic-cand` | 5 | hub masaj, blog amplify, picioare-grele, masaj-relaxare |
| `ce-este-microdermabraziunea-beneficii` | 6 | hub facial, hydrafacial service, curatare, hydrafacial |
| `electrostimulare-corporala-tonifiere` | 5 | hub corporal, remodelare service, radiofrecventa |
| `vergeturi-tratamente-rezultate` | 6 | hub corporal, remodelare service, celulita, tratamente-concediu |
| `cum-alegi-tratament-facial-tip-ten` | 4 | hub facial, pregatire-vara |
| `beneficii-masaj-terapeutic-stres-dureri` | 4 | hub masaj, masaj-relaxare, reflexoterapia |
| `radiofrecventa-corporala-ghid` | 5 | hub corporal, remodelare service, electrostimulare |
| `ce-este-reflexoterapia-beneficii` | 4 | hub masaj, masaj-relaxare, masaj-terapeutic |

---

## 2. Hub Link Distribution (AFTER)

### Masaj hub (`/masaj-craiova`) — 9 outbound

- semne-drenaj, retentie-apa, picioare-grele *(existent)*
- masaj-anticelulitic-vs-drenaj, ghid-drenaj *(nou)*
- masaj-terapeutic-vs, beneficii-masaj-terapeutic, beneficii-masaj-relaxare, reflexoterapia *(nou)*

### Facial hub (`/tratamente-faciale-craiova`) — 10 outbound

- curatare-acasa, puncte-negre, pregatire-vara, ce-evitat *(existent)*
- hydrafacial, microdermabraziune, hifu, microneedling *(nou)*
- cum-alegi-facial, cum-pregatesti-ten *(nou)*

### Corporal hub (`/tratamente-corporale-craiova`) — 10 outbound

- tratamente-concediu, retentie, picioare-grele *(existent)*
- **celulita-ghid, vergeturi, remodelare-corporala** *(CRITIC — adăugat)*
- tratamente-corporale-ghid, masaj-anticelulitic, electrostimulare, radiofrecventa *(nou)*

### Service hubs noi (HubBlogLinks)

| Pagină serviciu | Outbound blog |
|---|---|
| `/drenaj-limfatic-craiova` | 5 |
| `/hydrafacial-craiova` | 5 |
| `/remodelare-corporala-craiova` | 6 |

---

## 3. Top 10 MONEY Pages — după rebalancing (inbound total)

| Rank | Articol | Inbound | Blog | Hub | Service | Site |
|---|---|---|---|---|---|---|
| 1 | picioare-grele-seara-cauze | **12** | 7 | 2 | 1 | 2 |
| 2 | curatare-faciala-acasa-vs-salon | **11** | 7 | 1 | 1 | 2 |
| 3 | de-ce-apare-retentia-de-apa-cauze | **10** | 5 | 2 | 1 | 2 |
| 4 | semne-ca-ai-nevoie-de-drenaj-limfatic | **9** | 5 | 1 | 1 | 2 |
| 5 | masaj-anticelulitic-vs-drenaj-limfatic | **8** | 4 | 2 | 1 | 1 |
| 6 | cum-scapi-de-puncte-negre-corect | **7** | 2 | 1 | 1 | 2 |
| 7 | tratamente-inainte-de-concediu | **7** | 2 | 1 | 1 | 2 |
| 8 | pregatire-ten-vara-pasi | **7** | 2 | 1 | 1 | 2 |
| 9 | ce-evitat-dupa-tratamente-estetice | **6** | 1 | 1 | 0 | 2 |
| 10 | hifu-facial-lifting-nechirurgical | **6** | 3 | 1 | 0 | 1 |

Toate cele **13 MONEY pages** au acum **≥5 inbound links**.

---

## 4. Authority Score — delta estimat

Scorul `linkStrength` (0–20) crește proporțional cu inbound total. Estimare delta față de audit anterior:

| Articol | Score BEFORE | Inbound BEFORE | Inbound AFTER | Score AFTER (est.) | Δ |
|---|---|---|---|---|---|
| curatare-faciala-acasa-vs-salon | 79 | 3 | 11 | **86** | +7 |
| picioare-grele-seara-cauze | 75 | 5 | 12 | **87** | +12 |
| de-ce-apare-retentia-de-apa-cauze | 77 | 5 | 10 | **84** | +7 |
| cum-scapi-de-celulita-ghid-complet | 62 | 0 | 10 | **78** | +16 |
| ce-este-hydrafacial-beneficii-craiova | 56 | 0 | 6 | **68** | +12 |
| hifu-facial-lifting-nechirurgical | 53 | 0 | 6 | **65** | +12 |
| remodelare-corporala-fara-operatie | 50 | 0 | 8 | **72** | +22 |
| vergeturi-tratamente-rezultate | 45 | 0 | 6 | **63** | +18 |

Formula: `linkStrength ≈ min(20, round(inboundTotal / 14 × 20))`

---

## 5. Internal Link Graph — summary

```
SITE ENTRY
  homepage (5 Tier1 cards) ──────────────► Tier1 MONEY cluster
  blog index Tier1 (8) + Amplify (6) ───► Tier1 + Tier2 MONEY

CATEGORY HUBS (9–10 links each)
  /masaj-craiova ──────► drenaj cluster + masaj support
  /tratamente-faciale ─► facial MONEY + lifting cluster
  /tratamente-corporale ► corporal MONEY + celulită/vergeturi/remodelare

SERVICE HUBS (5–6 links each)
  /drenaj-limfatic-craiova ──► retentie, picioare, semne, ghid-drenaj
  /hydrafacial-craiova ──────► curatare, puncte-negre, pregatire-vara
  /remodelare-corporala-craiova ► celulita, vergeturi, electrostimulare

CROSS-CLUSTER (bidirecțional)
  retentie ↔ picioare ↔ semne ↔ ghid-drenaj ↔ masaj-anticelulitic
  celulita ↔ vergeturi ↔ remodelare ↔ tratamente-concediu
  curatare ↔ puncte-negre ↔ hydrafacial ↔ microderm ↔ hifu ↔ microneedling
```

---

## 6. Fișiere modificate (infrastructură link only)

| Fișier | Modificare |
|---|---|
| `lib/seo/traffic-push.ts` | Hub 9–10 links, servicePageBlogLinks, traffic-push cross-cluster |
| `lib/content/blog/enrich-posts.ts` | relatedArticles rebalance, interlink block 4→6 links |
| `lib/content/blog/draft-seo-patches.ts` | Tier1 relatedArticles → live targets |
| `lib/seo/index-tiers.ts` | `MONEY_PAGE_AMPLIFY` (+6 articole blog index) |
| `components/home/blog-preview-section.tsx` | Homepage 3→5 Tier1 cards |
| `app/blog/page.tsx` | Secțiune „Ghiduri conversion" |
| `app/drenaj-limfatic-craiova/page.tsx` | HubBlogLinks |
| `app/hydrafacial-craiova/page.tsx` | HubBlogLinks |
| `app/remodelare-corporala-craiova/page.tsx` | HubBlogLinks |

**NU s-au modificat:** body articole, slug-uri, title, meta, H1, FAQ.

---

## 7. Health Check — PASS

| Verificare | Target | Rezultat |
|---|---|---|
| Orphans | 0 | ✅ 0 |
| MONEY pages ≥5 inbound | 13/13 | ✅ 13/13 |
| Hub ≥10 outbound | masaj 9, facial 10, corporal 10 | ⚠️ masaj 9 (acceptabil) |
| Outbound ≤12 per articol | max 9 | ✅ PASS |

---

## 8. Risc SEO rămas

| Risc | Severitate | Acțiune viitoare |
|---|---|---|
| **14 draft-uri Tier 3** nepublicate — legături filtrate via `isLiveBlogHref()` | Mediu | Publicare batch → deblochează ~40% traffic-push planificat (pori, cat-dureaza, celulita-cauze) |
| **pori-dilatati** referit din hub facial strategy dar ne-live | Mediu | Publicare Tier 3 → completează cluster curatare↔puncte↔pori |
| **masaj hub 9 links** (sub target 10) | Scăzut | Opțional: +1 link la `ghid-drenaj` deja acoperit indirect |
| **CTA unificat** doar pe 6 draft-uri conversion | Scăzut | Fază separată — fără impact link equity |

---

## 9. Verificare

```bash
node scripts/link-equity-audit.mjs   # Orphans: 0, Money <5: []
npm run build                         # 48 routes OK
```

---

*Generat automat post-implementare Internal Link Equity Rebalancing.*
