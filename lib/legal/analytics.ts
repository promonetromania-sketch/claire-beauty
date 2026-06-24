export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || ""

export function isGoogleAnalyticsConfigured(): boolean {
  return /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)
}
