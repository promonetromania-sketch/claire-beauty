# Raport — Blog UI grid + image mapping fix

**Data:** 7 iunie 2026  
**Scope:** UI + image mapping only — fără modificări SEO, slug, conținut articole

---

## 1. Verificare articole `posts.ts` vs UI

| Sursă | Count |
|---|---|
| `posts.ts` (importuri articol) | **26** |
| `LIVE_BLOG_SLUGS` | **26** |
| Carduri renderate pe `/blog` (după fix) | **26** |

### Articole lipsă din UI

**Înainte:** Toate cele 26 erau pe pagină, dar împărțite în 3 secțiuni cu grile diferite:
- Tier 1: 8 articole (`lg:grid-cols-4`)
- Ghiduri conversion: 6 articole (`xl:grid-cols-5`)
- „Toate articolele”: **doar 12** articole (`lg:grid-cols-3`)

→ 14 articole **nu apăreau** în secțiunea „Toate articolele”, deși erau vizibile mai sus — confuzie UX + grid neuniform.

**După fix:** Un singur grid cu `getAllBlogPosts()` — **26/26 articole**, sortate (Tier 1 primele, apoi data).

### Confirmare match

**100% match** între `posts.ts` și UI render (`postsMatch: true`).

---

## 2. Fix grid desktop

### Modificări

| Fișier | Change |
|---|---|
| `app/blog/page.tsx` | Grid unificat `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| `components/blog/blog-card.tsx` | `line-clamp` pe title/excerpt + `min-h` pentru înălțime uniformă |
| `app/blog/page.tsx` | `<li className="h-full">` wrapper pentru stretch vertical |

### Reguli aplicate

- Desktop (`lg+`): **exact 3 coloane** — fără `grid-cols-4` / `grid-cols-5`
- Fără `auto-fit` / `auto-fill`
- Spacing uniform: `gap-8`
- Carduri: `h-full flex-col` + clamp pe text → înălțime logică consistentă pe rând

---

## 3. Image mapping explicit

### Fișier: `lib/seo/blog-images.ts`

- Export nou: `BLOG_IMAGE_BY_SLUG` — **26 intrări**, câte una per slug live
- Resolver actualizat: **map explicit → declared (dacă există) → `/og/blog/{slug}.jpg`**
- Eliminat fallback automat la `default.jpg` (cauza duplicatelor vizuale)

### Exemplu mapping

```ts
"de-ce-apare-retentia-de-apa-cauze": "/og/blog/de-ce-apare-retentia-de-apa-cauze.jpg",
"cum-scapi-de-puncte-negre-corect": "/images/blog/blog-puncte-negre.jpg",
// ... 26 total
```

---

## 4. Validare imagini

Script: `node scripts/blog-image-validate.mjs`

| Check | Rezultat |
|---|---|
| Slug-uri mapate | 26/26 |
| Fișiere lipsă pe disk | **0** |
| Path-uri duplicate (2 slug → 1 path) | **0** |
| Hash-uri duplicate (2 slug → aceeași imagine) | **0** |
| **1 articol = 1 imagine** | **TRUE** |

### Imagini duplicate găsite (înainte)

7 articole live + 21 fișiere `/og/blog/` partajau același placeholder (rezolvat în sesiunea anterioară).

### Imagini regenerate (acum)

**0** — toate fișierele mapate există și sunt unice; nu a fost nevoie de generare suplimentară.

---

## 5. Fișiere modificate

| Fișier | Tip |
|---|---|
| `app/blog/page.tsx` | Grid unificat 26 articole |
| `components/blog/blog-card.tsx` | Uniform card height |
| `lib/seo/blog-images.ts` | `BLOG_IMAGE_BY_SLUG` + resolver |
| `scripts/blog-image-validate.mjs` | Validare automată (nou) |

**Neatins:** `posts.ts`, slug-uri, meta SEO, body articole, routing.

---

## 6. Confirmare runtime

| Test | Status |
|---|---|
| `npm run build` | ✅ 48 routes |
| `blog-image-validate.mjs` | ✅ `oneToOne: true` |
| Layout global | ✅ neschimbat (doar `/blog` grid) |

---

*Generat post-fix blog UI + image mapping.*
