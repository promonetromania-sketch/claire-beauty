"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import {
  hasCookieConsentChoice,
  setCookieConsent,
} from "@/lib/legal/cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!hasCookieConsentChoice())
  }, [])

  if (!visible) return null

  const acceptAll = () => {
    setCookieConsent(true)
    setVisible(false)
  }

  const acceptNecessary = () => {
    setCookieConsent(false)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#D4AF37]/25 bg-[#0E2B1F]/95 p-5 shadow-premium-lg backdrop-blur-md sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
            <Cookie className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex-1">
            <h2
              id="cookie-consent-title"
              className="mb-2 font-serif text-lg font-semibold text-[#FFF9F2]"
            >
              Cookie-uri și confidențialitate
            </h2>
            <p
              id="cookie-consent-desc"
              className="text-sm leading-relaxed text-[#FFF9F2]/80"
            >
              Folosim cookie-uri strict necesare pentru preferințele tale. Cu
              acordul tău, activăm și cookie-uri analitice (Google Analytics)
              pentru a înțelege cum este folosit site-ul. Detalii în{" "}
              <Link
                href="/politica-cookie"
                className="font-medium text-[#D4AF37] underline-offset-2 hover:underline"
              >
                Politica de cookie
              </Link>{" "}
              și{" "}
              <Link
                href="/politica-confidentialitate"
                className="font-medium text-[#D4AF37] underline-offset-2 hover:underline"
              >
                Politica de confidențialitate
              </Link>{" "}
              și{" "}
              <Link
                href="/gdpr"
                className="font-medium text-[#D4AF37] underline-offset-2 hover:underline"
              >
                Informații GDPR
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:min-w-[200px]">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0E2B1F] transition-opacity hover:opacity-90"
            >
              Accept toate
            </button>
            <button
              type="button"
              onClick={acceptNecessary}
              className="rounded-full border border-[#FFF9F2]/25 px-5 py-2.5 text-sm font-semibold text-[#FFF9F2] transition-colors hover:bg-[#FFF9F2]/10"
            >
              Doar necesare
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
