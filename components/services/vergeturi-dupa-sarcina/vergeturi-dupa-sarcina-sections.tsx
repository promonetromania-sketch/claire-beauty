import type { ReactNode } from "react"
import Link from "next/link"
import { Check, MapPin, X } from "lucide-react"
import { businessProfile } from "@/lib/seo/business"
import { vergeturiDupaSarcinaWhatsappMessage } from "@/lib/content/vergeturi-dupa-sarcina"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(vergeturiDupaSarcinaWhatsappMessage)}`

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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37] sm:tracking-[0.2em]">
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

function CtaLink({
  href,
  children,
  external,
  tone = "dark",
}: {
  href: string
  children: ReactNode
  external?: boolean
  tone?: "dark" | "gold"
}) {
  const className = cn(
    "inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.05em] sm:w-auto",
    tone === "dark"
      ? "bg-[#0E2B1F] text-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
      : "bg-[#D4AF37] text-[#0E2B1F]",
  )
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
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

const zones = [
  {
    title: "Abdomen",
    text: "Este zona despre care se vorbește cel mai des după sarcină. Pielea a fost întinsă luni de zile, iar liniile pot sta pe flancuri, deasupra sau sub buric. La Claire Beauty, abdomenul poate fi discutat la evaluare ca zonă cu vergeturi. Suprafața și aspectul decid dacă radiofrecvența fracționată are sens, nu o regulă generală.",
  },
  {
    title: "Coapse",
    text: "Vergeturile de pe coapse apar des acolo unde pielea s-a întins odată cu schimbarea volumului. Pe pagina generală de vergeturi, coapsele sunt printre zonele de la care pornește evaluarea. Faptul că liniile sunt vizibile nu confirmă singur că procedura se aplică pe toată coapsa.",
  },
  {
    title: "Șolduri",
    text: "Șoldurile sunt o altă zonă în care liniile pot deveni vizibile la lumină sau când te îmbraci. Se uită la textură, la suprafață și la pielea din jur. Nu există un protocol publicat „pentru șolduri” separat de evaluarea zonei.",
  },
  {
    title: "Sâni",
    text: "Vergeturile pot apărea și pe sâni, în timpul sarcinii sau al schimbărilor de volum. Nu includem automat această zonă în procedură. La evaluare vedem dacă pielea și contextul permit o abordare estetică. Fără această discuție, nu promitem că radiofrecvența fracționată se aplică acolo.",
  },
  {
    title: "Alte zone",
    text: "Fesele și alte zone în care pielea a fost întinsă pot intra în conversație, dacă tu le indici. Apariția vergeturilor într-un loc nu înseamnă că procedura este confirmată acolo. Zona se stabilește în salon, privind pielea, nu dintr-o listă de pe site.",
  },
] as const

const concerns = [
  {
    label: "Vergeturile",
    text: "Linii pe piele, de culoare sau de textură diferită față de restul zonei. Aceasta este pagina pentru vergeturile legate de sarcină.",
    href: "#tratamente",
    cta: "Rămâi pe această pagină",
    current: true,
  },
  {
    label: "Pielea lăsată",
    text: "Lipsa de fermitate este un alt obiectiv estetic. Nu se rezolvă cu protocolul pentru vergeturi.",
    href: "/piele-lasata-craiova",
    cta: "Vezi pielea lăsată",
    current: false,
  },
  {
    label: "Cicatricea după cezariană",
    text: "Urma inciziei, după vindecare, este o cicatrice chirurgicală. Nu este o vergetură.",
    href: "/cicatrice-cezariana-craiova",
    cta: "Vezi cicatricea după cezariană",
    current: false,
  },
] as const

const steps = [
  {
    n: "01",
    title: "Discutăm când au apărut",
    text: "În timpul sarcinii? După modificările corporale? La câteva luni sau la ani distanță? Momentul schimbă ce este realist să urmărim.",
  },
  {
    n: "02",
    title: "Evaluăm aspectul",
    text: "Culoare, textură, vechime și zonă. Două linii de pe același abdomen pot arăta diferit și nu se discută ca un singur caz.",
  },
  {
    n: "03",
    title: "Discutăm ce te deranjează",
    text: "Vergeturi, fermitate, cicatrice sau mai multe lucruri deodată. Le notăm separat, ca să nu promitem un singur tratament pentru toate.",
  },
  {
    n: "04",
    title: "Alegem procedura potrivită",
    text: "Doar dintre serviciile reale. Pentru aspectul vergeturilor, în salon, aceasta este radiofrecvența fracționată, dacă evaluarea o confirmă.",
  },
  {
    n: "05",
    title: "Stabilim așteptările",
    text: "Realist, pentru pielea ta: o îmbunătățire de aspect, nu o promisiune că liniile vor dispărea.",
  },
] as const

const pursue = [
  "reducerea vizibilității",
  "îmbunătățirea texturii",
  "aspect mai uniform",
  "îmbunătățirea estetică a pielii",
] as const

const decline = [
  "eliminare 100%",
  "piele identică cu cea de dinainte",
  "rezultat garantat",
  "același rezultat pentru toate persoanele",
] as const

export function VergeturiDupaSarcinaSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="În timpul sarcinii"
            title="De ce apar vergeturile în timpul sarcinii?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Corpul se schimbă ca să facă loc sarcinii. Pielea de pe abdomen,
              dar și de pe alte zone, este întinsă într-un interval relativ
              scurt. Când întinderea depășește felul în care pielea poate ține
              pasul, pot apărea linii. La unele persoane sunt fine. La altele
              sunt mai late și se văd imediat.
            </p>
            <p>
              Volumul se modifică rapid, iar particularitățile pielii nu sunt
              aceleași pentru toată lumea. Două sarcini, chiar la aceeași
              persoană, nu lasă neapărat același aspect. Nu este o lipsă de
              grijă și nu este ceva ce o cremă ar fi putut opri sigur. Cremele
              pot hidrata. Nu rescriu structura pielii și nu promitem că
              vergeturile puteau fi prevenite.
            </p>
            <p>
              Pagina aceasta pornește de la ce se vede acum, după ce corpul a
              trecut prin sarcină. Nu caută o vină și nu transformă o schimbare
              frecventă într-o problemă de care ar trebui să îți fie rușine.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După naștere"
            title="Cum se schimbă vergeturile după naștere?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Aspectul vergeturilor se poate modifica în timp. Unele sunt la
              început roșiatice, roz sau violacee. Mai târziu, o parte dintre ele
              devin mai deschise, albicioase și mai puțin evidente cromatic.
              Textura poate rămâne diferită de pielea din jur chiar și atunci
              când culoarea s-a liniștit.
            </p>
            <p>
              Nu toate evoluează identic. Pe același abdomen pot sta linii încă
              colorate lângă linii deja mai pale. De aceea tratamentul pentru
              vergeturi după naștere nu se alege după o fotografie generică, ci
              după cum arată pielea în momentul evaluării.
            </p>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <p className="font-serif text-2xl font-semibold leading-snug text-[#0E2B1F] sm:text-3xl">
              Vergeturi roșii
              <span className="mx-3 text-[#D4AF37]">≠</span>
              vergeturi albe
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Vechimea și aspectul vergeturilor contează atunci când discutăm
              opțiunile estetice.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="rosii-albe">
        <SectionHeading
          eyebrow="Aspect"
          title="Vergeturi roșii sau vergeturi albe după sarcină?"
          description="Două aspecte frecvente după naștere. Culoarea descrie ce se vede. Nu pune un diagnostic și nu alege singură procedura."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Aspect mai recent
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Vergeturi roșii / recente
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Un aspect roz, roșiatic sau violaceu sugerează, în general, o etapă
              diferită față de vergeturile deja pale. Nu diagnosticăm după
              culoare și nu spunem că liniile colorate „se rezolvă” dacă vii
              repede. La evaluare notăm culoarea împreună cu textura, zona și
              cât timp a trecut de la naștere.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Aspect mai matur
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Vergeturi albe / mature
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Vergeturile mai vechi pot avea un aspect mai deschis, albicios sau
              sidefiu, și o textură deja schimbată. Sunt frecvente la ani după
              sarcină. Se poate discuta o îmbunătățire de aspect. Schimbarea este
              de regulă mai lentă și mai discretă decât la liniile încă colorate.
              Nu promitem că dispar.
            </p>
          </article>
        </div>
        <div className="mt-8 flex justify-center">
          <CtaLink href="/vergeturi-rosii-albe-craiova">
            Vezi ghidul despre vergeturi roșii și albe
          </CtaLink>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Unde se văd"
          title="Unde pot apărea vergeturile după sarcină?"
          description="Zone în care liniile sunt observate des. Tratabilitatea se confirmă la evaluare. Apariția într-o zonă nu înseamnă automat că procedura se aplică acolo."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {zones.map((zone) => (
            <article
              key={zone.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {zone.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{zone.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="abdomen">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Abdomen"
            title="Vergeturi pe abdomen după sarcină"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Vergeturile pe burtă după sarcină sunt motivul pentru care multe
              persoane caută un tratament vergeturi abdomen. Zona a fost întinsă
              luni de zile. După naștere pot rămâne linii pe flancuri, în jurul
              buricului sau pe o suprafață mai largă. Un tratament vergeturi
              abdomen, la Claire Beauty în Craiova, începe cu această observație,
              nu cu o promisiune de piele neschimbată.
            </p>
            <p>
              Pe același abdomen pot exista, în același timp, trei lucruri
              diferite: vergeturi, lipsă de fermitate și, dacă nașterea a fost
              prin cezariană, o cicatrice chirurgicală. Pot sta una lângă alta.
              Nu au același tratament. Vergetura este o linie în piele.
              Fermitatea ține de cât de susținută pare pielea. Cicatricea este
              urma inciziei, după ce s-a închis.
            </p>
            <p>
              Dacă te deranjează mai ales liniile, rămâi pe această pagină. Dacă
              te deranjează faptul că pielea pare mai puțin fermă, conversația
              se mută spre fermitate. Dacă te deranjează urma de cezariană,
              după vindecare, există o pagină separată. Le putem nota în aceeași
              evaluare, ca să nu amesteci așteptările.
            </p>
            <p>
              O linie fină de pe un flanc și o zonă mai lată de sub buric nu se
              evaluează la fel. Contează și dacă vergeturile de pe burtă sunt
              încă roșii sau deja albe, și dacă pielea din jur pare mai puțin
              susținută. Tratament vergeturi abdomen, în Craiova, la Claire
              Beauty, înseamnă această separare: ce linie vrei să se vadă mai
              puțin, ce ține de fermitate și ce ține de cicatrice. Fără ea, o
              singură ședință ar fi prezentată ca răspuns pentru trei obiective
              diferite.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="mb-6 text-center font-serif text-2xl font-semibold text-[#0E2B1F] sm:text-3xl">
            Ce te deranjează?
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pot exista împreună, dar nu înseamnă că au același tratament.
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {concerns.map((item) => (
              <article
                key={item.label}
                className={cn(
                  "flex flex-col rounded-[1.75rem] border p-6 shadow-premium",
                  item.current
                    ? "border-[#D4AF37] bg-[#FFF9F2]"
                    : "border-[#D4AF37]/15 bg-card/80",
                )}
              >
                <h3 className="mb-3 font-serif text-xl font-semibold uppercase tracking-[0.04em] text-[#0E2B1F]">
                  {item.label}
                </h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">{item.text}</p>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.04em] text-[#D4AF37]"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="tratamente">
        <SectionHeading
          eyebrow="În salon"
          title="Ce tratamente folosim pentru vergeturi?"
          description="Doar procedura confirmată pentru acest obiectiv. Nu adăugăm tehnologii pe care salonul nu le folosește pentru vergeturi."
        />
        <article className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/80 p-6 shadow-premium sm:p-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
            Radiofrecvență fracționată
          </p>
          <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Radiofrecvență fracționată pentru aspectul vergeturilor
          </h3>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              La Claire Beauty, radiofrecvența fracționată este serviciul luat
              în calcul pentru îmbunătățirea aspectului vergeturilor. Obiectivul
              este remodelarea aspectului pielii din zona tratată: o textură mai
              îngrijită și o linie mai puțin vizibilă. Protocolul este
              individual. Nu există un șablon afișat ca valabil pentru orice
              piele după sarcină.
            </p>
            <p>
              Nu este laser. Nu șterge vergeturile și nu le elimină. Zona,
              vechimea și starea pielii se văd înainte de prima ședință. Dacă
              procedura nu este potrivită, o spunem.
            </p>
            <p>
              Căutarea „microneedling vergeturi” apare des. Microneedling, în
              salon, este documentat ca procedură pentru ten — textură, pori,
              cicatrici post-acnee — nu ca protocol pentru vergeturile de pe
              corp. Nu îl prezentăm aici ca tratament disponibil pentru
              vergeturile după sarcină. Pagina de{" "}
              <Link href="/microneedling-craiova" className={linkClass}>
                microneedling
              </Link>{" "}
              rămâne pentru ten.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/radiofrecventa-fractionata-craiova">
              Descoperă radiofrecvența fracționată
            </CtaLink>
          </div>
        </article>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
            O căutare frecventă
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold sm:text-4xl">
            Ai căutat „laser pentru vergeturi”?
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            <p>
              Mulți oameni caută tratament vergeturi laser sau laser vergeturi
              când vor ca liniile să se vadă mai puțin. Intenția este clară.
              Tehnologia din salon, pentru acest serviciu, este alta.
            </p>
            <p className="font-serif text-2xl font-semibold leading-snug text-[#FFF9F2] sm:text-3xl">
              Laser
              <span className="mx-3 text-[#D4AF37]">și</span>
              radiofrecvență
              <span className="mt-2 block text-lg font-medium text-[#FFF9F2]/80 sm:text-xl">
                sunt tehnologii diferite.
              </span>
            </p>
            <p>
              Laserul folosește energie luminoasă. Radiofrecvența folosește
              energie de radiofrecvență. Nu le punem într-un clasament și nu le
              tratăm ca și cum ar fi aceeași procedură. Alegerea, la Claire
              Beauty, pornește de la ce este disponibil în salon și de la ce
              arată evaluarea, nu de la numele citit într-o căutare.
            </p>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/35 bg-white/5 p-6 sm:p-8">
            <p className="font-serif text-xl font-semibold uppercase leading-snug tracking-[0.03em] text-[#D4AF37] sm:text-2xl">
              Ai căutat „laser pentru vergeturi”?
            </p>
            <p className="mt-4 leading-relaxed text-[#FFF9F2]/85">
              La Claire Beauty, opțiunea disponibilă pentru această problemă este
              radiofrecvența fracționată, dacă aceasta este potrivită în urma
              evaluării.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/radiofrecventa-fractionata-craiova" tone="gold">
              Vezi cum funcționează radiofrecvența fracționată
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După naștere"
            title="Când pot începe un tratament pentru vergeturi după naștere?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Momentul potrivit depinde de recuperarea după naștere, starea
              pielii, procedura avută în vedere și eventualele recomandări
              medicale. Nu publicăm un număr de săptămâni sau de luni, pentru că
              un termen universal nu există în protocolul salonului.
            </p>
            <p>
              Dacă nașterea este foarte recentă, dacă cicatricea de cezariană
              nu este vindecată, dacă există o problemă de piele sau o restricție
              medicală, procedura nu se prezintă automat ca disponibilă. O plagă
              care încă se închide nu este o zonă pe care o abordăm estetic.
              Dacă medicul a indicat o pauză, aceasta are prioritate.
            </p>
            <p>
              Dacă ești însărcinată, radiofrecvența fracționată nu se începe.
              Spune-ne acest lucru înainte de programare, ca evaluarea să pornească
              de la situația reală.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Alăptare"
            title="Pot face tratamentul dacă alăptez?"
          />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pentru perioada de alăptare, eligibilitatea pentru procedură trebuie
            verificată în funcție de tratamentul avut în vedere și protocolul
            aplicabil. Spune-ne acest lucru înainte de programare. Nu publicăm
            un da sau un nu general, pentru că materialele aparatului din salon
            nu documentează o regulă separată pentru alăptare.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Limite clare"
          title="Pot dispărea complet vergeturile după sarcină?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce urmărim
            </h3>
            <ul className="space-y-3">
              {pursue.map((item) => (
                <li key={item} className="flex min-h-11 items-center gap-3 text-[#0E2B1F]">
                  <Check className="h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">
              Ce nu promitem
            </h3>
            <ul className="space-y-3">
              {decline.map((item) => (
                <li key={item} className="flex min-h-11 items-center gap-3 text-muted-foreground">
                  <X className="h-5 w-5 shrink-0 text-[#0E2B1F]/70" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Obiectivul este îmbunătățirea aspectului vergeturilor, nu promisiunea
          că acestea vor dispărea complet.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Și după ani"
            title="Dar dacă vergeturile au apărut cu ani în urmă?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Multe persoane caută tratamentul mult timp după sarcină, când
              copiii sunt deja mari și liniile de pe abdomen sunt de mult mai
              deschise. Faptul că sarcina a fost cu ani în urmă nu înseamnă
              automat că nu mai există opțiuni estetice.
            </p>
            <p>
              Vechimea, culoarea, textura, zona și caracteristicile pielii pot
              influența alegerea protocolului și așteptările. O vergetură albă,
              stabilă, nu se discută la fel ca una încă roz. Schimbarea, când
              procedura este potrivită, este de obicei mai discretă. Merită
              spus înainte de prima ședință, nu după.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href={`tel:${businessProfile.telephone}`} external>
              Programează o evaluare
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Fermitate"
            title="Ai și piele lăsată după sarcină?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Vergeturile sunt modificări ale structurii și aspectului pielii:
              linii care se văd altfel decât pielea din jur. Lipsa de fermitate
              este un alt obiectiv estetic: pielea pare mai puțin susținută.
              Pot exista simultan pe abdomen după sarcină. Nu se tratează ca și
              cum ar fi aceeași problemă.
            </p>
            <p>
              Radiofrecvența fracționată nu este prezentată în salon ca
              tratament de fermitate. Pentru pielea lăsată, conversația pornește
              de la procedurile de fermitate, pe pagina lor. Dacă te preocupă
              ambele, le separăm la evaluare.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/piele-lasata-craiova">
              Vezi tratamentele pentru piele lăsată și fermitate
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Cezariană"
            title="Ai și cicatrice după cezariană?"
          />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cicatricea chirurgicală și vergeturile sunt probleme diferite.
            Vergeturile pot sta pe abdomen lângă urma inciziei, dar nu se
            evaluează ca o singură urmă. Cicatricea se discută doar după
            vindecare, pe pagina ei.
          </p>
          <div className="mt-8">
            <CtaLink href="/cicatrice-cezariana-craiova">
              Vezi tratamentul pentru cicatrice după cezariană
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Pași"
          title="Cum stabilim ce procedură ți se potrivește?"
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

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Protocol"
            title="De câte ședințe este nevoie?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Nu există un număr universal. Depinde de procedura aleasă, de
              vechimea vergeturilor, de aspect, de suprafață, de zona tratată și
              de răspunsul individual.
            </p>
            <p>
              Pentru radiofrecvența fracționată, materialele salonului nu
              publică un protocol cu un număr fix de ședințe. La evaluare putem
              estima un interval orientativ și îl putem ajusta după cum
              răspunde pielea. Un număr copiat de pe internet nu ține loc de
              această discuție.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Timp"
            title="Când pot observa schimbări?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Procesele urmărite prin procedurile de remodelare a aspectului
              pielii sunt progresive. Depind de tehnologia aleasă și de felul în
              care reacționează pielea. Nu publicăm un termen în zile sau
              săptămâni, pentru că un calendar general nu este confirmat pentru
              aparatul din salon.
            </p>
            <p>
              Pentru modul în care este descrisă radiofrecvența fracționată și
              pentru limitele ei, pagina tehnologiei este locul potrivit. Aici
              rămâne contextul sarcinii, nu detaliul de aparat.
            </p>
          </div>
          <div className="mt-8">
            <CtaLink href="/radiofrecventa-fractionata-craiova">
              Vezi pagina radiofrecvenței fracționate
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Preț din lista salonului
          </p>
          <h2 className="mb-5 font-serif text-3xl font-semibold sm:text-4xl">
            Cât costă tratamentul vergeturilor după sarcină în Craiova?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Nu există un preț generic pentru „vergeturi după sarcină”, separat
            de procedură. Protocolul discutat pentru acest obiectiv este
            radiofrecvența fracționată. În lista de prețuri, formularea este:
          </p>
          <p className="mt-6 font-serif text-4xl font-semibold text-[#D4AF37] sm:text-5xl">
            de la 1000 lei
          </p>
          <p className="mt-2 text-base font-medium tracking-wide text-[#FFF9F2]/90">
            / ședință / zonă
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#FFF9F2]/75 sm:text-base">
            „De la” înseamnă preț de pornire, nu un tarif unic pentru orice
            suprafață. Poate varia în funcție de zona tratată. Nu înlocuiește
            evaluarea. Lista completă este pe pagina de{" "}
            <Link href="/preturi#remodelare" className="font-medium text-[#D4AF37] hover:underline">
              prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href={`tel:${businessProfile.telephone}`} external tone="gold">
              Programează o evaluare
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Cauți informații generale despre tratamentul vergeturilor?"
          />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Această pagină este dedicată în special vergeturilor asociate
            sarcinii și perioadei de după naștere. Pentru toate tipurile de
            vergeturi — inclusiv cele legate de variații de greutate sau de
            alte perioade — hub-ul rămâne pagina generală.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href="/cicatrici-vergeturi-craiova">
              Vezi tratamentele pentru cicatrici și vergeturi
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="locatie">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Craiova și Dolj"
              title="Tratament pentru vergeturi după sarcină în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este pe Strada Principatele Unite nr. 5, în
                Craiova, județul Dolj. De aici se programează o evaluare pentru
                vergeturi după sarcină, când te interesează aspectul pielii după
                naștere. Nu este o discuție despre slăbit și nu este pagina
                pentru cicatrici de acnee. Telefonul este{" "}
                <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                  {businessProfile.telephoneDisplay}
                </a>
                . Poți scrie și pe WhatsApp și spune din start că este vorba
                despre vergeturi apărute în timpul sau după sarcină, plus zona
                care te preocupă.
              </p>
              <p>
                Un tratament vergeturi în Craiova, în acest context, înseamnă
                radiofrecvență fracționată, dacă evaluarea arată că procedura
                are sens. Nu este laser și nu promitem că vergeturile dispar.
                Programul este luni–vineri, 09:00–20:00, și sâmbătă, 10:00–16:00.
                Din centru drumul este scurt. Din Craiovița Nouă, Brazda lui
                Novac, Rovine, 1 Mai, Valea Roșie, Sărari sau Lăpuș se ajunge la
                aceeași adresă, fără un protocol diferit pe cartier.
              </p>
              <p>
                În județul Dolj, programarea rămâne la salonul din Craiova.
                Unele persoane caută vergeturi după naștere la câteva luni.
                Altele revin după ani, când liniile de pe abdomen sunt deja mai
                deschise. Ambele situații se discută aici, cu așteptări legate
                de vechime, culoare și textură. Dacă pe lângă vergeturi te
                preocupă pielea mai puțin fermă, pagina de fermitate este
                separată. Dacă te preocupă cicatricea după cezariană, și aceea
                are pagina ei. Nu le tratăm ca pe aceeași problemă.
              </p>
              <p>
                Tratamentul vergeturilor după sarcină nu se alege după un cuvânt
                căutat. Se alege după cum arată pielea acum. Dacă alăptezi, dacă
                nașterea este foarte recentă sau dacă cicatricea de cezariană nu
                este închisă, spune-ne înainte de programare. Eligibilitatea nu
                se confirmă dintr-un text de pe site. La evaluare spunem dacă
                radiofrecvența fracționată poate fi luată în calcul pentru zona
                ta și ce îmbunătățire de aspect este realistă.
              </p>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-6 shadow-premium sm:p-8">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" aria-hidden />
            <p className="mb-2 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {businessProfile.address.formatted}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Luni–vineri: 09:00–20:00
              <br />
              Sâmbătă: 10:00–16:00
            </p>
            <a
              href={`tel:${businessProfile.telephone}`}
              className="inline-flex min-h-11 items-center font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              {businessProfile.telephoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              WhatsApp
            </a>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                src={businessProfile.googleMapsEmbedUrl}
                title="Hartă Claire Beauty Craiova"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div className="mt-6">
              <CtaLink href={`tel:${businessProfile.telephone}`} external>
                Programează o evaluare
              </CtaLink>
            </div>
          </aside>
        </div>
      </SectionShell>
      <RelatedTreatments
        description="Sarcina poate lăsa și vergeturi, și o cicatrice de cezariană, și o piele abdominală mai puțin fermă. Sunt pagini diferite."
        items={[
          {
            href: "/vergeturi-rosii-albe-craiova",
            title: "Vergeturi roșii și albe",
            text: "Diferența de culoare contează când se discută ce se poate urmări la aspect.",
          },
          {
            href: "/cicatrice-cezariana-craiova",
            title: "Cicatrice după cezariană",
            text: "Dacă te preocupă urma vindecată a cezarienei, nu liniile de pe abdomen.",
          },
          {
            href: "/radiofrecventa-fractionata-craiova",
            title: "Radiofrecvență fracționată în Craiova",
            text: "Tehnologia folosită pentru aspectul vergeturilor, după evaluare.",
          },
          {
            href: "/piele-lasata-craiova",
            title: "Piele lăsată",
            text: "Dacă problema principală este fermitatea abdomenului, nu desenul vergeturilor.",
          },
        ]}
      />
    </>
  )
}
