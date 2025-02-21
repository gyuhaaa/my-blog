import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname:
          "http://fastly.picsum.photos/id/472/1200/630.jpg?hmac=4pyH3MHMLet4fxNTVG9I4CRq33QsulhWt-tFSmUh4FA", // HTTP 이미지를 제공하는 도메인
        port: "", // 포트가 있다면 추가
        pathname: "/**", // 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
