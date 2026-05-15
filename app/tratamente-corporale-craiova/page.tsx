import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/pages/placeholder-page"

export const metadata: Metadata = {
  title: "Tratamente corporale Craiova | Claire's Studio by Ana Savovici",
  description: "Tratamente corporale în Craiova pentru remodelare, tonifiere și îngrijire completă.",
}

export default function Page() {
  return <PlaceholderPage title="Tratamente corporale Craiova" />
}
