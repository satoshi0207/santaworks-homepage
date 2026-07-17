import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "Santa Works（サンタワークス）について。屋号の由来、コンセプト、代表プロフィール。",
};

export default function About() {
  return (
    <div className="pt-16">
      {/* コンセプト */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Concept</SectionLabel>
          <h1 className="mb-6 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold leading-normal">
            思い出を届ける、
            <br />
            もうひとりのサンタとして。
          </h1>
          <div className="max-w-2xl space-y-6 text-[clamp(1rem,2.2vw,1.1rem)] leading-[2.3]">
            <p>
              人の記憶は、あたたかくて、あいまいです。会った人の名前、交わした約束、大切な瞬間——忘れたくないのに、こぼれ落ちていくものがたくさんあります。
            </p>
            <p>
              Santa Works は、
              <strong className="font-bold text-accent">
                テクノロジーで記憶と思い出に寄り添う
              </strong>
              ツールやサービスをつくります。サンタクロースが思い出を届けるように、あなたの「忘れたくない」をそっと支える仕組みを。
            </p>
          </div>
        </Reveal>
      </section>

      {/* 屋号の由来 */}
      <section className="border-y border-line bg-surface/55 px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Name</SectionLabel>
          <h2 className="mb-6 text-[clamp(1.4rem,3.2vw,2rem)] font-extrabold">
            なぜ、サンタ？
          </h2>
          <p className="max-w-2xl text-[clamp(1rem,2.2vw,1.1rem)] leading-[2.3]">
            代表の姓は「山田」。
            <strong className="font-bold text-accent">
              山（さん）＋田（た）＝サンタ
            </strong>
            ——名前の中に、最初からサンタがいました。思い出を届ける存在の名を借りて、屋号は「Santa
            Works」に。
          </p>
        </Reveal>
      </section>

      {/* プロフィール */}
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Profile</SectionLabel>
          <h2 className="mb-10 text-[clamp(1.4rem,3.2vw,2rem)] font-extrabold">
            プロフィール
          </h2>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <div
              aria-hidden="true"
              className="grid h-28 w-28 shrink-0 place-items-center rounded-full border-2 border-accent bg-accent-soft text-4xl"
            >
              🎅
            </div>
            <div>
              <h3 className="text-xl font-extrabold">山田 悟司</h3>
              <p className="mb-4 text-[0.8rem] tracking-[0.14em] text-muted">
                YAMADA SATOSHI ／ Santa Works 代表
              </p>
              <div className="max-w-2xl space-y-4 text-[0.95rem] text-muted">
                <p>
                  2026年、屋号「Santa
                  Works」で開業。AIを相棒にしたものづくりで、LINEサービス「ポケメモ」などを開発・運営しています。
                </p>
                <p>
                  ガジェットとキャンプが好きで、テクノロジーとアナログな体験の両方を大切にしています。「人の記憶や思い出を支える道具」をテーマに、小さくても確実に役に立つサービスをつくり続けます。
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-surface/55 px-6 py-16 text-center sm:px-10">
        <Reveal>
          <Link
            href="/contact/"
            className="inline-block rounded-sm bg-accent px-10 py-4 text-[0.95rem] font-bold tracking-[0.08em] text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
          >
            お問い合わせ
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
