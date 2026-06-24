export const IMG = "/images/claire-beauty"

export type ClaireImageMeta = {
  src: string
  alt: string
  title: string
  objectPosition?: string
}

function img(
  file: string,
  alt: string,
  title: string,
  objectPosition?: string,
): ClaireImageMeta {
  return {
    src: `${IMG}/${file}`,
    alt,
    title,
    objectPosition,
  }
}

export const claireImages = {
  hero: img(
    "claire-beauty-hero-salon.jpg",
    "Salon Claire Beauty Craiova – masaj profesional și atmosferă premium",
    "Claire Beauty Craiova – salon body spa",
    "center 35%",
  ),
  logo: img(
    "ana-savovici-body-spa-logo.jpg",
    "Ana Savovici Body Spa – logo salon Craiova",
    "Ana Savovici Body Spa",
    "center",
  ),
  terapeutPortret: img(
    "site-poze-about-portret.jpg",
    "Ana Savovici – terapeută Claire Beauty Craiova",
    "Ana Savovici – fondatoarea Claire Beauty",
    "center center",
  ),
  terapeutMasajIntrare: img(
    "claire-beauty-terapeut-masaj-intrare.jpg",
    "Terapeută Claire Beauty indicând intrarea în cabinetul de masaj",
    "Intrare cabinet masaj Claire Beauty",
    "center",
  ),
  terapeutMasajSemn: img(
    "claire-beauty-terapeut-masaj-semn.jpg",
    "Terapeută Claire Beauty lângă semnul cabinetului de masaj",
    "Cabinet masaj Claire Beauty Craiova",
    "center",
  ),
  hydrafacial: img(
    "site-poze-hydrafacial-hero.jpg",
    "Tratament Hydrafacial la Claire Beauty Craiova",
    "Hydrafacial Craiova – curățare facială profesională",
    "center 30%",
  ),
  dermapenTratament: img(
    "site-poze-dermapen-hero.jpg",
    "Tratament Dermapen microneedling la Claire Beauty Craiova",
    "Dermapen Craiova – regenerare ten și colagen",
    "center 30%",
  ),
  dermapen: img(
    "site-poze-dermapen-content.jpg",
    "Tratament Dermapen la Claire Beauty Craiova",
    "Dermapen Craiova – rejuvenare facială",
    "center 30%",
  ),
  microneedling: img(
    "site-poze-microneedling-hero.jpg",
    "Tratament Microneedling la Claire Beauty Craiova",
    "Microneedling Craiova – stimulare colagen",
    "center 30%",
  ),
  microneedlingContent: img(
    "site-poze-microneedling-content.jpg",
    "Procedură Microneedling la Claire Beauty Craiova",
    "Microneedling Craiova – tratament profesional",
    "center 30%",
  ),
  hifu: img(
    "site-poze-hifu-hero.jpg",
    "Tratament HIFU facial la Claire Beauty Craiova",
    "HIFU Craiova – lifting non-invaziv",
    "center 30%",
  ),
  drenajLimfatic: img(
    "site-poze-drenaj-hero.jpg",
    "Masaj drenaj limfatic la Claire Beauty Craiova",
    "Drenaj limfatic Craiova",
    "center 35%",
  ),
  masajRelaxare: img(
    "claire-beauty-masaj-relaxare.jpg",
    "Masaj de relaxare la Claire Beauty Craiova",
    "Masaj relaxare Craiova",
    "center 35%",
  ),
  masajAnticelulitic: img(
    "site-poze-masaj-anticelulitic-hero.jpg",
    "Masaj anticelulitic la Claire Beauty Craiova",
    "Masaj anticelulitic Craiova",
    "center 35%",
  ),
  reflexoterapie: img(
    "site-poze-reflexoterapie-hero.jpg",
    "Reflexoterapie la Claire Beauty Craiova",
    "Reflexoterapie Craiova – masaj plantar",
    "center 40%",
  ),
  masajDeepTissue1: img(
    "site-poze-masaj-content.jpg",
    "Masaj profesional la Claire Beauty Craiova",
    "Masaj Craiova – tratament corporal",
    "center 35%",
  ),
  masajDeepTissue2: img(
    "claire-beauty-masaj-deep-tissue-2.jpg",
    "Masaj terapeutic pe spate la Claire Beauty Craiova",
    "Masaj terapeutic Craiova",
    "center 35%",
  ),
  masajRelaxare1: img(
    "site-poze-masaj-hero.jpg",
    "Masaj de relaxare corporal la Claire Beauty",
    "Masaj corporal relaxare Craiova",
    "center 35%",
  ),
  masajTerapeutic1: img(
    "site-poze-masaj-terapeutic-hero.jpg",
    "Masaj terapeutic profesional la Claire Beauty Craiova",
    "Masaj terapeutic Craiova",
    "center 35%",
  ),
  masajTerapeutic2: img(
    "site-poze-masaj-terapeutic-content.jpg",
    "Tehnici de masaj terapeutic la Claire Beauty",
    "Masaj terapeutic profesional Craiova",
    "center 35%",
  ),
  masajAtmosfera: img(
    "claire-beauty-masaj-atmosfera.jpg",
    "Atmosferă relaxantă în salonul Claire Beauty Craiova",
    "Salon masaj premium Craiova",
    "center 35%",
  ),
  tratamentFacialMasaj: img(
    "site-poze-tratamente-faciale-hero.jpg",
    "Tratament facial manual la Claire Beauty Craiova",
    "Tratamente faciale Craiova",
    "center 25%",
  ),
  tratamentFacial2: img(
    "site-poze-tratamente-faciale-content.jpg",
    "Îngrijire facială profesională Claire Beauty Craiova",
    "Tratament facial premium Craiova",
    "center 25%",
  ),
  tratamentFacial3: img(
    "claire-beauty-tratament-facial-3.jpg",
    "Procedură facială la salonul Claire Beauty Craiova",
    "Proceduri faciale Craiova",
    "center 25%",
  ),
  hydrablast: img(
    "site-poze-hydrafacial-content.jpg",
    "Tratament Hydrafacial la Claire Beauty Craiova",
    "Hydrafacial Craiova – procedură profesională",
  ),
  hifuFacialTehnologie: img(
    "site-poze-hifu-content.jpg",
    "Tratament HIFU facial la Claire Beauty Craiova",
    "HIFU facial Craiova – lifting non-invaziv",
    "center 30%",
  ),
  hifuCorporal: img(
    "claire-beauty-hifu-corporal.jpg",
    "Echipament HIFU corporal la Claire Beauty Craiova",
    "HIFU corporal Craiova",
  ),
  cfuFacial: img(
    "claire-beauty-cfu-facial.jpg",
    "Tratament CFU facial la Claire Beauty Craiova",
    "CFU facial Craiova",
  ),
  cfuCorporal: img(
    "claire-beauty-cfu-corporal.jpg",
    "Tratament CFU corporal la Claire Beauty Craiova",
    "Remodelare corporală CFU Craiova",
  ),
  microdermabraziune: img(
    "site-poze-microdermabraziune-hero.jpg",
    "Tratament microdermabraziune facială la Claire Beauty Craiova",
    "Microdermabraziune Craiova – exfoliere și ten luminos",
    "center 30%",
  ),
  microdermabraziuneEchipament: img(
    "site-poze-microdermabraziune-content.jpg",
    "Tratament microdermabraziune la Claire Beauty Craiova",
    "Microdermabraziune Craiova – procedură profesională",
    "center 40%",
  ),
  radiofrecventaFacial: img(
    "site-poze-radiofrecventa-hero.jpg",
    "Radiofrecvență corporală la Claire Beauty Craiova",
    "Radiofrecvență corporală Craiova",
  ),
  electrostimulare: img(
    "site-poze-electrostimulare-hero.jpg",
    "Electrostimulare BodyContour EMS la Claire Beauty Craiova",
    "Electrostimulare Craiova",
  ),
  electrostimulareContent: img(
    "site-poze-electrostimulare-content.jpg",
    "Procedură electrostimulare la Claire Beauty Craiova",
    "Electrostimulare corporală Craiova",
  ),
  remodelareCorporala: img(
    "site-poze-remodelare-hero.jpg",
    "Remodelare corporală LipoContour la Claire Beauty Craiova",
    "Remodelare corporală Craiova",
  ),
  remodelareCorporalaContent: img(
    "site-poze-remodelare-content.jpg",
    "Tratament remodelare corporală la Claire Beauty Craiova",
    "Remodelare corporală Craiova – procedură",
  ),
  tratamenteCorporaleHero: img(
    "site-poze-tratamente-corporale-hero.jpg",
    "Tratamente corporale la Claire Beauty Craiova",
    "Tratamente corporale Craiova",
    "center 35%",
  ),
  tratamenteCorporaleContent: img(
    "site-poze-tratamente-corporale-content.jpg",
    "Proceduri corporale la Claire Beauty Craiova",
    "Tratamente corporale Craiova – salon premium",
  ),
  masajLomiLomi: img(
    "claire-beauty-masaj-lomi-lomi.jpg",
    "Masaj Lomi Lomi la Claire Beauty Craiova",
    "Masaj Lomi Lomi Craiova",
  ),
  masajDeepTissueEquip: img(
    "claire-beauty-masaj-deep-tissue.jpg",
    "Masaj Deep Tissue la Claire Beauty Craiova",
    "Deep Tissue Craiova",
  ),
  masajAnticeluliticEquip: img(
    "site-poze-masaj-anticelulitic-content.jpg",
    "Masaj anticelulitic profesional Claire Beauty Craiova",
    "Anticelulitic Craiova",
  ),
  masajDrenajEquip: img(
    "site-poze-drenaj-content.jpg",
    "Masaj drenaj limfatic Claire Beauty Craiova",
    "Drenaj limfatic manual Craiova",
  ),
  masajReflexoterapieEquip: img(
    "site-poze-reflexoterapie-content.jpg",
    "Reflexoterapie Claire Beauty Craiova",
    "Reflexoterapie plantară Craiova",
  ),
  masajSuedez: img(
    "claire-beauty-masaj-suedez.jpg",
    "Masaj suedez la Claire Beauty Craiova",
    "Masaj suedez Craiova",
  ),
  masajPietre: img(
    "claire-beauty-masaj-pietre.jpg",
    "Masaj cu pietre vulcanice la Claire Beauty Craiova",
    "Masaj cu pietre Craiova",
  ),
  eliteCfuFacial: img(
    "claire-beauty-elite-cfu-facial.jpg",
    "Elite CFU facial la Claire Beauty Craiova",
    "Elite CFU facial Craiova",
  ),
  endolaser: img(
    "site-poze-radiofrecventa-content.jpg",
    "Radiofrecvență corporală la Claire Beauty Craiova",
    "Radiofrecvență corporală Craiova",
  ),
  cuppingTherapy: img(
    "claire-beauty-cupping-therapy.jpg",
    "Cupping Therapy la Claire Beauty Craiova",
    "Terapie cu ventuze Craiova",
  ),
} as const

export const homepageGallery: ClaireImageMeta[] = [
  claireImages.hydrafacial,
  claireImages.masajTerapeutic1,
  claireImages.dermapenTratament,
]

export const pageGalleries = {
  masajCraiova: [],
  tratamenteFaciale: [],
  hydrafacial: [],
  dermapen: [],
  microneedling: [],
  hifu: [],
  microdermabraziune: [],
  masajTerapeutic: [],
  masajAnticelulitic: [],
  drenajLimfatic: [],
  reflexoterapie: [],
  electrostimulare: [],
  radiofrecventa: [],
  contact: [
    claireImages.terapeutPortret,
    claireImages.terapeutMasajIntrare,
    claireImages.masajAtmosfera,
  ],
  despre: [
    claireImages.terapeutPortret,
    claireImages.terapeutMasajIntrare,
    claireImages.masajAtmosfera,
  ],
} as const
