# Raport optimizare imagini — pagini servicii Claire Beauty

**Data:** 7 iunie 2026  
**Sursă imagini:** `public/images/claire-beauty/`  
**Modificări:** doar atribuiri imagini + eliminare galerii finale (`VisualGallery`)

---

## Inventar imagini (grupate pe categorie)

| Categorie | Fișiere disponibile |
|-----------|---------------------|
| **hydrafacial** | `claire-beauty-hydrafacial.jpg`, `claire-beauty-hydrablast.jpg` |
| **dermapen** | `claire-beauty-dermapen-tratament.jpg`, `claire-beauty-dermapen.jpg` |
| **microneedling** | `claire-beauty-microneedling.jpg` |
| **hifu** | `claire-beauty-hifu.jpg`, `claire-beauty-hifu-facial-tehnologie.jpg`, `claire-beauty-hifu-corporal.jpg` |
| **microdermabraziune** | `claire-beauty-microdermabraziune-tratament.jpg`, `claire-beauty-microdermabraziune.jpg` |
| **radiofrecventa** | `claire-beauty-dpl-facial.jpg`, `claire-beauty-endolaser.jpg` |
| **electrostimulare** | `claire-beauty-electrostimulare.jpg` |
| **remodelare** | `claire-beauty-remodelare-corporala.jpg`, `claire-beauty-cfu-corporal.jpg` |
| **drenaj** | `claire-beauty-drenaj-limfatic.jpg`, `claire-beauty-masaj-drenaj-limfatic.jpg` |
| **reflexoterapie** | `claire-beauty-reflexoterapie.jpg`, `claire-beauty-masaj-reflexoterapie-echipament.jpg`, `treatment-reflexology.jpg` (neînregistrat în cod) |
| **masaj anticelulitic** | `claire-beauty-masaj-anticelulitic.jpg`, `claire-beauty-masaj-anticelulitic-echipament.jpg` |
| **masaj terapeutic** | `claire-beauty-masaj-terapeutic-1.jpg`, `claire-beauty-masaj-terapeutic-2.jpg`, `claire-beauty-masaj-deep-tissue-1.jpg`, `claire-beauty-masaj-deep-tissue-2.jpg`, `claire-beauty-masaj-deep-tissue.jpg` |
| **masaj general** | `claire-beauty-masaj-relaxare.jpg`, `claire-beauty-masaj-relaxare-1.jpg`, `claire-beauty-masaj-suedez.jpg`, `claire-beauty-masaj-lomi-lomi.jpg`, `claire-beauty-masaj-pietre.jpg`, `claire-beauty-masaj-atmosfera.jpg` |
| **facial generic** | `claire-beauty-tratament-facial-masaj.jpg`, `claire-beauty-tratament-facial-2.jpg`, `claire-beauty-tratament-facial-3.jpg`, `claire-beauty-cfu-facial.jpg`, `claire-beauty-elite-cfu-facial.jpg` |
| **corporal generic** | `treatment-body.jpg` (neînregistrat în cod) |

---

## Pagini analizate — imagini atribuite

### Pagini cu **2 imagini**

| Pagină | Hero | Conținut | Galerie |
|--------|------|----------|---------|
| `/hydrafacial-craiova` | `claire-beauty-hydrafacial.jpg` | `claire-beauty-hydrablast.jpg` | ❌ eliminată |
| `/dermapen-craiova` | `claire-beauty-dermapen-tratament.jpg` | `claire-beauty-dermapen.jpg` | ❌ eliminată |
| `/hifu-facial-craiova` | `claire-beauty-hifu.jpg` | `claire-beauty-hifu-facial-tehnologie.jpg` | ❌ eliminată |
| `/microdermabraziune-craiova` | `claire-beauty-microdermabraziune-tratament.jpg` | `claire-beauty-microdermabraziune.jpg` | ❌ eliminată |
| `/drenaj-limfatic-craiova` | `claire-beauty-drenaj-limfatic.jpg` | `claire-beauty-masaj-drenaj-limfatic.jpg` | ❌ eliminată |
| `/radiofrecventa-corporala-craiova` | `claire-beauty-dpl-facial.jpg` | `claire-beauty-endolaser.jpg` | ❌ eliminată |
| `/masaj-craiova` | `claire-beauty-masaj-relaxare-1.jpg` | `claire-beauty-masaj-deep-tissue-1.jpg` | ❌ eliminată |
| `/tratamente-faciale-craiova` | `claire-beauty-tratament-facial-masaj.jpg` | `claire-beauty-tratament-facial-2.jpg` | ❌ eliminată |

### Pagini cu **3 imagini**

| Pagină | Hero | Conținut | Galerie |
|--------|------|----------|---------|
| `/masaj-terapeutic-craiova` | `claire-beauty-masaj-terapeutic-1.jpg` | `claire-beauty-masaj-terapeutic-1.jpg` + `claire-beauty-masaj-terapeutic-2.jpg` | ❌ eliminată |
| `/masaj-anticelulitic-craiova` | `claire-beauty-masaj-anticelulitic.jpg` | `claire-beauty-masaj-anticelulitic.jpg` + `claire-beauty-masaj-anticelulitic-echipament.jpg` | ❌ eliminată |
| `/remodelare-corporala-craiova` | `claire-beauty-remodelare-corporala.jpg` | `claire-beauty-remodelare-corporala.jpg` + `claire-beauty-cfu-corporal.jpg` | — (fără galerie) |
| `/reflexoterapie-craiova` | `claire-beauty-reflexoterapie.jpg` | `claire-beauty-reflexoterapie.jpg` + `claire-beauty-masaj-reflexoterapie-echipament.jpg` | ❌ eliminată |

### Pagini cu **2 plasări, 1 fișier unic** (imagini insuficiente pentru diversitate)

| Pagină | Imagini folosite | Fișiere unice în folder |
|--------|------------------|-------------------------|
| `/microneedling-craiova` | `claire-beauty-microneedling.jpg` (hero + conținut) | **1** — lipsește a 2-a imagine microneedling |
| `/electrostimulare-craiova` | `claire-beauty-electrostimulare.jpg` (hero + conținut) | **1** — lipsește a 2-a imagine electrostimulare |

### Pagină hub — peste limita 2–3 imagini principale

| Pagină | Situație |
|--------|----------|
| `/tratamente-corporale-craiova` | Hero (`claire-beauty-remodelare-corporala.jpg`) + **4 carduri** cu imagini proprii (remodelare, anticelulitic, masaj relaxare, drenaj) = **5 imagini** pe pagină. Structura hub cu carduri ilustrate nu a fost modificată (layout). |

---

## Corecții relevante aplicate

| Pagină | Înainte (greșit) | După (corect) |
|--------|------------------|---------------|
| Dermapen | conținut: microneedling | conținut: dermapen |
| Remodelare | conținut: drenaj limfatic | conținut: cfu corporal (remodelare) |
| Reflexoterapie | conținut: masaj relaxare | conținut: masaj reflexoterapie echipament |
| Radiofrecvență | conținut: dpl-facial (duplicat hero) | conținut: endolaser |
| Tratamente faciale | conținut: hydrafacial | conținut: tratament facial 2 |
| Tratamente corporale | hero: masaj deep tissue | hero: remodelare corporală |
| Galerii finale | imagini cross-procedură (CFU, facial generic, etc.) | **eliminate complet** |

---

## Proceduri fără suficiente imagini relevante

| Procedură | Imagini găsite | Necesar | Recomandare |
|-----------|----------------|---------|-------------|
| **Microneedling** | 1 | min. 2 distincte | Adăugare fotografie suplimentară `claire-beauty-microneedling-*` |
| **Electrostimulare** | 1 | min. 2 distincte | Adăugare fotografie suplimentară `claire-beauty-electrostimulare-*` |
| **Tratamente corporale (hub)** | 5 pe pagină | max. 3 | Redesign carduri fără imagini sau limitare la 3 imagini totale |

---

## Confirmare galerii

✅ **Toate galeriile `VisualGallery` au fost eliminate** de pe paginile de servicii:

- hydrafacial, dermapen, microneedling, hifu, microdermabraziune
- drenaj limfatic, masaj terapeutic, masaj anticelulitic, masaj craiova
- electrostimulare, radiofrecvență, tratamente faciale
- reflexoterapie

`pageGalleries` pentru servicii este golit în `lib/images/claire-beauty.ts`.  
Galeriile contact/home **nu** au fost modificate (în afara scope-ului servicii).

---

## Fișiere modificate

- `lib/images/claire-beauty.ts` — `microdermabraziuneEchipament`, `pageGalleries` golit
- `components/services/*/` — eliminare galerii + corecții imagini conținut
- `app/reflexoterapie-craiova/page.tsx` — eliminare galerie + corecție imagine

**Build:** ✅ reușit (52 rute statice)
