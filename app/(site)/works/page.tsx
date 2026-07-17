import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Santa Works の実績・プロダクト。LINEで使える記憶サポートサービス「ポケメモ」など。",
  alternates: { canonical: "/works/" },
  openGraph: {
    title: "Works｜Santa Works",
    description:
      "Santa Works の実績・プロダクト。LINEで使える記憶サポートサービス「ポケメモ」など。",
    url: "/works/",
  },
};

const samples: {
  icon: string;
  label: string;
  tone: string;
  href?: string;
  name?: string;
  thumb?: string;
}[] = [
  {
    icon: "🍜",
    label: "ラーメン店",
    tone: "漆黒×朱、縦書き明朝の力強い和",
    href: "/demo/ramen/",
    name: "麺処 ゆげや",
    thumb: "/demo/ramen/hero.jpg",
  },
  {
    icon: "✂️",
    label: "美容院",
    tone: "白磁×翠、余白の効いた洗練ミニマル",
    href: "/demo/salon/",
    name: "hair atelier 翠雨",
    thumb: "/demo/salon/hero.jpg",
  },
  {
    icon: "🏮",
    label: "居酒屋",
    tone: "藍×提灯の灯、筆文字と短冊の賑わい",
    href: "/demo/izakaya/",
    name: "大衆酒場 ほおずき",
    thumb: "/demo/izakaya/hero.jpg",
  },
  {
    icon: "💅",
    label: "ネイルサロン",
    tone: "クリーム×ラズベリー、丸ゴシックのキャンディポップ",
    href: "/demo/nail/",
    name: "nail salon こんぺいとう",
    thumb: "/demo/nail/hero.jpg",
  },
  {
    icon: "🏭",
    label: "企業サイト（製造業）",
    tone: "鉄紺×灯のアンバー、多ページ構成の堅実コーポレート",
    href: "/demo/factory/",
    name: "有限会社 灯火製作所",
    thumb: "/demo/factory/hero.jpg",
  },
  {
    icon: "🎹",
    label: "ピアノ教室",
    tone: "アイボリー×えんじ、教科書体のクラシカルな習い事",
    href: "/demo/piano/",
    name: "おとのは ぴあの教室",
    thumb: "/demo/piano/hero.jpg",
  },
];

const POKEMEMO_URL = "https://pocket-memory-501921.web.app";

const features: { img: string; title: string; body: string }[] = [
  {
    img: "/pokememo/feat-people.png",
    title: "会った人を登録",
    body: "名前とちょっとしたメモで相手を登録。専用アプリは不要、LINEの友だち追加だけで始められます。",
  },
  {
    img: "/pokememo/feat-record.png",
    title: "会話を記録",
    body: "その日話したこと・出来事をLINEでそのまま記録。ボタン操作が中心で、書くのは新しい情報のときだけ。",
  },
  {
    img: "/pokememo/feat-search.png",
    title: "次に会う前に見返す",
    body: "名前で検索、最後に話した順に一覧。会う前にさっと見返せば、会話がもっとスムーズに。",
  },
];

export default function Works() {
  return (
    <div className="pt-16">
      {/* 自社プロダクト */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Products</SectionLabel>
          <h1 className="mb-10 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            自社プロダクト
          </h1>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-accent">
                看板プロダクト
              </span>
              <h2 className="mb-3 text-2xl font-extrabold">
                ポケットメモリー（ポケメモ）
              </h2>
              <p
                className="mb-5 text-[1.05rem] font-bold leading-snug"
                style={{ color: "#e86a54" }}
              >
                会って、話して、忘れてく。
                <br />
                それ、ポケメモにお任せ。
              </p>
              <p className="mb-6 text-[0.95rem] text-muted">
                会った人のことや話した内容を、LINEでそっと記録。次に会う前に見返せば、会話がもっとスムーズに。接客・商談・対人業務のための記憶サポートサービスです。アプリのインストール不要、LINEの友だち追加だけで始められます。
              </p>
              <ul className="mb-7 flex flex-wrap gap-2">
                {["LINE Messaging API", "Python / FastAPI", "Cloud Run", "Turso"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-[0.78rem] tracking-wide text-muted"
                    >
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <a
                href={POKEMEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-[0.9rem] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                ポケメモの公式サイトを見る →
              </a>
            </div>
            <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-[#ffe9e2] to-[#fff6f2] p-8 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pokememo/hero.png"
                alt="ポケットメモリーのイメージ。スマホと会話の吹き出し。"
                width={684}
                height={661}
                className="h-auto w-full max-w-[340px]"
              />
            </div>
          </div>

          {/* 3つの特長 */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-md border border-line bg-surface p-6 text-center shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.img}
                  alt=""
                  width={200}
                  height={200}
                  aria-hidden="true"
                  className="mx-auto mb-4 h-20 w-20"
                />
                <h3 className="mb-2 text-[1.02rem] font-bold">{f.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* デザインサンプル */}
      <section
        id="samples"
        className="scroll-mt-24 border-t border-line bg-surface/55 px-6 py-20 sm:px-10 md:py-28"
      >
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Design Samples</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.4rem,3.2vw,2rem)] font-extrabold">
            デザインサンプル
          </h2>
          <p className="max-w-2xl text-muted">
            架空のお店・企業を想定したデモサイト集。「頼んだらこうなる」を実際に触って確かめられます。順次公開予定です。
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {samples.map((s) =>
              s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  className="group overflow-hidden rounded border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/45"
                >
                  <div
                    className="h-36 bg-cover bg-[center_30%] transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${s.thumb})` }}
                    aria-hidden="true"
                  />
                  <div className="p-6">
                    <h3 className="mb-1 text-[1.05rem] font-bold">
                      {s.icon} {s.label}「{s.name}」
                    </h3>
                    <p className="mb-3 text-[0.9rem] text-muted">{s.tone}</p>
                    <span className="text-[0.85rem] font-bold text-accent">
                      デモを見る →
                    </span>
                  </div>
                </a>
              ) : (
                <div
                  key={s.label}
                  className="rounded border border-dashed border-line bg-surface/60 p-7"
                >
                  <div className="mb-3 text-2xl" aria-hidden="true">
                    {s.icon}
                  </div>
                  <h3 className="mb-1 text-[1.05rem] font-bold">{s.label}</h3>
                  <p className="mb-3 text-[0.9rem] text-muted">{s.tone}</p>
                  <span className="inline-block rounded-full bg-line/50 px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-muted">
                    準備中
                  </span>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
