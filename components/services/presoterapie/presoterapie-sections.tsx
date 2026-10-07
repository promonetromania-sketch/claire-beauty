import type { ReactNode } from "react"
import Link from "next/link"
import { MapPin, MessageCircle, Phone } from "lucide-react"
import { businessProfile } from "@/lib/seo/business"
import {
  presoterapieDeviceName,
  presoterapiePriceLei,
  presoterapieWhatsappHref,
} from "@/lib/content/presoterapie"
import { cn } from "@/lib/utils"

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
    <section id={id} className={cn("overflow-x-clip py-16 sm:py-24", className)}>
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
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

const textLinkClass =
  "font-medium text-[#0E2B1F] underline decoration-[#D4AF37]/50 underline-offset-4 hover:text-[#D4AF37]"

const primaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 text-sm font-semibold text-[#D4AF37] transition-colors hover:bg-[#0E2B1F]/90 sm:w-auto"

const secondaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white px-8 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/10 sm:w-auto"

const steps = [
  {
    kicker: "01",
    title: "Pregătire",
    body: "Discutăm obiectivul și verificăm dacă procedura este potrivită.",
  },
  {
    kicker: "02",
    title: "Manșoanele",
    body: "Sunt poziționate manșoanele aparatului pe zonele prevăzute de protocol.",
  },
  {
    kicker: "03",
    title: "Compresia secvențială",
    body: "Aparatul aplică cicluri controlate de compresie.",
  },
  {
    kicker: "04",
    title: "Relaxare",
    body: "Procedura se desfășoară pasiv, în timp ce clienta se poate relaxa.",
  },
] as const

const reasonCards = [
  {
    kicker: "Senzație de picioare grele",
    title: "Pentru senzația de picioare grele și obosite",
    body: "După o zi lungă, unele persoane caută o ședință în care compresia controlată să aducă confort și o senzație de ușurare. Presoterapia este aleasă în acest context de wellness, nu ca tratament pentru o afecțiune a picioarelor.",
  },
  {
    kicker: "Retenție de apă",
    title: "Când te deranjează senzația de umflare",
    body: "Este limbajul folosit des de cliente. Presoterapia poate fi o procedură de drenaj și confort pentru această senzație. Umflarea inexplicabilă, unilaterală, dureroasă sau apărută brusc nu se tratează aici ca problemă estetică.",
  },
  {
    kicker: "Wellness",
    title: "Pentru relaxare și confort corporal",
    body: "Ședința este pasivă. Stai întinsă, iar aparatul parcurge ciclurile de compresie. Pentru multe persoane, motivul programării este pauza și senzația de corp mai ușor, nu un obiectiv medical.",
  },
] as const

export function PresoterapieSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Procedura"
            title="Ce este presoterapia?"
            description="Presoterapia utilizează manșoane speciale care aplică secvențial presiune, adică o compresie controlată, asupra anumitor zone ale corpului."
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              La Claire Beauty, serviciul din lista de tarife se numește{" "}
              {presoterapieDeviceName}. Uneori este căutat și ca pressoterapie
              în Craiova sau ca drenaj limfatic cu aparat. Este o procedură de
              salon, nu o consultație medicală și nu un masaj făcut cu mâinile.
            </p>
            <p>
              În timpul ședinței, manșoanele sunt poziționate pe zona prevăzută
              de protocol. Aparatul parcurge cicluri controlate de compresie.
              Persoana nu face efort: stă relaxată, iar procedura rămâne pasivă.
              Presiunea se păstrează în limitele protocolului și ale confortului
              individual.
            </p>
            <p>
              Experiența este diferită de un masaj. Nu există frământare și nu
              există contactul continuu al mâinilor pe tot parcursul ciclului.
              Clienta simte umflarea și eliberarea succesivă a manșoanelor, într-un
              ritm stabilit de aparat. De aceea presoterapia este căutată și ca
              drenaj limfatic cu aparat: compresia este mecanică, controlată și
              repetabilă, iar rolul echipei este să pregătească ședința și să
              urmărească confortul.
            </p>
            <p>
              Pagina aceasta nu promite detoxifiere medicală, vindecarea
              limfedemului sau tratarea unei boli. Claire Beauty este un salon.
              Presoterapia Starvac este o procedură de îngrijire corporală pentru
              persoanele care vor relaxare, drenaj și o senzație de picioare mai
              ușoare. Dacă simptomele cer un medic, o spunem înainte de programare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <SectionHeading
          eyebrow="Ședința"
          title="Cum funcționează o ședință de presoterapie?"
          description="Patru pași clari. Durata nu este publicată în tarife, așa că nu o aproximăm aici."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.kicker}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white p-6 shadow-premium"
            >
              <p className="font-serif text-sm font-semibold tracking-[0.16em] text-[#D4AF37]">
                {step.kicker}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Obiective"
          title="De ce aleg clientele presoterapia?"
          description="Folosim doar motive compatibile cu o procedură de compresie, relaxare și confort. Nu o prezentăm ca tratament medical."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {reasonCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                {card.kicker}
              </p>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Presoterapie picioare"
              title="Presoterapie pentru senzația de picioare grele"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                După perioade lungi în picioare, la birou sau cu activitate
                redusă, unele persoane descriu senzația de picioare grele sau
                obosite. Căutarea pentru presoterapie picioare pornește de aici:
                vor o procedură corporală de drenaj și o senzație de ușurare,
                fără să intre într-un cabinet medical.
              </p>
              <p>
                Presoterapia poate fi aleasă în acest context de wellness, pentru
                confort. Compresia controlată a manșoanelor este experiența
                ședinței. Nu spunem că procedura tratează varice, insuficiență
                venoasă, tromboză sau alte afecțiuni vasculare. Dacă disconfortul
                este medical, evaluarea aparține medicului.
              </p>
              <p>
                O zi tipică arată așa: dimineața la birou, după-amiaza tot pe
                scaun sau, dimpotrivă, ore în picioare în magazin, salon ori
                cabinet. Seara, gleznele par mai încărcate, pantofii strâng, iar
                picioarele sunt descrise ca grele, chiar dacă nu există un
                diagnostic. Presoterapia este aleasă în acest cadru, ca pauză de
                compresie și relaxare, nu ca înlocuitor al unui consult vascular.
              </p>
              <p>
                În Craiova, pagina aceasta este pentru presoterapie ca procedură
                cu aparat. Dacă vrei drenaj făcut manual, pagina potrivită este{" "}
                <Link href="/drenaj-limfatic-craiova" className={textLinkClass}>
                  drenajul limfatic
                </Link>
                .
              </p>
            </div>
          </div>
          <aside className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-white p-6 shadow-premium sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Ce descriu cliente
            </h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Picioare grele după o zi în picioare.</li>
              <li>Oboseală la nivelul picioarelor după stat la birou.</li>
              <li>Dorința de o ședință pasivă, de relaxare.</li>
              <li>Căutare de presoterapie sau pressoterapie în Craiova.</li>
            </ul>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Limbajul clientelor"
            title="Presoterapie și retenția de apă"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Presoterapia este frecvent aleasă de persoanele care descriu
              senzația de umflare sau retenție de apă și caută o procedură
              corporală de drenaj și confort. Nu afirmăm că presoterapia elimină
              retenția de apă și nu punem un diagnostic de edem.
            </p>
            <p>
              Umflarea persistentă, importantă, dureroasă sau apărută fără o
              cauză evidentă trebuie evaluată medical. Același lucru este valabil
              dacă umflarea este doar pe un picior sau a apărut brusc. În aceste
              situații, o ședință de wellness nu este primul pas.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="presoterapie-sau-drenaj">
        <SectionHeading
          eyebrow="Nu este același serviciu"
          title="Presoterapie sau drenaj limfatic manual?"
          description="Una dintre cele mai frecvente confuzii. Răspunsul scurt: nu sunt același serviciu."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Presoterapie
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold">Cu aparat</h3>
            <ul className="mt-5 space-y-3 text-[#FFF9F2]/90">
              <li>Realizată cu aparat.</li>
              <li>Compresie controlată.</li>
              <li>Experiență pasivă.</li>
              <li>Protocol specific aparatului.</li>
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white p-6 shadow-premium sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Drenaj limfatic manual
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
              Cu mâinile
            </h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Realizat manual.</li>
              <li>Tehnică de masaj și drenaj.</li>
              <li>Contact direct.</li>
              <li>Protocol diferit.</li>
            </ul>
          </article>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center leading-relaxed text-muted-foreground">
          <p className="text-lg font-semibold text-[#0E2B1F]">
            Nu sunt același serviciu.
          </p>
          <p>
            Alege presoterapia când vrei o ședință pasivă, cu compresie controlată
            și un preț de {presoterapiePriceLei} lei. Alege drenajul limfatic
            manual când vrei tehnică făcută cu mâinile și contact direct. Dacă
            ești după o operație, niciuna dintre aceste două pagini nu stabilește
            protocolul: acolo contează recomandarea medicului și serviciul
            postoperator, descris separat.
          </p>
          <p>
            Separarea ajută și căutarea. „Drenaj limfatic Craiova” rămâne la
            pagina de drenaj manual. „Drenaj limfatic postoperator Craiova” rămâne
            la pagina de după intervenție. Aici rămân presoterapie Craiova,
            pressoterapie și drenajul făcut cu aparat.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/drenaj-limfatic-craiova" className={primaryCtaClass}>
            Vezi drenajul limfatic manual
          </Link>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="presoterapie-sau-postoperator">
        <SectionHeading
          eyebrow="Context diferit"
          title="Presoterapia este același lucru cu drenajul postoperator?"
        />
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#0E2B1F]/10 bg-[#0E2B1F] px-6 py-8 text-center text-[#FFF9F2] shadow-premium sm:px-10">
          <p className="font-serif text-5xl font-semibold text-[#D4AF37] sm:text-6xl">Nu.</p>
          <p className="mt-4 text-base leading-relaxed text-[#FFF9F2]/90 sm:text-lg">
            Drenajul limfatic postoperator este un serviciu separat, realizat
            într-un context diferit și cu alte considerente privind momentul și
            protocolul. Presoterapia nu se propune automat după liposucție,
            abdominoplastie sau alte operații. Orice utilizare după o intervenție
            trebuie să respecte recomandarea și protocolul corespunzător, nu
            această pagină.
          </p>
          <Link
            href="/drenaj-limfatic-post-operator-craiova"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#D4AF37]/70 px-8 text-sm font-semibold text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10 sm:w-auto"
          >
            Vezi drenajul limfatic postoperator
          </Link>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Presoterapia este tratament anticelulitic?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nu. Nu spunem că presoterapia elimină celulita. Persoanele
              interesate de aspectul celulitei pot avea nevoie de alte proceduri
              sau protocoale corporale. Presoterapia rămâne o ședință de
              compresie, drenaj și confort.
            </p>
            <Link href="/masaj-anticelulitic-craiova" className={`${primaryCtaClass} mt-6`}>
              Vezi masajul anticelulitic
            </Link>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Presoterapia ajută la slăbit?
            </h2>
            <p className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Presoterapie
              <span className="mx-3 text-[#D4AF37]">≠</span>
              slăbire
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Presoterapia nu trebuie prezentată ca metodă de slăbire. Nu promitem
              pierdere de kilograme, arderea grăsimii, reducerea permanentă a
              circumferinței sau slăbire fără efort. Dacă obiectivul este
              remodelarea corporală, pagina relevantă este{" "}
              <Link href="/remodelare-corporala-craiova" className={textLinkClass}>
                remodelarea corporală în Craiova
              </Link>
              .
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Cum se simte presoterapia?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Clienta poate simți ciclurile succesive de compresie ale
              manșoanelor. Nu spunem că este complet nedureroasă pentru toată
              lumea. Presiunea trebuie să rămână în limitele protocolului și ale
              confortului individual. Dacă senzația nu este confortabilă, se
              spune în timpul ședinței. Hainele lejere ajută, iar după ședință
              poți pleca fără un timp de recuperare publicat în protocol. Nu
              descriem roșeață, vânătăi sau un efect de a doua zi, pentru că
              aceste detalii nu sunt documentate pentru aparatul din salon.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Pe ce zone se face presoterapia?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lista de servicii menționează {presoterapieDeviceName}, fără o
              enumerare publică a manșoanelor. Nu publicăm picioare, abdomen,
              brațe sau alte zone ca și cum ar fi confirmate, pentru că această
              configurație nu este scrisă în materialele salonului. Zonele sunt
              cele prevăzute de protocol și se stabilesc la programare. Căutarea
              pentru presoterapie picioare, pe această pagină, ține de senzația
              de picioare grele, nu de o listă de zone inventată.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Cât durează o ședință de presoterapie?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Durata ședinței este stabilită conform protocolului utilizat la
              Claire Beauty. Nu este trecută în lista de tarife, așa că nu
              publicăm un număr de minute. La programare îți spunem cât este
              rezervat pentru ședința ta, în funcție de protocol, nu după o
              durată generală copiată de pe internet.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              O ședință sau un abonament?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Frecvența depinde de obiectiv și de protocol. Ședința individuală
              de {presoterapieDeviceName} costă {presoterapiePriceLei} lei. În
              aceeași categorie de tarife există un abonament de 10 ședințe, la
              600 lei, pentru terapii corporale, dar nu este etichetat ca pachet
              de presoterapie. Nu îl vindem aici ca abonament al acestei
              proceduri. Pentru combinații sau pachete, verifică{" "}
              <Link href="/preturi#pachete-terapii" className={textLinkClass}>
                tarifele actuale
              </Link>
              .
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-white p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Când trebuie să ne spui înainte de programare?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Înainte de programare, spune-ne dacă ai afecțiuni medicale,
              probleme circulatorii, ești însărcinată, ai trecut recent printr-o
              intervenție sau urmezi un tratament medical relevant.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Eligibilitatea se stabilește conform contraindicațiilor procedurii
              și, unde este necesar, recomandării medicale. Nu promitem că
              presoterapia este potrivită pentru oricine.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/30 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Când presoterapia nu trebuie să fie primul pas
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Dacă apare una dintre situațiile de mai jos, o procedură wellness
              nu este soluția. Recomandarea este evaluarea medicală.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Umflare bruscă.</li>
              <li>Umflare importantă pe un singur picior.</li>
              <li>Durere neobișnuită.</li>
              <li>Roșeață sau căldură locală importantă.</li>
              <li>Simptome apărute recent, fără o explicație clară.</li>
            </ul>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Alte obiective"
            title="Presoterapia poate face parte dintr-un program corporal?"
          />
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              În materialele Claire Beauty, presoterapia este tarifată ca ședință
              separată. Nu este documentată ca parte dintr-un protocol combinat
              cu masaj anticelulitic, radiofrecvență sau remodelare. De aceea nu
              o prezentăm ca etapă automată a unui program corporal.
            </p>
            <p>
              Dacă obiectivul tău este altul, există pagini dedicate:{" "}
              <Link href="/masaj-anticelulitic-craiova" className={textLinkClass}>
                masaj anticelulitic
              </Link>
              ,{" "}
              <Link href="/remodelare-corporala-craiova" className={textLinkClass}>
                remodelare corporală
              </Link>{" "}
              și{" "}
              <Link href="/drenaj-limfatic-craiova" className={textLinkClass}>
                drenaj limfatic manual
              </Link>
              . După o intervenție, pagina corectă este{" "}
              <Link
                href="/drenaj-limfatic-post-operator-craiova"
                className={textLinkClass}
              >
                drenajul limfatic postoperator
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Pe scurt"
            title="Ce pagină ți se potrivește?"
          />
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Dacă vrei compresie cu aparat, o ședință în care stai relaxată și
              cauți senzația de picioare mai ușoare, rămâi aici. Presoterapia
              Starvac este serviciul de 80 lei din lista de terapii corporale.
              Nu este nevoie să alegi un pachet ca să programezi o ședință.
            </p>
            <p>
              Dacă vrei ca drenajul să fie făcut de terapeut, cu mâinile, mergi
              la drenajul limfatic manual. Tehnica, contactul și protocolul sunt
              altele. Mulți oameni folosesc aceleași cuvinte — picioare grele,
              umflare, retenție de apă — pentru ambele servicii. Diferența practică
              este aparatul față de masajul manual.
            </p>
            <p>
              Dacă ai avut recent o intervenție și cauți îngrijire pentru
              perioada de după, nu porni de la presoterapie. Drenajul postoperator
              se discută separat, în funcție de ce ți-a recomandat medicul. O
              ședință de compresie pentru confort nu se transformă, pe această
              pagină, într-un protocol de recuperare.
            </p>
            <p>
              Dacă te interesează aspectul celulitei, masajul anticelulitic este
              pagina de obiectiv. Dacă vrei contur corporal, radiofrecvență,
              electrostimulare sau alte proceduri de remodelare, acelea au
              propriile descrieri și prețuri. Presoterapia nu le înlocuiește și
              nu este vândută aici ca metodă de slăbire.
            </p>
            <p>
              Înainte de a scrie pe WhatsApp, un mesaj scurt este suficient:
              vrei presoterapie pentru senzația de picioare grele, spui dacă ești
              însărcinată, dacă ai o problemă circulatorie cunoscută sau dacă ai
              trecut recent printr-o operație. Din răspuns se vede dacă ședința
              poate fi programată sau dacă este mai potrivit un alt serviciu, ori
              o evaluare medicală.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="pret" className="bg-[#FFF9F2]">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[#D4AF37]/25 bg-white px-6 py-10 text-center shadow-premium-lg sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Cât costă presoterapia în Craiova?
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
            Presoterapie
          </h2>
          <p className="mt-6 font-serif text-6xl font-semibold leading-none text-[#0E2B1F]">
            {presoterapiePriceLei}
            <span className="ml-2 text-3xl text-[#D4AF37]">lei</span>
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
            / ședință
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {presoterapieDeviceName}, conform listei actuale de tarife. Pentru
            pachete sau combinații cu alte proceduri, verifică tarifele actuale
            Claire Beauty. Abonamentul de 10 ședințe din categoria terapiilor
            corporale nu este legat explicit de presoterapie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact" className={primaryCtaClass}>
              Programează o ședință
            </Link>
            <Link href="/preturi#pachete-terapii" className={secondaryCtaClass}>
              Vezi tarifele
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Salonul"
          title="Presoterapie la Claire Beauty Craiova"
        />
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "Protocol discutat individual, înainte de ședință.",
            `Aparat profesional: ${presoterapieDeviceName}.`,
            "Atmosferă de salon premium, orientată spre relaxare.",
            "Locație în Craiova, pe Strada Principatele Unite nr. 5.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[#D4AF37]/15 bg-[#FFF9F2] px-5 py-4 leading-relaxed text-foreground shadow-premium"
            >
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="locatie">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Craiova"
              title="Presoterapie în Craiova"
            />
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Dacă cauți presoterapie în Craiova, Claire Beauty oferă ședința
                cu {presoterapieDeviceName}, la {presoterapiePriceLei} lei.
                Presoterapia preț este afișată clar: o ședință, fără un pachet
                inventat. Salonul este pe Strada Principatele Unite nr. 5, în
                Craiova, județul Dolj.
              </p>
              <p>
                Procedura este căutată de persoane care vor drenaj cu aparat,
                relaxare și o senzație de picioare mai ușoare după zile lungi în
                picioare sau la birou. Pe site o găsești și sub formularea
                pressoterapie Craiova. Este compresie controlată, nu drenaj
                limfatic făcut manual și nu drenajul folosit în context
                postoperator.
              </p>
              <p>
                Pentru senzația de picioare grele, presoterapia rămâne o alegere
                de confort. Nu înlocuiește un control medical atunci când
                umflarea este bruscă, dureroasă sau doar pe un picior. Dacă
                obiectivul tău este aspectul celulitei sau conturul corporal,
                paginile de masaj anticelulitic și de remodelare descriu alte
                proceduri. Aici rămânem la presoterapie: aparat, compresie,
                relaxare.
              </p>
              <p>
                Programarea se face din Craiova și din localitățile din jur, în
                Dolj. Spune-ne obiectivul înainte de ședință, ca să vedem dacă
                presoterapia este potrivită. Telefonul și WhatsApp-ul sunt pe
                această pagină, iar adresa exactă este Strada Principatele Unite
                nr. 5.
              </p>
              <p>
                La programare este util să spui dacă vrei o singură ședință de
                confort sau dacă ai mai făcut presoterapie în altă parte. Nu
                comparăm aparate și nu promitem că senzația va fi identică de la
                o persoană la alta. Prețul afișat, {presoterapiePriceLei} lei pe
                ședință, este cel din lista Claire Beauty pentru Presoterapie
                Starvac. Durata și zonele se confirmă în salon, pentru că nu sunt
                publicate separat în tarife.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-white shadow-premium-lg">
            <div className="relative h-[280px] sm:h-[340px]">
              <iframe
                src={businessProfile.googleMapsEmbedUrl}
                title="Hartă Claire Beauty Craiova"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <div>
                  <p className="font-serif text-xl font-semibold text-foreground">
                    {businessProfile.name}
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    {businessProfile.address.formatted}
                  </p>
                </div>
              </div>
              <a
                href={`tel:${businessProfile.telephone}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {businessProfile.telephoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Claire Beauty Craiova
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#FFF9F2] sm:text-5xl">
            Vrei să încerci presoterapia?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Dacă te deranjează senzația de picioare grele sau cauți o procedură
            corporală de drenaj și relaxare, discută cu echipa Claire Beauty
            pentru a vedea dacă presoterapia este potrivită pentru tine.
          </p>
          <p className="mt-6 font-serif text-4xl font-semibold text-[#D4AF37]">
            {presoterapiePriceLei} lei / ședință
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/90 sm:w-auto"
            >
              Programează presoterapie
            </Link>
            <a
              href={presoterapieWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/70 px-8 text-sm font-semibold text-[#FFF9F2] transition-colors hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
