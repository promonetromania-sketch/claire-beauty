import { Calendar, Heart, Sparkles, Users, type LucideIcon } from "lucide-react"

/** Valori placeholder — editează aici când ai cifre reale confirmate. */
export type HomeStatItem = {
  label: string
  value: string
  icon: LucideIcon
}

export const homeStats: HomeStatItem[] = [
  {
    label: "Cliente Mulțumite",
    value: "—",
    icon: Heart,
  },
  {
    label: "Ședințe Realizate",
    value: "—",
    icon: Calendar,
  },
  {
    label: "Ani Experiență",
    value: "10+",
    icon: Users,
  },
  {
    label: "Servicii Profesionale",
    value: "—",
    icon: Sparkles,
  },
]
