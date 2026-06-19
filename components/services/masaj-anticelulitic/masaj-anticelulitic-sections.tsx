import type { ComponentType, ReactNode } from "react"
import { VisualGallery } from "@/components/shared/visual-gallery"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages, pageGalleries } from "@/lib/images/claire-beauty"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
  Leaf,
  MapPin,
  Sparkles,
  Target,
  Timer,
  Users,
  Waves,
  XCircle,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { masajAnticeluliticWhatsappMessage } from "@/lib/content/masaj-anticelulitic"

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
        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
          <span className="text-foreground/90">{item}</span>
        </li>
      ))}
    </ul>
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
    <article className="group rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F] transition-colors group-hover:bg-[#D4AF37]/20">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </article>
  )
}

function InlineCTA({
  title,
  description,
  primaryLabel = "Programează-te acum",
}: {
  title: string
  description: string
  primaryLabel?: string
}) {
  return (
    <SectionShell className="bg-secondary/50 py-16">
      <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 px-6 py-10 text-center shadow-premium backdrop-blur-sm sm:px-10">
        <h2 className="mb-4 font-serif text-3xl font-semibold text-[#0E2B1F]">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="tel:+40757851882"
            className="inline-flex items-center justify-center rounded-full bg-[#0E2B1F] px-8 py-3 text-sm font-semibold text-[#D4AF37] transition-all hover:shadow-[0_0_18px_rgba(212,175,55,0.28)]"
          >
            {primaryLabel}
          </Link>
          <Link
            href={`https://wa.me/40757851882?text=${encodeURIComponent(masajAnticeluliticWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white/70 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-[#D4AF37]/10"
          >
            Cere informații pe WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#0E2B1F]/15 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-white/70"
          >
            Consultanță
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

export function MasajAnticeluliticSections() {
  return (
    <>
      <InlineCTA
        title="Programează-te pentru masaj anticelulitic în Craiova"
        description="Începe un protocol personalizat pentru reducerea celulitei, fermitatea pielii și remodelare corporală la Claire Beauty."
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tehnică intensivă"
              title="Ce este masajul anticelulitic și de ce funcționează"
              description="Masajul anticelulitic este o tehnică intensivă care acționează asupra țesutului adipos și sistemului limfatic. Spre deosebire de masajul clasic, acesta implică mișcări ferme și profunde care ajută la mobilizarea depozitelor de grăsime."
            />
            <BulletList
              items={[
                "stimulezi circulația sanguină",
                "activezi drenajul limfatic",
                "elimini toxinele",
                "reduci retenția de apă",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              De aceea, masajul anticelulitic este una dintre cele mai eficiente
              metode non-invazive pentru reducerea celulitei. Masajul
              anticelulitic este tot mai căutat în Craiova pentru reducerea
              aspectului de celulită și îmbunătățirea fermității pielii.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.masajAnticelulitic}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Diagnostic personalizat"
          title="Tipuri de celulită – tratament corect pentru rezultate reale"
          description="Nu toate formele de celulită sunt la fel, iar tratamentul trebuie adaptat."
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            "Celulită moale – apare din retenție de apă și lipsă de tonus",
            "Celulită fibroasă – densă, dureroasă, mai greu de eliminat",
            "Celulită edematoasă – asociată cu circulație slabă",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium backdrop-blur-sm"
            >
              <Target className="mb-4 h-6 w-6 text-[#D4AF37]" />
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground leading-relaxed">
          La Claire Beauty Craiova, identificăm tipul de celulită și aplicăm
          tehnici specifice pentru eficiență maximă.
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile masajului anticelulitic în Craiova"
          description="Tratamentul anticelulitic susține remodelarea corporală, fermitatea pielii și reducerea vizibilă a celulitei."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "reducerea vizibilă a celulitei",
            "piele mai fermă și netedă",
            "îmbunătățirea circulației",
            "eliminarea toxinelor",
            "reducerea circumferințelor",
            "stimularea metabolismului local",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Protocolul este adaptat pentru tratament anticelulitic Craiova și
                pentru obiectivele tale de fermitate și contur.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Când NU este suficient masajul anticelulitic
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Masajul anticelulitic este eficient pentru reducerea celulitei, dar
            nu rezolvă complet toate cauzele. Pentru rezultate mai rapide și
            vizibile, este recomandat în combinație cu{" "}
            <Link
              href="/drenaj-limfatic-craiova"
              className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
            >
              drenaj limfatic
            </Link>{" "}
            și{" "}
            <Link
              href="/radiofrecventa-corporala-craiova"
              className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
            >
              radiofrecvență corporală
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Experiența în salon"
              title="Cum decurge o ședință de masaj anticelulitic în Craiova"
              description="Fiecare ședință începe cu evaluarea zonelor afectate. Procedura include tehnici de frământare profundă, presiune controlată și mișcări ritmate."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary/60 p-5">
                <Timer className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">Durată: 30–60 minute</p>
              </div>
              <div className="rounded-2xl bg-secondary/60 p-5">
                <Activity className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">
                  Intensitate: adaptată fiecărei persoane
                </p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dacă îți dorești și relaxare, poți alterna cu alte tipuri de{" "}
              <Link
                href="/masaj-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj
              </Link>
              , pentru un echilibru între eficiență și confort.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.masajAnticeluliticEquip}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Rezervă ședința ta de masaj anticelulitic"
        description="Locurile sunt limitate în perioadele aglomerate. Programează din timp pentru un protocol adaptat tipului tău de celulită."
        primaryLabel="Rezervă ședința"
      />

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Zone tratate"
          title="Zonele tratate cel mai frecvent"
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["coapse", "fese", "abdomen", "șolduri", "brațe"].map((zone) => (
            <div
              key={zone}
              className="rounded-2xl border border-[#D4AF37]/15 bg-[#FFF9F2]/70 px-5 py-4 text-center font-medium capitalize text-foreground shadow-premium"
            >
              {zone}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Users} title="Cui i se adresează acest tratament">
            <BulletList
              items={[
                "femei cu celulită vizibilă",
                "persoane sedentare",
                "persoane cu retenție de apă",
                "persoane care vor remodelare corporală",
                "persoane care slăbesc și vor tonifiere",
              ]}
            />
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Contraindicații">
            <BulletList
              items={[
                "sarcină",
                "varice severe",
                "boli cardiovasculare",
                "infecții sau inflamații",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Timer} title="Câte ședințe sunt necesare">
            <BulletList
              items={[
                "3–5 ședințe → primele rezultate",
                "6–8 ședințe → rezultate vizibile",
                "10–12 ședințe → remodelare completă",
              ]}
            />
          </InfoCard>
          <InfoCard icon={HeartPulse} title="Ce rezultate poți obține">
            <p className="mb-4">După un protocol complet:</p>
            <BulletList
              items={[
                "piele mai fermă",
                "reducerea aspectului de celulită",
                "scădere în centimetri",
                "îmbunătățirea texturii pielii",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Diferența dintre masaj anticelulitic și drenaj limfatic
          </h2>
          <p className="mb-6 text-muted-foreground">
            Mulți clienți confundă aceste proceduri, însă ele au roluri diferite:
          </p>
          <BulletList
            items={[
              "Masaj anticelulitic → acționează asupra grăsimii",
              "Drenaj limfatic → elimină toxinele și lichidele",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={XCircle} title="Ce NU funcționează pentru celulită">
            <BulletList
              items={[
                "cremele aplicate superficial",
                "dietele fără tratament local",
                "sportul fără stimularea circulației",
              ]}
            />
            <p className="mt-4">
              Celulita necesită intervenție directă, iar masajul este una dintre
              cele mai eficiente metode.
            </p>
          </InfoCard>
          <InfoCard icon={Sparkles} title="Mituri despre celulită">
            <BulletList
              items={[
                "„Doar persoanele supraponderale au celulită” → Fals",
                "„Dispare doar cu sport” → Fals",
                "„Cremele sunt suficiente” → Fals",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Recomandări"
          title="Recomandări pentru rezultate mai rapide"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "consumă minim 2L apă/zi",
              "evită zahărul și alimentele procesate",
              "fă mișcare regulat",
              "respectă programul de ședințe",
            ]}
          />
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei rezultate mai rapide pentru reducerea celulitei?"
        description="Combină masajul anticelulitic cu drenaj limfatic sau radiofrecvență corporală pentru un protocol premium adaptat nevoilor tale."
        primaryLabel="Cere informații"
      />

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Masaj anticelulitic în Craiova – aproape de tine"
              description="Salonul Claire Beauty este accesibil din toate zonele orașului. Dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Valea Roșie, Sărari sau Lăpuș-Argeș, ajungi rapid la noi."
            />
            <p className="text-muted-foreground leading-relaxed">
              Clienții din aceste zone aleg constant serviciile noastre datorită
              rezultatelor vizibile și accesului facil. Oferim masaj anticelulitic
              Craiova, tratament anticelulitic Craiova și protocoale de remodelare
              corporală Craiova pentru fermitate și contur.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1
              Mai, Valea Roșie, Sărari și Lăpuș-Argeș pentru programări la masaj
              anticelulitic și tratamente complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "experiență în remodelare corporală",
                "tehnici profesionale",
                "tratamente personalizate",
                "rezultate reale, nu promisiuni",
              ]}
            />
            <p className="mt-4">
              Află mai multe despre serviciile noastre pe{" "}
              <Link href="/" className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]">
                clairebeauty.ro
              </Link>
              .
            </p>
          </InfoCard>
          <InfoCard icon={Waves} title="Cât costă masajul anticelulitic Craiova">
            <p>
              Prețul unei ședințe depinde de zona tratată și durată. Pentru
              rezultate optime, recomandăm pachete de mai multe ședințe.
              Contactează-ne pentru ofertă personalizată și disponibilitate.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Ce alegi pentru celulită
          </h2>
          <ul className="space-y-4 text-muted-foreground leading-relaxed">
            <li>
              retenție de apă →{" "}
              <Link
                href="/drenaj-limfatic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                drenaj limfatic
              </Link>
            </li>
            <li>grăsime localizată → masaj anticelulitic</li>
            <li>
              rezultate rapide → combinație cu{" "}
              <Link
                href="/radiofrecventa-corporala-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                radiofrecvență corporală
              </Link>
            </li>
          </ul>
        </div>
      </SectionShell>

      <VisualGallery
        images={pageGalleries.masajAnticelulitic}
        eyebrow="În salon"
        title="Masaj anticelulitic la Claire Beauty"
        description="Proceduri reale, tehnici profesionale și rezultate progresive — așa arată experiența anticelulitică în cabinetul nostru."
        className="bg-background"
        columns={3}
      />

      <ServiceCTA
        title="Programează-te acum – rezultate vizibile în câteva ședințe"
        description="Dacă îți dorești o piele mai fermă și o siluetă remodelată, acum este momentul să începi. Locurile sunt limitate în perioadele aglomerate, așa că îți recomandăm să faci o programare din timp. Programează-te pentru masaj anticelulitic Craiova și începe procesul de remodelare corporală."
        whatsappMessage={masajAnticeluliticWhatsappMessage}
      />
    </>
  )
}
