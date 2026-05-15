import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"

type PlaceholderPageProps = {
  title: string
  description?: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold text-primary mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {description ??
              "Pagina este în curs de pregătire. Revenim în curând cu detalii despre serviciile noastre din Craiova."}
          </p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
