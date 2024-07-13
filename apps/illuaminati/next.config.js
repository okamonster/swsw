/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    runtime: 'experimental-edge',
  },
}

module.exports = nextConfig
