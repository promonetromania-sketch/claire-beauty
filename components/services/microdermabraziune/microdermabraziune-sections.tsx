import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Leaf,
  MapPin,
  Sparkles,
  Sun,
  Target,
  Timer,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { microdermabraziuneWhatsappMessage } from "@/lib/content/microdermabraziune"

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
  href,
  linkLabel,
}: {
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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(microdermabraziuneWhatsappMessage)}`}
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

export function MicrodermabraziuneSections() {
  return (
    <>
      <InlineCTA
        title="Începe revitalizarea tenului cu microdermabraziune în Craiova"
        description="Curățare profundă, exfoliere controlată și ten mai luminos — cu protocol personalizat la Claire Beauty."
        primaryLabel="Începe revitalizarea tenului"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Procedură de exfoliere"
              title="Ce este microdermabraziunea și cum funcționează"
              description="Microdermabraziunea este un tratament facial care exfoliază stratul superficial al pielii."
            />
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Acest proces:
            </p>
            <BulletList
              items={[
                "îndepărtează celulele moarte",
                "curăță porii",
                "stimulează regenerarea pielii",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rezultatul este un ten mai curat și mai uniform. Microdermabraziunea
              în Craiova este tot mai căutată pentru curățare facială profesională
              și îmbunătățirea rapidă a aspectului pielii.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/hero-spa.jpg"
              alt="Cum funcționează microdermabraziunea în Craiova"
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
          title="Beneficiile reale ale microdermabraziunii"
          description="Microdermabraziunea este unul dintre cele mai populare tratamente faciale în Craiova pentru curățarea și revitalizarea rapidă a pielii."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "curățare profundă",
            "îmbunătățirea texturii pielii",
            "reducerea porilor dilatați",
            "aspect mai luminos",
            "absorbție mai bună a produselor",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Microdermabraziune Craiova susține exfoliere facială și ten
                luminos cu rezultate vizibile.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Indicații"
              title="Pentru cine este potrivită microdermabraziunea în Craiova"
              description="Este tratamentul ideal pentru întreținere regulată."
            />
            <BulletList
              items={[
                "ten încărcat",
                "pori dilatați",
                "ten tern",
                "persoane care vor întreținere",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <AlertTriangle className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Când NU este suficientă microdermabraziunea
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Microdermabraziunea este eficientă pentru curățare și întreținere,
              dar nu este suficientă pentru:
            </p>
            <BulletList
              items={[
                "cicatrici adânci",
                "riduri accentuate",
                "probleme de fermitate",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              În aceste cazuri sunt recomandate tratamente precum{" "}
              <Link
                href="/dermapen-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Dermapen
              </Link>{" "}
              sau{" "}
              <Link
                href="/hifu-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                HIFU
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Comparație"
          title="Microdermabraziune vs Hydrafacial"
          description="Diferența: Hydrafacial este mai complet, microdermabraziunea este mai focusată pe exfoliere. Se pot combina pentru rezultate mai bune."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Hydrafacial"
            items={["curăță + hidratează"]}
            href="/hydrafacial-craiova"
            linkLabel="Vezi Hydrafacial Craiova"
          />
          <ComparisonCard
            title="Microdermabraziune"
            items={["exfoliază + curăță"]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="Microdermabraziune vs microneedling"
          description="Microdermabraziunea pentru întreținere, microneedling pentru probleme mai complexe."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Microneedling"
            items={["regenerare profundă"]}
            href="/microneedling-craiova"
            linkLabel="Vezi microneedling Craiova"
          />
          <ComparisonCard
            title="Microdermabraziune"
            items={["acționează la suprafață"]}
          />
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Rezultate"
          title="Cum arată rezultatele după microdermabraziune în Craiova"
          description="Rezultatele sunt vizibile imediat."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "tenul este mai curat",
              "pielea este mai fină",
              "aspectul este mai luminos",
            ]}
          />
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei un ten curat și luminos imediat?"
        description="Programează microdermabraziunea și combină-o cu Hydrafacial sau Dermapen pentru rezultate complete."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Recuperare"
          title="Recuperare după microdermabraziune"
          description="Procedura nu necesită recuperare — poți reveni imediat la activitățile zilnice."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Timer} title="Avantaj">
            <BulletList items={["NU necesită recuperare"]} />
          </InfoCard>
          <InfoCard icon={Sun} title="Posibil">
            <BulletList items={["ușoară sensibilitate"]} />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Protocoale combinate"
          title="Combinații pentru rezultate mai bune"
          description="Strategia corectă oferă rezultate mai bune."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "microdermabraziune + Hydrafacial → curățare + hidratare",
              "microdermabraziune + Dermapen → exfoliere + colagen",
              "microdermabraziune + HIFU → curățare + lifting",
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
              href="/hifu-craiova"
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
                "1 ședință → efect imediat",
                "3–5 ședințe → îmbunătățire vizibilă",
                "întreținere → lunar",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Semne că ai nevoie de microdermabraziune în Craiova
            </h2>
            <BulletList
              items={[
                "ten tern",
                "pori încărcați",
                "lipsă de strălucire",
                "textură neuniformă",
              ]}
            />
          </div>
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
                "amâni tratamentul",
                "nu faci întreținere",
                "alegi tratamente nepotrivite",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum menții rezultatele
            </h2>
            <BulletList
              items={[
                "hidratare",
                "curățare corectă",
                "protecție solară",
                "tratamente regulate",
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
              title="Microdermabraziune Craiova – aproape de tine"
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
              și 1 Mai pentru curățare facială, exfoliere și tratamente
              complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă microdermabraziunea în Craiova">
            <p className="mb-4">Prețul diferă în funcție de:</p>
            <BulletList items={["tipul tratamentului", "complexitate"]} />
            <p className="mt-4">
              Este unul dintre cele mai accesibile tratamente faciale.
            </p>
          </InfoCard>
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "tratamente personalizate",
                "echipamente moderne",
                "rezultate reale",
              ]}
            />
            <p className="mt-4">
              <Link
                href="/"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Vezi toate serviciile
              </Link>
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Dacă vrei un ten curat și luminos — locurile sunt limitate. Programează microdermabraziunea în Craiova."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru microdermabraziune Craiova"
        description="Curățare profundă, exfoliere și ten vizibil mai curat. Telefon: 0757 851 882."
        whatsappMessage={microdermabraziuneWhatsappMessage}
      />
    </>
  )
}
