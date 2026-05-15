import type { ComponentType, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Droplets,
  HeartPulse,
  Leaf,
  MapPin,
  Sparkles,
  Timer,
  Users,
  Waves,
} from "lucide-react"
import { ServiceCTA } from "@/components/services/service-cta"
import { cn } from "@/lib/utils"
import { drenajWhatsappMessage } from "@/lib/content/drenaj-limfatic"

function SectionShell({
  children,
  className,
  id,
}: {
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
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
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
            href={`https://wa.me/40757851882?text=${encodeURIComponent(drenajWhatsappMessage)}`}
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
            Consultație
          </Link>
        </div>
      </div>
    </SectionShell>
  )
}

export function DrenajSections() {
  return (
    <>
      <InlineCTA
        title="Programează-te pentru drenaj limfatic în Craiova"
        description="Elimină retenția de apă, susține detoxifierea și redescoperă senzația de ușurare cu un protocol personalizat la Claire Beauty."
      />

      <SectionShell className="bg-background">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <SectionHeading
              eyebrow="Tehnică terapeutică"
              title="Ce este drenajul limfatic și cum funcționează"
              description="Drenajul limfatic este o tehnică terapeutică menită să stimuleze sistemul limfatic, responsabil de eliminarea toxinelor și a excesului de lichide din organism."
            />
            <BulletList
              items={[
                "se activează circulația limfatică",
                "se elimină retenția de apă",
                "se reduce inflamația",
                "se susține sistemul imunitar",
              ]}
            />
            <p className="mt-6 text-muted-foreground">
              Este unul dintre cele mai eficiente tratamente pentru detoxifiere
              și pentru remodelare corporală în Craiova, atunci când este
              integrat într-un plan personalizat.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-premium-lg">
            <Image
              src="/images/hero-spa.jpg"
              alt="Ședință de drenaj limfatic la Claire Beauty Craiova"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <SectionHeading
          eyebrow="Sistemul limfatic"
          title="Ce este sistemul limfatic și de ce este important"
          description="Sistemul limfatic are rol esențial în menținerea sănătății organismului. Acesta transportă limfa, un lichid care conține toxine, bacterii și reziduuri metabolice."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "retenție de apă",
            "umflături",
            "senzația de picioare grele",
            "celulită",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#D4AF37]/15 bg-card/80 p-6 shadow-premium backdrop-blur-sm"
            >
              <Droplets className="mb-4 h-6 w-6 text-[#D4AF37]" />
              <p className="font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Beneficii"
          title="Beneficiile drenajului limfatic în Craiova"
          description="Tratamentul susține detoxifierea organismului, reduce inflamația și îmbunătățește aspectul pielii, cu efecte vizibile asupra retenției de apă."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "eliminarea retenției de apă",
            "detoxifierea organismului",
            "reducerea inflamațiilor",
            "îmbunătățirea circulației",
            "reducerea celulitei",
            "stimularea sistemului imunitar",
          ].map((benefit) => (
            <InfoCard key={benefit} icon={Sparkles} title={benefit}>
              <p>
                Protocolul de drenaj limfatic anticelulitic este adaptat pentru
                nevoile tale și pentru zonele vizate în salon.
              </p>
            </InfoCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Când NU este suficient drenajul limfatic
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Drenajul limfatic este eficient pentru retenția de apă și
            detoxifiere, dar nu acționează direct asupra grăsimii. Pentru
            rezultate complete, este recomandat în combinație cu{" "}
            <Link
              href="/masaj-anticelulitic-craiova"
              className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
            >
              masaj anticelulitic
            </Link>{" "}
            sau{" "}
            <Link
              href="/radiofrecventa-corporala-craiova"
              className="font-medium text-[#0E2B1F] underline-offset-4 hover:text-[#D4AF37] hover:underline"
            >
              radiofrecvență corporală
            </Link>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Zone tratate"
              title="Zonele tratate prin drenaj limfatic"
            />
            <BulletList items={["picioare", "abdomen", "brațe", "zona lombară"]} />
          </div>
          <div>
            <SectionHeading
              eyebrow="Experiența în salon"
              title="Cum decurge o ședință de drenaj limfatic"
            />
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Drenajul limfatic este un masaj blând, ritmic, diferit de masajul
              anticelulitic. Presiunea este redusă, iar mișcările sunt lente și
              precise.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary/60 p-5">
                <Timer className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">Durată: 30–60 minute</p>
              </div>
              <div className="rounded-2xl bg-secondary/60 p-5">
                <HeartPulse className="mb-3 h-6 w-6 text-[#D4AF37]" />
                <p className="font-medium text-foreground">
                  Senzație: relaxantă și plăcută
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <InlineCTA
        title="Rezervă ședința ta de drenaj limfatic"
        description="Locurile sunt limitate în perioadele aglomerate. Programează din timp pentru un protocol adaptat obiectivelor tale."
        primaryLabel="Rezervă ședința"
      />

      <SectionShell className="bg-secondary/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Users} title="Cui i se adresează drenajul limfatic în Craiova">
            <BulletList
              items={[
                "persoane cu retenție de apă",
                "persoane cu circulație deficitară",
                "persoane sedentare",
                "persoane care doresc detoxifiere",
                "persoane cu celulită",
              ]}
            />
          </InfoCard>
          <InfoCard icon={AlertTriangle} title="Contraindicații">
            <BulletList
              items={[
                "infecții acute",
                "probleme cardiace grave",
                "tromboză",
                "cancer activ",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-3">
          <InfoCard icon={Activity} title="Câte ședințe sunt necesare">
            <BulletList
              items={[
                "2–3 ședințe → reducerea retenției de apă",
                "6–8 ședințe → rezultate vizibile",
                "întreținere → 1 ședință/săptămână",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Waves} title="Ce rezultate poți obține">
            <BulletList
              items={[
                "reducerea umflăturilor",
                "senzație de ușurare în corp",
                "detoxifiere",
                "îmbunătățirea aspectului pielii",
              ]}
            />
          </InfoCard>
          <InfoCard icon={Leaf} title="Recomandări pentru rezultate mai bune">
            <BulletList
              items={[
                "hidratare corectă",
                "alimentație echilibrată",
                "mișcare regulată",
                "evitarea excesului de sare",
              ]}
            />
          </InfoCard>
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm sm:p-10">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
            Diferența dintre drenaj limfatic și masaj anticelulitic
          </h2>
          <BulletList
            items={[
              "drenaj limfatic → elimină lichide și toxine",
              "masaj anticelulitic → reduce grăsimea",
            ]}
          />
          <p className="mt-6 text-muted-foreground">
            Pentru rezultate maxime, cele două tratamente se completează perfect
            în planul de remodelare corporală Craiova.
          </p>
        </div>
      </SectionShell>

      <InlineCTA
        title="Vrei rezultate complete pentru remodelare corporală?"
        description="Combină drenajul limfatic cu masaj anticelulitic sau radiofrecvență corporală pentru un protocol premium adaptat nevoilor tale."
        primaryLabel="Cere informații"
      />

      <SectionShell className="bg-background">
        <SectionHeading
          eyebrow="Semne de alarmă"
          title="Semne că ai nevoie de drenaj limfatic"
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "picioare umflate",
            "senzație de greutate",
            "celulită persistentă",
            "retenție de apă",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#D4AF37]/15 bg-[#FFF9F2]/70 px-5 py-4 text-foreground shadow-premium"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-secondary/40">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="SEO local Craiova"
              title="Drenaj limfatic în Craiova – acces rapid din orice cartier"
              description="Salonul Claire Beauty este accesibil din toate zonele Craiovei. Dacă locuiești în Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1 Mai, Sărari sau Valea Roșie, ajungi rapid la noi."
            />
            <p className="text-muted-foreground leading-relaxed">
              Oferim drenaj limfatic Craiova, eliminare retenție apă Craiova și
              protocoale de detoxifiere Craiova într-un cadru feminin, elegant și
              orientat spre rezultate reale.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-card/80 p-8 shadow-premium backdrop-blur-sm">
            <MapPin className="mb-4 h-7 w-7 text-[#D4AF37]" />
            <p className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Claire Beauty Craiova
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acces facil din Craiovița Nouă, Rovine, Brazda lui Novac, Centru, 1
              Mai, Sărari și Valea Roșie pentru programări rapide la drenaj
              limfatic anticelulitic și tratamente complementare.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-background">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard icon={Sparkles} title="De ce să alegi Claire Beauty Craiova">
            <BulletList
              items={[
                "personal calificat",
                "tehnici profesionale",
                "tratamente personalizate",
                "rezultate reale",
              ]}
            />
            <p className="mt-4">
              Descoperă toate serviciile pe{" "}
              <Link href="/" className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]">
                clairebeauty.ro
              </Link>{" "}
              sau explorează categoria{" "}
              <Link
                href="/masaj-craiova"
                className="font-medium text-[#0E2B1F] hover:text-[#D4AF37]"
              >
                masaj
              </Link>
              .
            </p>
          </InfoCard>
          <InfoCard icon={Timer} title="Cât costă drenajul limfatic în Craiova">
            <p>
              Prețul diferă în funcție de zona tratată și durata ședinței.
              Contactează-ne pentru ofertă personalizată și pachete recomandate
              pentru eficiență maximă.
            </p>
          </InfoCard>
        </div>
      </SectionShell>

      <ServiceCTA
        title="Programează-te acum la Claire Beauty Craiova"
        description="Dacă vrei să elimini retenția de apă și să te simți mai ușor și mai energic, programează-te pentru drenaj limfatic Craiova. Locurile sunt limitate în perioadele aglomerate."
        whatsappMessage={drenajWhatsappMessage}
      />
    </>
  )
}
