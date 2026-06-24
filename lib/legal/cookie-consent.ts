export const COOKIE_CONSENT_KEY = "claire-cookie-consent"
export const COOKIE_CONSENT_EVENT = "cookie-consent-updated"

export type CookieConsent = {
  necessary: true
  analytics: boolean
  timestamp: string
}

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookieConsent
  } catch {
    return null
  }
}

export function setCookieConsent(analytics: boolean): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    analytics,
    timestamp: new Date().toISOString(),
  }
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT))
  return value
}

export function hasCookieConsentChoice(): boolean {
  return getCookieConsent() !== null
}
