import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Leaf,
  MapPin,
  Sparkles,
  Target,
  Timer,
  Zap,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { hifuWhatsappMessage } from "@/lib/content/hifu"

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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(hifuWhatsappMessage)}`}
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
            Consultanță pentru lifting facial
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

const resultsTimeline = [
  {
    period: "Imediat după tratament",
    items: ["pielea poate părea ușor mai fermă"],
  },
  {
    period: "După 2–4 săptămâni",
    items: [
      "conturul feței începe să se îmbunătățească",
      "pielea devine mai întinsă",
    ],
  },
  {
    period: "După 2–3 luni",
    items: [
      "colagenul este stimulat complet",
      "efectul de lifting devine vizibil",
    ],
  },
] as const

export function HifuSections() {
  return (
    <>
      <InlineCTA
        title="Începe rejuvenarea pielii cu HIFU în Craiova"
        description="Lifting facial fără operație, fermitate crescută și efect vizibil de întinerire — cu protocol personalizat la Claire Beauty."
        primaryLabel="Programează-te acum"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tehnologie anti-aging"
              title="Ce este HIFU și cum funcționează"
              description="HIFU (High-Intensity Focused Ultrasound) utilizează unde ultrasunete concentrate pentru a acționa în straturile profunde ale pielii."
            />
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Acest proces:
            </p>
            <BulletList
              items={[
                "stimulează producția de colagen",
                "contractă țesuturile",
                "ridică și tonifică pielea",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Practic, efectul este similar unui lifting, dar fără intervenție
              chirurgicală.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/hero-spa.jpg"
              alt="Cum funcționează HIFU în Craiova"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile reale ale tratamentului HIFU în Craiova"
          description="Unul dintre cele mai eficiente tratamente pentru lifting facial Craiova fără operație."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "lifting facial fără operație",
            "fermitate crescută a pielii",
            "reducerea ridurilor",
            "redefinirea conturului feței",
            "stimularea colagenului",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                HIFU Craiova susține rejuvenare facială și fermitatea pielii cu
                rezultate naturale.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Evoluție rezultate"
          title="Cum arată rezultatele după lifting facial"
          description="Rezultatul final: un aspect mai tânăr, natural, fără intervenții invazive."
        />
        <div className="mx-auto max-w-4xl space-y-6">
          {resultsTimeline.map((phase, index) => (
            <div
              key={phase.period}
              className="relative rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm"
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

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <AlertTriangle className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Când NU este recomandat HIFU
            </h2>
            <BulletList
              items={[
                "sarcină",
                "infecții active",
                "afecțiuni severe ale pielii",
                "implanturi metalice în zona tratată",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <Clock className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cât durează efectul procedurii
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Efectul HIFU poate dura între 6 și 12 luni, în funcție de piele și
              stil de viață.
            </p>
            <p className="mb-4 font-medium text-foreground">
              Factorii care influențează:
            </p>
            <BulletList
              items={["vârsta", "calitatea pielii", "stilul de viață", "întreținerea"]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Este unul dintre tratamentele cu efect de durată fără operație.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="HIFU vs lifting chirurgical"
          description="HIFU este alternativa ideală pentru cei care vor întinerire fără riscuri."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Lifting chirurgical"
            items={[
              "invaziv",
              "recuperare lungă",
              "cost ridicat",
              "rezultate artificiale uneori",
            ]}
          />
          <ComparisonCard
            title="HIFU"
            items={[
              "non-invaziv",
              "fără recuperare",
              "rezultate naturale",
              "cost mai accesibil",
            ]}
          />
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Tratamentul HIFU este tot mai căutat pentru lifting facial Craiova
          fără operație și rezultate vizibile pe termen lung.
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Indicații"
          title="Pentru cine este recomandat HIFU în Craiova?"
          description="Ideal pentru persoanele care vor rezultate fără operație."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "piele lăsată",
              "riduri",
              "pierderea fermității",
              "contur facial neclar",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="HIFU vs alte tratamente faciale"
          description="Nu sunt alternative — sunt complementare."
        />
        <div className="mx-auto max-w-4xl space-y-4 rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm">
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>
              <Link
                href="/hydrafacial-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Hydrafacial
              </Link>{" "}
              → curățare + hidratare
            </li>
            <li>
              <Link
                href="/microneedling-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                microneedling
              </Link>{" "}
              → regenerare
            </li>
            <li>
              <Link
                href="/dermapen-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Dermapen
              </Link>{" "}
              → colagen
            </li>
            <li>HIFU → lifting profund</li>
          </ul>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Protocoale combinate"
          title="Combinații pentru rezultate premium"
          description="Strategia corectă oferă rezultate vizibile mai rapide."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "HIFU + microneedling → lifting + regenerare",
              "HIFU + Dermapen → colagen intens",
              "HIFU + Hydrafacial → lifting + hidratare",
            ]}
          />
          <p className="mt-6 text-center text-muted-foreground leading-relaxed">
            Explorează{" "}
            <Link
              href="/microneedling-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              microneedling
            </Link>
            ,{" "}
            <Link
              href="/dermapen-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Dermapen
            </Link>{" "}
            și{" "}
            <Link
              href="/hydrafacial-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Hydrafacial
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <InlineCTA
        title="Ai nevoie de un plan complet de lifting facial?"
        description="Combină HIFU cu tratamente complementare pentru fermitate, colagen și hidratare."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Recuperare"
          title="Recuperare după HIFU în Craiova"
          description="Poți reveni imediat la activitățile zilnice."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Timer} title="Avantaj major">
            <BulletList items={["NU necesită recuperare"]} />
          </InfoCard>
          <InfoCard icon={Zap} title="Posibile reacții">
            <BulletList
              items={["ușoară sensibilitate", "senzație de tensiune"]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Câte ședințe sunt necesare
            </h2>
            <BulletList
              items={[
                "1 ședință → efect vizibil",
                "2–3 ședințe → rezultate optime",
                "întreținere: periodic",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Semne că ai nevoie de lifting facial
            </h2>
            <BulletList
              items={[
                "piele lăsată",
                "riduri",
                "pierderea fermității",
                "contur facial slab",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Greșeli frecvente
            </h2>
            <BulletList
              items={[
                "alegi tratamente nepotrivite",
                "aștepți rezultate instant",
                "nu faci întreținere",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum obții rezultate maxime
            </h2>
            <BulletList
              items={[
                "hidratare",
                "protecție solară",
                "combinarea tratamentelor",
                "întreținere periodică",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="HIFU Craiova – aproape de tine"
              description="Indiferent dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru sau 1 Mai, ajungi rapid la Claire Beauty."
            />
            <p className="text-muted-foreground leading-relaxed">
              Pentru rezultate complete, combină cu{" "}
              <Link
                href="/tratamente-faciale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                tratamente faciale Craiova
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
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru
              și 1 Mai pentru lifting facial, tratamente anti-aging și
              protocoale complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă HIFU în Craiova">
            <p className="mb-4">Prețul diferă în funcție de:</p>
            <BulletList items={["zona tratată", "complexitate"]} />
            <p className="mt-4">
              Este un tratament premium, cu efect de durată.
            </p>
          </InfoCard>
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty pentru HIFU în Craiova">
            <BulletList
              items={[
                "tehnologii moderne",
                "tratamente personalizate",
                "rezultate naturale",
              ]}
            />
            <p className="mt-4">
              <Link
                href="/"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Descoperă toate serviciile
              </Link>
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Dacă vrei un lifting vizibil fără operație — locurile sunt limitate, iar perioadele aglomerate se ocupă rapid."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru HIFU Craiova"
        description="Lifting facial fără operație, fermitate și rejuvenare profundă. Telefon: 0757 851 882."
        whatsappMessage={hifuWhatsappMessage}
      />
    </>
  )
}
