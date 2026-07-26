import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Santa Works のジャーナル。つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。ジャンルは決めずに書いています。",
  alternates: { canonical: "/journal/" },
  openGraph: {
    title: "Journal｜Santa Works",
    description:
      "つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。",
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
          <p className="mb-12 max-w-2xl leading-relaxed text-muted">
            つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。
            <br className="hidden sm:block" />
            ジャンルは決めずに、そのときに書きたいことを書いています。
          </p>

          <ul className="grid gap-5">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/journal/${p.slug}/`}
                  className={`group grid overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/45 ${
                    p.hero ? "sm:grid-cols-[15rem_1fr]" : ""
                  }`}
                >
                  {/* サムネイル。背景画像なので、ファイルが無くても壊れ画像にならない */}
                  {p.hero && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-accent-soft sm:aspect-auto sm:min-h-[11rem]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        style={{ backgroundImage: `url(${p.hero})` }}
                      />
                      {/* 明るい写真が背景に溶けないよう、境目だけ薄く締める */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/10" />
                    </div>
                  )}
                  <div className="p-6 sm:p-7">
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
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
