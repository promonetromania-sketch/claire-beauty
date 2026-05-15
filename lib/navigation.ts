export type NavLink = {
  name: string
  href: string
}

export type NavDropdown = {
  name: string
  href: string
  items: NavLink[]
}

export type NavItem =
  | ({ type: "link" } & NavLink)
  | ({ type: "dropdown" } & NavDropdown)

export const mainNavigation: NavItem[] = [
  { type: "link", name: "Acasă", href: "/" },
  {
    type: "dropdown",
    name: "Masaj",
    href: "/masaj-craiova",
    items: [
      { name: "Masaj terapeutic", href: "/masaj-terapeutic-craiova" },
      { name: "Masaj anticelulitic", href: "/masaj-anticelulitic-craiova" },
      { name: "Drenaj limfatic", href: "/drenaj-limfatic-craiova" },
      { name: "Reflexoterapie", href: "/reflexoterapie-craiova" },
    ],
  },
  {
    type: "dropdown",
    name: "Tratamente faciale",
    href: "/tratamente-faciale-craiova",
    items: [
      { name: "HIFU", href: "/hifu-craiova" },
      { name: "Dermapen", href: "/dermapen-craiova" },
      { name: "Microdermabraziune", href: "/microdermabraziune-craiova" },
      { name: "Microneedling", href: "/microneedling-craiova" },
      { name: "Hydrafacial", href: "/hydrafacial-craiova" },
    ],
  },
  {
    type: "dropdown",
    name: "Tratamente corporale",
    href: "/tratamente-corporale-craiova",
    items: [
      { name: "Remodelare corporală", href: "/remodelare-corporala-craiova" },
      { name: "Electrostimulare", href: "/electrostimulare-craiova" },
      {
        name: "Radiofrecvență corporală",
        href: "/radiofrecventa-corporala-craiova",
      },
    ],
  },
  { type: "link", name: "Contact", href: "/contact" },
]
