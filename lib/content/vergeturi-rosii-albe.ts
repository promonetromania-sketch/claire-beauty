export const vergeturiRosiiAlbeWhatsappMessage =
  "Bună ziua! Aș dori o evaluare pentru vergeturi la Claire Beauty Craiova. Aș vrea să discutăm aspectul lor — roșii sau albe — și ce se poate urmări."

export function vergeturiRosiiAlbeWhatsappHref(baseUrl: string) {
  return `${baseUrl}?text=${encodeURIComponent(vergeturiRosiiAlbeWhatsappMessage)}`
}

export const vergeturiRosiiAlbeFaqs = [
  {
    question: "Care este diferența dintre vergeturile roșii și cele albe?",
    answer:
      "Vergeturile roșii, roz sau violacee sunt asociate, în general, unei etape mai recente. Cele albe, albicioase sau sidefate sunt asociate, în general, unor vergeturi mai mature, cu o textură deja schimbată. Culoarea descrie aspectul, nu pune un diagnostic și nu alege singură procedura. La unele persoane pot coexista ambele aspecte pe aceeași zonă. Nu toate vergeturile urmează aceeași evoluție.",
  },
  {
    question: "Vergeturile roșii sunt mai ușor de tratat?",
    answer:
      "Nu există un răspuns absolut. Momentul apariției și aspectul actual sunt informații utile la evaluare, dar nu înseamnă că vergeturile roșii dispar dacă sunt abordate repede și nici că cele albe nu pot fi îmbunătățite. Contează și vechimea, textura, zona, suprafața, pielea și procedura disponibilă. Evaluarea într-o etapă mai recentă permite stabilirea opțiunilor pentru situația concretă, fără o promisiune de rezultat.",
  },
  {
    question: "Se pot trata și vergeturile albe și vechi?",
    answer:
      "Da, pot fi luate în calcul. Vergeturile mature pot avea o culoare mai deschisă, o textură diferită și o vechime de luni sau ani. Procedurile estetice pot urmări îmbunătățirea aspectului lor, în funcție de situația individuală. Nu le prezentăm ca fiind fără soluție și nu promitem că dispar.",
  },
  {
    question: "Vergeturile pot dispărea complet?",
    answer:
      "Nu promitem eliminarea completă. Obiectivul este îmbunătățirea aspectului: reducerea vizibilității, o textură mai îngrijită și un aspect mai uniform. Nu promitem piele perfectă, rezultat garantat sau același rezultat pentru toate persoanele.",
  },
  {
    question: "Ce tratament se folosește pentru vergeturi la Claire Beauty?",
    answer:
      "Pentru îmbunătățirea aspectului vergeturilor, salonul folosește radiofrecvența fracționată, dacă evaluarea arată că procedura este potrivită. Nu este laser. Microneedling nu este prezentat pe site ca tratament pentru vergeturi, pentru că această indicație nu este confirmată în materialele salonului. Numărul de ședințe se stabilește la evaluare, nu dintr-un număr universal.",
  },
  {
    question: "Cât costă tratamentul vergeturilor în Craiova?",
    answer:
      "În lista de prețuri, radiofrecvența fracționată este „de la 1000 lei / ședință / zonă”. Formularea „de la” înseamnă că prețul poate varia în funcție de zona tratată. Nu este un tarif unic pentru orice suprafață și nu înlocuiește evaluarea.",
  },
] as const
