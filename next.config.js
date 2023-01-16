/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    deviceSizes: [320, 768, 1024],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
