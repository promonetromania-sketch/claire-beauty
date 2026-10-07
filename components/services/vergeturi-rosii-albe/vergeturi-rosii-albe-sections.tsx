import type { ReactNode } from "react"
import Link from "next/link"
import { Check, MapPin, MessageCircle, X } from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { businessProfile } from "@/lib/seo/business"
import { vergeturiRosiiAlbeWhatsappHref } from "@/lib/content/vergeturi-rosii-albe"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = vergeturiRosiiAlbeWhatsappHref(businessProfile.whatsappUrl)

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
  tone = "dark",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "dark" | "light"
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:text-sm sm:tracking-[0.22em]">
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
            "text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-[#FFF9F2]/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

function PrimaryLink({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const className =
    "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.04em] text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto sm:text-base"
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  if (href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
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

const stages = [
  {
    n: "01",
    title: "Aspect mai roșiatic",
    text: "La unele persoane, vergetura poate fi la început roz, roșiatică sau violacee. Este o descriere a culorii, nu un diagnostic pus doar după nuanță.",
  },
  {
    n: "02",
    title: "Culoarea se poate estompa",
    text: "În timp, la unele persoane, aspectul culorii se poate estompa progresiv. Ritmul nu este același pentru toată lumea și nu poate fi citit dintr-o fotografie de pe internet.",
  },
  {
    n: "03",
    title: "Aspect mai deschis",
    text: "Vergetura poate deveni mai deschisă, albicioasă sau sidefată. Asta descrie, în general, un aspect mai matur. Nu înseamnă că nu se mai poate discuta o îmbunătățire estetică.",
  },
] as const

const choiceFactors = [
  "Vechimea — recent sau de mai mult timp",
  "Textura — fină, lată, ușor adâncită",
  "Profunzimea și aspectul liniei",
  "Zona și suprafața",
  "Caracteristicile pielii din jur",
  "Procedura disponibilă în salon",
  "Obiectivul persoanei: culoare, textură sau vizibilitate",
] as const

const zones = [
  {
    title: "Abdomen",
    text: "Una dintre zonele în care vergeturile sunt observate des, mai ales după sarcină sau după o schimbare de volum. Poate sta lângă o lipsă de fermitate, care este un obiectiv separat.",
  },
  {
    title: "Coapse, șolduri, fese",
    text: "Apar frecvent acolo unde pielea a fost întinsă. La evaluare se uită la suprafață și la textură, nu la o listă generică de zone.",
  },
  {
    title: "Brațe și alte zone",
    text: "Vergeturile pot apărea și pe brațe sau în alte locuri în care volumul corporal s-a schimbat rapid. Faptul că pot apărea acolo nu înseamnă că zona este automat inclusă în procedură.",
  },
] as const

const selector = [
  {
    title: "Vergeturile sunt roșii / roz",
    text: "Rămâi pe această pagină. Aspectul recent este un punct de plecare pentru evaluare, nu o regulă de tratament.",
    href: "#vergeturi-recente",
    cta: "Vezi vergeturile recente",
  },
  {
    title: "Vergeturile sunt albe și vechi",
    text: "Rămâi pe această pagină. Vergeturile mature pot fi discutate pentru îmbunătățirea aspectului, fără promisiunea că dispar.",
    href: "#vergeturi-albe",
    cta: "Vezi vergeturile vechi",
  },
  {
    title: "Au apărut după sarcină",
    text: "Contextul sarcinii este separat de simpla diferență de culoare. Pagina dedicată rămâne locul pentru acest subiect.",
    href: "/vergeturi-dupa-sarcina-craiova",
    cta: "Vergeturi după sarcină",
  },
  {
    title: "Am și piele lăsată",
    text: "Fermitatea și vergeturile nu sunt același obiectiv. Dacă te deranjează pielea lăsată, pagina de fermitate este locul potrivit.",
    href: "/piele-lasata-craiova",
    cta: "Vezi fermitatea",
  },
  {
    title: "Am și o cicatrice",
    text: "Cicatricile și vergeturile se evaluează separat. Hub-ul comercial rămâne pagina generală de cicatrici și vergeturi.",
    href: "/cicatrici-vergeturi-craiova",
    cta: "Cicatrici și vergeturi",
  },
] as const

const steps = [
  {
    n: "01",
    title: "Când au apărut?",
    text: "Recent sau de mai mult timp? Vechimea schimbă discuția, chiar dacă două linii par asemănătoare într-o fotografie.",
  },
  {
    n: "02",
    title: "Cum arată?",
    text: "Roșii, roz, violacee, albicioase sau sidefate? Culoarea este una dintre informații, nu singura.",
  },
  {
    n: "03",
    title: "Unde sunt?",
    text: "Zona și suprafața contează. O linie fină și o zonă întinsă nu se discută la fel.",
  },
  {
    n: "04",
    title: "Ce te deranjează?",
    text: "Culoarea, textura, vizibilitatea sau și lipsa de fermitate? Dacă fermitatea este problema principală, direcția este alta.",
  },
  {
    n: "05",
    title: "Ce procedură este potrivită?",
    text: "Alegem numai dintre opțiunile disponibile și indicate. În salon, pentru acest obiectiv, discutăm radiofrecvența fracționată.",
  },
] as const

export function VergeturiRosiiAlbeSections() {
  return (
    <>
      <SectionShell className="bg-background" id="diferenta">
        <SectionHeading
          eyebrow="Aspect"
          title="Vergeturi roșii vs vergeturi albe – care este diferența?"
          description="Culoarea este primul lucru pe care îl observi. Nu este, însă, singurul lucru care contează când alegem o procedură."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[1.75rem] border border-[#C47878]/30 bg-card shadow-premium">
            <div
              className="relative h-36 bg-gradient-to-br from-[#E8C4C0] via-[#C47878]/70 to-[#F6E7E2] sm:h-44"
              aria-hidden
            >
              <div className="absolute inset-6 rounded-full border border-white/50 bg-white/20 blur-[1px]" />
              <p className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/80">
                Aspect mai recent
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
                Vergeturi roșii
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Pot avea nuanțe roșiatice, roz sau violacee. Sunt asociate, în
                general, unei etape mai recente a evoluției vergeturilor.
              </p>
              <p className="text-sm font-medium leading-relaxed text-[#0E2B1F]">
                Nu diagnosticăm doar după culoare. Două linii la fel de roz pot
                avea textură, vechime și zonă diferite.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/25 bg-card shadow-premium">
            <div
              className="relative h-36 bg-gradient-to-br from-[#F7F3EE] via-[#E7E0D6] to-[#D9D0C4] sm:h-44"
              aria-hidden
            >
              <div className="absolute inset-8 rounded-[2rem] border border-white/70 bg-white/30" />
              <p className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
                Aspect mai matur
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
                Vergeturi albe
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Au, de obicei, un aspect mai deschis, albicios sau sidefat și
                sunt asociate, în general, unor vergeturi mai mature.
              </p>
              <p className="text-sm font-medium leading-relaxed text-[#0E2B1F]">
                Nu spunem că vergeturile albe sunt imposibil de tratat. Spunem
                că obiectivul rămâne îmbunătățirea aspectului, nu ștergerea lor.
              </p>
            </div>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] border border-[#D4AF37]/40 bg-[#FFF9F2] px-5 py-5 text-center font-serif text-lg leading-relaxed text-[#0E2B1F] sm:text-xl">
          Culoarea ne oferă informații despre aspectul vergeturilor, dar
          alegerea procedurii nu se face doar după culoare.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="evolutie">
        <SectionHeading
          eyebrow="Evoluție"
          title="Cum se poate schimba aspectul unei vergeturi?"
          description="O descriere orientativă, valabilă la unele persoane. Nu este un traseu obligatoriu pentru toate vergeturile."
        />
        <ol className="mx-auto max-w-3xl space-y-0">
          {stages.map((stage, index) => (
            <li key={stage.n}>
              <article className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/90 p-6 shadow-premium">
                <p className="mb-2 font-serif text-sm tracking-[0.18em] text-[#D4AF37]">
                  Etapa {stage.n}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-[#0E2B1F]">
                  {stage.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{stage.text}</p>
              </article>
              {index < stages.length - 1 ? (
                <p
                  className="py-3 text-center font-serif text-2xl text-[#D4AF37]"
                  aria-hidden
                >
                  ↓
                </p>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Folosim „poate” și „în general” pentru că pielea nu urmează un
          calendar unic. La unele persoane culoarea se estompează vizibil. La
          altele, aspectul rămâne mai apropiat de etapa de la început.
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="vergeturi-recente">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Vergeturi recente"
            title="Ce fac dacă vergeturile sunt recente și roșiatice?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Dacă liniile sunt încă roz, roșii sau violacee, momentul apariției
              și aspectul actual sunt informații utile pentru evaluare. Un
              tratament pentru vergeturi roșii pornește de aici: ce se vede
              acum, pe zona ta, nu de la ideea că orice linie colorată se
              rezolvă la fel.
            </p>
            <p>
              Vergeturile noi pot fi recente de săptămâni sau de câteva luni.
              Pot sta lângă linii mai vechi, mai ales după o sarcină sau după o
              schimbare de greutate. De aceea nu promitem că vergeturile roșii
              dispar complet dacă sunt abordate repede.
            </p>
            <p>
              Evaluarea într-o etapă mai recentă permite stabilirea opțiunilor
              disponibile pentru situația concretă. Spunem ce se poate urmări —
              o culoare mai puțin stridentă, o textură mai liniștită, o linie
              mai puțin vizibilă — și ce nu promitem.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href={`tel:${businessProfile.telephone}`}>
              Discută cu noi despre vergeturile tale
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="vergeturi-albe">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Vergeturi mature"
            title="Se pot trata vergeturile albe și vechi?"
          />
          <div className="space-y-4 text-base leading-relaxed text-[#FFF9F2]/80 sm:text-lg">
            <p>
              Da, pot fi luate în calcul. Un tratament pentru vergeturi albe nu
              începe cu ideea că linia este „închisă” și nu se mai poate discuta.
              Vergeturile vechi pot avea o culoare mai deschisă, o textură
              diferită și o vechime de luni sau de ani.
            </p>
            <p>
              Procedurile estetice pot urmări îmbunătățirea aspectului lor, în
              funcție de situația individuală. Schimbarea este, de regulă, mai
              discretă decât își imaginează cineva care caută un tratament
              vergeturi vechi cu promisiunea că linia dispare. Obiectivul rămâne
              o piele cu aspect mai uniform și o vizibilitate mai mică.
            </p>
            <p>
              La evaluare ne uităm la culoare, la relief și la pielea din jur.
              Două persoane cu vergeturi albe pe abdomen pot avea suprafețe și
              texturi diferite. De aceea nu există o regulă simplă de tipul
              „albe = aceeași procedură, același număr de ședințe”.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="disparitie">
        <SectionHeading
          eyebrow="Așteptări"
          title="Vergeturile pot dispărea complet?"
          description="Răspunsul scurt: nu promitem eliminarea 100%."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce urmărim
            </h3>
            <ul className="space-y-3">
              {[
                "Reducerea vizibilității",
                "Îmbunătățirea texturii",
                "Aspect mai uniform",
                "Îmbunătățirea estetică a pielii",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#0E2B1F]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#0E2B1F]/10 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce nu promitem
            </h3>
            <ul className="space-y-3">
              {[
                "Dispariție completă",
                "Piele perfectă",
                "Rezultat garantat",
                "Același rezultat pentru toate persoanele",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]/50" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-[#D4AF37]/50 bg-[#0E2B1F] px-5 py-5 text-center font-serif text-lg font-semibold uppercase leading-snug tracking-[0.03em] text-[#D4AF37] sm:text-xl sm:tracking-[0.04em]">
          Obiectivul este îmbunătățirea aspectului, nu promisiunea că
          vergeturile vor dispărea complet.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="tratamente">
        <SectionHeading
          eyebrow="În salon"
          title="Ce tratamente folosim pentru vergeturi la Claire Beauty?"
          description="Includem doar procedura confirmată pentru acest obiectiv. Nu adăugăm tehnologii ca să acoperim o căutare."
        />
        <article className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#D4AF37]/25 bg-card p-6 shadow-premium sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Procedura folosită
          </p>
          <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F] sm:text-3xl">
            Radiofrecvență fracționată pentru vergeturi
          </h3>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Dacă evaluarea arată că indicația este potrivită, radiofrecvența
              fracționată este tehnologia pe care salonul o discută pentru
              aspectul vergeturilor. Energia folosită este de radiofrecvență,
              nu lumină. Nu o numim laser, laser fracționat sau „laser fără
              laser”.
            </p>
            <p>
              Rolul procedurii, spus prudent, ține de textura pielii, de
              aspectul vergeturilor și de procesele de remodelare urmărite prin
              ședință. Obiectivul este o zonă mai uniformă și o linie mai puțin
              vizibilă. Nu este o promisiune că vergetura dispare.
            </p>
            <p>
              Microneedling există în salon pentru textura tenului și pentru
              anumite cicatrici post-acnee. Materialele salonului nu confirmă
              microneedling ca procedură pentru vergeturi, așa că nu îl listăm
              aici ca opțiune.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href="/radiofrecventa-fractionata-craiova">
              Descoperă radiofrecvența fracționată
            </PrimaryLink>
          </div>
        </article>
      </SectionShell>

      <SectionShell className="bg-background" id="alegere">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Fără reguli simple"
            title="Tratamentul diferă dacă vergeturile sunt roșii sau albe?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Culoarea este doar unul dintre factorii luați în calcul. Nu există
              regula „vergeturi roșii = o procedură” și „vergeturi albe = alta”.
              La Claire Beauty, procedura discutată pentru acest obiectiv rămâne
              radiofrecvența fracționată, iar potrivirea se vede la evaluare.
            </p>
            <p>
              Două persoane pot avea linii la fel de roz și totuși o zonă, o
              suprafață și o textură diferite. La fel, vergeturile albe de pe
              abdomen nu se citesc la fel cu o linie fină, veche, de pe o coapsă.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {choiceFactors.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-center gap-3 rounded-2xl border border-[#D4AF37]/20 bg-[#FFF9F2] px-4 py-3 text-sm text-[#0E2B1F] sm:text-base"
              >
                <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-[1.75rem] border border-[#D4AF37]/30 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-2 font-serif text-xl font-semibold text-[#0E2B1F] sm:text-2xl">
              Nu știi ce tip de vergeturi ai?
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Nu trebuie să pui singură eticheta. La evaluare descriem aspectul
              și spunem ce se poate urmări.
            </p>
            <PrimaryLink href={`tel:${businessProfile.telephone}`}>
              Programează o evaluare
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="laser">
        <SectionHeading
          tone="light"
          eyebrow="Căutări frecvente"
          title="Ai căutat tratament laser pentru vergeturi?"
          description="Multe persoane scriu „laser vergeturi” sau „tratament vergeturi laser” când vor, de fapt, o îmbunătățire a aspectului."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/15 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">Laser</h3>
            <p className="leading-relaxed text-[#FFF9F2]/80">
              Laserul este o categorie de tehnologii bazate pe lumină. Există
              mai multe tipuri, cu indicații diferite. Claire Beauty nu prezintă
              serviciul pentru vergeturi ca laser.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">Radiofrecvență</h3>
            <p className="leading-relaxed text-[#FFF9F2]/80">
              Radiofrecvența utilizează energie de radiofrecvență. În salon,
              forma folosită pentru aspectul vergeturilor este radiofrecvența
              fracționată.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-[#FFF9F2]/80">
          La Claire Beauty, pentru această problemă poate fi utilizată
          radiofrecvența fracționată, dacă evaluarea arată că procedura este
          potrivită. Nu spunem că radiofrecvența este mai bună decât laserul,
          că îl înlocuiește sau că rezultatele sunt identice.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryLink href="/radiofrecventa-fractionata-craiova">
            Vezi radiofrecvența fracționată
          </PrimaryLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="zone">
        <SectionHeading
          eyebrow="Localizare"
          title="În ce zone apar frecvent vergeturile?"
          description="Lista de mai jos este educațională. Descrie unde pot apărea vergeturile, nu o hartă de zone pe care procedura se aplică automat."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {zones.map((zone) => (
            <article
              key={zone.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                {zone.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{zone.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Protocolul din salon spune că se lucrează pe zona convenită la
          evaluare: o zonă cu vergeturi, după ce pielea, suprafața și contextul
          au fost văzute. Sânii, de exemplu, nu sunt incluși automat. Nici
          brațele nu sunt promise ca zonă standard doar pentru că vergeturile
          pot apărea acolo.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="abdomen">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Abdomen"
            title="Vergeturi roșii sau albe pe abdomen"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Vergeturile pe abdomen, numite adesea și vergeturi pe burtă, sunt
              printre cele mai des descrise. Un tratament pentru vergeturi pe
              abdomen începe cu aceeași întrebare ca pe orice altă zonă: cum
              arată liniile acum și ce te deranjează, de fapt.
            </p>
            <p>
              Abdomenul poate prezenta simultan vergeturi și lipsă de fermitate.
              Sunt două obiective diferite. Vergetura ține de textura și de
              vizibilitatea liniei. Lipsa de fermitate ține de felul în care
              pielea stă pe zonă. Le putem discuta în aceeași vizită, dar nu le
              tratăm ca și cum ar fi aceeași procedură.
            </p>
            <p>
              Dacă principala problemă este pielea lăsată, pagina de fermitate
              este locul în care sunt descrise opțiunile reale din salon.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href="/piele-lasata-craiova">
              Vezi tratamentele pentru fermitate
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="dupa-sarcina">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Context separat"
            title="Vergeturile au apărut după sarcină?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Dacă vergeturile au apărut în timpul sarcinii sau după
              modificările corporale asociate acesteia, am pregătit o pagină
              dedicată acestui context. Aici rămâne diferența dintre vergeturile
              roșii și cele albe, nu povestea sarcinii.
            </p>
            <p>
              Dacă ești însărcinată acum, spune-ne înainte: sunt situații în
              care procedura nu se începe.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href="/vergeturi-dupa-sarcina-craiova">
              Vergeturi după sarcină
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="greutate">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Volum"
            title="Vergeturi după modificări de greutate"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Modificările rapide ale volumului corporal pot fi asociate cu
              apariția vergeturilor la unele persoane. Linia poate fi încă
              colorată sau deja mai deschisă, în funcție de cât timp a trecut.
            </p>
            <p>
              Pagina aceasta nu este un program de slăbit și nu discută cum se
              schimbă greutatea. Dacă, pe lângă vergeturi, te deranjează și
              lipsa de fermitate, direcția pentru fermitate este{" "}
              <Link href="/piele-lasata-craiova" className={linkClass}>
                pagina de piele lăsată
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="selector">
        <SectionHeading
          eyebrow="Orientare"
          title="Ce descrie mai bine situația ta?"
          description="Alege descrierea cea mai apropiată. Te ducem la secțiunea sau la pagina care are intenția potrivită."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {selector.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex h-full min-h-11 flex-col rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium transition-all hover:-translate-y-0.5 hover:shadow-premium-lg"
              >
                <h3 className="mb-3 font-serif text-xl font-semibold uppercase leading-snug text-[#0E2B1F]">
                  {item.title}
                </h3>
                <p className="mb-5 flex-1 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#D4AF37]">
                  {item.cta}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="protocol">
        <SectionHeading
          eyebrow="Pași"
          title="Cum alegem tratamentul potrivit?"
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <p className="mb-3 font-serif text-sm tracking-[0.18em] text-[#D4AF37]">
                {step.n}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-background" id="sedinte">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Ritm"
            title="De câte ședințe este nevoie pentru vergeturi?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Nu există un număr universal. Depinde de procedura aleasă, de
              vechimea vergeturilor, de aspect, de zona tratată, de suprafață
              și de răspunsul individual.
            </p>
            <p>
              În materialele salonului nu este publicat un protocol cu un număr
              fix de ședințe pentru radiofrecvența fracționată. Nu inventăm unul
              aici. La evaluare putem estima un interval orientativ și îl putem
              ajusta după cum răspunde pielea. Distanța dintre ședințe se
              stabilește tot atunci.
            </p>
            <p>
              Detaliile tehnologiei stau pe{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                pagina de radiofrecvență fracționată
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="rezultate">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Timp"
            title="Când pot observa schimbări?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Nu publicăm un termen fix și nu promitem un rezultat după prima
              ședință. Pagina tehnologiei spune explicit că nu există un
              interval unic pentru cicatrici și vergeturi, pentru că două
              persoane cu un aspect aparent asemănător pot avea un parcurs
              diferit.
            </p>
            <p>
              Dacă vrei formularea confirmată despre așteptări, o găsești la{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                radiofrecvență fracționată
              </Link>
              . Aici rămâne ideea de pe această pagină: urmărim o îmbunătățire
              a aspectului, nu un calendar promis dinainte.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            tone="light"
            eyebrow="Tarif"
            title="Cât costă tratamentul vergeturilor în Craiova?"
            description="Afișăm formularea din lista salonului, pentru procedura folosită la acest obiectiv."
          />
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FFF9F2]/80">
            Radiofrecvență fracționată
          </p>
          <p className="mt-4 font-serif text-4xl font-semibold text-[#D4AF37] sm:text-5xl">
            de la 1000 lei
          </p>
          <p className="mt-2 text-base font-medium tracking-wide text-[#FFF9F2]/90">
            / ședință / zonă
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#FFF9F2]/75 sm:text-base">
            „De la” înseamnă preț de pornire. Același tarif poate varia în
            funcție de zona tratată. Nu este o ofertă și nu înlocuiește
            evaluarea. Lista completă este pe{" "}
            <Link href="/preturi#remodelare" className="font-medium text-[#D4AF37] hover:underline">
              pagina de prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryLink href={`tel:${businessProfile.telephone}`}>
              Programează o evaluare
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="hub">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Cauți tratamente pentru cicatrici sau alte tipuri de vergeturi?"
            description="Pagina aceasta explică diferența de aspect și de vechime. Hub-ul comercial rămâne locul în care vezi serviciul pentru cicatrici și vergeturi, inclusiv situațiile care nu țin doar de culoare."
          />
          <PrimaryLink href="/cicatrici-vergeturi-craiova">
            Vezi cicatrici &amp; vergeturi
          </PrimaryLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="În oraș"
              title="Tratament pentru vergeturi roșii și albe în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty primește în Craiova persoane care vor să înțeleagă
                diferența dintre vergeturile roșii și cele albe înainte să
                aleagă o procedură. Salonul este pe Strada Principatele Unite
                nr. 5, în municipiul Craiova, județul Dolj. Aceeași adresă este
                valabilă dacă vii din Centru, din Craiovița Nouă, din Rovine,
                din Brazda lui Novac sau din 1 Mai. Nu există un punct separat
                pentru tratamentul vergeturilor.
              </p>
              <p>
                Discuția pornește de la ce se vede acum. Unele vergeturi sunt
                încă roșiatice, roz sau violacee. Altele sunt mai deschise,
                albicioase sau sidefate. Pe abdomen, pe coapse sau pe altă zonă
                pot sta ambele aspecte în același timp, mai ales după sarcină
                sau după o modificare de greutate. Culoarea ajută la descriere.
                Nu înlocuiește evaluarea și nu spune, singură, ce procedură este
                potrivită pentru un tratament vergeturi în Craiova.
              </p>
              <p>
                Procedura discutată pentru acest obiectiv este radiofrecvența
                fracționată, atunci când evaluarea o confirmă. Urmărim o textură
                mai îngrijită și o vizibilitate mai mică. Nu promitem că
                vergeturile dispar complet și nu numim procedura laser. Dacă
                principala problemă este lipsa de fermitate, nu linia în sine,
                o spunem deschis și te îndrumăm către pagina de fermitate.
              </p>
              <p>
                Programul este luni–vineri, 09:00–20:00, și sâmbătă,
                10:00–16:00. Telefonul salonului este{" "}
                {businessProfile.telephoneDisplay}. Pe WhatsApp poți descrie
                zona și aspectul — vergeturi roșii, vergeturi albe sau ambele —
                ca evaluarea să pornească de la situația ta. Dacă vii din afara
                Craiovei, din Dolj, spune-ne din timp. Decizia se ia în salon,
                cu pielea în față, nu după o fotografie trimisă la întâmplare.
              </p>
            </div>
          </div>
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
              className={`mt-4 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Deschide harta
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 px-5 text-sm font-semibold text-[#0E2B1F] hover:bg-[#D4AF37]/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>

      <RelatedTreatments
        description="Vergeturile roșii și cele albe nu se citesc la fel, iar sarcina este un context separat."
        items={[
          {
            href: "/vergeturi-dupa-sarcina-craiova",
            title: "Vergeturi după sarcină",
            text: "Dacă liniile au apărut în sarcină, pagina aceasta descrie contextul, nu doar culoarea vergeturii.",
          },
          {
            href: "/radiofrecventa-fractionata-craiova",
            title: "Radiofrecvență fracționată în Craiova",
            text: "Tehnologia folosită în salon pentru aspectul vergeturilor, după evaluarea zonei.",
          },
          {
            href: "/cicatrici-vergeturi-craiova",
            title: "Cicatrici și vergeturi",
            text: "Hub-ul din care pornești dacă nu ești sigură dacă te preocupă o vergetură sau o cicatrice.",
          },
          {
            href: "/microneedling-craiova",
            title: "Microneedling",
            text: "Procedură diferită, discutată mai ales pentru textura feței, nu ca înlocuitor automat al radiofrecvenței fracționate.",
          },
        ]}
      />
      <ServiceCTA
        title="Programează o evaluare pentru vergeturi"
        description="Spune-ne dacă liniile sunt roșii, albe sau ambele și pe ce zonă te deranjează. Stabilim dacă radiofrecvența fracționată este potrivită, fără promisiunea că vergeturile dispar."
        pricingHref="/preturi#remodelare"
      />
    </>
  )
}
