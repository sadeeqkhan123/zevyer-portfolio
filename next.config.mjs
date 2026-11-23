/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: '/zevyer', destination: '/about', permanent: true }]
  },
}

export default nextConfig
