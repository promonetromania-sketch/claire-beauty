import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import {
  Check,
  MapPin,
  MessageCircle,
  X,
} from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { businessProfile } from "@/lib/seo/business"
import { hifuCorporalWhatsappMessage, hifuCorporalZones } from "@/lib/content/hifu-corporal"
import { claireImages } from "@/lib/images/claire-beauty"
import { cn } from "@/lib/utils"

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(hifuCorporalWhatsappMessage)}`

const linkClass =
  "font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"

function SectionShell({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  as?: "h2" | "h3"
}) {
  const TitleTag = as
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
      <TitleTag className="mb-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  children: ReactNode
}) {
  return (
    <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium backdrop-blur-sm sm:p-8">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{title}</h3>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </article>
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
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto"
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

const suitable = [
  {
    title: "Fermitate",
    text: "Piele care și-a pierdut din aspectul ferm și pentru care se caută o procedură orientată spre susținerea țesutului, nu spre cântar.",
  },
  {
    title: "Tonifiere vizuală",
    text: "Persoane care urmăresc un aspect corporal mai tonifiat, în zone în care pielea pare mai moale decât și-ar dori.",
  },
  {
    title: "După modificări corporale",
    text: "Atunci când pielea și-a schimbat aspectul după variații corporale și obiectivul rămas este fermitatea, nu continuarea slăbirii.",
  },
  {
    title: "Menținerea conturului",
    text: "Pentru persoane interesate de proceduri estetice non-chirurgicale, orientate spre aspectul corporal și spre un contur mai bine susținut.",
  },
  {
    title: "O zonă anume",
    text: "Când nemulțumirea este localizată — abdomen, brațe, coapse sau o altă zonă corporală — și se dorește o discuție punctuală, nu un program general de slăbit.",
  },
  {
    title: "Așteptări aliniate",
    text: "Pentru cine acceptă că evoluția este individuală și că tratamentul se recomandă doar dacă obiectivul estetic se potrivește cu ceea ce poate urmări procedura.",
  },
]

const canHelp = [
  "aspectul pielii cu fermitate redusă",
  "îmbunătățirea aspectului corporal",
  "zone care par mai puțin tonifiate",
  "susținerea unui aspect mai ferm și conturat",
]

const cannotBe = [
  "metodă de slăbit",
  "program pentru pierderea kilogramelor",
  "înlocuitor pentru alimentație echilibrată",
  "înlocuitor pentru mișcare",
  "tratament pentru obezitate",
]

const steps = [
  {
    title: "Ultrasunete focalizate",
    text: "Energia este concentrată pe zona corporală stabilită, sub forma unor ultrasunete focalizate. Scopul este lucrul asupra aspectului pielii, nu asupra greutății.",
  },
  {
    title: "Energie direcționată controlat",
    text: "Aplicarea se face pe zona convenită la evaluare. Nu publicăm adâncimi, frecvențe sau puteri de aparat: protocolul se explică în salon, pentru zona ta.",
  },
  {
    title: "Răspunsul țesutului",
    text: "Se urmărește un proces de remodelare a aspectului. Evoluția este individuală. Nu descriem un efect biologic specific al unui model de aparat, pentru că acești parametri nu sunt documentați public pe site.",
  },
]

const session = [
  {
    n: "01",
    title: "Evaluarea inițială",
    text: "Discutăm zona și obiectivul estetic. Dacă așteptarea este să slăbești un număr de kilograme, o spunem din start: HIFU corporal nu este serviciul pentru acel scop.",
  },
  {
    n: "02",
    title: "Stabilirea protocolului",
    text: "Procedura este adaptată zonei și particularităților individuale. Nu există un șablon unic afișat ca valabil pentru orice corp.",
  },
  {
    n: "03",
    title: "Tratamentul HIFU",
    text: "Se lucrează pe zona stabilită. Durata și senzația se explică înainte, în funcție de zonă, nu printr-o promisiune generală.",
  },
  {
    n: "04",
    title: "Recomandări",
    text: "Clienta primește recomandările relevante după procedură. Ele țin de zona tratată și de ceea ce s-a discutat la evaluare.",
  },
]

const objectives = [
  {
    goal: "Vreau mai multă fermitate",
    text: "HIFU corporal poate fi discutat la evaluare, dacă obiectivul este aspectul pielii și nu scăderea în greutate.",
    href: "/contact",
    label: "Programează o evaluare",
  },
  {
    goal: "Principala mea problemă este aspectul celulitei",
    text: "Masajul anticelulitic este serviciul construit pentru textura de celulită. HIFU nu este prezentat ca înlocuitor al lui.",
    href: "/masaj-anticelulitic-craiova",
    label: "Masaj anticelulitic în Craiova",
  },
  {
    goal: "Am vergeturi sau cicatrici",
    text: "Vergeturile și cicatricile au o pagină proprie. Nu le tratăm aici ca și cum ar fi același lucru cu fermitatea prin HIFU.",
    href: "/cicatrici-vergeturi-craiova",
    label: "Cicatrici și vergeturi",
  },
  {
    goal: "Vreau masaj și întreținere corporală",
    text: "Pentru manevre manuale, circulație și întreținerea aspectului de celulită, pagina de masaj anticelulitic este reperul potrivit.",
    href: "/masaj-anticelulitic-craiova",
    label: "Vezi masajul anticelulitic",
  },
  {
    goal: "Mă interesează aspectul unei zone localizate",
    text: "Cavitația este o procedură corporală separată. HIFU rămâne discuția de fermitate, nu de volum localizat.",
    href: "/cavitatie-craiova",
    label: "Cavitație corporală",
  },
  {
    goal: "Vreau fermitate și prin alte tehnologii corporale",
    text: "Radiofrecvența corporală este o altă discuție de fermitate. Alegerea nu înseamnă că un tratament este automat mai bun.",
    href: "/radiofrecventa-corporala-craiova",
    label: "Radiofrecvență corporală",
  },
  {
    goal: "Vreau tonifiere musculară",
    text: "Electrostimularea lucrează pe contracție musculară. Nu este același obiectiv cu fermitatea pielii prin HIFU.",
    href: "/electrostimulare-craiova",
    label: "Electrostimulare",
  },
]

export function HifuCorporalSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pe înțelesul tău"
              title="Ce este HIFU corporal?"
              description="HIFU înseamnă High-Intensity Focused Ultrasound: ultrasunete de intensitate mare, focalizate pe o zonă."
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Dacă ai căutat{" "}
                <strong className="font-medium text-foreground">HIFU Craiova</strong>{" "}
                și te interesează corpul, nu fața, această pagină este locul
                potrivit. La Claire Beauty, tratamentul HIFU Craiova în variantă
                corporală este un serviciu estetic pentru fermitatea pielii.
                Energia este direcționată pe zona convenită, cu scopul de a
                susține un aspect mai ferm și mai bine conturat.
              </p>
              <p>
                Principiul general este ușor de reținut: ultrasunetele sunt
                concentrate, nu împrăștiate pe toată suprafața ca un masaj.
                Se lucrează pe zona aleasă — de exemplu abdomen sau coapse —
                iar obiectivul rămâne aspectul pielii. Nu este nevoie să
                citești un manual ca să înțelegi ce cumperi: cumperi o
                procedură de fermitate, discutată înainte, nu un program de
                slăbit.
              </p>
              <p>
                Un{" "}
                <strong className="font-medium text-foreground">
                  tratament HIFU Craiova
                </strong>{" "}
                pentru corp se numește aici HIFU corp sau tratament corporal
                HIFU. Formulările descriu același serviciu: ultrasunete
                focalizate aplicate pe zone corporale. Nu includem față,
                bărbie, gât sau mandibulă. Pentru lifting facial există o
                pagină separată, ca intențiile să nu se amestece.
              </p>
              <p>
                Nu publicăm adâncimea cartușelor, frecvențe, temperaturi, număr
                de linii sau modelul aparatului. Aceste detalii nu sunt
                documentate în materialele publice ale salonului și nu le
                inventăm. La evaluare ți se explică cum se lucrează pe zona
                ta, cu așteptări realiste.
              </p>
              <p>
                O confuzie frecventă vine din faptul că același cuvânt, HIFU,
                este folosit și pentru față. Aici vorbim doar despre corp.
                Clienta care vrea un aspect mai ferm al abdomenului, al
                brațelor sau al coapselor nu caută același lucru cu cineva
                care vrea lifting facial. De aceea pagina are un singur
                subiect: tratament corporal HIFU, pentru fermitatea pielii.
              </p>
              <p>
                În practică, discuția din salon sună simplu. Spui zona care te
                nemulțumește și ce vrei să se schimbe la aspect: să pară mai
                fermă, mai susținută, mai conturată. Nu este nevoie să vii cu
                un diagnostic sau cu un plan de slăbire. Dacă obiectivul tău
                principal este greutatea, îți spunem că există alte căi — și
                că HIFU corporal nu este una dintre ele.
              </p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 shadow-premium-lg">
            <ClaireImage
              {...claireImages.hifuCorporal}
              alt="Ședință de tratament HIFU corporal pe o zonă a corpului, la Claire Beauty Craiova"
              objectPosition="center 18%"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <SectionHeading
          eyebrow="Mesajul paginii"
          title="HIFU corporal înseamnă fermitate, nu slăbire"
          description="Acesta este criteriul după care merită să te programezi. Dacă așteptarea este alta, o spunem înainte de procedură."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[#D4AF37]/25 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-6 font-serif text-2xl font-semibold text-[#0E2B1F]">
              HIFU poate fi ales pentru
            </h3>
            <ul className="space-y-4">
              {canHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-[#0E2B1F]/15 bg-[#0E2B1F] p-6 text-[#FFF9F2] shadow-premium sm:p-8">
            <h3 className="mb-6 font-serif text-2xl font-semibold text-[#D4AF37]">
              HIFU nu este
            </h3>
            <ul className="space-y-4">
              {cannotBe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                  <span className="text-[#FFF9F2]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          Dacă obiectivul principal este scăderea în greutate, HIFU corporal nu
          trebuie prezentat ca soluția pentru acel obiectiv. La Claire Beauty,
          procedura este recomandată persoanelor pentru care obiectivul estetic
          este compatibil cu ceea ce poate urmări tratamentul.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold text-[#D4AF37] sm:w-auto"
          >
            Discută cu noi despre obiectivul tău
          </Link>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Potrivire"
          title="Când poate fi luat în calcul HIFU corporal?"
          description="Exemple de intenții estetice, nu indicații medicale. Decizia se ia după evaluarea zonei."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {suitable.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8"
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
          eyebrow="Doar corp"
          title="Ce zone pot fi tratate cu HIFU corporal?"
          description="Lista de mai jos urmează zonele corporale pentru care salonul pregătește acest serviciu. Zona exactă se confirmă la evaluare."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hifuCorporalZones.map((zone) => (
            <article
              key={zone.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0E2B1F]">
                {zone.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{zone.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Fața, bărbia, gâtul și mandibula nu sunt pe această pagină. Ele țin
          de serviciul facial, descris separat, ca să rămână clar că HIFU
          corporal înseamnă corp.
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Separare clară"
            title="HIFU corporal și HIFU facial nu sunt același serviciu"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Această pagină este dedicată exclusiv procedurilor corporale.
              Caută fermitate piele Craiova în sens corporal: abdomen, brațe,
              coapse și celelalte zone de mai sus. Nu optimizăm textul pentru
              lifting facial, riduri sau conturul feței.
            </p>
            <p>
              HIFU facial este alt serviciu, cu altă intenție. Dacă te
              interesează fața, pagina corectă este{" "}
              <Link href="/hifu-facial-craiova" className={linkClass}>
                HIFU facial în Craiova
              </Link>
              . Nu duplicăm aici explicațiile despre obraji, mandibulă sau
              rejuvenare facială.
            </p>
            <p>
              Separarea ajută și la programare. Spui din mesaj dacă vrei corp
              sau față, iar evaluarea pornește de la zona reală, nu de la un
              termen generic.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <SectionHeading
          eyebrow="Principiu"
          title="Cum funcționează HIFU corporal?"
          description="Trei idei, fără parametri tehnici inventați."
        />
        <ol className="mx-auto grid max-w-3xl gap-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                  Pasul {index + 1}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-[#0E2B1F]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
              {index < steps.length - 1 ? (
                <p className="py-2 text-center text-2xl text-[#D4AF37]" aria-hidden>
                  ↓
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="În salon"
          title="Cum decurge o ședință"
          description="Patru momente, de la discuția despre obiectiv până la recomandările de după procedură."
        />
        <ol className="grid gap-6 md:grid-cols-2">
          {session.map((item) => (
            <li
              key={item.n}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8"
            >
              <p className="mb-3 font-serif text-3xl font-semibold text-[#D4AF37]">
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

      <SectionShell className="bg-[#FFF9F2]">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Înainte de vizită"
            title="Ce clarifici la evaluarea pentru HIFU corporal"
            description="Câteva lucruri concrete, ca programarea să pornească de la obiectivul real."
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Evaluarea nu este un formular lung. Este conversația în care
              stabilim dacă tratamentul HIFU din Craiova, pe corp, are sens
              pentru tine. Prima informație utilă este zona: abdomen, flancuri,
              brațe, interiorul coapselor, genunchi sau fesieri. A doua este
              obiectivul, spus în cuvinte simple. „Vreau ca pielea să pară mai
              fermă” este un obiectiv compatibil cu pagina aceasta. „Vreau să
              scad în greutate” nu este.
            </p>
            <p>
              Merită să spui și dacă ai mai făcut proceduri corporale — masaj,
              radiofrecvență, electrostimulare — și ce ai urmărit atunci.
              Nu ca să combinăm automat totul în aceeași zi, ci ca să nu
              repetăm un serviciu care rezolvă altceva. Celulita, vergeturile
              și tonusul muscular au pagini proprii. Fermitatea pielii rămâne
              subiectul HIFU corporal.
            </p>
            <p>
              Nu îți cerem măsurători de dinainte și nu construim așteptarea
              în centimetri. La evaluare se explică ce se poate urmări pe zona
              aleasă și ce rămâne în afara procedurii. Dacă zona sau istoricul
              tău fac tratamentul nepotrivit, o spunem. Mai bine o programare
              scurtă și o recomandare onestă decât o ședință cu o așteptare
              greșită.
            </p>
            <p>
              Poți scrie înainte pe WhatsApp zona și obiectivul, ca să știi
              că ai ajuns pe serviciul corporal. Numărul salonului este{" "}
              <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                {businessProfile.telephoneDisplay}
              </a>
              . Adresa este Strada Principatele Unite nr. 5, Craiova.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Așteptări"
            title="La ce rezultate te poți aștepta?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Obiectivul este fermitatea, aspectul și conturul pielii. Se
              urmărește o îmbunătățire a zonelor cu laxitate și un aspect mai
              tonifiat. Tratamentul poate contribui la remodelarea aspectului
              corporal. Nu urmărim kilograme pierdute și nu măsurăm succesul
              în centimetri promiși dinainte.
            </p>
            <p>
              Rezultatele diferă. Evoluția este individuală și depinde de zonă,
              de starea pielii și de obiectivul discutat la evaluare. Nu există
              rezultat garantat și nu descriem efectul ca permanent. Dacă cineva
              îți promite că slăbești un număr fix de centimetri sau de
              kilograme cu HIFU, aceea nu este poziționarea Claire Beauty.
            </p>
            <p>
              Tonifiere corporală Craiova, în sensul acestei pagini, înseamnă
              aspectul pielii: mai fermă, mai susținută, mai conturată vizual.
              Nu înseamnă înlocuirea dietei, a mișcării sau a unui plan de
              scădere în greutate. Fermitate piele Craiova, pentru HIFU
              corporal, se citește la fel: aspectul zonelor cu laxitate, nu
              un număr pe cântar.
            </p>
            <p>
              După procedură, recomandările se dau pentru zona lucrată. Nu
              publicăm o listă universală de interdicții, pentru că nu avem
              în materialele salonului un protocol unic de recuperare. Ce
              primești la finalul ședinței este explicația relevantă pentru
              tine, nu un calendar copiat de pe pagina facială.
            </p>
            <p>
              Dacă în timp observi că obiectivul s-a schimbat — de exemplu
              de la fermitate către textura celulitei sau către vergeturi —
              revii la evaluare și alegem pagina potrivită. HIFU corporal
              rămâne disponibil pentru fermitate. Nu îl transformăm, pe
              parcurs, într-un program de slăbit.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard icon={Check} title="Când se văd rezultatele?">
            <p>
              Nu publicăm un termen fix. Evoluția diferă individual, iar la
              evaluare se explică așteptările realiste pentru zona tratată.
              Unele persoane observă schimbări de aspect mai devreme, altele
              mai târziu. Fără un calendar documentat pentru aparatul din
              salon, un termen general ar fi o promisiune, nu o informație.
            </p>
          </InfoCard>
          <InfoCard icon={Check} title="Câte ședințe?">
            <p>
              Numărul și frecvența ședințelor se stabilesc în urma evaluării,
              în funcție de zona tratată, obiectiv și răspunsul individual.
              Nu copiem protocolul de pe pagina de HIFU facial: corpul nu se
              planifică la fel ca fața.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Investiție
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold sm:text-4xl">
            Preț HIFU corporal Craiova
          </h2>
          <p className="mb-3 font-serif text-4xl font-semibold text-[#D4AF37] sm:text-5xl">
            800 – 1.100 lei
          </p>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Prețul diferă în funcție de zona tratată și protocolul recomandat.
            Nu afișăm tarife separate pe fiecare zonă, pentru că nu sunt
            publicate distinct. Intervalul se clarifică la evaluare.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#FFF9F2]/75">
            Serviciul este poziționat premium, cu intervalul de preț afișat
            clar. Poți vedea și lista de{" "}
            <Link href="/preturi#remodelare" className="font-medium text-[#D4AF37] hover:underline">
              prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#0E2B1F] sm:w-auto"
            >
              Solicită o evaluare
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 px-8 py-3 text-sm font-semibold text-[#FFF9F2] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Întreabă pe WhatsApp
            </a>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Alegerea corectă"
          title="HIFU sau alt tratament corporal?"
          description="Alegerea depinde de obiectiv. Niciun serviciu nu este automat mai bun."
        />
        <div className="grid gap-4">
          {objectives.map((item) => (
            <article
              key={item.goal}
              className="grid gap-4 rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8"
            >
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {item.goal}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
              <Link
                href={item.href}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#0E2B1F]/20 px-5 py-3 text-center text-sm font-semibold text-[#0E2B1F] hover:border-[#D4AF37] sm:w-auto"
              >
                {item.label}
              </Link>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted-foreground">
          Pentru o vedere de ansamblu asupra gamei corporale, poți porni și de
          la{" "}
          <Link href="/tratamente-corporale-craiova" className={linkClass}>
            tratamente corporale în Craiova
          </Link>{" "}
          sau de la{" "}
          <Link href="/remodelare-corporala-craiova" className={linkClass}>
            remodelare corporală
          </Link>
          . Dacă pielea lăsată și lipsa de fermitate sunt motivul pentru care
          cauți procedura, pagina despre{" "}
          <Link href="/piele-lasata-craiova" className={linkClass}>
            tratamente pentru fermitatea pielii
          </Link>{" "}
          compară opțiunile din salon, fără să înlocuiască serviciul de HIFU.
          HIFU rămâne opțiunea de discutat când obiectivul este fermitatea
          pielii.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Salonul"
          title="De ce să alegi Claire Beauty pentru HIFU corporal?"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Evaluare înaintea procedurii",
              text: "Nu se intră direct în tratament. Se discută zona și obiectivul, inclusiv dacă așteptarea este compatibilă cu fermitatea, nu cu slăbirea.",
            },
            {
              title: "Protocol individualizat",
              text: "Zona, particularitățile pielii și obiectivul schimbă felul în care se construiește ședința. Nu afișăm un protocol unic pentru toate corpurile.",
            },
            {
              title: "Comunicare realistă",
              text: "Spunem ce urmărim — aspect, fermitate, contur — și ce nu promitem: kilograme, centimetri garantați sau efect permanent.",
            },
            {
              title: "Tehnologie profesională",
              text: "HIFU corporal face parte din gama de proceduri a salonului, alături de alte tratamente corporale. Nu inventăm un nume de aparat sau o certificare care nu este publicată.",
            },
            {
              title: "Salon în Craiova",
              text: "Procedura se face la Claire Beauty, pe Strada Principatele Unite nr. 5, nu într-o descriere generică de oraș.",
            },
            {
              title: "Legătura cu alte servicii",
              text: "Dacă obiectivul tău este celulita, vergeturile sau tonifierea musculară, te îndrumăm către pagina potrivită, în loc să forțăm HIFU.",
            },
          ].map((item) => (
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

      <SectionShell className="bg-background">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Craiova și Dolj"
              title="HIFU corporal în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este pe Strada Principatele Unite nr. 5, în
                Craiova, județul Dolj. De aici se programează tratamentul de
                fermitate piele Craiova pentru zone corporale: o evaluare
                scurtă, apoi, dacă obiectivul se potrivește, ședința de HIFU
                corporal. Telefonul de programare este{" "}
                <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                  {businessProfile.telephoneDisplay}
                </a>
                .
              </p>
              <p>
                Mulți oameni caută un tratament fermitate corporală Craiova
                după ce au încercat creme sau după ce silueta s-a schimbat și
                pielea nu mai are același aspect. În salon, conversația
                începe cu zona și cu ce vrei să se schimbe la aspect, nu cu
                un număr de kilograme. Dacă locuiești în centru, drumul este
                scurt. Din Craiovița Nouă, Brazda lui Novac sau Rovine se
                ajunge ușor spre aceeași adresă, la fel din 1 Mai, Valea
                Roșie sau Lăpuș.
              </p>
              <p>
                Cartiere precum George Enescu sau zona Romanescu sunt la
                distanță rezonabilă de salon pentru o programare planificată.
                Nu tratăm fiecare cartier ca pe un serviciu separat: HIFU
                corporal se face într-un singur loc, iar evaluarea este
                aceeași indiferent de unde vii în Dolj. Contează zona corpului
                și obiectivul, nu eticheta cartierului. Cine vine din afara
                Craiovei, din județul Dolj, folosește aceeași adresă și
                același telefon. Nu există o variantă diferită a procedurii
                în funcție de localitate.
              </p>
              <p>
                În salon, programarea pentru HIFU corporal stă lângă celelalte
                servicii de corp, nu lângă tratamentele feței. Poți vedea gama
                pe pagina de tratamente corporale, iar prețul acestui serviciu
                este și în lista de prețuri, la remodelare. Dacă după evaluare
                reiese că ți se potrivește mai bine masajul sau radiofrecvența,
                pleci cu indicația corectă, nu cu o procedură împinsă doar
                pentru că ai căutat termenul HIFU.
              </p>
              <p>
                Înainte de vizită, merită să știi ce vrei să discuți: fermitate
                pe abdomen, aspectul brațelor, coapsele sau o altă zonă din
                lista de mai sus. Dacă nemulțumirea principală este celulita,
                vergeturile sau tonusul muscular, îți spunem care pagină este
                mai potrivită. Așa rămâne clar și pentru tine, și pentru
                programare, că{" "}
                <strong className="font-medium text-foreground">
                  HIFU corporal Craiova
                </strong>{" "}
                înseamnă corp și aspectul pielii.
              </p>
              <h3 className="pt-2 font-serif text-2xl font-semibold text-foreground">
                Tratament HIFU în Craiova, dedicat corpului
              </h3>
              <p>
                Formularea „HIFU Craiova” apare des în căutări locale. Pe
                site, ea se împarte în două intenții: această pagină pentru
                corp și pagina de HIFU facial pentru față. Dacă mesajul tău
                spune „HIFU corp” sau „tratament corporal HIFU”, ajunge direct
                la evaluarea corporală. Poți scrie și pe WhatsApp înainte, ca
                să confirmi că zona pe care o ai în minte este una dintre
                cele lucrate în salon.
              </p>
            </div>
            <CtaPair primaryLabel="Programează o evaluare" />
          </div>
          <aside className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-2 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {businessProfile.address.formatted}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              HIFU corporal pentru fermitatea pielii. Evaluare înainte de
              procedură. Preț 800–1.100 lei, în funcție de zonă și protocol.
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
    </>
  )
}
