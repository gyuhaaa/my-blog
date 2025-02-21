import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "fastly.picsum.photos",
        pathname: "/**", // 모든 경로 허용
      },
      {
        protocol: "http",
        hostname: "192.168.0.6",
        port: "3000",
        pathname: "/**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
