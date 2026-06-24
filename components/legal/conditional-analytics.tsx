"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent } from "@/lib/legal/cookie-consent"
import {
  GA_MEASUREMENT_ID,
  isGoogleAnalyticsConfigured } from "@/lib/legal/analytics"

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

  if (!enabled || !isGoogleAnalyticsConfigured()) return null

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
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  )
}
