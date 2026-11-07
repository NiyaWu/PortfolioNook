/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/homework/bim-workbench',
        destination: '/homework/bim-workbench/index.html',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/homework/bim-workbench/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.blocktempo.com',
      },
    ],
  },
}

export default nextConfig
