import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // 🚫 Disable "N" button and overlay
  },
};

export default nextConfig;
