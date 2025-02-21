import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "fastly.picsum.photos",
        pathname: "/**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
