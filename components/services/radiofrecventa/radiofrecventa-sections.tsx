import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Flame,
  MapPin,
  Shield,
  Sparkles,
  Target,
  Waves,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { radiofrecventaWhatsappMessage } from "@/lib/content/radiofrecventa"

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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(radiofrecventaWhatsappMessage)}`}
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

const sessionsTimeline = [
  {
    period: "3–4 ședințe",
    items: ["primele efecte de fermitate și tonifiere"],
  },
  {
    period: "6–8 ședințe",
    items: ["rezultate vizibile pe piele și contur"],
  },
  {
    period: "10+ ședințe",
    items: ["rezultate optime de remodelare corporală"],
  },
] as const

const resultsTimeline = [
  {
    period: "După câteva ședințe",
    items: ["pielea începe să fie mai fermă"],
  },
  {
    period: "După 6–8 ședințe",
    items: ["diferența este vizibilă"],
  },
  {
    period: "După 1–2 luni",
    items: ["conturul corporal este îmbunătățit"],
  },
] as const

export function RadiofrecventaSections() {
  return (
    <>
      <InlineCTA
        title="Începe fermizarea pielii cu radiofrecvență în Craiova"
        description="Fermitate, tonifiere și remodelare corporală fără intervenții — cu protocol personalizat la Claire Beauty."
        primaryLabel="Programează-te acum"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tehnologie corporală"
              title="Ce este radiofrecvența și cum funcționează"
              description="Radiofrecvența este o tehnologie care utilizează unde electromagnetice pentru a încălzi țesuturile în profunzime."
            />
            <p className="mb-4 font-medium text-foreground">Acest proces:</p>
            <BulletList
              items={[
                "stimulează producția de colagen",
                "îmbunătățește elasticitatea pielii",
                "ajută la reducerea celulitei",
                "contribuie la remodelarea corporală",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Este una dintre cele mai eficiente metode de fermizare a pielii în
              Craiova.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/treatment-body.jpg"
              alt="Cum funcționează radiofrecvența pentru fermitate și colagen în Craiova"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Colagen și fermitate"
          title="Stimulare colagen și fermitate premium"
          description="Radiofrecvența activează regenerarea pielii din interior, pentru un aspect mai ferm, uniform și tonifiat."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard icon={Flame} title="Căldură controlată în profunzime">
            <p>
              Undele electromagnetice încălzesc țesuturile în mod controlat,
              declanșând procese naturale de refacere și fermitate.
            </p>
          </InfoCard>
          <InfoCard icon={Waves} title="Colagen și elasticitate">
            <p>
              Stimularea colagenului susține fermizarea pielii și îmbunătățește
              aspectul zonei tratate, cu rezultate progresive și naturale.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile reale ale radiofrecvenței"
          description="Ideală pentru persoanele care caută fermizare piele Craiova și îmbunătățire vizibilă a conturului."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "piele mai fermă",
            "reducerea aspectului de celulită",
            "tonifiere vizibilă",
            "îmbunătățirea circulației",
            "stimularea colagenului",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Radiofrecvență Craiova pentru remodelare corporală și fermitate
                premium, integrată în protocol personalizat.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Indicații"
          title="Pentru cine este recomandată radiofrecvența în Craiova"
          description="Este tratamentul ideal dacă vrei rezultate fără proceduri invazive."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "persoane cu piele lăsată",
              "după slăbire",
              "persoane cu celulită",
              "persoane care vor tonifiere",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="Radiofrecvență vs alte tratamente corporale"
          description="Aici apare diferența între rezultate slabe și rezultate reale în remodelare corporală Craiova."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Radiofrecvență"
            items={[
              "tonifică și stimulează colagenul",
              "îmbunătățește fermitatea pielii",
              "contribuie la reducerea celulitei",
            ]}
          />
          <ComparisonCard
            title="Limite fără protocol complet"
            items={[
              "nu elimină complet grăsimea",
              "rezultatele cresc în combinație cu alte tratamente",
              "necesită consecvență și număr adecvat de ședințe",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            De ce radiofrecvența NU este suficientă singură
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Radiofrecvența tonifică și stimulează colagenul, dar nu elimină
            complet grăsimea. Pentru rezultate vizibile, combină cu:
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
          </ul>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Combinația accelerează rezultatele și susține un protocol complet de
            tratamente corporale Craiova.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Protocol"
          title="Combinațiile care dau rezultate reale"
          description="Aceasta este strategia corectă de remodelare corporală."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Radiofrecvență + anticelulitic",
              text: "fermitate + slăbire",
            },
            {
              title: "Radiofrecvență + drenaj",
              text: "fermitate + detox",
            },
            {
              title: "Radiofrecvență + electrostimulare",
              text: "tonifiere completă",
            },
          ].map((combo) => (
            <article
              key={combo.title}
              className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-lg"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {combo.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{combo.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Pentru tonifiere musculară completă, vezi și{" "}
          <Link
            href="/electrostimulare-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            electrostimulare Craiova
          </Link>
          .
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Fermitate vs tonifiere"
          title="Fermitate vs tonifiere – ce urmărești?"
          description="Radiofrecvența vizează în principal fermitatea și calitatea pielii; tonifierea musculară se susține adesea cu electrostimulare."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Fermitate"
            items={[
              "piele mai compactă și elastică",
              "stimulare colagen",
              "reducerea aspectului de piele lăsată",
            ]}
          />
          <ComparisonCard
            title="Tonifiere"
            items={[
              "contur corporal mai definit",
              "activare musculară susținută",
              "combinație ideală cu electrostimulare",
            ]}
          />
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
                "3–4 ședințe → primele efecte",
                "6–8 ședințe → rezultate vizibile",
                "10+ ședințe → rezultate optime",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele sunt progresive.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Timeline ședințe
            </h2>
            <div className="space-y-4">
              {sessionsTimeline.map((phase, index) => (
                <div
                  key={phase.period}
                  className="rounded-[1.25rem] border border-[#D4AF37]/15 bg-[#FFF9F2]/50 p-5"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15 font-serif text-base font-semibold text-[#0E2B1F]">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {phase.period}
                    </h3>
                  </div>
                  <BulletList items={[...phase.items]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Evoluție rezultate"
          title="Când vezi rezultate după radiofrecvență în Craiova"
          description="Colagenul are nevoie de timp pentru a se activa complet."
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
        title="Vrei un protocol complet de fermitate și remodelare?"
        description="Combină radiofrecvența cu masaj anticelulitic, drenaj limfatic sau electrostimulare pentru rezultate vizibile în Craiova."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Shield} title="Cum arată pielea după radiofrecvență în Craiova">
            <BulletList
              items={[
                "pielea devine mai fermă",
                "aspectul de piele lăsată se reduce",
                "conturul corpului este mai uniform",
                "celulita devine mai puțin vizibilă",
              ]}
            />
            <p className="mt-4">Rezultatele sunt naturale și progresive.</p>
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Ce se întâmplă dacă nu tratezi lipsa de fermitate">
            <BulletList
              items={[
                "pielea devine mai laxă în timp",
                "celulita se accentuează",
                "conturul corporal se pierde",
                "rezultatele devin mai greu de obținut",
              ]}
            />
            <p className="mt-4">
              Cu cât începi mai devreme, cu atât rezultatele sunt mai bune.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Radiofrecvență Craiova – aproape de tine"
              description="Serviciul este accesibil pentru clienți din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Sărari și Lăpuș."
            />
            <p className="text-muted-foreground leading-relaxed">
              Mulți clienți aleg combinația dintre{" "}
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>{" "}
              și{" "}
              <Link
                href="/drenaj-limfatic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                drenaj limfatic
              </Link>
              . Pentru protocol complet, vezi{" "}
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
              Mai, Sărari și Lăpuș pentru fermizare piele, reducere celulită și
              tonifiere corporală.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă radiofrecvența în Craiova">
            <p className="mb-4">Prețul diferă în funcție de:</p>
            <BulletList items={["zona tratată", "durata ședinței", "pachet"]} />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Dacă te interesează radiofrecvență Craiova preț, este important să
              știi că rezultatele depind de numărul de ședințe și combinațiile
              alese.
            </p>
          </InfoCard>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Ce alegi în funcție de obiectiv
            </h2>
            <ul className="space-y-3 text-foreground/90 leading-relaxed">
              <li>fermitate → radiofrecvență</li>
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
                tonifiere →{" "}
                <Link
                  href="/electrostimulare-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  electrostimulare
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
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
              Vezi toate serviciile pe clairebeauty.ro
            </Link>
          </p>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Programează-te acum și începe procesul de fermizare și remodelare corporală în Craiova."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru radiofrecvență Craiova"
        description="Începe fermizarea pielii și remodelarea corporală cu protocol personalizat. Telefon: 0757 851 882."
        whatsappMessage={radiofrecventaWhatsappMessage}
      />
    </>
  )
}
