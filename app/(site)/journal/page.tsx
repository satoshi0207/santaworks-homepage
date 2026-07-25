import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Santa Works のジャーナル。Web制作・集客・AI活用などについて、公開データや実務の視点から書いていきます。",
  alternates: { canonical: "/journal/" },
  openGraph: {
    title: "Journal｜Santa Works",
    description:
      "Web制作・集客・AI活用などについて、公開データや実務の視点から。",
    url: "/journal/",
  },
};

export default function Journal() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal plain className="mx-auto max-w-3xl">
          <SectionLabel>Journal</SectionLabel>
          <h1 className="mb-4 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            ジャーナル
          </h1>
          <p className="mb-12 max-w-2xl text-muted">
            Web制作・集客・AI活用などについて、公開データや実務の視点から書いていきます。
          </p>

          <ul className="grid gap-5">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/journal/${p.slug}/`}
                  className="group block rounded-lg border border-line bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/45 sm:p-7"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-bold tracking-[0.1em] text-muted">
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent">
                      {p.category}
                    </span>
                    <time dateTime={p.date}>{p.date.replace(/-/g, ".")}</time>
                  </div>
                  <h2 className="mb-2 text-[1.15rem] font-bold leading-snug transition-colors group-hover:text-accent">
                    {p.title}
                  </h2>
                  <p className="text-[0.9rem] leading-relaxed text-muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-[0.85rem] font-bold text-accent">
                    続きを読む →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
