import type { ReactNode } from "react"
import Link from "next/link"
import { Check, MapPin, MessageCircle, X } from "lucide-react"
import { businessProfile } from "@/lib/seo/business"
import { cavitatieWhatsappMessage } from "@/lib/content/cavitatie"
import { cn } from "@/lib/utils"

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(cavitatieWhatsappMessage)}`

const linkClass =
  "font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"

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
    <section id={id} className={cn("py-16 sm:py-24", className)}>
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
        "mb-10 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

function CtaPair({
  primaryLabel,
  primaryHref = "/contact",
}: {
  primaryLabel: string
  primaryHref?: string
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={primaryHref}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.05em] text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto"
      >
        {primaryLabel}
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#FFF9F2] px-8 py-3 text-sm font-semibold text-[#0E2B1F] sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" />
        Întreabă pe WhatsApp
      </a>
    </div>
  )
}

const canChoose = [
  "remodelarea aspectului anumitor zone",
  "contur corporal",
  "obiective estetice localizate",
  "integrarea într-un program corporal",
]

const isNot = [
  "metodă de slăbire generală",
  "dietă",
  "înlocuitor pentru sport",
  "tratament pentru obezitate",
  "liposucție",
]

const steps = [
  {
    n: "01",
    title: "Evaluarea obiectivului",
    text: "Spui ce zonă te deranjează și ce rezultat urmărești. Dacă așteptarea este scăderea în greutate, o spunem din start: cavitația nu este serviciul pentru acest scop.",
  },
  {
    n: "02",
    title: "Alegerea zonei",
    text: "Verificăm dacă procedura este potrivită pentru zona respectivă. Zona nu se presupune dintr-o listă generală. Se stabilește în salon.",
  },
  {
    n: "03",
    title: "Procedura",
    text: "Se utilizează aparatul conform protocolului Claire Beauty. În lista de prețuri, cavitația este trecută la 40 de minute.",
  },
  {
    n: "04",
    title: "Recomandările",
    text: "Primești indicațiile aplicabile protocolului discutat la evaluare. Ele țin de zona aleasă și de obiectivul stabilit, nu de un șablon unic.",
  },
]

const router = [
  {
    title: "Volum localizat",
    text: "Cavitația poate fi discutată când obiectivul este aspectul unei zone, nu greutatea corporală. Indicația se confirmă la evaluare.",
    href: "/contact",
    cta: "Programează cavitație",
  },
  {
    title: "Celulită",
    text: "Dacă te deranjează textura de celulită, pagina potrivită este masajul anticelulitic. Cavitația nu este prezentată ca tratament pentru celulită.",
    href: "/masaj-anticelulitic-craiova",
    cta: "Vezi masajul anticelulitic",
  },
  {
    title: "Senzație de picioare grele / drenaj",
    text: "Retenția și senzația de picioare grele țin de drenaj. Presoterapia Starvac este listată separat în prețuri, iar pagina de drenaj explică acest tip de obiectiv.",
    href: "/drenaj-limfatic-craiova",
    cta: "Vezi drenajul limfatic",
  },
  {
    title: "Piele lăsată / fermitate",
    text: "Lipsa de fermitate are o pagină proprie. HIFU corporal și radiofrecvența corporală se discută acolo, separat de cavitație.",
    href: "/piele-lasata-craiova",
    cta: "Vezi pielea lăsată",
  },
  {
    title: "Vergeturi",
    text: "Vergeturile nu se tratează cu aceeași procedură ca un obiectiv de contur localizat. Au o pagină dedicată.",
    href: "/cicatrici-vergeturi-craiova",
    cta: "Cicatrici și vergeturi",
  },
  {
    title: "HIFU body",
    text: "HIFU corporal este poziționat în salon pentru fermitatea și aspectul pielii. Este o tehnologie diferită, aleasă după obiectiv.",
    href: "/hifu-corporal-craiova",
    cta: "Descoperă HIFU corporal",
  },
]

export function CavitatieSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Procedura"
              title="Ce este cavitația corporală?"
              description="O procedură din lista de remodelare a salonului, cu rol estetic și localizat."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Dacă ai căutat{" "}
                <strong className="font-medium text-foreground">cavitație Craiova</strong>,
                această pagină descrie procedura, nu întregul program de{" "}
                <Link href="/remodelare-corporala-craiova" className={linkClass}>
                  remodelare corporală Craiova
                </Link>
                . La Claire Beauty, cavitația corporală este un serviciu
                non-invaziv, trecut în lista de prețuri ca ședință de 40 de
                minute. Se folosește când obiectivul ține de aspectul unei zone
                și de felul în care acea zonă se încadrează într-un protocol
                stabilit individual.
              </p>
              <p>
                Un{" "}
                <strong className="font-medium text-foreground">tratament cavitație</strong>{" "}
                se alege după o discuție despre zonă și așteptare. Nu publicăm
                marca aparatului, frecvența sau puterea: aceste date nu apar în
                materialele salonului, iar o specificație inventată nu ajută
                la o programare corectă. Ce poți reține este rolul procedurii:
                lucrează în cadrul unui protocol corporal, pe zona convenită,
                pentru un obiectiv estetic localizat.
              </p>
              <p>
                Cavitația stă lângă alte proceduri din aceeași listă — Endolase,
                Sonobeat, Celludrain, radiofrecvență bipolară — dar nu le
                înlocuiește. Pagina de remodelare rămâne reperul general.
                Aici rămâne tehnologia, prețul și felul în care se decide dacă
                ți se potrivește.
              </p>
              <p>
                O programare pentru cavitație în Craiova începe cu obiectivul,
                nu cu aparatul. Spui ce zonă te preocupă și ce ai vrea să se
                schimbe la aspectul ei. Dacă răspunsul este „să slăbesc”,
                procedura nu se potrivește. Dacă răspunsul este despre o zonă
                anume, se verifică dacă ședința de 40 de minute are sens pentru
                situația ta și dacă nu cumva problema reală este fermitatea,
                celulita, retenția sau vergeturile. În acel caz te orientăm
                către pagina serviciului potrivit, ca să nu cumperi un nume de
                tehnologie în locul unei discuții corecte.
              </p>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/25 bg-[#0E2B1F] p-7 text-[#FFF9F2] shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Ce reții înainte de programare
            </p>
            <p className="mb-4 font-serif text-2xl font-semibold leading-snug">
              Procedură de 40 de minute, 150 lei pe ședință.
            </p>
            <p className="leading-relaxed text-[#FFF9F2]/82">
              Durata și prețul vin din lista de prețuri a salonului. Zona,
              numărul de ședințe și potrivirea procedurii se stabilesc la
              evaluare. Cavitația nu este un program de slăbire.
            </p>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Limite clare"
          title="Ce poate urmări cavitația și ce NU trebuie să aștepți?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">
              Cavitația poate fi aleasă pentru
            </h3>
            <ul className="space-y-3">
              {canChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                  <span className="leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#0E2B1F]/10 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">
              Cavitația nu este
            </h3>
            <ul className="space-y-3">
              {isNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]/70" aria-hidden />
                  <span className="leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-[#D4AF37]/40 bg-[#0E2B1F] px-6 py-8 text-center shadow-premium">
          <p className="font-serif text-3xl font-semibold tracking-[0.08em] text-[#D4AF37] sm:text-4xl">
            Cavitație ≠ slăbire
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#FFF9F2]/85 sm:text-base">
            Dacă vii pentru kilograme, această pagină nu este răspunsul. Dacă
            vii pentru aspectul unei zone, putem discuta procedura.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          align="left"
          eyebrow="Obiectivul corect"
          title="Grăsime localizată sau obiectiv de slăbire?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Cavitația
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Procedură estetică localizată
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              O persoană poate fi interesată de aspectul unei anumite zone fără
              ca obiectivul principal să fie scăderea în greutate. În acest caz,
              cavitația se discută ca procedură estetică, pe zona convenită, în
              cadrul unui protocol individual.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Slăbirea
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Modificarea greutății corporale
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Slăbirea înseamnă modificarea greutății corporale generale. Ține
              de alimentație, mișcare și, când este cazul, de sfat medical.
              Cavitația nu preia acest rol și nu se prezintă ca soluție pentru
              acest obiectiv.
            </p>
          </article>
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Cele două intenții se pot întâlni în aceeași persoană, dar nu sunt
          același lucru. Dacă obiectivul principal este pierderea în greutate,
          cavitația nu trebuie prezentată ca soluție pentru acest obiectiv.
          La evaluare separăm ce ține de aspectul unei zone de ce ține de
          cântar.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Zona"
          title="Pentru ce zone se poate folosi cavitația?"
          description="Zona se confirmă în salon. Nu publicăm o hartă universală a corpului."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Zona se stabilește la evaluare
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Protocolul aparatului și lista de zone permise nu sunt documentate
              în materialele publice ale salonului. De aceea nu scriem că
              procedura se poate face pe orice zonă și nu afișăm abdomen,
              coapse, șolduri sau flancuri ca zone deja confirmate. La
              programare spui ce zonă te interesează, iar în salon se verifică
              dacă procedura este potrivită.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Ce se verifică înainte
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                <span>Obiectivul este localizat, nu o scădere generală în greutate.</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                <span>Procedura este potrivită pentru zona discutată.</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                <span>Nemulțumirea nu este, de fapt, fermitate, celulită sau vergeturi.</span>
              </li>
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Aceeași zonă, alt obiectiv"
          title="Ce te deranjează, de fapt?"
          description="Volumul localizat, lipsa de fermitate și vergeturile nu au același tratament."
        />
        <div className="grid gap-4">
          {[
            {
              label: "Volum localizat",
              text: "Cavitația poate fi o opțiune dacă evaluarea confirmă că obiectivul este aspectul unei zone. Nu este automat procedura pentru orice nemulțumire corporală.",
              href: "/contact",
              cta: "Evaluare pentru cavitație",
            },
            {
              label: "Lipsă de fermitate",
              text: "Pielea lăsată este un obiectiv de fermitate. Se discută pe pagina dedicată, cu HIFU corporal și radiofrecvență corporală, nu ca și cum ar fi același lucru cu cavitația.",
              href: "/piele-lasata-craiova",
              cta: "Piele lăsată",
            },
            {
              label: "Vergeturi",
              text: "Vergeturile au o pagină separată. Nu le tratăm aici ca pe un obiectiv de contur localizat.",
              href: "/cicatrici-vergeturi-craiova",
              cta: "Cicatrici și vergeturi",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="grid gap-4 rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8"
            >
              <div className="min-w-0">
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
              <Link
                href={item.href}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#0E2B1F]/20 px-5 py-3 text-center text-sm font-semibold text-[#0E2B1F] hover:border-[#D4AF37] sm:w-auto"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Compară obiectivul"
          title="Cavitație sau HIFU corporal?"
          description="Alegerea nu se face după numele tehnologiei, ci după obiectivul pe care îl ai."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Cavitație
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Procedură pentru un obiectiv corporal localizat
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Cavitația este ședința de 40 de minute din lista de remodelare.
              Se discută când interesează aspectul unei zone, în protocolul
              stabilit la evaluare. Nu o prezentăm ca procedură de fermitate
              și nu o prezentăm ca metodă de slăbire.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              HIFU corporal
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Fermitate și aspectul pielii
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Pagina de{" "}
              <Link href="/hifu-corporal-craiova" className={linkClass}>
                HIFU corporal
              </Link>{" "}
              îl poziționează pentru fermitatea și aspectul pielii. Prețul
              publicat acolo este 800–1.100 lei, în funcție de zonă. Niciuna
              dintre proceduri nu este universal mai bună.
            </p>
            <Link
              href="/hifu-corporal-craiova"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.05em] text-[#D4AF37] sm:w-auto"
            >
              Descoperă HIFU corporal
            </Link>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          align="left"
          eyebrow="Altă tehnologie"
          title="Cavitație sau radiofrecvență corporală?"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Claire Beauty oferă{" "}
            <Link href="/radiofrecventa-corporala-craiova" className={linkClass}>
              radiofrecvență corporală
            </Link>
            . În lista de prețuri, varianta bipolară costă 150 lei pe ședință,
            iar varianta monopolară pornește de la 350 lei pe ședință, pe zonă.
            Sunt proceduri distincte de cavitație.
          </p>
          <p>
            Pe site, radiofrecvența corporală este legată de fermitate, de
            aspectul pielii și, în protocoalele de remodelare, de calitatea
            țesutului. Cavitația rămâne ședința de 40 de minute pentru un
            obiectiv estetic localizat. Nu reducem diferența la o formulă de
            tipul „una scoate, alta strânge”. La evaluare se alege procedura
            după ce se înțelege problema: aspect localizat, fermitate, celulită
            sau altceva.
          </p>
          <p>
            Dacă pielea lăsată este motivul principal, pagina de{" "}
            <Link href="/piele-lasata-craiova" className={linkClass}>
              fermitate
            </Link>{" "}
            compară opțiunile din salon. Dacă vrei imaginea de ansamblu,
            pornește de la{" "}
            <Link href="/remodelare-corporala-craiova" className={linkClass}>
              remodelare corporală
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          align="left"
          eyebrow="Altă căutare"
          title="Ai căutat criolipoliză în Craiova?"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Dacă ai ajuns aici căutând criolipoliză, trebuie să știi că
            tehnologiile de remodelare corporală funcționează diferit. La
            Claire Beauty nu este listată criolipoliza. Sunt disponibile alte
            proceduri corporale, iar alegerea se face în funcție de obiectiv.
          </p>
          <p>
            Pentru un obiectiv estetic localizat se poate discuta cavitația.
            Pentru fermitate,{" "}
            <Link href="/hifu-corporal-craiova" className={linkClass}>
              HIFU corporal
            </Link>{" "}
            și{" "}
            <Link href="/radiofrecventa-corporala-craiova" className={linkClass}>
              radiofrecvența corporală
            </Link>
            . Pentru aspectul celulitei,{" "}
            <Link href="/masaj-anticelulitic-craiova" className={linkClass}>
              masajul anticelulitic
            </Link>
            . Pentru retenție,{" "}
            <Link href="/drenaj-limfatic-craiova" className={linkClass}>
              drenajul limfatic
            </Link>
            . Nu prezentăm cavitația ca același rezultat sau ca înlocuitor
            identic al criolipolizei.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          align="left"
          eyebrow="Celulită"
          title="Cavitația este tratament pentru celulită?"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Nu o prezentăm așa. Aspectul celulitei și aspectul unei zone
            localizate pot fi amândouă motive de programare, dar nu se rezolvă
            automat cu aceeași procedură. Cavitația nu promite dispariția
            celulitei.
          </p>
          <p>
            Dacă obiectivul principal este aspectul celulitei, reperul din
            salon este{" "}
            <Link href="/masaj-anticelulitic-craiova" className={linkClass}>
              masajul anticelulitic
            </Link>
            . Radiofrecvența corporală apare în protocoalele de remodelare și
            în discuția despre fermitate și textură; detaliile stau pe pagina
            ei. La evaluare se separă ce te deranjează, ca să nu alegi
            cavitația doar pentru că ai auzit numele.
          </p>
        </div>
        <CtaPair primaryLabel="Vezi masajul anticelulitic" primaryHref="/masaj-anticelulitic-craiova" />
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          align="left"
          eyebrow="Servicii separate"
          title="Cavitația se poate combina cu presoterapia?"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Nu există pe site un protocol public care să combine cavitația cu
            presoterapia într-un pachet. Presoterapia Starvac este listată
            separat, la 80 lei pe ședință. Pagina care acoperă drenajul și
            compresia este{" "}
            <Link href="/drenaj-limfatic-craiova" className={linkClass}>
              drenaj limfatic în Craiova
            </Link>
            . Nu există o rută separată de presoterapie.
          </p>
          <p>
            Cele două servicii rămân distincte. Cavitația ține de un obiectiv
            estetic localizat. Drenajul și presoterapia țin de retenție,
            senzația de picioare grele și compresie. Dacă ambele par relevante,
            se discută la evaluare ca opțiuni separate, nu ca pachet deja
            construit.
          </p>
        </div>
        <CtaPair primaryLabel="Vezi drenajul limfatic" primaryHref="/drenaj-limfatic-craiova" />
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="În salon"
          title="Cum decurge o ședință de cavitație?"
          description="Patru pași. Durata afișată în lista de prețuri este de 40 de minute."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8"
            >
              <p className="mb-3 font-serif text-sm font-semibold tracking-[0.18em] text-[#D4AF37]">
                {step.n}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="În timpul procedurii" title="Cum se simte procedura?" />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Senzația din timpul cavitației nu este documentată în materialele
              publice ale salonului, așa că nu o descriem dinainte ca fiind
              nedureroasă sau ca având un efect anume. La evaluare se explică
              ce se poate simți pe zona discutată, înainte de a începe ședința
              de 40 de minute.
            </p>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Protocol" title="De câte ședințe de cavitație este nevoie?" />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Numărul de ședințe se stabilește în funcție de zona tratată,
              obiectiv și protocolul recomandat. Nu publicăm 6, 8 sau 10
              ședințe ca regulă pentru toate persoanele. Abonamentul de 10
              ședințe din lista de prețuri este o opțiune de tarif pentru
              cavitație și alte proceduri din aceeași categorie, nu un plan
              impus.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading align="left" eyebrow="Așteptări" title="Când se văd rezultatele cavitației?" />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Rezultatele și răspunsul la procedură diferă de la o persoană la
            alta. Nu promitem un efect după prima ședință, un număr de
            centimetri sau un termen fix. La evaluare se aliniază așteptarea
            cu ceea ce poate urmări procedura: aspectul unei zone, în cadrul
            protocolului ales.
          </p>
          <p>
            Continuitatea ține de obiectiv și de ce se stabilește în salon.
            Pagina de{" "}
            <Link href="/remodelare-corporala-craiova" className={linkClass}>
              remodelare corporală
            </Link>{" "}
            rămâne locul în care vezi cum se leagă mai multe servicii corporale,
            fără ca această pagină să preia rolul de hub.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          align="left"
          eyebrow="Potrivire"
          title="Când cavitația nu este potrivită?"
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Contraindicațiile aparatului nu sunt publicate în materialele
            salonului. Nu afișăm o listă medicală completă și nu copiem
            contraindicațiile altor proceduri, cum este radiofrecvența.
            Potrivirea se stabilește la evaluare, pentru zona și situația ta.
          </p>
          <p>
            Procedura nu este potrivită ca metodă de slăbire, ca tratament
            pentru obezitate sau ca înlocuitor al liposucției. Dacă obiectivul
            este fermitatea, celulita sau vergeturile, există pagini separate.
          </p>
        </div>
        <div className="mt-8 max-w-3xl rounded-[1.75rem] border border-[#D4AF37]/30 bg-card p-6 shadow-premium sm:p-8">
          <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
            Spune-ne înainte de programare dacă
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden />
              <span>ești însărcinată</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden />
              <span>ai o afecțiune medicală pe care o consideri relevantă pentru o procedură corporală</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden />
              <span>ai o problemă a pielii în zona pe care vrei să o discutăm</span>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Acestea sunt informații pentru evaluare, nu o listă de
            contraindicații confirmate ale aparatului. Lista medicală a
            procedurii se publică după confirmarea din salon.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading align="left" eyebrow="După sarcină" title="Cavitație după sarcină?" />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Nu promitem că procedura este potrivită imediat după naștere și nu
            publicăm un termen, pentru că nu există un protocol confirmat pe
            site. Nu afirmăm că este permisă în alăptare. Eligibilitatea se
            discută la evaluare, după ce se înțelege ce te deranjează.
          </p>
          <p>
            Dacă principala problemă sunt vergeturile, vezi{" "}
            <Link href="/cicatrici-vergeturi-craiova" className={linkClass}>
              cicatrici și vergeturi
            </Link>
            . Dacă este pielea lăsată, vezi{" "}
            <Link href="/piele-lasata-craiova" className={linkClass}>
              piele lăsată
            </Link>
            . Dacă este cicatricea de cezariană, vezi{" "}
            <Link href="/cicatrice-cezariana-craiova" className={linkClass}>
              cicatrice după cezariană
            </Link>
            . Dacă este un volum localizat, evaluarea stabilește care procedură
            corporală din salon are sens.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="pret" className="scroll-mt-24 bg-secondary/40">
        <SectionHeading
          eyebrow="Tarif"
          title="Cât costă cavitația în Craiova?"
          description="Prețul din lista Claire Beauty: 150 lei pe ședință, pentru cavitație 40 de minute."
        />
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#D4AF37]/35 bg-card p-8 text-center shadow-premium sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Cavitație corporală
          </p>
          <p className="mt-4 font-serif text-5xl font-semibold text-[#0E2B1F]">150 lei</p>
          <p className="mt-2 text-lg text-foreground/80">pe ședință · 40 de minute</p>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Unitatea din lista de prețuri este ședința, nu zona. Abonamentul de
            10 ședințe, la 1.200 lei, acoperă cavitația împreună cu Endolase,
            Sonobeat, radiofrecvența bipolară și Celludrain. Este o opțiune de
            tarif, nu un pachet exclusiv de cavitație.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#D4AF37] sm:w-auto"
            >
              Programează cavitație
            </Link>
          </div>
          <p className="mt-4">
            <Link href="/preturi#remodelare" className={linkClass}>
              Vezi lista de prețuri pentru remodelare
            </Link>
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Router"
          title="Ce tratament corporal ți se potrivește?"
          description="Alege problema, nu numele unei tehnologii auzite online."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {router.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="flex-1 leading-relaxed text-muted-foreground">{item.text}</p>
              <Link
                href={item.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#0E2B1F]/15 px-4 py-3 text-center text-sm font-semibold text-[#0E2B1F] hover:border-[#D4AF37]"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <SectionHeading align="left" eyebrow="Local" title="Cavitație corporală în Craiova" />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Cavitația corporală în Craiova se face la Claire Beauty, pe
                Strada Principatele Unite nr. 5, în municipiul Craiova, județul
                Dolj. Salonul este reperul pentru persoanele care caută o
                procedură corporală localizată și vor să înțeleagă, înainte de
                programare, ce urmărește ședința și cât costă.
              </p>
              <p>
                Prețul publicat pentru cavitație este 150 lei pe ședință, cu
                durata de 40 de minute din lista de tarife. Căutarea de
                cavitație preț în Craiova ajunge aici, la acest tarif, nu la o
                estimare pe zonă. Dacă vrei să compari și celelalte proceduri
                din aceeași categorie, lista completă stă pe pagina de prețuri,
                la secțiunea de remodelare.
              </p>
              <p>
                Remodelarea corporală în Craiova rămâne pagina generală: acolo
                vezi cum se leagă mai multe servicii, de la radiofrecvență și
                HIFU corporal până la drenaj și masaj anticelulitic. Această
                pagină rămâne la cavitație. Separarea contează, pentru că o
                persoană poate căuta o procedură punctuală, iar alta un program
                corporal mai larg. Ambele intenții au un loc pe site, ca să nu
                se amestece.
              </p>
              <p>
                Înainte de a veni, este util să știi ce te deranjează: aspectul
                unei zone, textura celulitei, senzația de picioare grele,
                pielea mai puțin fermă sau vergeturile. La Claire Beauty,
                evaluarea pornește de la această distincție. Telefonul salonului
                este {businessProfile.telephoneDisplay}. Poți scrie și pe
                WhatsApp, sau poți trimite o cerere din pagina de contact.
                Programarea pentru cavitație în Craiova înseamnă o discuție
                despre zonă și obiectiv, nu o promisiune de kilograme.
              </p>
            </div>
          </div>
          <aside className="h-fit rounded-[2rem] border border-[#D4AF37]/20 bg-card p-7 shadow-premium">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-2 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {businessProfile.address.streetAddress}
              <br />
              {businessProfile.address.locality}, {businessProfile.address.region}
            </p>
            <a
              href={`tel:${businessProfile.telephone}`}
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              {businessProfile.telephoneDisplay}
            </a>
            <a
              href={businessProfile.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-11 items-center text-sm font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
            >
              Deschide locația în Google Maps
            </a>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading eyebrow="Salonul" title="Cavitație la Claire Beauty Craiova" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Evaluarea obiectivului",
              text: "Înainte de procedură se clarifică zona și ce rezultat urmărești, inclusiv dacă așteptarea ține de aspect sau de greutate.",
            },
            {
              title: "Protocol personalizat",
              text: "Ședința se construiește pentru situația ta. Nu afișăm un număr unic de vizite valabil pentru toate corpurile.",
            },
            {
              title: "Mai multe tehnologii corporale",
              text: "În salon există și HIFU corporal, radiofrecvență, drenaj, masaj anticelulitic și alte proceduri de remodelare.",
            },
            {
              title: "Alegere după problemă",
              text: "Poți fi orientată către altă pagină dacă nemulțumirea este fermitatea, celulita, retenția sau vergeturile.",
            },
            {
              title: "Locație în Craiova",
              text: "Strada Principatele Unite nr. 5, Craiova, Dolj. Programarea se face telefonic, pe WhatsApp sau din pagina de contact.",
            },
            {
              title: "Tarif public",
              text: "150 lei pe ședință, pentru cavitație de 40 de minute. Abonamentul de 10 ședințe este opțiunea de 1.200 lei din aceeași listă.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm">
            Remodelare corporală • Craiova
          </p>
          <h2 className="mb-5 font-serif text-3xl font-semibold sm:text-4xl">
            Nu știi dacă ai nevoie de cavitație?
          </h2>
          <p className="text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Spune-ne ce zonă te deranjează și ce rezultat urmărești. Te ajutăm
            să identifici procedura corporală potrivită dintre opțiunile
            disponibile la Claire Beauty.
          </p>
          <p className="mt-4 text-sm text-[#D4AF37]">Cavitație: 150 lei / ședință · 40 de minute</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-[#0E2B1F] sm:w-auto"
            >
              Programează o evaluare
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-[#FFF9F2] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
