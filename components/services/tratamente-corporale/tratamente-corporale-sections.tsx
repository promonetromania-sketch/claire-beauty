import type { ReactNode } from "react"
import { businessProfile } from "@/lib/seo/business"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ClaireImage } from "@/components/ui/claire-image"
import type { ClaireImageMeta } from "@/lib/images/claire-beauty"
import { claireImages } from "@/lib/images/claire-beauty"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"

function SectionShell({
  children,
  className,
  id }: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
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

function InlineCTA({
  title,
  description,
  primaryLabel }: {
  title: string
  description: string
  primaryLabel: string
}) {
  return (
    <SectionShell className="bg-secondary/50 py-16">
      <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#FFF9F2]/80 px-6 py-10 text-center shadow-premium backdrop-blur-sm sm:px-10">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F] sm:text-3xl">
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
            WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#0E2B1F]/15 px-8 py-3 text-sm font-semibold text-[#0E2B1F] transition-all hover:bg-white/70"
          >
            Contact
          </Link>
        </div>
      </div>
    </SectionShell>
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

const hubServices: {
  title: string
  href: string
  description: string
  image: ClaireImageMeta
}[] = [
  {
    title: "Remodelare corporală Craiova",
    href: "/remodelare-corporala-craiova",
    description:
      "Tratamente dedicate redefinirii siluetei, tonifierii pielii și susținerii aspectului corporal armonios.",
    image: claireImages.tratamenteCorporaleHero },
  {
    title: "Masaj anticelulitic Craiova",
    href: "/masaj-anticelulitic-craiova",
    description:
      "Masaj specializat pentru stimularea circulației, reducerea aspectului de celulită și îmbunătățirea fermității pielii.",
    image: claireImages.tratamenteCorporaleContent },
  {
    title: "Masaj Craiova",
    href: "/masaj-craiova",
    description:
      "Masaje de relaxare și terapii corporale pentru detensionare, stare de bine și echilibru.",
    image: claireImages.tratamenteCorporaleHero },
  {
    title: "Drenaj limfatic Craiova",
    href: "/drenaj-limfatic-craiova",
    description:
      "Tehnici dedicate eliminării retenției de apă, detoxifierii și susținerii circulației limfatice.",
    image: claireImages.tratamenteCorporaleContent },
]

function HubServiceCard({
  title,
  href,
  description,
  image }: {
  title: string
  href: string
  description: string
  image: ClaireImageMeta
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg"
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <ClaireImage
          {...image}
          fill
          className="transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center text-sm font-semibold text-[#0E2B1F] group-hover:text-[#D4AF37]">
          Află mai multe
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export function TratamenteCorporaleSections() {
  return (
    <>
      <InlineCTA
        title="Programează o ședință"
        description="Descoperă tratamente corporale în Craiova, adaptate obiectivelor tale — remodelare, relaxare sau îngrijire periodică."
        primaryLabel="Programează o ședință"
      />

      <SectionShell id="tratamente-disponibile" className="bg-background scroll-mt-24">
        <SectionHeading
          eyebrow="Servicii corporale"
          title="Tratamente corporale disponibile la Claire Beauty"
          description="Alege din tratamentele noastre corporale și accesează pagina dedicată fiecărui serviciu pentru detalii complete."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {hubServices.map((service) => (
            <HubServiceCard key={service.href} {...service} />
          ))}
        </div>
      </SectionShell>

      <InlineCTA
        title="Alege tratamentul potrivit pentru tine"
        description="Nu ești sigur ce tratament corporal ți se potrivește? Te ajutăm cu o recomandare personalizată la Claire Beauty Craiova."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl space-y-10 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Ce sunt tratamentele corporale?
            </h2>
            <p className="mb-4">
              Tratamentele corporale reunesc proceduri și terapii dedicate
              îngrijirii, tonifierii și echilibrului corpului. La{" "}
              <Link
                href="/"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Claire Beauty Craiova
              </Link>
              , acestea pot include masaj de relaxare,{" "}
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>
              ,{" "}
              <Link
                href="/remodelare-corporala-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                remodelare corporală
              </Link>{" "}
              și protocoale de întreținere corporală.
            </p>
            <p className="mb-4">
              Diferența esențială este obiectivul: relaxarea vizează detensionarea
              și starea de bine, remodelarea corporală susține conturul și
              fermitatea, iar tratamentele anticelulitice se concentrează pe
              aspectul pielii și circulație.
            </p>
            <p>
              De aceea recomandarea personalizată este importantă — același tip
              de tratament nu este potrivit pentru toată lumea, iar rezultatele
              sunt mai bune când protocolul este adaptat nevoilor tale.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Cui se adresează tratamentele corporale?
            </h2>
            <BulletList
              items={[
                "Persoanelor care doresc relaxare profundă și reducerea tensiunii acumulate",
                "Celor care vor remodelare corporală și susținerea conturului siluetei",
                "Persoanelor interesate de reducerea aspectului de celulită",
                "Celor care petrec mult timp la birou și resimt picioare grele sau rigiditate",
                "Persoanelor care doresc întreținere corporală periodică și rutină de wellness",
              ]}
            />
          </div>

          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              De ce să alegi Claire Beauty pentru tratamente corporale în Craiova?
            </h2>
            <BulletList
              items={[
                "Atmosferă relaxantă, elegantă și primitoare",
                "Atenție la detalii și abordare personalizată pentru fiecare clientă",
                "Tratamente adaptate obiectivelor tale, nu soluții generice",
                "Produse și tehnici profesionale pentru rezultate vizibile",
                "Locație în Craiova, cu programări rapide telefonic sau WhatsApp",
                "Posibilitatea de a combina tratamente corporale cu îngrijire facială",
              ]}
            />
            <p className="mt-6">
              Pe lângă tratamentele corporale, poți descoperi și{" "}
              <Link
                href="/tratamente-faciale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                tratamente faciale în Craiova
              </Link>
              , inclusiv{" "}
              <Link
                href="/hydrafacial-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Hydrafacial
              </Link>
              , pentru o rutină completă de beauty și wellness. Pentru programări,
              vizitează pagina de{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                contact
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Explorează"
          title="Servicii complementare"
          description="Tratamentele corporale se pot combina natural cu alte servicii Claire Beauty."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Masaj Craiova", href: "/masaj-craiova" },
            { label: "Tratamente faciale", href: "/tratamente-faciale-craiova" },
            { label: "Hydrafacial", href: "/hydrafacial-craiova" },
            { label: "Prețuri", href: "/preturi" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-premium transition-all hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
            >
              {link.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </SectionShell>

      <ServiceCTA
        title="Contactează Claire Beauty Craiova pentru o recomandare personalizată"
        description="Programează o consultație și află ce tratament corporal ți se potrivește — remodelare, masaj anticelulitic, relaxare sau protocol combinat."
      />
    </>
  )
}
