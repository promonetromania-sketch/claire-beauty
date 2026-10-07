import type { ReactNode } from "react"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"
import { cicatriceCezarianaWhatsappHref } from "@/lib/content/cicatrice-cezariana"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = cicatriceCezarianaWhatsappHref(businessProfile.whatsappUrl)

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

function CtaLink({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: "solid" | "ghost"
  external?: boolean
}) {
  const className =
    variant === "solid"
      ? "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 text-base font-semibold text-[#D4AF37] sm:w-auto"
      : "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white px-8 text-base font-semibold text-[#0E2B1F] sm:w-auto"

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

const concerns = [
  {
    title: "Vizibilitatea",
    text: "Urma se vede prin haine subțiri, la plajă sau în oglindă, și rămâne primul lucru pe care îl observi pe abdomen.",
  },
  {
    title: "Textura",
    text: "Pielea de pe cicatrice se simte altfel la atingere decât pielea din jur: mai rigidă, mai subțire sau neuniformă.",
  },
  {
    title: "Relieful",
    text: "Zona poate fi ușor adâncită sau ușor ridicată. Relieful schimbă felul în care lumina cade pe abdomen.",
  },
  {
    title: "Culoarea",
    text: "Cicatricea poate rămâne mai roșie, mai roz sau mai închisă decât pielea din jur. Culoarea nu este aceeași problemă cu textura.",
  },
  {
    title: "Aspectul neuniform",
    text: "O parte a cicatricii arată diferit de cealaltă, sau linia nu se integrează în pielea de deasupra și de dedesubt.",
  },
  {
    title: "Cicatrice îngroșată",
    text: "O cicatrice foarte reliefată nu se tratează automat ca o urmă obișnuită. Uneori este nevoie de evaluare medicală înaintea oricărei proceduri estetice.",
  },
] as const

const steps = [
  {
    step: "01",
    title: "Discutăm istoricul",
    text: "Când a avut loc cezariana și ce te deranjează la aspectul cicatricii?",
  },
  {
    step: "02",
    title: "Verificăm dacă zona este potrivită pentru procedură",
    text: "Ne uităm la piele și la ce ne spui. Fără diagnostic medical.",
  },
  {
    step: "03",
    title: "Stabilim obiectivul realist",
    text: "Ce îmbunătățire urmărim, și ce nu putem promite.",
  },
  {
    step: "04",
    title: "Alegem protocolul",
    text: "Doar dacă procedura este potrivită pentru cicatricea ta.",
  },
] as const

export function CicatriceCezarianaSections() {
  return (
    <>
      <SectionShell className="bg-background" id="aspect">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După vindecare"
            title="Cum se poate schimba aspectul cicatricii după cezariană?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Aspectul unei cicatrici se poate modifica pe parcursul procesului
              de vindecare și maturizare. O urmă care la început este mai
              colorată sau mai ridicată poate deveni, în timp, mai plată și mai
              apropiată de culoarea pielii din jur. La alte persoane, diferența
              rămâne vizibilă și după ce zona s-a închis.
            </p>
            <p>
              Unele persoane rămân preocupate de culoare, relief, grosime,
              textură, vizibilitate sau de diferența față de pielea din jur.
              Acestea sunt observații despre aspect, nu un diagnostic. Două
              cicatrici descrise la fel — „roșie”, „îngroșată” sau „veche” —
              pot fi situații diferite, iar descrierea dintr-un mesaj nu spune
              ce fel de cicatrice ai.
            </p>
            <p>
              Pagina aceasta este despre aspectul estetic al cicatricii după
              cezariană, după vindecarea corespunzătoare. Nu este despre
              îngrijirea unei plăgi, despre infecție, despre durere sau despre
              complicații după operație. Nu promitem că toate aceste
              caracteristici pot fi corectate prin procedurile salonului.
              La evaluare spunem ce se poate urmări și ce rămâne în afara
              serviciului.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="recenta-sau-vindecata">
        <SectionHeading
          eyebrow="Prima distincție"
          title="Cicatrice recentă sau cicatrice vindecată?"
          description="Înainte de orice procedură estetică, contează dacă zona este închisă și liniștită."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#0E2B1F]/15 bg-card p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/60">
              Nu este o problemă estetică
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Cicatrice recentă
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Dacă zona nu este vindecată, prezintă secreții, prezintă semne
              care te îngrijorează, există durere neobișnuită sau există o
              problemă postoperatorie, nu o tratăm ca pe o simplă problemă
              estetică.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              În aceste situații, recomandăm contactarea medicului. Salonul nu
              înlocuiește controlul medical și nu începe o procedură estetică
              pe o plagă care încă se închide.
            </p>
          </article>
          <article className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Abordare estetică
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Cicatrice vindecată
            </h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              După vindecarea corespunzătoare, anumite persoane pot dori să
              discute despre proceduri estetice orientate către îmbunătățirea
              aspectului cicatricii. Atunci când situația o impune, așteptăm și
              evaluarea sau acordul medicului.
            </p>
            <CtaLink href="/contact">Discută cu noi despre cicatricea ta</CtaLink>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cand">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Momentul potrivit"
            title="La cât timp după cezariană se poate trata cicatricea?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Momentul potrivit nu trebuie stabilit doar după numărul de
              săptămâni sau luni trecute de la cezariană. Contează modul în care
              s-a vindecat zona, aspectul cicatricii, procedura avută în vedere
              și recomandările medicale atunci când sunt necesare.
            </p>
            <p>
              Nu publicăm un număr universal de săptămâni sau de luni. Ritmul
              de vindecare nu este același pentru fiecare persoană, iar o cifră
              generală nu ține loc de evaluare. Dacă ai primit o restricție de
              la medic, ea are prioritate față de orice programare în salon.
            </p>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/35 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Înainte de programare, spune-ne:
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-[#0E2B1F]">
              <li>când a avut loc cezariana</li>
              <li>dacă zona este complet vindecată</li>
              <li>dacă ai primit recomandări sau restricții medicale</li>
              <li>ce te deranjează la aspectul cicatricii</li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="ce-deranjeaza">
        <SectionHeading
          eyebrow="Aspect"
          title="Ce te deranjează la cicatrice?"
          description="Spune-ne ce vezi tu. Nu diagnosticăm tipul cicatricii dintr-o descriere."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((item) => (
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
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Dacă cicatricea este foarte reliefată, continuă să se modifice, este
          dureroasă sau există suspiciunea unui tip de cicatrice care necesită
          evaluare medicală, recomandăm evaluarea corespunzătoare înaintea unei
          proceduri estetice.
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="tehnologie">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Procedura din salon"
              title="Ce tratament folosim pentru aspectul cicatricii după cezariană?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                La Claire Beauty, tehnologia luată în calcul pentru aspectul
                unor cicatrici vindecate — inclusiv unele cicatrici după
                cezariană — este radiofrecvența fracționată. Folosește energie
                de radiofrecvență, aplicată controlat pe zona evaluată. Nu este
                laser.
              </p>
              <p>
                Obiectivul este estetic: îmbunătățirea aspectului cicatricii și
                remodelarea aspectului pielii, atunci când procedura este
                potrivită. Nu redeschidem cicatricea și nu lucrăm pe o plagă.
                Nu afirmăm că radiofrecvența schimbă automat culoarea sau că
                este indicată pentru orice cicatrice îngroșată.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href="/radiofrecventa-fractionata-craiova">
                Descoperă radiofrecvența fracționată
              </CtaLink>
            </div>
          </div>
          <article className="rounded-[2rem] border border-[#D4AF37]/25 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium-lg sm:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Radiofrecvență fracționată
            </p>
            <h3 className="mb-4 font-serif text-2xl font-semibold sm:text-3xl">
              Radiofrecvență fracționată pentru cicatricea după cezariană
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[#FFF9F2]/85 sm:text-base">
              <li>Tehnologia utilizată în salon pentru acest obiectiv estetic.</li>
              <li>Se discută doar după vindecarea corespunzătoare.</li>
              <li>Protocolul se stabilește individual, la evaluare.</li>
              <li>Nu înlocuiește sfatul medicului, când acesta este necesar.</li>
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="rezultat">
        <SectionHeading
          eyebrow="Așteptări"
          title="Poate dispărea complet cicatricea după cezariană?"
          description="Nu promitem dispariția completă a unei cicatrici. Scopul procedurilor estetice este îmbunătățirea aspectului cicatricii atunci când aceasta este potrivită pentru tratamentul disponibil."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-white p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce putem urmări
            </h3>
            <ul className="space-y-3 text-[#0E2B1F]/80">
              {[
                "reducerea vizibilității",
                "îmbunătățirea texturii",
                "aspect mai uniform",
                "îmbunătățirea estetică a zonei",
              ].map((item) => (
                <li key={item} className="flex min-h-11 items-center gap-3">
                  <span className="text-[#D4AF37]" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#0E2B1F]/10 bg-white p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce nu promitem
            </h3>
            <ul className="space-y-3 text-[#0E2B1F]/80">
              {[
                "dispariție 100%",
                "piele identică cu cea dinaintea operației",
                "rezultat garantat",
                "același rezultat pentru toate persoanele",
              ].map((item) => (
                <li key={item} className="flex min-h-11 items-center gap-3">
                  <span className="text-[#0E2B1F]/50" aria-hidden>
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cicatrice-veche">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Cicatrici mature"
            title="Se poate trata o cicatrice veche după cezariană?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Faptul că cicatricea este veche nu oferă singur răspunsul privind
              tratamentul. O cicatrice cezariană veche poate fi mai stabilă
              decât una recentă, dar vechimea nu spune cum arată țesutul, cât
              de diferită este de pielea din jur și dacă procedura din salon
              are sens pentru ea.
            </p>
            <p>
              Contează aspectul, caracteristicile pielii, procedura disponibilă
              și obiectivul realist. Tratamentul unei cicatrici vechi de
              cezariană se discută la evaluare, fără promisiunea că timpul
              trecut garantează o schimbare. Dacă zona încă se modifică sau te
              îngrijorează, medicul rămâne primul interlocutor.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="culoare">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Culoare"
            title="Ce fac dacă cicatricea are o culoare diferită?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              O cicatrice mai roșie, mai roz sau mai închisă la culoare decât
              pielea din jur ridică o întrebare de aspect, nu un diagnostic.
              Modificarea culorii și modificarea texturii nu sunt neapărat
              aceeași problemă. O urmă poate fi discretă la atingere și totuși
              vizibilă prin culoare, sau invers.
            </p>
            <p>
              Nu afirmăm că radiofrecvența fracționată tratează automat
              pigmentarea. Dacă principala problemă este culoarea, trebuie
              evaluat dacă procedura disponibilă este relevantă pentru zona ta.
              Uneori răspunsul onest este că serviciul din salon nu este cel
              potrivit pentru acel obiectiv.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="ingrosata">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Relief accentuat"
            title="Dar dacă cicatricea este îngroșată sau foarte reliefată?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Unele cicatrici reliefate necesită o evaluare diferită față de o
              cicatrice obișnuită. Dacă cicatricea este foarte îngroșată, se
              extinde, provoacă disconfort sau continuă să se modifice, este
              indicată evaluarea medicală înainte de a decide o procedură
              estetică.
            </p>
            <p>
              Nu diagnosticăm o cicatrice cheloidă doar din descrierea „este
              îngroșată” sau „este roșie”. Acești termeni pot descrie situații
              diferite. Salonul nu începe o procedură estetică atunci când zona
              pare să aibă nevoie de o părere medicală. Diferența este explicată
              pe pagina despre{" "}
              <Link href="/cicatrici-cheloide-craiova" className={linkClass}>
                cicatrici îngroșate și cheloide
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="vergeturi">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Două modificări diferite"
              title="Ai și vergeturi după sarcină?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Cicatricea de cezariană și vergeturile sunt două modificări
                diferite ale pielii și nu trebuie tratate automat prin același
                protocol. Vergeturile sunt linii de pe pielea care s-a întins.
                Cicatricea este urma lăsată de incizie, după ce s-a vindecat.
              </p>
              <p>
                Le putem discuta în aceeași evaluare, ca să nu amesteci
                obiectivele, dar nu promitem o singură ședință pentru ambele.
                Pentru{" "}
                <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
                  vergeturi după sarcină
                </Link>
                , contextul dedicat este separat de cicatrice. Pagina de
                ansamblu pentru toate tipurile rămâne cea de cicatrici și
                vergeturi.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href="/cicatrici-vergeturi-craiova">
                Vezi tratamentele pentru cicatrici și vergeturi
              </CtaLink>
            </div>
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-[1.75rem] shadow-premium-lg sm:min-h-[320px]">
            <ClaireImage
              {...claireImages.tratamenteCorporaleContent}
              alt="Atmosferă de îngrijire corporală la Claire Beauty Craiova"
              title="Cicatrici și vergeturi, discutate separat de cicatricea după cezariană"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="fermitate">
        <SectionHeading
          align="left"
          eyebrow="Nu este același obiectiv"
          title="Cicatricea și lipsa de fermitate a abdomenului sunt probleme diferite"
          description="După naștere, mai multe lucruri se pot schimba deodată. Merită separate, ca să ajungi la serviciul potrivit."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Cicatrice",
              text: "Aspectul țesutului cicatricial: linia, textura, relieful și vizibilitatea urmei. Este subiectul acestei pagini.",
            },
            {
              title: "Lipsă de fermitate",
              text: "Aspectul pielii abdominale, când pielea pare mai puțin susținută. Este alt obiectiv decât cicatricea.",
              href: "/piele-lasata-craiova",
              label: "Vezi pielea lăsată",
            },
            {
              title: "Vergeturi",
              text: "Modificări liniare ale pielii, diferite de cicatricea de cezariană.",
              href: "/cicatrici-vergeturi-craiova",
              label: "Vezi cicatrici și vergeturi",
            },
            {
              title: "Volum / greutate",
              text: "Alt obiectiv. O procedură pentru aspectul cicatricii nu este un program de slăbit și nu schimbă volumul abdomenului.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium"
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
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]" id="drenaj">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 font-serif text-3xl font-semibold sm:text-4xl">
            Cauți drenaj după operație, nu tratamentul cicatricii?
          </h2>
          <p className="text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Drenajul limfatic postoperator și tratamentul estetic al unei
            cicatrici sunt servicii diferite. Dacă ești în perioada
            postoperatorie și cauți drenaj, pagina potrivită este cea de drenaj,
            nu aceasta.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/drenaj-limfatic-post-operator-craiova"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 text-base font-semibold text-[#0E2B1F] sm:w-auto"
            >
              Vezi drenajul limfatic postoperator
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cum-procedam">
        <SectionHeading
          eyebrow="În salon"
          title="Cum procedăm la Claire Beauty?"
          description="Patru pași, fără diagnostic medical și fără un protocol copiat pentru toată lumea."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
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
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="sedinte">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Ritm" title="De câte ședințe este nevoie?" />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Nu există un număr fix publicat pentru cicatricea după
                cezariană. Numărul poate depinde de aspectul cicatricii, de
                vechime, de dimensiune, de procedura utilizată și de răspunsul
                individual.
              </p>
              <p>
                La evaluare putem vorbi despre un interval orientativ, doar
                după ce vedem zona. Un protocol „standard”, copiat de pe
                internet, nu ține loc de această discuție.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Timp"
              title="Când pot observa o schimbare?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Remodelarea aspectului cicatricii nu trebuie prezentată ca
                rezultat instantaneu. Schimbarea, atunci când apare, este
                treptată și diferă de la o persoană la alta. Nu publicăm un
                număr de zile sau de săptămâni valabil pentru toată lumea.
              </p>
              <p>
                Pentru felul în care este descrisă tehnologia, vezi pagina de{" "}
                <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                  radiofrecvență fracționată
                </Link>
                . Acolo rămâne explicația procedurii. Aici rămâne intenția:
                aspectul cicatricii după cezariană.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/30 bg-white/80 px-6 py-12 text-center shadow-premium-lg sm:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Lista salonului
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-4xl">
            Cât costă tratamentul cicatricii după cezariană în Craiova?
          </h2>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2B1F]/70">
            Radiofrecvență fracționată
          </p>
          <p className="mt-3 font-serif text-5xl font-semibold tracking-tight text-[#0E2B1F] sm:text-6xl">
            de la 1.000 lei
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
            / ședință / zonă
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            „De la” înseamnă preț de pornire. Poate varia în funcție de zona
            tratată. Nu este un tarif unic pentru orice suprafață. Înainte de
            programarea procedurii trebuie stabilit dacă zona este potrivită
            pentru tratament. Lista completă este pe pagina de{" "}
            <Link href="/preturi" className={linkClass}>
              prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${businessProfile.telephone}`}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-base font-semibold text-[#D4AF37] sm:w-auto"
            >
              Programează o evaluare
            </a>
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
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="de-ce">
        <SectionHeading
          eyebrow="Salon, nu clinică"
          title="De ce să alegi Claire Beauty?"
        />
        <ul className="mx-auto grid max-w-3xl gap-4">
          {[
            "Evaluare individuală, înainte de procedură.",
            "Protocol adaptat zonei și obiectivului realist.",
            "Tehnologie profesională: radiofrecvență fracționată, când este potrivită.",
            "Comunicare realistă: spunem și ce nu promitem.",
            "Salon în Craiova, pe Strada Principatele Unite nr. 5.",
          ].map((item) => (
            <li
              key={item}
              className="flex min-h-11 items-start gap-3 rounded-2xl border border-[#D4AF37]/15 bg-[#FFF9F2]/70 px-5 py-4 text-base leading-relaxed text-[#0E2B1F]"
            >
              <span className="mt-0.5 text-[#D4AF37]" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <SectionHeading
          eyebrow="Craiova, Dolj"
          title="Tratament pentru cicatrice după cezariană în Craiova"
          description="Ședința se face în salon, pe Strada Principatele Unite nr. 5, în Craiova, județul Dolj."
        />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="relative h-[280px] overflow-hidden rounded-[1.75rem] bg-card shadow-premium-lg sm:h-[360px]">
            <iframe
              src={businessProfile.googleMapsEmbedUrl}
              title="Hartă Claire Beauty Craiova — tratament pentru cicatrice după cezariană"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F]">
                <MapPin className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-foreground">
                  Claire Beauty
                </p>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {businessProfile.address.formatted}
                </p>
              </div>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Tratamentul pentru cicatrice după cezariană se discută la Claire
                Beauty, în Craiova. Salonul nu este o clinică și nu înlocuiește
                controlul medical al unei cicatrici. Persoanele din Craiova și
                din județul Dolj care vor să vorbească despre aspectul unei
                cicatrici deja vindecate — culoare, textură, relief sau
                vizibilitate — pot programa o evaluare aici, după ce zona s-a
                închis corespunzător.
              </p>
              <p>
                Din Centru, Craiovița Nouă, Brazda lui Novac, Rovine, 1 Mai,
                Valea Roșie, Lăpuș sau dinspre Parcul Romanescu și zona George
                Enescu, drumul duce în aceeași locație. Nu avem cabinete
                separate pe cartiere. Programarea se confirmă în salon, nu
                printr-un protocol trimis doar online.
              </p>
              <p>
                Căutarea unui tratament pentru cicatrice cezariană în Craiova
                pornește, de multe ori, de la o urmă rămasă vizibilă după
                naștere. Pe această pagină vorbim despre aspectul estetic al
                cicatricii vindecate. Pentru alte{" "}
                <Link
                  href="/cicatrici-vergeturi-craiova#cicatrici-postoperatorii"
                  className={linkClass}
                >
                  cicatrici postoperatorii
                </Link>
                , hub-ul rămâne pagina de cicatrici și vergeturi. Dacă ești încă în perioada de după operație și cauți
                drenaj, serviciul potrivit este{" "}
                <Link
                  href="/drenaj-limfatic-post-operator-craiova"
                  className={linkClass}
                >
                  drenajul limfatic postoperator
                </Link>
                . Dacă te preocupă vergeturile apărute după sarcină, mergi la{" "}
                <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
                  tratamentul vergeturilor apărute după sarcină
                </Link>
                . Dacă te preocupă fermitatea abdomenului, pagina este{" "}
                <Link href="/piele-lasata-craiova" className={linkClass}>
                  piele lăsată
                </Link>
                .
              </p>
              <p>
                Evaluarea se face în salon, privind zona, nu doar dintr-o
                fotografie. Spune dacă vii din Craiova sau din altă localitate
                din Dolj, când a avut loc cezariana și dacă pielea este închisă.
                Dacă ai și vergeturi sau te preocupă fermitatea abdomenului, le
                notăm separat, ca protocolul pentru cicatrice să nu fie amestecat
                cu un alt obiectiv.
              </p>
              <p>
                La evaluare spunem dacă radiofrecvența pentru cicatricea de
                cezariană poate fi luată în calcul. Prețul din lista salonului
                pornește de la 1000 lei pe ședință și pe zonă. Poți suna la{" "}
                <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                  {businessProfile.telephoneDisplay}
                </a>
                , scrie pe WhatsApp sau folosi pagina de contact. Programul este
                luni–vineri, 09:00–20:00, și sâmbătă, 10:00–16:00.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
      <RelatedTreatments
        description="Cicatricea de cezariană, vergeturile din sarcină și fermitatea abdomenului se discută separat."
        items={[
          {
            href: "/vergeturi-dupa-sarcina-craiova",
            title: "Vergeturi după sarcină",
            text: "Dacă te deranjează liniile apărute în sarcină, nu doar cicatricea.",
          },
          {
            href: "/vergeturi-rosii-albe-craiova",
            title: "Vergeturi roșii și albe",
            text: "Pagina despre culoarea și aspectul vergeturilor, indiferent de zona exactă.",
          },
          {
            href: "/radiofrecventa-fractionata-craiova",
            title: "Radiofrecvență fracționată în Craiova",
            text: "Tehnologia salonului pentru aspectul unei cicatrici vindecate, după evaluare.",
          },
          {
            href: "/cicatrici-cheloide-craiova",
            title: "Cicatrici cheloide",
            text: "Dacă cicatricea este îngroșată sau reliefată, conversația începe pe pagina dedicată.",
          },
          {
            href: "/piele-lasata-craiova",
            title: "Tratamente pentru pielea lăsată",
            text: "Fermitatea abdomenului nu este același obiectiv cu aspectul cicatricii.",
          },
        ]}
      />
    </>
  )
}
