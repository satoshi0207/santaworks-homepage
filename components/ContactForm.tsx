"use client";

import { useState } from "react";

// Formspree のフォームID（例: "mnnqkdyz"）。未設定の間は送信ボタンを無効化する。
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "rounded border border-line bg-surface px-4 py-3 text-[0.95rem] text-ink transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-10 max-w-xl rounded border border-line bg-surface p-6">
        送信しました。お問い合わせありがとうございます！
        <br />
        2〜3日以内を目安にお返事します。
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid max-w-xl gap-5">
      <label className="grid gap-2 text-[0.85rem] font-bold">
        お名前
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="山田 太郎"
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-[0.85rem] font-bold">
        メールアドレス
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-[0.85rem] font-bold">
        お問い合わせ内容
        <textarea
          name="message"
          required
          placeholder="ご相談内容をご記入ください"
          className={`${inputClass} min-h-36 resize-y`}
        />
      </label>
      <button
        type="submit"
        disabled={!FORMSPREE_ID || status === "sending"}
        className="justify-self-start rounded-sm bg-accent px-11 py-3.5 font-bold tracking-[0.08em] text-white transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "送信中…" : "送信する"}
      </button>
      {!FORMSPREE_ID && (
        <p className="text-[0.78rem] text-muted">
          ※ フォームは現在準備中です。
        </p>
      )}
      {status === "error" && (
        <p className="text-[0.78rem] text-accent">
          送信に失敗しました。時間をおいてもう一度お試しください。
        </p>
      )}
    </form>
  );
}
