import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // This will disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
