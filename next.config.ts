import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false, 
  experimental: {
    appNavFailHandling:false,
    turbopackFileSystemCacheForDev: true,
    turbopackClientSideNestedAsyncChunking: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;