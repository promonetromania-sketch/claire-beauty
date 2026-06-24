export const businessProfile = {
  name: "Claire Beauty Craiova",
  legalName: "Claire's Studio by Ana Savovici",
  locationName: "Claire's Beauty",
  url: "https://clairebeauty.ro",
  telephone: "+40757851882",
  telephoneDisplay: "+40 757 851 882",
  email: "anasavovici@yahoo.com",
  address: {
    streetAddress: "Strada Principatele Unite nr. 5",
    postalCode: "200138",
    locality: "Craiova",
    region: "Dolj",
    country: "RO",
    formatted:
      "Strada Principatele Unite nr. 5, 200138 Craiova, România",
  },
  googleMapsUrl: "https://maps.app.goo.gl/FNgVcL4CNvizAFpC7",
  /** Rating și număr recenzii Google Maps — actualizează din Google Business Profile. */
  googleReviews: {
    rating: 5,
    count: 37,
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.3816559758243!2d23.792807475777682!3d44.32266090887643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d730888dc3d1%3A0x990c543618c52764!2sClaire%E2%80%99s%20Beauty%20Masaj%20Craiova%2C%20Remodelare%20Corporala%2C%20Tratamente%20Faciale%20Craiova!5e0!3m2!1sro!2sro!4v1782300201639!5m2!1sro!2sro",
  whatsappUrl: "https://wa.me/40757851882",
  sameAs: [
    "https://www.instagram.com/anasavovici_body/",
    "https://www.facebook.com/clairestudiobyana",
  ],
} as const

export const localBusinessId = `${businessProfile.url}/#localbusiness`

export const postalAddressSchema = {
  "@type": "PostalAddress",
  streetAddress: businessProfile.address.streetAddress,
  postalCode: businessProfile.address.postalCode,
  addressLocality: businessProfile.address.locality,
  addressRegion: businessProfile.address.region,
  addressCountry: businessProfile.address.country,
} as const
