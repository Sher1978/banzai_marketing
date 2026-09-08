import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: '(.*outrich\\.online|.*outrich-dubai)',
          },
        ],
        destination: '/outrich-dubai',
      },
    ];
  },
};

export default nextConfig;
