export const cicatriciAcneeWhatsappMessage =
  "Bună ziua! Aș dori o evaluare pentru cicatricile rămase după acnee la Claire Beauty Craiova."

export function cicatriciAcneeWhatsappHref(baseUrl: string) {
  return `${baseUrl}?text=${encodeURIComponent(cicatriciAcneeWhatsappMessage)}`
}

export const cicatriciAcneeFaqs = [
  {
    question: "Se pot trata cicatricile rămase după acnee?",
    answer:
      "Da, ca obiectiv estetic: îmbunătățirea aspectului cicatricilor și a texturii, atunci când evaluarea arată că o procedură din salon are sens. La Claire Beauty Craiova discutăm radiofrecvența fracționată și microneedlingul. Nu promitem dispariția cicatricilor și nu tratăm medical acneea activă. Dacă leziunile sunt încă prezente, o spunem și te îndrumăm către evaluarea medicală potrivită.",
  },
  {
    question:
      "Care este diferența dintre petele post-acnee și cicatricile post-acnee?",
    answer:
      "Petele țin de culoarea pielii, care poate rămâne modificată după ce leziunea a dispărut. Cicatricile țin de textură: depresiuni, denivelări sau o suprafață care prinde lumina altfel. Multe persoane le numesc pe ambele „urme”. Nu sunt același lucru și nu se abordează automat la fel. Nu punem un diagnostic online și nu afirmăm că procedurile din salon rezolvă orice modificare de culoare.",
  },
  {
    question: "Ce tratament este potrivit pentru gropițele rămase după acnee?",
    answer:
      "„Gropițe” este felul în care multe persoane descriu cicatrici deprimate. Procedura potrivită depinde de aspectul lor, de piele și de obiectiv. Putem urmări îmbunătățirea aspectului, o textură mai uniformă și reducerea vizibilității. Nu promitem umplere completă, dispariție sau o piele perfect netedă.",
  },
  {
    question:
      "Radiofrecvența fracționată sau microneedling – ce aleg pentru cicatricile de acnee?",
    answer:
      "Niciuna nu este universal mai bună. Radiofrecvența fracționată folosește energie de radiofrecvență, aplicată controlat, pentru remodelarea aspectului pielii. Microneedlingul folosește micro-ace pentru canale controlate, cu scopul de a stimula regenerarea și textura. Alegerea se face la evaluare, după ce vedem cicatricile. Detaliile fiecărei tehnologii stau pe pagina ei.",
  },
  {
    question: "De câte ședințe este nevoie pentru cicatricile post-acnee?",
    answer:
      "Nu există un număr valabil pentru toată lumea. Contează tipul și aspectul cicatricilor, profunzimea, vechimea, suprafața tratată, procedura aleasă și răspunsul individual. Pentru radiofrecvența fracționată nu publicăm un număr fix. Orientarea de pe pagina de microneedling rămâne acolo și nu se copiază automat pe orice cicatrice. Planul tău se stabilește la evaluare.",
  },
  {
    question: "Cât costă tratamentul cicatricilor de acnee în Craiova?",
    answer:
      "Nu există un preț unic, pentru că nu este o singură procedură. În lista salonului, radiofrecvența fracționată este de la 1000 lei / ședință / zonă. Microneedlingul este de la 400 lei / ședință. „De la” înseamnă preț de pornire: zona tratată poate schimba tariful la radiofrecvență. Prețul aplicabil se confirmă după ce este aleasă procedura.",
  },
] as const
