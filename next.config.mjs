import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  transpilePackages: ['gsap'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
    esmExternals: 'loose'
  }
}

export default withNextIntl(nextConfig)
