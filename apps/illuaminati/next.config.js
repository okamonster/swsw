/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
