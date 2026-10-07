import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import {
  CheckCircle2,
  Compass,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { ServiceCTA } from "@/components/services/service-cta"
import { LocalSEOSection } from "@/components/home/local-seo-section"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"
import { pricingCategories, type PricingItem } from "@/lib/content/pricing"
import { rejuvenareFacialaWhatsappHref } from "@/lib/content/rejuvenare-faciala"
import { cn } from "@/lib/utils"

const whatsappHref = rejuvenareFacialaWhatsappHref(businessProfile.whatsappUrl)

const linkClass =
  "font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"

function findPrice(name: string): PricingItem | undefined {
  return pricingCategories.flatMap((category) => category.items).find((item) => item.name === name)
}

const hifuPrice = findPrice("HIFU față")
const hifuPackagePrice = findPrice("HIFU față + gușă + decolteu")
const microneedlingPrice = findPrice("Microneedling")
const rfPrice = findPrice("Radiofrecvență fracționată")

function SectionShell({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
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
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function TextLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  )
}

function ActionLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const className =
    "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white/80 px-5 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/10 sm:w-auto"
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

const concerns: {
  title: string
  text: string
  links?: { href: string; label: string }[]
}[] = [
  {
    title: "Piele mai puțin fermă",
    text: "Când obiectivul principal este fermitatea și aspectul mai bine conturat, conversația pornește de la HIFU facial. Pagina dedicată explică procedura. Aici rămâne doar criteriul de alegere: fermitatea, nu numele aparatului.",
    links: [{ href: "/hifu-facial-craiova", label: "Descoperă HIFU facial" }],
  },
  {
    title: "Textură neuniformă",
    text: "Pentru persoanele preocupate de textura și aspectul general al pielii, microneedling este direcția de discutat. Dacă neuniformitatea vine dintr-o cicatrice sau dintr-o vergetură, radiofrecvența fracționată are indicații proprii. Pagina de cicatrici și vergeturi rămâne despre problemă, nu despre alegerea tehnologiei.",
    links: [
      { href: "/microneedling-craiova", label: "Descoperă microneedling" },
      { href: "/radiofrecventa-fractionata-craiova", label: "Vezi radiofrecvența fracționată" },
      { href: "/cicatrici-vergeturi-craiova", label: "Cicatrici și vergeturi" },
    ],
  },
  {
    title: "Cicatrici post-acnee",
    text: "Dacă principala preocupare sunt urmele rămase după acnee, pagina dedicată explică diferența dintre pete și cicatrici și cum se alege procedura, după ce pielea s-a calmat. Nu este un tratament pentru acnee activă. Rejuvenarea facială rămâne obiectivul general de aspect al tenului.",
    links: [
      {
        href: "/cicatrici-acnee-craiova",
        label: "Vezi cicatrici post-acnee",
      },
    ],
  },
  {
    title: "Aspect tern / lipsă de prospețime",
    text: "Un ten care pare obosit nu cere automat aceeași procedură ca o piele mai puțin fermă. Evaluarea ajută la alegerea tratamentului potrivit pentru obiectiv. Dacă nevoia este mai degrabă o îngrijire facială de întreținere, hub-ul de tratamente faciale rămâne punctul de plecare.",
    links: [
      { href: "/tratamente-faciale-craiova", label: "Vezi tratamentele faciale" },
    ],
  },
  {
    title: "Linii fine / semne vizibile ale înaintării în vârstă",
    text: "Liniile fine se discută ca un aspect al pielii, nu ca o promisiune că dispar. Uneori contează fermitatea și conturul, alteori textura. Procedura se alege după ce vedem tenul și după ce spunem, onest, ce se poate urmări și ce nu.",
    links: [{ href: "#tratamente", label: "Compară direcțiile de tratament" }],
  },
  {
    title: "Stimularea colagenului",
    text: "Există proceduri care pot avea ca obiectiv susținerea proceselor de remodelare și a colagenului, în funcție de tehnologia utilizată. Nu este un efect identic la HIFU, microneedling și radiofrecvență fracționată. De aceea pagina dedicată fiecărei proceduri rămâne locul detaliilor.",
    links: [{ href: "#colagen", label: "Citește despre colagen" }],
  },
]

const comparison = [
  {
    title: "HIFU",
    objective: "Fermitate și contur",
    text: "Obiectivul principal, conform serviciului de HIFU facial, este fermitatea și un contur mai bine definit. Nu este pagina care explică tehnologia. Dacă acesta este rezultatul pe care îl cauți, continuă pe pagina HIFU.",
    href: "/hifu-facial-craiova",
    label: "Pagina HIFU facial",
  },
  {
    title: "Microneedling",
    objective: "Textură și aspectul pielii",
    text: "Obiectivul principal, conform serviciului existent, este textura și aspectul general al pielii. Protocolul, numărul de ședințe și evoluția stau pe pagina de microneedling, nu aici.",
    href: "/microneedling-craiova",
    label: "Pagina de microneedling",
  },
  {
    title: "Radiofrecvență fracționată",
    objective: "Aspectul cicatricilor și al vergeturilor",
    text: "În salon, radiofrecvența fracționată este folosită pentru îmbunătățirea aspectului cicatricilor post-acnee, al cicatricilor după operații sau cezariană și al vergeturilor. Nu este aceeași procedură cu radiofrecvența corporală.",
    href: "/radiofrecventa-fractionata-craiova",
    label: "Pagina de radiofrecvență fracționată",
  },
] as const

const reasons: { icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  {
    icon: Compass,
    title: "Evaluare individuală",
    text: "Programarea pornește de la ce te deranjează la aspectul pielii, nu de la un pachet prestabilit.",
  },
  {
    icon: Sparkles,
    title: "Mai multe tehnologii disponibile",
    text: "HIFU facial, microneedling și radiofrecvența fracționată există deja în salon, fiecare cu indicațiile ei.",
  },
  {
    icon: Leaf,
    title: "Protocol personalizat",
    text: "Zona, ritmul și procedura se stabilesc după ten și după obiectiv, nu după un număr copiat pentru toată lumea.",
  },
  {
    icon: Sun,
    title: "Așteptări realiste",
    text: "Vorbim despre un aspect mai îngrijit. Nu promitem că pielea se schimbă cu un număr de ani și nu promitem că liniile dispar.",
  },
  {
    icon: MapPin,
    title: "Locație în Craiova",
    text: "Ședințele se fac pe Strada Principatele Unite nr. 5, în Craiova, județul Dolj.",
  },
  {
    icon: Waves,
    title: "Suport în alegerea tratamentului",
    text: "Dacă nu știi ce procedură ți se potrivește, evaluarea este pasul corect. Nu trebuie să alegi tehnologia de pe internet.",
  },
]

const steps = [
  {
    step: "01",
    title: "Ne spui ce te deranjează",
    text: "Fermitate, textură, urme după acnee, aspect tern sau linii fine. Pornim de la fraza ta, nu de la un meniu de aparate.",
  },
  {
    step: "02",
    title: "Evaluăm aspectul pielii",
    text: "Ne uităm la ten, la zonă și la ce este realist de urmărit. Dacă o procedură nu se potrivește, o spunem.",
  },
  {
    step: "03",
    title: "Alegem procedura potrivită",
    text: "HIFU facial, microneedling sau radiofrecvență fracționată intră în discuție doar dacă indicația lor se suprapune peste obiectivul tău.",
  },
  {
    step: "04",
    title: "Stabilim protocolul",
    text: "Numărul de ședințe, zona și ritmul rămân legate de procedura aleasă și de felul în care răspunde pielea.",
  },
] as const

export function RejuvenareFacialaSections() {
  return (
    <>
      <SectionShell className="bg-background" id="ce-inseamna">
        <SectionHeading
          eyebrow="Obiectiv, nu aparat"
          title="Ce înseamnă rejuvenarea facială?"
        />
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Rejuvenarea facială este un termen-umbrelă. Nu este un singur
            serviciu din lista Claire Beauty și nu înseamnă că toate clientele
            care vor „un ten mai bun” primesc aceeași procedură. Ceea ce se
            cumpără, de fapt, este un rezultat estetic: un aspect mai proaspăt,
            mai multă fermitate acolo unde pielea o cere, o textură mai
            uniformă și o îmbunătățire a felului în care arată tenul.
          </p>
          <p>
            Colagenul ține de structura pielii. În timp, pielea își schimbă
            fermitatea și textura în mod natural. Unele proceduri estetice au
            ca obiectiv susținerea proceselor asociate colagenului, dar numai
            acolo unde indicația procedurii chiar este aceasta. Nu transformăm
            expresia într-o garanție și nu o atașăm automat fiecărei tehnologii
            din salon.
          </p>
          <p>
            De aceea o căutare de tip{" "}
            <strong className="font-semibold text-foreground">
              rejuvenare facială Craiova
            </strong>{" "}
            ajunge mai întâi aici, nu direct pe pagina de HIFU sau pe cea de
            microneedling. Dacă știi deja că vrei o tehnologie anume, paginile
            dedicate sunt mai precise. Dacă știi doar că vrei ca pielea feței
            să arate mai îngrijită, evaluarea este pasul care leagă obiectivul
            de procedură.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="preocupari">
        <SectionHeading
          eyebrow="De unde pornim"
          title="Ce te deranjează la aspectul pielii?"
          description="Alege preocuparea cea mai apropiată. Tehnologia se decide după ea, nu invers."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concerns.map((concern) => (
            <article
              key={concern.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold uppercase tracking-wide text-foreground">
                {concern.title}
              </h3>
              <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
                {concern.text}
              </p>
              {concern.links ? (
                <div className="flex flex-col gap-3">
                  {concern.links.map((link) => (
                    <ActionLink key={link.href + link.label} href={link.href}>
                      {link.label}
                    </ActionLink>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="tratamente">
        <SectionHeading
          eyebrow="Trei direcții, nu un câștigător"
          title="Ce tratament de rejuvenare facială ți se potrivește?"
          description="Cardurile de mai jos te duc către pagina tehnologiei. Nu repetă protocolul, prețul detaliat sau mecanismul fiecărei proceduri."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              HIFU facial
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Pentru fermitate și contur
            </h3>
            <p className="mb-8 flex-1 text-base leading-relaxed text-muted-foreground">
              Când pielea pare mai puțin susținută și conturul feței este
              preocuparea principală, HIFU facial este direcția de evaluat la
              Claire Beauty. Detaliile procedurii, evoluția și indicațiile stau
              pe pagina dedicată, ca această pagină să rămână despre alegere.
            </p>
            <ActionLink href="/hifu-facial-craiova">Descoperă HIFU facial</ActionLink>
          </article>

          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Microneedling
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Pentru textura și aspectul pielii
            </h3>
            <p className="mb-8 flex-1 text-base leading-relaxed text-muted-foreground">
              Când te uiți la textură, la un aspect mai uniform sau la felul
              în care pielea prinde lumina, microneedling este procedura de
              discutat. Pagina de microneedling rămâne locul în care sunt
              explicate ședințele și evoluția.
            </p>
            <ActionLink href="/microneedling-craiova">Descoperă microneedling</ActionLink>
          </article>

          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Radiofrecvență fracționată
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Pentru remodelarea aspectului pielii
            </h3>
            <p className="mb-8 flex-1 text-base leading-relaxed text-muted-foreground">
              În lista salonului, radiofrecvența fracționată este procedura
              folosită pentru aspectul cicatricilor și al vergeturilor: urme
              post-acnee, cicatrici după operații sau cezariană și vergeturi.
              Nu o prezentăm ca lifting facial și nu o confundăm cu
              radiofrecvența corporală.
            </p>
            <ActionLink href="/radiofrecventa-fractionata-craiova">
              Descoperă radiofrecvența fracționată
            </ActionLink>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nu trebuie să alegi singură tehnologia. La evaluare discutăm ce te
            deranjează și ce rezultat urmărești.
          </p>
          <ActionLink href={whatsappHref} external>
            Ajută-mă să aleg tratamentul
          </ActionLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="colagen">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="Pe înțelesul tău"
              title="Rejuvenare facială și stimularea colagenului"
            />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Colagenul este una dintre fibrele care dau pielii susținere și
                un aspect neted. Pe măsură ce anii trec, producția naturală
                încetinește, iar pielea poate părea mai puțin fermă, cu o
                textură mai puțin uniformă. Este o schimbare obișnuită, nu un
                defect care trebuie „șters”.
              </p>
              <p>
                Un tratament de stimulare a colagenului, în sens estetic,
                urmărește o remodelare controlată: procedura aleasă lucrează
                asupra pielii astfel încât procesele ei de refacere să fie
                susținute. La Claire Beauty, această idee apare în contexte
                diferite. HIFU facial este discutat când obiectivul este
                fermitatea și conturul. Microneedling este discutat când
                obiectivul este textura. Radiofrecvența fracționată este
                discutată când obiectivul este aspectul unei cicatrici sau al
                unei vergeturi.
              </p>
              <p>
                De aceea o căutare precum stimulare colagen Craiova nu are un
                singur răspuns în salon. Rezultatele, acolo unde apar, se văd
                progresiv pentru tehnologiile care lucrează prin remodelare, nu
                în aceeași zi pentru toate. Nu publicăm procente și nu spunem
                că un aparat produce o cantitate anume de colagen. Pagina de{" "}
                <TextLink href="/hifu-facial-craiova">HIFU facial</TextLink>, cea
                de <TextLink href="/microneedling-craiova">microneedling</TextLink>{" "}
                și cea de{" "}
                <TextLink href="/radiofrecventa-fractionata-craiova">
                  radiofrecvență fracționată
                </TextLink>{" "}
                păstrează fiecare detaliile proprii.
              </p>
              <p>
                Rejuvenarea facială, spus simplu, rămâne îmbunătățirea
                aspectului pielii pe care o ai deja. Stimularea colagenului este
                un mecanism posibil al unor proceduri, nu o promisiune separată
                și nu un al patrulea serviciu cu preț propriu.
              </p>
            </div>
          </div>
          <div className="relative min-w-0 aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-premium-lg">
            <ClaireImage
              {...claireImages.tratamentFacial2}
              alt="Îngrijire facială în salon la Claire Beauty Craiova"
              title="Tratament pentru aspectul pielii în Craiova"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="comparatie">
        <SectionHeading
          eyebrow="Fără clasament"
          title="HIFU, microneedling sau radiofrecvență fracționată?"
          description="Trei proceduri diferite. Niciuna nu le înlocuiește pe celelalte pentru orice ten."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {comparison.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium"
            >
              <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                Obiectiv principal
              </p>
              <p className="mb-4 font-serif text-xl text-foreground">{item.objective}</p>
              <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
                {item.text}
              </p>
              <ActionLink href={item.href}>{item.label}</ActionLink>
            </article>
          ))}
        </div>
        <article className="mt-6 rounded-[1.75rem] border border-[#0E2B1F]/10 bg-[#0E2B1F] p-8 text-[#FFF9F2] shadow-premium-lg">
          <h3 className="mb-3 font-serif text-2xl font-semibold">Cum aleg?</h3>
          <p className="max-w-3xl text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            În funcție de piele, obiectiv și evaluarea inițială. Dacă fermitatea
            este prima propoziție, pornim de la HIFU. Dacă textura este prima
            propoziție, pornim de la microneedling. Dacă urmele unei cicatrici
            sau ale unei vergeturi sunt motivul vizitei, pornim de la
            radiofrecvența fracționată.
          </p>
        </article>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="naturalete">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Natural, elegant, realist
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-4xl">
            Obiectivul este o versiune mai îngrijită a pielii tale, nu o altă față
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-[#0E2B1F]/75 sm:text-lg">
            <p>
              Rejuvenarea facială la Claire Beauty înseamnă îmbunătățirea
              calității și a aspectului pielii, cu păstrarea naturaleții.
              Conturul, textura și prospețimea se discută ca detalii ale
              feței pe care o ai, nu ca un proiect de a o înlocui.
            </p>
            <p>
              O procedură bine aleasă se vede discret: pielea pare mai odihnită,
              mai uniformă, mai susținută acolo unde acesta era obiectivul. Nu
              promitem un rezultat de revistă și nu folosim imagini care să
              sugereze o transformare pe care salonul nu o poate susține.
            </p>
            <p>
              Dacă așteptarea este ca ridurile să dispară sau ca fața să pară
              „altcineva”, o spunem înainte de prima ședință. Preferăm o
              programare refuzată unei promisiuni care nu poate fi ținută.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="zone">
        <SectionHeading
          eyebrow="Doar ce este confirmat"
          title="Ce zone pot fi abordate?"
        />
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">HIFU facial</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Lista de prețuri confirmă HIFU pentru față. Separat, există un
              pachet față, gușă și decolteu. Pleoapele și zona oculară nu sunt
              enumerate ca zonă de lucru pe această pagină.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">Microneedling</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Este o procedură facială pentru textura și aspectul pielii. Zona
              exactă se stabilește la evaluare. Nu presupunem că include
              pleoapele doar pentru că este un tratament de față.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
              Radiofrecvență fracționată
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Se lucrează pe zona urmei: cicatrici post-acnee, cicatrici după
              operații sau cezariană și vergeturi, după vindecare. Nu este un
              protocol generic pentru toată fața.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Dacă zona care te interesează nu apare clar mai sus, nu o tratăm ca
          fiind inclusă. La evaluare spunem dacă procedura aleasă poate fi
          folosită acolo.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="evaluare">
        <SectionHeading
          eyebrow="Patru pași"
          title="Nu știi ce tratament să alegi? Începem cu obiectivul tău."
        />
        <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-7 shadow-premium"
            >
              <p className="mb-4 font-serif text-3xl font-semibold text-[#D4AF37]">
                {item.step}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <a
            href={`tel:${businessProfile.telephone}`}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] hover:bg-[#0E2B1F]/90 sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Programează o evaluare
          </a>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="rezultate">
        <SectionHeading
          eyebrow="Ce putem urmări"
          title="Ce rezultate urmărim prin rejuvenarea facială?"
        />
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <ul className="space-y-3">
            {[
              "Un aspect mai îngrijit al tenului",
              "Îmbunătățirea texturii, când procedura aleasă are această indicație",
              "Fermitate, acolo unde HIFU facial este potrivit",
              "Un aspect mai uniform, inclusiv când motivul este o cicatrice sau o vergetură",
              "Revitalizarea aspectului general, fără a schimba trăsăturile",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Rezultatele diferă în funcție de starea inițială a pielii, de
              tratamentul ales, de protocol și de răspunsul individual. Două
              persoane cu același obiectiv nu pornesc de la aceeași piele, așa
              că nu primesc aceeași prognoză.
            </p>
            <p>
              Nu promitem că pielea arată „cu zece ani mai tânără”, că ridurile
              dispar sau că liftingul este garantat. Ceea ce putem discuta la
              evaluare este direcția: ce se poate îmbunătăți, în ce ritm este
              rezonabil să observi o schimbare și când o procedură nu este
              potrivită.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="timp">
        <SectionHeading
          eyebrow="Evoluții diferite"
          title="Când pot fi observate schimbările?"
          description="HIFU, microneedling și radiofrecvența sunt proceduri diferite și pot avea evoluții diferite. Nu există un singur calendar pentru rejuvenarea facială."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">HIFU facial</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Pagina de HIFU spune că unele efecte pot fi vizibile devreme, iar
              rezultatele complete apar după 2–3 luni, pe măsură ce colagenul se
              reface. Intervalul exact pentru tenul tău se confirmă acolo și la
              evaluare.
            </p>
            <div className="mt-6">
              <TextLink href="/hifu-facial-craiova">Vezi evoluția HIFU facial</TextLink>
            </div>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">Microneedling</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Pagina de microneedling spune că primele îmbunătățiri apar după
              câteva ședințe, iar rezultatele vizibile se dezvoltă progresiv.
              Nu mutăm aici protocolul complet.
            </p>
            <div className="mt-6">
              <TextLink href="/microneedling-craiova">Vezi evoluția microneedling</TextLink>
            </div>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
              Radiofrecvență fracționată
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Pentru radiofrecvența fracționată nu publicăm un interval fix de
              schimbare, pentru că depinde de zonă, de vechimea urmei și de
              piele. Pagina tehnologiei explică limitele: aspect îmbunătățit, nu
              ștergerea urmei.
            </p>
            <div className="mt-6">
              <TextLink href="/radiofrecventa-fractionata-craiova">
                Vezi radiofrecvența fracționată
              </TextLink>
            </div>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="sedinte">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="De câte ședințe de rejuvenare facială este nevoie?"
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Nu există un număr universal, pentru că rejuvenarea facială poate
              însemna proceduri diferite. Protocolul depinde de obiectiv, de
              tehnologia aleasă, de particularitățile pielii și de răspunsul
              individual.
            </p>
            <p>
              Ca orientare deja publicată pe paginile tehnologiilor: pentru
              HIFU facial, o ședință este adesea punctul de plecare, iar în
              unele cazuri se discută ședințe suplimentare. Pentru
              microneedling, intervalul menționat este, în general, între 4 și
              6 ședințe. Pentru radiofrecvența fracționată nu există un număr
              fix pe site. Aceste cifre nu se adună într-un pachet numit
              „rejuvenare”.
            </p>
          </div>
          <div className="mt-8 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 bg-white px-8 text-base font-semibold text-[#0E2B1F] hover:bg-[#D4AF37]/10 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Află ce protocol ți se potrivește
            </a>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="preturi">
        <SectionHeading
          eyebrow="Din lista salonului"
          title="Cât costă tratamentele de rejuvenare facială în Craiova?"
          description="Nu există un preț pentru un serviciu generic numit rejuvenare facială. Mai jos sunt doar procedurile confirmate în lista de prețuri."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-8 shadow-premium">
            <h3 className="mb-4 font-serif text-xl font-semibold uppercase tracking-wide text-foreground">
              HIFU facial
            </h3>
            <p className="font-serif text-3xl font-semibold text-[#0E2B1F]">
              {hifuPrice ? hifuPrice.price : "Preț neconfirmat"}
            </p>
            {hifuPackagePrice ? (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {hifuPackagePrice.name}: {hifuPackagePrice.price}
              </p>
            ) : null}
            <div className="mt-6">
              <TextLink href="/hifu-facial-craiova">Detalii HIFU facial</TextLink>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-8 shadow-premium">
            <h3 className="mb-4 font-serif text-xl font-semibold uppercase tracking-wide text-foreground">
              Microneedling
            </h3>
            <p className="font-serif text-3xl font-semibold text-[#0E2B1F]">
              {microneedlingPrice ? microneedlingPrice.price : "Preț neconfirmat"}
            </p>
            {microneedlingPrice?.detail ? (
              <p className="mt-3 text-base text-muted-foreground">{microneedlingPrice.detail}</p>
            ) : null}
            <div className="mt-6">
              <TextLink href="/microneedling-craiova">Detalii microneedling</TextLink>
            </div>
          </article>
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-8 shadow-premium">
            <h3 className="mb-4 font-serif text-xl font-semibold uppercase tracking-wide text-foreground">
              Radiofrecvență fracționată
            </h3>
            <p className="font-serif text-3xl font-semibold text-[#0E2B1F]">
              {rfPrice ? rfPrice.price : "Preț neconfirmat"}
            </p>
            {rfPrice?.detail ? (
              <p className="mt-3 text-base text-muted-foreground">{rfPrice.detail}</p>
            ) : null}
            <div className="mt-6">
              <TextLink href="/radiofrecventa-fractionata-craiova">
                Detalii radiofrecvență fracționată
              </TextLink>
            </div>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Valorile sunt preluate din lista de prețuri a site-ului. HIFU facial și
          microneedling sunt la{" "}
          <TextLink href="/preturi#faciale">tratamente faciale</TextLink>
          . Radiofrecvența fracționată este la{" "}
          <TextLink href="/preturi#remodelare">remodelare</TextLink>
          , cu trimitere către pagina tehnologiei. Prețul aplicabil se confirmă
          după evaluare, pentru că zona poate schimba valoarea acolo unde lista
          spune „de la”.
        </p>
        <div className="mt-8 text-center">
          <ActionLink href="#tratamente">Vezi ce tratament ți se potrivește</ActionLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="de-ce">
        <SectionHeading
          eyebrow="Claire Beauty"
          title="De ce să alegi Claire Beauty pentru rejuvenare facială?"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F]">
                <reason.icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{reason.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Rejuvenare facială în Craiova"
            description="O pagină locală este utilă dacă spune unde se face evaluarea și cum alegi procedura, nu dacă repetă numele fiecărui cartier ca și cum ar exista un salon în fiecare."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Claire Beauty face rejuvenare facială în Craiova, pe Strada
              Principatele Unite nr. 5, în județul Dolj. Salonul nu este o
              clinică și nu înlocuiește un consult dermatologic. Este locul în
              care poți discuta un tratament facial în Craiova pornind de la
              fermitate, textură sau aspectul unei urme deja vindecate.
            </p>
            <p>
              Din Centru, Craiovița Nouă, Brazda lui Novac, Rovine, 1 Mai sau
              Valea Roșie, programarea se face în aceeași locație. Nu există
              pagini separate pe cartiere, pentru că serviciul nu se schimbă
              după adresă. Se schimbă după piele. De aceea fermitatea tenului
              se discută la evaluare, în salon, nu printr-o listă de oferte
              identice pentru fiecare zonă a orașului.
            </p>
            <p>
              Dacă locuiești în Dolj și cauți un tratament de rejuvenare
              facială, adu cu tine obiectivul, nu neapărat numele unei
              tehnologii. Spune-ne dacă te deranjează lipsa de fermitate,
              textura, urmele după acnee sau un aspect tern. Îți spunem care
              dintre procedurile disponibile are sens și care nu. Telefonul
              este {businessProfile.telephoneDisplay}. Programul este luni–vineri,
              09:00–20:00, și sâmbătă, 10:00–16:00.
            </p>
            <p>
              Pentru îngrijiri faciale care nu sunt rejuvenare — curățare,
              hidratare, exfoliere — rămâne pagina de{" "}
              <TextLink href="/tratamente-faciale-craiova">
                tratamente faciale în Craiova
              </TextLink>
              . Pentru o tehnologie anume, intră direct pe{" "}
              <TextLink href="/hifu-facial-craiova">HIFU facial</TextLink>,{" "}
              <TextLink href="/microneedling-craiova">microneedling</TextLink> sau{" "}
              <TextLink href="/radiofrecventa-fractionata-craiova">
                radiofrecvența fracționată
              </TextLink>
              . Așa rămân separate intențiile: aici alegi obiectivul, acolo
              citești procedura.
            </p>
          </div>
        </div>
      </SectionShell>

      <LocalSEOSection />

      <ServiceCTA
        title="Programează o evaluare pentru aspectul pielii"
        description="Spune-ne ce te deranjează la ten. Alegem împreună dacă are sens HIFU facial, microneedling sau radiofrecvența fracționată."
        pricingHref="/preturi#faciale"
      />
    </>
  )
}
