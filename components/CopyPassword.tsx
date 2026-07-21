"use client";

import { useState } from "react";

/**
 * デザインサンプル（開発ストア）の閲覧パスワードをワンクリックでコピーするボタン。
 * カードの全面リンク（stretched link）の外側・前面に置くことで、
 * 押してもストアへ遷移せずコピーだけを行う。
 */
export default function CopyPassword({ password }: { password: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    // 親カードの全面リンクへ伝播させない（遷移を防ぐ）
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // クリップボード非対応環境では何もしない（パスは表示されているため手入力可能）
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`閲覧パスワード ${password} をコピー`}
      title="クリックでパスワードをコピー"
      className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/60 py-1.5 pl-3 pr-2.5 text-[0.66rem] font-bold tracking-wide text-white shadow-card backdrop-blur-sm transition-colors hover:bg-black/80"
    >
      <span aria-hidden="true">🔒 閲覧パス</span>
      <code className="font-mono text-[0.72rem] font-bold text-white">
        {password}
      </code>
      <span
        className={`ml-0.5 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.6rem] transition-colors ${
          copied ? "bg-white/25" : "bg-white/15"
        }`}
      >
        {copied ? (
          <>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            コピー済み
          </>
        ) : (
          <>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            コピー
          </>
        )}
      </span>
    </button>
  );
}
