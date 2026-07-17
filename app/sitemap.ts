import type { MetadataRoute } from "next";

// output: "export" では静的生成を明示する必要がある
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://santaworks.net";

// デモ（/demo/*）は noindex のため sitemap に含めない
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.8 },
    { path: "/works/", priority: 0.8 },
    { path: "/contact/", priority: 0.6 },
    { path: "/privacy/", priority: 0.3 },
    { path: "/legal/", priority: 0.3 },
  ];
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
