import type { ComponentType, ReactNode } from "react"
import Link from "next/link"
import {
  Baby,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ScanLine,
  Scissors,
  Sparkles,
  StretchHorizontal,
} from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { ServiceCTA } from "@/components/services/service-cta"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"
import { cicatriciVergeturiWhatsappHref } from "@/lib/content/cicatrici-vergeturi"
import { cn } from "@/lib/utils"

const whatsappHref = cicatriciVergeturiWhatsappHref(businessProfile.whatsappUrl)

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
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
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
        "mb-12 max-w-3xl",
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

function InfoCard({
  icon: Icon,
  title,
  children,
  href,
}: {
  icon: ComponentType<{ className?: string }>
  title: string
  children: ReactNode
  href?: string
}) {
  const className =
    "group flex h-full flex-col rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg"
  const content = (
    <>
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F] transition-colors group-hover:bg-[#D4AF37]/20">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{title}</h3>
      <div className="text-base leading-relaxed text-muted-foreground">{children}</div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return <article className={className}>{content}</article>
}

const concerns = [
  {
    icon: StretchHorizontal,
    title: "Vergeturi",
    href: "#vergeturi",
    text: "Vergeturi apărute în urma variațiilor de greutate, sarcinii, dezvoltării corporale etc.",
  },
  {
    icon: Sparkles,
    title: "Cicatrici post-acnee",
    href: "/cicatrici-acnee-craiova",
    text: "Pentru îmbunătățirea aspectului neuniform lăsat de anumite forme de acnee.",
  },
  {
    icon: Scissors,
    title: "Cicatrici postoperatorii",
    href: "#cicatrici-postoperatorii",
    text: "Abordare estetică pentru cicatrici vindecate rezultate după intervenții.",
  },
  {
    icon: Baby,
    title: "Cicatrici după cezariană",
    href: "/cicatrice-cezariana-craiova",
    text: "Pagina dedicată aspectului cicatricii vindecate după cezariană.",
  },
] as const

const pathway = [
  { step: "01", label: "Piele" },
  { step: "02", label: "Stimulare controlată" },
  { step: "03", label: "Proces de remodelare" },
  { step: "04", label: "Aspect îmbunătățit" },
] as const

const sessionSteps = [
  {
    step: "01",
    title: "Evaluarea zonei",
    text: "Ne uităm la tipul urmei, la vechime, la suprafață și la pielea din jur. Spunem ce se poate urmări și ce nu promitem.",
  },
  {
    step: "02",
    title: "Stabilirea protocolului",
    text: "Alegem zona și ritmul orientativ în funcție de pielea ta. Nu pornim de la un șablon unic de ședințe.",
  },
  {
    step: "03",
    title: "Procedura cu radiofrecvență",
    text: "Aplicăm energia de radiofrecvență controlat, pe zona evaluată. Nu este un fascicul laser.",
  },
  {
    step: "04",
    title: "Recomandări după ședință",
    text: "Primești indicații potrivite protocolului tău. Nu publicăm un timp fix de recuperare valabil pentru toată lumea.",
  },
] as const

export function CicatriciVergeturiSections() {
  return (
    <>
      <SectionShell className="bg-background" id="ce-putem-trata">
        <SectionHeading
          eyebrow="Indicații"
          title="Ce putem trata?"
          description="Patru situații estetice, abordate doar după evaluarea pielii. Nu lucrăm pe o plagă recentă sau nevindecată."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {concerns.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} href={item.href}>
              <p>{item.text}</p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="de-ce-nu-dispar">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="Pe înțelesul tău"
              title="De ce cicatricile și vergeturile nu dispar pur și simplu?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Pielea nu este o suprafață pe care o poți șterge. Are straturi, iar
                elasticitatea ei ține de fibrele de colagen și de elastină din
                profunzime. Când pielea este întinsă brusc — la sarcină, la o
                variație de greutate, în creștere — aceste fibre se pot rupe sau
                rearanja. Vergetura este urma acestei rearanjări. Cicatricea apare
                când pielea se reface după o leziune și noul țesut nu mai are
                aceeași ordine ca pielea din jur.
              </p>
              <p>
                Diferența se vede și se simte. Pielea neatinsă este mai elastică și
                prinde lumina uniform. Țesutul modificat poate fi mai subțire, mai
                dens, mai deschis sau ușor adâncit. De aceea o cremă bună poate
                hidrata, calma și face pielea să se simtă mai bine, dar rămâne la
                suprafață. Nu reașază de una singură structura care s-a schimbat
                deja.
              </p>
              <p>
                Procedurile profesionale nu „șterg” urma. Urmăresc remodelarea
                aspectului: o piele care arată mai uniform, cu o linie mai puțin
                evidentă. Procesul este treptat și diferă de la o persoană la alta.
                De aceea la Claire Beauty începem cu evaluarea, nu cu o promisiune.
              </p>
            </div>
          </div>
          <div className="relative min-w-0 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.tratamenteCorporaleContent}
              alt="Îngrijire corporală la Claire Beauty Craiova"
              title="Îngrijirea pielii la Claire Beauty Craiova"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pathway.map((item) => (
            <li
              key={item.step}
              className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 p-6 shadow-premium"
            >
              <p className="mb-3 font-serif text-sm tracking-[0.18em] text-[#D4AF37]">
                {item.step}
              </p>
              <p className="font-serif text-xl font-semibold text-[#0E2B1F]">{item.label}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Piele → stimulare controlată → proces de remodelare → aspect îmbunătățit
        </p>
      </SectionShell>

      <SectionShell className="bg-background" id="radiofrecventa">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-w-0 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg lg:order-2">
            <ClaireImage
              {...claireImages.radiofrecventaFacial}
              alt="Procedură cu radiofrecvență la Claire Beauty Craiova"
              title="Radiofrecvență pentru cicatrici și vergeturi în Craiova"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="min-w-0 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Tehnologia salonului"
              title="Cum funcționează tratamentul cu radiofrecvență pentru cicatrici și vergeturi?"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Pentru cicatrici și vergeturi, Claire Beauty folosește un tratament
                cu radiofrecvență. În lista de servicii a salonului, procedura este{" "}
                <Link href="/radiofrecventa-fractionata-craiova" className={linkClass}>
                  radiofrecvență fracționată
                </Link>
                . Energia este de radiofrecvență, nu un fascicul laser. Scopul este
                stimularea controlată a țesutului, ca aspectul pielii să se
                uniformizeze treptat.
              </p>
              <p>
                Nu publicăm modelul aparatului și nu publicăm parametri tehnici.
                Aceste detalii nu înlocuiesc evaluarea: zona, vechimea urmei și
                felul în care arată pielea decid dacă procedura are sens și cum se
                conduce ședința. Radiofrecvență cicatrici și radiofrecvență
                vergeturi, în salon, înseamnă același principiu — energie controlată
                — aplicat pe situații diferite.
              </p>
              <p>
                Este un serviciu diferit de{" "}
                <Link href="/radiofrecventa-corporala-craiova" className={linkClass}>
                  radiofrecvența corporală
                </Link>{" "}
                folosită pentru fermitate și aspectul celulitei. Dacă obiectivul tău
                este conturul siluetei, pagina aceea este cea potrivită. Dacă
                te preocupă{" "}
                <Link href="/piele-lasata-craiova" className={linkClass}>
                  pielea lăsată
                </Link>{" "}
                și lipsa de fermitate, nu urma unei vergeturi, acolo sunt
                tratamentele pentru fermitatea pielii. Dacă obiectivul este
                aspectul unei vergeturi sau al unei cicatrici vindecate, rămâi
                aici. Dacă vrei mai degrabă să compari
                fermitatea, textura și aspectul general al feței, pagina de{" "}
                <Link href="/rejuvenare-faciala-craiova" className={linkClass}>
                  rejuvenare facială
                </Link>{" "}
                este hub-ul de obiectiv, nu înlocuitorul acestei proceduri.
              </p>
              <p>
                Rezultatele pot varia de la persoană la persoană. Vorbim despre
                îmbunătățirea aspectului și despre reducerea vizibilității, nu
                despre dispariția definitivă a urmei.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="laser-sau-radiofrecventa">
        <SectionHeading
          eyebrow="Ca să alegi informat"
          title="Tratament vergeturi cu laser sau radiofrecvență?"
          description="Dacă ai ajuns aici căutând «tratament vergeturi laser în Craiova», este important să știi că laserul și radiofrecvența nu sunt aceeași procedură."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E2B1F]/8 text-[#0E2B1F]">
              <ScanLine className="h-7 w-7" aria-hidden />
            </div>
            <h3 className="mb-5 font-serif text-2xl font-semibold text-foreground">Laser</h3>
            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>utilizează energie luminoasă</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>există mai multe tehnologii laser</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>indicațiile diferă în funcție de procedură</span>
              </li>
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#FFF9F2] p-8 shadow-premium-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Tehnologia folosită la Claire Beauty
            </p>
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Radiofrecvență
            </h3>
            <ul className="space-y-3 text-base leading-relaxed text-[#0E2B1F]/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>utilizează energie de radiofrecvență</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>urmărește stimularea controlată a țesutului</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                <span>este tehnologia utilizată pentru acest serviciu la Claire Beauty</span>
              </li>
            </ul>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            La Claire Beauty Craiova folosim radiofrecvența pentru acest serviciu.
            Înainte de procedură evaluăm zona și discutăm realist despre ce
            îmbunătățiri pot fi urmărite.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Căutările de tip „laser vergeturi Craiova”, „tratament vergeturi laser
            Craiova”, „laser cicatrici Craiova” sau „tratament cicatrici laser
            Craiova” pornesc, de multe ori, de la nevoia unei soluții profesionale
            pentru aspectul pielii. Laserul și radiofrecvența rămân proceduri
            diferite. Alegerea depinde de caracteristicile pielii, de zona tratată,
            de tipul și vechimea vergeturilor sau cicatricilor și de evaluarea
            individuală.
          </p>
          <a
            href={`tel:${businessProfile.telephone}`}
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-base font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)] sm:w-auto"
          >
            Vreau o evaluare
          </a>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="vergeturi">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Vergeturi"
            title="Tratament vergeturi în Craiova"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Vergeturile apar când pielea este întinsă mai repede decât pot ține
              pasul fibrele care îi dau elasticitate. Sarcina, variațiile de
              greutate, creșterea din adolescență sau dezvoltarea corporală rapidă
              sunt situații frecvente. Tratament vergeturi Craiova, la Claire
              Beauty, înseamnă îmbunătățirea aspectului acestor urme, nu ștergerea
              lor ca și cum nu ar fi existat.
            </p>
            <p>
              Pe abdomen, vergeturile sunt printre cele mai des întâlnite, mai ales{" "}
              <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
                vergeturile după sarcină
              </Link>
              . Zona este întinsă luni de zile, iar după naștere pielea poate
              rămâne cu linii mai deschise sau sidefii, uneori alături de o
              senzație de piele mai puțin fermă.{" "}
              <Link href="/vergeturi-dupa-sarcina-craiova" className={linkClass}>
                Tratamentul vergeturilor apărute după sarcină
              </Link>{" "}
              are o pagină proprie, ca să nu se amestece cu cicatricile
              post-acnee sau cu vergeturile din alte perioade. O linie fină de pe
              un flanc și o zonă largă de sub buric nu se evaluează la fel:
              suprafața, vechimea și pielea din jur schimbă protocolul.
            </p>
            <p>
              Vergeturi coapse, vergeturi șolduri și vergeturi fese apar des
              pentru că pielea de acolo se mișcă mult și contrastează ușor cu
              zonele netede din jur. Unele persoane le observă abia vara, la o
              lumină mai puternică. Altele le văd zilnic, când se îmbracă. În
              ambele cazuri, discuția pornește de la ce se vede acum, nu de la o
              fotografie generică de pe internet.
            </p>
            <p>
              Unele persoane întreabă și despre vergeturile de pe sâni. Nu
              includem automat această zonă în protocol. La evaluare vedem dacă
              pielea, tipul vergeturilor și contextul permit o abordare estetică.
              Fără această discuție, nu promitem că procedura se aplică acolo.
            </p>
            <p>
              Vergeturile recente și vergeturile vechi nu arată la fel și nu se
              discută la fel. Cele mai noi sunt adesea roz, roșii sau ușor
              violacee. Pielea este încă într-o fază mai activă, iar obiectivul
              realist este atenuarea culorii și a reliefului, astfel încât linia
              să se vadă mai puțin. Vergeturile mature sunt de obicei mai
              deschise, sidefii sau albe, cu o textură deja stabilizată. Și în
              cazul lor se poate urmări o piele cu aspect mai uniform și o
              reducere a vizibilității, dar schimbarea este de regulă mai lentă
              și mai nuanțată. Niciuna dintre situații nu vine cu un rezultat
              garantat. Rezultatele pot varia de la persoană la persoană.{" "}
              <Link href="/vergeturi-rosii-albe-craiova" className={linkClass}>
                Diferența dintre vergeturile roșii și cele albe
              </Link>{" "}
              — culoare, vechime și textură — este explicată separat, pe pagina
              despre{" "}
              <Link href="/vergeturi-rosii-albe-craiova" className={linkClass}>
                vergeturi roșii și albe
              </Link>
              . Aici rămâne hub-ul pentru cicatrici și vergeturi.
            </p>
            <p>
              Cremele antivergeturi pot hidrata și pot face pielea să se simtă
              mai confortabil. Limita lor este că rămân la suprafață, în timp ce
              vergetura ține de structura mai profundă a pielii. Un tratament
              vergeturi în Craiova, făcut în salon, începe cu evaluarea zonei:
              abdomen, coapse, fese, șolduri sau altă zonă pe care o indici. Abia
              apoi se stabilește dacă radiofrecvența este potrivită.
            </p>
            <p>
              Vergeturile de pe coapse sau fese pot sta lângă celulită. Sunt
              preocupări diferite.{" "}
              <Link href="/masaj-anticelulitic-craiova" className={linkClass}>
                Masajul anticelulitic
              </Link>{" "}
              lucrează pe aspectul celulitei, nu pe structura unei vergeturi.
              Dacă te interesează ambele, le separăm la evaluare, ca să nu
              amesteci două protocoale într-o singură așteptare.
            </p>
            <p>
              Dacă ai căutat „tratament vergeturi laser Craiova” sau „laser
              vergeturi Craiova”, procedura din salon pentru acest serviciu este
              radiofrecvența, nu laserul. Ce au în comun căutările este intenția:
              vrei o soluție profesională pentru felul în care se văd vergeturile.
              La evaluare spunem onest ce se poate urmări pe zona ta — o piele cu
              aspect mai uniform, nu o dispariție promisă dinainte.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cicatrici-post-acnee">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După ce pielea s-a calmat"
            title="Cicatrici post-acnee"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Acneea activă și cicatricile rămase după acnee sunt două lucruri
              diferite. Pe acest hub, cicatricile post-acnee stau lângă
              vergeturi, cicatrici postoperatorii și cicatrice după cezariană:
              toate sunt abordări estetice, după ce pielea este stabilă.
              Serviciul nu este destinat acneei active și nu promitem că oprește
              apariția coșurilor.
            </p>
            <p>
              Diferența dintre pete și cicatrici, tipul de textură și alegerea
              dintre radiofrecvență fracționată și microneedling sunt explicate
              pe pagina dedicată problemei. Vezi{" "}
              <Link href="/cicatrici-acnee-craiova" className={linkClass}>
                tratament pentru cicatricile de acnee
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="cicatrici-postoperatorii">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="După vindecare"
            title="Tratament pentru cicatrici postoperatorii și după cezariană"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              O cicatrice postoperatorie este pielea care s-a închis după o
              intervenție. Poate fi subțire și discretă sau mai lată, mai
              deschisă, ușor ridicată ori adâncită. Tratamentul pentru cicatrici
              postoperatorii de la Claire Beauty este o abordare estetică: urmărim
              ca urma să se vadă mai puțin și să se integreze mai bine în pielea
              din jur. Nu redeschidem o cicatrice și nu lucrăm pe o plagă care
              încă se vindecă.
            </p>
            <p>
              Procedurile estetice asupra unei cicatrici postoperatorii se iau
              în calcul după vindecarea corespunzătoare. Nu publicăm un termen
              fix în săptămâni sau luni, pentru că vindecarea nu are același
              ritm la fiecare intervenție și la fiecare persoană. Atunci când
              situația o impune, așteptăm acordul sau recomandarea medicului.
              Dacă ai primit o restricție, ea are prioritate față de orice
              programare în salon.
            </p>
            <p>
              Cicatricea după cezariană este una dintre cele mai frecvente
              întrebări. Zona este vizibilă, stă pe o piele care s-a întins în
              sarcină și, uneori, este însoțită de vergeturi pe abdomen.{" "}
              <Link
                href="/cicatrice-cezariana-craiova"
                id="cicatrice-cezariana"
                className={`${linkClass} scroll-mt-24`}
              >
                Tratamentul cicatricii după cezariană
              </Link>{" "}
              se discută doar după vindecarea completă. Obiectivul este
              îmbunătățirea aspectului cicatricii — culoare, relief, felul în
              care prinde lumina — nu dispariția ei. O cicatrice rămâne o
              cicatrice. Poate deveni mai discretă. Nu promitem că dispare.
            </p>
            <p>
              Dacă cicatricea de după cezariană sau de după o altă operație a
              rămas reliefată, îngroșată, sau te întrebi dacă ar putea fi
              cheloidă, discuția este alta. O cicatrice ridicată nu este automat
              cheloidă. Pagina despre{" "}
              <Link href="/cicatrici-cheloide-craiova" className={linkClass}>
                cicatrici reliefate și cicatrici cheloide în Craiova
              </Link>{" "}
              explică când este nevoie mai întâi de evaluare medicală și când se
              poate vorbi despre o procedură estetică.
            </p>
            <p>
              Cicatricile după operație, pe abdomen sau pe alte zone ale
              corpului, se evaluează la fel de concret: este pielea închisă,
              este zona stabilă, există o recomandare medicală de respectat,
              cât de veche este urma și cât de diferită este de pielea din jur.
              Două cicatrici cu aceeași lungime pot arăta foarte diferit. De
              aceea protocolul nu se copiază de la o persoană la alta.
            </p>
            <p>
              Unele cliente ajung la câteva luni după naștere și vor, în același
              timp, ceva pentru cicatrice și ceva pentru vergeturile de pe
              abdomen. Le putem discuta în aceeași evaluare, dar nu sunt automat
              aceeași ședință și același ritm. Spunem ce se poate urmări pentru
              fiecare și ce lăsăm pe mai târziu, dacă pielea nu este pregătită.
            </p>
            <p>
              Dacă recuperarea după intervenție include și drenaj, acesta este
              un serviciu separat, discutat în funcție de recomandarea medicului.
              Pagina de{" "}
              <Link href="/tratamente-corporale-craiova" className={linkClass}>
                tratamente corporale în Craiova
              </Link>{" "}
              adună procedurile de corp ale salonului, ca să vezi contextul fără
              să amesteci o cicatrice vindecată cu un protocol de fermitate sau
              de celulită.
            </p>
            <p>
              Radiofrecvența, aici, rămâne o procedură estetică pentru aspect.
              Nu înlocuiește controlul medical al cicatricii și nu este indicată
              doar pentru că a trecut „ceva timp”. La evaluare ne uităm la
              piele, nu la calendarul dintr-un articol.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="cum-decurge">
        <SectionHeading
          eyebrow="În salon"
          title="Cum decurge o ședință"
          description="Patru pași, fără grabă și fără un protocol copiat identic pentru toată lumea."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sessionSteps.map((item) => (
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

      <SectionShell className="bg-background" id="sedinte">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Ritm"
            title="Câte ședințe sunt necesare?"
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Numărul de ședințe diferă în funcție de tipul cicatricii sau
              vergeturilor, vechime, suprafață, particularitățile pielii și
              răspunsul individual.
            </p>
            <p>
              Nu publicăm un număr fix, pentru că salonul nu lucrează cu un
              protocol unic „pentru vergeturi” sau „pentru cicatrici”. O urmă
              recentă, pe o suprafață mică, nu se compară cu o zonă veche și
              extinsă de pe abdomen. La evaluare putem spune un interval
              orientativ. Pe parcurs, pielea confirmă sau corectează acel
              interval. Dacă răspunsul este mai lent, o spunem. Dacă o zonă nu
              merită continuată, o spunem la fel de direct.
            </p>
            <p>
              Distanța dintre ședințe se stabilește tot atunci, nu dintr-un
              calendar generic. Graba nu face urma să dispară mai repede, iar
              un număr mare de ședințe nu este, de la sine, o garanție.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#FFF9F2]" id="pret">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#D4AF37]/30 bg-white/80 px-6 py-12 text-center shadow-premium-lg sm:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Investiție în pielea ta
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-4xl">
            Tratament cicatrici și vergeturi
          </h2>
          <p className="font-serif text-5xl font-semibold tracking-tight text-[#0E2B1F] sm:text-6xl">
            1.000 lei
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E2B1F]/70">
            / ședință
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Înaintea începerii tratamentului se recomandă evaluarea zonei pentru
            stabilirea protocolului potrivit.
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
              WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Lista completă a serviciilor este pe pagina de{" "}
            <Link href="/preturi#remodelare" className={linkClass}>
              prețuri
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background" id="rezultate">
        <SectionHeading
          eyebrow="Galerie"
          title="Rezultate"
          description="Publicăm doar fotografii reale ale clientelor, când există acordul lor."
        />
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-dashed border-[#D4AF37]/40 bg-[#FFF9F2]/70 px-6 py-14 text-center">
          <p className="font-serif text-2xl font-semibold text-[#0E2B1F]">
            Rezultatele reale vor fi adăugate în curând.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Până atunci nu folosim imagini generate și nu prezentăm exemple care
            nu aparțin clientelor Claire Beauty. La evaluare discutăm ce
            îmbunătățiri pot fi urmărite în cazul tău.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40" id="craiova">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="În oraș"
              title="Tratament pentru cicatrici și vergeturi în Craiova"
            />
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Claire Beauty este pe Strada Principatele Unite nr. 5. Din Centru
                ajungi repede, iar drumul este simplu și din Craiovița Nouă, din
                Brazda lui Novac, din Rovine sau din 1 Mai. Vin cliente și din
                Valea Roșie, din Lăpuș, din zona George Enescu și din apropierea
                Parcului Romanescu — programarea se face la același salon, nu
                există o adresă diferită pentru fiecare cartier.
              </p>
              <p>
                Evaluarea durează cât este nevoie ca să vedem zona și să spunem
                ce se poate urmări. Poți veni direct după serviciu în timpul
                săptămânii sau sâmbăta, în programul salonului: luni–vineri,
                09:00–20:00, sâmbătă 10:00–16:00. Dacă vii din afara Craiovei,
                spune-ne din timp, ca să grupăm evaluarea și eventuala primă
                discuție despre protocol într-o singură vizită.
              </p>
              <p>
                Telefonul salonului este {businessProfile.telephoneDisplay}. Pe
                WhatsApp poți trimite, dacă vrei, o descriere a zonei înainte să
                ajungi — fără fotografii medicale trimise la întâmplare pe care
                să le interpretăm ca diagnostic. Decizia se ia în salon, cu
                pielea în față.
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
              className={`mt-6 inline-flex min-h-11 items-center ${linkClass}`}
            >
              Deschide harta
            </a>
          </div>
        </div>
      </SectionShell>

      <ServiceCTA
        title="Programează o evaluare la Claire Beauty Craiova"
        description="Spune-ne zona care te interesează. Stabilim împreună dacă radiofrecvența este potrivită și ce îmbunătățiri pot fi urmărite, fără promisiuni pe care pielea nu le poate susține."
        pricingHref="/preturi#remodelare"
      />
    </>
  )
}
