import type { MetadataRoute } from "next";

// output: "export" では静的生成を明示する必要がある
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://santaworks-homepage.syamada125.workers.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // デザインサンプル（架空店舗デモ）はクロール対象から外す
      disallow: "/demo/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
