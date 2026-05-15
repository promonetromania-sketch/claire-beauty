"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cum pot face o programare?",
    answer:
      "Poți face o programare sunând la numărul nostru de telefon +40 757 851 882, prin WhatsApp, sau vizitându-ne direct la salon. Îți recomandăm să ne contactezi cu cel puțin 24 de ore înainte pentru a-ți asigura locul dorit.",
  },
  {
    question: "Cât durează o ședință de tratament?",
    answer:
      "Durata variază în funcție de tipul tratamentului ales. În general, o ședință poate dura între 30 de minute și 2 ore. La prima vizită, vom discuta despre nevoile tale și vom stabili împreună durata optimă.",
  },
  {
    question: "Ce trebuie să fac înainte de tratament?",
    answer:
      "Îți recomandăm să vii cu aproximativ 10 minute înainte de programare pentru a te relaxa. Pentru tratamentele corporale, evită să mănânci cu cel puțin 2 ore înainte. Pentru tratamentele faciale, vino cu tenul curat, fără machiaj.",
  },
  {
    question: "Sunt tratamentele sigure?",
    answer:
      "Da, toate tratamentele noastre sunt sigure și efectuate de personal calificat. Folosim doar produse și echipamente certificate, iar protocoalele noastre de igienă respectă cele mai înalte standarde din industrie.",
  },
  {
    question: "Câte ședințe sunt necesare pentru rezultate vizibile?",
    answer:
      "Rezultatele pot fi vizibile chiar de la prima ședință, însă pentru rezultate optime și de durată, recomandăm de obicei pachete de 5-10 ședințe, în funcție de tratament și de obiectivele tale.",
  },
  {
    question: "Oferiți pachete sau abonamente?",
    answer:
      "Da, oferim pachete avantajoase pentru diverse tratamente, precum și abonamente lunare care includ reduceri speciale. Contactează-ne pentru a afla mai multe despre ofertele curente.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Întrebări Frecvente
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Ai Întrebări?
            <span className="text-gold-gradient"> Avem Răspunsuri</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Găsește răspunsuri la cele mai frecvente întrebări despre serviciile
            noastre.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-premium border-none"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:text-accent py-6 [&[data-state=open]]:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
