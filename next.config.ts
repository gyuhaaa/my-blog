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
        hostname: "localhost", // 로컬호스트 허용
        port: "3000", // 포트 3000 허용
        pathname: "/**", // 모든 경로 허용
      },
      {
        protocol: "http",
        hostname: "127.0.0.1", // 127.0.0.1도 별도로 등록
        port: "3000",
        pathname: "/**",
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
