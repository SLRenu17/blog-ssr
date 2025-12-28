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
  
  // ✅ IMPORTANT: Set basePath so all assets load correctly when proxied
  basePath: '/blogs',
  assetPrefix: '/blogs',
  
  // ✅ Trailing slash for consistent routing
  trailingSlash: true,
};

export default nextConfig;
