import type { Metadata } from "next"
import {
  Heart,
  Brain,
  Moon,
  Zap,
  Shield,
  Leaf,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { VisualGallery } from "@/components/shared/visual-gallery"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { ServiceDetails } from "@/components/services/service-details"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"
import { claireImages, pageGalleries } from "@/lib/images/claire-beauty"

export const metadata: Metadata = {
  title: "Reflexoterapie Craiova | Claire's Studio by Ana Savovici",
  description:
    "Reflexoterapie profesională în Craiova. Tratament holistic pentru echilibrarea organismului, reducerea stresului și îmbunătățirea sănătății generale. Programează-te acum!",
  keywords: [
    "reflexoterapie Craiova",
    "reflexoterapie plantară Craiova",
    "masaj tălpi Craiova",
    "terapie reflexogenă Craiova",
    "tratament holistic Craiova",
    "wellness Craiova",
  ],
  openGraph: {
    title: "Reflexoterapie Craiova | Claire's Studio",
    description:
      "Reflexoterapie profesională în Craiova. Tratament holistic pentru echilibrarea organismului și reducerea stresului.",
    type: "website",
    locale: "ro_RO",
  },
}

const benefits = [
  {
    icon: Heart,
    title: "Îmbunătățirea Circulației",
    description:
      "Stimulează fluxul sanguin și ajută la oxigenarea mai bună a țesuturilor din întregul corp.",
  },
  {
    icon: Brain,
    title: "Reducerea Stresului",
    description:
      "Calmează sistemul nervos și reduce nivelul de cortizol, hormonul stresului.",
  },
  {
    icon: Moon,
    title: "Somn Mai Bun",
    description:
      "Îmbunătățește calitatea somnului și ajută la combaterea insomniei în mod natural.",
  },
  {
    icon: Zap,
    title: "Mai Multă Energie",
    description:
      "Crește nivelul de energie și vitalitate prin echilibrarea sistemelor corpului.",
  },
  {
    icon: Shield,
    title: "Sistem Imunitar Întărit",
    description:
      "Stimulează funcțiile imunitare și ajută organismul să se apere mai eficient.",
  },
  {
    icon: Leaf,
    title: "Detoxifiere Naturală",
    description:
      "Ajută la eliminarea toxinelor și la curățarea organismului în mod natural.",
  },
]

const whatIsFeatures = [
  "Tehnici tradiționale combinate cu metode moderne",
  "Stimularea punctelor reflexogene din tălpi",
  "Tratament non-invaziv și complet natural",
  "Fără efecte secundare negative",
  "Adecvat pentru toate vârstele",
]

const sessionFeatures = [
  "Consultație inițială pentru evaluarea nevoilor tale",
  "Atmosferă relaxantă și intimă",
  "Tehnician certificat cu experiență vastă",
  "Protocoale personalizate pentru fiecare client",
  "Urmărire și ajustare continuă a tratamentului",
]

const faqs = [
  {
    question: "Ce este reflexoterapia?",
    answer:
      "Reflexoterapia este o terapie holistică care se bazează pe stimularea punctelor reflexogene din tălpi, mâini sau urechi. Aceste puncte corespund diferitelor organe și sisteme ale corpului. Prin aplicarea unei presiuni controlate, se poate influența pozitiv funcționarea întregului organism.",
  },
  {
    question: "Este dureroasă reflexoterapia?",
    answer:
      "Nu, reflexoterapia nu este dureroasă. Poți simți o presiune fermă, dar plăcută. Dacă anumite zone sunt sensibile, aceasta poate indica un dezechilibru în organul corespunzător. Tehnicianul va ajusta presiunea în funcție de confortul tău.",
  },
  {
    question: "Câte ședințe sunt necesare?",
    answer:
      "Numărul de ședințe variază în funcție de problema abordată și de răspunsul individual. Pentru probleme acute, 3-5 ședințe pot fi suficiente. Pentru afecțiuni cronice sau pentru menținerea sănătății, se recomandă ședințe regulate, de obicei săptămânale sau bisăptămânale.",
  },
  {
    question: "Cât durează o ședință?",
    answer:
      "O ședință completă de reflexoterapie durează aproximativ 45-60 de minute. Prima ședință poate dura puțin mai mult, deoarece include și o consultație pentru evaluarea stării tale generale de sănătate.",
  },
  {
    question: "Cine poate beneficia de reflexoterapie?",
    answer:
      "Reflexoterapia este potrivită pentru aproape orice persoană, indiferent de vârstă. Este deosebit de benefică pentru cei care suferă de stres, anxietate, dureri de cap, probleme digestive, insomnie sau dureri cronice. Totuși, se recomandă consultarea unui medic în cazul unor afecțiuni grave.",
  },
  {
    question: "Ce trebuie să fac înainte de ședință?",
    answer:
      "Îți recomandăm să eviți mesele copioase cu 1-2 ore înainte de ședință și să bei suficientă apă. Vino cu picioarele curate și poartă haine confortabile. După ședință, bea multă apă pentru a ajuta la eliminarea toxinelor.",
  },
]

export default function ReflexoterapiePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Reflexoterapie Craiova"
          subtitle="Terapie Holistică"
          description="Descoperă puterea vindecătoare a reflexoterapiei. Tratament natural care echilibrează corpul și mintea prin stimularea punctelor reflexogene din tălpi."
          image={claireImages.reflexoterapie}
          badge="Tratament Premium"
        />

        <ServiceBenefits
          title="Beneficiile Reflexoterapiei"
          subtitle="De Ce Să Alegi Reflexoterapia"
          description="Reflexoterapia oferă numeroase beneficii pentru sănătatea fizică și mentală, ajutând la restabilirea echilibrului natural al organismului."
          benefits={benefits}
        />

        <ServiceDetails
          title="Ce Este Reflexoterapia?"
          subtitle="Înțelege Tratamentul"
          description="Reflexoterapia este o terapie complementară antică care se bazează pe principiul că tălpile picioarelor conțin zone reflexogene care corespund tuturor organelor și sistemelor corpului. Prin stimularea acestor puncte, se poate îmbunătăți funcționarea organelor corespondente și se poate restabili echilibrul energetic al corpului."
          image={claireImages.reflexoterapie}
          features={whatIsFeatures}
        />

        <ServiceDetails
          title="Cum Decurge O Ședință?"
          subtitle="Experiența Ta"
          description="La Claire's Studio, fiecare ședință de reflexoterapie este o experiență de relaxare profundă. Într-un ambient calm și primitor, tehnicianul nostru certificat va lucra pe punctele reflexogene ale tălpilor tale, adaptând presiunea și tehnicile în funcție de nevoile tale specifice."
          image={claireImages.masajRelaxare}
          features={sessionFeatures}
          reversed
        />

        <VisualGallery
          images={pageGalleries.reflexoterapie}
          eyebrow="În salon"
          title="Reflexoterapie la Claire Beauty"
          description="Proceduri reale, tehnici profesionale și atmosferă relaxantă — așa arată experiența de reflexoterapie în cabinetul nostru."
          className="bg-background"
          columns={3}
        />

        <ServiceCTA
          title="Programează Prima Ta Ședință de Reflexoterapie"
          description="Descoperă beneficiile reflexoterapiei și începe-ți călătoria către o stare de bine completă. Contactează-ne acum pentru o programare."
        />

        <ServiceFAQ
          title="Întrebări Despre Reflexoterapie"
          subtitle="Informații Utile"
          faqs={faqs}
        />

        {/* Local SEO Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              Reflexoterapie Profesională în Craiova
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {"Claire's Studio by Ana Savovici"} oferă servicii premium de{" "}
              <strong>reflexoterapie în Craiova</strong>. Dacă cauți{" "}
              <strong>reflexoterapie plantară Craiova</strong>,{" "}
              <strong>masaj tălpi Craiova</strong> sau{" "}
              <strong>terapie reflexogenă Craiova</strong>, suntem aici pentru
              tine. Salonul nostru de body spa oferă tratamente holistice pentru
              echilibrarea corpului și minții, într-un ambient relaxant și
              profesionist.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
