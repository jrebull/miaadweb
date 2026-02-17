/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/smartopt/hho_phase01/presentation-redesign/out',
  assetPrefix: '/smartopt/hho_phase01/presentation-redesign/out',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
