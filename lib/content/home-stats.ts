import { Calendar, Heart, Sparkles, Users, type LucideIcon } from "lucide-react"

/** Statistici afișate în secțiunea homepage „De ce aleg clientele…”. */
export type HomeStatItem = {
  label: string
  value: string
  icon: LucideIcon
}

export const homeStats: HomeStatItem[] = [
  {
    label: "Cliente Mulțumite",
    value: "1000+",
    icon: Heart,
  },
  {
    label: "Ședințe Realizate",
    value: "10.000+",
    icon: Calendar,
  },
  {
    label: "Ani Experiență",
    value: "10+",
    icon: Users,
  },
  {
    label: "Servicii Profesionale",
    value: "20+",
    icon: Sparkles,
  },
]
