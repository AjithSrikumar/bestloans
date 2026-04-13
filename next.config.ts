import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable for better MDX performance
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Enable compression
  compress: true,
  // Performance: generate ETags
  generateEtags: true,
};

export default nextConfig;
