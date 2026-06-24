import type { ComponentType, ReactNode } from "react"
import { businessProfile } from "@/lib/seo/business"
import Link from "next/link"
import {
  Activity,
  CheckCircle2,
  Heart,
  Quote,
  Shield,
  Sparkles,
  Star,
  Target,
  Waves } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"

function SectionShell({
  children,
  className,
  id }: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center" }: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
          <span className="text-foreground/90">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function InfoCard({
  icon: Icon,
  title,
  children }: {
  icon: ComponentType<{ className?: string }>
  title: string
  children: ReactNode
}) {
  return (
    <article className="group rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F] transition-colors group-hover:bg-[#D4AF37]/20">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </article>
  )
}

function InlineCTA({
  title,
  description,
  primaryLabel = "Programează consultația" }: {
  title: string
  description: string
  primaryLabel?: string
}) {
  return (
    <SectionShell className="bg-secondary/50 py-16">
      <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 px-6 py-10 text-center shadow-premium backdrop-blur-sm sm:px-10">
        <h2 className="mb-4 font-serif text-3xl font-semibold text-[#0E2B1F]">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="tel:+40757851882"
            className="inline-flex items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
          >
            {primaryLabel}
          </Link>
          <Link
            href={businessProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white/70 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-[#D4AF37]/10"
          >
            WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#0E2B1F]/15 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-white/70"
          >
            Contact
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

const testimonials = [
  {
    name: "Ioana R.",
    role: "Protocol remodelare",
    content:
      "Am început cu radiofrecvență și drenaj limfatic, iar după câteva ședințe am observat pielea mai fermă pe coapse și abdomen. M-am simțit ascultată de la prima consultație.",
    rating: 5 },
  {
    name: "Cristina V.",
    role: "Clientă Claire Beauty",
    content:
      "Căutam o alternativă la operație pentru conturul corporal. Protocolul personalizat cu electrostimulare și masaj anticelulitic mi-a redat încrederea — rezultatele au venit treptat, exact cum mi s-a explicat.",
    rating: 5 },
  {
    name: "Diana M.",
    role: "Remodelare post-sarcină",
    content:
      "Atmosfera din salon este relaxantă, iar tratamentele sunt confortabile. Apreciez că nu mi s-au promis miracole, ci un plan realist care chiar funcționează pe termen mediu.",
    rating: 5 },
]

const experienceSteps = [
  {
    step: "1",
    title: "Consultație și evaluare",
    text: "Discutăm obiectivele tale — contur, fermitate, celulită sau retenție de apă. Analizăm zonele vizate și istoricul tău pentru a recomanda protocolul potrivit." },
  {
    step: "2",
    title: "Plan personalizat",
    text: "Stabilim combinația de tratamente: radiofrecvență, electrostimulare, drenaj limfatic, masaj anticelulitic sau un mix adaptat. Primești o estimare a numărului de ședințe și frecvenței." },
  {
    step: "3",
    title: "Ședințe de tratament",
    text: "Fiecare vizită durează între 45 și 90 de minute, în funcție de protocol. Te ghidăm pas cu pas, explicăm ce simți în timpul procedurii și ajustăm intensitatea după toleranță." },
  {
    step: "4",
    title: "Monitorizare și ajustare",
    text: "Evaluăm progresul periodic și adaptăm protocolul dacă este necesar. Îți oferim recomandări pentru acasă — hidratare, mișcare ușoară — care susțin rezultatele obținute în cabinet." },
]

export function RemodelareSections() {
  return (
    <>
      <InlineCTA
        title="Începe remodelarea corporală în Craiova"
        description="Consultație personalizată, protocoale non-invazive și abordare profesională la Claire Beauty Craiova."
        primaryLabel="Programează consultația"
      />

      <SectionShell id="beneficii" className="scroll-mt-24 bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Introducere"
              title="Ce este remodelarea corporală și de ce contează"
              description="Un protocol integrat pentru contur, fermitate și aspect armonios al siluetei — fără operație."
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Remodelarea corporală reprezintă ansamblul tratamentelor dedicate
                redefinirii conturului, tonifierii pielii și susținerii unui
                aspect corporal echilibrat. La Claire Beauty Craiova, abordăm
                remodelarea ca pe un proces personalizat, nu ca pe o procedură
                unică aplicată identic tuturor. Fiecare clientă are obiective
                diferite: unii vor fermitate după slăbire, alții doresc
                reducerea aspectului de celulită, alții caută tonifiere în
                zonele abdominale sau ale coapselor.
              </p>
              <p>
                Spre deosebire de metodele invazive, protocoalele noastre
                non-invazive lucrează în profunzime asupra țesuturilor fără
                incizii, anestezie sau perioade de recuperare. Combinăm
                tehnologii moderne —{" "}
                <Link
                  href="/radiofrecventa-corporala-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  radiofrecvență corporală
                </Link>{" "}
                și{" "}
                <Link
                  href="/electrostimulare-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  electrostimulare
                </Link>{" "}
                — cu tehnici manuale specializate, precum{" "}
                <Link
                  href="/drenaj-limfatic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  drenajul limfatic
                </Link>{" "}
                și{" "}
                <Link
                  href="/masaj-anticelulitic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  masajul anticelulitic
                </Link>
                , pentru a acoperi atât calitatea pielii, cât și conturul
                muscular.
              </p>
              <p>
                Remodelarea corporală nu înseamnă pierdere rapidă de kilograme.
                Este despre cum arată și se simte corpul tău — piele mai fermă,
                contur mai definit, senzație de ușurință și încredere. Rezultatele
                depind de consecvență, de obiceiurile tale zilnice și de
                combinația corectă de tratamente, stabilită la consultație.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile remodelării corporale la Claire Beauty"
          description="Tratamente orientate spre rezultate vizibile, adaptate nevoilor tale reale."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Contur corporal mai definit",
              text: "Protocoalele susțin redefinirea siluetei prin tonifiere și stimularea țesuturilor, cu accent pe zonele care te preocupă — abdomen, coapse, brațe sau fesieri." },
            {
              icon: Sparkles,
              title: "Fermitate și elasticitate",
              text: "Radiofrecvența stimulează producția de colagen, îmbunătățind textura și compactitatea pielii. Este ideală după slăbire sau în perioadele în care pielea își pierde tonusul." },
            {
              icon: Activity,
              title: "Tonifiere musculară",
              text: "Electrostimularea activează mușchii prin impulsuri controlate, completând efectele asupra pielii. Contribuie la un aspect tonifiat, mai ales când este integrată într-un protocol complet." },
            {
              icon: Waves,
              title: "Reducerea retenției de apă",
              text: "Drenajul limfatic elimină excessul de lichid din țesuturi, reduce senzația de picioare grele și pregătește corpul pentru tratamentele tehnologice." },
            {
              icon: Heart,
              title: "Aspect îmbunătățit al celulitei",
              text: "Masajul anticelulitic, combinat cu radiofrecvență, poate reduce vizibilitatea celulitei prin stimularea circulației și refacerea structurii pielii." },
            {
              icon: Shield,
              title: "Abordare sigură, fără operație",
              text: "Toate procedurile sunt non-invazive, desfășurate în cabinet, fără riscurile și recuperarea asociate intervențiilor chirurgicale." },
          ].map((benefit) => (
            <InfoCard key={benefit.title} icon={benefit.icon} title={benefit.title}>
              <p>{benefit.text}</p>
            </InfoCard>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Pentru o imagine de ansamblu a serviciilor disponibile, explorează
          pagina dedicată{" "}
          <Link
            href="/tratamente-corporale-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            tratamente corporale Craiova
          </Link>
          .
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Tehnologii"
          title="Tehnologiile din spatele remodelării corporale"
          description="Radiofrecvență și electrostimulare — două piloni complementari ai protocolului nostru."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Radiofrecvență corporală
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Radiofrecvența utilizează unde electromagnetice pentru a
                încălzi țesuturile în profunzime, declanșând procese naturale de
                regenerare. Căldura controlată stimulează fibroblastele să
                producă colagen nou, ceea ce duce la o piele mai fermă, mai
                elastică și cu aspect îmbunătățit. Este una dintre cele mai
                eficiente tehnologii non-invazive pentru fermitate și reducerea
                aspectului de celulită.
              </p>
              <p>
                În protocoalele de remodelare corporală, radiofrecvența acționează
                asupra calității pielii — compactează, uniformizează și susține
                conturul. Poate fi aplicată pe abdomen, coapse, fesieri, brațe
                sau alte zone unde pielea a pierdut tonusul. Senzația în timpul
                tratamentului este de obicei una de căldură plăcută, iar
                ședințele durează între 30 și 60 de minute, în funcție de zonă.
              </p>
              <p>
                Află detalii complete despre tehnologie, indicații și protocol
                pe pagina{" "}
                <Link
                  href="/radiofrecventa-corporala-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  radiofrecvență corporală Craiova
                </Link>
                .
              </p>
            </div>
          </article>
          <article className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Electrostimulare
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Electrostimularea folosește impulsuri electrice de intensitate
                controlată pentru a contracta mușchii în mod pasiv. Spre
                deosebire de radiofrecvență, care acționează în principal asupra
                pielii, electrostimularea vizează tonifierea musculară și
                conturul corporal. Este utilă pentru zonele unde mușchii au
                pierdut tonusul sau unde vrei o definire mai accentuată.
              </p>
              <p>
                În cabinet, electrozi specializați sunt plasați pe zonele
                vizate, iar intensitatea se ajustează treptat, în funcție de
                toleranța ta. Contracțiile musculare simulate pot fi comparate cu
                o sesiune ușoară de fitness, dar fără efortul fizic activ. Când
                este combinată cu radiofrecvență, electrostimularea completează
                protocolul: pielea devine mai fermă, iar mușchii de dedesubt sunt
                activați și tonifiați.
              </p>
              <p>
                Consultă pagina{" "}
                <Link
                  href="/electrostimulare-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  electrostimulare Craiova
                </Link>{" "}
                pentru informații despre indicații, durata ședințelor și
                combinații recomandate.
              </p>
            </div>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/60 p-8">
          <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
            De ce combinăm tehnologiile?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Nici radiofrecvența, nici electrostimularea nu acoperă singure toate
            aspectele remodelării corporale. Pielea are nevoie de stimulare
            colagenică, mușchii de activare, iar țesuturile de drenaj eficient.
            Un protocol complet integrează ambele tehnologii cu tehnici manuale,
            pentru rezultate echilibrate. La consultație evaluăm ce proporție
            este potrivită pentru tine — unele cliente au nevoie mai mult de
            fermitate, altele de tonifiere musculară, altele de reducere a
            retenției.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Drenaj limfatic"
              title="Legătura dintre drenaj limfatic și remodelare corporală"
              description="Un pas esențial adesea trecut cu vederea, dar crucial pentru rezultate durabile."
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sistemul limfatic este responsabil pentru eliminarea toxinelor,
                a deșeurilor celulare și a excessului de lichid din organism.
                Când fluxul limfatic este lent — din cauza sedentarismului,
                retenției de apă sau oboselii — țesuturile se pot umfla, pielea
                capătă un aspect „înfășurat", iar tratamentele tehnologice au
                eficiență redusă.
              </p>
              <p>
                Drenajul limfatic manual stimulează circulația limfei prin
                mișcări precise, ritmice, care ghidează lichidul spre nodurile
                limfatice. În protocoalele de remodelare corporală, drenajul
                limfatic are rol de pregătire: curăță țesuturile, reduce
                edemele și creează condiții optime pentru radiofrecvență,
                electrostimulare sau masaj anticelulitic.
              </p>
              <p>
                Multe cliente observă o diferență imediată după drenaj — picioare
                mai ușoare, abdomen mai plat, senzație generală de detoxifiere.
                Pe termen mediu, drenajul regulat susține conturul corporal și
                previne acumularea de lichid care ascunde progresul real al
                celorlalte tratamente.
              </p>
              <p>
                Descoperă tehnica, beneficiile și indicațiile pe pagina{" "}
                <Link
                  href="/drenaj-limfatic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  drenaj limfatic Craiova
                </Link>
                . De asemenea,{" "}
                <Link
                  href="/masaj-anticelulitic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  masajul anticelulitic
                </Link>{" "}
                completează drenajul prin stimularea circulației sanguine și
                refacerea aspectului pielii.
              </p>
            </div>
          </div>
          <div className="order-1 relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg lg:order-2">
            <ClaireImage
              {...claireImages.remodelareCorporalaContent}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Fără operație"
          title="Remodelare corporală fără operație — ce înseamnă concret"
          description="Alternative sigure și confortabile la intervențiile chirurgicale."
        />
        <div className="mx-auto max-w-4xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Intervențiile chirurgicale de remodelare corporală — liposucție,
            abdominoplastie sau lifting — implică anestezie, incizii, riscuri
            medicale și perioade de recuperare care pot dura săptămâni. Pentru
            multe persoane, aceste opțiuni sunt fie prea invazive, fie
            nejustificate pentru obiectivele lor. Remodelarea corporală
            non-invazivă oferă o cale intermediară: rezultate progresive, fără
            bisturiu, fără internare și fără timp pierdut din activitățile
            zilnice.
          </p>
          <p>
            Tratamentele noastre se desfășoară în cabinet, într-un mediu
            confortabil. Poți reveni imediat la programul tău obișnuit după
            fiecare ședință. Nu există cicatrici, vânătăi semnificative sau
            restricții majore post-procedură. Singurele recomandări sunt
            hidratarea adecvată, evitarea meselor foarte grele imediat după
            tratament și, ideal, o activitate fizică moderată care susține
            circulația.
          </p>
          <p>
            Este important de menționat că remodelarea non-invazivă nu produce
            aceleași schimbări dramatice ca o operație. Nu elimină volume mari
            de grăsime și nu înlocuiește un stil de viață sănătos. Ceea ce
            oferă, însă, este o îmbunătățire reală și graduală a conturului,
            fermității și aspectului pielii — cu riscuri minime și confort
            maxim. Pentru obiective moderate și realistic stabilite, este adesea
            soluția potrivită.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <BulletList
            items={[
              "Fără anestezie, incizii sau internare",
              "Recuperare imediată — poți continua ziua normal",
              "Rezultate progresive, naturale și controlabile",
              "Protocol adaptabil în funcție de răspunsul organismului",
              "Combinabil cu alte tratamente corporale din oferta noastră",
            ]}
          />
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei un protocol personalizat de remodelare?"
        description="Programează o consultație la Claire Beauty Craiova și află ce combinație de tratamente ți se potrivește."
        primaryLabel="Programează consultația"
      />

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Experiența ta"
          title="Cum decurge experiența de remodelare corporală"
          description="De la prima consultație la monitorizarea progresului — totul explicat pas cu pas."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {experienceSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15 font-serif text-lg font-semibold text-[#0E2B1F]">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Pentru programări, ne găsești pe pagina de{" "}
          <Link
            href="/contact"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            contact
          </Link>{" "}
          sau la telefon +40 757 851 882. Răspundem rapid și îți propunem
          intervalul potrivit.
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Rezultate"
          title="Rezultate așteptate — ce poți spera realist"
          description="Transparență și onestitate: fără promisiuni nerealiste, doar așteptări corecte."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Ce poți observa progresiv
            </h3>
            <BulletList
              items={[
                "Piele mai fermă și mai uniformă, mai ales după radiofrecvență",
                "Contur corporal mai definit, susținut de electrostimulare",
                "Reducerea senzației de picioare grele și a retenției de apă",
                "Aspect îmbunătățit al celulitei, cu diminuare graduală",
                "Tonifiere musculară vizibilă în zonele tratate regulat",
                "Stare generală de bine și încredere crescută în propriul corp",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-amber-200/60 bg-amber-50/50 p-8 shadow-premium backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Ce nu garantăm
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nu promitem pierderi rapide de kilograme sau transformări
                spectaculoase într-o singură ședință. Remodelarea corporală este
                un proces, nu un eveniment punctual. Rezultatele variază de la
                persoană la persoană, în funcție de metabolism, obiceiuri
                alimentare, activitate fizică, vârstă și consecvența
                tratamentelor.
              </p>
              <p>
                Tratamentele non-invazive nu înlocuiesc o dietă echilibrată sau
                exercițiul fizic. Ele completează eforturile tale, accelerând
                și susținând schimbările pe care le faci deja. Dacă obiectivul
                tău principal este slăbirea semnificativă, îți recomandăm să
                abordezi remodelarea ca pe un complement, nu ca pe soluția
                unică.
              </p>
              <p>
                La consultație discutăm deschis despre ce este realist pentru
                situația ta. Preferăm să stabilim așteptări corecte decât să
                creăm dezamăgiri. Transparența este parte din experiența Claire
                Beauty.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/60 p-8">
          <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
            Timeline orientativ
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                period: "3–4 ședințe",
                text: "Primele schimbări subtile — piele mai catifelată, senzație de ușurință" },
              {
                period: "6–8 ședințe",
                text: "Diferențe vizibile în fermitate și contur, mai ales cu protocol combinat" },
              {
                period: "10+ ședințe",
                text: "Rezultate consolidate, cu menținere prin ședințe de întreținere" },
            ].map((phase) => (
              <div
                key={phase.period}
                className="rounded-xl border border-[#D4AF37]/10 bg-white/70 p-5"
              >
                <p className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {phase.period}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {phase.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Testimoniale"
          title="Experiențe ale clientelor noastre"
          description="Feedback real de la persoane care au urmat protocoale de remodelare corporală."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium backdrop-blur-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-[#D4AF37]/40" />
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[#D4AF37]"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                {`"${testimonial.content}"`}
              </p>
              <div>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Servicii conexe"
          title="Tratamente complementare pentru remodelare"
          description="Explorează paginile dedicate fiecărui serviciu din protocolul de remodelare corporală."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              label: "Radiofrecvență corporală",
              href: "/radiofrecventa-corporala-craiova" },
            {
              label: "Electrostimulare",
              href: "/electrostimulare-craiova" },
            {
              label: "Drenaj limfatic",
              href: "/drenaj-limfatic-craiova" },
            {
              label: "Masaj anticelulitic",
              href: "/masaj-anticelulitic-craiova" },
            {
              label: "Tratamente corporale",
              href: "/tratamente-corporale-craiova" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-premium transition-all hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Remodelarea corporală la Claire Beauty Craiova este mai mult decât o
            listă de proceduri — este o abordare integrată, personalizată și
            onestă. Combinăm cele mai eficiente tehnologii și tehnici manuale
            disponibile, adaptate obiectivelor tale reale. Fie că vrei fermitate
            după slăbire, tonifiere în zone specifice, reducerea celulitei sau
            pur și simplu să te simți mai bine în corpul tău, suntem aici să
            construim împreună protocolul potrivit.
          </p>
          <p>
            Nu lăsăm nimic la întâmplare: evaluăm, planificăm, tratăm și
            monitorizăm. Fiecare ședință este un pas spre obiectivul tău, iar
            transparența despre ce poți aștepta face diferența între o experiență
            frustrantă și una care chiar funcționează. Programează o consultație
            și descoperă cum arată remodelarea corporală făcută corect — la
            standardele Claire Beauty Craiova.
          </p>
        </div>
      </SectionShell>

      <ServiceCTA
        title="Programează remodelare corporală în Craiova"
        description="Consultație personalizată, protocoale non-invazive și echipă dedicată obiectivelor tale. Telefon: 0757 851 882."
      />
    </>
  )
}
