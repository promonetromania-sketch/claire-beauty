"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { businessProfile } from "@/lib/seo/business"

const CONTACT_SERVICE_OPTIONS = [
  { value: "masaj", label: "Masaj" },
  { value: "reflexoterapie", label: "Reflexoterapie" },
  { value: "masaj-anticelulitic", label: "Masaj Anticelulitic" },
  { value: "drenaj-limfatic", label: "Drenaj Limfatic" },
  { value: "tratamente-faciale", label: "Tratamente Faciale" },
  { value: "microdermabraziune", label: "Microdermabraziune" },
  { value: "microneedling", label: "Microneedling" },
  { value: "hifu-facial", label: "HIFU Facial" },
  { value: "remodelare-corporala", label: "Remodelare Corporală" },
  { value: "radiofrecventa", label: "Radiofrecvență" },
  { value: "altele", label: "Altele" },
] as const

const PROMONET_EMAIL = "promonetromania@gmail.com"

function getServiceLabel(value: string) {
  return (
    CONTACT_SERVICE_OPTIONS.find((option) => option.value === value)?.label ??
    "Nespecificat"
  )
}

function buildContactMessage(data: {
  name: string
  phone: string
  email: string
  service: string
  message: string
}) {
  const serviceLabel = getServiceLabel(data.service)

  return [
    "Programare / contact Claire Beauty Craiova",
    "",
    `Nume: ${data.name}`,
    `Telefon: ${data.phone}`,
    `Email: ${data.email || "—"}`,
    `Serviciu: ${serviceLabel}`,
    "",
    "Mesaj:",
    data.message,
  ].join("\n")
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!privacyAccepted) return

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    setIsSubmitting(true)

    const body = buildContactMessage(payload)
    const subject = `Contact Claire Beauty — ${payload.name}`

    const whatsappUrl = `${businessProfile.whatsappUrl}?text=${encodeURIComponent(body)}`
    const mailtoUrl = `mailto:${businessProfile.email}?cc=${encodeURIComponent(PROMONET_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    const mailLink = document.createElement("a")
    mailLink.href = mailtoUrl
    mailLink.rel = "noopener noreferrer"
    mailLink.click()

    await new Promise((resolve) => setTimeout(resolve, 400))

    setIsSubmitting(false)
    setIsSubmitted(true)
    form.reset()
    setPrivacyAccepted(false)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-card shadow-premium text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Mesaj pregătit pentru trimitere!
        </h3>
        <p className="text-muted-foreground mb-6">
          S-a deschis WhatsApp cu mesajul complet, iar clientul tău de email a
          fost deschis cu destinatarii{" "}
          {businessProfile.email} și {PROMONET_EMAIL}. Verifică și trimite
          emailul dacă nu s-a deschis automat.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="rounded-full"
        >
          Trimite Alt Mesaj
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl bg-card shadow-premium space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Nume Complet *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Numele tău"
            className="rounded-xl bg-secondary border-border focus:border-accent"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Telefon *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+40 7XX XXX XXX"
            className="rounded-xl bg-secondary border-border focus:border-accent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="email@exemplu.com"
          className="rounded-xl bg-secondary border-border focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="text-foreground">
          Serviciu de Interes
        </Label>
        <select
          id="service"
          name="service"
          className="w-full h-10 px-3 rounded-xl bg-secondary border border-border text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Selectează un serviciu</option>
          {CONTACT_SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Mesaj *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Spune-ne cum te putem ajuta..."
          className="rounded-xl bg-secondary border-border focus:border-accent resize-none"
        />
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-4">
        <Checkbox
          id="privacy"
          checked={privacyAccepted}
          onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
          required
          className="mt-0.5"
        />
        <Label
          htmlFor="privacy"
          className="cursor-pointer text-sm leading-relaxed text-muted-foreground font-normal"
        >
          Sunt de acord cu prelucrarea datelor mele conform{" "}
          <Link
            href="/politica-confidentialitate"
            className="font-medium text-[#0E2B1F] underline-offset-2 hover:text-[#D4AF37] hover:underline"
          >
            Politicii de confidențialitate
          </Link>
          . *
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !privacyAccepted}
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Se trimite...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Trimite Mesajul
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        Câmpurile marcate cu * sunt obligatorii
      </p>
    </form>
  )
}
