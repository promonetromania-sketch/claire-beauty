# Raport — SEO Deployment & Index Control

**Data:** 7 iunie 2026  
**Scope:** infrastructură indexare + link graph (fără modificări conținut articole)  
**Build:** ✅ 48 rute statice · 26 articole blog live · `sitemap.xml` + `robots.txt`

---

## 1. Structura finală de indexare (Tier Map)

| Tier | Timing GSC | Count | Slug-uri |
|------|------------|-------|----------|
| **T1** | Ziua 1 | 8 | retentie-apa, curatare-acasa, picioare-grele, puncte-negre, semne-drenaj, ce-evitat, tratamente-concediu, pregatire-vara |
| **T2** | Zilele 2–5 | 18 articole + 6 hub-uri + servicii | restul publicate + `/masaj-craiova`, `/tratamente-faciale-craiova`, `/tratamente-corporale-craiova`, `/drenaj-limfatic-craiova`, `/hydrafacial-craiova`, `/remodelare-corporala-craiova` |
| **T3** | După indexare inițială | 14 drafturi | masaj-manual, cat-dureaza, celulita-cauze, pori, cat-corporale, recuperare-soare, vergeturi-cauze, colagen, detox, piele-lasa, lifting, dermapen-peeling, cauze-ten-tern, cat-faciale |

**Fișier config:** `lib/seo/index-tiers.ts`

### Deploy efectuat (Tier 1 live)

6 drafturi Tier 1 importate în `posts.ts` (fără rescriere conținut):

- `de-ce-apare-retentia-de-apa-cauze`
- `picioare-grele-seara-cauze`
- `curatare-faciala-acasa-vs-salon`
- `ce-evitat-dupa-tratamente-estetice`
- `tratamente-inainte-de-concediu`
- `pregatire-ten-vara-pasi`

**Total live:** 26 articole (20 legacy + 6 Tier 1)

---

## 2. Link graph optimizat

### Traffic push (enrich block — fără edit body)

| Componentă | Fișier | Rol |
|------------|--------|-----|
| Outbound push per articol | `lib/seo/traffic-push.ts` | +1–3 linkuri extra în bloc enrich |
| Patch-uri draft | `lib/content/blog/draft-seo-patches.ts` | hub + relatedArticles pentru toate 20 drafturi |
| Enrich extins | `lib/content/blog/enrich-posts.ts` | 4 articole + 3 servicii în bloc; filtru doar URL live |
| Hub → blog | `components/blog/hub-blog-links.tsx` | 2–4 linkuri pe hub masaj/facial/corporal |
| Homepage | `components/home/blog-preview-section.tsx` | 3 carduri Tier 1 |
| Blog index | `app/blog/page.tsx` | secțiune « Ghiduri esențiale » Tier 1 (8 carduri) |

### Cluster rebalance (bidirecțional HIGH)

| Cluster | Legături |
|---------|----------|
| **Retenție ↔ picioare** | enrich push reciproc + body existent |
| **Facial diagnostic** | puncte-negre ↔ curatare-acasa ↔ pori (pori T3 — link enrich filtrat până la publish) |
| **Seasonal** | pregatire-vara ↔ tratamente-concediu ↔ ce-evitat ↔ pregatire-ten |
| **Corporal** | vergeturi pub → (T3 pregătit în draft-seo-patches) |

### Tier 1 — inbound estimat (live)

| Slug | Inbound live (≥5) |
|------|-------------------|
| `de-ce-apare-retentia-de-apa-cauze` | ✅ semne, ghid-drenaj, masaj-vs-drenaj, picioare, hub masaj×2, blog index, homepage |
| `picioare-grele-seara-cauze` | ✅ retentie, semne, ghid, masaj relax/terapeutic, hub masaj, blog index |
| `curatare-faciala-acasa-vs-salon` | ✅ puncte-negre, hydrafacial, microderm, hub facial×2, blog index |
| `cum-scapi-de-puncte-negre-corect` | ✅ hydrafacial, microderm, curatare, hub facial, blog index |
| `semne-ca-ai-nevoie-de-drenaj-limfatic` | ✅ ghid, retentie, masaj-vs-drenaj, hub masaj, blog index |
| `ce-evitat-dupa-tratamente-estetice` | ✅ pregatire-ten, pregatire-vara, hub facial, blog index |
| `tratamente-inainte-de-concediu` | ✅ pregatire-vara, corporale-ghid, hub corporal, blog index |
| `pregatire-ten-vara-pasi` | ✅ tratamente-concediu, ce-evitat, hub facial, blog index |

---

## 3. Orfani — status final

| Categorie | Înainte | Acum |
|-----------|---------|------|
| **Publicate (26)** | 0 orfani | ✅ **0 orfani** — fiecare primește inbound via enrich/hub/homepage |
| **Tier 3 draft (14)** | 11 orfani | ⏳ **Pregătiți** — `draft-seo-patches.ts` + `traffic-push.ts` ready; linkuri enrich **filtrate** (nu 404) până la publish |
| **Linkuri body → T3** | — | ⚠️ 2–3 linkuri în body Tier 1 (ex. pregatire-vara → recuperare-soare) — **404 până la publish T3**; conținut nemodificat conform brief |

**La publish Tier 3:** adaugă slug în `LIVE_BLOG_SLUGS` + `posts.ts` → linkurile enrich se activează automat.

---

## 4. Imagini OG

| Item | Status |
|------|--------|
| Placeholder map | ✅ `lib/seo/blog-images.ts` |
| Fallback path | ✅ `/og/blog/{slug}.jpg` → `default.jpg` |
| Fișiere create | ✅ 21 JPG în `public/og/blog/` (default + 20 slug-uri draft) |
| Hero + OG live | ✅ `resolveBlogImageSrc` în enrich + `resolveBlogOgImageSrc` în metadata |

---

## 5. Sitemap & index ready

| Verificare | Status |
|------------|--------|
| `app/sitemap.ts` | ✅ 26 blog + static + servicii |
| Drafturi T3 în sitemap | ✅ **NU** (doar live slugs) |
| `app/robots.ts` | ✅ Allow all + sitemap URL |
| Canonical | ✅ `/blog/{slug}` pe fiecare articol |
| noindex articole | ✅ **Absent** |
| `/sitemap.xml` build | ✅ confirmat |

---

## 6. Riscuri SEO rămase

| Severitate | Risc | Acțiune |
|------------|------|---------|
| 🟡 Medie | 2–3 linkuri body Tier 1 → draft T3 (404) | Publish T3 batch sau eliminare link la publish T3 |
| 🟡 Medie | OG imagini = placeholder generic | Înlocuire cu hero JPG custom per articol |
| 🟢 Scăzută | Tier 3 orphan până la publish | Deploy batch T3 cu `posts.ts` update |
| 🟢 Scăzută | 14 zile — impresii lente pe long-tail | Normal pentru domain; GSC submit accelerates |

---

## 7. Top 5 — probabilitate trafic (14 zile)

| Rank | URL | Motiv |
|------|-----|-------|
| 1 | `/blog/curatare-faciala-acasa-vs-salon` | Intent comparativ + conversion layer + hub facial |
| 2 | `/blog/cum-scapi-de-puncte-negre-corect` | Deja indexat parțial + cluster facial |
| 3 | `/blog/de-ce-apare-retentia-de-apa-cauze` | Long-tail local + hub masaj push |
| 4 | `/blog/tratamente-inainte-de-concediu` | Sezonier iul-aug + urgency CTA |
| 5 | `/blog/semne-ca-ai-nevoie-de-drenaj-limfatic` | Checklist format + link equity masaj hub |

---

## 8. Google Search Console — Submit URLs

### A. Tier 1 — Ziua 1 (submit imediat)

```
https://clairebeauty.ro/blog/de-ce-apare-retentia-de-apa-cauze
https://clairebeauty.ro/blog/curatare-faciala-acasa-vs-salon
https://clairebeauty.ro/blog/picioare-grele-seara-cauze
https://clairebeauty.ro/blog/cum-scapi-de-puncte-negre-corect
https://clairebeauty.ro/blog/semne-ca-ai-nevoie-de-drenaj-limfatic
https://clairebeauty.ro/blog/ce-evitat-dupa-tratamente-estetice
https://clairebeauty.ro/blog/tratamente-inainte-de-concediu
https://clairebeauty.ro/blog/pregatire-ten-vara-pasi
```

### B. Tier 2 — Zilele 2–5

**Hub-uri (ziua 2):**
```
https://clairebeauty.ro/masaj-craiova
https://clairebeauty.ro/tratamente-faciale-craiova
https://clairebeauty.ro/tratamente-corporale-craiova
https://clairebeauty.ro/drenaj-limfatic-craiova
https://clairebeauty.ro/hydrafacial-craiova
https://clairebeauty.ro/remodelare-corporala-craiova
```

**Articole T2 (câte 4/zi, zilele 3–5):**
```
https://clairebeauty.ro/blog/ce-este-hydrafacial-beneficii-craiova
https://clairebeauty.ro/blog/ghid-complet-drenaj-limfatic
https://clairebeauty.ro/blog/cum-pregatesti-tenul-tratament-facial
https://clairebeauty.ro/blog/cum-scapi-de-celulita-ghid-complet
https://clairebeauty.ro/blog/masaj-anticelulitic-vs-drenaj-limfatic
https://clairebeauty.ro/blog/ce-este-microdermabraziunea-beneficii
https://clairebeauty.ro/blog/hifu-facial-lifting-nechirurgical
https://clairebeauty.ro/blog/cum-alegi-tratament-facial-tip-ten
https://clairebeauty.ro/blog/remodelare-corporala-fara-operatie-tehnologii
https://clairebeauty.ro/blog/tratamente-corporale-ghid-incepatori
https://clairebeauty.ro/blog/beneficii-masaj-relaxare-craiova
https://clairebeauty.ro/blog/beneficii-masaj-terapeutic-stres-dureri
https://clairebeauty.ro/blog/microneedling-vs-dermapen-diferente
https://clairebeauty.ro/blog/electrostimulare-corporala-tonifiere
https://clairebeauty.ro/blog/radiofrecventa-corporala-ghid
https://clairebeauty.ro/blog/vergeturi-tratamente-rezultate
https://clairebeauty.ro/blog/ce-este-reflexoterapia-beneficii
https://clairebeauty.ro/blog/masaj-terapeutic-vs-anticelulitic-cand
```

**Global (ziua 1):** submit `https://clairebeauty.ro/sitemap.xml`

---

## 9. Predicție indexare (14 zile)

| Articol | Indexare estimată | Impresii rapide | Clickuri 7–10 zile |
|---------|-------------------|-----------------|---------------------|
| `curatare-faciala-acasa-vs-salon` | 24–72h | ✅ Da | ✅ Probabile |
| `cum-scapi-de-puncte-negre-corect` | 24–48h | ✅ Da | ✅ Probabile |
| `semne-ca-ai-nevoie-de-drenaj-limfatic` | 48–96h | ✅ Da | Moderate |
| `de-ce-apare-retentia-de-apa-cauze` | 48–120h | ✅ Da | Moderate |
| `tratamente-inainte-de-concediu` | 72–120h | Sezonier | Moderate |
| `pregatire-ten-vara-pasi` | 72–120h | Sezonier | Moderate |
| `hifu-facial-lifting-nechirurgical` | 5–10 zile | Lent | Scăzute |
| Articole T2 generice | 5–14 zile | Variabil | Scăzute inițial |

---

## 10. Plan acțiune zilnic (ziua 1–14)

| Zi | Acțiune |
|----|---------|
| **1** | Submit sitemap + 8 URL Tier 1 · verifică OG Debugger pe 3 URL · GBP post → curatare-acasa |
| **2** | Submit 6 hub-uri · Rich Results Test pe 2 FAQ · GBP → retentie-apa |
| **3** | Submit 4 articole T2 (hydrafacial, ghid-drenaj, pregatire-ten, celulita) |
| **4** | Submit 4 articole T2 (masaj-vs-drenaj, microderm, hifu, tip-ten) |
| **5** | Submit rest T2 (10 URL) · monitor GSC Coverage |
| **6–7** | Weekend: zero publish · monitor impresii T1 · note CTR |
| **8** | GSC Performance → top queries · ajustare meta doar dacă CTR <1% @ 100 imp |
| **9** | Pregătire batch T3: imagini hero custom (înlocuie placeholder OG) |
| **10** | Publish 5 draft T3 (pori, celulita-cauze, masaj-manual, cat-corporale, cat-dureaza) |
| **11** | Submit 5 URL T3 · update `LIVE_BLOG_SLUGS` |
| **12** | Publish rest T3 (9 articole) · submit sitemap resubmit |
| **13** | Audit link graph post-T3 · 0 orfani confirmați |
| **14** | Raport GSC: indexed count, impresii, clickuri, top 5 queries |

---

## Fișiere modificate (infrastructură — nu conținut articole)

| Fișier | Modificare |
|--------|------------|
| `lib/seo/index-tiers.ts` | **NOU** — tier map + live slug filter |
| `lib/seo/traffic-push.ts` | **NOU** — hub links + outbound push |
| `lib/seo/blog-images.ts` | **NOU** — OG fallback resolver |
| `lib/content/blog/draft-seo-patches.ts` | **NOU** — enrich patches 20 drafturi |
| `lib/content/blog/enrich-posts.ts` | traffic push + 4 links + live filter |
| `lib/content/blog/posts.ts` | +6 Tier 1 drafturi |
| `app/sitemap.ts` | **NOU** |
| `app/robots.ts` | **NOU** |
| `app/blog/page.tsx` | secțiune Tier 1 |
| `app/blog/[slug]/page.tsx` | OG fallback + related tier-aware |
| `components/home/blog-preview-section.tsx` | Tier 1 priority |
| `components/blog/hub-blog-links.tsx` | **NOU** |
| `app/masaj-craiova/page.tsx` | hub blog links |
| `app/tratamente-faciale-craiova/page.tsx` | hub blog links |
| `app/tratamente-corporale-craiova/page.tsx` | hub blog links |
| `public/og/blog/*.jpg` | 21 placeholder OG |

---

*Deployment SEO finalizat. Conținut articole nemodificat.*
