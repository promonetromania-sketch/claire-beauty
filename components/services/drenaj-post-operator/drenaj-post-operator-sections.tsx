import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import {
  CalendarCheck,
  ClipboardList,
  MapPin,
  MessageCircle,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { ServiceCTA } from "@/components/services/service-cta"
import { businessProfile } from "@/lib/seo/business"
import {
  drenajGeneralPath,
  drenajPostOperatorWhatsappHref,
} from "@/lib/content/drenaj-post-operator"
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
        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function InfoCard({
  icon: Icon,
  kicker,
  title,
  children,
}: {
  icon?: ComponentType<{ className?: string }>
  kicker?: string
  title: string
  children: ReactNode
}) {
  return (
    <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
      {kicker ? (
        <p className="mb-3 font-serif text-sm font-semibold tracking-[0.16em] text-[#D4AF37]">
          {kicker}
        </p>
      ) : null}
      {Icon ? (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F]">
          <Icon className="h-7 w-7" />
        </div>
      ) : null}
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h3>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </article>
  )
}

const textLinkClass =
  "font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"

const primaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0E2B1F] px-8 text-sm font-semibold text-[#D4AF37] transition-colors hover:bg-[#0E2B1F]/90 sm:w-auto"

const secondaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white px-8 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/10 sm:w-auto"

const interventionCards = [
  {
    title: "După liposucție",
    body: "Persoanele caută frecvent drenaj limfatic ca parte a perioadei postoperatorii atunci când acesta este recomandat de medic. Nu îl prezentăm ca pas obligatoriu și nu stabilim noi ritmul recuperării.",
  },
  {
    title: "După lipoaspirație",
    body: "Căutarea pentru drenaj după lipoaspirație ține de același context: protocolul trebuie corelat cu indicațiile primite după intervenție, nu cu un calendar general al salonului.",
  },
  {
    title: "După intervenții estetice corporale",
    body: "Recomandarea depinde de tipul intervenției și de indicațiile medicului. Nu generalizăm și nu publicăm o listă de operații pe care salonul le-ar accepta automat.",
  },
  {
    title: "Alte situații postoperatorii",
    body: "Dacă situația ta nu se regăsește într-o formulare de mai sus, programarea se discută individual înainte de ședință, pornind de la ce ți-a spus medicul.",
  },
]

const approachCards = [
  {
    kicker: "01",
    title: "Tipul intervenției",
    icon: ClipboardList,
    body: "O ședință se pregătește diferit dacă știm despre ce intervenție este vorba. Fără această informație, drenajul postoperator nu poate fi tratat ca o programare obișnuită de îngrijire corporală.",
  },
  {
    kicker: "02",
    title: "Etapa recuperării",
    icon: CalendarCheck,
    body: "Contează unde ești în perioada de după intervenție. Aceeași persoană poate avea nevoie de o discuție diferită la începutul recuperării față de un moment ulterior, conform indicațiilor primite.",
  },
  {
    kicker: "03",
    title: "Recomandările medicului",
    icon: Stethoscope,
    body: "Indicațiile chirurgului sau ale medicului care urmărește recuperarea rămân reperul. Dacă există restricții, zone de evitat sau un moment de la care drenajul a fost sugerat, ele se comunică înainte de programare.",
  },
  {
    kicker: "04",
    title: "Situația individuală",
    icon: UserRound,
    body: "Două persoane cu intervenții asemănătoare nu pornesc automat din același punct. De aceea confirmăm contextul înainte să stabilim ședința, nu după un șablon unic.",
  },
]

const steps = [
  {
    kicker: "01",
    title: "Ne contactezi",
    body: "Ne spui ce intervenție ai avut și când. Un mesaj scurt pe WhatsApp sau o cerere de programare este suficient pentru a începe discuția.",
  },
  {
    kicker: "02",
    title: "Discutăm recomandările",
    body: "Dacă medicul ți-a oferit indicații pentru recuperare, este important să ni le comunici. Inclusiv atunci când ți s-a spus ce să eviți.",
  },
  {
    kicker: "03",
    title: "Stabilim programarea",
    body: "Confirmăm dacă serviciul poate fi programat în contextul respectiv. Dacă informațiile nu sunt suficiente, îți spunem ce mai avem nevoie înainte de ședință.",
  },
  {
    kicker: "04",
    title: "Ședința",
    body: "Procedura este adaptată situației și obiectivului stabilit împreună. Rămâne o îngrijire de salon, aliniată la ce ne-ai transmis despre recuperare.",
  },
]

export function DrenajPostOperatorSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Două intenții diferite"
          title="Drenajul postoperator nu este același lucru cu drenajul limfatic obișnuit"
          description="Cine caută drenaj după o intervenție are nevoie de o pagină care vorbește despre recuperare și despre recomandarea medicului. Pagina de drenaj limfatic în Craiova rămâne dedicată confortului și întreținerii."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Drenaj limfatic general">
            <p className="mb-4">
              Poate fi căutat de persoane interesate de:
            </p>
            <ul className="mb-6 space-y-2">
              {[
                "senzația de picioare grele",
                "retenție de lichide",
                "confort",
                "întreținere corporală",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#D4AF37]" aria-hidden>
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href={drenajGeneralPath} className={primaryCtaClass}>
              Vezi drenajul limfatic
            </Link>
          </InfoCard>
          <InfoCard title="Drenaj limfatic postoperator">
            <p>
              Se adresează contextului de recuperare după anumite intervenții și
              necesită o abordare adaptată situației persoanei și
              recomandărilor medicale. Informațiile despre intervenție se
              clarifică înainte de ședință, nu în timpul ei.
            </p>
          </InfoCard>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-[#0E2B1F]">
          Dacă ai ajuns aici după o intervenție, această pagină este cea
          relevantă pentru tine.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Contextul căutării"
          title="Drenaj limfatic după intervenții – când este căutat?"
          description="Mai jos sunt intențiile pe care le întâlnim cel mai des. Ele descriu de ce ajung oamenii pe această pagină, nu o listă de operații acceptate automat în salon."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {interventionCards.map((card) => (
            <InfoCard key={card.title} title={card.title}>
              <p>{card.body}</p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="După liposucție"
              title="Drenaj limfatic după liposucție în Craiova"
              description="Cine caută drenaj după liposucție Craiova, drenaj limfatic după liposucție sau masaj după liposucție vrea, de regulă, o îngrijire pentru perioada de după intervenție, nu un masaj de întreținere."
            />
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                După o intervenție, clienta trebuie să urmeze în primul rând
                indicațiile chirurgului sau ale medicului care îi urmărește
                recuperarea. Drenajul postoperator Craiova oferit la Claire
                Beauty se discută doar în acest cadru. Dacă medicul a recomandat
                drenaj, ne poți spune ce ți-a indicat și când a avut loc
                intervenția.
              </p>
              <p>
                Masajul după liposucție Craiova și drenajul după operație
                Craiova nu sunt, pe această pagină, formulări pentru un masaj
                corporal obișnuit. Masajul limfatic postoperator rămâne o
                ședință de îngrijire din salon. Nu înlocuiește controlul
                medical, pansamentele, medicația sau orice altă indicație pe
                care ai primit-o în afara salonului.
              </p>
              <p>
                Nu promitem un anumit ritm al recuperării și nu stabilim noi
                câte ședințe „trebuie” făcute după liposucție. Aceste lucruri
                țin de recomandarea pe care o ai deja sau pe care o clarifici
                cu medicul.
              </p>
            </div>
            <div className="mt-8">
              <p className="mb-4 font-serif text-xl font-semibold text-[#0E2B1F]">
                Ai recomandare pentru drenaj?
              </p>
              <a
                href={drenajPostOperatorWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClass}
              >
                Discută cu noi
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-premium-lg sm:aspect-[4/3] lg:aspect-[4/5]">
            <ClaireImage
              {...claireImages.masajRelaxare}
              alt="Ședință de îngrijire corporală calmă la Claire Beauty Craiova"
              title="Drenaj limfatic după liposucție în Craiova"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="De ce nu e un protocol unic"
          title="De ce drenajul postoperator necesită o abordare diferită?"
          description="Nu aplicăm automat același protocol tuturor persoanelor."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {approachCards.map((card) => (
            <InfoCard
              key={card.title}
              kicker={card.kicker}
              icon={card.icon}
              title={card.title}
            >
              <p>{card.body}</p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Momentul potrivit"
          title="Când se poate face drenaj limfatic după operație?"
          description="Momentul potrivit depinde de tipul intervenției, evoluția recuperării și indicațiile medicului. Dacă ai primit recomandarea pentru drenaj postoperator, spune-ne la programare când a avut loc intervenția și ce indicații ai primit."
        />
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/30 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
            Ai făcut recent o intervenție?
          </p>
          <p className="mb-4 text-lg font-medium text-[#0E2B1F]">
            Înainte de programare spune-ne:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "ce intervenție ai avut",
              "când a avut loc",
              "dacă medicul a recomandat drenaj",
              "dacă există indicații sau restricții specifice",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Programarea"
          title="Cum procedăm la Claire Beauty?"
          description="Pașii de mai jos țin de modul în care stabilim o ședință în salon. Nu descriu un protocol medical și nu înlocuiesc indicațiile pe care le ai deja."
        />
        <ol className="mx-auto grid max-w-4xl gap-4">
          {steps.map((step) => (
            <li
              key={step.kicker}
              className="grid gap-3 rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8"
            >
              <p className="font-serif text-3xl font-semibold text-[#D4AF37]">
                {step.kicker}
              </p>
              <div>
                <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Înainte să stabilești ora"
          title="Ce ne ajută să confirmăm programarea"
          description="Nu îți cerem un dosar medical și nu interpretăm documente în locul medicului. Ne ajută, în schimb, câteva informații clare, ca să nu tratăm cererea ca pe un masaj de întreținere."
        />
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Ce poți să ne spui
            </h3>
            <ul className="space-y-3 leading-relaxed text-muted-foreground">
              <li>cum se numește intervenția, așa cum ți-a fost explicată;</li>
              <li>data la care a avut loc;</li>
              <li>dacă medicul a recomandat drenaj și în ce termeni;</li>
              <li>dacă există zone sau gesturi de evitat;</li>
              <li>dacă ești încă în perioada controalelor stabilite de medic.</li>
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Ce se întâmplă dacă informația lipsește
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Dacă nu știi încă dacă drenajul a fost recomandat, îți spunem să
              clarifici mai întâi cu medicul. Nu completăm noi golul cu un
              calendar al salonului. Persoanele care caută masaj limfatic
              postoperator în Craiova primesc aceeași regulă: ședința se
              confirmă doar după context, inclusiv când formularea din căutare
              este drenaj limfatic post operator Craiova sau drenaj după
              operație Craiova.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          O recomandare verbală poate fi suficientă pentru discuție, dacă o
          poți reda clar. Nu publicăm pe site o listă de intervenții acceptate,
          pentru că decizia nu este una de catalog. Fiecare programare rămâne
          individuală.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Ce poți aștepta"
          title="Ce urmărește drenajul limfatic în perioada postoperatorie?"
          description="Ședința urmărește o îngrijire calmă, adaptată informațiilor pe care ni le dai despre intervenție și despre recomandările primite. Claire Beauty este un salon de înfrumusețare și îngrijire corporală, nu o clinică."
        />
        <div className="mx-auto grid max-w-4xl gap-6">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              O ședință discutată înainte, nu aplicată din rutină
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Scopul practic este să existe o programare în care știm contextul:
              tipul intervenției, timpul trecut de la ea și ce ți s-a recomandat.
              Drenajul limfatic post operator Craiova, în forma oferită aici, se
              oprește la îngrijirea de salon. Nu descriem efecte medicale și nu
              promitem un anumit ritm al recuperării. Aceste subiecte rămân la
              medicul care te urmărește.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold text-foreground">
              Claritate înainte de ședință
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Pentru multe persoane, partea importantă este să găsească în
              Craiova un loc care nu amestecă drenajul de după o intervenție cu
              drenajul pentru picioare grele. Dacă ai ajuns aici pentru retenție
              de lichide sau pentru întreținere, pagina potrivită este{" "}
              <Link href={drenajGeneralPath} className={textLinkClass}>
                drenaj limfatic în Craiova
              </Link>
              . Presoterapia cu aparat este un alt serviciu, pentru compresie
              și confort, și nu înlocuiește drenajul postoperator. Dacă ești
              după o intervenție, rămâi pe această pagină și spune-ne
              recomandările pe care le ai. Pagina de presoterapie este{" "}
              <Link href="/presoterapie-craiova" className={textLinkClass}>
                presoterapie în Craiova
              </Link>
              .
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#0E2B1F]/10 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium sm:p-8">
            <h3 className="mb-3 font-serif text-2xl font-semibold">
              Ce nu face această pagină
            </h3>
            <p className="leading-relaxed text-[#FFF9F2]/85">
              Nu prezentăm salonul ca unitate medicală. Îngrijirea de aici nu
              ține locul consultului și nu publicăm timpi universali de
              începere. Dacă nu ai o recomandare clară, discută mai întâi cu
              medicul. Apoi ne poți scrie ce ți s-a spus, ca să vedem dacă o
              ședință la Claire Beauty poate fi programată.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell id="pret" className="bg-secondary/40">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/25 bg-card px-6 py-10 text-center shadow-premium-lg sm:px-12 sm:py-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Preț ședință
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Drenaj limfatic postoperator
          </h2>
          <p className="mb-2 font-serif text-5xl font-semibold text-[#0E2B1F] sm:text-6xl">
            250 lei
          </p>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            / ședință
          </p>
          <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Înainte de prima programare discutăm situația și recomandările
            primite după intervenție.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            În lista de prețuri există și un abonament de 10 ședințe, 2000 lei.
            Este o opțiune de continuitate, nu un număr de ședințe stabilit de
            salon în locul medicului.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/contact" className={primaryCtaClass}>
              Programează o ședință
            </Link>
            <a
              href={drenajPostOperatorWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryCtaClass}
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Discută cu noi pe WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Ca să ajungi pe pagina potrivită"
          title="Drenaj general sau drenaj postoperator?"
          description="Cele două pagini răspund unor căutări diferite. Dacă intenția ta este după o intervenție, programarea se face de aici."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Drenaj general
            </h3>
            <ul className="mb-8 space-y-3 text-muted-foreground">
              {[
                "retenție de lichide",
                "picioare grele / confort",
                "wellness / întreținere",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#D4AF37]" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href={drenajGeneralPath} className={`${secondaryCtaClass} mt-auto`}>
              Vezi drenajul limfatic
            </Link>
          </article>
          <article className="flex flex-col rounded-[1.75rem] border border-[#0E2B1F]/15 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold">
              Drenaj postoperator
            </h3>
            <ul className="mb-8 space-y-3 text-[#FFF9F2]/85">
              {[
                "context după o intervenție",
                "recomandări specifice",
                "protocol individual",
                "atenție la etapa recuperării",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#D4AF37]" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-auto inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#D4AF37]/90 sm:w-auto"
            >
              Programare postoperatorie
            </Link>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Craiova, Dolj"
          title="Drenaj limfatic postoperator în Craiova"
          description="Ședința se face în salon, pe Strada Principatele Unite nr. 5, în Craiova, județul Dolj. Spune-ne din timp contextul intervenției, ca programarea să fie confirmată înainte să vii."
        />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="relative h-[280px] overflow-hidden rounded-[1.75rem] bg-card shadow-premium-lg sm:h-[360px]">
            <iframe
              src={businessProfile.googleMapsEmbedUrl}
              title="Hartă Claire Beauty Craiova — drenaj limfatic postoperator"
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
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Din Centru, Craiovița Nouă, Brazda lui Novac, Rovine, 1 Mai, Valea
              Roșie, Lăpuș, zona George Enescu sau dinspre Parcul Romanescu,
              drumul până la salon este scurt. Nu avem puncte de lucru separate
              pe cartiere: programarea pentru drenaj limfatic postoperator se
              face în această locație din Craiova.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Dacă vrei și alte servicii de îngrijire corporală din salon, le
              găsești în pagina de{" "}
              <Link href="/masaj-craiova" className={textLinkClass}>
                masaj în Craiova
              </Link>
              . Pentru perioada de după o intervenție, conversația rămâne pe
              drenajul postoperator, nu pe un pachet de remodelare. Prețul de
              250 lei pe ședință și detaliile de programare se confirmă direct
              cu salonul, după ce știm recomandările pe care le ai.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Claire Beauty nu deține cabinete în fiecare cartier al Craiovei.
              Oamenii din Dolj care caută acest serviciu vin în aceeași locație,
              cu programare. Dacă vii din afara orașului, merită să ne scrii
              înainte, ca să eviți un drum făcut fără ca situația să fi fost
              discutată.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${businessProfile.telephone}`}
                className={primaryCtaClass}
              >
                <Phone className="h-4 w-4" aria-hidden />
                {businessProfile.telephoneDisplay}
              </a>
              <a
                href={drenajPostOperatorWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryCtaClass}
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      <ServiceCTA
        title="Spune-ne ce intervenție ai avut"
        description="Programarea pentru drenaj limfatic postoperator în Craiova se confirmă după ce știm contextul și recomandările primite. Claire Beauty rămâne un salon de îngrijire, nu un înlocuitor al medicului."
      />
    </>
  )
}
