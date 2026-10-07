export type NavLink = {
  name: string
  href: string
}

export type NavGroup = {
  label: string
  items: NavLink[]
}

export type NavDropdown = {
  name: string
  shortName: string
  href: string
  items: NavLink[]
  groups?: NavGroup[]
}

export type NavItem =
  | ({ type: "link" } & NavLink)
  | ({ type: "dropdown" } & NavDropdown)

function dropdown(
  name: string,
  shortName: string,
  href: string,
  groups: NavGroup[],
): NavDropdown & { type: "dropdown" } {
  return {
    type: "dropdown",
    name,
    shortName,
    href,
    groups,
    items: groups.flatMap((group) => group.items),
  }
}

export const mainNavigation: NavItem[] = [
  { type: "link", name: "Acasă", href: "/" },
  dropdown("Masaj", "Masaj", "/masaj-craiova", [
    {
      label: "Masaj",
      items: [
        { name: "Masaj terapeutic", href: "/masaj-terapeutic-craiova" },
        { name: "Masaj anticelulitic", href: "/masaj-anticelulitic-craiova" },
        { name: "Reflexoterapie", href: "/reflexoterapie-craiova" },
      ],
    },
    {
      label: "Drenaj",
      items: [
        { name: "Drenaj limfatic", href: "/drenaj-limfatic-craiova" },
        { name: "Presoterapie", href: "/presoterapie-craiova" },
        {
          name: "Drenaj limfatic post-operator",
          href: "/drenaj-limfatic-post-operator-craiova",
        },
      ],
    },
  ]),
  dropdown("Tratamente faciale", "Faciale", "/tratamente-faciale-craiova", [
    {
      label: "Ten și fermitate",
      items: [
        { name: "Rejuvenare facială", href: "/rejuvenare-faciala-craiova" },
        { name: "HIFU facial", href: "/hifu-facial-craiova" },
        { name: "Microneedling", href: "/microneedling-craiova" },
      ],
    },
    {
      label: "Îngrijire",
      items: [
        { name: "Hydrablast", href: "/hydrablast-craiova" },
        { name: "Microdermabraziune", href: "/microdermabraziune-craiova" },
        { name: "Head Spa", href: "/head-spa-craiova" },
      ],
    },
  ]),
  dropdown("Tratamente corporale", "Corporale", "/tratamente-corporale-craiova", [
    {
      label: "Contur",
      items: [
        { name: "Remodelare corporală", href: "/remodelare-corporala-craiova" },
        { name: "Cavitație", href: "/cavitatie-craiova" },
        { name: "Electrostimulare", href: "/electrostimulare-craiova" },
      ],
    },
    {
      label: "Fermitate",
      items: [
        {
          name: "Radiofrecvență corporală",
          href: "/radiofrecventa-corporala-craiova",
        },
        { name: "HIFU corporal", href: "/hifu-corporal-craiova" },
        { name: "Piele lăsată", href: "/piele-lasata-craiova" },
      ],
    },
  ]),
  dropdown("Cicatrici și vergeturi", "Cicatrici", "/cicatrici-vergeturi-craiova", [
    {
      label: "Tehnologie",
      items: [
        {
          name: "Radiofrecvență fracționată",
          href: "/radiofrecventa-fractionata-craiova",
        },
      ],
    },
    {
      label: "Cicatrici",
      items: [
        { name: "Cicatrici post-acnee", href: "/cicatrici-acnee-craiova" },
        { name: "Cicatrici cheloide", href: "/cicatrici-cheloide-craiova" },
        { name: "Cicatrice după cezariană", href: "/cicatrice-cezariana-craiova" },
      ],
    },
    {
      label: "Vergeturi",
      items: [
        { name: "Vergeturi după sarcină", href: "/vergeturi-dupa-sarcina-craiova" },
        { name: "Vergeturi roșii și albe", href: "/vergeturi-rosii-albe-craiova" },
      ],
    },
  ]),
  { type: "link", name: "Prețuri", href: "/preturi" },
  { type: "link", name: "Blog", href: "/blog" },
  { type: "link", name: "Contact", href: "/contact" },
]
