export const businessProfile = {
  name: "Claire Beauty",
  legalName: "Claire's Studio by Ana Savovici",
  url: "https://clairebeauty.ro",
  telephone: "+40757851882",
  email: "Anasavovici@yahoo.com",
  address: {
    locality: "Craiova",
    region: "Dolj",
    country: "RO",
  },
  sameAs: [
    "https://www.instagram.com/anasavovici_body/",
    "https://www.facebook.com/clairestudiobyana",
  ],
} as const

export const localBusinessId = `${businessProfile.url}/#localbusiness`
