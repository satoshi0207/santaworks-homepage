import Link from "next/link";
import Motes from "@/components/Motes";
import SectionLabel from "@/components/SectionLabel";
import { FadeIn, Reveal } from "@/components/motion";
import { samples } from "./samples";

// 事業内容カードの線アイコン（絵文字を刷新）
const svg = "h-6 w-6";
const ICONS: Record<string, React.ReactNode> = {
  product: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 8H4v3h16V8zM4 11v9h16v-9M12 8v12" />
      <path d="M12 8S10.8 4 8.5 4a2 2 0 0 0 0 4H12zM12 8s1.2-4 3.5-4a2 2 0 0 1 0 4H12z" />
    </svg>
  ),
  web: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" />
    </svg>
  ),
  line: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </svg>
  ),
  ai: (
    <svg className={svg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.7 4.6L18.5 9.5l-4.8 1.9L12 16l-1.7-4.6L5.5 9.5l4.8-1.9L12 3z" />
      <path d="M19 14.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </svg>
  ),
};

const services: {
  icon: keyof typeof ICONS;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}[] = [
  {
    icon: "product",
    title: "プロダクト運営",
    body: "記憶と思い出をテーマにしたサービスを開発・運営。第一弾はLINEで使える記憶サポート「ポケメモ」。",
    href: "/works/",
    cta: "ポケットメモリーを見る",
  },
  {
    icon: "web",
    title: "Web制作・サイト構築",
    body: "ホームページやランディングページの制作。モダンで速く、更新しやすいサイトを。実際に触れるデザインサンプルを公開中です。",
    href: "/works/#samples",
    cta: "デザインサンプルを見る",
  },
  {
    icon: "line",
    title: "LINE Bot・業務ツール開発",
    body: "毎日使うLINEの上で動く、記録・検索・通知の仕組みづくり。小規模な業務効率化ツールの受託開発も承ります。",
  },
  {
    icon: "ai",
    title: "AI活用支援・導入サポート",
    body: "AIツールの選定から使いこなしまで。「何から始めればいいか分からない」に、実体験ベースで伴走します。",
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー（isolateで内部のz-indexを閉じ込め、モバイルメニューと競合させない） */}
      <section className="relative isolate grid min-h-svh place-items-center overflow-hidden px-6 pb-16 pt-24 text-center">
        <Motes />
        {/* 記憶の欠片が舞う、やわらかな光だまり（暖色×寒色の淡い光で奥行き） */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* あたたかな光の下地（ライトで効く／ダークは控えめ） */}
          <div className="absolute left-1/2 top-[38%] h-[100vmin] w-[135vmin] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#ffe0d0]/70 blur-[90px] dark:bg-transparent" />
          <div className="absolute left-1/2 top-[44%] h-[76vmin] w-[76vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.13] blur-[80px] dark:bg-accent/[0.08]" />
          <div className="absolute left-[12%] top-[20%] h-[46vmin] w-[46vmin] rounded-full bg-[#ffc2a4]/70 blur-[70px] dark:bg-[#ffcdb6]/35" />
          <div className="absolute right-[8%] bottom-[18%] h-[48vmin] w-[48vmin] rounded-full bg-accent/[0.11] blur-[80px] dark:bg-accent/[0.07]" />
          <div className="absolute left-[58%] top-[14%] h-[30vmin] w-[30vmin] rounded-full bg-[#e7d2ec]/55 blur-[60px] dark:bg-[#cfd8ef]/45" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
        />
        <div className="relative z-10 max-w-4xl">
          <FadeIn delay={0.2}>
            <p className="mb-6 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Santa Works — サンタワークス
            </p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <h1 className="mb-6 text-[clamp(1.9rem,4.6vw,3.2rem)] font-extrabold leading-[1.45] tracking-[0.02em]">
              {/* PCは1行、狭い画面では読点の位置でだけ折り返す */}
              <span className="inline-block">
                <span className="text-accent">「</span>忘れたくない
                <span className="text-accent">」</span>を、
              </span>
              <span className="inline-block">かたちに。</span>
            </h1>
          </FadeIn>
          <FadeIn delay={1.0}>
            <p className="mx-auto mb-10 max-w-xl text-[clamp(0.95rem,2vw,1.05rem)] text-muted">
              {/* フレーズ単位のinline-blockで、狭い画面でも「。」が孤立しない位置で折り返す */}
              <span className="inline-block">Santa Works は、</span>
              <span className="inline-block">記憶と思い出を</span>
              <span className="inline-block">ITでサポートする個人事業です。</span>
              <br />
              <span className="inline-block">Web制作・LINE Bot・</span>
              <span className="inline-block">業務ツール各種・</span>
              <span className="inline-block">AI活用支援まで</span>
              <span className="inline-block">親身になって伴走致します。</span>
            </p>
          </FadeIn>
          <FadeIn delay={1.4}>
            <Link
              href="/contact/"
              className="inline-block rounded-sm bg-accent px-10 py-4 text-[0.95rem] font-bold tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.7rem] uppercase tracking-[0.3em] text-muted"
        >
          Scroll
          <span className="mx-auto mt-2 block h-10 w-px bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* コンセプト */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Concept</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-normal">
            思い出を届ける、
            <br />
            もうひとりのサンタとして。
          </h2>
          <p className="max-w-2xl text-[clamp(1rem,2.2vw,1.15rem)] leading-[2.3] [word-break:keep-all] [overflow-wrap:anywhere]">
            人の記憶は、あたたかくて、あいまいです。
            <br />
            会った人の名前、交わした約束、大切な瞬間——忘れたくないのに、こぼれ落ちていくものがたくさんあります。Santa
            Works は、
            <strong className="font-bold text-accent">
              テクノロジーで記憶と思い出に寄り添う
            </strong>
            ツールやサービスをつくります。
          </p>
          <Link
            href="/about/"
            className="mt-8 inline-block text-[0.9rem] font-bold text-accent transition-colors hover:text-accent-strong"
          >
            Santa Works について →
          </Link>
        </Reveal>
      </section>

      {/* 事業内容 */}
      <section className="border-y border-line bg-surface/55 px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mb-4 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold">
            事業内容
          </h2>
          <p className="max-w-2xl text-muted">
            小さく、確実に、役に立つ。個人事業ならではの距離感で伴走します。
          </p>
          <div className="mt-10 grid gap-5 sm:auto-rows-fr sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-xl border border-line bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/45 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-soft to-accent-soft/30 text-accent ring-1 ring-accent/10 transition-transform group-hover:scale-105">
                  {ICONS[s.icon]}
                </div>
                <h3 className="mb-2 text-[1.05rem] font-bold">{s.title}</h3>
                <p className="text-[0.95rem] leading-[1.85] text-muted">
                  {s.body}
                </p>
                {s.href && (
                  <Link
                    href={s.href}
                    className="mt-auto inline-block pt-4 text-[0.88rem] font-bold text-accent transition-colors hover:text-accent-strong"
                  >
                    {s.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Works: 自社プロダクト + デザインサンプル */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal plain className="mx-auto max-w-5xl">
          <SectionLabel>Works</SectionLabel>
          <h2 className="mb-8 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold">
            実績・プロダクト
          </h2>

          {/* ポケメモ（実物ビジュアル入り） */}
          <div className="grid items-center gap-8 rounded-2xl border border-line bg-gradient-to-br from-accent-soft to-transparent p-8 shadow-card md:grid-cols-2 md:p-10">
            <div>
              <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-accent">
                看板プロダクト
              </span>
              <h3 className="mb-3 text-2xl font-extrabold">
                ポケットメモリー（ポケメモ）
              </h3>
              <p
                className="mb-4 text-[1.02rem] font-bold leading-snug"
                style={{ color: "#e86a54" }}
              >
                会って、話して、忘れてく。
                <br />
                それ、ポケメモにお任せ。
              </p>
              <p className="mb-6 max-w-md text-[0.95rem] text-muted [word-break:keep-all]">
                会った人のことや話した内容を、LINEでそっと記録。次に会う前に見返せば、会話がもっとスムーズに。
              </p>
              <Link
                href="/works/"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-[0.9rem] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                くわしく見る →
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#ffe9e2] to-[#fff6f2] p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pokememo/hero.webp"
                alt="ポケットメモリーのイメージ。スマホと会話の吹き出し。"
                width={684}
                height={661}
                className="h-auto w-full max-w-[300px]"
              />
            </div>
          </div>

          {/* デザインサンプル ショーケース */}
          <div className="mt-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-extrabold">
                  デザインサンプル
                  <span className="ml-2 align-middle text-[0.8rem] font-bold text-accent">
                    全{samples.length}業種
                  </span>
                </h3>
                <p className="mt-1 max-w-xl text-[0.92rem] text-muted [word-break:keep-all]">
                  架空のお店・企業を想定したデモ集。「頼んだらこうなる」を実際に触れます。
                </p>
              </div>
              <Link
                href="/works/#samples"
                className="shrink-0 text-[0.9rem] font-bold text-accent transition-colors hover:text-accent-strong"
              >
                すべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {samples.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative overflow-hidden rounded-lg border border-line shadow-card transition-all hover:-translate-y-1 hover:border-accent/45"
                >
                  {s.badge ? (
                    <span className="absolute right-2 top-2 z-10 rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.08em] text-white shadow-card">
                      {s.badge}
                    </span>
                  ) : null}
                  <img
                    src={s.thumb}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={450}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-3 pb-2.5 pt-8">
                    <span className="block text-[0.82rem] font-bold leading-tight text-white">
                      {s.name}
                    </span>
                    <span className="mt-0.5 block text-[0.64rem] text-white/75">
                      {s.icon} {s.label}
                    </span>
                    {s.password ? (
                      <span className="mt-1 block text-[0.6rem] leading-tight text-white/70">
                        🔒 ストアパス:{" "}
                        <span className="font-mono font-bold text-white/90">
                          {s.password}
                        </span>
                      </span>
                    ) : null}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface/55 px-6 py-20 text-center sm:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-[clamp(1.3rem,3vw,1.8rem)] font-extrabold [word-break:keep-all] [overflow-wrap:anywhere]">
            Webサイトの作成・開発のご相談、
            <wbr />
            お気軽にどうぞ
          </h2>
          <p className="mb-8 text-muted">
            「こんなことできる？」の段階から歓迎です。
          </p>
          <Link
            href="/contact/"
            className="inline-block rounded-sm bg-accent px-10 py-4 text-[0.95rem] font-bold tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            お問い合わせ
          </Link>
        </Reveal>
      </section>
    </>
  );
}
