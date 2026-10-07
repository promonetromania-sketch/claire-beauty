import type { ReactNode } from "react"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { cicatriciCheloideWhatsappHref } from "@/lib/content/cicatrici-cheloide"
import { claireImages } from "@/lib/images/claire-beauty"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = cicatriciCheloideWhatsappHref(businessProfile.whatsappUrl)

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
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "default" | "light"
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mb-5 font-serif text-3xl font-semibold sm:text-4xl",
          tone === "light" ? "text-[#FFF9F2]" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-lg leading-relaxed",
            tone === "light" ? "text-[#FFF9F2]/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
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
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-center text-sm font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto"
      >
        {primaryLabel}
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#FFF9F2] px-8 py-3 text-sm font-semibold text-[#0E2B1F] sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        Întreabă pe WhatsApp
      </a>
    </div>
  )
}

const medicalSigns = [
  "cicatricea continuă să crească",
  "se extinde dincolo de zona inițială",
  "este dureroasă",
  "provoacă mâncărime importantă sau persistentă",
  "prezintă modificări care te îngrijorează",
  "zona nu este complet vindecată",
  "există inflamație sau secreții",
  "nu știi dacă este vorba despre un cheloid",
] as const

const steps = [
  {
    n: "01",
    title: "Ne spui istoricul cicatricii",
    text: "Cum a apărut și de când există? O descriere clară ajută mai mult decât o etichetă găsită online.",
  },
  {
    n: "02",
    title: "Discutăm ce te deranjează",
    text: "Relieful, textura, vizibilitatea sau un alt aspect. Obiectivul se formulează concret, nu generic.",
  },
  {
    n: "03",
    title: "Stabilim dacă este cazul unei proceduri estetice",
    text: "Dacă există dubii medicale, recomandăm evaluarea corespunzătoare. Salonul nu înlocuiește medicul.",
  },
  {
    n: "04",
    title: "Doar dacă este potrivită, discutăm procedura",
    text: "Fără presiune comercială. Dacă procedura nu are sens pentru zona ta, o spunem.",
  },
] as const

const refusals = [
  "Nu alegem automat radiofrecvența.",
  "Nu alegem automat microneedling.",
  "Nu presupunem că este cheloid.",
  "Nu promitem un rezultat înainte de evaluare.",
] as const

export function CicatriciCheloideSections() {
  return (
    <>
      <SectionShell className="bg-background" id="ce-este">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pe înțelesul tău"
              title="Ce este o cicatrice cheloidă?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                În timpul vindecării, unele cicatrici pot deveni mai reliefate
                decât pielea din jur. Relieful, culoarea și felul în care se
                simte zona pot continua să te preocupe mult după ce leziunea
                inițială s-a închis.
              </p>
              <p>
                Termenul „cheloid” descrie un anumit tip de cicatrice. Nu este
                un sinonim pentru orice urmă îngroșată. Diagnosticul corect nu
                se face după o fotografie sau după o descriere citită online.
                Claire Beauty este un salon de înfrumusețare: explicăm limitele
                unei proceduri estetice, nu punem un diagnostic medical.
              </p>
              <p>
                Dacă ai ajuns aici pentru că cicatricea este îngroșată și nu
                știi cum să o numești, este în regulă să rămâi la descriere:
                relief, vechime, dacă se modifică, ce te deranjează. Numele
                precis poate aștepta o evaluare. Abia apoi se vede dacă există
                o opțiune estetică potrivită.
              </p>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/35 bg-white p-8 shadow-premium">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Ai o cicatrice ridicată?
            </p>
            <p className="font-serif text-2xl font-semibold leading-snug text-[#0E2B1F] sm:text-3xl">
              Aceasta nu înseamnă automat că este un cheloid.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Două cicatrici pot arăta asemănător și pot avea nevoie de
              abordări diferite. Primul pas este să înțelegem situația, nu să
              alegem o procedură din titlul unei căutări.
            </p>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="diferenta">
        <SectionHeading
          eyebrow="Fără autodiagnostic"
          title="Cicatrice cheloidă sau cicatrice hipertrofică?"
          description="O distincție utilă, spusă foarte general. Nu este un test pe care să îl faci acasă."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-white p-7 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Orientare generală
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Cicatrice hipertrofică
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Poate fi reliefată și, în linii mari, rămâne asociată zonei
              inițiale a leziunii. Faptul că o cicatrice este ridicată nu spune,
              de unul singur, ce tip este și ce se poate face pentru aspect.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-white p-7 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Orientare generală
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Cicatrice cheloidă
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Poate avea un comportament diferit și se poate extinde dincolo de
              limitele inițiale ale leziunii. Această descriere nu înlocuiește
              o evaluare și nu se folosește ca regulă de autodiagnostic.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-relaxed text-[#0E2B1F]">
          Aspectul unei cicatrici trebuie evaluat corespunzător înainte de
          alegerea tratamentului.
        </p>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F]" id="evaluare-medicala">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Prioritate"
            title="Când recomandăm mai întâi evaluarea medicală?"
            description="Salonul nu gestionează complicații medicale. Dacă recunoști una dintre situațiile de mai jos, medicul este primul pas."
          />
          <div className="rounded-[2rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-6 shadow-premium-lg sm:p-8">
            <h3 className="mb-5 font-serif text-xl font-semibold leading-snug text-[#0E2B1F] sm:text-2xl">
              Înainte de o procedură estetică, solicită evaluare medicală dacă:
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {medicalSigns.map((item) => (
                <li
                  key={item}
                  className="flex min-h-11 items-center gap-3 rounded-2xl border border-[#D4AF37]/25 bg-white px-4 py-3 text-sm leading-snug text-[#0E2B1F] sm:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[#0E2B1F]/75">
              Lista nu este un diagnostic și nu acoperă toate situațiile. Dacă
              ceva te îngrijorează, chiar dacă nu se regăsește aici, discută cu
              medicul potrivit înainte să programezi o procedură estetică.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cezariana">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După naștere"
            title="Cicatrice reliefată după cezariană"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Unele persoane observă, după vindecarea unei cezariene, că
              cicatricea este mai reliefată sau mai vizibilă decât se așteptau.
              O cicatrice cheloidă după cezariană nu se stabilește doar pentru
              că urma este mai groasă. Relieful poate avea mai multe explicații,
              iar eticheta nu se pune dintr-o căutare.
            </p>
            <p>
              Dacă te interesează în general îmbunătățirea aspectului unei
              cicatrici vindecate după cezariană,{" "}
              <Link href="/cicatrice-cezariana-craiova" className={linkClass}>
                pagina dedicată cicatricei după cezariană
              </Link>{" "}
              explică abordarea estetică a salonului: numai după vindecarea
              completă, cu obiectivul unui aspect mai discret, fără promisiunea
              că urma dispare.
            </p>
            <p>
              Dacă cicatricea continuă să crească, se extinde, doare, mănâncă
              persistent sau zona nu este închisă, evaluarea medicală are
              prioritate. O procedură estetică nu este pasul potrivit în aceste
              situații.
            </p>
          </div>
          <CtaPair
            primaryLabel="Vezi cicatrice după cezariană"
            primaryHref="/cicatrice-cezariana-craiova"
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="operatie">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După o intervenție"
            title="Cicatrice îngroșată după operație"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Aspectul unei cicatrici postoperatorii poate varia. Unele urme
              rămân subțiri. Altele sunt mai late, mai închise la culoare sau
              mai reliefate. Variația nu înseamnă, de la sine, că este vorba
              despre o cicatrice cheloidă.
            </p>
            <p>
              Dacă cicatricea este complet vindecată, stabilă și fără semne de
              complicație, se poate discuta obiectivul estetic: cum se vede
              urma și dacă o procedură din salon poate fi luată în calcul.
            </p>
            <p>
              Dacă zona încă se modifică, dacă există durere, inflamație sau o
              restricție dată de medic, evaluarea medicală are prioritate.
              Recomandarea medicului rămâne deasupra oricărei programări.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="ce-putem-face">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Limitele salonului"
            title="Ce putem face la Claire Beauty?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              La Claire Beauty evaluăm obiectivul estetic și putem discuta
              procedurile disponibile pentru îmbunătățirea aspectului anumitor
              cicatrici vindecate, atunci când acestea sunt potrivite pentru
              tratamentele noastre.
            </p>
            <p>
              Nu promitem că orice cicatrice cheloidă intră într-un protocol de
              salon. Dacă situația depășește sfera procedurilor estetice
              oferite, îți vom recomanda să discuți mai întâi cu medicul
              potrivit. Această recomandare face parte din felul în care
              lucrăm: preferăm o discuție onestă în locul unei programări care
              nu ți se potrivește.
            </p>
            <p>
              Pentru cicatricile vindecate la care obiectivul este aspectul —
              textură, relief discret, vizibilitate — continuarea firească este
              pagina generală de{" "}
              <Link href="/cicatrici-vergeturi-craiova" className={linkClass}>
                cicatrici și vergeturi
              </Link>
              . Vergeturile rămân acolo. Cicatricile post-acnee și cicatricea
              după cezariană au pagini proprii. Pagina aceasta rămâne pentru
              cicatricea reliefată și pentru întrebarea legată de un posibil
              cheloid.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="radiofrecventa">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-w-0 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.radiofrecventaFacial}
              alt="Procedură cu radiofrecvență în salonul Claire Beauty Craiova"
              title="Radiofrecvență fracționată pentru aspectul unor cicatrici"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="Tehnologie"
              title="Radiofrecvența fracționată și cicatricile"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Radiofrecvența fracționată este una dintre tehnologiile
                utilizate la Claire Beauty în anumite protocoale pentru
                îmbunătățirea aspectului cicatricilor. Indicația depinde însă
                de tipul și caracteristicile cicatricii.
              </p>
              <p>
                Nu este indicată automat pentru un cheloid activ și nu se alege
                doar pentru că cicatricea este reliefată. Zona trebuie să fie
                vindecată, iar procedura are sens doar când obiectivul este
                estetic și evaluarea o susține. Detaliile tehnologiei sunt pe
                pagina dedicată, separat de această discuție.
              </p>
            </div>
            <CtaPair
              primaryLabel="Descoperă radiofrecvența fracționată"
              primaryHref="/radiofrecventa-fractionata-craiova"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="poate-disparea">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Așteptări"
            title="Poate dispărea complet o cicatrice cheloidă?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Nu promitem dispariția unei cicatrici. Obiectivul și opțiunile
              depind de situație. Pentru unele persoane, discuția realistă este
              despre un aspect mai integrat în pielea din jur. Pentru altele,
              anumite tipuri de cicatrici pot necesita management medical, nu o
              procedură estetică.
            </p>
              <p>
                O fotografie de pe internet nu spune ce se poate urmări în cazul
                tău. La evaluare vorbim despre ce este rezonabil și despre ce
                rămâne în afara serviciilor salonului. Dacă managementul ține
                de medic, programarea unei proceduri estetice poate aștepta
                fără să pierzi din vedere obiectivul de aspect, atunci când
                zona este pregătită.
              </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cicatrice-veche">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Timp"
            title="Dar dacă cicatricea este veche?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Vechimea este doar unul dintre factorii relevanți. Contează și
              aspectul, stabilitatea, relieful, istoricul, localizarea și
              obiectivul tău.
            </p>
            <p>
              O cicatrice veche nu este automat mai ușor de abordat și nu este
              automat mai greu. Faptul că au trecut luni sau ani nu înlocuiește
              întrebarea dacă zona este stabilă și dacă o procedură estetică
              are sens. Dacă cicatricea încă se schimbă, timpul scurs nu este
              un argument suficient ca să începi o procedură.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="zone">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Pe scurt"
            title="În ce zone pot apărea cicatrici reliefate?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Cicatrici reliefate pot apărea după intervenții chirurgicale,
              după traumatisme sau după anumite leziuni ale pielii. Locul nu
              stabilește tipul cicatricii și nu decide procedura.
            </p>
            <p>
              Nu transformăm această pagină într-un catalog de diagnostice.
              Spune-ne zona și istoricul, iar dacă situația cere un medic, o
              spunem înainte de orice discuție despre aspect.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="nu-dupa-google">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Discernământ"
            title="De ce nu alegem tratamentul doar după o căutare pe Google?"
            description="Două cicatrici care par asemănătoare într-o fotografie pot necesita abordări diferite."
          />
          <ul className="mx-auto grid max-w-xl gap-3 text-left">
            {refusals.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[#D4AF37]/30 bg-white px-5 py-4 font-medium text-[#0E2B1F]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto w-full max-w-md">
            <CtaPair primaryLabel="Discută cu noi despre cicatrice" />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="daca-nu-este-cheloida">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/25 bg-white px-6 py-10 shadow-premium sm:px-10">
          <SectionHeading
            align="left"
            eyebrow="Când obiectivul este aspectul"
            title="Dacă cicatricea nu este cheloidă?"
          />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dacă principala problemă este aspectul unei cicatrici vindecate și
            nu există caracteristici care să necesite management medical, vezi
            opțiunile Claire Beauty pentru cicatrici. Hub-ul rămâne pagina
            generală. Vergeturile, cicatricile post-acnee și cicatricea după
            cezariană au pagini proprii, ca intențiile să nu se amestece.
          </p>
          <CtaPair
            primaryLabel="Tratamente pentru cicatrici"
            primaryHref="/cicatrici-vergeturi-craiova"
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="alte-intentii">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-white p-7 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Altă intenție
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Cicatrici după acnee?
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Urmele rămase după ce acneea s-a calmat sunt o discuție diferită
              de o cicatrice reliefată suspectată a fi cheloidă. Nu este un
              serviciu pentru coșuri active.
            </p>
            <Link
              href="/cicatrici-acnee-craiova"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-6 py-3 text-center text-sm font-semibold text-[#D4AF37] sm:w-auto"
            >
              Vezi cicatrici post-acnee
            </Link>
          </article>
          <article className="flex flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-white p-7 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              După cezariană
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Cicatrice după cezariană?
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Dacă urmărești aspectul unei cicatrici vindecate după cezariană,
              fără semne care cer medic, continuă pe pagina dedicată. Acolo
              este explicată abordarea estetică.
            </p>
            <Link
              href="/cicatrice-cezariana-craiova"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#FFF9F2] px-6 py-3 text-center text-sm font-semibold text-[#0E2B1F] sm:w-auto"
            >
              Vezi opțiunile pentru cicatricea după cezariană
            </Link>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="primul-pas">
        <SectionHeading
          eyebrow="Fără grabă"
          title="Care este primul pas?"
          description="Patru momente, în ordine. Procedura apare abia la final, și numai dacă are sens."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.n}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
            >
              <p className="mb-4 font-serif text-3xl font-semibold text-[#D4AF37]">{item.n}</p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/30 bg-white/80 px-6 py-12 text-center shadow-premium-lg sm:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            După evaluare
          </p>
          <h2 className="mb-4 font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-4xl">
            Cât costă tratamentul unei cicatrici în Craiova?
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Prețul depinde de procedura care poate fi recomandată după
            evaluare. Nu există un tarif de salon pentru „cicatrice cheloidă”.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
            Radiofrecvență fracționată
          </p>
          <p className="font-serif text-5xl font-semibold tracking-tight text-[#0E2B1F] sm:text-6xl">
            de la 1.000 lei
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
            / ședință / zonă
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tariful procedurii nu înseamnă că radiofrecvența este indicată
            automat pentru orice cicatrice reliefată sau cheloidă. Formularea
            „de la” este cea din lista salonului: prețul poate varia în funcție
            de zona tratată.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-base font-semibold text-[#D4AF37] sm:w-auto"
            >
              Discută cu noi despre cicatrice
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white px-8 py-3 text-base font-semibold text-[#0E2B1F] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Întreabă pe WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Lista completă este pe pagina de{" "}
            <Link href="/preturi#remodelare" className={linkClass}>
              prețuri
            </Link>
            . Tehnologia este explicată la{" "}
            <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
              radiofrecvență fracționată
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="În oraș"
              title="Evaluare pentru cicatrici reliefate în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este un salon de înfrumusețare pe Strada
                Principatele Unite nr. 5, în Craiova, județul Dolj. Persoanele
                care caută o cicatrice cheloidă în Craiova ajung adesea cu o
                cicatrice îngroșată sau reliefată și vor să înțeleagă dacă o
                procedură estetică are sens. La noi, primul pas este această
                discuție, nu un protocol ales din titlul căutării.
              </p>
              <p>
                O cicatrice reliefată poate apărea după o operație, după o
                cezariană sau după o altă leziune a pielii. Nu orice urmă
                ridicată este o cicatrice cheloidă. De aceea nu promitem un
                tratament pentru cicatrice cheloidă înainte de a înțelege
                situația. Dacă aspectul depășește ceea ce putem discuta ca
                procedură estetică, o spunem și recomandăm evaluarea unui medic
                dermatolog sau chirurg.
              </p>
              <p>
                Pentru cicatricile vindecate și stabile, la care obiectivul
                este aspectul, putem vorbi despre procedurile din salon,
                inclusiv radiofrecvența fracționată, numai când indicația este
                potrivită. Pagina de cicatrici și vergeturi rămâne hub-ul
                general. Cicatricile post-acnee și cicatricea după cezariană au
                pagini proprii. Pagina aceasta este pentru cicatricea îngroșată,
                reliefată sau pentru întrebarea legată de un posibil cheloid.
              </p>
              <p>
                Poți veni din Craiova sau din alte localități din Dolj.
                Programul salonului este luni–vineri, 09:00–20:00, și sâmbătă,
                10:00–16:00. Ne poți suna la {businessProfile.telephoneDisplay},
                ne poți scrie pe WhatsApp sau poți folosi formularul de contact.
                O fotografie trimisă online nu înlocuiește evaluarea și nu este
                un diagnostic. Dacă cicatricea se modifică, doare sau zona nu
                este vindecată, medicul este primul pas.
              </p>
            </div>
          </div>
          <div className="min-w-0 space-y-6">
            <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium">
              <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" aria-hidden />
              <p className="mb-2 font-serif text-2xl font-semibold text-foreground">
                {businessProfile.locationName}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                {businessProfile.address.formatted}
              </p>
              <a
                href={businessProfile.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
              >
                Deschide harta
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                <a href={`tel:${businessProfile.telephone}`} className="font-medium text-[#0E2B1F]">
                  {businessProfile.telephoneDisplay}
                </a>
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-premium sm:h-72">
              <iframe
                src={businessProfile.googleMapsEmbedUrl}
                title="Hartă Claire Beauty Craiova"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </SectionShell>
      <RelatedTreatments
        description="Alege pagina după problemă. Tehnologia se stabilește la evaluare, nu din titlul căutării."
        items={[
          {
            href: "/radiofrecventa-fractionata-craiova",
            title: "Radiofrecvență fracționată în Craiova",
            text: "Tehnologia discutată pentru aspectul unor cicatrici, doar dacă evaluarea o susține.",
          },
          {
            href: "/cicatrice-cezariana-craiova",
            title: "Cicatrice după cezariană",
            text: "Dacă urma care te preocupă este cea rămasă după cezariană, nu o cicatrice cheloidă în general.",
          },
          {
            href: "/cicatrici-vergeturi-craiova",
            title: "Cicatrici și vergeturi",
            text: "Hub-ul pentru vergeturi și cicatrici postoperatorii, înainte de o pagină de problemă mai îngustă.",
          },
          {
            href: "/microneedling-craiova",
            title: "Microneedling",
            text: "Procedură separată, folosită mai ales pentru textura feței, nu un înlocuitor automat pentru o cicatrice cheloidă.",
          },
        ]}
      />
    </>
  )
}
