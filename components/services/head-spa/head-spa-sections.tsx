import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { claireImages } from "@/lib/images/claire-beauty"
import { businessProfile } from "@/lib/seo/business"
import { ViewPricesLink } from "@/components/pricing/view-prices-link"
import {
  headSpaOffer,
  headSpaWhatsappHref,
} from "@/lib/content/head-spa"
import { cn } from "@/lib/utils"

const whatsappHref = headSpaWhatsappHref(businessProfile.whatsappUrl)

const linkClass =
  "font-medium text-[#0E2B1F] underline decoration-[#D4AF37]/60 underline-offset-4 transition-colors hover:text-[#8C7320]"

const gallery = [
  {
    image: claireImages.masajAtmosfera,
    alt: "Atmosferă liniștită în salonul Claire Beauty din Craiova. Fotografia nu documentează protocolul Head Spa.",
    caption: "Atmosfera salonului",
    frame: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[36rem]",
  },
  {
    image: claireImages.terapeutPortret,
    alt: "Ana Savovici la Claire Beauty Craiova.",
    caption: "Claire Beauty",
    frame: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    image: claireImages.terapeutMasajIntrare,
    alt: "Intrarea către cabinet la Claire Beauty Craiova.",
    caption: "Cabinetul",
    frame: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    image: claireImages.terapeutMasajSemn,
    alt: "Semnul cabinetului Claire Beauty din Craiova.",
    caption: "Locația",
    frame: "lg:col-span-12",
    aspect: "aspect-[16/9] lg:aspect-[21/8]",
  },
] as const

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm",
        light ? "text-[#D4AF37]" : "text-[#8C7320]",
      )}
    >
      {children}
    </p>
  )
}

export function HeadSpaSections() {
  return (
    <>
      <section className="bg-[#FFF9F2] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
          <ScrollReveal>
            <Eyebrow>Experiența</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-5xl">
              Mai mult decât un simplu masaj al scalpului
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              <p>
                Head Spa la Claire Beauty este o ședință dedicată, nu un adaos
                la spălatul din salon și nu un masaj corporal mutat pe cap.
                Numele descrie o experiență de îngrijire cosmetică și de
                relaxare, centrată pe scalp și pe păr.
              </p>
              <p>
                Vii pentru ritm, liniște și atenție. Nu pentru un diagnostic
                și nu pentru o listă de promisiuni despre creșterea părului.
                Dacă protocolul din salon are mai multe etape, ele se spun la
                programare. Pagina nu le completează din reclamele altor
                saloane.
              </p>
              <p>
                Lista de prețuri confirmă serviciul și tariful. Nu publică
                însă scenariul pas cu pas. De aceea nu inventăm aici scrub,
                mască, aburi sau o cascadă de apă. Etapele reale ți le spunem
                la programare, înainte să ajungi.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="font-serif text-3xl font-medium leading-snug text-[#0E2B1F] sm:text-4xl lg:text-5xl">
              Nu vii doar pentru un serviciu.
              <span className="mt-3 block text-[#8C7320]">Vii pentru o pauză.</span>
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#0E2B1F]/75">
              Tonul rămâne simplu: un interval doar al tău, într-un salon din
              Craiova, cu un preț anunțat dinainte.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F4EDE3] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <Eyebrow>Pe înțelesul tuturor</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-5xl">
              Ce este Head Spa?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              Head Spa este, în oferta Claire Beauty, un serviciu de beauty și
              wellness. Poate fi căutat și ca headspa Craiova, spa scalp sau
              masaj scalp Craiova. La noi stă lângă îngrijirea cosmetică și
              relaxare, nu lângă dermatologie.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {[
              {
                title: "Nu este spălatul obișnuit",
                text: "Un spălat de salon are alt ritm și alt scop: igienă și, uneori, coafare. Head Spa este listat separat, cu preț propriu. Nu îl descriem ca pe un șampon obișnuit.",
              },
              {
                title: "Nu este doar un masaj scurt",
                text: "Un masaj al scalpului poate fi o parte dintr-o experiență. Nu publicăm tehnica, presiunea sau minutele, pentru că nu sunt în tariful actual. Diferența de pe site este alta: Head Spa are pagină și preț proprii, iar masajele corporale stau pe pagina de masaj.",
              },
              {
                title: "Nu este consultație dermatologică",
                text: "Nu diagnosticăm scalp, nu tratăm alopecie, mătreață sau dermatită și nu promitem creșterea părului. Dacă ai o problemă medicală, medicul dermatolog este pasul corect. Head Spa rămâne cosmetic.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <article className="h-full border-t border-[#D4AF37]/50 pt-6">
                  <h3 className="font-serif text-2xl font-semibold text-[#0E2B1F]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#0E2B1F]/78">
                    {item.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0E2B1F] py-20 text-[#FFF9F2] sm:py-28">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <Eyebrow light>Ședința</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Cum arată experiența Head Spa la Claire Beauty?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#FFF9F2]/82 sm:text-lg">
              Nu afișăm un protocol în șase pași, pentru că acel protocol nu
              este scris în materialele salonului. Ce urmează este ceea ce
              poți verifica azi, plus ce îți clarificăm înainte să te
              programezi.
            </p>
          </ScrollReveal>

          <ol className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                index: "01",
                title: "Serviciul confirmat",
                text: "În tarife există o singură variantă: Head Spa, 300 lei pe ședință. Nu sunt listate pachete diferite, abonamente sau durate alternative.",
              },
              {
                index: "02",
                title: "Durata, la programare",
                text: "Minutele nu apar lângă preț. Nu spunem că ședința ține o oră, 75 sau 90 de minute. Durata o afli când rezervi.",
              },
              {
                index: "03",
                title: "Etapele, spuse clar",
                text: "Nu publicăm curățare, masaj cervical, tratament de păr, ser sau uscare ca și cum ar fi deja confirmate. Îți spunem ce cuprinde ședința ta, nu un ritual generic de pe internet.",
              },
              {
                index: "04",
                title: "Cum pleci",
                text: "Spălarea, clătirea, uscarea și coafarea nu sunt bifate în prețul public. Le întrebăm împreună, ca să nu presupui că pleci coafată sau cu părul ud.",
              },
            ].map((step) => (
              <ScrollReveal key={step.index}>
                <li className="flex gap-5 border-t border-[#D4AF37]/30 pt-6">
                  <span className="font-serif text-3xl text-[#D4AF37]">{step.index}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-[#FFF9F2]/78">
                      {step.text}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#FFF9F2] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <ClaireImage
                {...claireImages.terapeutPortret}
                alt="Ana Savovici, la Claire Beauty Craiova. Portretul nu arată o procedură Head Spa."
                title="Claire Beauty Craiova"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Eyebrow>Relaxare</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-5xl">
              Masajul scalpului – partea pe care nu vrei să se termine
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              <p>
                Cine caută masaj scalp Craiova caută, de cele mai multe ori,
                o senzație: liniște, mâini calme, un ritm care nu grăbește.
                Head Spa este poziționat în această zonă de confort, nu ca
                terapie pentru alopecie.
              </p>
              <p>
                Nu scriem că masajul stimulează garantat creșterea părului.
                Nu descriem presiuni, uleiuri sau minute pe ceafă și umeri,
                pentru că aceste detalii nu sunt în protocolul publicat.
                Dacă ședința include masaj, îți spunem cum se simte și cât
                ține atunci când te programezi.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F7F1E8] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow>Scalp și păr</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Îngrijirea scalpului și a părului într-un singur ritual
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              <p>
                Head Spa este gândit ca o singură ședință în care scalpului și
                părului li se acordă timp. Atât este confirmat de felul în
                care serviciul este numit și tarifiat. Produsele, brandul și
                categoria lor — șampon, ser, mască — nu sunt documentate.
                Nu le numim.
              </p>
              <p>
                Nu promitem reglarea sebumului, dispariția mătreții sau un
                scalp „tratat”. Dacă ai scalpul gras, sensibil sau cu o
                problemă activă, o spunem la programare și, unde este cazul,
                te îndrumăm către dermatolog înainte de o procedură cosmetică.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0E2B1F] py-24 text-[#FFF9F2] sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <Eyebrow light>Pauza ta</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Un moment în care nu trebuie să faci nimic
            </h2>
            <p className="mt-8 font-serif text-2xl leading-snug text-[#F0D78C] sm:text-3xl">
              Fără telefon.
              <span className="mt-2 block">Fără grabă.</span>
              <span className="mt-2 block">Fără alte lucruri de rezolvat.</span>
            </p>
            <p className="mt-6 text-base text-[#FFF9F2]/80">Doar timpul tău.</p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#FFF9F2]/65">
              Nu scriem „o oră”, pentru că durata ședinței nu este publicată.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold tracking-wide text-[#0E2B1F] transition-colors hover:bg-[#F0D78C] sm:w-auto"
            >
              Vreau experiența Head Spa
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#FFF9F2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <Eyebrow>Pentru cine</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-5xl">
              Cui i se potrivește experiența Head Spa?
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 bg-[#D4AF37]/25 sm:grid-cols-2">
            {[
              {
                title: "Vrei să te relaxezi",
                text: "Cauți o pauză liniștită, nu un plan de tratament medical. Head Spa poate fi ales pentru senzația de răgaz, fără să fie prezentat ca terapie pentru stres sau anxietate.",
              },
              {
                title: "Cauți o experiență spa diferită",
                text: "Vrei ceva centrat pe scalp și păr, separat de masajul corporal. Pe site, cele două au pagini și prețuri diferite, ca să nu le confunzi la programare.",
              },
              {
                title: "Vrei să acorzi mai multă atenție scalpului",
                text: "Ca îngrijire cosmetică și timp acordat zonei, nu ca rezolvare a unei afecțiuni. Dacă scalpul doare, este inflamat sau pierde păr brusc, întâi dermatologul.",
              },
              {
                title: "Vrei un ritual complet de îngrijire",
                text: "O ședință anunțată ca experiență, cu etapele confirmate înainte, nu presupuse. Complet înseamnă aici „o programare dedicată”, nu o listă de produse pe care nu o avem publicată.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-[#FFF9F2] p-8 sm:p-10">
                <h3 className="font-serif text-2xl font-semibold text-[#0E2B1F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0E2B1F]/75">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Head Spa după o săptămână aglomerată
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              <p>
                Poate fi ales ca experiență de relaxare și deconectare, la
                finalul unei săptămâni pline. Atât. Nu tratăm stresul și nu
                tratăm anxietatea. Nu înlocuiește odihna, medicul sau un masaj
                corporal ales pentru tensiune musculară.
              </p>
              <p>
                Dacă îți dorești lucrul pe corp, pagina de{" "}
                <Link href="/masaj-craiova" className={linkClass}>
                  masaj în Craiova
                </Link>{" "}
                este locul potrivit. Head Spa rămâne experiența cu preț propriu,
                orientată spre scalp, păr și pauză.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#FFF9F2] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Head Spa este tratament pentru căderea părului?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80">
              <p>
                Nu. Nu îl prezentăm ca tratament pentru căderea părului, pentru
                alopecie sau ca stimulare garantată a creșterii. Căderea
                părului poate avea cauze diferite.
              </p>
              <p>
                Dacă este importantă, persistentă, apărută brusc sau asociată
                cu modificări ale scalpului, este indicată evaluarea
                dermatologică. Head Spa poate rămâne, separat, un serviciu
                cosmetic și de relaxare — doar dacă ți se potrivește și nu
                există un motiv să amâni.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Head Spa tratează mătreața?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80">
              <p>
                Nu promitem vindecarea mătreții. Nu este publicat un protocol
                de curățare cosmetică a scalpului, așa că nu descriem unul.
              </p>
              <p>
                Mătreața persistentă, dermatita și leziunile scalpului pot
                necesita dermatolog. Spune-ne înainte de programare dacă
                scalpul este inflamat, iritat sau în tratament. Nu diagnosticăm
                dintr-un mesaj.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1E8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <Eyebrow>Head Spa Experience</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold text-[#0E2B1F] sm:text-5xl">
              Atmosfera în care are loc experiența
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/75 sm:text-lg">
              Fotografiile sunt din salonul Claire Beauty, Craiova. Nu avem
              încă imagini cu patul, apa sau masajul de la Head Spa, așa că nu
              le înlocuim cu fotografii de procedură ale altor servicii.
            </p>
          </ScrollReveal>

          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:hidden">
            {gallery.map((item) => (
              <figure key={item.caption} className="w-[82%] shrink-0 snap-center">
                <div className={cn("relative overflow-hidden rounded-[1.5rem]", item.aspect)}>
                  <ClaireImage
                    {...item.image}
                    alt={item.alt}
                    fill
                    sizes="82vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm tracking-wide text-[#0E2B1F]/70">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 hidden grid-cols-12 gap-4 lg:grid">
            {gallery.map((item) => (
              <figure key={item.caption} className={item.frame}>
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[1.75rem]",
                    item.aspect,
                  )}
                >
                  <ClaireImage
                    {...item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1280px) 50vw, 40vw"
                  />
                </div>
                <figcaption className="mt-3 text-sm tracking-wide text-[#0E2B1F]/70">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="durata" className="bg-[#FFF9F2] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F]">
              Cât durează o ședință Head Spa?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/80">
              Durata nu este trecută în lista de prețuri. Există o singură
              variantă, nu mai multe lungimi cu tarife diferite. Îți spunem
              minutele când rezervi, nu le aproximăm aici.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F]">
              Trebuie să mă pregătesc înainte de Head Spa?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/80">
              Nu există instrucțiuni speciale publicate. Nu îți cerem să nu
              te speli trei zile și nu îți interzicem balsamul. Dacă trebuie
              să vii cu părul uscat sau nespălat, o afli la programare.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F]">
              Cum rămâne părul după ședință?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/80">
              Nu este confirmat dacă Head Spa include clătire, spălare, uscare
              sau styling. Nu presupune că pleci coafată. Întreabă înainte:
              răspunsul schimbă felul în care îți organizezi ziua după ședință.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
            Când trebuie să ne spui înainte de programare?
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            <p>
              Nu avem o listă medicală de contraindicații publicată pentru
              Head Spa. Te rugăm totuși să ne spui dacă scalpul are leziuni,
              inflamație, o intervenție recentă sau o afecțiune dermatologică
              activă.
            </p>
            <p>
              Nu punem un diagnostic. Dacă problema scalpului este medicală,
              evaluarea dermatologică vine înaintea procedurii cosmetice. Ne
              poți scrie pe WhatsApp sau ne poți suna, iar noi îți spunem dacă
              programarea cosmetică are sens în acel moment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F2] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Programare</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
            Cum rezervi și ce merită să întrebi
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            <p>
              Programarea se face la salon, nu printr-o fișă medicală. Sună la{" "}
              <a href={`tel:${businessProfile.telephone}`} className={linkClass}>
                {businessProfile.telephoneDisplay}
              </a>
              , scrie pe WhatsApp sau folosește{" "}
              <Link href="/contact" className={linkClass}>
                pagina de contact
              </Link>
              , unde Head Spa este în lista de servicii. Intervalul afișat al
              salonului este luni–vineri, 09:00–20:00, și sâmbătă, 10:00–16:00.
              Ora ședinței depinde de locurile libere.
            </p>
            <p>
              În mesaj, cere patru lucruri care nu stau lângă preț: durata,
              etapele, dacă părul se spală și dacă se usucă sau se coafează.
              Răspunsul îți arată cum îți rămâne restul zilei. Dacă scalpul are
              leziuni, inflamație, o intervenție recentă sau o afecțiune
              dermatologică, spune-o în același mesaj. Nu diagnosticăm de la
              distanță. Pentru partea medicală, dermatologul rămâne pasul
              potrivit, iar ședința cosmetică se amână dacă nu are sens.
            </p>
            <p>
              Adresa este {businessProfile.address.formatted}. Prețul de pe
              această pagină este cel din lista actuală: {headSpaOffer.price} pe
              ședință, o singură variantă. Nu există un al doilea tarif publicat
              pentru o versiune scurtă sau lungă.
            </p>
          </div>
        </div>
      </section>

      <section id="pret" className="bg-[#F7F1E8] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] border border-[#D4AF37]/40 bg-[#0E2B1F] px-8 py-10 text-[#FFF9F2] shadow-[0_24px_60px_rgba(14,43,31,0.18)] sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
              Head Spa
            </p>
            <p className="mt-4 font-serif text-6xl font-semibold text-[#F0D78C]">
              {headSpaOffer.price}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#FFF9F2]/70">
              {headSpaOffer.detail ?? "pe ședință"}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-[#FFF9F2]/75">
              O singură variantă în lista actuală. Durata nu este afișată lângă
              preț.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#F0D78C]"
            >
              Programează Head Spa
            </Link>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Cât costă Head Spa în Craiova?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
              Prețul public al Head Spa la Claire Beauty este {headSpaOffer.price}
              {headSpaOffer.detail ? ` ${headSpaOffer.detail}` : ""}. Acesta
              este head spa preț Craiova așa cum apare în tarife, nu o
              estimare. Nu justificăm suma cu beneficii pe care nu le-am
              verificat.
            </p>
            <h3 className="mt-10 font-serif text-2xl font-semibold text-[#0E2B1F]">
              Ce include experiența?
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#0E2B1F]/85">
              <li>Serviciul Head Spa, o ședință</li>
              <li>{headSpaOffer.price}, varianta unică din lista de prețuri</li>
              <li>
                Locația Claire Beauty, {businessProfile.address.streetAddress},{" "}
                {businessProfile.address.locality}
              </li>
            </ul>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/75">
              Nu sunt publicate: durata, produsele, etapele, spălarea, uscarea
              și coafarea. Le confirmăm la programare, ca să știi pentru ce
              plătești înainte să vii.
            </p>
            <ViewPricesLink section="faciale" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1E8] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Head Spa sau masaj de relaxare?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80">
              <p>
                Head Spa este experiența cu tarif propriu, centrată pe scalp și
                păr. Masajul de pe site este o experiență corporală: spate,
                picioare, ritm de ședință de masaj.
              </p>
              <p>
                Nu le amestecăm. Dacă vrei corp, mergi la{" "}
                <Link href="/masaj-craiova" className={linkClass}>
                  masaj Craiova
                </Link>
                . Dacă vrei pauza orientată spre scalp, rămâi la Head Spa.
                Articolul despre{" "}
                <Link
                  href="/blog/beneficii-masaj-relaxare-craiova"
                  className={linkClass}
                >
                  beneficiile masajului de relaxare
                </Link>{" "}
                descrie ședința corporală, inclusiv lucrul pe gât și scalp din
                acel masaj — nu protocolul Head Spa.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
              Head Spa la Claire Beauty Craiova
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/85">
              <li>Serviciu listat separat, cu preț public de {headSpaOffer.price}</li>
              <li>Poziționat ca experiență cosmetică și de relaxare</li>
              <li>Atmosferă de salon body spa, în Craiova</li>
              <li>
                Adresă reală: {businessProfile.address.streetAddress},{" "}
                {businessProfile.address.locality}
              </li>
            </ul>
            <p className="mt-5 text-base leading-relaxed text-[#0E2B1F]/75">
              Nu spunem că suntem primul salon, singurul Head Spa sau că avem
              un aparat anume. Camera dedicată, marca echipamentului și
              brandul produselor nu sunt documentate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
            Ce poți aștepta de la ședință
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            <p>
              Poți aștepta o programare de îngrijire și de relaxare, cu prețul
              cunoscut dinainte, la Claire Beauty în Craiova. Poți aștepta și
              un răspuns direct la ce nu este în tarif: cât durează, care sunt
              etapele, dacă părul se spală și dacă se usucă sau se coafează.
              Aceste patru lucruri schimbă decizia mai mult decât un adjectiv
              de pe o reclamă.
            </p>
            <p>
              Nu poți aștepta, pe baza acestei pagini, un plan pentru căderea
              părului, un tratament de mătreață sau o reglare a sebumului. Nu
              promitem că scalpul se vindecă și nu punem Head Spa în locul unei
              consultații. Dacă acesta este motivul căutării, dermatologul este
              adresa potrivită. Ședința cosmetică poate rămâne o opțiune
              separată, doar dacă nu există un motiv să o amâni.
            </p>
            <p>
              Claire Beauty este salonul de pe Strada Principatele Unite nr. 5.
              În aceeași adresă există masaj și îngrijire facială, dar Head Spa
              nu este nici masajul corporal, nici un tratament de ten. Masajul
              lucrează corpul. Tratamentele faciale lucrează pielea feței. Head
              Spa este pauza listată pentru scalp și păr, la {headSpaOffer.price}{" "}
              pe ședință.
            </p>
            <p>
              Dacă ai citit în altă parte despre cascadă de apă, analiză cu
              cameră, ozon, aburi sau aromaterapie, nu le transfera automat
              aici. Le confirmăm doar dacă fac parte din ședința Claire Beauty.
              Până atunci rămâne valabil ce este scris în tarife: prețul este
              public, iar protocolul detaliat se spune înainte de ora rezervată.
            </p>
            <p>
              La programare nu este nevoie să știi termenii de salon. Spui că
              vrei Head Spa, spui dacă scalpul are ceva de semnalat și întrebi
              cum pleci cu părul. Durata, spălarea și uscarea se stabilesc
              atunci, pe baza ședinței reale de la Claire Beauty.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F2] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Craiova</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0E2B1F] sm:text-4xl">
            Head Spa în Craiova – experiența Claire Beauty
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#0E2B1F]/80 sm:text-lg">
            <p>
              Head Spa în Craiova se face la Claire Beauty, pe{" "}
              {businessProfile.address.streetAddress}, în {businessProfile.address.locality},
              județul {businessProfile.address.region}. Serviciul este listat la{" "}
              {headSpaOffer.price} pe ședință. Acesta este prețul public de head
              spa în Craiova pentru varianta unică din tarife, nu un interval
              „de la”.
            </p>
            <p>
              Căutările head spa Craiova, headspa Craiova sau spa scalp Craiova
              descriu, de obicei, o experiență de îngrijire și de relaxare. La
              Claire Beauty rămânem în aceeași zonă: beauty și wellness. Nu
              înlocuim dermatologul și nu oferim ședința ca tratament pentru
              căderea părului, mătreață sau dermatită.
            </p>
            <p>
              Masaj scalp Craiova apare des lângă Head Spa. Pe site, masajele
              descrise la pagina de masaj sunt experiențe corporale. Head Spa
              are preț și pagină separate. Pașii din interior — cât durează,
              dacă există apă, spălare sau uscare — nu sunt în tariful public.
              Îi confirmăm la telefon, pe{" "}
              <a href={whatsappHref} className={linkClass}>
                WhatsApp
              </a>{" "}
              sau prin{" "}
              <Link href="/contact" className={linkClass}>
                formularul de programare
              </Link>
              .
            </p>
            <p>
              Dacă vii din centrul Craiovei sau din cartierele apropiate,
              adresa rămâne {businessProfile.address.streetAddress}. Head spa
              preț Craiova, așa cum este publicat acum, este {headSpaOffer.price}{" "}
              pe ședință. Pentru restul tarifelor de îngrijire, pagina de{" "}
              <Link href="/tratamente-faciale-craiova" className={linkClass}>
                tratamente faciale
              </Link>{" "}
              și{" "}
              <Link href="/preturi" className={linkClass}>
                lista de prețuri
              </Link>{" "}
              stau lângă acest serviciu, fără să îl amestece cu procedurile de
              remodelare.
            </p>
            <p>
              Salonul primește programări luni–vineri, 09:00–20:00, și sâmbătă,
              10:00–16:00. Telefonul este {businessProfile.telephoneDisplay}.
              Head Spa nu are, în tariful actual, un abonament separat.
            </p>
            <p>
              Util pentru cine compară oferte din Dolj: prețul de{" "}
              {headSpaOffer.price} este suma listei, nu un „de la”. Ce nu intră
              automat în comparație, pentru că nu este scris, sunt minutele,
              produsele și felul în care pleci cu părul. Două oferte cu același
              nume pot însemna lucruri diferite. La Claire Beauty îți spunem
              varianta noastră înainte de ora rezervată.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0E2B1F] py-20 text-[#FFF9F2] sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-2xl">
            <Eyebrow light>Prima dată la Head Spa?</Eyebrow>
            <h2 className="font-serif text-3xl font-semibold sm:text-5xl">
              Trei răspunsuri înainte să rezervi
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                q: "Ce trebuie să fac înainte?",
                a: "Nimic anunțat public. Nu există regula „nu te spăla trei zile”. Dacă e nevoie de o pregătire, o primești la programare.",
              },
              {
                q: "Cât durează?",
                a: `Durata nu este publicată. Confirmat este prețul: ${headSpaOffer.price} pe ședință, o singură variantă.`,
              },
              {
                q: "Cum rămâne părul după?",
                a: "Nu știm din tarife dacă includ spălarea, uscarea sau coafarea. Întreabă înainte să stabilești ora.",
              },
            ].map((item) => (
              <article key={item.q} className="border-t border-[#D4AF37]/40 pt-6">
                <h3 className="font-serif text-2xl font-semibold text-[#F0D78C]">
                  {item.q}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#FFF9F2]/80">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function HeadSpaFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0E2B1F] py-24 text-[#FFF9F2] sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Eyebrow light>Timp pentru tine</Eyebrow>
        <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-5xl">
          Experimentează Head Spa la Claire Beauty
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#FFF9F2]/82 sm:text-lg">
          Un ritual dedicat scalpului, părului și momentului tău de relaxare,
          în centrul Craiovei.
        </p>
        <p className="mt-8 font-serif text-4xl text-[#F0D78C]">{headSpaOffer.price}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#FFF9F2]/60">
          Head Spa · pe ședință
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-colors hover:bg-[#F0D78C] sm:w-auto"
          >
            Programează Head Spa
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#FFF9F2]/35 px-8 py-3 text-sm font-semibold text-[#FFF9F2] transition-colors hover:border-[#D4AF37] hover:text-[#F0D78C] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Întreabă pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
