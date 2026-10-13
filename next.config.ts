import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactCompiler: true,
  devIndicators: false,
  experimental: {
    appNavFailHandling: false,
    turbopackFileSystemCacheForDev: true,
    turbopackClientSideNestedAsyncChunking: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
    ],
  },
};

export default nextConfig;