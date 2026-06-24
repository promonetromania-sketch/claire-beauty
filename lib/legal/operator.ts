import { businessProfile } from "@/lib/seo/business"

export const legalOperator = {
  brand: businessProfile.name,
  legalName: businessProfile.legalName,
  url: businessProfile.url,
  email: businessProfile.email,
  phone: businessProfile.telephone,
  phoneDisplay: "+40 757 851 882",
  locality: businessProfile.address.locality,
  region: businessProfile.address.region,
  country: "România",
  lastUpdated: "7 iunie 2026",
  anspdcpUrl: "https://www.dataprotection.ro",
} as const
