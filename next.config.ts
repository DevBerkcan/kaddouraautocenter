import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Allow external image domains if needed (for Mobile.de, Instagram, etc.)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mobile.de',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mobile.de',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],

    // Minimize quality slightly for better performance (default is 75)
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Production Source Maps (disable for better security)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
