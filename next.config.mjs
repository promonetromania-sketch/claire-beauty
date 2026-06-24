/** @type {import('next').NextConfig} */
const nextConfig = {
async redirects() {
    return [
      {
        source: "/hifu-craiova",
        destination: "/hifu-facial-craiova",
        permanent: true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [32, 64, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default nextConfig
