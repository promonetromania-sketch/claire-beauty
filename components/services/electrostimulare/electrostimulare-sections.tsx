import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Shield,
  Sparkles,
  Target,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { electrostimulareWhatsappMessage } from "@/lib/content/electrostimulare"

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

function ComparisonCard({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm">
      <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <BulletList items={items} />
    </div>
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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(electrostimulareWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-white/70 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-[#D4AF37]/10"
          >
            Cere recomandare pe WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#0E2B1F]/15 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-white/70"
          >
            Consultanță pentru remodelare corporală
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

const resultsTimeline = [
  {
    period: "După 3–4 ședințe",
    items: ["ușoară tonifiere"],
  },
  {
    period: "După 6–8 ședințe",
    items: ["definire vizibilă"],
  },
  {
    period: "După 10+ ședințe",
    items: ["corp mai ferm și conturat"],
  },
] as const

export function ElectrostimulareSections() {
  return (
    <>
      <InlineCTA
        title="Începe tonifierea corpului cu electrostimulare în Craiova"
        description="Tonifiere rapidă, ardere calorică și remodelare corporală fără efort intens — cu protocol personalizat la Claire Beauty."
        primaryLabel="Programează-te acum"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tehnologie corporală"
              title="Ce este electrostimularea și cum funcționează"
              description="Electrostimularea este o tehnologie care trimite impulsuri electrice către mușchi, determinând contracții controlate."
            />
            <p className="mb-4 font-medium text-foreground">În practică:</p>
            <BulletList
              items={[
                "mușchii se contractă similar unui antrenament",
                "circulația este stimulată",
                "metabolismul local crește",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Este una dintre cele mai eficiente metode de tonifiere fără sală
              în Craiova.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/treatment-body.jpg"
              alt="Cum funcționează electrostimularea în Craiova"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Eficiență"
          title="Câte calorii arzi cu electrostimulare în Craiova"
          description="Funcționează cu adevărat — o ședință poate echivala cu zeci sau sute de contracții musculare și activarea simultană a mai multor grupe musculare."
        />
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-muted-foreground leading-relaxed">
            Practic, corpul consumă energie chiar dacă nu faci efort clasic. Mulți
            clienți caută electrostimulare în Craiova pentru rezultate rapide și
            vizibile fără efort intens.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="Electrostimulare vs sală – ce alegi?"
          description="Electrostimularea este soluția ideală pentru rezultate rapide sau ca suport pentru antrenament."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Sală"
            items={[
              "necesită timp",
              "necesită disciplină",
              "rezultate lente dacă nu ești constant",
            ]}
          />
          <ComparisonCard
            title="Electrostimulare"
            items={[
              "fără efort intens",
              "fără experiență necesară",
              "activare musculară rapidă",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile reale ale electrostimulării în Craiova"
          description="Ideală pentru electrostimulare abdomen Craiova și zone dificile."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "tonifiere musculară rapidă",
            "definirea formelor corpului",
            "susținerea slăbirii",
            "îmbunătățirea circulației",
            "reducerea aspectului de piele lăsată",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Electrostimulare Craiova pentru tonifiere corporală și
                fermitate vizibilă.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-10 lg:grid-cols-2">
          <InfoCard icon={Shield} title="Este sigură electrostimularea?">
            <p className="mb-4">Da, atunci când este realizată corect.</p>
            <BulletList
              items={[
                "este non-invaziv",
                "nu afectează articulațiile",
                "este controlat profesional",
              ]}
            />
            <p className="mt-4">Poți reveni imediat la activitățile zilnice.</p>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Ce se întâmplă dacă nu îți tonifiezi musculatura">
            <BulletList
              items={[
                "pierderea fermității",
                "accentuarea celulitei",
                "metabolism mai lent",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            De ce electrostimularea NU este suficientă singură
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Electrostimularea tonifică mușchii, dar nu elimină complet grăsimea.
            Pentru rezultate reale, combină cu:
          </p>
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li>
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>
            </li>
            <li>
              <Link
                href="/drenaj-limfatic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                drenaj limfatic
              </Link>
            </li>
            <li>
              <Link
                href="/radiofrecventa-corporala-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                radiofrecvență
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Combinația oferă rezultate vizibile mult mai rapide.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Evoluție rezultate"
          title="Când vezi rezultate reale"
          description="Rezultatele sunt progresive și naturale."
        />
        <div className="mx-auto max-w-4xl space-y-6">
          {resultsTimeline.map((phase, index) => (
            <div
              key={phase.period}
              className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15 font-serif text-lg font-semibold text-[#0E2B1F]">
                  {index + 1}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {phase.period}
                </h3>
              </div>
              <BulletList items={[...phase.items]} />
            </div>
          ))}
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei un protocol complet de remodelare corporală?"
        description="Combină electrostimularea cu masaj anticelulitic, drenaj limfatic sau radiofrecvență pentru rezultate vizibile."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Zone tratate"
          title="Zonele tratate"
          description="Zonele cele mai căutate pentru electrostimulare în Craiova."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList items={["abdomen", "coapse", "fese", "brațe"]} />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Câte ședințe sunt necesare
            </h2>
            <BulletList
              items={[
                "4–6 ședințe → tonifiere ușoară",
                "8–10 ședințe → rezultate vizibile",
                "12+ ședințe → definire clară",
                "întreținere: periodic",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Ce rezultate poți obține
            </h2>
            <BulletList
              items={[
                "musculatură mai fermă",
                "corp mai definit",
                "susținerea slăbirii",
                "îmbunătățirea aspectului pielii",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele depind de consecvență.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Indicații"
          title="Semne că ai nevoie de electrostimulare în Craiova"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "lipsă de tonus",
              "piele lăsată",
              "lipsă de timp pentru sport",
              "stagnare în slăbire",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Ce alegi în funcție de obiectiv
          </h2>
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li>tonifiere → electrostimulare</li>
            <li>
              celulită →{" "}
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>
            </li>
            <li>
              retenție →{" "}
              <Link
                href="/drenaj-limfatic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                drenaj limfatic
              </Link>
            </li>
            <li>
              fermitate piele →{" "}
              <Link
                href="/radiofrecventa-corporala-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                radiofrecvență
              </Link>
            </li>
          </ul>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Greșeli frecvente
            </h2>
            <BulletList
              items={[
                "faci prea puține ședințe",
                "nu combini tratamentele",
                "aștepți rezultate instant",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele reale vin din strategie.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum obții rezultate maxime
            </h2>
            <BulletList
              items={[
                "hidratare",
                "alimentație echilibrată",
                "combinarea tratamentelor",
                "consecvență",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Electrostimulare Craiova – aproape de tine"
              description="Serviciul este accesibil pentru clienți din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Sărari și Lăpuș."
            />
            <p className="text-muted-foreground leading-relaxed">
              Combinația preferată:{" "}
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>{" "}
              +{" "}
              <Link
                href="/radiofrecventa-corporala-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                radiofrecvență
              </Link>
              . Pentru protocol complet, vezi și{" "}
              <Link
                href="/tratamente-corporale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                tratamente corporale Craiova
              </Link>
              .
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1
              Mai, Sărari și Lăpuș pentru tonifiere corporală și remodelare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă electrostimularea în Craiova">
            <p className="mb-4">Prețul depinde de:</p>
            <BulletList items={["zona tratată", "durata ședinței", "pachet"]} />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pachetele oferă cele mai bune rezultate. Dacă te interesează
              prețul unei ședințe de electrostimulare în Craiova, este important
              să știi că rezultatele depind de numărul de ședințe și combinațiile
              alese.
            </p>
          </InfoCard>
          <InfoCard icon={Activity} title="Cum arată corpul după electrostimulare">
            <BulletList
              items={[
                "musculatura devine mai fermă",
                "conturul corpului este mai definit",
                "zonele problematice sunt mai tonifiate",
                "pielea capătă un aspect mai uniform",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 text-center shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            De ce să alegi Claire Beauty Craiova
          </h2>
          <BulletList
            items={[
              "tratamente personalizate",
              "echipamente moderne",
              "rezultate reale",
            ]}
          />
          <p className="mt-6">
            <Link
              href="/"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Vezi toate serviciile
            </Link>
          </p>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Dacă vrei un corp mai tonifiat fără efort intens — locurile sunt limitate, iar perioadele aglomerate se ocupă rapid."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru electrostimulare Craiova"
        description="Începe transformarea: tonifiere rapidă, ardere calorică și remodelare corporală. Telefon: 0757 851 882."
        whatsappMessage={electrostimulareWhatsappMessage}
      />
    </>
  )
}
