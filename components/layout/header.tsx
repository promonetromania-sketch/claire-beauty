"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ClaireImage } from "@/components/ui/claire-image"
import { claireImages } from "@/lib/images/claire-beauty"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Hand,
  Droplets,
  Waves,
  Footprints,
  Sparkles,
  PenLine,
  Layers,
  Syringe,
  Zap,
  Activity,
  Radio,
  Facebook,
  Instagram,
  MapPin,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { mainNavigation, type NavLink } from "@/lib/navigation"
import { businessProfile } from "@/lib/seo/business"
import { cn } from "@/lib/utils"

const mobileSocialLinks = [
  {
    href: "https://www.facebook.com/",
    label: "Deschide Facebook Claire Beauty",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/anasavovici_body/",
    label: "Deschide Instagram Claire Beauty",
    icon: Instagram,
  },
  {
    href: businessProfile.googleMapsUrl,
    label: "Deschide locația în Google Maps",
    icon: MapPin,
  },
] as const

const mobileSocialIconClassName =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#1f4f46] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#1f4f46]/10 hover:text-[#163a34] active:scale-95"

const submenuIcons: Record<string, LucideIcon> = {
  "/masaj-terapeutic-craiova": Hand,
  "/masaj-anticelulitic-craiova": Droplets,
  "/drenaj-limfatic-craiova": Waves,
  "/reflexoterapie-craiova": Footprints,
  "/hifu-craiova": Zap,
  "/dermapen-craiova": PenLine,
  "/microdermabraziune-craiova": Layers,
  "/microneedling-craiova": Syringe,
  "/hydrafacial-craiova": Sparkles,
  "/remodelare-corporala-craiova": Activity,
  "/electrostimulare-craiova": Zap,
  "/radiofrecventa-corporala-craiova": Radio,
}

const navTextClassName =
  "font-serif text-base font-bold tracking-[0.5px] text-[#0E2B1F]"

const navItemClassName = cn(
  navTextClassName,
  "inline-flex items-center justify-center gap-1 rounded-full px-4 py-2.5 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#D4AF37]/24 hover:text-[#0E2B1F] hover:shadow-[0_0_18px_rgba(212,175,55,0.32)]",
)

const navItemActiveClassName =
  "bg-[#0E2B1F] text-[#D4AF37] shadow-[inset_0_0_0_1px_#D4AF37]"

const navDropdownTriggerClassName =
  "inline-flex items-center justify-center rounded-full p-1.5 text-[#0E2B1F] outline-none transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#D4AF37]/24 hover:text-[#0E2B1F] hover:shadow-[0_0_18px_rgba(212,175,55,0.32)] focus-visible:bg-[#D4AF37]/24 focus-visible:text-[#0E2B1F]"

const dropdownMenuContentClassName =
  "min-w-[16rem] rounded-2xl border border-[#D4AF37]/20 bg-[#FFF9F2]/98 p-2 shadow-[0_20px_50px_rgba(14,43,31,0.14)] backdrop-blur-md"

const dropdownMenuItemClassName =
  "cursor-pointer rounded-xl px-3 py-2.5 font-serif text-[15px] font-bold tracking-[0.5px] text-[#0E2B1F] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] focus:bg-[#D4AF37]/22 focus:text-[#0E2B1F] focus:shadow-[0_0_18px_rgba(212,175,55,0.32)] data-[highlighted]:bg-[#D4AF37]/22 data-[highlighted]:text-[#0E2B1F] data-[highlighted]:shadow-[0_0_18px_rgba(212,175,55,0.32)]"

const mobileNavItemClassName = cn(
  navTextClassName,
  "flex w-full items-center justify-between rounded-full px-4 py-2.5 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#D4AF37]/24 hover:text-[#0E2B1F]",
)

const mobileSubNavItemClassName = cn(
  navTextClassName,
  "flex w-fit max-w-full items-center gap-2 rounded-full px-4 py-2 text-[15px] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#D4AF37]/24 hover:text-[#0E2B1F]",
)

const ctaButtonClassName =
  "rounded-full border border-[#D4AF37]/80 bg-[#0E2B1F] px-7 py-2.5 font-serif text-sm font-bold tracking-[0.5px] text-[#D4AF37] shadow-[0_4px_20px_rgba(14,43,31,0.2),0_0_0_1px_rgba(212,175,55,0.15)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:bg-[#0E2B1F] hover:text-[#F0D78C] hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"

function isNavLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href
}

function isDropdownNavActive(
  pathname: string,
  href: string,
  items: NavLink[],
) {
  return (
    isNavLinkActive(pathname, href) ||
    items.some((item) => isNavLinkActive(pathname, item.href))
  )
}

function SubmenuIcon({ href }: { href: string }) {
  const Icon = submenuIcons[href] ?? Sparkles

  return (
    <Icon
      className="h-4 w-4 shrink-0 text-[#D4AF37]"
      strokeWidth={1.75}
      aria-hidden
    />
  )
}

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled
          ? "glass-header-scrolled border-[#D4AF37]/25 shadow-[0_8px_32px_rgba(14,43,31,0.1)]"
          : "glass-header border-[#D4AF37]/15",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#D4AF37]/40 shadow-[0_0_16px_rgba(212,175,55,0.15)] transition-all duration-300 group-hover:ring-[#D4AF37]/65 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.28)]">
              <ClaireImage
                {...claireImages.logo}
                fill
                priority
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-xl font-bold tracking-[0.5px] text-[#0E2B1F]">
                {"Claire's Studio"}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                Body Spa
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {mainNavigation.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    navItemClassName,
                    isNavLinkActive(pathname, item.href) && navItemActiveClassName,
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  key={item.name}
                  className={cn(
                    navItemClassName,
                    isDropdownNavActive(pathname, item.href, item.items) &&
                      navItemActiveClassName,
                  )}
                >
                  <Link href={item.href} className="rounded-full px-1 py-0.5">
                    {item.name}
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={navDropdownTriggerClassName}
                      aria-label={`Deschide meniul ${item.name}`}
                    >
                      <ChevronDown className="h-4 w-4 shrink-0 opacity-90" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className={dropdownMenuContentClassName}
                    >
                      {item.items.map((subItem) => (
                        <DropdownMenuItem
                          key={subItem.href}
                          asChild
                          className={dropdownMenuItemClassName}
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center gap-2.5"
                          >
                            <SubmenuIcon href={subItem.href} />
                            <span>{subItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className={ctaButtonClassName}>
              <a href="tel:+40757851882" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Programează-te</span>
              </a>
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-0 md:hidden">
            {mobileSocialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={mobileSocialIconClassName}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden />
              </a>
            ))}
            <a
              href={`tel:${businessProfile.telephone}`}
              aria-label="Sună Claire Beauty Craiova"
              className={mobileSocialIconClassName}
            >
              <Phone className="h-[18px] w-[18px]" strokeWidth={1.85} aria-hidden />
            </a>
            <button
              type="button"
              className="ml-0.5 rounded-full p-2 text-[#0E2B1F] transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#D4AF37]/24 hover:shadow-[0_0_18px_rgba(212,175,55,0.32)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[#D4AF37]/20 glass-header md:hidden">
          <div className="space-y-2 px-4 py-6">
            {mainNavigation.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    mobileNavItemClassName,
                    isNavLinkActive(pathname, item.href) && navItemActiveClassName,
                  )}
                  onClick={closeMobileMenu}
                >
                  <span>{item.name}</span>
                </Link>
              ) : (
                <Collapsible key={item.name}>
                  <div
                    className={cn(
                      mobileNavItemClassName,
                      isDropdownNavActive(pathname, item.href, item.items) &&
                        navItemActiveClassName,
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex-1 rounded-full px-1 py-0.5"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                    <CollapsibleTrigger
                      className={navDropdownTriggerClassName}
                      aria-label={`Deschide submeniul ${item.name}`}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 opacity-90" />
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-1 pb-2 pl-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          mobileSubNavItemClassName,
                          isNavLinkActive(pathname, subItem.href) &&
                            navItemActiveClassName,
                        )}
                        onClick={closeMobileMenu}
                      >
                        <SubmenuIcon href={subItem.href} />
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ),
            )}
            <Button asChild className={cn(ctaButtonClassName, "mt-4 w-full")}>
              <a
                href="tel:+40757851882"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>Programează-te</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
