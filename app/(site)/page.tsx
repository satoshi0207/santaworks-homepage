import Link from "next/link";
import Motes from "@/components/Motes";
import SectionLabel from "@/components/SectionLabel";
import { FadeIn, Reveal } from "@/components/motion";

const services: {
  icon: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}[] = [
  {
    icon: "🎁",
    title: "自社プロダクト運営",
    body: "記憶と思い出をテーマにした自社サービスを開発・運営。第一弾はLINEで使える記憶サポート「ポケメモ」。",
    href: "/works/",
    cta: "ポケットメモリーを見る",
  },
  {
    icon: "🌐",
    title: "Web制作・サイト構築",
    body: "ホームページやランディングページの制作。モダンで速く、更新しやすいサイトを。実際に触れるデザインサンプルを公開中です。",
    href: "/works/#samples",
    cta: "デザインサンプルを見る",
  },
  {
    icon: "💬",
    title: "LINE Bot・業務ツール開発",
    body: "毎日使うLINEの上で動く、記録・検索・通知の仕組みづくり。小規模な業務効率化ツールの受託開発も承ります。",
  },
  {
    icon: "🤖",
    title: "AI活用支援・導入サポート",
    body: "AIツールの選定から使いこなしまで。「何から始めればいいか分からない」に、実体験ベースで伴走します。",
  },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative grid min-h-svh place-items-center overflow-hidden px-6 pb-16 pt-24 text-center">
        <Motes />
        <div className="relative max-w-4xl">
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
              Santa Works は、記憶と思い出をITでサポートする個人事業です。
              <br />
              Web制作・LINE Bot・業務ツール各種・AI活用支援まで親身になって伴走致します。
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
                className="flex flex-col rounded border border-line bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/45"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded bg-accent-soft text-xl">
                  {s.icon}
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

      {/* Works ダイジェスト */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Works</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold">
            実績・プロダクト
          </h2>
          <div className="rounded-md border border-line bg-gradient-to-br from-accent-soft to-transparent p-8 shadow-card">
            <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.12em] text-accent">
              自社プロダクト
            </span>
            <h3 className="mb-3 text-2xl font-extrabold">
              ポケットメモリー（ポケメモ）
            </h3>
            <p className="mb-6 max-w-3xl text-[0.95rem] text-muted [word-break:keep-all]">
              会った人のことや話した内容を、LINEでそっと記録。次に会う前に見返せば、会話がもっとスムーズに。
            </p>
            <Link
              href="/works/"
              className="text-[0.9rem] font-bold text-accent transition-colors hover:text-accent-strong"
            >
              くわしく見る →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface/55 px-6 py-20 text-center sm:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-[clamp(1.3rem,3vw,1.8rem)] font-extrabold">
            開発のご相談、お気軽にどうぞ
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
