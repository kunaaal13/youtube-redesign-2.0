/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ytimg.com', 'yt3.ggpht.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
