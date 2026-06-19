import type { ComponentType, ReactNode } from "react"
import { VisualGallery } from "@/components/shared/visual-gallery"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages, pageGalleries } from "@/lib/images/claire-beauty"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Footprints,
  HeartPulse,
  MapPin,
  Sparkles,
  Waves,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { masajCraiovaWhatsappMessage } from "@/lib/content/masaj-craiova"

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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(masajCraiovaWhatsappMessage)}`}
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
            Consultanță
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

const serviceCards = [
  {
    title: "Masaj terapeutic",
    href: "/masaj-terapeutic-craiova",
    description:
      "Pentru dureri musculare, tensiune și recuperare după efort sau stat prelungit la birou.",
    icon: HeartPulse,
    cta: "Masaj terapeutic Craiova",
  },
  {
    title: "Masaj anticelulitic",
    href: "/masaj-anticelulitic-craiova",
    description:
      "Pentru reducerea celulitei, fermitate și remodelare corporală cu tehnici manuale dedicate.",
    icon: Waves,
    cta: "Masaj anticelulitic Craiova",
  },
  {
    title: "Drenaj limfatic",
    href: "/drenaj-limfatic-craiova",
    description:
      "Pentru retenție de apă, picioare grele și detoxifiere prin stimularea circulației limfatice.",
    icon: Droplets,
    cta: "Drenaj limfatic Craiova",
  },
  {
    title: "Reflexoterapie",
    href: "/reflexoterapie-craiova",
    description:
      "Pentru echilibru general, reducerea stresului și relaxare profundă prin puncte reflexe.",
    icon: Footprints,
    cta: "Reflexoterapie Craiova",
  },
] as const

function ServiceHubCard({
  title,
  href,
  description,
  icon: Icon,
  cta,
}: {
  title: string
  href: string
  description: string
  icon: ComponentType<{ className?: string }>
  cta: string
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
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

export function MasajCraiovaSections() {
  return (
    <>
      <InlineCTA
        title="Programează-te pentru masaj în Craiova"
        description="Alege tratamentul potrivit pentru dureri, celulită, retenție de apă sau stres — cu recomandare personalizată la Claire Beauty."
        primaryLabel="Alege tratamentul potrivit"
      />

      <SectionShell className="bg-background">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Ghid de alegere"
              title="Cum alegi corect tipul de masaj"
              description="Majoritatea persoanelor aleg tipul de masaj în funcție de preferințe, nu de problemă. În realitate, fiecare tratament are un rol specific."
            />
            <ul className="space-y-4 text-foreground/90 leading-relaxed">
              <li>
                pentru dureri de spate și tensiune →{" "}
                <Link
                  href="/masaj-terapeutic-craiova"
                  className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
                >
                  masaj terapeutic
                </Link>
              </li>
              <li>
                pentru celulită și fermitate →{" "}
                <Link
                  href="/masaj-anticelulitic-craiova"
                  className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
                >
                  masaj anticelulitic
                </Link>
              </li>
              <li>
                pentru retenție de apă →{" "}
                <Link
                  href="/drenaj-limfatic-craiova"
                  className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
                >
                  drenaj limfatic
                </Link>
              </li>
              <li>
                pentru echilibru general →{" "}
                <Link
                  href="/reflexoterapie-craiova"
                  className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
                >
                  reflexoterapie
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Alegerea corectă accelerează rezultatele și evită pierderea
              timpului.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.masajDeepTissue1}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Servicii masaj"
          title="Tipuri de masaj în Craiova disponibile"
          description="Fiecare tip de masaj are un rol diferit și este important să înțelegi ce face fiecare."
        />
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          {[
            "Masaj terapeutic – pentru dureri musculare și recuperare",
            "Masaj anticelulitic – pentru reducerea celulitei și remodelare corporală",
            "Drenaj limfatic – pentru retenție de apă și detoxifiere",
            "Reflexoterapie – pentru echilibru și reducerea stresului",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-card/80 p-5 shadow-premium backdrop-blur-sm"
            >
              <Sparkles className="mb-3 h-5 w-5 text-[#D4AF37]" />
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <ServiceHubCard key={card.href} {...card} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Poți accesa fiecare serviciu pentru detalii complete:{" "}
          <Link
            href="/masaj-terapeutic-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            masaj terapeutic
          </Link>
          ,{" "}
          <Link
            href="/masaj-anticelulitic-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            masaj anticelulitic
          </Link>
          ,{" "}
          <Link
            href="/drenaj-limfatic-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            drenaj limfatic
          </Link>{" "}
          și{" "}
          <Link
            href="/reflexoterapie-craiova"
            className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
          >
            reflexoterapie
          </Link>
          .
        </p>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Rezultate"
          title="Ce rezultate poți obține"
          description="În funcție de tratament, rezultatele pot include beneficii vizibile și progresive."
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "reducerea durerilor musculare",
              "eliminarea retenției de apă",
              "îmbunătățirea circulației",
              "reducerea celulitei",
              "relaxare profundă",
            ]}
          />
          <p className="mt-6 text-center text-muted-foreground leading-relaxed">
            Rezultatele apar progresiv și depind de consecvență.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Protocoale combinate"
              title="Combinațiile care dau rezultate reale"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Unul dintre cele mai eficiente moduri de a obține rezultate
                rapide este combinarea tratamentelor. De exemplu, combinația
                dintre{" "}
                <Link
                  href="/masaj-anticelulitic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  masajul anticelulitic
                </Link>{" "}
                și{" "}
                <Link
                  href="/drenaj-limfatic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  drenajul limfatic
                </Link>{" "}
                este ideală pentru reducerea celulitei și eliminarea retenției
                de apă.
              </p>
              <p>
                Pentru durerile musculare, poți combina{" "}
                <Link
                  href="/masaj-terapeutic-craiova"
                  className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
                >
                  masajul terapeutic
                </Link>{" "}
                cu un masaj de relaxare pentru efect complet.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <Activity className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Când NU este suficient un singur tip de masaj
            </h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Dacă problema este complexă, un singur tratament nu este
              suficient.
            </p>
            <BulletList
              items={[
                "celulită + retenție → necesită drenaj + anticelulitic",
                "dureri + stres → terapeutic + reflexoterapie",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Abordarea completă oferă rezultate mai rapide și mai stabile.
            </p>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Ai nevoie de un protocol complet de masaj?"
        description="Combină tratamentele potrivite pentru celulită, retenție, dureri sau stres — cu ghidare personalizată în salon."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Semne de alarmă"
          title="Semne că ai nevoie de masaj în Craiova"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "dureri de spate sau cervicale",
              "senzație de picioare grele",
              "celulită persistentă",
              "stres și oboseală",
            ]}
          />
          <p className="mt-6 text-center text-muted-foreground leading-relaxed">
            Aceste simptome indică nevoia unui tratament adaptat. Este momentul
            să alegi tratamentul potrivit, cum ar fi{" "}
            <Link
              href="/masaj-terapeutic-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              masajul terapeutic
            </Link>{" "}
            sau{" "}
            <Link
              href="/masaj-anticelulitic-craiova"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              masajul anticelulitic
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Masaj Craiova – accesibil din toate zonele"
              description="Serviciile sunt accesibile pentru clienți din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Valea Roșie, Sărari și Lăpuș."
            />
            <p className="text-muted-foreground leading-relaxed">
              Salon masaj Craiova Claire Beauty este ușor de accesat din
              principalele cartiere ale orașului. Mulți clienți aleg combinația
              dintre{" "}
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
              </Link>{" "}
              pentru rezultate rapide.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Programări pentru masaj terapeutic, masaj anticelulitic, drenaj
              limfatic și reflexoterapie — cu acces rapid din Craiovița Nouă,
              Rovine, Brazda lui Novac, Centru, 1 Mai, Valea Roșie, Sărari și
              Lăpuș.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cât costă un masaj în Craiova
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Prețul diferă în funcție de:
            </p>
            <BulletList
              items={[
                "tipul de masaj",
                "durata ședinței",
                "complexitatea tratamentului",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pentru rezultate vizibile, sunt recomandate pachetele.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Ce alegi rapid
            </h2>
            <ul className="space-y-3 text-foreground/90 leading-relaxed">
              <li>dureri → masaj terapeutic</li>
              <li>celulită → masaj anticelulitic</li>
              <li>retenție → drenaj limfatic</li>
              <li>stres → reflexoterapie</li>
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rezultatele tratamentelor de masaj Craiova pot apărea chiar după
              primele ședințe, însă pentru efecte vizibile și de durată este
              necesar un protocol complet.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 text-center shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            De ce să alegi Claire Beauty
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            La{" "}
            <Link
              href="/"
              className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
            >
              Claire Beauty
            </Link>
            , fiecare tratament este adaptat nevoilor tale. Nu oferim doar
            masaj, ci soluții pentru probleme reale.
          </p>
        </div>
      </SectionShell>

      <VisualGallery
        images={pageGalleries.masajCraiova}
        eyebrow="În salon"
        title="Masaj la Claire Beauty"
        description="Tehnici reale, terapeută dedicată și atmosferă premium — așa arată experiența de masaj în cabinetul nostru."
        className="bg-background"
        columns={4}
      />

      <ServiceCTA
        title="Programează-te pentru masaj Craiova"
        description="Începe tratamentul potrivit pentru dureri, celulită, retenție sau stres. Telefon: 0757 851 882 · WhatsApp: 0757 851 882 · Programare: clairebeauty.ro/contact"
        whatsappMessage={masajCraiovaWhatsappMessage}
      />
    </>
  )
}
