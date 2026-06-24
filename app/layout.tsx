import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { CookieConsent } from "@/components/legal/cookie-consent"
import { ConditionalAnalytics } from "@/components/legal/conditional-analytics"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Claire Beauty Craiova | Body Spa — Tratamente Faciale și Corporale",
  description:
    "Salon premium body spa în Craiova. Tratamente faciale, masaj, remodelare corporală și îngrijire personalizată la Claire Beauty Craiova.",
  keywords: [
    "Claire Beauty Craiova",
    "salon beauty Craiova",
    "body spa Craiova",
    "tratamente faciale Craiova",
    "masaj Craiova",
    "remodelare corporala Craiova",
  ],
  authors: [{ name: "Claire Beauty Craiova" }],
  openGraph: {
    title: "Claire Beauty Craiova | Body Spa Premium",
    description:
      "Salon premium de înfrumusețare și body spa în Craiova. Tratamente faciale, masaj și remodelare corporală.",
    type: "website",
    locale: "ro_RO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === "production" && <ConditionalAnalytics />}
      </body>
    </html>
  )
}
