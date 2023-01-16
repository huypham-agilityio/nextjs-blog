/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    minimumCacheTTL: 60, // 60s - Time to Live (TTL) for cached optimized images
    deviceSizes: [320, 768, 1024],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
