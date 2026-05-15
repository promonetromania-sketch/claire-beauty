import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Claire's Studio by Ana Savovici | Body Spa Craiova",
  description:
    "Salon premium de înfrumusețare și body spa în Craiova. Reflexoterapie, masaj anticelulitic, drenaj limfatic, tratamente faciale și remodelare corporală.",
  keywords: [
    "salon beauty Craiova",
    "body spa Craiova",
    "reflexoterapie Craiova",
    "masaj anticelulitic Craiova",
    "drenaj limfatic Craiova",
    "tratamente faciale Craiova",
    "remodelare corporala Craiova",
  ],
  authors: [{ name: "Claire's Studio by Ana Savovici" }],
  openGraph: {
    title: "Claire's Studio by Ana Savovici | Body Spa Craiova",
    description:
      "Salon premium de înfrumusețare și body spa în Craiova. Reflexoterapie, masaj anticelulitic, drenaj limfatic și tratamente faciale.",
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
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
