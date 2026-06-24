/**
 * Draft blog posts — NOT published.
 * Import from here only when ready to merge into posts.ts + enrich-posts.ts.
 */
import type { BlogPost } from "./types"
import { deCeApareRetentiaDeApaCauzePost } from "./articles/drafts/de-ce-apare-retentia-de-apa-cauze"
import { pregatireTenVaraPasiPost } from "./articles/drafts/pregatire-ten-vara-pasi"
import { picioareGreleSearaCauzePost } from "./articles/drafts/picioare-grele-seara-cauze"
import { masajManualVsAparatRemodelarePost } from "./articles/drafts/masaj-manual-vs-aparat-remodelare"
import { catDureazaRezultateTratamenteEsteticePost } from "./articles/drafts/cat-dureaza-rezultate-tratamente-estetice"
import { deCeApareCelulitaCauzeMituriPost } from "./articles/drafts/de-ce-apare-celulita-cauze-mituri"
import { tratamenteInainteConcediuPost } from "./articles/drafts/tratamente-inainte-de-concediu"
import { cauzeTenTernPost } from "./articles/drafts/cauze-ten-tern-fara-stralucire"
import { catDeDesTratamenteFacialePost } from "./articles/drafts/cat-de-des-tratamente-faciale"
import { poriDilatatiPost } from "./articles/drafts/pori-dilatati-cauze-obiceiuri"
import { curatareFacialaAcasaVsSalonPost } from "./articles/drafts/curatare-faciala-acasa-vs-salon"
import { catDeDesTratamenteCorporalePost } from "./articles/drafts/cat-de-des-tratamente-corporale"
import { recuperareTenDupaSoarePost } from "./articles/drafts/recuperare-ten-dupa-soare"
import { ceEvitatDupaTratamenteEsteticePost } from "./articles/drafts/ce-evitat-dupa-tratamente-estetice"
import { deCeAparVergeturileCauzePost } from "./articles/drafts/de-ce-apar-vergeturile-cauze"
import { colagenExplicatSimpluPost } from "./articles/drafts/colagen-explicat-simplu"
import { detoxifiereLimfaticaCeInseamnaPost } from "./articles/drafts/detoxifiere-limfatica-ce-inseamna"
import { pieleLasaCauzeFaraOperatiePost } from "./articles/drafts/piele-lasa-cauze-fara-operatie"
import { liftingNechirurgicalVsChirurgicalPost } from "./articles/drafts/lifting-nechirurgical-vs-chirurgical"
import { dermapenPeelingLaserCicatriciTexturaPost } from "./articles/drafts/dermapen-peeling-laser-cicatrici-textura"

/** Batch 1 — Luna 1 (iulie 2026) */
export const draftBlogPostsBatch1: BlogPost[] = [
  deCeApareRetentiaDeApaCauzePost,
  pregatireTenVaraPasiPost,
  picioareGreleSearaCauzePost,
  masajManualVsAparatRemodelarePost,
  catDureazaRezultateTratamenteEsteticePost,
  deCeApareCelulitaCauzeMituriPost,
  tratamenteInainteConcediuPost,
  cauzeTenTernPost,
  catDeDesTratamenteFacialePost,
  poriDilatatiPost,
]

/** Batch 2 — Săpt. 4 Luna 1 + Luna 2 (aug 2026) */
export const draftBlogPostsBatch2: BlogPost[] = [
  curatareFacialaAcasaVsSalonPost,
  catDeDesTratamenteCorporalePost,
  recuperareTenDupaSoarePost,
  ceEvitatDupaTratamenteEsteticePost,
  deCeAparVergeturileCauzePost,
  colagenExplicatSimpluPost,
  detoxifiereLimfaticaCeInseamnaPost,
  pieleLasaCauzeFaraOperatiePost,
  liftingNechirurgicalVsChirurgicalPost,
  dermapenPeelingLaserCicatriciTexturaPost,
]

export const draftBlogPosts: BlogPost[] = [
  ...draftBlogPostsBatch1,
  ...draftBlogPostsBatch2,
]

export function getDraftBlogSlugs(): string[] {
  return draftBlogPosts.map((p) => p.slug)
}
