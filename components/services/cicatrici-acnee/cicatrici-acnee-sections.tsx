import type { ReactNode } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { businessProfile } from "@/lib/seo/business"
import { cicatriciAcneeWhatsappHref } from "@/lib/content/cicatrici-acnee"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = cicatriciAcneeWhatsappHref(businessProfile.whatsappUrl)

const linkClass =
  "font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"

const phoneHref = `tel:${businessProfile.telephone}`

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
    <section id={id} className={cn("scroll-mt-24 overflow-x-hidden py-16 sm:py-24", className)}>
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
        "mb-10 max-w-3xl sm:mb-12",
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
    "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-center text-base font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto"
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  if (href.startsWith("tel:")) {
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

const scarTypes = [
  {
    title: "Cicatrici deprimate",
    text: "Pielea rămâne cu o adâncitură, nu doar cu o pată. Lumina le face mai vizibile când cade dintr-o parte. În limbajul de zi cu zi, multe persoane le numesc gropițe.",
  },
  {
    title: "Textură superficială",
    text: "Suprafața nu este netedă, dar denivelarea este fină. Machiajul poate prinde altfel, iar tenul pare neuniform chiar dacă de aproape urma nu pare adâncă.",
  },
  {
    title: "Cicatrici mai profunde",
    text: "Unele urme coboară mai mult în piele. Nu se discută la fel cu o textură fină și nu promitem că o procedură estetică le aduce pe toate la același nivel.",
  },
] as const

const namedTypes = [
  {
    title: "Ice pick",
    text: "Urme înguste, ca niște înțepături. Pot fi mici la suprafață și totuși adânci. Numele descrie forma, nu un diagnostic pus de pe o fotografie.",
  },
  {
    title: "Boxcar",
    text: "Depresiuni cu margini mai clare, ca niște mici căsuțe. Se văd mai bine când pielea este întinsă sau când lumina este laterală.",
  },
  {
    title: "Rolling",
    text: "Denivelări mai late, care fac pielea să pară ușor ondulată. Nu sunt puncte, ci o textură care se schimbă pe o zonă mai mare a obrazului.",
  },
] as const

const chooseSteps = [
  {
    step: "01",
    title: "Discutăm problema",
    text: "Ce te deranjează cel mai mult: culoarea, gropițele, o zonă anume sau felul în care tenul prinde lumina?",
  },
  {
    step: "02",
    title: "Evaluăm aspectul pielii",
    text: "Ne uităm la textură, la cicatrici și la zone. Separăm petele de modificările de relief. Nu diagnosticăm online.",
  },
  {
    step: "03",
    title: "Alegem procedura",
    text: "Radiofrecvență fracționată, microneedling sau o altă discuție, dacă pielea cere evaluare medicală ori un alt serviciu din salon.",
  },
  {
    step: "04",
    title: "Stabilim planul",
    text: "Numărul și frecvența ședințelor se stabilesc individual. Nu pornim de la un calendar copiat pentru orice ten.",
  },
] as const

export function CicatriciAcneeSections() {
  return (
    <>
      <SectionShell className="bg-background" id="ce-sunt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Pe înțelesul tău"
            title="Ce sunt cicatricile post-acnee?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              După vindecarea leziunilor de acnee, pielea poate rămâne cu
              modificări de textură sau cu cicatrici vizibile. Coșul a trecut,
              dar obrazul nu arată ca înainte: o adâncitură, o zonă care prinde
              lumina altfel, o suprafață pe care fondul de ten nu se așază
              uniform. Aceasta este problema pe care o discutăm aici.
            </p>
            <p>
              Pagina este despre cicatrici post-acnee și despre aspectul
              neuniform rămas după acnee. Nu este o pagină despre acneea activă
              și nu este un ghid dermatologic. Un tratament cicatrici acnee
              Craiova, la Claire Beauty, începe cu ce se vede acum pe piele, nu
              cu un nume de procedură ales din căutare.
            </p>
          </div>
          <aside className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <p className="font-serif text-2xl font-semibold leading-snug text-[#0E2B1F] sm:text-3xl">
              Urmă ≠ întotdeauna cicatrice
            </p>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#0E2B1F]/80">
              <p>
                Nu toate „urmele de acnee” sunt cicatrici. Unele persoane
                descriu petele drept urme. Altele au modificări reale de
                textură. Abordarea poate fi diferită, iar de pe site nu putem
                spune în care situație ești.
              </p>
              <p>
                Cine caută urme acnee Craiova merită să știe această distincție
                înainte de prima programare. Evaluarea din salon separă lucrurile.
                Nu punem diagnostic online.
              </p>
            </div>
          </aside>
          <div className="mt-8">
            <PrimaryLink href={phoneHref}>Programează o evaluare</PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="pete-sau-cicatrici">
        <SectionHeading
          eyebrow="Ca să nu amestecăm lucrurile"
          title="Pete după acnee sau cicatrici? Care este diferența?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Culoare
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Pete / modificări de culoare
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Aspectul culorii pielii poate rămâne modificat după dispariția
              leziunii. Zona poate fi mai închisă, mai roșiatică sau pur și
              simplu diferită de tenul din jur, fără ca suprafața să fie
              adâncită. O pată nu este, de la sine, o cicatrice.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Relief
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Cicatrici / textură
            </h3>
            <p className="text-base leading-relaxed text-[#0E2B1F]/80">
              Suprafața pielii poate prezenta depresiuni, denivelări sau alte
              modificări ale texturii. Aici vorbim despre felul în care se
              simte și se vede relieful, nu doar despre o schimbare de nuanță.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Este important să stabilim ce te deranjează înainte să alegem
          procedura. Claire Beauty nu afirmă că tratamentele din salon rezolvă
          automat toate tipurile de pigmentare. Dacă preocuparea ta principală
          este culoarea, o spunem la evaluare și nu pornim un protocol de
          cicatrici pentru o problemă de pată.
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="tipuri">
        <SectionHeading
          eyebrow="Nu arată la fel"
          title="Cicatricile post-acnee nu arată toate la fel"
          description="Descrierea de mai jos este educațională. Nu înlocuiește evaluarea pielii tale și nu alege singură procedura."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {scarTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {namedTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Aspectul cicatricilor trebuie evaluat înainte de alegerea protocolului.
          Nu spunem că o anumită procedură este automat potrivită pentru fiecare
          tip. Două obraji cu „gropițe” pot cere discuții diferite.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="tratamente">
        <SectionHeading
          eyebrow="În salon"
          title="Ce tratamente folosim pentru cicatricile post-acnee?"
          description="Doar procedurile confirmate la Claire Beauty pentru această problemă. Detaliile tehnice rămân pe pagina fiecărei tehnologii."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Radiofrecvență fracționată
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Radiofrecvență fracționată pentru cicatrici post-acnee
            </h3>
            <div className="space-y-3 text-base leading-relaxed text-[#0E2B1F]/80">
              <p>
                La Claire Beauty, radiofrecvența fracționată folosește energie
                de radiofrecvență, aplicată controlat pe zona tratată. Scopul
                confirmat este remodelarea aspectului pielii: o textură mai
                uniformă și o vizibilitate mai mică a unor cicatrici, acolo unde
                evaluarea arată că procedura are sens.
              </p>
              <p>
                Nu este laser. Nu publicăm modelul aparatului, adâncimi sau
                alți parametri, iar pe site nu afirmăm că aparatul folosește
                microace. Radiofrecvență cicatrici acnee, în salon, înseamnă
                această tehnologie, nu un protocol unic pentru orice urmă.
              </p>
            </div>
            <Link
              href="/radiofrecventa-fractionata-craiova"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-[0.06em] text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Descoperă radiofrecvența fracționată
            </Link>
          </article>
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Microneedling
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Microneedling pentru aspectul pielii după acnee
            </h3>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Microneedlingul, pe pagina lui, este descris prin micro-ace
                care creează canale controlate în piele. Procesul urmărește
                stimularea colagenului, regenerarea și îmbunătățirea texturii.
                Este una dintre procedurile discutate și pentru aspectul
                cicatricilor post-acnee.
              </p>
              <p>
                Microneedling cicatrici acnee nu înseamnă că procedura este
                potrivită pentru orice ten și pentru orice adâncime. Pagina
                tehnologiei rămâne locul detaliilor. Aici o punem doar în
                contextul problemei: textura rămasă după acnee.
              </p>
            </div>
            <Link
              href="/microneedling-craiova"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-[0.06em] text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Descoperă microneedling
            </Link>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          HIFU facial și microdermabraziunea există în salon, dar au alte
          obiective. Nu le prezentăm aici ca tratament pentru cicatricile
          post-acnee. Dacă fermitatea sau o îngrijire de suprafață este ce te
          interesează de fapt, o spunem la evaluare și te îndrumăm către pagina
          potrivită.
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="rf-sau-microneedling">
        <SectionHeading
          eyebrow="Fără un câștigător universal"
          title="Radiofrecvență fracționată sau microneedling pentru cicatricile post-acnee?"
          description="Sunt servicii diferite. Nu spunem că una este mai bună pentru toată lumea."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Radiofrecvență fracționată
            </h3>
            <ul className="space-y-3 text-base leading-relaxed text-[#0E2B1F]/80">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Energie de radiofrecvență, aplicată controlat pe zona tratată. Nu este laser.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Obiectiv confirmat: remodelarea aspectului pielii, textură mai uniformă, vizibilitate redusă a unor cicatrici.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Nu publicăm parametri și nu afirmăm că aparatul folosește microace.</span>
              </li>
            </ul>
            <Link
              href="/radiofrecventa-fractionata-craiova"
              className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Pagina radiofrecvenței fracționate
            </Link>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">
              Microneedling
            </h3>
            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Micro-ace care creează canale controlate în piele și urmăresc regenerarea.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Obiectiv confirmat pe pagina procedurii: colagen, textură și aspectul cicatricilor post-acnee.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>Nu este aceeași procedură cu radiofrecvența fracționată și nu o înlocuiește automat.</span>
              </li>
            </ul>
            <Link
              href="/microneedling-craiova"
              className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Pagina de microneedling
            </Link>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Procedura potrivită depinde de aspectul cicatricilor, caracteristicile
            pielii și obiectivul urmărit.
          </p>
          <p className="mt-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
            Nu știi ce să alegi?
          </p>
          <div className="mt-6">
            <PrimaryLink href={phoneHref}>Programează o evaluare</PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="acnee-activa">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="O limită importantă"
            title="Ai încă acnee activă?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Această pagină este dedicată cicatricilor post-acnee, nu
              diagnosticului și nu tratamentului medical al acneei active.
              Acneea activă înseamnă leziuni prezente: coșuri, inflamație, piele
              care încă se modifică. Cicatricile sunt ce poate rămâne după ce
              acea fază s-a calmat.
            </p>
            <p>
              Claire Beauty nu tratează medical acneea. Dacă există leziuni
              active importante sau o problemă dermatologică, evaluarea medicală
              corespunzătoare are prioritate. La consultația din salon o spunem
              direct și nu începem o procedură estetică pe o piele care nu este
              pregătită.
            </p>
          </div>
          <aside className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] px-6 py-8 text-center shadow-premium">
            <p className="font-serif text-2xl font-semibold uppercase leading-snug tracking-[0.04em] text-[#0E2B1F] sm:text-3xl">
              Acnee activă
              <span className="mx-3 text-[#D4AF37]">≠</span>
              cicatrici post-acnee
            </p>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="gropite">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Cum spun oamenii"
            title={'Se pot îmbunătăți „gropițele” rămase după acnee?'}
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Da, acesta este limbajul real: gropițe acnee, tratament gropițe
              acnee. De cele mai multe ori, cuvântul descrie cicatrici
              deprimate, nu o pată de culoare. De aceea întrebarea ajunge pe
              această pagină, nu pe o pagină de îngrijire generală a tenului.
            </p>
            <p>
              Ce putem urmări, când procedura este potrivită: îmbunătățirea
              aspectului, reducerea vizibilității și o textură mai uniformă.
              Răspunsul este individual. Nu promitem umplere completă, dispariția
              gropițelor sau o piele perfect netedă după un protocol.
            </p>
            <p>
              Cât de adânci sunt, cât de vechi sunt și pe ce zonă stau schimbă
              discuția. O gropiță fină de pe obraz și o depresiune mai adâncă nu
              se evaluează cu aceeași așteptare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cicatrici-vechi">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Timp"
            title="Dar cicatricile vechi de acnee?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Vechimea cicatricilor este unul dintre factorii care trebuie luați
              în calcul la evaluare. O urmă recentă și una stabilizată de ani de
              zile nu se discută la fel. Pielea din jur, adâncimea și suprafața
              contează la fel de mult ca anul în care a apărut acneea.
            </p>
            <p>
              Se poate lucra și pe cicatrici mai vechi, cu obiectivul de a
              îmbunătăți aspectul. Nu spunem că orice cicatrice veche poate fi
              eliminată. Dacă schimbarea posibilă este discretă, o spunem înainte
              de prima ședință.
            </p>
          </div>
          <div className="mt-8">
            <PrimaryLink href={whatsappHref} external>
              Discută cu noi despre cicatricile tale
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cicatrici-profunde">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Limite"
            title="Ce se întâmplă dacă cicatricile sunt foarte profunde?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Nu toate cicatricile pot fi abordate în aceeași măsură prin
              procedurile estetice disponibile în salon. O textură superficială
              și o depresiune foarte adâncă nu au același spațiu de îmbunătățire.
              Radiofrecvența fracționată și microneedlingul rămân proceduri
              estetice. Nu promitem rezultate pe care ele nu le pot oferi.
            </p>
            <p>
              În anumite situații poate fi necesară evaluare dermatologică sau
              medicală și alte opțiuni terapeutice, în afara salonului. Dacă
              acesta este cazul, o spunem. Credibilitatea începe cu ce nu
              promitem.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cum-alegem">
        <SectionHeading
          eyebrow="În salon"
          title="Cum alegem tratamentul?"
          description="Patru pași, înainte de orice aparat. Protocolul nu se copiază de la o persoană la alta."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {chooseSteps.map((item) => (
            <li
              key={item.step}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
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
      </SectionShell>

      <SectionShell className="bg-background" id="cum-decurge">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Ședința"
            title="Cum decurge tratamentul?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Experiența diferă în funcție de procedura aleasă. Această pagină
              poate conduce spre radiofrecvență fracționată sau spre
              microneedling, așa că nu descriem o singură ședință ca și cum ar
              fi valabilă pentru ambele.
            </p>
            <p>
              Nu publicăm aici anestezie, durată, adâncimi, ace, recuperare sau
              parametri. Aceste detalii, acolo unde sunt confirmate, stau pe
              pagina tehnologiei. Pentru radiofrecvență fracționată, vezi{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                cum este descrisă procedura
              </Link>
              . Pentru microneedling, vezi{" "}
              <Link href="/microneedling-craiova" className={linkClass}>
                pagina de microneedling
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="sedinte">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Ritm"
            title="De câte ședințe este nevoie pentru cicatricile post-acnee?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Nu dăm un număr universal. Un tratament post acnee nu are un
              calendar unic, pentru că cicatricile nu sunt identice.
            </p>
            <p>Numărul de ședințe depinde de:</p>
            <ul className="space-y-2 pl-1">
              {[
                "tipul și aspectul cicatricilor",
                "profunzime",
                "vechime",
                "suprafața tratată",
                "procedura aleasă",
                "răspunsul individual",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Pentru radiofrecvența fracționată, salonul nu publică un număr
              fix: protocolul se stabilește după zonă și piele, pe{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                pagina tehnologiei
              </Link>
              . Orientările de ședințe pentru microneedling rămân pe{" "}
              <Link href="/microneedling-craiova" className={linkClass}>
                pagina de microneedling
              </Link>{" "}
              și nu se aplică automat oricărei cicatrici.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="rezultate-cand">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Timp"
            title="Când pot observa schimbări?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Nu există un termen universal. Procesul și evoluția diferă în
              funcție de procedura aleasă și de felul în care răspunde pielea.
              Nu promitem o schimbare vizibilă după o singură ședință, pentru
              orice situație.
            </p>
            <p>
              Pentru radiofrecvența fracționată, evoluția se discută pe{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                pagina de radiofrecvență fracționată
              </Link>
              . Pentru microneedling, ce se poate observa pe parcurs este
              descris pe{" "}
              <Link href="/microneedling-craiova" className={linkClass}>
                pagina de microneedling
              </Link>
              . Aici rămâne doar regula comună: rezultatele pot varia de la
              persoană la persoană.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="rezultat">
        <SectionHeading
          eyebrow="Așteptări"
          title="Ce rezultat urmărim?"
          description="Scopul este îmbunătățirea realistă a aspectului pielii."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/30 bg-white/80 p-8 shadow-premium">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Putem urmări
            </h3>
            <ul className="space-y-3 text-base leading-relaxed text-[#0E2B1F]/80">
              {[
                "reducerea vizibilității cicatricilor",
                "îmbunătățirea texturii",
                "un aspect mai uniform",
                "îmbunătățirea generală a aspectului pielii",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#0E2B1F]/10 bg-white/80 p-8 shadow-premium">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Nu promitem
            </h3>
            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
              {[
                "dispariția completă a cicatricilor",
                "piele perfectă",
                "rezultate identice",
                "rezultat după o singură ședință pentru orice situație",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]/50" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="pret">
        <SectionHeading
          eyebrow="Investiție"
          title="Cât costă tratamentul cicatricilor post-acnee în Craiova?"
          description="Prețul depinde de procedura aleasă. Nu există un tarif unic pentru „cicatrici de acnee”."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#FFF9F2] p-8 text-center shadow-premium-lg">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Radiofrecvență fracționată
            </h3>
            <p className="font-serif text-4xl font-semibold tracking-tight text-[#0E2B1F] sm:text-5xl">
              de la 1000 lei
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
              / ședință / zonă
            </p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Formularea din lista salonului. „De la” înseamnă că prețul poate
              varia în funcție de zona tratată.
            </p>
            <Link
              href="/preturi#remodelare"
              className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Vezi în lista de prețuri
            </Link>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 text-center shadow-premium">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Microneedling
            </h3>
            <p className="font-serif text-4xl font-semibold tracking-tight text-[#0E2B1F] sm:text-5xl">
              de la 400 lei
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
              / ședință
            </p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Preț de pornire din lista de tratamente faciale. Nu este tariful
              radiofrecvenței fracționate.
            </p>
            <Link
              href="/preturi#faciale"
              className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Vezi în lista de prețuri
            </Link>
          </article>
        </div>
        <div className="mt-8 text-center">
          <PrimaryLink href={phoneHref}>Programează o evaluare</PrimaryLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="alte-cicatrici">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Ai alt tip de cicatrice?"
            description="Această pagină este dedicată cicatricilor post-acnee."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Pentru cicatrici postoperatorii, cicatrice cezariană, vergeturi și
            alte cicatrici, pagina-hub rămâne{" "}
            <Link href="/cicatrici-vergeturi-craiova" className={linkClass}>
              tratamentul pentru cicatrici și vergeturi în Craiova
            </Link>
            . Acolo sunt adunate situațiile, fără să înlocuiască această pagină.
          </p>
          <div className="mt-8">
            <PrimaryLink href="/cicatrici-vergeturi-craiova">
              Vezi tratamentele pentru cicatrici și vergeturi
            </PrimaryLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="rejuvenare">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Dacă nu cicatricile sunt problema
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Dacă principala ta preocupare nu sunt cicatricile, ci fermitatea,
            textura sau aspectul general al pielii, vezi opțiunile de rejuvenare
            facială. Este un obiectiv diferit de cicatricile post-acnee.
          </p>
          <Link
            href="/rejuvenare-faciala-craiova"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/60 px-8 py-3 text-base font-semibold text-[#0E2B1F] hover:bg-[#D4AF37]/10 sm:w-auto"
          >
            Rejuvenare facială
          </Link>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="În oraș"
            title="Tratament pentru cicatrici post-acnee în Craiova"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Claire Beauty este pe Strada Principatele Unite nr. 5, în Craiova,
              județul Dolj. Evaluarea pentru cicatrici acnee Craiova se face în
              același salon, nu la o adresă diferită pentru fiecare cartier. Din
              Centru drumul este scurt. Vin cliente și din Craiovița Nouă sau
              din zona Parcului Romanescu, cu aceeași programare.
            </p>
            <p>
              Cine caută tratament cicatrici acnee Craiova ajunge, de cele mai
              multe ori, după ce tenul s-a liniștit, dar textura nu. Unele
              persoane vorbesc despre urme acnee Craiova și se referă la pete.
              Altele descriu gropițe. La evaluare separăm aceste lucruri, apoi
              spunem dacă radiofrecvența fracționată, microneedlingul sau o
              îndrumare medicală are sens. Nu interpretăm o fotografie trimisă
              la întâmplare ca diagnostic.
            </p>
            <p>
              Programul este luni–vineri, 09:00–20:00, și sâmbătă, 10:00–16:00.
              Poți suna la {businessProfile.telephoneDisplay} sau scrie pe
              WhatsApp înainte să vii. Dacă vii din alt oraș din Dolj, spune-ne
              din timp, ca discuția despre piele și despre procedură să încapă
              într-o singură vizită.
            </p>
            <p>
              Un tratament post acnee, în sensul acestei pagini, înseamnă
              îngrijirea estetică a cicatricilor și a texturii rămase după
              acnee. Nu este tratamentul medical al coșurilor active. Pentru
              cicatrici postoperatorii, cicatrice după cezariană sau vergeturi,
              rămâi pe pagina de cicatrici și vergeturi. Pentru detalii de
              aparat, radiofrecvența fracționată și microneedlingul au fiecare
              pagina lor. Alegerea se face după ce vedem aspectul pielii.
            </p>
          </div>
          <a
            href={businessProfile.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
          >
            {businessProfile.address.formatted}
          </a>
        </div>
      </SectionShell>

      <RelatedTreatments
        description="Cicatricile post-acnee țin de textura feței. Procedura se alege după felul în care arată pielea."
        items={[
          {
            href: "/radiofrecventa-fractionata-craiova",
            title: "Radiofrecvență fracționată în Craiova",
            text: "Tehnologia salonului pentru aspectul cicatricilor și al texturii, nu un diagnostic.",
          },
          {
            href: "/microneedling-craiova",
            title: "Microneedling",
            text: "Procedură cu micro-ace, separată de radiofrecvența fracționată, folosită pentru textura tenului.",
          },
          {
            href: "/rejuvenare-faciala-craiova",
            title: "Rejuvenare facială",
            text: "Dacă obiectivul este fermitatea și aspectul feței, nu doar urma de după acnee.",
          },
          {
            href: "/microdermabraziune-craiova",
            title: "Microdermabraziune",
            text: "Exfoliere de suprafață, potrivită altei intenții decât o cicatrice adâncită.",
          },
          {
            href: "/cicatrici-vergeturi-craiova",
            title: "Cicatrici și vergeturi",
            text: "Hub-ul pentru cicatrici postoperatorii și vergeturi, dacă problema nu este doar acneea.",
          },
        ]}
      />
      <ServiceCTA
        title="Programează o evaluare pentru cicatricile post-acnee"
        description="Spune-ne ce te deranjează: pete, gropițe sau textură. Stabilim împreună dacă o procedură din salon are sens, fără promisiuni pe care pielea nu le poate susține."
        pricingHref="/preturi"
      />
    </>
  )
}
