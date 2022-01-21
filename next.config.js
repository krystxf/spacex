/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  swcMinify: false,
  optimizeCss: true,
  typescript: {
    ignoreBuildErrors: false,
  },

    images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
}
