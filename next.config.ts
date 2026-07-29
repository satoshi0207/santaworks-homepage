import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages に静的サイトとしてデプロイする
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // 開発サーバーを Mac から Tailscale 経由で見るため。
  // Next.js は dev リソース（HMR など）へのクロスオリジンアクセスを既定で塞ぐので、
  // ここに載っていないホストで開くと **クライアントJSが動かず、図版が透明のまま**になる
  // （journal.css の .rv は JS が .in を付けるまで opacity:0）。
  // ⚠️ 開発時だけの設定。`output: "export"` の本番ビルドには影響しない。
  allowedDevOrigins: ["100.80.244.15", "satoshi-server", "127.0.0.1", "localhost"],
};

export default nextConfig;
