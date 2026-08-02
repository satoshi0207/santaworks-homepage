import type { MetadataRoute } from "next";
import { posts } from "./(site)/journal/posts";

// output: "export" では静的生成を明示する必要がある
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://santaworks.net";

// デモ（/demo/*）は noindex のため sitemap に含めない
export default function sitemap(): MetadataRoute.Sitemap {
  // 🔴 記事のパスをここに手で書かない。真実源は `(site)/journal/posts.ts`。
  //    以前はここに一覧を写していたため、posts.ts には入っているのに sitemap から
  //    辿れない記事が2回出た（2026-07-29 の obon-uninsured／2026-08-03 の akiya）。
  //    全社ルール「真実源を複製しない。コピーは必ず食い違う」。
  //    → **記事を足すのは posts.ts だけ。ここは自動で増える。**
  //    並びは日付の昇順（古い順）。従来の手書きの並びと同じにしてある。
  const journal = [...posts]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((p) => ({ path: `/journal/${p.slug}/`, priority: 0.6 }));

  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.8 },
    { path: "/works/", priority: 0.8 },
    { path: "/journal/", priority: 0.6 },
    ...journal,
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
