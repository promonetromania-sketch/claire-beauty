import { businessProfile } from "@/lib/seo/business"

export const presoterapiePath = "/presoterapie-craiova"
export const presoterapiePriceLei = 80
export const presoterapieDeviceName = "Presoterapie Starvac"

export const presoterapieWhatsappMessage =
  "Bună ziua! Aș dori să programez o ședință de presoterapie la Claire Beauty Craiova."

export const presoterapieWhatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(presoterapieWhatsappMessage)}`

export const presoterapieFaqs = [
  {
    question: "Ce este presoterapia și cum funcționează?",
    answer:
      "Presoterapia la Claire Beauty este o procedură corporală făcută cu aparatul Presoterapie Starvac. Manșoanele aplică cicluri de compresie controlată, iar persoana stă relaxată pe durata ședinței. Nu este masaj manual și nu este un tratament medical.",
  },
  {
    question: "Care este diferența dintre presoterapie și drenaj limfatic manual?",
    answer:
      "Presoterapia se face cu aparat, prin compresie secvențială, și este o experiență pasivă. Drenajul limfatic manual se face cu mâinile, cu contact direct și cu un protocol diferit. Nu sunt același serviciu. Drenajul manual are pagină separată: drenaj limfatic în Craiova.",
  },
  {
    question: "Presoterapia este recomandată pentru senzația de picioare grele?",
    answer:
      "Poate fi aleasă de persoanele care, după stat îndelungat în picioare, la birou sau cu activitate redusă, descriu picioare grele ori obosite și caută o procedură de confort. Nu tratează varice, insuficiență venoasă, tromboză sau alte afecțiuni vasculare.",
  },
  {
    question: "Presoterapia ajută la slăbit sau la celulită?",
    answer:
      "Nu. Presoterapia nu este o metodă de slăbire și nu elimină celulita. Nu promitem kilograme, arderea grăsimii sau reducerea circumferinței. Pentru aspectul celulitei există masajul anticelulitic, iar pentru contur corporal există pagina de remodelare.",
  },
  {
    question: "De câte ședințe de presoterapie este nevoie?",
    answer:
      "Frecvența depinde de obiectiv și de protocol. Ședința individuală costă 80 lei. Lista de tarife nu are un abonament etichetat doar pentru presoterapie, așa că nu publicăm un pachet dedicat.",
  },
  {
    question: "Cât costă o ședință de presoterapie în Craiova?",
    answer:
      "Presoterapia Starvac costă 80 lei pe ședință la Claire Beauty, în Craiova, pe Strada Principatele Unite nr. 5. Prețul este cel din lista actuală de tarife.",
  },
] as const
