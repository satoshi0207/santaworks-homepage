import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages に静的サイトとしてデプロイする
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
