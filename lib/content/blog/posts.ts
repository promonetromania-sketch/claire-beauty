import type { BlogPost } from "./types"
import { enrichBlogPost } from "./enrich-posts"
import { hydrafacialPost } from "./articles/ce-este-hydrafacial-beneficii-craiova"
import { celulitaPost } from "./articles/cum-scapi-de-celulita-ghid-complet"
import { masajVsDrenajPost } from "./articles/masaj-anticelulitic-vs-drenaj-limfatic"
import { remodelarePost } from "./articles/remodelare-corporala-fara-operatie-tehnologii"
import { masajTerapeuticPost } from "./articles/beneficii-masaj-terapeutic-stres-dureri"
import { microneedlingVsDermapenPost } from "./articles/microneedling-vs-dermapen-diferente"
import { hifuPost } from "./articles/hifu-facial-lifting-nechirurgical"
import { pregatireTenPost } from "./articles/cum-pregatesti-tenul-tratament-facial"
import { reflexoterapiePost } from "./articles/ce-este-reflexoterapia-beneficii"
import { semneDrenajPost } from "./articles/semne-ca-ai-nevoie-de-drenaj-limfatic"
import { microdermabraziunePost } from "./articles/ce-este-microdermabraziunea-beneficii"
import { drenajGhidPost } from "./articles/ghid-complet-drenaj-limfatic"
import { electrostimularePost } from "./articles/electrostimulare-corporala-tonifiere"
import { radiofrecventaPost } from "./articles/radiofrecventa-corporala-ghid"
import { tipTenPost } from "./articles/cum-alegi-tratament-facial-tip-ten"
import { masajRelaxarePost } from "./articles/beneficii-masaj-relaxare-craiova"
import { puncteNegrePost } from "./articles/cum-scapi-de-puncte-negre-corect"
import { tratamenteCorporaleGhidPost } from "./articles/tratamente-corporale-ghid-incepatori"
import { vergeturiPost } from "./articles/vergeturi-tratamente-rezultate"
import { terapeuticVsAnticeluliticPost } from "./articles/masaj-terapeutic-vs-anticelulitic-cand"
import { deCeApareRetentiaDeApaCauzePost } from "./articles/drafts/de-ce-apare-retentia-de-apa-cauze"
import { picioareGreleSearaCauzePost } from "./articles/drafts/picioare-grele-seara-cauze"
import { curatareFacialaAcasaVsSalonPost } from "./articles/drafts/curatare-faciala-acasa-vs-salon"
import { ceEvitatDupaTratamenteEsteticePost } from "./articles/drafts/ce-evitat-dupa-tratamente-estetice"
import { tratamenteInainteConcediuPost } from "./articles/drafts/tratamente-inainte-de-concediu"
import { pregatireTenVaraPasiPost } from "./articles/drafts/pregatire-ten-vara-pasi"

export const blogPosts: BlogPost[] = [
  hydrafacialPost,
  celulitaPost,
  masajVsDrenajPost,
  remodelarePost,
  masajTerapeuticPost,
  microneedlingVsDermapenPost,
  hifuPost,
  pregatireTenPost,
  reflexoterapiePost,
  semneDrenajPost,
  microdermabraziunePost,
  drenajGhidPost,
  electrostimularePost,
  radiofrecventaPost,
  tipTenPost,
  masajRelaxarePost,
  puncteNegrePost,
  tratamenteCorporaleGhidPost,
  vergeturiPost,
  terapeuticVsAnticeluliticPost,
  // Tier 1 — indexare imediată
  deCeApareRetentiaDeApaCauzePost,
  picioareGreleSearaCauzePost,
  curatareFacialaAcasaVsSalonPost,
  ceEvitatDupaTratamenteEsteticePost,
  tratamenteInainteConcediuPost,
  pregatireTenVaraPasiPost,
].map(enrichBlogPost)
