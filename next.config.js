/** @type {import('next').NextConfig} */
const nextConfig = {
  skipMiddlewareUrlNormalize: true,
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
}

module.exports = nextConfig
