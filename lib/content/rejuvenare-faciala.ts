export const rejuvenareFacialaWhatsappMessage =
  "Bună ziua! Aș dori o evaluare pentru rejuvenare facială la Claire Beauty Craiova. Vreau să aleg tratamentul potrivit pentru tenul meu."

export function rejuvenareFacialaWhatsappHref(baseUrl: string) {
  return `${baseUrl}?text=${encodeURIComponent(rejuvenareFacialaWhatsappMessage)}`
}

export const rejuvenareFacialaFaqs = [
  {
    question: "Ce înseamnă rejuvenare facială?",
    answer:
      "Rejuvenarea facială este un termen-umbrelă, nu o singură procedură. Descrie obiectivul de a îmbunătăți aspectul pielii feței: un ten mai îngrijit, mai ferm acolo unde procedura se potrivește, cu textură mai uniformă și un aspect mai proaspăt. La Claire Beauty Craiova, alegerea pornește de la ce te deranjează și de la rezultatul pe care îl urmărești. HIFU facial, microneedling și radiofrecvența fracționată sunt tehnologii diferite, fiecare cu pagina ei.",
  },
  {
    question: "Care este cel mai potrivit tratament pentru rejuvenarea facială?",
    answer:
      "Nu există un tratament universal. Dacă obiectivul principal este fermitatea și conturul, discuția pornește de la HIFU facial. Dacă te preocupă textura și aspectul general al pielii, microneedling este una dintre opțiunile de evaluat. Dacă preocuparea este aspectul cicatricilor sau al vergeturilor, radiofrecvența fracționată are o pagină dedicată. Potrivirea se stabilește la evaluare, în funcție de piele și de obiectiv.",
  },
  {
    question: "Ce tratamente pentru stimularea colagenului sunt disponibile la Claire Beauty?",
    answer:
      "La Claire Beauty, procedurile discutate pentru susținerea proceselor de remodelare a pielii sunt HIFU facial, microneedling și radiofrecvența fracționată, fiecare cu indicații diferite. Nu publicăm procente de colagen și nu promitem un același efect pentru toate. Rolul evaluării este să spună dacă o procedură are sens pentru obiectivul tău și ce evoluție este realistă.",
  },
  {
    question:
      "Care este diferența dintre HIFU, microneedling și radiofrecvența fracționată?",
    answer:
      "HIFU facial este orientat spre fermitate și contur. Microneedling este orientat spre textura și aspectul general al pielii. Radiofrecvența fracționată, în salon, este folosită pentru îmbunătățirea aspectului cicatricilor și al vergeturilor. Nu este un clasament. Alegerea se face după piele, obiectiv și evaluarea inițială. Detaliile fiecărei tehnologii stau pe pagina ei.",
  },
  {
    question: "De câte ședințe de rejuvenare facială este nevoie?",
    answer:
      "Nu există un număr universal, pentru că rejuvenarea facială poate însemna proceduri diferite. Pe pagina de HIFU facial, o ședință este adesea punctul de plecare, iar în unele cazuri se discută ședințe suplimentare. Pentru microneedling, pagina dedicată indică, în general, între 4 și 6 ședințe. Pentru radiofrecvența fracționată nu publicăm un număr fix: protocolul depinde de zonă și de piele. Intervalul tău se stabilește la evaluare.",
  },
  {
    question: "Cât costă rejuvenarea facială în Craiova?",
    answer:
      "Nu există un preț unic pentru rejuvenare facială, pentru că nu este un singur serviciu. În lista salonului, HIFU facial pornește de la 800 lei, iar pachetul față, gușă și decolteu ajunge până la 1100 lei. Microneedling pornește de la 400 lei pe ședință. Radiofrecvența fracționată pornește de la 1000 lei pe ședință, pe zonă. Prețul aplicabil se confirmă după ce este aleasă procedura.",
  },
] as const
