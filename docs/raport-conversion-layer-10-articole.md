# Raport — Conversion Layer (10 articole lead generation)

**Data:** 7 iunie 2026  
**Scope:** 10 drafturi cu potențial maxim de conversie  
**Modificări:** conținut conversion only — **slug, title SEO, meta description, H1 nemodificate**

---

## 1. Articole modificate

| # | Slug | Tip intenție | Fișier |
|---|------|--------------|--------|
| 1 | `picioare-grele-seara-cauze` | Problemă | `lib/content/blog/articles/drafts/picioare-grele-seara-cauze.ts` |
| 2 | `de-ce-apare-retentia-de-apa-cauze` | Problemă | `lib/content/blog/articles/drafts/de-ce-apare-retentia-de-apa-cauze.ts` |
| 3 | `de-ce-apare-celulita-cauze-mituri` | Problemă | `lib/content/blog/articles/drafts/de-ce-apare-celulita-cauze-mituri.ts` |
| 4 | `masaj-manual-vs-aparat-remodelare` | Comparativ | `lib/content/blog/articles/drafts/masaj-manual-vs-aparat-remodelare.ts` |
| 5 | `cat-de-des-tratamente-corporale` | Ghid decizie | `lib/content/blog/articles/drafts/cat-de-des-tratamente-corporale.ts` |
| 6 | `tratamente-inainte-de-concediu` | Urgență | `lib/content/blog/articles/drafts/tratamente-inainte-de-concediu.ts` |
| 7 | `lifting-nechirurgical-vs-chirurgical` | Comparativ | `lib/content/blog/articles/drafts/lifting-nechirurgical-vs-chirurgical.ts` |
| 8 | `curatare-faciala-acasa-vs-salon` | Comparativ | `lib/content/blog/articles/drafts/curatare-faciala-acasa-vs-salon.ts` |
| 9 | `cat-dureaza-rezultate-tratamente-estetice` | Ghid decizie | `lib/content/blog/articles/drafts/cat-dureaza-rezultate-tratamente-estetice.ts` |
| 10 | `pori-dilatati-cauze-obiceiuri` | Problemă | `lib/content/blog/articles/drafts/pori-dilatati-cauze-obiceiuri.ts` |

**Build:** ✅ `npm run build` — succes (40 pagini blog publicate)

---

## 2. Conversion layer adăugat

Fiecare articol include secțiunea **« Când este momentul să faci o evaluare profesională »** (înainte de FAQ), cu:

| Element | Prezent pe 10/10 |
|---------|------------------|
| Semne clare că utilizatorul are nevoie de serviciu | ✅ |
| Tranziție problemă → soluție → programare | ✅ |
| Introducere soft servicii Claire Beauty | ✅ |
| Mențiune « în cadrul clinicii noastre din Craiova » | ✅ |
| Scenariu real (« majoritatea clientelor observă… ») | ✅ |

### Structură finală standard (10/10)

1. Introducere (problemă emoțională) — existent, păstrat  
2. Explicație cauză — existent  
3. Efecte asupra corpului/tenului — existent  
4. Greșeli frecvente — adăugat/confirmat  
5. **Când este momentul să faci o evaluare profesională** — **NOU**  
6. Soluții posibile — adăugat/renumerotat  
7. **Recomandare Claire Beauty Craiova** — **NOU/unificat**  
8. FAQ — nemodificat (8 întrebări)  
9. CTA unic — **unificat**

---

## 3. CTA-uri unificate

**Toate cele 10 articole** — CTA anterior înlocuit cu structura obligatorie:

### Titlu callout (identic)
> **Programează o analiză personalizată la Claire Beauty Craiova**

### 3 bulleturi (identice pe toate articolele)
- Evaluare personalizată  
- Plan adaptat tipului tău de piele/corp  
- Recomandare tratament corect  

### Link CTA
- Text: `Programează o analiză personalizată la Claire Beauty Craiova`  
- Href: `/contact`

### CTA-uri vechi eliminate (exemple)
| Articol | CTA vechi |
|---------|-----------|
| picioare-grele | « Picioare grele în fiecare seară? » |
| retentie-apa | « Retenție persistentă? Nu o ignora. » |
| celulita | « Vrei să înțelegi tipul tău de celulită? » |
| masaj-manual | « Nu știi de unde să începi? » |
| cat-corporale | « Nu știi ce frecvență ți se potrivește? » |
| tratamente-concediu | « Plecarea se apropie? » |
| lifting | « Lifting nechirurgical — e potrivit pentru tine? » |
| curatare-acasa | « Ten încărcat care nu răspunde… » |
| cat-dureaza | « Vrei un calendar clar pentru tenul tău? » |
| pori | « Pori vizibili care te deranjează? » |

---

## 4. Linkuri de conversie adăugate

Anchor text conversion-oriented + hub + cross-link între cele 10 articole.

| Articol | Servicii (conversion) | Hub | Cross-link (listă 10) |
|---------|----------------------|-----|------------------------|
| picioare-grele | programare drenaj limfatic Craiova, masaj terapeutic Craiova | L.masaj | retentie-apa |
| retentie-apa | programare drenaj limfatic Craiova, evaluare remodelare corporală | L.masaj | picioare-grele |
| celulita-cauze | evaluare remodelare corporală, L.tratamenteCorporale | hub corporal | masaj-manual |
| masaj-manual | evaluare remodelare corporală, L.tratamenteCorporale | hub corporal | cat-corporale |
| cat-corporale | evaluare remodelare corporală, programare drenaj limfatic Craiova | L.tratamenteCorporale | tratamente-concediu |
| tratamente-concediu | consultație tratament facial personalizat, evaluare remodelare corporală, programare drenaj limfatic Craiova | L.tratamenteFaciale + corporal | cat-dureaza |
| lifting | consultație tratament facial personalizat, L.tratamenteFaciale | hub facial | cat-dureaza |
| curatare-acasa | consultație tratament facial personalizat (×2), L.hydrafacial | L.tratamenteFaciale | pori-dilatati |
| cat-dureaza | consultație tratament facial personalizat, evaluare remodelare corporală | L.tratamenteFaciale | lifting |
| pori-dilatati | consultație tratament facial personalizat, L.tratamenteFaciale | hub facial | curatare-acasa |

**Total linkuri conversion noi (estimate):** ~35 anchor-uri orientate conversie (2+ servicii + hub + cross-link per articol)

### Mesh interlinking (cele 10 articole)

```
picioare ↔ retentie
celulita → masaj-manual → cat-corporale → tratamente-concediu → cat-dureaza → lifting
curatare ↔ pori
```

---

## 5. Top 5 — potențial maxim de programare

| Rank | Slug | Motiv conversie |
|------|------|-----------------|
| **1** | `curatare-faciala-acasa-vs-salon` | Intent comparativ ridicat, barieră scăzută (curățare), hook TikTok, conversie rapidă Hydrafacial |
| **2** | `tratamente-inainte-de-concediu` | Urgență sezonieră (iul–aug), deadline clar → programare imediată față + corp |
| **3** | `de-ce-apare-retentia-de-apa-cauze` | Problemă frecventă, drenaj = serviciu entry-level, ușurare după 1 ședință |
| **4** | `picioare-grele-seara-cauze` | Long-tail local, disconfort zilnic, cross-sell drenaj/masaj terapeutic |
| **5** | `pori-dilatati-cauze-obiceiuri` | Ten gras/mixt Craiova, pipeline Hydrafacial + microdermabraziune recurent |

---

## 6. Recomandare publicare / indexare

### Prioritate publicare (batch conversion-first)

**Faza 1 — imediat după imagini hero (10 JPG):**
1. `curatare-faciala-acasa-vs-salon`
2. `tratamente-inainte-de-concediu`
3. `de-ce-apare-retentia-de-apa-cauze`
4. `picioare-grele-seara-cauze`
5. `pori-dilatati-cauze-obiceiuri`

**Faza 2 — săptămâna 2:**
6. `de-ce-apare-celulita-cauze-mituri`
7. `masaj-manual-vs-aparat-remodelare`
8. `cat-de-des-tratamente-corporale`

**Faza 3 — săptămâna 3:**
9. `cat-dureaza-rezultate-tratamente-estetice`
10. `lifting-nechirurgical-vs-chirurgical`

### Pre-publicare obligatoriu
- [ ] 10 imagini hero în `/public/images/blog/drafts/` → mutare la `/public/images/blog/`
- [ ] Import în `posts.ts` + patch `enrich-posts.ts` (interlinking bidirecțional cu articole publicate)
- [ ] Request indexing GSC pentru primele 5 din Faza 1
- [ ] Verificare OG tags pe `/contact` ca destinație CTA

### Post-publicare (14 zile)
- Google Business Profile → post săptămânal cu link articol conversion (rotație Faza 1)
- Monitor GSC: impresii pe « curatare fata acasa salon », « tratamente inainte vacanta », « drenaj limfatic craiova »
- CTR pe CTA `/contact` — dacă <2%, testează buton sticky (viitor, nu în scope)

---

## Restricții respectate

| Element | Status |
|---------|--------|
| slug | ✅ nemodificat |
| title SEO | ✅ nemodificat |
| meta description | ✅ nemodificat |
| H1 | ✅ nemodificat |
| URL structure | ✅ nemodificat |
| Articole noi | ✅ 0 create |
| Alte pagini | ✅ nemodificate |
| Rescriere masivă conținut | ✅ evitată — doar layer conversion |

---

*Raport generat după modificări + build validat.*
