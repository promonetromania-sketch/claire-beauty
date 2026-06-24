import type { ComponentType, ReactNode } from "react"
import { businessProfile } from "@/lib/seo/business"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Leaf,
  MapPin,
  Sparkles,
  Sun,
  Target,
  Timer } from "lucide-react"
import { ViewPricesLink } from "@/components/pricing/view-prices-link"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"

function SectionShell({
  children,
  className }: {
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
  align = "center" }: {
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
  children }: {
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
  href,
  linkLabel }: {
  title: string
  items: string[]
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm">
      <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <BulletList items={items} />
      {href && linkLabel ? (
        <Link
          href={href}
          className="mt-6 inline-flex text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#D4AF37]"
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  )
}

function InlineCTA({
  title,
  description,
  primaryLabel = "Programează-te acum" }: {
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
            href={businessProfile.whatsappUrl}
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
            Consultanță pentru ten
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

export function MicroneedlingSections() {
  return (
    <>
      <InlineCTA
        title="Începe regenerarea tenului cu microneedling în Craiova"
        description="Stimulează colagenul, îmbunătățește textura pielii și abordează cicatricile post-acnee cu un protocol personalizat la Claire Beauty."
        primaryLabel="Începe regenerarea tenului"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Procedură regenerativă"
              title="Ce este microneedling și cum funcționează"
              description="Microneedling este denumirea generală a procedurii, în timp ce Dermapen este una dintre tehnologiile utilizate pentru realizarea acesteia."
            />
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Microneedling este o procedură care utilizează micro-ace pentru a
              crea micro-leziuni controlate în piele. Acest proces:
            </p>
            <BulletList
              items={[
                "stimulează producția de colagen",
                "accelerează regenerarea celulară",
                "îmbunătățește textura pielii",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Practic, pielea este „forțată” să se refacă și să devină mai
              sănătoasă. Pentru tehnologia avansată, vezi{" "}
              <Link
                href="/dermapen-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Dermapen
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
          {...claireImages.microneedlingContent}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile reale ale microneedling în Craiova"
          description="Este unul dintre cele mai eficiente tratamente pentru cicatrici acnee Craiova și regenerare ten."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "reducerea cicatricilor post-acnee",
            "diminuarea porilor dilatați",
            "estomparea ridurilor fine",
            "uniformizarea culorii pielii",
            "îmbunătățirea texturii",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Microneedling Craiova acționează în profunzime pentru
                rejuvenare ten și textură mai uniformă.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Indicații"
          title="Pentru ce probleme este recomandat"
          description="Microneedling este tratamentul principal pentru regenerare reală a pielii."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "cicatrici post-acnee",
              "acnee (în anumite stadii)",
              "pori dilatați",
              "riduri fine",
              "pete pigmentare",
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Comparație"
          title="Microneedling vs Dermapen (clarificare importantă)"
          description="Microneedling este procedura, iar Dermapen este instrumentul care o realizează cu precizie mai mare."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Microneedling"
            items={["termen general", "procedură de regenerare a pielii"]}
          />
          <ComparisonCard
            title="Dermapen"
            items={[
              "tehnologie avansată de microneedling",
              "mai precis și controlat",
            ]}
            href="/dermapen-craiova"
            linkLabel="Vezi Dermapen Craiova"
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="Microneedling vs Hydrafacial"
          description="Nu sunt alternative — combinate oferă rezultate complete."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Hydrafacial"
            items={["curăță + hidratează", "rezultate rapide"]}
            href="/hydrafacial-craiova"
            linkLabel="Vezi Hydrafacial Craiova"
          />
          <ComparisonCard
            title="Microneedling"
            items={["regenerează pielea", "rezultate pe termen lung"]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Rezultate"
              title="Cum arată rezultatele după microneedling în Craiova"
            />
            <p className="mb-4 font-medium text-foreground">
              După primele ședințe:
            </p>
            <BulletList
              items={[
                "pielea devine mai netedă",
                "porii încep să se micșoreze",
                "cicatricile devin mai puțin vizibile",
              ]}
            />
            <p className="mb-4 mt-6 font-medium text-foreground">
              După mai multe ședințe:
            </p>
            <BulletList
              items={[
                "textura pielii este vizibil îmbunătățită",
                "tenul devine uniform",
                "aspectul general este mai sănătos",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rezultatele nu sunt instant, dar sunt reale și progresive.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <AlertTriangle className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Când NU este suficient microneedling
            </h3>
            <BulletList
              items={[
                "cicatrici foarte adânci",
                "laxitate severă",
                "pierdere mare de fermitate",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Recomandare:{" "}
              <Link
                href="/hifu-facial-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                HIFU
              </Link>
            </p>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Ai nevoie de un plan complet de regenerare a tenului?"
        description="Combină microneedling cu Hydrafacial, Dermapen sau HIFU pentru rezultate vizibile și stabile."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Recuperare"
          title="Recuperare după microneedling"
          description="Este normal să apară reacții ușoare — fac parte din procesul de regenerare."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Timer} title="După tratament">
            <BulletList
              items={[
                "pielea poate fi ușor roșie (24–48h)",
                "poate apărea o ușoară sensibilitate",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Sun} title="Recomandări">
            <BulletList
              items={[
                "evită soarele",
                "folosește SPF",
                "hidratează pielea",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Protocoale combinate"
          title="Combinații care dau rezultate maxime"
          description="Aceasta este strategia pentru rezultate vizibile."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "microneedling + Hydrafacial → curățare + regenerare",
              "microneedling + Dermapen → colagen intens",
              "microneedling + HIFU → regenerare + lifting",
            ]}
          />
          <p className="mt-6 text-center text-muted-foreground leading-relaxed">
            Explorează{" "}
            <Link
              href="/hydrafacial-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Hydrafacial
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
              href="/hifu-facial-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              HIFU
            </Link>{" "}
            pentru protocoale complementare.
          </p>
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
                "2–3 ședințe → îmbunătățiri vizibile",
                "4–6 ședințe → rezultate clare",
                "întreținere → periodic",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele se îmbunătățesc în timp.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Semne că ai nevoie de microneedling
            </h2>
            <BulletList
              items={[
                "cicatrici post-acnee",
                "pori dilatați",
                "ten neuniform",
                "riduri fine",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Greșeli care îți sabotează rezultatele
            </h2>
            <BulletList
              items={[
                "faci o singură ședință",
                "nu respecți recomandările",
                "alegi tratamente nepotrivite",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele reale vin din consecvență.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum obții rezultate maxime
            </h2>
            <BulletList
              items={[
                "hidratare",
                "protecție solară",
                "tratamente regulate",
                "combinarea procedurilor",
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
              title="Microneedling Craiova – aproape de tine"
              description="Indiferent dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru sau 1 Mai, ajungi rapid la Claire Beauty."
            />
            <p className="text-muted-foreground leading-relaxed">
              Pentru rezultate complete, poți combina cu{" "}
              <Link
                href="/tratamente-faciale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                tratamente faciale Craiova
              </Link>{" "}
              adaptate tipului tău de ten. Microneedling Craiova este tot mai
              căutat pentru tratamentul cicatricilor post-acnee și îmbunătățirea
              texturii pielii.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru
              și 1 Mai pentru microneedling, regenerare ten și tratamente
              faciale complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă microneedling în Craiova">
            <p className="mb-4">Prețul diferă în funcție de:</p>
            <BulletList
              items={["zona tratată", "complexitate", "număr de ședințe"]}
            />
            <p className="mt-4">
              Pachetele sunt cele mai eficiente pentru rezultate reale.
            </p>
            <ViewPricesLink section="faciale" />
          </InfoCard>
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "tratamente personalizate",
                "tehnologie modernă",
                "rezultate reale",
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
        description="Dacă vrei o piele mai sănătoasă, mai netedă și mai uniformă — locurile sunt limitate, iar perioadele aglomerate se ocupă rapid."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru microneedling Craiova"
        description="Începe procesul de regenerare a pielii pentru cicatrici post-acnee, pori dilatați și textură îmbunătățită. Telefon: 0757 851 882."
      />
    </>
  )
}
