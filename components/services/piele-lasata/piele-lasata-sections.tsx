import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import { Check, MapPin, MessageCircle, X } from "lucide-react"
import { businessProfile } from "@/lib/seo/business"
import { pieleLasataWhatsappMessage } from "@/lib/content/piele-lasata"
import { cn } from "@/lib/utils"
import { RelatedTreatments } from "@/components/services/related-treatments"

const whatsappHref = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(pieleLasataWhatsappMessage)}`

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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37] sm:tracking-[0.22em]">
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
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{title}</h3>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </article>
  )
}

const zones = [
  {
    title: "Piele lăsată pe abdomen",
    text: "Abdomenul este zona adusă cel mai des în discuție când pielea pare mai puțin susținută după o schimbare de volum sau odată cu trecerea timpului. Un tratament piele lăsată abdomen se discută la Claire Beauty doar dacă obiectivul este fermitatea pielii. HIFU corporal include abdomenul între zonele pentru care procedura poate fi luată în calcul. Radiofrecvența corporală poate intra și ea în conversație, iar zona se confirmă la evaluare. Nu promitem un abdomen „strâns” și nu prezentăm tratamentul ca soluție pentru mușchi sau pentru exces cutanat important.",
  },
  {
    title: "Piele lăsată pe brațe",
    text: "Brațele sunt o zonă în care lipsa de fermitate se vede ușor, mai ales când pielea pare mai moale decât înainte. HIFU corporal poate fi discutat pentru brațe, în urma unei evaluări a zonei. Obiectivul rămâne aspectul pielii, nu subțierea brațului și nu un număr de centimetri. Dacă situația ține de un exces important de piele, procedurile non-chirurgicale pot să nu fie răspunsul potrivit, iar acest lucru se spune la evaluare.",
  },
  {
    title: "Piele lăsată pe interiorul coapselor",
    text: "Pentru coapse, zona confirmată în protocolul de HIFU corporal al salonului este interiorul coapselor, nu întreaga coapsă ca formulă generală. Se discută atunci când laxitatea pielii din această zonă este motivul programării. Nu extindem indicația la toată coapsa și nu o amestecăm cu celulita, care are o pagină separată.",
  },
  {
    title: "Flancuri, genunchi și fesieri",
    text: "Pe lângă abdomen, brațe și interiorul coapselor, HIFU corporal mai poate fi discutat pentru flancuri, genunchi și fesieri. Sunt zonele publicate pe pagina dedicată procedurii. Nu adăugăm alte regiuni. Pentru radiofrecvența corporală, lista publică a salonului nu detaliază zone fixe: se stabilește la evaluare dacă procedura are sens pentru zona care te preocupă.",
  },
]

const treatments = [
  {
    eyebrow: "HIFU corporal",
    title: "Pentru fermitate și aspect mai bine conturat",
    href: "/hifu-corporal-craiova",
    cta: "Descoperă HIFU corporal",
    body: (
      <>
        <p>
          HIFU corporal folosește ultrasunete focalizate pe zone ale corpului.
          La Claire Beauty este poziționat pentru fermitatea și aspectul pielii:
          abdomen, flancuri, brațe, interiorul coapselor, genunchi și fesieri.
        </p>
        <p className="mt-4 font-semibold uppercase tracking-[0.08em] text-[#0E2B1F]">
          HIFU corporal este pentru fermitate, nu pentru slăbire.
        </p>
        <p className="mt-4">
          Nu este un program de kilograme și nu se alege ca să „topim” o zonă.
          Prețul publicat este 800–1.100 lei, în funcție de zonă și protocol.
          Detaliile procedurii stau pe pagina ei, ca să nu amestecăm tehnologia
          cu problema.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Radiofrecvență corporală",
    title: "Pentru piele mai puțin fermă, în ritmul unui protocol de ședințe",
    href: "/radiofrecventa-corporala-craiova",
    cta: "Descoperă radiofrecvența",
    body: (
      <>
        <p>
          Radiofrecvența corporală din salon este indicată, între altele,
          persoanelor cu piele lăsată, după slăbire sau când se caută fermitate.
          În lista de prețuri apar două variante corporale: radiofrecvența
          bipolară, 150 lei pe ședință, și radiofrecvența monopolară, de la 350
          lei pe ședință, pe zonă.
        </p>
        <p className="mt-4">
          <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
            Radiofrecvența fracționată
          </Link>{" "}
          este un alt serviciu. Este folosită pentru cicatrici și vergeturi, nu
          o prezentăm aici ca tratament de fermitate corporală și nu o confundăm
          cu aparatul de radiofrecvență corporală.
        </p>
      </>
    ),
  },
  {
    eyebrow: "Când obiectivul se schimbă",
    title: "Dacă evaluarea arată altceva decât lipsa de fermitate",
    href: "/remodelare-corporala-craiova",
    cta: "Vezi remodelarea corporală",
    body: (
      <>
        <p>
          Nu există o a treia procedură de fermitate pe care să o inventăm lângă
          HIFU și radiofrecvența corporală. Dacă la evaluare problema principală
          este volumul unei zone sau conturul, conversația se mută spre{" "}
          <Link href="/remodelare-corporala-craiova" className={linkClass}>
            remodelare corporală
          </Link>
          , care este un serviciu diferit.
        </p>
        <p className="mt-4">
          Electrostimularea este pentru tonifiere musculară, nu o prezentăm ca
          tratament pentru laxitatea pielii. Celulita și vergeturile au și ele
          pagini proprii, ca să nu forțăm o singură procedură peste toate
          nemulțumirile.
        </p>
      </>
    ),
  },
]

const concerns = [
  {
    label: "Pielea pare mai puțin fermă",
    text: "Mergi spre tratamentele de fermitate din salon: HIFU corporal sau radiofrecvență corporală, alese după zonă.",
    href: "#tratamente",
    cta: "Vezi tratamentele de fermitate",
  },
  {
    label: "Pielea s-a modificat după slăbire",
    text: "Începe cu contextul de după slăbire și cu o evaluare. Nu toate situațiile se potrivesc cu o procedură estetică.",
    href: "#dupa-slabire",
    cta: "Citește opțiunile după slăbire",
  },
  {
    label: "Am și vergeturi",
    text: "Vergeturile nu sunt același lucru cu lipsa de fermitate. Au o pagină dedicată, cu radiofrecvență fracționată.",
    href: "/cicatrici-vergeturi-craiova",
    cta: "Cicatrici și vergeturi",
  },
  {
    label: "Principala problemă este celulita",
    text: "Dacă te deranjează textura de celulită, pagina potrivită este cea de masaj anticelulitic, nu aceasta.",
    href: "/masaj-anticelulitic-craiova",
    cta: "Masaj anticelulitic",
  },
  {
    label: "Mă interesează aspectul unei zone localizate",
    text: "Cavitația este o procedură separată, pentru remodelare localizată. Pagina de piele lăsată rămâne despre fermitate.",
    href: "/cavitatie-craiova",
    cta: "Cavitație corporală",
  },
  {
    label: "Vreau remodelare corporală",
    text: "Remodelarea ține de contur și de protocolul corporal al salonului. Este o intenție diferită de fermitatea pielii.",
    href: "/remodelare-corporala-craiova",
    cta: "Remodelare corporală",
  },
]

const steps = [
  {
    n: "01",
    title: "Zona",
    text: "Unde este lipsa de fermitate? Abdomen, brațe, interiorul coapselor sau o altă zonă confirmată. Fără zonă clară, nu alegem procedura.",
  },
  {
    n: "02",
    title: "Cauza / contextul",
    text: "După slăbire? După modificări corporale? După sarcină? Alt context? Contextul schimbă ce este realist să urmărim.",
  },
  {
    n: "03",
    title: "Gradul problemei",
    text: "Ce poate fi abordat realist prin tratamentele disponibile? Piele mai puțin fermă și exces cutanat important nu se tratează la fel.",
  },
  {
    n: "04",
    title: "Obiectivul",
    text: "Ce rezultat urmărește clienta: aspect mai ferm, contur vizual mai îngrijit, sau de fapt altceva — celulită, vergeturi, volum.",
  },
  {
    n: "05",
    title: "Tratamentul",
    text: "Alegem procedura potrivită dintre cele disponibile: HIFU corporal sau radiofrecvență corporală, ori te îndrumăm către pagina corectă dacă obiectivul este altul.",
  },
]

export function PieleLasataSections() {
  return (
    <>
      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Înțelegerea problemei"
            title="Ce înseamnă, de fapt, piele lăsată?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Oamenii folosesc aceeași expresie pentru situații diferite. Lipsa
              de fermitate înseamnă, în limbaj simplu, că pielea pare mai puțin
              susținută decât înainte: mai moale la atingere sau mai puțin
              „ținută” pe zonă. Laxitatea pielii descrie același tip de
              observație, fără să fie un diagnostic pus de pe o pagină de salon.
            </p>
            <p>
              Aspectul se poate schimba după variații de greutate, când volumul
              de sub piele nu mai este cel cu care pielea era obișnuită. Se
              poate schimba și odată cu trecerea timpului, când pielea nu mai
              are aceeași elasticitate. După sarcină, abdomenul este zona despre
              care se vorbește cel mai des, pentru că silueta a trecut printr-o
              modificare clară.
            </p>
            <p>
              Această pagină nu pune diagnostice și nu înlocuiește un consult
              medical. Explică de ce „piele lăsată” nu este o singură problemă
              și de ce tratamentul pentru fermitatea pielii se alege după zonă
              și după context, la Claire Beauty în Craiova.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="dupa-slabire" className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După modificare de volum"
            title="Piele lăsată după slăbire – ce opțiuni există?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Pielea lăsată după slăbire este unul dintre motivele pentru care
              cineva ajunge la un salon, nu la un program de slăbit. După
              modificări importante ale volumului corporal, aspectul pielii
              poate fi diferit de ceea ce își dorește persoana. Fermitatea
              pielii după slăbire și pielea lăsată după slăbit descriu aceeași
              neliniște: corpul s-a schimbat, iar pielea nu arată cum era
              așteptat.
            </p>
            <p>
              Opțiunile reale de la Claire Beauty, atunci când obiectivul este
              fermitatea, sunt HIFU corporal și radiofrecvența corporală. Se
              aleg după evaluare, nu automat. HIFU nu este o metodă de slăbire.
              Radiofrecvența corporală urmărește fermitatea pielii în cadrul
              unui protocol de ședințe, nu un rezultat identic pentru toată
              lumea.
            </p>
            <p>
              Tratamentele estetice nu trebuie prezentate ca alternativă la
              chirurgie în cazurile cu exces cutanat important. Dacă pielea
              atârnă vizibil și așteptarea este să fie îndepărtată, o procedură
              de salon nu este răspunsul potrivit. O spunem ca să nu pierzi
              timp și bani pe o așteptare care nu se potrivește cu ce poate
              urmări tratamentul.
            </p>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <p className="font-serif text-2xl font-semibold leading-snug text-[#0E2B1F] sm:text-3xl">
              Piele mai puțin fermă
              <span className="mx-3 text-[#D4AF37]">≠</span>
              exces cutanat important
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              În situațiile cu exces important de piele, procedurile estetice
              non-chirurgicale pot avea limite. Evaluarea realistă a situației
              este esențială.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Zone corporale"
          title="Ce zone îi preocupă cel mai des pe clienți?"
          description="Doar zone confirmate în serviciile salonului. HIFU corporal are o listă publică. Pentru radiofrecvența corporală, zona se confirmă la evaluare."
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

      <SectionShell className="bg-[#FFF9F2]">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Cu grijă"
            title="Lipsa de fermitate a pielii după sarcină"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              După sarcină, pielea de pe abdomen poate arăta altfel: mai puțin
              fermă, cu un contur diferit față de perioada dinainte. Este o
              observație frecventă despre aspect, nu o concluzie medicală.
              Dacă obiectivul este fermitatea pielii abdominale, se poate
              discuta la evaluare dacă HIFU corporal sau radiofrecvența
              corporală au sens pentru zona respectivă.
            </p>
            <p>
              Tratamentul nu repară diastaza, nu tratează probleme musculare,
              nu înlocuiește consultul medical și nu elimină excesul cutanat.
              Dacă au apărut și vergeturi, acestea sunt o problemă separată de
              fermitate. Când au apărut în timpul sau după sarcină, continuă pe
              pagina despre{" "}
              <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
                vergeturi după naștere
              </Link>
              . Pentru celelalte situații, vergeturile rămân pe pagina de{" "}
              <Link href="/cicatrici-vergeturi-craiova" className={linkClass}>
                cicatrici și vergeturi
              </Link>
              , cu{" "}
              <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                radiofrecvență fracționată
              </Link>
              , nu cu protocolul de fermitate corporală.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="tratamente" className="bg-background">
        <SectionHeading
          eyebrow="Alegerea procedurii"
          title="Ce tratament pentru fermitatea pielii ți se potrivește?"
          description="Nu împingem automat către HIFU. Mai jos sunt opțiunile reale din salon, separate de celulită, vergeturi și slăbire."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {treatments.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:p-8"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                {item.eyebrow}
              </p>
              <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <div className="flex-1 leading-relaxed text-muted-foreground">{item.body}</div>
              <Link
                href={item.href}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Orientare"
          title="Ce te deranjează cel mai mult?"
          description="Alege situația cea mai apropiată. Te ducem către pagina care chiar acoperă problema, nu către o procedură la întâmplare."
        />
        <div className="grid gap-4">
          {concerns.map((item) => (
            <article
              key={item.label}
              className="grid gap-4 rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8"
            >
              <div>
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

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Ca să nu alegi greșit"
          title="Piele lăsată sau grăsime localizată? Nu sunt același lucru."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Lipsă de fermitate
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Problema principală este aspectul și elasticitatea pielii. Zona
              poate părea mai moale, mai puțin susținută, chiar dacă nu te
              preocupă un volum de grăsime. În acest caz se discută HIFU
              corporal sau radiofrecvență corporală, după evaluare.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Grăsime localizată
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Problema principală este țesutul adipos și volumul unei anumite
              zone. Tratamentele pot fi diferite de cele pentru fermitatea
              pielii. Dacă acesta este obiectivul, conversația ține de{" "}
              <Link href="/remodelare-corporala-craiova" className={linkClass}>
                remodelare corporală
              </Link>
              , nu de pagina de piele lăsată. Nu punem un diagnostic de pe site.
            </p>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="mb-6 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Nu știi ce tratament ți se potrivește? Programează o evaluare
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#D4AF37] sm:w-auto"
            >
              Programează o evaluare
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
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Altă problemă"
            title="Lipsa de fermitate și celulita sunt lucruri diferite"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Lipsa de fermitate ține de felul în care pielea pare susținută.
              Celulita ține de textura pielii, de aspectul denivelat al unei
              zone. Pot exista împreună, dar nu sunt aceeași cerere și nu se
              rezolvă cu același discurs.
            </p>
            <p>
              Dacă problema principală este aspectul celulitei, pagina potrivită
              este{" "}
              <Link href="/masaj-anticelulitic-craiova" className={linkClass}>
                masajul anticelulitic în Craiova
              </Link>
              . Aici rămânem la fermitatea pielii corporale. Nu construim
              această pagină ca să concureze cu tratamentul pentru celulită.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-6 shadow-premium sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Dar dacă problema este fermitatea feței?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Această pagină este dedicată în principal fermității corporale.
            Pentru față, Claire Beauty are tratamente și protocoale dedicate.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rejuvenare-faciala-craiova"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.05em] text-[#D4AF37] sm:w-auto"
            >
              Vezi tratamentele de rejuvenare facială
            </Link>
            <Link
              href="/hifu-facial-craiova"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#0E2B1F]/20 px-6 py-3 text-center text-sm font-semibold text-[#0E2B1F] sm:w-auto"
            >
              HIFU facial
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]">
        <SectionHeading
          eyebrow="În salon"
          title="De ce este importantă evaluarea?"
          description="Cinci pași, ca să nu alegem o procedură înainte să știm zona și obiectivul."
        />
        <ol className="grid gap-4">
          {steps.map((step) => (
            <li key={step.n}>
              <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
                <p className="mb-2 font-serif text-3xl font-semibold text-[#D4AF37]">
                  {step.n}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-semibold text-[#0E2B1F]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Fără promisiuni goale"
          title="Ce pot face tratamentele și unde sunt limitele lor?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#FFF9F2] p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Tratamentele pot urmări
            </h3>
            <ul className="space-y-3">
              {[
                "îmbunătățirea fermității",
                "aspect mai tonifiat",
                "îmbunătățirea aspectului pielii",
                "un contur vizual mai îngrijit, unde procedura este potrivită",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0E2B1F]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card p-6 shadow-premium sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">
              Tratamentele nu înseamnă
            </h3>
            <ul className="space-y-3">
              {[
                "slăbire garantată",
                "eliminarea kilogramelor",
                "îndepărtarea chirurgicală a excesului de piele",
                "rezultate identice pentru toate persoanele",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
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
              Nu există un număr universal de ședințe pentru pielea lăsată.
              Depinde de tratamentul ales, de zona tratată, de aspectul inițial,
              de obiectiv și de răspunsul individual.
            </p>
            <p>
              Pentru HIFU corporal, salonul nu publică un protocol unic valabil
              pentru toate zonele. Numărul și frecvența se stabilesc la
              evaluare. Detaliile stau pe pagina de{" "}
              <Link href="/hifu-corporal-craiova" className={linkClass}>
                HIFU corporal
              </Link>
              .
            </p>
            <p>
              Pentru radiofrecvența corporală, pagina procedurii vorbește despre
              un parcurs de ședințe: primele efecte de fermitate în jurul a 3–4
              ședințe, rezultate mai vizibile după 6–8 ședințe, iar un protocol
              mai lung, de peste 10 ședințe, este descris acolo ca orientare
              pentru remodelare. Nu copiem aceste cifre peste HIFU. Protocolul
              de radiofrecvență se citește pe pagina de{" "}
              <Link href="/radiofrecventa-corporala-craiova" className={linkClass}>
                radiofrecvență corporală
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
            eyebrow="Timp"
            title="Când pot fi observate schimbările?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Fiecare tehnologie are propria evoluție. Nu combinăm timpii HIFU
              cu cei ai radiofrecvenței.
            </p>
            <p>
              La HIFU corporal, Claire Beauty nu publică un termen fix.
              Evoluția diferă individual, iar la evaluare se explică
              așteptările realiste pentru zona tratată. Unele persoane observă
              o schimbare de aspect mai devreme, altele mai târziu. Fără un
              calendar documentat pentru aparatul din salon, un termen general
              ar fi o promisiune.
            </p>
            <p>
              La radiofrecvența corporală, pagina serviciului leagă primele
              efecte de fermitate și tonifiere de intervalul de 3–4 ședințe, iar
              rezultatele mai vizibile de intervalul de 6–8 ședințe. Sunt
              repere ale acelui protocol, nu o garanție și nu un calendar
              valabil și pentru HIFU. Rezultatul rămâne individual.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#0E2B1F] text-[#FFF9F2]">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Prețuri reale
          </p>
          <h2 className="mb-4 text-center font-serif text-3xl font-semibold sm:text-4xl">
            Cât costă tratamentele pentru fermitatea pielii în Craiova?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-[#FFF9F2]/85 sm:text-lg">
            Nu afișăm un preț generic de „tratament piele lăsată”. Costul este
            al procedurii alese, luat din lista salonului.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "HIFU corporal", price: "800 – 1.100 lei", note: "pe ședință, în funcție de zonă" },
              { name: "Radiofrecvență bipolară", price: "150 lei", note: "pe ședință" },
              { name: "Radiofrecvență monopolară", price: "de la 350 lei", note: "pe ședință / zonă" },
            ].map((item) => (
              <article
                key={item.name}
                className="rounded-[1.5rem] border border-[#D4AF37]/30 bg-white/5 p-5 text-center"
              >
                <h3 className="mb-3 font-serif text-lg font-semibold">{item.name}</h3>
                <p className="font-serif text-2xl font-semibold text-[#D4AF37]">{item.price}</p>
                <p className="mt-2 text-sm text-[#FFF9F2]/75">{item.note}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#FFF9F2]/75">
            <Link href="/radiofrecventa-fractionata-craiova" className="font-medium text-[#D4AF37] hover:underline">
              Radiofrecvența fracționată
            </Link>{" "}
            are alt preț și alt scop — cicatrici și vergeturi — și nu este
            inclusă aici ca tarif de fermitate. Lista
            completă este pe pagina de{" "}
            <Link href="/preturi#remodelare" className="font-medium text-[#D4AF37] hover:underline">
              prețuri
            </Link>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#0E2B1F] sm:w-auto"
            >
              Află ce tratament ți se potrivește
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Salonul"
          title="De ce Claire Beauty pentru tratamentele de fermitate?"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Evaluare individuală",
              text: "Nu se intră într-o procedură doar pentru că ai căutat piele lăsată. Se discută zona și obiectivul.",
            },
            {
              title: "Tratament în funcție de obiectiv",
              text: "Fermitate, celulită, vergeturi sau contur nu se amestecă într-o singură recomandare.",
            },
            {
              title: "Tehnologii disponibile în salon",
              text: "HIFU corporal și radiofrecvență corporală sunt servicii reale, fiecare cu pagină și preț propriu.",
            },
            {
              title: "Comunicare realistă",
              text: "Spunem ce pot urmări tratamentele și unde se opresc, inclusiv când excesul de piele cere alt răspuns.",
            },
            {
              title: "Salon în Craiova",
              text: "Programarea se face la Claire Beauty, pe Strada Principatele Unite nr. 5, în Craiova.",
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

      <SectionShell className="bg-secondary/40">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Craiova și Dolj"
              title="Tratamente pentru fermitatea pielii în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este pe Strada Principatele Unite nr. 5, în
                Craiova, județul Dolj. De aici se programează o evaluare pentru
                fermitate piele Craiova atunci când te preocupă pielea lăsată
                pe corp: abdomen, brațe, interiorul coapselor sau o altă zonă
                confirmată. Telefonul este{" "}
                <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                  {businessProfile.telephoneDisplay}
                </a>
                . Poți scrie și pe WhatsApp, cu zona și cu ce te deranjează la
                aspectul pielii, nu cu un număr de kilograme.
              </p>
              <p>
                Căutarea de tratament piele lăsată sau de tratament fermitate
                piele aduce oameni din tot orașul. Din centru drumul este scurt.
                Din Craiovița Nouă, Brazda lui Novac, Rovine, 1 Mai, Valea
                Roșie, Sărari sau Lăpuș se ajunge la aceeași adresă, fără să
                existe un protocol diferit pe cartier. Ce se schimbă este zona
                corpului și contextul: după slăbire, după sarcină sau pur și
                simplu o piele care pare mai puțin fermă decât înainte.
              </p>
              <p>
                În județul Dolj, programarea rămâne la salonul din Craiova. Nu
                promitem că laxitatea pielii se rezolvă la fel pentru toată
                lumea și nu transformăm vizita într-un plan de slăbire. Dacă la
                evaluare reiese că problema este celulita, vergeturile sau
                volumul unei zone, te îndrumăm către pagina potrivită. Dacă
                obiectivul rămâne fermitatea corporală, alegem între HIFU
                corporal și radiofrecvența corporală, cu prețul real al
                procedurii și cu limitele spuse dinainte.
              </p>
              <p>
                Pentru față, conversația nu continuă aici.{" "}
                <Link href="/rejuvenare-faciala-craiova" className={linkClass}>
                  Rejuvenarea facială
                </Link>{" "}
                și{" "}
                <Link href="/hifu-facial-craiova" className={linkClass}>
                  HIFU facial
                </Link>{" "}
                au paginile lor, ca să nu se amestece gâtul sau conturul feței
                cu un tratament de abdomen sau de brațe.
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
            <a
              href={`tel:${businessProfile.telephone}`}
              className="inline-flex min-h-11 items-center font-semibold text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              {businessProfile.telephoneDisplay}
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#D4AF37]"
              >
                Programează o evaluare
              </Link>
            </div>
          </aside>
        </div>
      </SectionShell>
      <RelatedTreatments
        description="Fermitatea pielii, conturul și vergeturile nu se tratează cu aceeași pagină."
        items={[
          {
            href: "/hifu-corporal-craiova",
            title: "HIFU corporal în Craiova",
            text: "Procedură pentru fermitate și aspect, nu pentru slăbire.",
          },
          {
            href: "/radiofrecventa-corporala-craiova",
            title: "Radiofrecvență corporală",
            text: "Cealaltă procedură de fermitate din salon, cu protocol de ședințe.",
          },
          {
            href: "/remodelare-corporala-craiova",
            title: "Remodelare corporală",
            text: "Dacă obiectivul principal este conturul sau volumul unei zone, nu elasticitatea pielii.",
          },
          {
            href: "/vergeturi-dupa-sarcina-craiova",
            title: "Vergeturi după sarcină",
            text: "Dacă pe lângă fermitate te preocupă și liniile apărute în sarcină.",
          },
          {
            href: "/masaj-anticelulitic-craiova",
            title: "Masaj anticelulitic",
            text: "Pagina potrivită când problema principală este aspectul celulitei, nu pielea lăsată.",
          },
        ]}
      />
    </>
  )
}
