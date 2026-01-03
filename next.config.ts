import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs
  },
  images: {
    formats: ['image/avif', 'image/webp'], // Modern formats
  },
};

export default nextConfig;
