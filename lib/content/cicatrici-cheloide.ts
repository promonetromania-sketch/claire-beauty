export const cicatriciCheloideWhatsappMessage =
  "Bună ziua! Aș dori să discut despre o cicatrice reliefată la Claire Beauty Craiova și să aflu dacă o procedură estetică poate fi potrivită."

export function cicatriciCheloideWhatsappHref(baseUrl: string) {
  return `${baseUrl}?text=${encodeURIComponent(cicatriciCheloideWhatsappMessage)}`
}

export const cicatriciCheloideFaqs = [
  {
    question: "Ce este o cicatrice cheloidă?",
    answer:
      "Termenul descrie un anumit tip de cicatrice, care poate deveni mai reliefată în timpul vindecării și poate avea un comportament diferit de o urmă obișnuită. Nu este o etichetă pe care să o pui după o fotografie sau după o descriere online. La Claire Beauty nu stabilim acest diagnostic. Dacă aspectul te îngrijorează, evaluarea unui medic dermatolog sau chirurg are prioritate înaintea unei proceduri estetice.",
  },
  {
    question: "Cum îmi dau seama dacă o cicatrice este cheloidă sau doar reliefată?",
    answer:
      "Nu îți recomandăm să stabilești singură acest lucru. O cicatrice reliefată nu este automat o cicatrice cheloidă. Relieful, culoarea sau faptul că te deranjează nu sunt suficiente pentru un diagnostic. Aspectul trebuie evaluat corespunzător înainte de orice alegere. Dacă cicatricea crește, se extinde, doare, provoacă mâncărime persistentă sau zona nu este vindecată, discută mai întâi cu un medic.",
  },
  {
    question: "Care este diferența dintre o cicatrice cheloidă și una hipertrofică?",
    answer:
      "În termeni foarte generali, o cicatrice hipertrofică poate fi reliefată și rămâne asociată zonei inițiale a leziunii. O cicatrice cheloidă poate avea un comportament diferit și se poate extinde dincolo de limitele inițiale. Aceste descrieri nu sunt un instrument de autodiagnostic. Două cicatrici pot arăta asemănător și pot necesita abordări diferite. Aspectul se evaluează înainte de alegerea oricărei proceduri.",
  },
  {
    question: "Se poate trata estetic o cicatrice cheloidă?",
    answer:
      "Nu orice cicatrice cheloidă este potrivită pentru o procedură estetică de salon. Unele situații necesită evaluare și management medical. La Claire Beauty putem discuta procedurile disponibile pentru îmbunătățirea aspectului anumitor cicatrici vindecate, atunci când acestea sunt potrivite. Dacă situația depășește sfera procedurilor noastre, îți recomandăm să discuți mai întâi cu medicul potrivit. Nu promitem că o cicatrice dispare.",
  },
  {
    question: "Ce fac dacă cicatricea după cezariană este îngroșată?",
    answer:
      "Nu o eticheta automat drept cheloidă. După vindecare, unele cicatrici de cezariană rămân mai reliefate sau mai vizibile decât te așteptai. Dacă zona este închisă, stabilă și fără semne care te îngrijorează, obiectivul estetic se poate discuta pe pagina dedicată cicatricei după cezariană. Dacă cicatricea continuă să crească, doare, mănâncă persistent, se extinde sau zona nu este complet vindecată, evaluarea medicală are prioritate.",
  },
  {
    question: "Cât costă tratamentul unei cicatrici reliefate în Craiova?",
    answer:
      "Nu există un tarif unic pentru o cicatrice cheloidă. Prețul depinde de procedura care poate fi recomandată după evaluare. În lista salonului, radiofrecvența fracționată este de la 1.000 lei pe ședință și zonă. Acest tarif nu înseamnă că radiofrecvența este indicată automat pentru orice cicatrice reliefată sau cheloidă. Dacă procedura nu este potrivită, nu se începe.",
  },
] as const
