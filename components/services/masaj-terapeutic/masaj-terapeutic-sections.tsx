import type { ComponentType, ReactNode } from "react"
import { businessProfile } from "@/lib/seo/business"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  HeartPulse,
  Leaf,
  MapPin,
  Sparkles,
  Target,
  Timer,
  Users,
  Waves } from "lucide-react"
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
            Cere informații pe WhatsApp
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

export function MasajTerapeuticSections() {
  return (
    <>
      <InlineCTA
        title="Programează-te pentru masaj terapeutic în Craiova"
        description="Redu tensiunea musculară, durerile de spate și recâștigă mobilitatea cu un protocol personalizat la Claire Beauty."
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              align="left"
              eyebrow="Tratament manual"
              title="Ce este masajul terapeutic și când ai nevoie de el"
              description="Masajul terapeutic este o formă de tratament manual care acționează asupra mușchilor, tendoanelor și articulațiilor pentru a reduce durerea și a îmbunătăți funcționarea corpului."
            />
            <p className="mb-4 font-medium text-foreground">
              Este recomandat atunci când:
            </p>
            <BulletList
              items={[
                "ai dureri de spate sau cervicale",
                "simți tensiune musculară constantă",
                "ai mobilitate redusă",
                "te confrunți cu stres și oboseală",
              ]}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <ClaireImage
              {...claireImages.masajTerapeutic2}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Probleme tratate"
          title="Tipuri de probleme tratate prin masaj terapeutic în Craiova"
          description="Masajul terapeutic este eficient pentru dureri musculare, rigiditate și recuperare după efort."
        />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {[
            "dureri lombare (zona inferioară a spatelui)",
            "dureri cervicale (gât și umeri)",
            "contracturi musculare",
            "rigiditate musculară",
            "dureri cauzate de statul la birou",
            "recuperare după efort fizic",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-card/80 p-5 shadow-premium backdrop-blur-sm"
            >
              <Target className="mb-3 h-5 w-5 text-[#D4AF37]" />
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile masajului terapeutic"
          description="Tratamentul susține recuperarea musculară, relaxarea profundă și îmbunătățirea stării generale."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "reducerea durerilor musculare",
            "relaxarea profundă a musculaturii",
            "îmbunătățirea circulației",
            "creșterea mobilității",
            "reducerea stresului",
            "prevenirea accidentărilor",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Protocolul de masaj terapeutic Craiova este adaptat pentru
                tensiune musculară, mobilitate redusă și recuperare musculară.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Experiența în salon"
              title="Cum decurge o ședință de masaj terapeutic în Craiova"
              description="Fiecare ședință începe cu o evaluare a zonelor tensionate. Masajul implică tehnici de presiune, frământare și mobilizare musculară."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary/60 p-5">
                <Timer className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">Durată: 30–60 minute</p>
              </div>
              <div className="rounded-2xl bg-secondary/60 p-5">
                <Activity className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">
                  Intensitate: medie – profundă
                </p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Masajul terapeutic este tot mai căutat în Craiova pentru reducerea
              durerilor de spate și a tensiunii musculare. În multe cazuri,
              ameliorarea se simte chiar după prima ședință.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Zone tratate"
          title="Zonele tratate cel mai frecvent"
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "spate (lombar și toracic)",
            "gât și umeri",
            "brațe",
            "picioare",
          ].map((zone) => (
            <div
              key={zone}
              className="rounded-2xl border border-[#D4AF37]/15 bg-[#FFF9F2]/70 px-5 py-4 text-foreground shadow-premium"
            >
              {zone}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Users} title="Cui i se adresează masajul terapeutic în Craiova">
            <BulletList
              items={[
                "persoane sedentare",
                "persoane active sau sportivi",
                "persoane cu dureri cronice",
                "persoane stresate",
              ]}
            />
          </InfoCard>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Când NU este suficient masajul terapeutic
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Masajul terapeutic este eficient pentru tensiune musculară și
              dureri, dar nu rezolvă complet toate cauzele. Pentru rezultate mai
              bune, poate fi combinat cu{" "}
              <Link
                href="/reflexoterapie-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                reflexoterapie
              </Link>{" "}
              sau alte tipuri de{" "}
              <Link
                href="/masaj-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj
              </Link>
              .
            </p>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Rezervă ședința ta de masaj terapeutic"
        description="Locurile sunt limitate în perioadele aglomerate. Programează din timp pentru un protocol adaptat durerilor și tensiunii tale musculare."
        primaryLabel="Rezervă ședința"
      />

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={AlertTriangle} title="Contraindicații">
            <BulletList
              items={[
                "inflamații acute",
                "fracturi recente",
                "infecții",
                "afecțiuni grave fără recomandare medicală",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Timer} title="Câte ședințe sunt necesare">
            <BulletList
              items={[
                "1–3 ședințe → ameliorare",
                "5–7 ședințe → rezultate stabile",
                "întreținere → 1 ședință/săptămână",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={HeartPulse} title="Ce rezultate poți obține">
            <BulletList
              items={[
                "reducerea durerilor",
                "relaxare musculară",
                "mobilitate crescută",
                "stare generală de bine",
              ]}
            />
          </InfoCard>
          <InfoCard
            icon={Waves}
            title="Diferența dintre masaj terapeutic și masaj de relaxare"
          >
            <BulletList
              items={[
                "masaj terapeutic → tratează probleme musculare",
                "masaj relaxare → reduce stresul",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Activity} title="Semne că ai nevoie de masaj terapeutic">
            <BulletList
              items={[
                "dureri de spate constante",
                "tensiune în zona gâtului",
                "rigiditate musculară",
                "oboseală cronică",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Target} title="Cauze frecvente ale durerilor musculare">
            <BulletList
              items={[
                "statul prelungit pe scaun",
                "postura incorectă",
                "stresul",
                "lipsa mișcării",
                "suprasolicitarea",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Prevenție"
          title="Recomandări pentru prevenirea durerilor"
        />
        <div className="mx-auto max-w-3xl">
          <BulletList
            items={[
              "pauze regulate",
              "exerciții de stretching",
              "postură corectă",
              "hidratare",
            ]}
          />
        </div>
      </SectionShell>

      <InlineCTA
        title="Ai nevoie de recuperare musculară și mobilitate mai bună?"
        description="Combină masajul terapeutic cu reflexoterapie sau alte servicii Claire Beauty pentru un plan complet de wellness."
        primaryLabel="Cere informații"
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="SEO local Craiova"
              title="Masaj terapeutic în Craiova – aproape de tine"
              description="Salonul Claire Beauty este ușor accesibil din toate zonele orașului. Dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Valea Roșie sau Sărari, ajungi rapid la noi."
            />
            <p className="text-muted-foreground leading-relaxed">
              Oferim masaj terapeutic Craiova pentru dureri de spate, tensiune
              musculară și mobilitate redusă, într-un cadru calm, premium și
              orientat spre recuperare.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces rapid din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1
              Mai, Valea Roșie și Sărari pentru programări la masaj terapeutic și
              tratamente complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Leaf} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "terapeuți specializați",
                "tehnici profesionale",
                "abordare personalizată",
                "rezultate reale",
              ]}
            />
            <p className="mt-4">
              Descoperă toate serviciile pe{" "}
              <Link href="/" className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]">
                clairebeauty.ro
              </Link>
              .
            </p>
          </InfoCard>
          <InfoCard icon={Waves} title="Cât costă masajul terapeutic în Craiova">
            <p>
              Prețul variază în funcție de durată și zonele tratate.
              Contactează-ne pentru ofertă personalizată.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Ce alegi în funcție de problemă
          </h2>
          <ul className="space-y-4 text-muted-foreground leading-relaxed">
            <li>Dureri musculare → masaj terapeutic</li>
            <li>
              retenție de apă →{" "}
              <Link
                href="/drenaj-limfatic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                drenaj limfatic
              </Link>
            </li>
            <li>
              celulită →{" "}
              <Link
                href="/masaj-anticelulitic-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj anticelulitic
              </Link>
            </li>
            <li>stres → masaj relaxare</li>
          </ul>
        </div>
      </SectionShell>

      <ServiceCTA
        title="Programează-te acum la Claire Beauty Craiova"
        description="Dacă vrei să scapi de dureri și să îți recapeți mobilitatea, programează-te acum. Locurile sunt limitate în perioadele aglomerate. Programează-te pentru masaj terapeutic Craiova și scapă de durerile musculare eficient."
      />
    </>
  )
}
