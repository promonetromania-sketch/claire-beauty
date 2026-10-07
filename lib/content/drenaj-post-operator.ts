import { businessProfile } from "@/lib/seo/business"

export const drenajPostOperatorPath = "/drenaj-limfatic-post-operator-craiova"
export const drenajGeneralPath = "/drenaj-limfatic-craiova"

export const drenajPostOperatorPriceLei = 250

export const drenajPostOperatorWhatsappMessage =
  "Bună ziua! Am avut o intervenție și aș dori să discut despre drenajul limfatic postoperator la Claire Beauty Craiova. Pot spune ce intervenție am avut și ce recomandări am primit."

export const drenajPostOperatorWhatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(drenajPostOperatorWhatsappMessage)}`

export const drenajPostOperatorFaqs = [
  {
    question: "Ce este drenajul limfatic postoperator?",
    answer:
      "Drenajul limfatic postoperator este o ședință de îngrijire corporală din salon, destinată perioadei de după anumite intervenții, atunci când acest tip de îngrijire a fost luat în calcul împreună cu medicul. Nu este același serviciu cu drenajul limfatic căutat pentru picioare grele, retenție de lichide sau întreținere. La Claire Beauty, în Craiova, ședința se discută pornind de la intervenția avută, de la momentul în care a avut loc și de la recomandările primite. Salonul nu este o unitate medicală și nu înlocuiește controlul medicului care urmărește recuperarea.",
  },
  {
    question: "Se poate face drenaj limfatic după liposucție?",
    answer:
      "Multe persoane caută drenaj limfatic după liposucție sau masaj după liposucție atunci când medicul care le urmărește recuperarea a inclus acest tip de îngrijire în indicații. La Claire Beauty putem discuta o programare în Craiova în acest context, dar nu considerăm drenajul obligatoriu după liposucție și nu îl oferim automat după orice intervenție. Înainte de ședință avem nevoie să știm ce intervenție ai avut, când a avut loc și ce ți-a recomandat medicul, inclusiv dacă există restricții. Drenajul din salon nu înlocuiește îngrijirea medicală.",
  },
  {
    question: "Când pot începe drenajul limfatic după o operație?",
    answer:
      "Nu există un termen unic valabil pentru toate persoanele. Momentul potrivit depinde de tipul intervenției, de evoluția recuperării și de indicațiile medicului. Nu stabilim din salon un interval de genul „după câteva zile” sau „după o săptămână”, pentru că acest lucru trebuie să vină din recomandarea pe care ai primit-o. Dacă ai recomandare pentru drenaj postoperator, spune-ne la programare când a avut loc intervenția și ce indicații sau restricții ai primit. Abia apoi confirmăm dacă ședința poate fi programată.",
  },
  {
    question: "De câte ședințe de drenaj postoperator am nevoie?",
    answer:
      "Numărul de ședințe nu este decis de salon în locul medicului. El depinde de intervenție, de etapa recuperării și de recomandarea primită. O ședință de drenaj limfatic postoperator la Claire Beauty costă 250 lei. În lista de prețuri există și un abonament de 10 ședințe, 2000 lei, ca opțiune comercială pentru continuitate, nu ca protocol medical prestabilit. Înainte de prima programare discutăm situația, ca să nu aplicăm automat același ritm tuturor persoanelor.",
  },
  {
    question:
      "Care este diferența dintre drenajul limfatic obișnuit și cel postoperator?",
    answer:
      "Drenajul limfatic obișnuit, prezentat pe pagina de drenaj limfatic din Craiova, este căutat mai ales pentru senzația de picioare grele, retenție de lichide, confort și întreținere corporală. Drenajul postoperator răspunde unui context diferit: perioada de după o intervenție, cu recomandări specifice și cu atenție la etapa recuperării. Tehnica poate părea apropiată, dar informațiile de dinaintea ședinței și modul în care se stabilește programarea nu sunt aceleași. Dacă ai trecut printr-o intervenție, pagina relevantă este cea de drenaj limfatic postoperator.",
  },
  {
    question: "Cât costă drenajul limfatic postoperator în Craiova?",
    answer:
      "Drenajul limfatic postoperator la Claire Beauty Craiova costă 250 lei pe ședință. Prețul este afișat clar, fără reduceri afișate pe această pagină. Înainte de prima programare discutăm intervenția, data ei și recomandările primite, ca să confirmăm dacă serviciul poate fi programat în contextul respectiv. Abonamentul de 10 ședințe, 2000 lei, este trecut în lista de prețuri pentru cine își dorește continuitate; nu reprezintă un număr de ședințe stabilit de salon.",
  },
] as const
