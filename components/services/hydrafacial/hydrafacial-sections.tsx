import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Leaf,
  MapPin,
  Sparkles,
  Target,
  Waves,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { hydrafacialWhatsappMessage } from "@/lib/content/hydrafacial"

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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(hydrafacialWhatsappMessage)}`}
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

const hydrafacialSteps = [
  {
    step: "01",
    title: "Curățare",
    description: "Eliminarea impurităților de la suprafața pielii.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Exfoliere",
    description: "Îndepărtarea delicată a stratului superficial.",
    icon: Waves,
  },
  {
    step: "03",
    title: "Extracție impurități",
    description: "Curățarea porilor și a punctelor negre.",
    icon: Target,
  },
  {
    step: "04",
    title: "Hidratare cu seruri active",
    description: "Infuzie de hidratare intensă pentru glow imediat.",
    icon: Droplets,
  },
] as const

export function HydrafacialSections() {
  return (
    <>
      <InlineCTA
        title="Obține glow imediat cu Hydrafacial în Craiova"
        description="Curățare profundă, hidratare intensă și ten luminos — fără durere și fără recuperare."
        primaryLabel="Programează-te acum"
      />

      <SectionShell className="bg-background">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Procedură facială"
              title="Ce este Hydrafacial și cum funcționează"
              description="Hydrafacial este un tratament facial avansat care combină mai multe etape esențiale într-o singură ședință, fără disconfort."
            />
            <BulletList
              items={[
                "curățarea pielii",
                "exfolierea stratului superficial",
                "extracția impurităților din pori",
                "hidratarea intensă cu seruri active",
              ]}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Este considerat unul dintre cele mai eficiente tratamente pentru
              curățare facială profesională în Craiova.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/hero-spa.jpg"
              alt="Etapele tratamentului Hydrafacial în Craiova"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Protocol Hydrafacial"
          title="Etapele tratamentului Hydrafacial"
          description="Patru etape integrate pentru curățare, exfoliere, extracție și hidratare intensă."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {hydrafacialSteps.map((item) => (
            <InfoCard key={item.step} icon={item.icon} title={item.title}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Pasul {item.step}
              </p>
              <p>{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile reale ale Hydrafacial"
          description="Tratamentul Hydrafacial este tot mai căutat în Craiova pentru curățare facială profesională și rezultate imediate."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "curățare profundă a porilor",
            "eliminarea punctelor negre",
            "hidratare intensă",
            "uniformizarea tenului",
            "efect de glow imediat",
            "îmbunătățirea texturii pielii",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Hydrafacial Craiova oferă curățare facială și ten luminos cu
                rezultate vizibile imediat.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Indicații"
              title="Pentru cine este potrivit Hydrafacial"
              description="Hydrafacial este extrem de versatil — tratamentul universal pentru întreținerea tenului."
            />
            <BulletList
              items={[
                "ten gras sau mixt",
                "ten uscat și deshidratat",
                "ten tern",
                "pori dilatați",
                "persoane cu puncte negre",
              ]}
            />
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              De ce Hydrafacial este unul dintre cele mai căutate tratamente
              faciale
            </h3>
            <BulletList
              items={[
                "rezultate imediate",
                "fără durere",
                "fără recuperare",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Este alegerea ideală dacă vrei ten curat rapid în Craiova.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <AlertTriangle className="mb-4 h-7 w-7 text-[#D4AF37]" />
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Când NU este suficient Hydrafacial
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Hydrafacial este ideal pentru curățare și întreținere, dar nu
            rezolvă probleme profunde precum:
          </p>
          <BulletList
            items={[
              "cicatrici adânci",
              "riduri accentuate",
              "laxitate severă",
            ]}
          />
          <p className="mt-4 text-muted-foreground leading-relaxed">
            În aceste cazuri se recomandă tratamente precum{" "}
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
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Comparație SEO"
          title="Hydrafacial vs alte tratamente faciale"
          description="Hydrafacial nu înlocuiește — completează celelalte tratamente."
        />
        <div className="mx-auto max-w-4xl space-y-4 rounded-[1.75rem] border border-[#D4AF37]/20 bg-card/85 p-8 shadow-premium backdrop-blur-sm">
          <p className="font-medium text-foreground">
            Hydrafacial → curăță + hidratează instant
          </p>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>
              Pentru regenerare profundă →{" "}
              <Link
                href="/microneedling-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                microneedling
              </Link>
            </li>
            <li>
              Pentru stimularea colagenului →{" "}
              <Link
                href="/dermapen-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                Dermapen
              </Link>
            </li>
            <li>
              Pentru lifting facial →{" "}
              <Link
                href="/hifu-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                HIFU
              </Link>
            </li>
            <li>
              Pentru exfoliere →{" "}
              <Link
                href="/microdermabraziune-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                microdermabraziune
              </Link>
            </li>
          </ul>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Câte ședințe sunt necesare pentru rezultate
            </h2>
            <BulletList
              items={[
                "1 ședință → efect imediat",
                "3–5 ședințe → îmbunătățire vizibilă",
                "întreținere → 1 dată pe lună",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Este ideal pentru întreținere constantă a tenului.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
              Ce rezultate poți obține
            </h2>
            <BulletList
              items={[
                "ten mai curat",
                "piele mai hidratată",
                "aspect luminos",
                "reducerea imperfecțiunilor",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Rezultatele sunt vizibile chiar după prima ședință.
            </p>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei ten curat și hidratat imediat?"
        description="Programează Hydrafacial și combină-l cu tratamente faciale complementare pentru rezultate complete."
        primaryLabel="Cere recomandare"
      />

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Semne de alarmă"
          title="Semne că ai nevoie de Hydrafacial"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "ten încărcat",
              "puncte negre",
              "lipsă de strălucire",
              "pori dilatați",
              "piele deshidratată",
            ]}
          />
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
                "amâni tratamentul",
                "alegi produse în loc de tratamente",
                "nu faci întreținere",
              ]}
            />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Asta duce la stagnare.
            </p>
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

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Hydrafacial Craiova – aproape de tine"
              description="Indiferent dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru sau 1 Mai, ajungi rapid la Claire Beauty."
            />
            <p className="text-muted-foreground leading-relaxed">
              Pentru rezultate complete, poți combina Hydrafacial cu{" "}
              <Link
                href="/tratamente-faciale-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                tratamente faciale Craiova
              </Link>{" "}
              adaptate tipului tău de ten.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru
              și 1 Mai pentru curățare facială, hidratare ten și tratamente
              complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Target} title="Cât costă Hydrafacial în Craiova">
            <p className="mb-4">Prețul diferă în funcție de:</p>
            <BulletList
              items={["tipul tratamentului", "complexitate", "pachet"]}
            />
            <p className="mt-4">
              Pachetele sunt cele mai eficiente pentru întreținere.
            </p>
          </InfoCard>
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "tehnologii moderne",
                "tratamente personalizate",
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
        description="Dacă vrei un ten curat, hidratat și luminos — locurile sunt limitate, iar perioadele aglomerate se ocupă rapid."
        primaryLabel="Programează-te acum"
      />

      <ServiceCTA
        title="Programează-te pentru Hydrafacial Craiova"
        description="Vezi diferența chiar după prima ședință: curățare profundă, hidratare intensă și glow imediat. Telefon: 0757 851 882."
        whatsappMessage={hydrafacialWhatsappMessage}
      />
    </>
  )
}
