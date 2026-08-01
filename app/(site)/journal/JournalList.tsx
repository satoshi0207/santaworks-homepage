"use client";

import { useState } from "react";
import Link from "next/link";
import { posts, THEMES, KINDS, type ThemeKey } from "./posts";

/**
 * ジャーナルの一覧。テーマで絞り込める。
 *
 * ⚠️ URLは `/journal/` のまま変えない。`/journal/theme/kids/` のような静的ページを
 *    増やすのは、記事が20本を超えてから（いま作ると中身1本のページができる）。
 * ⚠️ 件数は出さない。「プロダクト 2」「暮らし 1」と並ぶと棚が空いて見える。
 */
export default function JournalList() {
  const [theme, setTheme] = useState<ThemeKey | "all">("all");

  // 使われているテーマだけをチップに出す（THEMES に足しただけの空の棚は出さない）
  const used = (Object.keys(THEMES) as ThemeKey[]).filter((k) =>
    posts.some((p) => p.theme === k),
  );
  const shown = posts.filter((p) => theme === "all" || p.theme === theme);

  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="テーマで絞り込む">
        {(["all", ...used] as const).map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={theme === k}
            onClick={() => setTheme(k)}
            style={
              k === "all"
                ? undefined
                : ({ "--tc": `var(--th-${k})` } as React.CSSProperties)
            }
            className="jfilter rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.78rem] font-bold text-muted transition-colors hover:border-accent hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {k === "all" ? "すべて" : THEMES[k]}
          </button>
        ))}
      </div>

      <ul className="grid gap-5">
        {shown.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/journal/${p.slug}/`}
              style={{ "--tc": `var(--th-${p.theme})` } as React.CSSProperties}
              className={`jcard group grid overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-all hover:-translate-y-1 ${
                p.hero
                  ? "grid-cols-[4px_1fr] sm:grid-cols-[4px_15rem_1fr]"
                  : "grid-cols-[4px_1fr]"
              }`}
            >
              {/* テーマ色のレール。一覧を縦に流し読みしたとき、ここだけで話題が変わる */}
              <div className="jrail" aria-hidden="true" />

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

              <div className="p-6 sm:self-center sm:p-7">
                <div className="mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-bold tracking-[0.09em] text-muted">
                  <span className="jchip rounded-full px-2.5 py-0.5">
                    {THEMES[p.theme]}
                  </span>
                  <span>{KINDS[p.kind]}</span>
                  <time dateTime={p.date}>{p.date.replace(/-/g, ".")}</time>
                </div>
                <h2 className="jtitle mb-1.5 text-[1.15rem] font-bold leading-snug transition-colors">
                  {p.title}
                </h2>
                {/* 何の話かを名指しする1行。長い excerpt はカードに出さない
                    （検索結果とOGPの説明文としてだけ posts.ts に残してある） */}
                <p className="text-[0.9rem] leading-relaxed text-muted">{p.lede}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
