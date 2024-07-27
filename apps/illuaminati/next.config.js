/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = withPWA({
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
})

module.exports = nextConfig
