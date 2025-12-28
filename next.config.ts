import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  
  // ✅ Image optimization for WordPress images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  
  // ✅ CRITICAL: This tells Next.js all routes are under /blogs
  basePath: '/blogs',
  assetPrefix: '/blogs',
};

export default nextConfig;
