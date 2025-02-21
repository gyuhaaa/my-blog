import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http://192.168.0.6:3000/images/1.jpg", // HTTP 이미지를 제공하는 도메인
        port: "", // 포트가 있다면 추가
        pathname: "/**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
