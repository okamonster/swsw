/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
