"use client"


import Script from "next/script"
import { useEffect } from "react"
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent } from "@/lib/legal/cookie-consent"
import {
  GA_MEASUREMENT_ID,
  isGoogleAnalyticsConfigured } from "@/lib/legal/analytics"

/**
 * Etichetele Google (Analytics + Ads) cu Google Consent Mode v2.
 *
 * Înlocuiește `ConditionalAnalytics`, care încărca gtag DOAR după „Accept toate” — adică pentru o
 * mică parte din vizitatori. Rezultatul: niciun contact de pe site nu ajungea în Google Ads
 * (verificat 19 oct 2026: 0 evenimente din august, deși contorul anonim a numărat 15 contacte).
 *
 * Acum gtag se încarcă mereu, dar pornește cu TOATE permisiunile pe „denied”: fără cookie-uri,
 * fără identificare, doar semnale agregate din care Google estimează statistic rezultatele.
 * La „Accept toate” permisiunile trec pe „granted” (și rămân așa la vizitele următoare);
 * la „Doar necesare” rămân pe „denied”.
 */
const ADS_ID = "AW-18497254196"
// Acțiunile de conversie create în contul Google Ads pe 19 oct 2026 (google-ads/claire-beauty/etichete_ads.json)
const ADS_LABELS = {
  telefon: "bDHJCNOxs6IdELTmlvRE",
  whatsapp: "7RyhCIzZu6IdELTmlvRE",
  email: "Q2vlCImTuaIdELTmlvRE",
  formular: "bbuVCOaQuaIdELTmlvRE",
} as const

type Gtag = (...args: unknown[]) => void

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return
  const w = window as unknown as { gtag?: Gtag; dataLayer?: unknown[] }
  if (typeof w.gtag === "function") {
    w.gtag(...args)
  } else {
    // scriptul de inițializare poate ajunge după un clic foarte rapid — dataLayer e creat imediat
    w.dataLayer = w.dataLayer || []
    // gtag() împinge obiectul `arguments`, nu un array — îl imităm, altfel Google ignoră intrarea
    w.dataLayer.push((function () { return arguments })(...(args as [])))
  }
}

/** Starea de consimțământ pe care o trimitem Google, din alegerea făcută în bannerul nostru. */
function consentUpdate() {
  const ok = getCookieConsent()?.analytics === true
  const v = ok ? "granted" : "denied"
  gtag("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  })
}

/** Un contact = eveniment GA4 + conversie Google Ads. */
function contact(tip: keyof typeof ADS_LABELS, parametri: Record<string, unknown> = {}) {
  const nume = { telefon: "click_telefon", whatsapp: "click_whatsapp", email: "click_email", formular: "generate_lead" }[tip]
  gtag("event", nume, parametri)
  gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABELS[tip]}` })
}

/**
 * Linkurile de telefon, WhatsApp și e-mail apar în ~60 de componente, de aceea ascultăm un singur
 * clic delegat pe `document`, în faza de captură. Formularul de contact nu trece prin server
 * (deschide WhatsApp + e-mail), așa că își anunță singur trimiterea printr-un eveniment propriu
 * (`claire:formular-trimis`, din components/contact/contact-form.tsx).
 */
function useContactEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = (link.getAttribute("href") || "").replace(/\s/g, "").toLowerCase()
      if (href.startsWith("tel:")) contact("telefon", { link_url: href })
      else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) contact("whatsapp", { link_url: href })
      else if (href.startsWith("mailto:")) contact("email", { link_url: href })
    }
    const onFormular = () => contact("formular", { form_id: "contact" })

    document.addEventListener("click", onClick, true)
    window.addEventListener("claire:formular-trimis", onFormular)
    window.addEventListener(COOKIE_CONSENT_EVENT, consentUpdate)
    return () => {
      document.removeEventListener("click", onClick, true)
      window.removeEventListener("claire:formular-trimis", onFormular)
      window.removeEventListener(COOKIE_CONSENT_EVENT, consentUpdate)
    }
  }, [])
}

export function GoogleTags() {
  useContactEvents()
  if (!isGoogleAnalyticsConfigured()) return null

  const acordDat = typeof window !== "undefined" && getCookieConsent()?.analytics === true

  return (
    <>
      {/* Consent Mode v2 trebuie să existe ÎNAINTE de gtag.js — de aceea e inline, cu beforeInteractive */}
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          ${acordDat ? "gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });" : ""}
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-tags-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  )
}
