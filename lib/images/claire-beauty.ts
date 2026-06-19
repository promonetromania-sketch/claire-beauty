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
    "Claire Beauty Studio – salon body spa Craiova",
    "center 35%",
  ),
  logo: img(
    "claire-beauty-logo.jpg",
    "Claire Beauty Studio by Ana Savovici – logo salon Craiova",
    "Claire Beauty Studio Craiova",
    "center top",
  ),
  terapeutPortret: img(
    "claire-beauty-terapeut-portret.jpg",
    "Ana Savovici – terapeută Claire Beauty Studio Craiova",
    "Ana Savovici – fondatoarea Claire Beauty",
    "center top",
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
    "claire-beauty-hydrafacial.jpg",
    "Tratament Hydrafacial la Claire Beauty Craiova",
    "Hydrafacial Craiova – curățare facială profesională",
    "center 30%",
  ),
  dermapen: img(
    "claire-beauty-dermapen.jpg",
    "Tratament Dermapen la Claire Beauty Craiova",
    "Dermapen Craiova – rejuvenare facială",
    "center 30%",
  ),
  microneedling: img(
    "claire-beauty-microneedling.jpg",
    "Tratament Microneedling la Claire Beauty Craiova",
    "Microneedling Craiova – stimulare colagen",
    "center 30%",
  ),
  hifu: img(
    "claire-beauty-hifu.jpg",
    "Tratament HIFU facial la Claire Beauty Craiova",
    "HIFU Craiova – lifting non-invaziv",
    "center 30%",
  ),
  drenajLimfatic: img(
    "claire-beauty-drenaj-limfatic.jpg",
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
    "claire-beauty-masaj-anticelulitic.jpg",
    "Masaj anticelulitic la Claire Beauty Craiova",
    "Masaj anticelulitic Craiova",
    "center 35%",
  ),
  reflexoterapie: img(
    "claire-beauty-reflexoterapie.jpg",
    "Reflexoterapie la Claire Beauty Craiova",
    "Reflexoterapie Craiova – masaj plantar",
    "center 40%",
  ),
  masajDeepTissue1: img(
    "claire-beauty-masaj-deep-tissue-1.jpg",
    "Masaj deep tissue efectuat de terapeută Claire Beauty",
    "Masaj deep tissue Craiova",
    "center 35%",
  ),
  masajDeepTissue2: img(
    "claire-beauty-masaj-deep-tissue-2.jpg",
    "Masaj terapeutic pe spate la Claire Beauty Craiova",
    "Masaj terapeutic Craiova",
    "center 35%",
  ),
  masajRelaxare1: img(
    "claire-beauty-masaj-relaxare-1.jpg",
    "Masaj de relaxare corporal la Claire Beauty",
    "Masaj corporal relaxare Craiova",
    "center 35%",
  ),
  masajTerapeutic1: img(
    "claire-beauty-masaj-terapeutic-1.jpg",
    "Masaj terapeutic profesional la Claire Beauty Craiova",
    "Masaj terapeutic Craiova",
    "center 35%",
  ),
  masajTerapeutic2: img(
    "claire-beauty-masaj-terapeutic-2.jpg",
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
    "claire-beauty-tratament-facial-masaj.jpg",
    "Tratament facial manual la Claire Beauty Craiova",
    "Tratamente faciale Craiova",
    "center 25%",
  ),
  tratamentFacial2: img(
    "claire-beauty-tratament-facial-2.jpg",
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
    "claire-beauty-hydrablast.jpg",
    "Echipament Hydrablast pentru Hydrafacial la Claire Beauty",
    "Tehnologie Hydrafacial Claire Beauty",
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
    "claire-beauty-microdermabraziune.jpg",
    "Microdermabraziune Endospheres la Claire Beauty Craiova",
    "Microdermabraziune Craiova",
  ),
  radiofrecventaFacial: img(
    "claire-beauty-dpl-facial.jpg",
    "Radiofrecvență facială DPL la Claire Beauty Craiova",
    "Radiofrecvență facială Craiova",
  ),
  electrostimulare: img(
    "claire-beauty-electrostimulare.jpg",
    "Electrostimulare BodyContour EMS la Claire Beauty Craiova",
    "Electrostimulare Craiova",
  ),
  remodelareCorporala: img(
    "claire-beauty-remodelare-corporala.jpg",
    "Remodelare corporală LipoContour la Claire Beauty Craiova",
    "Remodelare corporală Craiova",
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
    "claire-beauty-masaj-anticelulitic-echipament.jpg",
    "Masaj anticelulitic profesional Claire Beauty Craiova",
    "Anticelulitic Craiova",
  ),
  masajDrenajEquip: img(
    "claire-beauty-masaj-drenaj-limfatic.jpg",
    "Masaj drenaj limfatic Claire Beauty Craiova",
    "Drenaj limfatic manual Craiova",
  ),
  masajReflexoterapieEquip: img(
    "claire-beauty-masaj-reflexoterapie-echipament.jpg",
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
    "claire-beauty-endolaser.jpg",
    "Tratament Endolaser la Claire Beauty Craiova",
    "Endolaser Craiova",
  ),
  cuppingTherapy: img(
    "claire-beauty-cupping-therapy.jpg",
    "Cupping Therapy la Claire Beauty Craiova",
    "Terapie cu ventuze Craiova",
  ),
} as const

export const homepageGallery: ClaireImageMeta[] = [
  claireImages.hydrafacial,
  claireImages.masajRelaxare,
  claireImages.terapeutPortret,
  claireImages.dermapen,
  claireImages.masajDeepTissue1,
  claireImages.tratamentFacialMasaj,
  claireImages.reflexoterapie,
  claireImages.microneedling,
  claireImages.terapeutMasajIntrare,
  claireImages.hifu,
  claireImages.masajAtmosfera,
  claireImages.drenajLimfatic,
]

export const pageGalleries = {
  masajCraiova: [
    claireImages.masajDeepTissue1,
    claireImages.masajDeepTissue2,
    claireImages.masajRelaxare,
    claireImages.masajRelaxare1,
    claireImages.masajTerapeutic1,
    claireImages.masajTerapeutic2,
    claireImages.masajAnticelulitic,
    claireImages.drenajLimfatic,
    claireImages.reflexoterapie,
    claireImages.masajLomiLomi,
    claireImages.masajDeepTissueEquip,
    claireImages.masajSuedez,
    claireImages.masajPietre,
    claireImages.terapeutMasajSemn,
    claireImages.masajAtmosfera,
  ],
  tratamenteFaciale: [
    claireImages.hydrafacial,
    claireImages.dermapen,
    claireImages.microneedling,
    claireImages.hifu,
    claireImages.tratamentFacialMasaj,
    claireImages.tratamentFacial2,
    claireImages.tratamentFacial3,
    claireImages.cfuFacial,
    claireImages.eliteCfuFacial,
    claireImages.radiofrecventaFacial,
  ],
  hydrafacial: [
    claireImages.hydrafacial,
    claireImages.hydrablast,
    claireImages.tratamentFacialMasaj,
    claireImages.tratamentFacial2,
    claireImages.cfuFacial,
  ],
  dermapen: [
    claireImages.dermapen,
    claireImages.tratamentFacialMasaj,
    claireImages.tratamentFacial2,
    claireImages.microneedling,
    claireImages.eliteCfuFacial,
  ],
  microneedling: [
    claireImages.microneedling,
    claireImages.dermapen,
    claireImages.tratamentFacial2,
    claireImages.tratamentFacial3,
    claireImages.cfuFacial,
  ],
  hifu: [
    claireImages.hifu,
    claireImages.hifuCorporal,
    claireImages.cfuFacial,
    claireImages.eliteCfuFacial,
    claireImages.endolaser,
  ],
  microdermabraziune: [
    claireImages.microdermabraziune,
    claireImages.tratamentFacial2,
    claireImages.tratamentFacial3,
    claireImages.cfuFacial,
  ],
  masajTerapeutic: [
    claireImages.masajTerapeutic1,
    claireImages.masajTerapeutic2,
    claireImages.masajDeepTissue1,
    claireImages.masajDeepTissue2,
    claireImages.masajDeepTissueEquip,
    claireImages.cuppingTherapy,
  ],
  masajAnticelulitic: [
    claireImages.masajAnticelulitic,
    claireImages.masajAnticeluliticEquip,
    claireImages.masajDeepTissue1,
    claireImages.remodelareCorporala,
    claireImages.electrostimulare,
  ],
  drenajLimfatic: [
    claireImages.drenajLimfatic,
    claireImages.masajDrenajEquip,
    claireImages.masajRelaxare,
    claireImages.masajRelaxare1,
    claireImages.masajTerapeutic1,
  ],
  reflexoterapie: [
    claireImages.reflexoterapie,
    claireImages.masajReflexoterapieEquip,
    claireImages.masajRelaxare,
    claireImages.terapeutMasajSemn,
  ],
  electrostimulare: [
    claireImages.electrostimulare,
    claireImages.remodelareCorporala,
    claireImages.cfuCorporal,
    claireImages.masajAnticelulitic,
  ],
  radiofrecventa: [
    claireImages.radiofrecventaFacial,
    claireImages.cfuFacial,
    claireImages.hifu,
    claireImages.endolaser,
  ],
  contact: [
    claireImages.terapeutPortret,
    claireImages.terapeutMasajIntrare,
    claireImages.terapeutMasajSemn,
    claireImages.masajAtmosfera,
  ],
  despre: [
    claireImages.terapeutPortret,
    claireImages.terapeutMasajIntrare,
    claireImages.terapeutMasajSemn,
    claireImages.masajAtmosfera,
    claireImages.masajRelaxare1,
  ],
} as const
