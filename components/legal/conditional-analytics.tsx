"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent } from "@/lib/legal/cookie-consent"
import {
  GA_MEASUREMENT_ID,
  isGoogleAnalyticsConfigured } from "@/lib/legal/analytics"

/**
 * Trimite un eveniment în GA4.
 * `gtag` e definit de scriptul de inițializare de mai jos, dar un clic foarte rapid poate
 * ajunge înaintea lui — de aceea cădem pe `dataLayer`, care e creat imediat.
 */
function trimiteEveniment(nume: string, parametri: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
  if (typeof w.gtag === "function") {
    w.gtag("event", nume, parametri)
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(["event", nume, parametri])
  }
}

/**
 * Evenimentele de contact pe care contul de Google Ads le importă din GA4.
 * Linkurile de telefon, WhatsApp și e-mail apar în ~60 de componente, de aceea ascultăm
 * un singur clic delegat pe `document`, în faza de captură: prinde orice link, oriunde,
 * inclusiv cele randate ulterior, fără să atingem fiecare componentă.
 */
function useContactEvents(activ: boolean) {
  useEffect(() => {
    if (!activ) return

    const onClick = (event: MouseEvent) => {
      const tinta = event.target as HTMLElement | null
      const link = tinta?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return

      const href = (link.getAttribute("href") || "").trim().toLowerCase()
      if (!href) return

      if (href.startsWith("tel:")) {
        trimiteEveniment("click_telefon", { link_url: href })
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trimiteEveniment("click_whatsapp", { link_url: href })
      } else if (href.startsWith("mailto:")) {
        trimiteEveniment("click_email", { link_url: href })
      }
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [activ])
}

export function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const sync = () => {
      setEnabled(getCookieConsent()?.analytics === true)
    }
    sync()
    window.addEventListener(COOKIE_CONSENT_EVENT, sync)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync)
  }, [])

  const activ = enabled && isGoogleAnalyticsConfigured()
  useContactEvents(activ)

  if (!activ) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });
        `}
      </Script>
    </>
  )
}
