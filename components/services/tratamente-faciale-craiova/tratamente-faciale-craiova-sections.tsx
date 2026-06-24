import type { ComponentType, ReactNode } from "react"
import { businessProfile } from "@/lib/seo/business"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Layers,
  MapPin,
  PenLine,
  Sparkles,
  XCircle,
  Zap } from "lucide-react"
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

const procedureCards = [
  {
    title: "Hydrafacial",
    href: "/hydrafacial-craiova",
    description:
      "Curățare profundă și hidratare instant pentru ten încărcat, pori vizibili și luminozitate imediată.",
    icon: Droplets },
  {
    title: "Dermapen",
    href: "/dermapen-craiova",
    description:
      "Stimulare colagen pentru riduri fine, cicatrici și textură neuniformă, cu acțiune în profunzime.",
    icon: PenLine },
  {
    title: "Microneedling",
    href: "/microneedling-craiova",
    description:
      "Regenerare intensivă pentru cicatrici post-acnee, pori dilatați și pete pigmentare.",
    icon: Layers },
  {
    title: "HIFU",
    href: "/hifu-facial-craiova",
    description:
      "Lifting facial fără operație pentru piele lăsată, fermitate redusă și tonifiere progresivă.",
    icon: Zap },
  {
    title: "Microdermabraziune",
    href: "/microdermabraziune-craiova",
    description:
      "Curățare și exfoliere pentru ten încărcat, piele ternă și întreținere cu textură îmbunătățită.",
    icon: Sparkles },
] as const

function ProcedureHubCard({
  title,
  href,
  description,
  icon: Icon }: {
  title: string
  href: string
  description: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_rgba(14,43,31,0.12)]"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#0E2B1F] transition-colors group-hover:bg-[#D4AF37]/20">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="relative mb-3 font-serif text-2xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="relative mb-6 flex-1 text-muted-foreground leading-relaxed">
        {description}
      </p>
      <span className="relative inline-flex items-center gap-2 text-sm font-semibold text-[#0E2B1F] transition-colors group-hover:text-[#D4AF37]">
        Vezi tratamentul
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

const treatmentDetails = [
  {
    title: "Hydrafacial – curățare + hidratare instant",
    href: "/hydrafacial-craiova",
    idealFor: ["pori încărcați", "ten tern", "rezultate imediate"],
    result: "ten curat și luminos după prima ședință",
    cta: "Vezi Hydrafacial" },
  {
    title: "Dermapen – stimularea colagenului",
    href: "/dermapen-craiova",
    idealFor: ["riduri fine", "cicatrici", "textură neuniformă"],
    result: "lucrează în profunzime, nu doar la suprafață",
    cta: "Vezi Dermapen" },
  {
    title: "Microneedling – regenerare intensivă",
    href: "/microneedling-craiova",
    idealFor: [
      "cicatrici post-acnee",
      "pori dilatați",
      "pete pigmentare",
    ],
    result:
      "unul dintre cele mai eficiente tratamente pentru refacerea pielii",
    cta: "Vezi microneedling" },
  {
    title: "HIFU – lifting fără operație",
    href: "/hifu-facial-craiova",
    idealFor: [
      "piele lăsată",
      "efect de lifting",
      "rezultate fără intervenții invazive",
    ],
    result: "stimulează colagenul în profunzime",
    cta: "Vezi HIFU" },
  {
    title: "Microdermabraziune – curățare și exfoliere",
    href: "/microdermabraziune-craiova",
    idealFor: ["ten încărcat", "piele ternă", "întreținere"],
    result: "îmbunătățește textura pielii rapid",
    cta: "Vezi procedura" },
] as const

const comparisonRows = [
  { treatment: "Hydrafacial", role: "curăță + hidratează" },
  { treatment: "Dermapen", role: "stimulează colagen" },
  { treatment: "Microneedling", role: "repară pielea" },
  { treatment: "HIFU", role: "ridică și tonifică" },
  { treatment: "Microdermabraziune", role: "exfoliază" },
] as const

export function TratamenteFacialeCraiovaSections() {
  return (
    <>
      <InlineCTA
        title="Programează-te pentru tratamente faciale în Craiova"
        description="Alege procedura potrivită pentru curățare, hidratare, cicatrici sau lifting — cu recomandare personalizată la Claire Beauty."
        primaryLabel="Alege tratamentul potrivit"
      />

      <SectionShell className="bg-background">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Ghid de alegere"
              title="Cum alegi corect tratamentul facial"
              description="Majoritatea persoanelor aleg tratamentul după „ce au auzit” sau „ce e la modă”. Asta este greșit. Alegerea trebuie făcută în funcție de problemă."
            />
            <BulletList
              items={[
                "ten încărcat → curățare profundă",
                "acnee → regenerare",
                "riduri → lifting și colagen",
                "ten tern → hidratare",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              De exemplu, dacă vrei o curățare eficientă și hidratare imediată,{" "}
              <Link
                href="/hydrafacial-craiova"
                className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
              >
                Hydrafacial Craiova
              </Link>{" "}
              este una dintre cele mai rapide soluții.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.tratamentFacial2}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Potrivire personalizată"
          title="Care este cel mai bun tratament facial pentru tine"
          description="Nu există un singur tratament „cel mai bun”. Alegerea corectă depinde de problema pielii."
        />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {[
            {
              problem: "curățare și hidratare",
              link: "/hydrafacial-craiova",
              label: "Hydrafacial" },
            {
              problem: "cicatrici și textură",
              link: "/microneedling-craiova",
              label: "microneedling" },
            {
              problem: "colagen și regenerare",
              link: "/dermapen-craiova",
              label: "Dermapen" },
            {
              problem: "lifting și fermitate",
              link: "/hifu-facial-craiova",
              label: "HIFU" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium backdrop-blur-sm"
            >
              <p className="text-foreground/90 leading-relaxed">
                pentru {item.problem} →{" "}
                <Link
                  href={item.link}
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  {item.label}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Proceduri faciale"
          title="Tipuri de tratamente faciale"
          description="Aceste tratamente faciale Craiova sunt cele mai utilizate pentru rezultate vizibile."
        />
        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {procedureCards.map((card) => (
            <ProcedureHubCard key={card.href} {...card} />
          ))}
        </div>
        <div className="grid gap-6">
          {treatmentDetails.map((item) => (
            <article
              key={item.href}
              className="rounded-[1.75rem] border border-[#D4AF37]/15 bg-card/80 p-8 shadow-premium backdrop-blur-sm"
            >
              <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mb-3 font-medium text-foreground">
                Este ideal dacă:
              </p>
              <BulletList items={[...item.idealFor]} />
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Rezultat: {item.result}.
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0E2B1F] transition-colors hover:text-[#D4AF37]"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Comparație"
          title="Diferența REALĂ între tratamente"
          description="Dacă alegi greșit tratamentul, pierzi bani și timp. Nu sunt alternative — sunt complementare."
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 shadow-premium backdrop-blur-sm">
          <div className="grid grid-cols-1 divide-y divide-[#D4AF37]/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {comparisonRows.map((row) => (
              <div
                key={row.treatment}
                className="flex flex-col gap-2 p-6 sm:p-8"
              >
                <p className="font-serif text-xl font-semibold text-foreground">
                  {row.treatment}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  → {row.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Protocoale combinate"
          title="Combinațiile care dau rezultate vizibile"
          description="Rezultatele rapide nu vin dintr-un singur tratament. Strategia corectă înseamnă rezultate mai rapide."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          <BulletList
            items={[
              "Hydrafacial + microneedling → curățare + regenerare",
              "Dermapen + HIFU → colagen + lifting",
              "Microdermabraziune + hidratare → glow imediat",
            ]}
          />
          <p className="text-center text-muted-foreground leading-relaxed">
            Tratamentele faciale Craiova sunt tot mai căutate în Craiova pentru
            îmbunătățirea rapidă a aspectului pielii și prevenirea
            îmbătrânirii.
          </p>
        </div>
      </SectionShell>

      <InlineCTA
        title="Ai nevoie de un plan facial personalizat?"
        description="Combină procedurile potrivite pentru curățare, regenerare sau lifting — cu ghidare în salon."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Semne de alarmă"
          title="Semne clare că ai nevoie de tratament facial"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "ten tern fără luminozitate",
              "acnee sau cicatrici",
              "pori dilatați",
              "riduri",
              "lipsă de fermitate",
            ]}
          />
          <p className="mt-6 text-center text-muted-foreground leading-relaxed">
            Dacă te regăsești aici, nu mai este opțional — este necesar.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              De ce este important să alegi corect tratamentul facial
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Alegerea greșită duce la rezultate slabe sau temporare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Alegerea corectă duce la îmbunătățiri vizibile și progresive.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cele mai frecvente greșeli
            </h2>
            <BulletList
              items={[
                "alegi tratamentul după preț",
                "faci o singură ședință",
                "nu respecți recomandările",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele reale vin din consecvență.
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
              title="Tratamente faciale în Craiova – aproape de tine"
              description="Indiferent dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru sau 1 Mai, ajungi rapid la Claire Beauty."
            />
            <p className="text-muted-foreground leading-relaxed">
              Mulți clienți aleg{" "}
              <Link
                href="/hydrafacial-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Hydrafacial
              </Link>{" "}
              sau{" "}
              <Link
                href="/microneedling-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                microneedling
              </Link>{" "}
              pentru rezultate rapide și vizibile.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tratament facial Craiova, curățare ten și lifting facial cu acces
              rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru și 1
              Mai.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cât costă tratamentele faciale în Craiova
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Prețurile diferă în funcție de:
            </p>
            <BulletList
              items={["procedură", "număr de ședințe", "complexitate"]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              De exemplu,{" "}
              <Link
                href="/dermapen-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Dermapen
              </Link>{" "}
              sau{" "}
              <Link
                href="/hifu-facial-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                HIFU
              </Link>{" "}
              pot necesita mai multe ședințe pentru rezultate optime.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Mituri despre tratamente faciale
            </h2>
            <ul className="space-y-4">
              {[
                "„O ședință este suficientă” → FALS",
                "„Nu funcționează” → FALS",
                "„Doar pentru femei” → FALS",
              ].map((myth) => (
                <li key={myth} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span className="text-foreground/90">{myth}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cum obții rezultate maxime
            </h2>
            <BulletList
              items={[
                "hidratare zilnică",
                "SPF obligatoriu",
                "tratamente regulate",
                "plan personalizat",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              De ce să alegi Claire Beauty Craiova
            </h2>
            <BulletList
              items={[
                "tratamente personalizate",
                "tehnologie modernă",
                "rezultate reale",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <Link
                href="/"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Descoperă toate serviciile
              </Link>
            </p>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Programează-te acum"
        description="Dacă îți dorești un ten care arată vizibil mai bine — nu doar „îngrijit temporar” — locurile sunt limitate, iar perioadele aglomerate se ocupă rapid."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Începe transformarea tenului tău"
        description="Programează-te acum pentru tratamente faciale Craiova: Hydrafacial, Dermapen, microneedling, HIFU și microdermabraziune. Telefon: 0757 851 882."
      />
    </>
  )
}
