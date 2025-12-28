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
  
  // ❌ REMOVE basePath and assetPrefix
  // basePath: '/blogs',
  // assetPrefix: '/blogs',
};

export default nextConfig;
