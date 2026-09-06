/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Guarantees instant compatibility and maximum speed for local and static deployment
  },
};

module.exports = nextConfig;
