"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!privacyAccepted) return
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-card shadow-premium text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Mesaj Trimis cu Succes!
        </h3>
        <p className="text-muted-foreground mb-6">
          Mulțumim pentru mesaj! Îți vom răspunde în cel mai scurt timp posibil.
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
          <option value="reflexoterapie">Reflexoterapie</option>
          <option value="masaj-anticelulitic">Masaj Anticelulitic</option>
          <option value="drenaj-limfatic">Drenaj Limfatic</option>
          <option value="tratamente-faciale">Tratamente Faciale</option>
          <option value="remodelare-corporala">Remodelare Corporală</option>
          <option value="radiofrecventa">Radiofrecvență</option>
          <option value="altele">Altele</option>
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
