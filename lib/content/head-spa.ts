import { pricingCategories } from "@/lib/content/pricing"

export const headSpaPath = "/head-spa-craiova"

const headSpaPriceItem = pricingCategories
  .flatMap((category) => category.items)
  .find((item) => item.name === "Head Spa")

if (!headSpaPriceItem) {
  throw new Error("Head Spa lipsește din lista de prețuri.")
}

export const headSpaOffer = headSpaPriceItem

const priceAmount = headSpaOffer.price.match(/(\d+)/)?.[1]

if (!priceAmount) {
  throw new Error("Prețul Head Spa nu poate fi citit din lista de prețuri.")
}

export const headSpaPriceAmount = priceAmount

export const headSpaWhatsappMessage =
  "Bună ziua! Aș dori să programez Head Spa la Claire Beauty Craiova și să aflu durata, etapele ședinței și cum rămâne părul după."

export function headSpaWhatsappHref(base: string) {
  return `${base}?text=${encodeURIComponent(headSpaWhatsappMessage)}`
}

export const headSpaFaqs = [
  {
    question: "Ce este Head Spa și ce include?",
    answer:
      "Head Spa la Claire Beauty este un serviciu cosmetic și de relaxare, listat la 300 lei pe ședință. Nu este o consultație dermatologică și nu este un tratament pentru căderea părului, mătreață, dermatită sau alopecie. Lista publică de prețuri nu detaliază etapele, produsele, durata, spălarea, uscarea sau coafarea. Acestea se confirmă la programare.",
  },
  {
    question: "Cât durează o ședință Head Spa?",
    answer:
      "Durata nu este publicată în tariful actual. Există o singură variantă listată: Head Spa, 300 lei pe ședință. Durata exactă se confirmă când te programezi.",
  },
  {
    question: "Head Spa este potrivit pentru orice tip de păr?",
    answer:
      "Nu este publicată o restricție pe tip de păr. Potrivirea se stabilește la programare. Dacă ai o problemă activă a scalpului — leziuni, inflamație, o intervenție recentă sau o afecțiune dermatologică — spune-ne înainte. Pentru partea medicală este indicată evaluarea dermatologică. Head Spa rămâne un serviciu cosmetic și de wellness.",
  },
  {
    question: "Head Spa ajută la căderea părului?",
    answer:
      "Nu. Head Spa nu este prezentat ca tratament pentru căderea părului sau pentru alopecie și nu promite stimularea creșterii părului. Căderea părului poate avea cauze diferite. Dacă este importantă, persistentă, apărută brusc sau însoțită de modificări ale scalpului, este indicată evaluarea dermatologică.",
  },
  {
    question: "Cum trebuie să vin la programarea pentru Head Spa?",
    answer:
      "Nu sunt publicate reguli de pregătire. Nu îți cerem, în materialele actuale, să eviți spălatul un număr de zile sau să renunți la balsam. Dacă este nevoie să vii cu părul uscat sau nespălat, ți se spune la programare.",
  },
  {
    question: "Cât costă Head Spa în Craiova?",
    answer:
      "Head Spa la Claire Beauty costă 300 lei pe ședință. În lista de prețuri apare o singură variantă, fără durată publicată. Prețul se vede și pe pagina de tarife, la tratamente faciale.",
  },
] as const
