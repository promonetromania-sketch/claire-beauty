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
            Consultanță pentru regenerarea pielii
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

const resultsTimeline = [
  {
    period: "După 1–2 ședințe",
    items: ["pielea devine mai luminoasă"] },
  {
    period: "După 3–4 ședințe",
    items: ["textura începe să se uniformizeze"] },
  {
    period: "După 4–6 ședințe",
    items: ["cicatricile și ridurile se reduc vizibil"] },
] as const

export function DermapenSections() {
  return (
    <>
      <InlineCTA
        title="Începe regenerarea pielii cu Dermapen în Craiova"
        description="Stimulare colagen, textură mai uniformă și cicatrici post-acnee estompate — cu protocol personalizat la Claire Beauty."
        primaryLabel="Programează-te acum"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tehnologie regenerativă"
              title="Ce este Dermapen și cum funcționează"
              description="Dermapen este un dispozitiv medical care utilizează micro-ace pentru a crea micro-leziuni controlate în piele."
            />
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Tratamentul Dermapen Craiova este tot mai căutat pentru cicatrici
              post-acnee și îmbunătățirea texturii pielii. Acest proces
              determină:
            </p>
            <BulletList
              items={[
                "stimularea colagenului și elastinei",
                "accelerarea regenerării celulare",
                "îmbunătățirea structurii pielii",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rezultatul nu este instant, ci progresiv, deoarece pielea se
              reconstruiește din interior.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.dermapen}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Indicații"
          title="Ce probleme tratează Dermapen"
          description="Este o soluție eficientă pentru îmbunătățirea calității pielii, nu doar pentru efect temporar."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "cicatrici post-acnee",
            "riduri fine",
            "pori dilatați",
            "pete pigmentare",
            "textură neuniformă",
          ].map((problem) => (
            <InfoCard key={problem} icon={Sparkles} title={problem}>
              <p>
                Dermapen Craiova acționează asupra structurii pielii pentru
                regenerare ten și colagen.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Comparație"
          title="Diferența dintre Dermapen și alte tratamente"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ComparisonCard
            title="Microneedling clasic"
            items={["termen general", "rezultate variabile"]}
            href="/microneedling-craiova"
            linkLabel="Vezi microneedling"
          />
          <ComparisonCard
            title="Dermapen"
            items={[
              "control precis al adâncimii",
              "tratament uniform",
              "rezultate mai previzibile",
            ]}
          />
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted-foreground leading-relaxed">
          În comparație cu{" "}
          <Link
            href="/hydrafacial-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            Hydrafacial
          </Link>
          , care curăță și hidratează, Dermapen pentru cicatrici acne acționează
          în profunzime asupra structurii pielii. Pentru lifting și fermitate,
          vezi{" "}
          <Link
            href="/hifu-facial-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            HIFU
          </Link>
          .
        </p>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Evoluție rezultate"
          title="Când apar rezultatele"
          description="Rezultatele nu sunt imediate, deoarece pielea are nevoie de timp pentru regenerare. Evoluția este graduală și naturală."
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

      <InlineCTA
        title="Vrei rezultate progresive și naturale pentru ten?"
        description="Programează Dermapen și combină-l cu tratamente faciale complementare pentru regenerare completă."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Rezultate"
              title="Cum arată pielea după tratament"
            />
            <BulletList
              items={[
                "pielea devine mai netedă",
                "porii sunt mai puțin vizibili",
                "cicatricile se estompează",
                "tenul capătă un aspect uniform",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rezultatele tratamentului Dermapen Craiova apar progresiv și devin
              tot mai vizibile după fiecare ședință.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <AlertTriangle className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Ce se întâmplă dacă nu tratezi problemele pielii
            </h3>
            <BulletList
              items={[
                "cicatricile devin mai pronunțate în timp",
                "porii rămân dilatați",
                "ridurile se accentuează",
                "textura pielii se degradează",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Intervenția timpurie este mai eficientă decât corecția tardivă.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Recuperare"
          title="Recuperare după Dermapen"
          description="Aceste măsuri susțin procesul de regenerare."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Timer} title="După procedură este normal să apară">
            <BulletList
              items={[
                "roșeață ușoară (24–48 ore)",
                "sensibilitate locală",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Sun} title="Recomandări">
            <BulletList
              items={[
                "evitarea expunerii la soare",
                "utilizarea protecției SPF",
                "hidratarea pielii",
              ]}
            />
          </InfoCard>
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
              Planul este stabilit în funcție de obiectiv.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum obții rezultate maxime
            </h2>
            <BulletList
              items={[
                "respectă recomandările post-tratament",
                "folosește protecție solară",
                "menține hidratarea pielii",
                "urmează planul complet de tratament",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pentru rezultate optime cu Dermapen Craiova, este important să
              respecți planul complet de tratament.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Dermapen Craiova – accesibil în toate zonele"
              description="Serviciul este accesibil pentru clienți din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai și zonele apropiate."
            />
            <p className="text-muted-foreground leading-relaxed">
              Pentru rezultate complete, tratamentul poate fi combinat cu{" "}
              <Link
                href="/tratamente-faciale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                alte tratamente faciale
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
              și 1 Mai pentru cicatrici post-acnee, riduri fine și regenerare
              ten.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă Dermapen în Craiova">
            <p className="mb-4">Prețul pentru Dermapen Craiova diferă în funcție de:</p>
            <BulletList
              items={[
                "zona tratată",
                "complexitatea cazului",
                "numărul de ședințe",
              ]}
            />
            <p className="mt-4">
              Pachetele oferă cele mai bune rezultate pe termen lung.
            </p>
          </InfoCard>
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty">
            <BulletList
              items={[
                "abordare personalizată",
                "tehnologie modernă",
                "accent pe rezultate reale",
              ]}
            />
            <p className="mt-4">
              Detalii despre servicii:{" "}
              <Link
                href="/"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                clairebeauty.ro
              </Link>
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Programează-te pentru Dermapen Craiova și începe procesul de regenerare a pielii."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru Dermapen Craiova"
        description="Cicatrici post-acnee, riduri fine și textură îmbunătățită prin stimularea colagenului. Telefon: 0757 851 882."
      />
    </>
  )
}
