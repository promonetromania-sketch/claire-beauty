import type { ReactNode } from "react"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { radiofrecventaFractionataWhatsappMessage } from "@/lib/content/radiofrecventa-fractionata"
import { claireImages } from "@/lib/images/claire-beauty"
import { cn } from "@/lib/utils"

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(radiofrecventaFractionataWhatsappMessage)}`

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
    <section id={id} className={cn("py-20 sm:py-24", className)}>
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
        "mb-12 max-w-3xl",
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

const uses = [
  {
    title: "Cicatrici",
    text: "Îmbunătățirea aspectului anumitor cicatrici, atunci când pielea este vindecată și procedura are sens estetic.",
    href: "/cicatrici-vergeturi-craiova",
    label: "Vezi pagina pentru cicatrici",
  },
  {
    title: "Cicatrici post-acnee",
    text: "Pentru persoanele preocupate de textura neuniformă rămasă după acnee, după ce inflamația s-a calmat. Nu este un tratament pentru acneea activă.",
    href: "/cicatrici-acnee-craiova",
    label: "Vezi cicatrici post-acnee",
  },
  {
    title: "Vergeturi",
    text: "Abordare pentru îmbunătățirea aspectului vergeturilor, fără promisiunea că dispar.",
    href: "/cicatrici-vergeturi-craiova",
    label: "Vezi pagina pentru vergeturi",
  },
  {
    title: "Cicatrici postoperatorii / cezariană",
    text: "Numai după vindecarea corespunzătoare și atunci când situația permite o procedură estetică.",
    href: "/cicatrice-cezariana-craiova",
    label: "Vezi cicatricea după cezariană",
  },
  {
    title: "Textura pielii",
    text: "Aspect neuniform, zone în care pielea prinde lumina altfel, obiective estetice discutate punctual la evaluare.",
  },
] as const

const mechanism = [
  {
    n: "01",
    title: "Evaluarea pielii",
    text: "Ne uităm la zonă, la vechimea urmei și la felul în care arată pielea acum. Fără acest pas nu există protocol.",
  },
  {
    n: "02",
    title: "Stabilirea protocolului",
    text: "Ședința se construiește pentru obiectivul tău: cicatrice, vergetură sau textură. Nu există un șablon unic afișat ca valabil pentru orice piele.",
  },
  {
    n: "03",
    title: "Aplicarea controlată a energiei",
    text: "Se folosește energie de radiofrecvență, pe zona convenită. Nu publicăm temperaturi, adâncimi, frecvențe sau putere.",
  },
  {
    n: "04",
    title: "Procesul de remodelare",
    text: "Se urmărește o schimbare treptată a aspectului. Evoluția este individuală și nu poate fi promisă dinainte.",
  },
] as const

const suitable = [
  {
    title: "Cicatrici",
    text: "Când te preocupă aspectul unei cicatrici vindecate și vrei să afli dacă o procedură estetică poate fi luată în calcul.",
  },
  {
    title: "Vergeturi",
    text: "Când obiectivul este o textură mai uniformă în zona cu vergeturi, nu dispariția lor.",
  },
  {
    title: "Textură neuniformă",
    text: "Când pielea dintr-o zonă prinde lumina neuniform și vrei o discuție despre aspect, nu un diagnostic.",
  },
  {
    title: "După ce pielea s-a liniștit",
    text: "Pentru urme rămase după acnee, operație sau cezariană, numai când zona este închisă și stabilă.",
  },
] as const

const session = [
  {
    n: "01",
    title: "Evaluarea",
    text: "Discutăm zona și obiectivul. Spunem dacă radiofrecvența fracționată poate fi luată în calcul sau dacă alt serviciu este mai potrivit.",
  },
  {
    n: "02",
    title: "Pregătirea zonei",
    text: "Zona se pregătește pentru procedură conform protocolului din salon. Nu publicăm pașii de cabinet care nu sunt documentați.",
  },
  {
    n: "03",
    title: "Procedura",
    text: "Energia de radiofrecvență se aplică controlat pe zona stabilită. Durata și senzația se explică înainte, pentru situația ta.",
  },
  {
    n: "04",
    title: "Recomandările după ședință",
    text: "Primești indicațiile relevante pentru zona tratată. Ele nu sunt înlocuite de un text general de pe site.",
  },
] as const

const reasons = [
  {
    title: "Evaluare individuală",
    text: "Nu se intră direct în procedură. Se văd zona, vechimea urmei și starea pielii.",
  },
  {
    title: "Protocol adaptat obiectivului",
    text: "Cicatricile, vergeturile și textura nu se tratează ca și cum ar fi aceeași situație.",
  },
  {
    title: "Tehnologie legată de mai multe tratamente",
    text: "Pagina aceasta explică tehnologia. Paginile de cicatrici și vergeturi, respectiv de microneedling, rămân servicii cu intenție proprie.",
  },
  {
    title: "Abordare realistă",
    text: "Vorbim despre aspect mai uniform și vizibilitate redusă. Nu promitem ștergere, piele perfectă sau un număr garantat de ședințe.",
  },
  {
    title: "Salon în Craiova",
    text: "Procedura se discută la Claire Beauty, pe Strada Principatele Unite nr. 5, nu într-o descriere generică de oraș.",
  },
  {
    title: "Separare clară de alte tehnologii",
    text: "Radiofrecvența fracționată nu este laser, nu este microneedling și nu este radiofrecvența corporală de fermitate.",
  },
] as const

export function RadiofrecventaFractionataSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pe înțelesul tău"
              title="Ce este radiofrecvența fracționată?"
              description="O tehnologie estetică, explicată prin ceea ce face serviciul în salon, nu printr-un manual de aparat."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Radiofrecvența fracționată pornește de la energie de
                radiofrecvență. La Claire Beauty, această energie este folosită
                controlat pe zona tratată, cu scopul de a susține un proces de
                remodelare a aspectului pielii. Nu este o promisiune că pielea
                redevine „ca înainte”. Este o procedură prin care se urmărește
                un aspect mai uniform, acolo unde evaluarea arată că are sens.
              </p>
              <p>
                În lista salonului există și radiofrecvență folosită altfel.
                Radiofrecvența bipolară, radiofrecvența monopolară și pagina de{" "}
                <Link href="/radiofrecventa-corporala-craiova" className={linkClass}>
                  radiofrecvență corporală
                </Link>{" "}
                țin de fermitate și de aspectul corporal, inclusiv în
                protocoale legate de celulită. Radiofrecvența fracționată este
                un serviciu separat, cu alt rol: cicatrici, vergeturi și
                textură. Dacă ai căutat „radiofrecventa craiova”, merită să
                știi că cele două nu se înlocuiesc una pe alta.
              </p>
              <p>
                Cuvântul „fracționată” descrie, în limitele a ceea ce este
                confirmat, felul în care este gândit serviciul: acțiunea este
                controlată pe zona tratată, nu un tratament general de
                fermitate a siluetei. Nu publicăm modelul aparatului. Nu
                publicăm adâncimi, cartușe, număr de ace sau frecvențe. Nu
                afirmăm că procedura folosește microace, pentru că acest
                detaliu nu apare în materialele salonului.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Radiofrecvență",
                text: "Energia folosită este de radiofrecvență. Nu este un fascicul de lumină și nu trebuie căutată ca laser.",
              },
              {
                title: "Acțiune controlată",
                text: "Se lucrează pe zona convenită la evaluare: o cicatrice, o zonă cu vergeturi sau o textură care te deranjează.",
              },
              {
                title: "Remodelarea aspectului",
                text: "Obiectivul este o schimbare treptată a felului în care arată pielea, nu un efect instant și nu un rezultat garantat.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
              >
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Indicații în salon"
          title="Pentru ce folosim radiofrecvența fracționată la Claire Beauty?"
          description="Cardurile de mai jos descriu obiective estetice discutate în salon. Nu sunt diagnostice."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              {"href" in item && item.href ? (
                <Link
                  href={item.href}
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  {item.label}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Rejuvenarea facială și stimularea colagenului nu sunt listate aici ca
          indicație a aparatului, pentru că modelul și protocolul de colagen nu
          sunt confirmate în materialele salonului. Dacă acesta este obiectivul
          tău, îl discutăm la evaluare, fără să îl promitem de pe site.
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Patru pași"
          title="Cum funcționează radiofrecvența fracționată?"
          description="Procesul, fără parametri inventați. Cifrele tehnice se spun în salon, pentru zona ta, dacă aparatul și protocolul o cer."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mechanism.map((item) => (
            <li
              key={item.n}
              className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-card/80 p-6 shadow-premium"
            >
              <p className="mb-3 font-serif text-sm tracking-[0.18em] text-[#D4AF37]">
                {item.n}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cicatrici">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Cicatrici"
              title="Radiofrecvență fracționată pentru cicatrici"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Căutarea „radiofrecventa pentru cicatrici” sau „radiofrecventa
                cicatrici acnee” pornește, de cele mai multe ori, de la o urmă
                care se vede și care schimbă textura. La Claire Beauty,
                radiofrecvența fracționată poate fi luată în calcul pentru
                aspectul anumitor cicatrici post-acnee, pentru unele cicatrici
                postoperatorii și pentru cicatrici mature, acolo unde procedura
                este potrivită. Evaluarea este înaintea tratamentului, nu după.
              </p>
              <p>
                Pentru cicatricile rămase după acnee, vorbim despre textura
                neuniformă de după ce pielea s-a calmat: mici denivelări sau
                zone care prind lumina altfel. Nu este un serviciu pentru
                coșuri active și nu promitem că oprește acneea. Problema este
                explicată pe pagina de{" "}
                <Link href="/cicatrici-acnee-craiova" className={linkClass}>
                  cicatrici post-acnee
                </Link>
                . Această pagină rămâne despre tehnologie.
              </p>
              <p>
                Cicatricile postoperatorii și{" "}
                <Link href="/cicatrice-cezariana-craiova" className={linkClass}>
                  cicatricea după cezariană
                </Link>{" "}
                se discută numai după vindecarea corespunzătoare. Nu lucrăm pe o
                plagă recentă. Dacă medicul a dat o restricție, aceasta are
                prioritate. Obiectivul, când procedura este potrivită, este să
                reducă vizibilitatea și să urmărească o textură mai uniformă.
                Nu spunem că șterge cicatricea și nu spunem că rezultatul este
                garantat.
              </p>
            </div>
            <CtaPair
              primaryLabel="Vezi tratamentele pentru cicatrici"
              primaryHref="/cicatrici-vergeturi-craiova"
            />
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 p-8 shadow-premium">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Ce urmărim, concret
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Un aspect mai integrat în pielea din jur.</li>
              <li>Vizibilitate mai mică a unor urme, nu dispariția lor.</li>
              <li>O discuție onestă dacă zona nu este pregătită.</li>
            </ul>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="vergeturi">
        <SectionHeading
          align="left"
          eyebrow="Vergeturi"
          title="Radiofrecvență fracționată pentru vergeturi"
          description="Tehnologia și obiectivul estetic, legate fără promisiuni absolute."
        />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Vergeturile sunt o schimbare a texturii pielii. Un tratament
            vergeturi în Craiova, făcut cu radiofrecvență fracționată, urmărește
            îmbunătățirea acestui aspect: pielea din zonă să pară mai uniformă,
            iar vergetura să fie mai puțin vizibilă. Radiofrecvența pentru
            vergeturi nu le șterge și nu le elimină definitiv. Diferența dintre{" "}
            <Link href="/vergeturi-rosii-albe-craiova" className={linkClass}>
              vergeturi recente
            </Link>{" "}
            și{" "}
            <Link href="/vergeturi-rosii-albe-craiova" className={linkClass}>
              vergeturi vechi
            </Link>{" "}
            se vede la evaluare, nu într-un text general.
          </p>
          <p>
            Dacă ai căutat „radiofrecventa vergeturi” sau „vergeturi Craiova”,
            pagina generală de problemă rămâne{" "}
            <Link href="/cicatrici-vergeturi-craiova" className={linkClass}>
              tratamentul pentru cicatrici și vergeturi
            </Link>
            . Pentru contextul de după naștere, pagina dedicată este{" "}
            <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
              vergeturi după sarcină
            </Link>
            . Aici rămâne tehnologia prin care salonul abordează obiectivul,
            atunci când evaluarea o confirmă.
          </p>
        </div>
        <CtaPair
          primaryLabel="Vezi tratamentul pentru vergeturi"
          primaryHref="/cicatrici-vergeturi-craiova"
        />
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="laser">
        <SectionHeading
          eyebrow="Două tehnologii"
          title="Radiofrecvență fracționată sau laser?"
          description="Dacă ai căutat un tratament și ai scris „laser”, merită să știi ce se face, de fapt, la Claire Beauty."
          tone="light"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">Laser</h3>
            <p className="leading-relaxed text-[#FFF9F2]/80">
              Laserul utilizează energie luminoasă. Există mai multe tipuri, cu
              indicații diferite. Claire Beauty nu prezintă acest serviciu ca
              laser și nu programează o procedură laser sub numele de
              radiofrecvență.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">
              Radiofrecvență fracționată
            </h3>
            <p className="leading-relaxed text-[#FFF9F2]/80">
              Radiofrecvența utilizează energie de radiofrecvență. În salon,
              forma folosită pentru cicatrici, vergeturi și textură este
              radiofrecvența fracționată. Este categoria serviciului, nu un
              alt nume pentru laser.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-full border border-[#D4AF37]/70 bg-[#0E2B1F] px-5 py-4 text-center text-sm font-semibold tracking-[0.08em] text-[#D4AF37] sm:text-base sm:tracking-[0.12em]">
          Ai căutat „laser”? La Claire Beauty tratamentul este cu radiofrecvență
          fracționată.
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-[#FFF9F2]/75">
          Nu spunem că radiofrecvența este mai bună decât laserul. Sunt
          tehnologii diferite. Procedura potrivită se alege după piele, zonă și
          după ce este disponibil în salon. Dacă ai nevoie de laser, îți spunem
          că acest serviciu nu este laser.
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="microneedling">
        <SectionHeading
          eyebrow="Comparație"
          title="Radiofrecvență fracționată și microneedling – care este diferența?"
          description="Două servicii din salon, cu mecanisme pe care le descriem doar în limitele paginilor existente."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Microneedling
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Pe pagina de microneedling, procedura este descrisă prin micro-ace
              care creează canale controlate în piele, ca să stimuleze
              regenerarea și producția de colagen și să îmbunătățească textura.
              Este un serviciu propriu, cu pagină proprie.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/80 p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Radiofrecvență fracționată
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Aici mecanismul confirmat este energia de radiofrecvență, aplicată
              controlat, pentru remodelarea aspectului. Nu descriem microace,
              pentru că nu este confirmat că aparatul din salon este
              radiofrecvență cu microace. Dacă acest lucru se confirmă ulterior,
              diferența față de microneedling simplu va fi scrisă explicit.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Căutarea „microneedling cu radiofrecvență” amestecă adesea cele două
          idei. La Claire Beauty ele rămân servicii separate până când
          materialele aparatului spun altceva. Poți citi mecanismul de
          microneedling pe pagina lui, apoi reveni aici dacă obiectivul tău
          ține de tehnologia de radiofrecvență.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/microneedling-craiova"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#0E2B1F]/20 px-8 py-3 text-center text-sm font-semibold text-[#0E2B1F] hover:border-[#D4AF37] sm:w-auto"
          >
            Descoperă microneedling în Craiova
          </Link>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="morpheus8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Căutări frecvente"
            title="Ai căutat Morpheus8 în Craiova?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Morpheus8 este denumirea comercială a unui anumit sistem de
              radiofrecvență fracționată. „Radiofrecvență fracționată” descrie
              o categorie mai largă de tratamente. Cele două expresii nu
              înseamnă automat același aparat.
            </p>
            <p>
              Claire Beauty nu prezintă acest serviciu sub numele Morpheus8.
              În lista salonului, procedura este radiofrecvență fracționată.
              Modelul aparatului nu este publicat pe site. Dacă obiectivul tău
              este un tratament cu radiofrecvență fracționată, programează o
              evaluare pentru a afla ce protocol este disponibil în salon.
            </p>
            <p>
              Nu numim serviciul alternativă la Morpheus8, echivalent sau o
              variantă mai bună. Fără datele aparatului, o astfel de comparație
              ar fi incorectă.               Prețul căutat lângă numele comercial nu este
              prețul de pe această pagină: aici publicăm doar formularea din
              lista Claire Beauty.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Potrivire"
          title="Când poate fi luată în calcul radiofrecvența fracționată?"
          description="Situații în care merită o evaluare. Nu înlocuiesc o consultație și nu confirmă că procedura ți se potrivește."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {suitable.map((item) => (
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
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Nu se începe pe o plagă recentă sau pe acnee activă. Dacă ești
          însărcinată, dacă ai un implant în zona vizată sau o problemă de
          piele în desfășurare, spune-ne înainte: sunt situații în care
          procedura nu se începe. Rejuvenarea ca indicație de colagen rămâne
          neconfirmată pentru aparatul din salon și nu o listăm ca obiectiv
          standard.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="În salon"
          title="Cum decurge o ședință"
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {session.map((item) => (
            <li
              key={item.n}
              className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <p className="mb-3 font-serif text-sm tracking-[0.18em] text-[#D4AF37]">
                {item.n}
              </p>
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Nu publicăm anestezie, durată, creme sau timp de recuperare. Aceste
          detalii nu sunt confirmate în materialele aparatului și se spun la
          evaluare.
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Așteptări"
            title="Ce rezultate urmărește tratamentul?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Tratamentul urmărește îmbunătățirea aspectului pielii, un aspect
              mai uniform și reducerea vizibilității anumitor imperfecțiuni.
              Obiectivele se stabilesc individual, la evaluare, pentru zona
              pe care o discutăm. Nu promitem piele perfectă, eliminare completă,
              rezultat permanent sau un efect garantat după un număr fix de
              ședințe.
            </p>
            <p>
              Două persoane cu vergeturi sau cicatrici aparent asemănătoare pot
              avea un parcurs diferit. De aceea nu publicăm procente și nu
              publicăm fotografii înainte/după care nu sunt autorizate de salon.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Protocol"
            title="De câte ședințe este nevoie?"
          />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Numărul de ședințe depinde de problema tratată, caracteristicile
            zonei, vechimea cicatricilor sau vergeturilor și răspunsul
            individual. În repository nu există un protocol cu un număr fix
            pentru radiofrecvența fracționată, așa că nu inventăm unul. La
            evaluare putem estima un interval orientativ și îl putem ajusta
            după cum răspunde pielea.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="După procedură"
            title="Ce trebuie să știi după procedură?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              După ședință primești recomandările potrivite zonei și
              protocolului stabilit. Nu publicăm un interval de recuperare, un
              număr de zile de roșeață, o rutină de exfoliere sau un factor de
              protecție solară, pentru că aceste detalii nu sunt confirmate
              pentru aparatul real.
            </p>
            <p>
              Dacă ai un eveniment apropiat sau o restricție dată de medic,
              spune-ne înainte. Protocolul de după procedură trebuie completat
              cu informațiile din salon; până atunci, textul de pe site rămâne
              general în mod intenționat.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Tratament premium
          </p>
          <h2 className="mb-5 font-serif text-3xl font-semibold sm:text-4xl">
            Preț radiofrecvență fracționată Craiova
          </h2>
          <p className="text-lg leading-relaxed text-[#FFF9F2]/80">
            În lista de prețuri a salonului, formularea este:
          </p>
          <p className="mt-6 font-serif text-4xl font-semibold text-[#D4AF37] sm:text-5xl">
            de la 1000 lei
          </p>
          <p className="mt-2 text-base font-medium tracking-wide text-[#FFF9F2]/90">
            / ședință / zonă
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#FFF9F2]/75 sm:text-base">
            „De la” înseamnă preț de pornire, nu un tarif unic pentru orice
            suprafață. Aceeași listă spune că prețul radiofrecvenței fracționate
            poate varia în funcție de zona tratată. Nu este o ofertă și nu
            înlocuiește evaluarea. Poți vedea și{" "}
            <Link href="/preturi" className="font-medium text-[#D4AF37] hover:underline">
              lista completă de prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#0E2B1F] sm:w-auto"
            >
              Programează o evaluare
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 px-8 py-3 text-sm font-semibold text-[#FFF9F2] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Salonul"
          title="De ce Claire Beauty pentru radiofrecvență fracționată?"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Din salon"
          title="Imagini și rezultate"
          description="Nu publicăm before/after generate și nu folosim fotografii ale altui aparat."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-w-0 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.terapeutPortret}
              alt="Ana Savovici, în salonul Claire Beauty din Craiova"
              title="Claire Beauty Craiova"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="rounded-[2rem] border border-dashed border-[#D4AF37]/40 bg-[#FFF9F2]/70 p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Rezultate și imagini reale din salon – în curând.
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Fotografiile existente de radiofrecvență din proiect arată
              radiofrecvența corporală, cu un aplicator pentru fermitate. Nu le
              folosim aici, ca să nu pară că este același aparat. Imaginile
              aparatului de radiofrecvență fracționată, ale procedurii și ale
              rezultatelor autorizate se adaugă când există și sunt confirmate.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Craiova și Dolj"
              title="Radiofrecvență fracționată în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este pe Strada Principatele Unite nr. 5, în
                Craiova, județul Dolj. De aici se programează evaluarea pentru
                radiofrecvență fracționată: o discuție despre zonă și obiectiv,
                apoi, dacă procedura este potrivită, ședința. Telefonul este{" "}
                <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                  {businessProfile.telephoneDisplay}
                </a>
                .
              </p>
              <p>
                Oameni din Craiova și din Dolj ajung la aceeași adresă, fie că
                locuiesc în centru sau vin din cartiere precum Craiovița Nouă,
                1 Mai sau zona Romanescu. Nu există o pagină separată pentru
                fiecare cartier. Contează pielea și obiectivul, nu eticheta
                străzii. Programul salonului este luni–vineri, 09:00–20:00, și
                sâmbătă, 10:00–16:00.
              </p>
              <p>
                Dacă mesajul tău spune „tratament radiofrecventa craiova”,
                spune și ce vrei să discutăm: o cicatrice, vergeturi sau
                textura unei zone. Așa nu ajungi la radiofrecvența corporală
                de fermitate când obiectivul tău este aspectul unei urme.
                Poți scrie și pe WhatsApp înainte de vizită.
              </p>
            </div>
            <CtaPair primaryLabel="Programează o evaluare" />
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" aria-hidden />
            <p className="mb-2 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {businessProfile.address.formatted}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Radiofrecvență fracționată pentru aspectul cicatricilor,
              vergeturilor și texturii. Evaluare înainte de procedură. Preț de
              la 1000 lei / ședință / zonă.
            </p>
            <a
              href={businessProfile.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Deschide harta
            </a>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Unde continui"
          title="Pagini legate de această tehnologie"
          description="Aceasta este pagina tehnologiei. Paginile de mai jos au altă intenție și rămân separate."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              href: "/cicatrici-acnee-craiova",
              title: "Cicatrici post-acnee",
              text: "Pagina de problemă pentru cicatricile și textura rămase după acnee. Tehnologia rămâne aici.",
            },
            {
              href: "/cicatrici-vergeturi-craiova",
              title: "Cicatrici și vergeturi",
              text: "Hub-ul pentru vergeturi, cicatrici postoperatorii și cicatrice după cezariană.",
            },
            {
              href: "/cicatrice-cezariana-craiova",
              title: "Cicatrice după cezariană",
              text: "Intenție specifică: aspectul estetic al cicatricii vindecate după cezariană, nu tehnologia în general.",
            },
            {
              href: "/cicatrici-cheloide-craiova",
              title: "Cicatrici cheloide",
              text: "Cicatrici îngroșate sau reliefate. Radiofrecvența fracționată nu se alege automat; pagina explică când poate fi discutată.",
            },
            {
              href: "/microneedling-craiova",
              title: "Microneedling",
              text: "Serviciu separat, cu micro-ace. Nu este aceeași procedură cu radiofrecvența fracționată.",
            },
            {
              href: "/radiofrecventa-corporala-craiova",
              title: "Radiofrecvență corporală",
              text: "Fermitate și aspect corporal. Nu este pagina pentru cicatrici și vergeturi.",
            },
            {
              href: "/tratamente-faciale-craiova",
              title: "Tratamente faciale",
              text: "Hub-ul facial, dacă obiectivul tău ține de ten și nu de o zonă corporală.",
            },
            {
              href: "/rejuvenare-faciala-craiova",
              title: "Rejuvenare facială",
              text: "Pagină de obiectiv: alegi între HIFU facial, microneedling și radiofrecvență fracționată. Nu este un lifting și nu confirmă un efect de colagen al aparatului.",
            },
            {
              href: "/piele-lasata-craiova",
              title: "Piele lăsată",
              text: "Pagină de fermitate, cu HIFU corporal și radiofrecvență corporală. Nu este indicația radiofrecvenței fracționate.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/80 p-6 shadow-premium transition-colors hover:border-[#D4AF37]/50"
            >
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  )
}
